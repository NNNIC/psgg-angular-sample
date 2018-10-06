@echo off
echo : 
echo : Clear doc and src folder of SYN-G-GEN
echo :
echo : continue?
pause
cd /d %~dp0
del /q m00\doc\*.*
del /s /q m00\my-app\src\app\statesrc\*.*
pause