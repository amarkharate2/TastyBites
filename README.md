# Fastfood 🍔

A responsive React food-ordering demo. Browse a sample menu, filter by category, customize portion sizes, manage a persistent shopping cart and place a simulated order.

## Features

- Search and category filters
- Portion selection, quantity selection and INR pricing
- Cart with quantity updates, removal and local browser persistence
- Demo display-name sign-in and sign-out
- Simulated checkout (no payment or delivery)
- Responsive layout, keyboard-accessible controls and no external image dependencies
- GitHub Pages deployment workflow and automated tests

## Run locally

Install Node.js 22 and npm, then run from the directory containing `package.json`:

```sh
npm ci
npm start
```

Visit http://localhost:3000.

```sh
npm run test:ci
npm run build
```

## Deploy on GitHub Pages

1. Create an empty GitHub repository (for example `fastfood`).
2. Extract this archive and open a terminal inside the extracted `fastfood` directory.
3. Run the following, substituting your GitHub username and repository name:

```sh
git init
git add .
git commit -m "Initial working Fastfood application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fastfood.git
git push -u origin main
```

4. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. If the first deployment failed before Pages was enabled, rerun the workflow from the Actions tab.
5. The deployed app will be available at `https://YOUR_USERNAME.github.io/fastfood/` after deployment succeeds.

## Project structure

```text
src/
  components/    Navigation, food cards, hero, cart provider, footer
  screens/       Menu, demo login, cart and checkout
  menu.js        Sample catalogue and prices
  App.js         Hash-based routing
  App.test.js    Functional tests
.github/workflows/pages.yml  CI and Pages deployment
```

## Scope and limitations

The supplied original archive contained only a React frontend; the referenced API and cart provider were absent. The repaired app uses a local sample catalogue and localStorage, not a server or database. Sign-in is a display-name demo and does not authenticate users. Checkout is simulated. Do not use this demo for real customer accounts, payments or orders. React Scripts 5 is retained for compatibility with the original project; it is a legacy toolchain and should be migrated for long-term production maintenance. The production build and three tests were verified against the dependencies supplied in the original archive; a clean online dependency installation and actual GitHub deployment were not verified in this environment.

Original project footer credits: Amar & Ankit (2024). No license was supplied; verify redistribution rights before choosing a license or publishing publicly.
