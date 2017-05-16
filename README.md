# Cheese

Cheese app is a simple web app that lets you take a selfie and automatically places stickers on the face.

![](https://cloud.githubusercontent.com/assets/116360/26123249/12da1c22-3a2f-11e7-8ed1-c27e828748da.gif)

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

#### Setup Cloud Vision API key

[Create a Cloud Platform project and API key](https://cloud.google.com/vision/docs/) for making calls to Cloud Vision API.

Open index.html and replace api_key with your own key.

    <cheese-app api-key="api_key">

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
