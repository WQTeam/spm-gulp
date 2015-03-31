var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  
  return gulp
          .src('./src/less/style.less')
          .pipe(less({
            compress: true
          }))
          .on('error', function(error) {
            console.log('less error:' + error);
          })
          .pipe(gulp.dest('./dist/css'));

});

gulp.task('default', ['less']);

