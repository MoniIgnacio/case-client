# Test-Case 

Creation of Web Pages for Registering and Viewing Registered Users.

- Creation of Login page.
- HTML + EMAIL and PASSWORD entry form and ENTER button to access the system.
- Registration page creation.
- HTML + EMAIL and PASSWORD entry form and SEND button for system registration, with result (OK-KO).

- Creation of the Administrative page for checking the registrations present (Dashboard)
  HTML + Form - display of the list of users registered on the site with relative classic text search (in / contains in string) [list of only emails that meet the search criterion or complete list]

---

## Technologies:

- [React]
- [Javascript]
- [React Bootstrap]
- [Jwt Token]
- [Regexr]
- [MySql]
- [Node.js]
- [Express]
- [Axios]

---

## Data Structure Server

> 'http://localhost:5005/api/user' => USER

| METHOD | URL       | PARAM | BODY             | DESCRIPTION                   |
| ------ | --------- | ----- | ---------------- | ----------------------------- |
| GET    | '/'       | id    | n\a              | Gets all users                |
| POST   | '/login'  | n\a   | email & password | Validate the user credentials |
| POST   | '/create' | n\a   | all description  | New User registrer            |
| GET    | '/verify' | n/a   | n\a              | Send to FE the verify token   |


## Installation

Case requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

[Server code] --- [Client code]

```sh
cd case-server/case-client
npm i
npm start
```

For production environments...

```sh
npm start
```

[react]: https://reactjs.org/
[javascript]: https://www.javascript.com/
[react bootstrap]: https://react-bootstrap.github.io/
[MySql]: https://dev.mysql.com/doc/
[node.js]: http://nodejs.org
[express]: http://expressjs.com
[regexr]: https://regexr.com/
[jwt token]: https://jwt.io/
[Server code]: https://github.com/MoniIgnacio/case-server
[Client code]: https://github.com/MoniIgnacio/case-client
[axios]: https://www.npmjs.com/package/axios