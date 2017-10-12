const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const runSequence = require("run-sequence");
const gulpWebpack = require("gulp-webpack");
const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");

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

gulp.task('copyHTML', () => {
    return gulp.src("./src/html/*.html")
        .pipe(gulp.dest("./dist/src"))
})

gulp.task('bundle', () => {
    return gulp.src("./dist/src/js/main/main.js")
        .pipe(gulpWebpack({
            output: {
                filename: "dist/src/js/main.js",
            },
            entry: "./dist/src/js/main/main.js",
            // target: 'node',
            // externals: [nodeExternals()],
        }, webpack))
        .pipe(gulp.dest("./"))
})

gulp.task('default', (callback) => {
    runSequence('cleanDist', ['compile', 'copyHTML'], ['bundle'], callback);
})