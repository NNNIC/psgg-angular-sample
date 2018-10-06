@echo off
cd /d %~dp0
cd my-app
echo :
echo : npm Install
echo : 
echo : continue?
npm install
pause