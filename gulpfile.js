var gulp         = require('gulp');
		rename       = require('gulp-rename');
		postcss      = require('gulp-postcss');
		assets       = require('postcss-assets');
		nested       = require('postcss-nested');
		short        = require('postcss-short');
		cssnano      = require('gulp-cssnano');
		cssnext      = require('postcss-cssnext');
		autoprefixer = require('gulp-autoprefixer');
		sass         = require('gulp-sass');
		notify       = require('gulp-notify');
		browserSync  = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
            baseDir: "./",
            notify: false
        }
		
	});
});
gulp.task('sass', function() {
		var processors = [
			short,
			nested,
			cssnext,
			assets({
				loadPaths: ['app/'],
				relativeTo: 'app/css/'
			})
		];
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on("error", notify.onError()))
	.pipe(postcss(processors))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({
		browsers: ['last 12 versions'],
		cascade: false
		}))
	.pipe(cssnano())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['app/libs/**/*.js', 'app/js/common.js'], ['scripts']);
	gulp.watch('app/*.html', browserSync.reload);
});
gulp.task('default', ['watch', 'sass']);
