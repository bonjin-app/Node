# Docker
전 세계적으로 사용 되고 있는 컨테이너 가상화 플랫폼

- 설치
curl -s https://get.docker.com/ | sudo sh

- 버전 확인
docker version

- 현재 실행중인 컨테이너 확인
docker ps

- 전체 컨테이너 확인
docker ps -a

- 이미지 검색
docker search ubuntu

- 이미지 확인
docker images

- 이미지 삭제
docker rmi [이미지명]
docker rmi nginx

- 컨테이너 삭제
docker rm [컨테이너id]

- sudo 없이 유저 관리자 권한
sudo usermod -aG docker $USER
or
sudo usermod -aG docker 'userid'

- ubuntu 설치
docker pull ubuntu:latest

- Docker HUB
https://hub.docker.com/

- 이미지 실행
docker run ubuntu:latest /bin/echo 'Hello World'

docker run -it centos /bin/bash
이미지가 없다면 pull받고 실행

- Nginx 를 가져와서 웹서버를 띄워보기
docker run -d -p 80:80 --name [컨테이너이름] nginx
-d 옵션으로 백그라운드 실행.
-p 포트

- 컨테이너 정지
docker stop [컨테이너id]

- 컨테이너 시작
docker start [컨테이너id]

- 실행 종료
exit


# Dockerfile
- FROM 
기반이 되는 이미지 레이어입니다.
<이미지 이름>:<태그> 형식으로 작성 
ex) ubuntu:14.04

- MAINTAINER 
메인테이너 정보입니다.

- RUN 
도커이미지가 생성되기 전에 수행할 쉘 명령어

- VOLUME 
VOLUME은 디렉터리의 내용을 컨테이너에 저장하지 않고 호스트에 저장하도록 설정합니다. 
데이터 볼륨을 호스트의 특정 디렉터리와 연결하려면 docker run 명령에서 -v 옵션을 사용해야 합니다. 
ex) -v /root/data:/data

- CMD
컨테이너가 시작되었을 때 실행할 실행 파일 또는 셸 스크립트입니다. 
해당 명령어는 DockerFile내 1회만 쓸 수 있습니다.

- WORKDIR  
CMD에서 설정한 실행 파일이 실행될 디렉터리입니다.

- EXPOSE 
호스트와 연결할 포트 번호입니다.


- Dockerfile Image생성
docker build -t test .

- Docker Container bash접속
docker exec -it [컨테이너id] /bin/bash
