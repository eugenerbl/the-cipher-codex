<h1 align="center">
  The Cipher Codex
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/43bc7957-a6ce-4b02-9fc6-34cff18b7663/deploy-status)](https://app.netlify.com/sites/theciphercodex/deploys)
[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)](https://github.com/eugenerbl/the-cipher-codex/blob/main/LICENSE)

Immerse yourself into the world of cryptography with interactive, easy-to-use tools for encrypting and decrypting messages. Explore popular ciphers like Caesar, Vigenère, and Atbash, along with detailed explanations on how these ciphers work.

<p align="center">
  GitHub Pages: <a href="https://eugenerbl.github.io/the-cipher-codex/">eugenerbl.github.io/the-cipher-codex</a>
  <br />
  Netlify: <a href="https://theciphercodex.netlify.app/">theciphercodex.netlify.app</a>
</p>

## 💻 Framework
This site was made using [React](https://react.dev) and [Vite](https://vitejs.dev). JavaScript, HTML, and CSS were used to build the site components. The site also uses these external libraries and dependencies:

- [React Router Dom](https://www.npmjs.com/package/react-router-dom) for routing
- [React Bootstrap](https://react-bootstrap.netlify.app/) for common components and CSS
- [Material UI](https://mui.com/material-ui) for common components and CSS


## 🛠 Getting Started

Note: Vite requires [Node.js](https://nodejs.org/en/) version 18+ or 20+. This project also requires [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), which is normally installed with Node.js. It is recommended to use a Node version manager like [nvm](https://github.com/nvm-sh/nvm) (Linux/Mac) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to install and manage Node.js and npm.

There are two options to clone the repository:

1. Use `git clone`:
```
git clone https://github.com/eugenerbl/the-cipher-codex.git
```
2. Or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npm degit eugenerbl/the-cipher-codex#main my-app
```

Then install dependencies and run the application on your local browser:
```
# enter the project directory
cd my-app

# install dependencies
npm install

# run application locally
npm run dev
```


## ⚙️Command Line Scripts

The following scripts are available from `package.json`:

| Script          | Description                                         |
| --------------- | --------------------------------------------------- |
| npm run dev     | Runs the app on your local machine.                 |
| npm run build   | Builds the app for production to the `dist` folder. |
| npm run preview | Preview the production build on your local machine. |
   
You can specify additional CLI options like `--port` or `--open`. For a full list of CLI options, run `npm vite --help` in your project.

## 📃 GitHub Pages
The `github` branch contains configurations to deploy to GitHub Pages. You can switch to the `github` branch and deploy using:

```
npm run deploy
```

See [this tutorial](https://github.com/gitname/react-gh-pages) for more info about deploying to GitHub Pages.

## 👤 Credits
The Cipher Codex was built by [Eugene L](eugenerbl.github.io).


## 📝 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free 
to use, modify, and distribute this template for your own projects.