const config = {
  input: "src",
  output: "dist",
  main: "sample.js"
};

const gulp = require("gulp");
const ts = require("gulp-typescript");
const run = require("gulp-run");
const babel = require("gulp-babel");
const tsCompiler = ts.createProject("tsconfig.json");

//compile typescript
gulp.task(
  "build",
  gulp.series(() => {
    return gulp
      .src(config.input + "/**/*.ts")
      .pipe(tsCompiler())
      .pipe(gulp.dest(config.output));
  })
);

gulp.task("default", gulp.series(() => {
  return gulp
    .src(config.input + "/**/*.ts")
    .pipe(tsCompiler())
    .pipe(babel())
    .pipe(gulp.dest(config.output));
}, () => {
  return run("node " + config.output + "/" + config.main).exec();
}));
