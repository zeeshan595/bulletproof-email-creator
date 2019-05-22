const config = {
  input: "src",
  output: "dist",
  main: "main.js"
};

const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsCompiler = ts.createProject("tsconfig.json");

gulp.task(
  "typescript",
  gulp.series(() => {
    return gulp
      .src(config.input + "/**/*.ts")
      .pipe(tsCompiler())
      .pipe(gulp.dest(config.output));
  })
);

gulp.task(
  "html",
  gulp.series(() => {
    return gulp.src(config.input + "/**/*.html").pipe(gulp.dest(config.output));
  })
);

gulp.task(
  "style",
  gulp.series(() => {
    return gulp.src(config.input + "/**/*.css").pipe(gulp.dest(config.output));
  })
);

//compile typescript
gulp.task(
  "build",
  gulp.series(gulp.parallel("typescript", "style", "html"))
);

gulp.task("default", gulp.series("build"));
