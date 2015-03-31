var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  
  return gulp
          .src('./src/less/style.less')
          .pipe(less({
            compress: true
          }))
          .on('error', function(err) {
            console.log(err);
          })
          .pipe(gulp.dest('./src/less'));

});

gulp.task('default', ['less']);

