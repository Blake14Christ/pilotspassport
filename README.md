# Pilots Passport

A React + Vite application with a Firebase backend.

## Development

### npm

Install dependencies:

```bash
npm install
```

Start the dev server (available at http://localhost:5192):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

### Docker

Start the app:

```bash
docker compose up --build
```

Open a dev console into the running container:

```bash
docker compose exec app sh
```

Stop the app:

```bash
docker compose down
```

### Firebase Cloud Functions

From the `functions/` directory:

Start the Firebase emulator:

```bash
npm run serve
```

Deploy functions:

```bash
npm run deploy
```

View function logs:

```bash
npm run logs
```

## To get Firebase up and running

```
docker compose exec app sh
/app # firebase login
/app # firebase init hosting
/app # npm run build
/app # firebase deploy --only hosting

