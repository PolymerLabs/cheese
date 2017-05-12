# cheese

### Prerequisites

#### Polymer CLI

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

#### Firebase command line tools

    npm install -g firebase-tools

### Setup

    git clone https://github.com/polymerLabs/cheese.git
    cd cheese
    bower install

### Start the development server

    polymer serve

### Build

    polymer build

### Test the build

This command serves the minified version of the app in an bundled state:

    polymer serve build/bundled


### Deploy to Firebase Hosting

    firebase login
    firebase deploy
