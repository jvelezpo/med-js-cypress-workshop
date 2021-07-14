
# TodoMVC [![Travis Status](https://travis-ci.org/cypress-io/cypress-example-todomvc.svg?branch=master)](https://travis-ci.org/cypress-io/cypress-example-todomvc) [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-todomvc.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-todomvc) [![Build status](https://ci.appveyor.com/api/projects/status/6wjyoye82orkkyny/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-example-todomvc/branch/master) [![Build Status](https://travis-ci.org/jvelezpo/cypress-workshop.svg?branch=master)](https://travis-ci.org/jvelezpo/cypress-workshop)


This repo contains an example React App, with the tests written in Cypress.

Additionally this example app is configured to run tests in Circle CI and Travis CI.

### Repo from cypress talk
* https://github.com/jvelezpo/med-js-cypress


## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to fork it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/med-js-cypress-workshop.git

## cd into the cloned repo
cd med-js-cypress-workshop

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8000` which hosts the TodoMVC app.

You can verify this by opening your browser and navigating to: [`http://localhost:8000`](http://localhost:8888)

You should see the TodoMVC app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/installing-and-running#section-adding-projects)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)

![image](https://user-images.githubusercontent.com/1050904/125680978-200ecf0b-6dff-4a76-900e-60bda5a9ff47.png)

