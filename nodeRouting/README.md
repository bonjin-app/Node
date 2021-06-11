# Node Routing

GET /admin
GET /admin/products


# Node Nunjucks
autoescape: true : 문자열의 html문법을 무시하는 옵션.
autoescape: false : 문자열의 html문법을 인식하는 옵션.

Template
{{ message | safe }} : safe 옵션을 넣으면 안전하다고 판단하여 html문법을 인식

# NodeMon
js, html 감지 옵션
npx nodemon -e js,html