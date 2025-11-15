@echo off
title Portfolio Server
cd /d C:\workspace_JS\portfolio

echo ==========================================
echo  🚀 Launching Portfolio at:
echo      http://127.0.0.1:8000
echo ==========================================
echo.

python -m http.server 8000 --bind 127.0.0.1

echo.
echo Server stopped. Press any key to exit...
pause >nul
