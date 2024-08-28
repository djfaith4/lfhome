# lfhome

## Versions Used

- Node v22 or higher
- yarn (version 1.22.22 used)

## Configuration

Guardian API key provided separately and should be added to a `.env` file at the root folder of the application:

```
REACT_APP_API_KEY = '<api key goes here>'
```

## Building the application

To build the application, at the root folder of the application run the following command:

`yarn install`

## Running the app locally

To run the app, at the root folder of the application run the following command:

`yarn start`

## Tests

To run the tests, at the root folder of the application run the following command:

`yarn test`

## Code Structure

This application contains a simple News website built with [Create React App](https://create-react-app.dev/) and [Typescript](https://www.typescriptlang.org/). The unit tests are written using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

`src/` Contains all the source code files (mostly .ts/.tsx files):

- `common/` Contains React components that can be used in various different locations.
- `components/` Contains main React components and views.
- `mocks/` Contains mock handlers for unit tests.
- `tests/` Contains unit tests.

`public/` Contains all public files served by the web server.
