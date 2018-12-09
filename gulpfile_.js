'use strict';

// https://gist.github.com/klugjo/739ba11d15191f3162b9
var filename = 'index';
var os = require('os');
var pkg = require('./package.json'),
  //autoprefixer = require('gulp-autoprefixer'),
  //browserify = require('browserify'),
  //buffer = require('vinyl-buffer'),
  // chmod = require('gulp-chmod'),
  open = require('gulp-open'), // Gulp browser opening plugin
  connect = require('gulp-connect'),
  //csso = require('gulp-csso'),
  // del = require('del'),
  // exec = require('gulp-exec'),
  //ghpages = require('gh-pages'),
  gulp = require('gulp'),
  safe = require('gulp-safe'),
  //gutil = require('gulp-util'),
  // jade = require('gulp-jade'),
  path = require('path'),
  plumber = require('gulp-plumber'), // plumber prevents pipe breaking caused by errors thrown by plugins
  // rename = require('gulp-rename'),
  //source = require('vinyl-source-stream'),
  //stylus = require('gulp-stylus'),
  through = require('through'),
  //uglify = require('gulp-uglify'),
  isDist = process.argv.indexOf('deploy') >= 0,
  MAX_HTML_FILE_SIZE = 100 * 1024 * 1024;

// Configuration
var configuration = {
    // paths: {
    //     src: {
    //         html: './src/*.html',
    //         css: [
    //             './src/css/bootstrap.min.css',
    //             './src/css/main.css'
    //         ]
    //     },
    //     dist: './dist'
    // },
    localServer: {
        port: 8000,
        url: 'http://localhost:8000/'+filename+'.html'
    }
};

var params = {
    uri:"http://localhost:8000/example.html"
  };

//gulp.task('js', ['clean:js'], function() {
  // see https://wehavefaces.net/gulp-browserify-the-gulp-y-way-bb359b3f9623
//  return browserify('src/scripts/main.js').bundle()
    // NOTE this error handler fills the role of plumber() when working with browserify
//    .on('error', function(e) { if (isDist) { throw e; } else { gutil.log(e.stack); this.emit('end'); } })
//    .pipe(source('src/scripts/main.js'))
//    .pipe(buffer())
//    .pipe(isDist ? uglify() : through())
//    .pipe(rename('build.js'))
//    .pipe(gulp.dest('public/build'))
//    .pipe(connect.reload());
//});

gulp.task('html', function() {

  var destin = "./";

  return gulp.src(filename+'.html')
    // .pipe(isDist ? through() : plumber())
    // .pipe(safe(destin, { backup: true })) // here we go! just backup
    // .pipe(safe(destin, { backup: false })) // here we go! just backup
    // .pipe(gulp.dest(''))
    // .pipe(gulp.dest(destin))
    .pipe(connect.reload());
});

// gulp.task('html', ['clean:html'], function() {
//   return gulp.src('example.adoc')
//     .pipe(isDist ? through() : plumber())
//     .pipe(exec('bundle exec asciidoctor-revealjs -o - example.adoc', function cb(err, stdout, stderr) {
//         console.log(stdout); // outputs the normal messages
//         console.log(stderr); // outputs the error messages
//         return 0; // makes gulp continue even if the command failed
//     }))
//     .pipe(exec.reporter({ stdout: false }))
//     .pipe(rename('example.html'))
//     .pipe(chmod(644))
//     .pipe(gulp.dest(''))
//     .pipe(connect.reload());
// });

//gulp.task('css', ['clean:css'], function() {
//  return gulp.src('src/styles/main.styl')
//    .pipe(isDist ? through() : plumber())
//    .pipe(stylus({ 'include css': true, paths: ['./node_modules'] }))
//    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
//    .pipe(isDist ? csso() : through())
//    .pipe(rename('build.css'))
//    .pipe(gulp.dest('public/build'))
//    .pipe(connect.reload());
//});

//gulp.task('fonts', ['clean:fonts'], function() {
//  return gulp.src('src/fonts/*')
//    .pipe(gulp.dest('public/fonts'))
//    .pipe(connect.reload());
//});

//gulp.task('images', ['clean:images'], function() {
//  return gulp.src('src/images/**/*')
//    .pipe(gulp.dest('public/images'))
//    .pipe(connect.reload());
//});

//gulp.task('clean', function() {
//  return del('public');
//});

// gulp.task('clean:html', function() {
//   return del(filename+'.html');
// });

//gulp.task('clean:js', function() {
//  return del('public/build/build.js');
//});

//gulp.task('clean:css', function() {
//  return del('public/build/build.css');
//});

//gulp.task('clean:fonts', function() {
//  return del('public/fonts');
//});

//gulp.task('clean:images', function() {
//  return del('public/images');
//});

gulp.task('connect', ['html'], function() {
  connect.server({ root: '.', port: 8000, livereload: true });
});

gulp.task('disconnect', function() {
  //connect.server({
  //  port: 8888
  //});
  // run some headless tests with phantomjs 
  // when process exits: 
  connect.serverClose();
});

var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

// gulp.task('open', function(){
//   gulp.src('./'+filename+'.html')
//   .pipe(open({app: browser, uri: configuration.localServer.url}));
// });

gulp.task('open', ['connect'], function(){
  gulp.src('./'+filename+'.html')
  .pipe(open({app: browser, uri: configuration.localServer.url}));
});

// gulp.task('open', ['connect'], function() {
//   gulp.src(filename+'.html')
//   .pipe(open({ uri: configuration.localServer.url }));
//   });

// Gulp task to open the default web browser
// gulp.task('open', function(){
//     gulp.src('./example.html')
//         .pipe(open(params));
// });
// gulp.task('open', function(){
//     gulp.src('./example.html')
//         .pipe(open({uri: configuration.localServer.url}));
// });
// gulp.task('open', function(){
//   gulp.src('./example.html')
//   .pipe(open());
// });

gulp.task('watch', function() {
  gulp.watch('**/*.html', ['html']);
  //gulp.watch('src/scripts/**/*.js', ['js']);
  //gulp.watch('src/styles/**/*.styl', ['css']);
  //gulp.watch('src/images/**/*', ['images']);
  //gulp.watch('src/fonts/*', ['fonts']);
});

//gulp.task('deploy', ['clean', 'build'], function(done) {
//  ghpages.publish(path.join(__dirname, 'public'), { logger: gutil.log }, done);
//});

//gulp.task('build', ['js', 'html', 'css', 'fonts', 'images']);
gulp.task('html');
// gulp.task('serve', ['connect', 'open', 'watch']);
gulp.task('serve', ['open', 'watch']);
gulp.task('default', ['html']);
