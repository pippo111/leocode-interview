# Installation
### `yarn install`

# Running
### `yarn start`

# Testing
Unit / Integration tests
### `yarn test`
End to end tests:
### `yarn cypress open`

# Notes on project
## Code formatting
Code is formatted by `standardjs` rules, but it is only my personal preference and
can be changed at any time.

## Tech choices
**UI/Styles**
For basic UI styles and component I decided to use `SmoothUI` library for its lightweight, simplicity and semantic correctness. Build-in `styled-components` for handling custom styling is also a plus.

**Router**
Although it is not necessary for such small project I decided to include `react-router` as standard in any project starters.

**Forms**
There is only one Input in the project so I handled it just by vanilla js. For bigger project my choice is usually `formik` or `react-final-form`

**State management**
There is no need for state management in such project so by default I use just local state to handle fetched data. Nevertheless I decided to create another branch with integrated state manager. My usual default in such cases is `redux` of recently just built-in react's `context` but I decided to give `mobx`  a try. Honestly I'm not that experienced with `mobx` so I took oportunity to try it out.
Take a look at [mobx branch](pippo111/leocode-interview/tree/mobx)

**Testing**
I included some unit / integration / end to end tests into the project. My default is `jest` with `enzyme` and `cypress` for end-to-end testing.


