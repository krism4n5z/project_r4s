## Project summary
Create an image carousel which make request for every click an get new currency value. 

Used components:
* App - render background and Slide component
* Slide - container for carousel- all the business logic inside here
* SlideItem- render one slide item 
* Left Arrow, right arrow- only for making next/back steps

Tests: 
There are 1 test for mounting App (in App.test.js) and 4 smoke tests for created components to make sure are they render properly. 

If you want to use transition to make changes between the slides animate please uncomment line 61 in Slide.js 
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

