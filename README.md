# 인스타그램 커버 
인스타그램 커버 화면 클론하기 [Figma 목업](https://www.figma.com/design/5aK8OoVhDcw2ZClVJufnIv/Instagram-Template-2.0--Preview-?t=8K6m5UEih7ajX1dN-0)

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


### 🪾 Git 브렌치 구조
```text
* main
  |
  *--- dev
        |
        *--- layout 
               |
               *--- mainpage
               |
               *--- profilepage
               |
               *--- searchepage
               
```


### 🗓️ 일정
- 5.19 ~ 5.20 : Route, Layout, pages 외관 (그래픽 assets 추가)
- 5.21 ~ 5.22 : feature 추가, (햄버거메뉴, 좋아요 반응, 사진 슬라이스, 사진 확대, 팔로우 반응, 등 그래픽 요소) : 최대한 컴포넌트 쪼개기(재사용 성 증가)
- 5.23 ~ 5.24 : refactoring, 비슷한 컴포넌트 병합 및 중복 줄이기, 공통 로직 hook으로 구현, 리덕스로 공용상태 구현


### ⚙️ 구현한 기능들 (여기에 추가하기)
#### pages
- 메인화면(main_page) 레이아웃. 25.05.19. 용훈
- 검색화면(search_page) 레이아웃. 준하
- 유저정보(profile) 레이아웃. 25.5.20. 용훈 (내유저, 타유저(URL 끝에 계정 명으로 다르게 받아서 구분)

### feature
- 메인화면 접속 시 랜덤하게 이미지 바뀌기 - 25.05.19. 용훈

### refactoring 사항



### ✅ 요구사항
1. (필수⭐) **React, JavaScript** 스택을 사용합니다.
2. (선택) TypeScript, Next.js 스택을 사용합니다.
3. (필수⭐️) **Redux** 또는 Context API를 통해 전역 상태를 관리합니다.
4. (필수⭐️) **커스텀 훅**을 통해서 공통으로 사용하는 로직을 관리합니다.
5. (선택) 스타일링은 styled-components 또는 tailwindcss 사용을 권장합니다.
6. 프론트엔드 직군끼리 진행하는 프로젝트이므로 mock 데이터나 공공으로 쓸 수 있는 오픈 API 등을 사용합니다.


### 🔧 사용 라이브러리
- react(19.1.0) : React
- react-router-dom(7.6.0) : React Router
- modern-css-reset(1.4.0) : CSS reset
- styled-components(6.1.18) : CSS-in-JS
