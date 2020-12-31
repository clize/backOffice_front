## POS서버 백오피스 프론트엔드

### 개발언어 및 사용 라이브러리

- React.js
- react-chartjs-2
- react-google-charts

#### 차트 라이브러리 다운 필요

```
npm install --save react-chartjs-2 chart.js
npm i react-google-charts
```
아니면 yarn을 이용하셔도 됩니다. 자세한 내용은 [chartjs](https://www.npmjs.com/package/react-chartjs-2) 과 [google chart](https://react-google-charts.com/) 참조

<br/>

### 프론트 구조도 소개

<pre>
📦src<br/>
 ┣ 📂assets : css 및 bootstrap 파일 저장<br/>
 ┃<br/>
 ┣ 📂component<br/>
 ┃ ┣ 📂check<br/>
 ┃ ┃ ┣ 📜BatchRsltComponent.jsx&#9;&#9;&#9;배치결과 메뉴 메인<br/>
 ┃ ┃ ┣ 📜DatePickerComponent.jsx<pre>&#9;&#9;&#9;날짜를 조회하는 일자/시간 선택 컴포넌트<br/>
 ┃ ┃ ┗ 📜RsltTableComponent.jsx<pre>&#9;&#9;&#9;테이블 컴포넌트<br/>
 ┃ ┣ 📂lookup<br/>
 ┃ ┃ ┣ 📜FormContent.jsx&#9;&#9;&#9;DB에서 컨텐츠를 조회해서 카드 컴포넌트에 뿌려주는 역할<br/>
 ┃ ┃ ┣ 📜IfDataComponent.jsx<pre>&#9;&#9;&#9;전문조회 메인<br/>
 ┃ ┃ ┗ 📜SearchCardInfo.jsx&#9;&#9;&#9;전문조회 결과를 나타내는 카드 컴포넌트<br/>
 ┃ ┣ 📂menu<br/>
 ┃ ┃ ┣ 📜AddUserComponent.jsx<pre>&#9;&#9;&#9;성우담당님이 추가하신 부분<br/>
 ┃ ┃ ┣ 📜ClockComponent.jsx<pre>&#9;&#9;&#9;현재 시각을 알려주는 컴포넌트<br/>
 ┃ ┃ ┣ 📜CodeListComponent.jsx<pre>&#9;&#9;&#9;성우담당님이 추가하신 부분<br/>
 ┃ ┃ ┣ 📜ComCodeListComponent.jsx<pre>&#9;&#9;&#9;성우담당님이 추가하신 부분<br/>
 ┃ ┃ ┣ 📜DashBoardComponent.jsx<pre>&#9;&#9;&#9;백오피스 메인 대쉬보드<br/>
 ┃ ┃ ┗ 📜EditUserComponent.jsx<pre>&#9;&#9;&#9;성우담당님이 추가하신 부분<br/>
 ┃ ┗ 📂route<br/>
 ┃ ┃ ┣ 📜NavSideBar.jsx<pre>&#9;&#9;&#9;백오피스 네비게이션바, 및 사이드메뉴 틀을 관리하는 컴포넌트<br/>
 ┃ ┃ ┣ 📜RouteComponent.jsx<pre>&#9;&#9;&#9;라우팅 기능을 담당하는 컴포넌트<br/>
 ┃ ┃ ┗ 📜SideContent.jsx<pre>&#9;&#9;&#9;사이드 메뉴의 항목들을 관리하는 메뉴<br/>
 ┃<br/>
 ┣ 📂components&#9;&#9;&#9;차트, 캐러셀뷰, 노티피케이션 라이브러리 javascript 모음 폴더<br/>
 ┃<br/>
 ┣ 📂view&#9;&#9;&#9;성우담당님이 추가하신 부분<br/>
 ┃<br/>
 ┣ 📜ApiService.js<br/>
 ┣ 📜App.css<br/>
 ┣ 📜App.js<br/>
 ┣ 📜App.test.js<br/>
 ┣ 📜AppRenderer.js<br/>
 ┣ 📜index.css<br/>
 ┣ 📜index.js<br/>
 ┣ 📜logo.svg<br/>
 ┣ 📜serviceWorker.js<br/>
 ┗ 📜setupTests.js<br/>
<br/>
<pre/>

------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
