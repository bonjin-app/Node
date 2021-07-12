
# centOS 이미지를 기반으로 작성
FROM centos:latest

# 아파치 설치
RUN yum install -y httpd

# 현재 폴더의 index.html파일을 아파치 첫화면으로 복사
COPY index.html /var/www/html/

# 아파치 실행
CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND" ]