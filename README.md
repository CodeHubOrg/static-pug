# Static Pug

## A mini static site generator using PugJS

This is just a proof of concept. Using Pug to generate html files. There is also the option to read in content from .md files in a directory.

## Get started

- After cloning the repository, cd into the root folder and run `npm install`
- You can then run the following commands. 
  1. If you want to just use some variables in your content, put them into the 'options.js' file. Modify the pug files to your liking. You can also create new ones in the *pages* directory. Then run `npm run simple` and you will find the generated html files in the *dist-simple* directory
  2. If you would like to additionally use content from *.md* files in the *blocks* directory, just run `npm start`. You can also split the process of writing the options file, and then generation the HTML in two parts with `npm run writeOptions` and `npm writeHTML` in case you make changes only in either *.md* or *.pug* files

## Running pug directly from the commandline

Install the pug commandline interface globally with `npm install -g pug-cli` and check for different options with `pug --help`