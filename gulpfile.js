var gulp = require('gulp');
var less = require('gulp-less');
var image = require('gulp-image');

gulp.task('less', function() {
  
  return gulp
          .src('./src/less/style.less')
          .pipe(less({
            compress: true
          }))
          .on('error', function(error) {
            console.log('less error: ' + error);
          })
          .pipe(gulp.dest('./dist/css'));

});

gulp.task('image', function() {

	return gulp
			.src('./src/image/**/*')
			.pipe(image())
			.on('error', function(error) {
				console.log('image error: ' + error);
			})
			.pipe(gulp.dest('./dist/image'))

});

gulp.task('default', ['less', 'image']);

