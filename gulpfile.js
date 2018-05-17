var gulp = require('gulp'),
	sass = require('gulp-sass'),
	webserver = require('gulp-webserver'),
	jshint = require('gulp-jshint');



// SCSS Compile
gulp.task('sass', function() {
	return gulp.src('app/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'));
});



//web server 
gulp.task('webserver', function(){
	return gulp.src('app')
		.pipe(webserver({
			port: '4020',
			livereload: true,
			open: true
		}));
});

//watch files
gulp.task('watch', function(){
	gulp.watch('app/sass/style.scss', ['sass']);
});

//js hint
gulp.task('lint', function() {
  return gulp.src('app/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-jshint-file-reporter', {
    	filename: __dirname + '/jshint-output.log'
    }));
});

//default task
gulp.task('default', ['sass', 'watch', 'lint', 'webserver']);