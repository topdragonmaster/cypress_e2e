# Stakefish React App(Typescript)

This is the NEAR token explorer written by `smart-dev30`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
  > yarn install

## Screenshot
![Screenshot](screen.gif)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn cypress open`

Runs all the test cases in the development mode.\
You can see all the test case result.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project structure

```
src
├── components
│   ├── ExchangeItem       # ExchangeItem Component
│   ├── ExchangeItemCard   # ExchangeItemCard Component
│   ├── ExchangeTable      # ExchangeTable component
│   └── index.ts           # export all components in `components` folder level
│
├── Constants              # contain constants
│
├── hooks                  # contain hooks
│
├── pages                  # contain all web pages
│   ├── ExchangeDetail     # Detail page
│   └── Home               # Exchange table page
└── App.tsx                # main page
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
