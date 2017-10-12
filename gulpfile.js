const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");
const runSequence = require("run-sequence");

var tsCode = ts.createProject("tsconfig.json");

gulp.task('compile', () => {
    return tsCode.src()
        .pipe(tsCode())
        .js.pipe(gulp.dest('./dist'));
})

gulp.task('cleanDist', () => {
    return gulp.src('./dist')
        .pipe(clean());
})

gulp.task('default', (callback) => {
    runSequence('cleanDist', 'compile', callback);
})