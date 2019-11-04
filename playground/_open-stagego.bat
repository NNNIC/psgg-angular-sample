cd /d %~dp0
if exist m00/doc/TestControl.psgg goto :_open

start  statego
:: Please set path for SYN-G-GEN if it does not work
pause
exit

:_open
start m00/doc/TestControl.psgg
pause