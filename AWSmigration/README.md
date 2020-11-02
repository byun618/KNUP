# KNUP

## 목차
[1. 프로젝트 개요](#프로젝트-개요)  
[2. 개발환경](#개발환경)    
[3. Getting Started](#Getting-Started)   

## 프로젝트 개요
* **명칭**  
**K**yunpook **N**ational **U**niversity  **P**rint system
* **장르**  
Web Util Application
* **개요**  
카카오 로그인을 통하여 별도의 저장매체 없이 빠르게 인쇄
* **소개**   
교내의 복사실 및 학교 앞 편의점에서 인쇄를 할 수 있는 환경이 있지만, 별도의 저장매체 및 이메일을 이용하여야 하고, 한글 및 워드 등 별도의 프로그램을 통하여 열람 및 인쇄를 하여야 한다. KNUP은 이 모든 작업이 웹에서 이루어 지기에 저장매체를 휴대할 일이 없고, 웹에서 열람 및 인쇄를 해서 별도 프로그램 로딩시간을 단축할 수 있다.

## 개발환경
* AWS
    * EC2, LoadBalancer를 이용하여 클라우드 환경에서 서버 구동
    * RDS MySQL를 활용하여 클라우드 환경에서 데이터베이스 구축
    * S3를 이용하여 인쇄 요청 파일을 보관
    * IAM 정책을 통해 액세스 컨트롤
* NodeJS
    * 서버 및 EJS 엔진을 이용한 웹페이지 작성

## Getting Started

* ### development(로컬환경에서 서버 구동)
    1. NodeJS 설치
    2. 카카오 디벨로퍼에서 내 애플리케이션 생성 및 카카오 로그인 활성화 ON (https://developers.kakao.com/)  
    2-1. Redirect URI 설정. http://localshot:<원하는 포트번호>/<리다이렉트할 경로>
    3. AWS IAM 생성 및 사용할 Bucket 생성
    4. MySQL 설치   
        4-1. 유저 및 데이터베이스 생성
    5. git repo 클론
    ```
      git clone https://github.com/byun618/KNUP.git
    ```
    6. AWSMigration 폴더로 이동
    7. npm 모듈 설치
    ```
      npm install
    ```
    8. bin폴더 내에 .env 생성
    ```
        VERSION = development
        PORT = 원하는 포트 번호
        DEVHOST = http://localhost
        DBDEVUSERNAME = DB 유저이름
        DBDEVPASSWORD = DB 유저패스워드
        DBDEVDATABASE = DB database 이름
        DBDEVHOST = localhost
        DBDIALECT = mysql
        DBOPERATORALIASES = false
        AWSACCESSKEYID = AWS IAM 액세스 키 아이디
        AWSSECRETACCESSKEY = AWS IAM 시크릿 액세스 키
        AWSBUCKETNAME = 
        AWSREGION = S3 Bucket이 있는 region
        KAKAKORESTAPIKEY = Kakao REST API KEY
        KAKAOREDIRECTURI = <리다이렉트할 경로>(without host)
        KAKAOAUTHHOST = https://kauth.kakao.com
        KAKAOAPIHOST = https://kapi.kakao.com
        KAKAOTOKENURI = /oauth/token
        KAKAOUSERURI = /v2/user/me
        KAKAOLOGOUTURI = /v1/user/logout
        KAKAOUNLINKURI = /v1/user/unlink
    ```
    9. 터미널 및 cmd에서 bin 폴더로 이동 후, 실행
    ```
        node www
    ```

    ![ezgif com-gif-maker](https://user-images.githubusercontent.com/27637757/97846975-31712100-1d32-11eb-8e33-b43f34b6091b.gif) 

    10. 크롬 브라우저 실행
        9-1. [문서, 스프레드시트, 프레젠테이션으로 Office 버전 수정 확장프로그램](#https://chrome.google.com/webstore/detail/office-editing-for-docs-s/gbkeegbaiigmenfmjfclcdgdpimamgkj?hl=ko) 설치
    11. 브라우저에서 실행
    ```
        localhost:<포트번호>/KNUP
    ```
    ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/27637757/97848656-be1cde80-1d34-11eb-998d-d4513c2bdd00.gif)
