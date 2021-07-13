# Redis

### Redis 개요 및 설치
- Redis란
메모리에 데이터를 저장
C언어로 작성

- 용도
1. 사용자의 세션 커버
2. 웹페이지 캐싱

- 설치
 Mac
 brew install redis

 docker run -p 6379:6379 redis



### Redis 사용하기 
- 컨테이너 접속
docker exec -it [컨테이너id] /bin/bash

- 서버를 띄운다
redis-server

- 사용한다
redis-cli

- 데이터 타입
Strings
Lists
Sets
Hashes

데이터 설정: set [변수명] [값]
데이터 가져오기: get [변수명]
만료시간 설정: expire [변수명] [시간]
만료시간 확인: ttl [변수명]
전체 KEY조회: keys *
LIKE KEY조회: keys *[KEY]*

- Lists
lpush num_lists 2
lpush num_lists 1
lrange num_lists 0 -1
rpush num_lists 3
rpush num_lists 3
lrange num_lists 0 -1

- Sets
sadd num_sets 1
sadd num_sets 2
smembers num_sets
sadd num_sets 3
sadd num_sets 3
smembers num_sets

- Hashes
fruit: {
    orange: 2000,
    apple: 1000
}
hmset fruit orange 2000 apple 1000
hmget fruit orange

### Redis 캐싱

### Redis 세션
