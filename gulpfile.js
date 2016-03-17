var gulp = require('gulp');
var bs = require('browser-sync').create('github');
const ROOT = __dirname;

gulp.task('default', () => {

    bs.init({
        server: {
            baseDir: ROOT,
            index: 'index.html'
        },
        browser: 'google chrome',
        port: 2222,
        ui: {
            port: 3333
        }
    });

});
