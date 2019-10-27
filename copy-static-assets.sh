#!/bin/bash

mkdir ./dist ./dist/popup
cp -r ./{manifest.json,assets} ./dist
cp -r ./src/popup/{popup.html} ./dist/popup