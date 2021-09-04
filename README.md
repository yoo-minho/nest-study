<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

### NEST.JS

아키텍쳐를 갖춘, 확장성이 용이한 NODE 환경의 프레임워크


### 용어 비유
0. COMMON - { END_POINT - BUSINESS_LOGICS }
1. EXPRESS - { CONTROLLER - PROVIDER ( SERVICE ... ) }
2. NEST.JS - { ROUTE - CONTROLLER }

### 주요 명령어

```shell
$ nest g module boards
$ nest g controller boards --no-spec
$ nest g service boards --no-spec
```

### 개념 비유
1. REACT의 STATE 관리
    - useState 선언하여 STATE 등록
2. NEST의 PROVIDER ( Service, Repository ... ) 관리
    - @Injectable 데코레이션으로 프로바이더 등록


ㄴ Service : 데이터 유효성, 데이터 CRUD 등

DTO : Data Transfer Object
계층간 데이터 교환을 위한 객체이며, Nest.js에서는 class를 추천!
데이터 유효성 체크, 안정적인 코드

