# 인스타그램 커버 
인스타그램 커버 화면 클론하기 [figma 목업](https://www.figma.com/design/5ak8oovhdcw2zclvjufniv/instagram-template-2.0--preview-?t=8k6m5ueih7ajx1dn-0)

![화면](https://github.com/jobcodebreak/instagram-cover/blob/layout/preview.png?raw=true)



### 🗂️ 디렉토리 구조
```text
src/- 
├── assets
│
├── pages
│
├── components/ 
│
├── hooks/
│
└── store/
```



### 🪾 git 브렌치 구조
```text
* main
  |
  *--- dev
        |
        *--- layout 
        |      |
        |      *--- mainpage(작업완료->삭제)
        |      |
        |      *--- profilepage
        |      |
        |      *--- searchepage
        |      
        *--- feature
               |
               *--- mainpage/random image
               |
               *--- mainpage/carousel
               |
               *--- profilepage/fullscreen & carousel
```



### 🗓️ 일정
- 5.19 ~ 5.20 : route, layout, pages 외관 (그래픽 assets 추가)
- 5.21 ~ 5.22 : feature 추가, (햄버거메뉴, 좋아요 반응, 사진 슬라이스, 사진 확대, 팔로우 반응, 등 그래픽 요소) : 최대한 컴포넌트 쪼개기(재사용성 증가)
- 5.23 ~ 5.24 : refactoring, 비슷한 컴포넌트 병합 및 중복 줄이기, 공통 로직 hook으로 구현, 리덕스로 공용상태 구현



### ⚙️ 구현한 기능들 **(여기에 추가하기)**
#### 1. pages
- 메인화면(main_page) 레이아웃. - finished by 용훈(25.05.19)
  - userdata를 js파일 안에 객체로 저장하여 공용으로 사용
- 유저정보(profile) 레이아웃. - working by 용훈(25.05.20)
  - myprofile, userprofile 구분(url 끝에 계정 명으로 주소를 다르게 받도록 구현)
- 검색화면(search_page) 레이아웃. - working by 준하

#### 2. feature
- 메인화면 접속 시 랜덤하게 이미지 바뀌기 적용. - finished by 용훈(25.05.19)
- 메인화면 로고 모달 만들기
  - 모달을 hook으로 만들 수 없는지 검토
- (custom hook) 버튼 누르면 이미지 변환 공용 hook 구현. - finished by 용훈(25.05.19)
- 메인화면 이미지 케로셀 적용.
- 프로파일화면에서 이미지 클릭하면 모달로 창 전환한 후 케로셀 적용.

#### 3. refactoring
- (redux) 로그인한 사용자를 가정하고 로그인 사용자 정보를 공용상태 구현.
  - myprofile, userprofile 구분 용도.



### ✅ 요구사항
1. (필수⭐) **react, javascript** 스택을 사용합니다.
2. (선택) typescript, next.js 스택을 사용합니다.
3. (필수⭐️) **redux** 또는 context api를 통해 전역 상태를 관리합니다.
4. (필수⭐️) **커스텀 훅**을 통해서 공통으로 사용하는 로직을 관리합니다.
5. (선택) 스타일링은 styled-components 또는 tailwindcss 사용을 권장합니다.
6. 프론트엔드 직군끼리 진행하는 프로젝트이므로 mock 데이터나 공공으로 쓸 수 있는 오픈 api 등을 사용합니다.



### 🔧 사용 라이브러리
- react(19.1.0) : react
- react-router-dom(7.6.0) : react router
- modern-css-reset(1.4.0) : css reset
- styled-components(6.1.18) : css-in-js



## 📦 배포
- netlify(https://insta33234.netlify.app/)

