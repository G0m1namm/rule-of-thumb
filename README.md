Rule of Thumb - Zemoga Front End Development Test
==================================================
### [Web page link](https://rule-of-thumb-7bc52.web.app/)

### Chosen Tools
For this challenge I use ReactJs, my prefered framework. I separate the basic layout on different components to mantain code's readability. Also, I use SASS preprocessor for an easy styling and because I'm used to it.

### Acceptance Criteria
1. [x] The interactive component should meet the design criteria, which you can find below in the different required resolutions:
   - I use the media queries from layout example with mobile first in mind.
2. [x] In mobile version, cards **should only** be displayed as a list of cards, with horizontal scrolling and overflow.
   -  For horizontal scrolling I use [CSS Scroll Snap](https://developers.google.com/web/updates/2018/07/css-scroll-snap).
3. [x] In tablet and desktop versions, user **should be able to switch views** between _list view_ and _grid view_, using the dropdown menu, which should be located at the top right section of the component.
   - For this I create a component to switch between views [Dropdown](https://github.com/G0m1namm/rule-of-thumb/tree/main/src/components/Dropdown) and a [Card](https://github.com/G0m1namm/rule-of-thumb/tree/main/src/components/Card) component to show tha data.
4. [x] Each card should contain a **gauge bar** at the bottom, which will display the distribution of positive and negative votes **as a percentage**. (See `assets/data.json` for reference).
    - For the gauge bar I create a [Progress bar](https://github.com/G0m1namm/rule-of-thumb/tree/main/src/components/ProgressBar) component using a basic progress bar from [rc-progress](https://www.npmjs.com/package/rc-progress) npm library.
5. [x] Each card should contain three buttons: a **"thumbs down" (yellow)**, a **"thumbs up" (teal)** and a "Vote now" button **which should be disabled** by default.
   - I use React Memo to optimize the unnecesary rendering when user interact with these three buttons.
6. [x] **All posted votes should be persisted** by any means, and should be exactly the same count, even if the page is refreshed. Use _any_ persistance mechanisms you prefer: LocalStorage, Cookies, IndexedDB, URL params, a Back End service (Firebase, DynamoDB, Redis, etc).
    - For this I persist the redux state on LocalStorage.

### Going above and beyond 🚀
1. Implement any sort of _state management solution_, that deals with data updates in a coherent manner.
    - I decided to use [Redux](https://github.com/G0m1namm/rule-of-thumb/tree/main/src/redux) for state management.

## Usage
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- It's required to have already [Node Js](https://nodejs.org/en/download/) installed to use `npm`.

#### `npm install`
To install the dependencies package.

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.