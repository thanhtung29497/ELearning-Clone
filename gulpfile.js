const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const runSequence = require("run-sequence");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const zip = require("gulp-zip");
const merge = require("merge2");

var tsCode = ts.createProject("tsconfig.json");

gulp.task('compile', () => {
    return tsCode.src()
        .pipe(tsCode())
        .js.pipe(gulp.dest('./dist/src/js'));
})

gulp.task('cleanDist', () => {
    return gulp.src('./dist')
        .pipe(clean());
})

gulp.task('copyHtmlAndCss', () => {
    return merge([
        gulp.src("./src/index.html")
            .pipe(gulp.dest("./dist/src")),
        gulp.src("./src/html/*.html")
            .pipe(gulp.dest("./dist/src/html")),
        gulp.src("./src/css/*.css")
            .pipe(gulp.dest("./dist/src/css")),
        gulp.src("./src/resources/**/*")
            .pipe(gulp.dest("./dist/src/resources"))
    ])
})

gulp.task('bundle', () => {
    return gulp.src("./dist/src/js/main/main.js")
        .pipe(gulpWebpack({
            output: {
                filename: "dist/src/js/main.js",
            },
            entry: "./dist/src/js/main/main.js",
            devtool: "source-map"
            // target: 'node',
            // externals: [nodeExternals()],
        }, webpack))
        .pipe(gulp.dest("./"))
})

gulp.task('zip', () => {
    return gulp.src('./dist/src/**')
        .pipe(zip('web.zip'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('default', (callback) => {
    runSequence('cleanDist', ['compile', 'copyHtmlAndCss'], ['bundle'], callback);
})

gulp.task('production', (callback) => {
    runSequence('cleanDist', ['compile', 'copyHtmlAndCss'], ['bundle'], ['zip'], callback);
})