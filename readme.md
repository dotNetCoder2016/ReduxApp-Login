# Redux Login App

> A login/register flow built with React & Redux Saga

This application demonstrates what a React-based register/login workflow might look like with [Redux]

## Authentication

Authentication happens in `app/auth/index.js`, using `fakeRequest.js` and `fakeServer.js`. `fakeRequest` is a fake `XMLHttpRequest` wrapper. `fakeServer` responds to the fake HTTP requests and pretends to be a real server, storing the current users in local storage with the passwords encrypted using `bcrypt`.


