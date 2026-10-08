param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet("start", "stop")]
    [string]$Action
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Port = 8765
$Url = "http://127.0.0.1:$Port/"
$PidFile = Join-Path $env:TEMP "365carenav.pid"

function Get-ListenerPids {
    $lines = netstat -ano | Select-String ":$Port\s"
    $ids = @()
    foreach ($line in $lines) {
        if ($line.Line -notmatch "LISTENING") { continue }
        $parts = ($line.Line -split "\s+") | Where-Object { $_ -ne "" }
        $ids += [int]$parts[-1]
    }
    return $ids | Select-Object -Unique
}

function Stop-CareNav {
    $ids = @()
    if (Test-Path $PidFile) {
        $saved = Get-Content $PidFile -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($saved -match "^\d+$") { $ids += [int]$saved }
    }
    $ids += Get-ListenerPids
    $ids = $ids | Where-Object { $_ -gt 0 } | Select-Object -Unique
    if (-not $ids) {
        Write-Host "365 CareNav is not running."
        Remove-Item $PidFile -ErrorAction SilentlyContinue
        return
    }
    foreach ($procId in $ids) {
        try {
            Stop-Process -Id $procId -Force -ErrorAction Stop
            Write-Host "Stopped 365 CareNav (PID $procId)."
        } catch {
            Write-Host "PID $procId was not running."
        }
    }
    Remove-Item $PidFile -ErrorAction SilentlyContinue
}

function Start-CareNav {
    $existing = @(Get-ListenerPids)
    if ($existing.Count -gt 0) {
        Write-Host "365 CareNav is already running at $Url"
        Start-Process $Url
        return
    }
    $python = Get-Command python -ErrorAction SilentlyContinue
    if (-not $python) {
        Write-Host "Python was not found. Install Python, then run this script again."
        exit 1
    }
    $proc = Start-Process -FilePath $python.Source -ArgumentList "-m", "http.server", "$Port" -WorkingDirectory $Root -PassThru -WindowStyle Hidden
    Set-Content -Path $PidFile -Value $proc.Id
    $ready = $false
    for ($i = 0; $i -lt 20; $i++) {
        Start-Sleep -Milliseconds 250
        if (@(Get-ListenerPids).Count -gt 0) { $ready = $true; break }
    }
    if (-not $ready) {
        Write-Host "365 CareNav did not start. Check that port $Port is free."
        exit 1
    }
    Write-Host "365 CareNav started at $Url"
    Start-Process $Url
}

if ($Action -eq "stop") {
    Stop-CareNav
} else {
    Start-CareNav
}
