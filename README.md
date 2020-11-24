# Pug-Sass Templates

A HTML templates using Pug and Sass.

## Requirements

Make sure [NPM](https://www.npmjs.com) and [Gulp](http://gulpjs.com/) already installed on your computer.

## Install

* Execute `npm install`.

## Run

* Execute `npm start` or `gulp`
* Open `http://localhost:8080/` on your web browser.

## Build

* Execute `gulp build`.

## Folders Structure

```
+ assets
  + css : This folder contains prebuild files, cannon.css and cannon.min.css.
  + img : This folder contains images files.
+ source
  + assets
    + images
        - *.svg : Import svg files.
        - *.png : Import png files.
        - *.jpg : Import jpg files.
    + sass
        - cannon.sass : Import sass files.
  + pug
    + base
      - base.pug : Base pug file.
    + layouts
      - default-layout.pug : Default layout pug file.
    + pages
      - approach.pug : Approach templtae.
      - blog.pug : Blog template.
      - blog_post.pug : Blog post templtae.
      - contact.pug : Contact template.
      - home.pug : Home template.
      - work.pug : Work template.
    + partials
      - header.pug : Header pug file.
```

## Gulp Plugins

* [gulp-connect](https://www.npmjs.com/package/gulp-connect) : Run webserver (with livereload).
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) : Prevent pipe breaking caused by errors from gulp plugins.
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) : Gulp plugin for compiling Pug templates, compile Pug into HTML.
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) : Gulp plugin to rename files easily, adding `.min` suffix.
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) : Compile your Sass into CSS.
* [gulp-image](https://www.npmjs.com/package/gulp-image) : Optimize PNG, JPEG, GIF, SVG images with gulp task.
