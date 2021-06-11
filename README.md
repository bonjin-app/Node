# Node

Node.js란
- 웹 브라우저에서 쓰이는 자바스크립트를 서버에서 사용가능(자바스크립트 문법 서버에서 사용가능)
- V8: 크롬에 탑재된 자바스크립트 엔진
- 대용량 서비스를 위해 Ryan Lienhart Dahl이 개발
- https://nodejs.org/ko/download/

# NPM
- Node Package Manager
- https://www.npmjs.com/
- npm install, npm update

# Nodemon
- nodemon을 사용하여 hot reload

Linux
- Global 설치
npm install -g nodemon 
or
sudo npm install -g nodemon

명령어 
nodemon index.js

Window
1. npm init -y
2. scripts -> start: "nodemon index.js" 명령어 추가 
3. "npx nodemon index.js" nodemon이 설치가 안되어있다면 설치하고 실행


# Express
- 미들웨어
  . 로그인을 해야만 접속할 수 있게

# Morgan
- npm install margan
- 사용자가 어떤 요청을 하는지 콘솔로 확인

출처 
- [위키백과](https://ko.wikipedia.org/wiki/Node.js)
