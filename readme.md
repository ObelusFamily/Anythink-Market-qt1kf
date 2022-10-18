# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Clone this project: `git clone <project url>`
2. Install Docker
3. Run `docker-compose` on the root folder.
4. Make sure you can open: http://localhost:3000/api/ping
5. Create a new user by browsing to: https://localhost:3001/register