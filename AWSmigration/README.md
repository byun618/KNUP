# KNUP

## 목차
[1. 프로젝트 개요](#프로젝트-개요)  
[2. 개발 환경](#개발-환경)  
[3. 개발 파트](#개발-파트)     
[4. 개발 과정](#개발-과정)    
[5. 개발 계획](#개발-계획)       
[6. 개발 리뷰](#개발-리뷰)    
[7. Getting Started](#Getting-Started)   

## 프로젝트 개요 (2020.03 - )
* **명칭**  
**K**yunpook **N**ational **U**niversity  **P**rint system
* **장르**  
Web Util Application
* **개요**  
카카오 로그인을 통하여 별도의 저장매체 없이 빠르게 인쇄
* **소개**   
교내의 복사실 및 학교 앞 편의점에서 인쇄를 할 수 있는 환경이 있지만, 별도의 저장매체 및 이메일을 이용하여야 하고, 한글 및 워드 등 별도의 프로그램을 통하여 열람 및 인쇄를 하여야 한다. KNUP은 이 모든 작업이 웹에서 이루어 지기에 저장매체를 휴대할 일이 없고, 웹에서 열람 및 인쇄를 해서 별도 프로그램 로딩시간을 단축할 수 있다.

## 개발 환경
* AWS
    * EC2, LoadBalancer를 이용하여 클라우드 환경에서 서버 구동
    * RDS MySQL를 활용하여 클라우드 환경에서 데이터베이스 구축
    * S3를 이용하여 인쇄 요청 파일을 보관
    * IAM 정책을 통해 액세스 컨트롤
* NodeJS
    * 서버 및 EJS 엔진을 이용한 웹페이지 작성

##### *졸업작품 일정이 마무리되고 개인적으로 추가 개발*

## 개발 파트
크게 네가지 파트, **서버**, **DB**, **UI**, **AWS**   
### 내가 맡은 파트
* PM(Project Manager) 역할로 프로젝트 계획 및 전반적인 파트 진행
* 서버
    * 라우팅
    * 서버 설정
    * DB 연동
    * 파일 로드 후 브라우저에 띄우기
* DB 
    * 데이터베이스 설계
* AWS 
    * 파일 스토리지를 S3로 이관
    * 서버를 EC2로 이관, DB를 RDS로 이관 

## 개발 과정
졸업 작품으로 **3명**이서 팀을 이뤄 진행   
처음에는 로컬 환경에서 개발 시작    
졸업작품 일정이 마무리되고, 개인적으로 개발 시작    
* *EC2로 서버를 옮기고, RDS로 DB 구축*
* LoadBalancer를 통해 장애, 재해 그리고 과도한 트래픽 집중에 대비
* *파일 업로드 스토리지를 **S3**로 대체, 폴더 정리 및 환경설정 부문 개발(2020.11.01)*

## 개발 계획
* ~~_AWS 이관(2020.10.30)_~~
* ~~_폴더(라우팅) 정리(2020.10.30)_~~
* ~~_환경변수 및 환경설정 부분(2020.10.30)_~~
* _AWS AutoScaling(2020.11.02)_
* _AWS CLI 또는 Shell Script로 AWS 구축도 개발할 예정(AWS Management Console이 아닌)(2020.11.02)_

## 개발 리뷰
처음으로 제대로 진행한 팀 프로젝트로 알고 있던대로 많은 어려움이 있었다. 개발자체에 대한 어려움보다는 협업에 관한 점이 특히 어려웠다. 개개인의 스케줄을 맞춰 일정계획을 수립하고, Git을 이용하여 프로젝트를 관리하고, 그 사이 발표 준비도 하는 등에 있어 쉽지만은 않았다. 하지만, 이 프로젝트를 통해 협업이라는 업무에 익숙해지고, Git을 통해 코드관리 능력도 많이 성장한 것 같다. 아쉬운 점으로는 개발일지나 개발히스토리 같은 것들을 남기지 못해 기억에 의존한 리뷰 밖에 하지 못한다는 점이다.(함부로 브랜치 지우면 안됨;;;)

## Getting Started

* ### development(로컬환경에서 서버 구동)
    1. 카카오 디벨로퍼에서 내 애플리케이션 생성 및 카카오 로그인 활성화 ON (https://developers.kakao.com/)  
    1-1. Redirect URI 설정. _http://localshot:<원하는 포트번호>/<리다이렉트할 경로>_
    2. AWS IAM 생성 및 사용할 Bucket 생성
    3. NodeJS 설치
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
        AWSBUCKETNAME = 3번에서 생성한 Bucket 이름
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
        10-1. [문서, 스프레드시트, 프레젠테이션으로 Office 버전 수정 확장프로그램](#https://chrome.google.com/webstore/detail/office-editing-for-docs-s/gbkeegbaiigmenfmjfclcdgdpimamgkj?hl=ko) 설치    
        10-2 브라우저에서 실행
    ```
        localhost:<포트번호>/KNUP
    ```
    ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/27637757/97848656-be1cde80-1d34-11eb-998d-d4513c2bdd00.gif)

* ### deployment(AWS에서 서버 구동)
    1. AWS 구축     
        1-1. 설계

        <img width="838" alt="스크린샷 2020-11-02 오후 10 56 29" src="https://user-images.githubusercontent.com/27637757/97876098-ad815e00-1d5e-11eb-8f18-06efeb2986b0.png">      

        1-2. EC2
        * NAT Instance : Community AMIs - nat 검색  - 맨 위에 있는 것
        * Web Server : Ubuntu Server 18.04 LTS (HVM), SSD Volume Type   
        * LoadBalancer 설정 및 생성

        1-3. VPC : 두 개의 AZ, 하나의 public subnet, 2개의 privaste subnet   
        1-4. RDS : MySQL - free tier     
        1-5. S3 : Bucket 생성    
        1-6. Policy : S3 Bucket의 접근 정책 생성 및 EC2 Web Server에 할당
        ```
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": "s3:ListAllMyBuckets",
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": "s3:ListBucket",
                    "Resource": "arn:aws:s3:::knup"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:GetObject",
                        "s3:PutObject"
                    ],
                    "Resource": "arn:aws:s3:::knup/*"
                }
            ]
        }
        ```

    2. 카카오 디벨로퍼에서 내 애플리케이션 생성 및 카카오 로그인 활성화 ON (https://developers.kakao.com/)  
    2-1. Redirect URI 설정. _http://<로드밸런서 URL>/<리다이렉트할 경로>_
    3. Web Server 인스턴스에 접속 후, NodeJS 설치   
        3-1. pm2 모듈 설치
        ```
        npm install -g pm2
        ```
    4. git repo 클론
        ```
        git clone https://github.com/byun618/KNUP.git
        ```
    5. AWSMigration 폴더로 이동
    6. npm 모듈 설치
        ```
        npm install
        ```
    7. bin폴더 내에 .env 생성
        ```
        VERSION = deployment
        PORT = 8080
        DEPHOST = AWS 로드밸런서 URL
        DBDEPUSERNAME = DB 유저 이름
        DBDEPPASSWORD = DB 유저 패스워드
        DBDEPDATABASE = DB database 이름
        DBDEPHOST = AWS RDS 엔드포인트
        DBDIALECT = mysql
        DBOPERATORALIASES = false
        AWSBUCKETNAME = Bucket 이름
        AWSREGION = ap-northeast-2
        KAKAKORESTAPIKEY = Kakao REST API KEY
        KAKAOREDIRECTURI = <리다이렉트할 경로>(without host)
        KAKAOAUTHHOST = https://kauth.kakao.com
        KAKAOAPIHOST = https://kapi.kakao.com
        KAKAOTOKENURI = /oauth/token
        KAKAOUSERURI = /v2/user/me
        KAKAOLOGOUTURI = /v1/user/logout
        KAKAOUNLINKURI = /v1/user/unlink
        ```
    8. pm2를 이용하여 실행  
        8-1. pm2로 start    
        ```
        pm2 start www.js
        ```
        8-2. 인스턴스 실행시 서버도 같이 실행되게 설정
        ```
        pm2 startup www
        ``` 
        이 후에 나온 sudo ~ 코드 복사, 실행   
    ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/27637757/97881693-11f3eb80-1d66-11eb-851b-9cc9fb6f76db.gif)    
    9. 크롬 브라우저 실행  
    9-1. [문서, 스프레드시트, 프레젠테이션으로 Office 버전 수정 확장프로그램](#https://chrome.google.com/webstore/detail/office-editing-for-docs-s/gbkeegbaiigmenfmjfclcdgdpimamgkj?hl=ko) 설치    
    9-2 브라우저에서 실행
    ```
        AWS Loadbalancer DNS/KNUP
    ```
    ![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/27637757/97881729-1ae4bd00-1d66-11eb-81da-e0e96460f3fa.gif)
