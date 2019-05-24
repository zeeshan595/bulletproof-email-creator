const config = {
  input: "src",
  output: "dist",
  main: "sample.js"
};

const gulp = require("gulp");
const ts = require("gulp-typescript");
const babel = require("gulp-babel");

var tsProject = ts.createProject({
  declaration: true,
  target: "es6",
  noImplicitAny: false,
  outDir: config.output,
  rootDir: config.input,
  declarationFiles: true
});

//compile typescript
gulp.task(
  "build",
  gulp.series(() => {
    return gulp
      .src(config.input + "/**/*.ts")
      .pipe(tsProject())
      .pipe(gulp.dest(config.output));
  }, () => {
    return gulp.src(config.output + "/**/*.js")
      .pipe(babel({
        presets: [
          "@babel/preset-env"
        ]
      }))
      .pipe(gulp.dest(config.output));
  })
);