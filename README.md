# snap-ai

## Prerequisites

### Polymer CLI

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

### Google App Engine SDK

Install [Google App Engine SDK](https://cloud.google.com/appengine/downloads)

## Setup

    git clone https://github.com/polymerLabs/snap-ai.git
    cd snap-ai
    bower install

## Build

    polymer build

## Test the build

This command serves the minified version of the app in an bundled state:

    polymer serve build/bundled


## Deploy to Google App Engine

    gcloud app deploy app.yaml --project [YOUR_PROJECT_ID]
