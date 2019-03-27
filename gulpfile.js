const config = {
  input: "src",
  output: "build",
  main: "main.js"
};

const gulp = require("gulp");
const ts = require("gulp-typescript");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const tsCompiler = ts.createProject("tsconfig.json");
const browserSync = require("browser-sync");
const run = require("gulp-run");

gulp.task(
  "typescript",
  gulp.series(() => {
    return gulp
      .src(config.input + "/**/*.ts")
      .pipe(tsCompiler())
      .pipe(babel())
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

gulp.task(
  "images",
  gulp.series(() => {
    return gulp
      .src(config.input + "/images/*")
      .pipe(imagemin())
      .pipe(gulp.dest(config.output + "/images"));
  })
);

//compile typescript
gulp.task(
  "build",
  gulp.series(gulp.parallel("typescript", "style", "html", "images"), () => {
    return run("node " + config.output + "/" + config.main).exec();
  })
);

function browserSyncWatcher() {
  gulp.watch(
    config.input,
    gulp.series("build", () => {
      browserSync.reload();
      browserSyncWatcher();
    })
  );
}

gulp.task(
  "browser-sync",
  gulp.series(() => {
    //launch browser sync
    browserSync.init({
      server: {
        baseDir: config.output
      },
      watch: false
    });

    browserSyncWatcher();
  })
);

gulp.task("default", gulp.series("build", "browser-sync"));
