# KNUP

## 목차
[1. 프로젝트 개요](#프로젝트-개요)  
[2. 개발 환경](#개발-환경)  
[3. 개발 파트](#개발-파트)     
[4. 개발 과정](#개발-과정)       
[5. Getting Started](#Getting-Started)  
[6. 기타 링크](#기타-링크) 

## 프로젝트 개요 (2020.03 - 2020.10)
* **명칭**  
**K**yunpook **N**ational **U**niversity  **P**rint system
* **장르**  
Web Util Application
* **개요**  
**3명**(`변상현,송동명,박유민`)이서 팀을 이뤄 진행   
카카오 로그인을 통하여 별도의 저장매체 없이 빠르게 인쇄
* **소개**   
교내의 복사실 및 학교 앞 편의점에서 인쇄를 할 수 있는 환경이 있지만, 별도의 저장매체 및 이메일을 이용하여야 하고, 한글 및 워드 등 별도의 프로그램을 통하여 열람 및 인쇄를 하여야 한다. KNUP은 이 모든 작업이 웹에서 이루어 지기에 저장매체를 휴대할 일이 없고, 웹에서 열람 및 인쇄를 해서 별도 프로그램 로딩시간을 단축할 수 있다.

## 개발 환경
* NodeJS
    * 서버 및 EJS 엔진을 이용한 웹페이지 작성
* MySQL
    * 파일 정보 관리
* AWS
    * 시연 및 테스트

## 개발 파트
크게 네가지 파트, **서버**, **DB**, **UI**, **AWS**   
* 서버 : `변상현 송동명 박유민`
* DB : `박유민 변상현`
* UI : `송동명 박유민`
* AWS : `변상현`

## 개발 과정
* 1학기에는 UI는 크게 신경쓰지 않고, 서버, DB 개발에 집중    
* 2학기에 UI 개발 
* 시연 및 테스트를 위해 AWS 이용

## Getting Started
1. 카카오 디벨로퍼에서 내 애플리케이션 생성 및 카카오 로그인 활성화 ON (https://developers.kakao.com/)  
1-1. Redirect URI 설정. _http://localshot:<원하는 포트번호>/<리다이렉트할 경로>_
2. NodeJS 설치
3. MySQL 설치   
    4-1. 유저 및 데이터베이스 생성
4. git repo 클론
```
git clone https://github.com/byun618/KNUP.git
```
5. npm 모듈 설치
```
npm install
```
6. KNUP_Server/bin/db/db-config.json 생성
```
{
    "development" : {
        "username" : "knup",
        "password" : "knup",
        "database" : "knup",
        "host" : "localhost"
        "dialect" : "mysql",
        "operatorAliases" : false 
    },
    "aws" : {
        "username" : "admin",
        "password" : "adminpw",
        "database" : "knup",
        "host" : AWS RDS End Point,
        "dialect" : "mysql",
        "operatorAliases" : false

    }
}
```
7. KNUP_Server/.env 생성
```
PORT = 3000
REST_API_KEY = 
REDIRECT_URI = 
```
8. 기타 설정 수정  
    * 업로드 할 파일 위치
    * 기타 URL, 경로 확인
9. 터미널 및 cmd에서 bin 폴더로 이동 후, 실행
```
node www
```
10. 크롬 브라우저 실행  
    10-1. [문서, 스프레드시트, 프레젠테이션으로 Office 버전 수정 확장프로그램](#https://chrome.google.com/webstore/detail/office-editing-for-docs-s/gbkeegbaiigmenfmjfclcdgdpimamgkj?hl=ko) 설치    
    10-2 브라우저에서 실행
```
localhost:<포트번호>/KNUP
```
## 기타 링크
* 변상현    
https://github.com/byun618
* 송동명    
https://github.com/myungsworld
* 박유민    
https://github.com/yuminee
* 졸업작품 발표 및 시연 영상    
https://youtu.be/6-P44pvRiuo