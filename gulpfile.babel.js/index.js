global.$ = {
	//* Plugins
	gulp: require('gulp'),
	gul: require('gulp-load-plugins')(),
	sass: require('gulp-sass')(require('sass')),
	gulpIf: require('gulp-if'),
	//* Configuration
	path: require('./config/path'),
	app: require('./config/app'),
};
import gulp from 'gulp';
import browserSync from 'browser-sync';
//* Configuration
import path from './config/path.js';
import app from './config/app.js';
//* Tasks
import requireDir from 'require-dir';
const task = requireDir('./task', { recurse: true });
//* Tasks
import clear from './task/clear';
import pug from './task/pug';
import scss from './task/scss';
import js from './task/js';
import image from './task/image';
import fonts from './task/fonts';
import clearFonts from './task/clearFonts';
import clearEnd from './task/clearEnd';
import fontsStyle from './task/fontStyle';
import final from './task/final';

//* Server
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root,
		},
	});
};
const change = gulp.series(clearFonts, fonts, fontsStyle);
//* Observation
const watcher = () => {
	$.gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
	$.gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
	$.gulp.watch(path.js.watch, js).on('all', browserSync.reload);
	$.gulp.watch(path.image.watch, image).on('all', browserSync.reload);
	$.gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
	$.gulp.watch(path.fontsStyle.watch, change).on('all', browserSync.reload);
};
const end = gulp.series(
	clear,
	clearEnd,
	gulp.parallel(pug, scss, js, image, fonts),
	fontsStyle,
	final);
const dev = gulp.series(
	end,
	$.gulp.parallel(watcher, server),
);

//* Call back
export { clear };
export { clearFonts };
export { pug };
export { scss };
export { js };
export { image };
export { fonts };
export { fontsStyle };
export { final };
//* Assembly
export default app.isProd ? end : dev;