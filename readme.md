# WordPress Theme Packer
Guide coming soon, until then - a TL;DR Summary:

**Step 1:**
Paste this in your project somewhere. I'm used to `/assets/gulp`

**Step 2:**
Create a file called `gulpfile.babel.js` with contents:
```js
import './assets/gulp/autoinit'
```

**Step 3:**
Create file called `./babelrc`
```json
{
  "presets": [ "env" ]
}
```

**Step 4:**
Run 
```
npm i --save babel-preset-env babelify browser-sync browserify defaults-deep gulp-autoprefixer gulp-buffer gulp-clean-css gulp-error-handle gulp-replace gulp-sort gulp-sourcemaps gulp-strip-debug gulp-stylus gulp-tap gulp-uglify gulp-wp-pot gulp-zip node-notifier run-sequence yamljs gulp-prompt run-sequence gulp-rename gulp-replace gulp-prompt gulp-sort 
```

**Step 5:**
Create configuration file `theme.yml`
```yaml
# Theme info:
name: Theme Name
slug: theme-name
email: your@email.com
author: Your Name # for pot files

# Tell BrowserSync where you're site is at:
development_url: http://theme.wp

# Build Process
exclude_files:
  - theme.yml
  - gulpfile.babel.js
  - assets/gulp
  - assets/style
  - assets/gulp/**
  - assets/style/**
  - assets/scripts
  - assets/scripts/**
  - README.md
  - push.js
  - package.json
  - package-lock.json
```
