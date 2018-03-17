'use strict';

var gulp		 = require('gulp'),
	$			 = require('gulp-load-plugins')(),
	del			 = require('del'),
	autoprefixer = require('autoprefixer'),
	uglify		 = require('gulp-uglify'),
	concat		 = require('gulp-concat'),
	flexibility  = require('postcss-flexibility'),
	mqpacker	 = require('css-mqpacker'),
	gulpif 		 = require('gulp-if'),
	fs			 = require('fs'),
	named		 = require('vinyl-named'),
	path		 = require('path'),
	pkg			 = require('./package.json');

var config = {
	sourceMaps: !$.util.env.production
};

var paths = {
	scripts : [
		'content/assets_src/js/**/*.js'
	],
	js : [
		'content/assets_src/js/vendor/jquery-1.11.0.min.js',
		'content/assets_src/js/vendor/*.js',
		'content/assets_src/js/controller/*.js'
	],
	jslint  : ['content/assets_src/js/**/*.js', '!content/assets_src/js/vendor/*.js'],
	styles  : ['content/assets_src/sass/**/*.scss'],
	images  : 'content/assets_src/images/**/*.{png,jpeg,jpg,gif,svg}',
	extras: ['content/assets_src/*.*', 'content/assets_src/fonts/**/*', 'content/assets_src/files/**/*', 'content/assets_src/docs/**/*'],
	views: 'Views/**/*',
	dest    : {
		scripts : './Content/assets/js',
		styles  : './Content/assets/css',
		images  : './Content/assets/images',
		extras  : './Content/assets/'
	}
};

gulp.task('scripts', function () {
	return gulp.src(paths.js)
		.pipe($.plumber())
		.pipe(gulpif(config.sourceMaps, $.sourcemaps.init()))
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulpif(config.sourceMaps, $.sourcemaps.write()))
		.pipe(gulp.dest(paths.dest.scripts));
});

gulp.task('lint', function () {
	return gulp.src(paths.jslint)
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe($.plumber())
		.pipe($.util.env.production ? $.util.noop() : $.sourcemaps.init() )
		.pipe($.sass({
			outputStyle: $.util.env.production ? 'compressed' : 'nested',
			includePaths: [
				'node_modules',
				'./content/assets/sass'
			]
		}).on('error', $.sass.logError))
		.pipe($.postcss([ autoprefixer(), mqpacker({sort: true}), flexibility() ]))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(paths.dest.styles));
});

gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe($.plumber())
		.pipe($.newer(paths.dest.images))
		.pipe($.imagemin({
			optimizationLevel: $.util.env.production ? 5 : 1,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(paths.dest.images));
});

gulp.task('extras', function () {
	return gulp.src(paths.extras, {base: 'content/assets_src'})
		.pipe($.newer(paths.dest.extras))
		.pipe(gulp.dest(paths.dest.extras));
});

gulp.task('views', function () {
    return gulp.src(paths.views)
});

gulp.task('clean', function () {
	return del([paths.dest.extras]);
});

gulp.task('watch', ['lint', 'scripts', 'styles', 'images', 'extras', 'views'], function(){
	gulp.watch(paths.jslint, ['lint']);
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.extras, ['extras']);
	gulp.watch(paths.views, ['views']);
});
