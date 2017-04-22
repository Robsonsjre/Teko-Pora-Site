var gulp = require('gulp')
var concat = require('gulp-concat')
var deporder = require('gulp-deporder')
var stripdebug = require('gulp-strip-debug')
var uglify = require('gulp-uglify')
var newer = require('gulp-newer')
var imagemin = require('gulp-imagemin')
var htmlclean = require('gulp-htmlclean')

// folders
var folder = {
    src: 'html/',
    build: 'build/'
  }

//gulp.task('images', function() {
//  var out = folder.build + 'images/';
//  return gulp.src(folder.src + '/**/*')
//    .pipe(newer(out))
//    .pipe(imagemin({ optimizationLevel: 3 }))
//    .pipe(gulp.dest(out));
//});

gulp.task('html', function() {
  var
    out = folder.build + 'html/',
    page = gulp.src(folder.src + '**/*')
      .pipe(newer(out));

  // minify production code
    page = page.pipe(htmlclean());

  return page.pipe(gulp.dest(out));
});