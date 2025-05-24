# 인스타그램 커버 
인스타그램 커버 화면 클론하기 [figma 목업](https://www.figma.com/design/5ak8oovhdcw2zclvjufniv/instagram-template-2.0--preview-?t=8k6m5ueih7ajx1dn-0)

![화면](https://github.com/jobcodebreak/instagram-cover/blob/layout/preview.png?raw=true)



### 🗂️ 디렉토리 구조
```text
src/- 
├── assets/          -> 공용으로 사용하는 데이타들
│     ├── avatar/
│     ├── data/      -> 유저 데이타
│     ├── icons/
│     └── post/      -> 포스트에 사용한 이미지들
│
├── features/        -> RTX 슬라이스
│
├── pages/           -> 페이지들
│
├── components/      -> 공용 컴포넌트들
│     ├── main/      -> main page의 컴포넌트들
│     ├── profile/   -> profile page의 컴포넌트들
│     └── search/    -> search page의 컴포넌트들
│
├── hooks/           -> 공용 hook들
│
└── store/           -> 공용 상태들
```



### 🪾 git 브렌치 구조
```text
* main
  |
  *--- dev
        |
        *--- layout 
        |      |
        |      *--- mainpage (작업완료-> 삭제)
        |      |
        |      *--- profilepage (작업완료-> 삭제)
        |      |
        |      *--- searchepage (작업완료-> 삭제)
        |      
        *--- feature
               |
               *--- Carousel (작업완료 -> 삭제)
               |
               *--- useInput (작업완료 -> 삭제)
               |
               *--- useLoginUser (작업완료 -> 삭제)

```



### 🗓️ 일정
- 5.19 ~ 5.20 : route, layout, pages 외관 (그래픽 assets 추가)
- 5.21 ~ 5.22 : feature 추가, (햄버거메뉴, 좋아요 반응, 사진 슬라이스, 사진 확대, 팔로우 반응, 등 그래픽 요소) : 최대한 컴포넌트 쪼개기(재사용성 증가)
- 5.23 ~ 5.24 : refactoring, 비슷한 컴포넌트 병합 및 중복 줄이기, 공통 로직 hook으로 구현, 리덕스로 공용상태 구현



### ⚙️ 구현한 기능들 **(여기에 추가하기)**
#### 1. pages
- 메인화면(main_page) 레이아웃. - finished by 용훈(25.05.19)
- 유저정보(profile) 레이아웃. - finished by 용훈(25.05.20)
- 검색화면(search_page) 레이아웃. - finished by 용훈(25.05.21)

#### 2. feature
- 메인화면 -> 접속 시 랜덤하게 이미지 바뀌기 적용. - finished by 용훈(25.05.19)
- (custom hook) -> 버튼 누르면 이미지 변환 공용 hook 구현. - finished by 용훈(25.05.19)
- ReelsPage, ShopPage 더미 ->  Main으로 리다이렉트 기능. - finished by 용훈(25.05.21)
- 검색화면 -> 무한 스크롤 구현. -finished by 용훈(25.05.21)
- 메인화면 -> 로고 클릭 시 모달 띄워 버튼 표시. - finished by 용훈(25.05.22)
- 이미지 속성(like, comment, 복수사진)에 따라 아이콘 적용. - finished by 용훈(25.05.22)
- 메인화면 -> 이미지 케로셀 적용. - finished by 용훈(25.05.22)
- (custom hook) -> 로그인 데이타 가져오기(자동 로그인 구현). - finished by 용훈(25.05.22)
- (custom hook) -> 검색화면 검색어 입력창에 '금기어' 필터 기능. - finished by 용훈(25.05.24)
- 프로파일화면 -> 이미지 클릭하면 모달로 창 띄운 후 케로셀 적용.- finished by 용훈(25.05.24)
- 검색화면 -> 이미지 클릭하면 모달로 창 띄운 후 케로셀 적용 - finished by 용훈(25.05.24)
- 404 화면 -> 정상적인 접근이 아니거나, 없는 주소로 직접 접근시 404 화면 표시. - 구현 안함.
- 검색화면, 프로파일 화면 -> 모달 확대 시 다음 그림 넘어가는 버튼 기능 추가

#### 3. refactoring
- (redux) 로그인 데이타 Read (로그인). - finished by 용훈(25.05.22)
- (redux) 로그인 데이타 Update. (포스트 작성) - 구현 안함.



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
- react-redux(9.2.0) : react redux
- reduxjs/toolkit(2.8.2) : redux toolkit
- styled-components(6.1.18) : css-in-js
- modern-css-reset(1.4.0) : css reset
- react-responsive-carousel(3.2.23) : carousel



## 📦 배포
- netlify(https://insta33234.netlify.app/)

