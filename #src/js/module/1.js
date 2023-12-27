import gulp from 'gulp';
import browserSync from 'browser-sync';
//* Configuration
import path from './config/path.js';
import app from './config/app.js';
//* Tasks
import clear from './task/clear';
import html from './task/html';
import css from './task/css';
import js from './task/js';
import image from './task/image';
import fonts from './task/fonts';
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
//* Observation
const watcher = () => {
	gulp.watch(path.html.watch, html).on('all', browserSync.reload);
	gulp.watch(path.css.watch, css).on('all', browserSync.reload);
	gulp.watch(path.js.watch, js).on('all', browserSync.reload);
	gulp.watch(path.image.watch, image).on('all', browserSync.reload);
	gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
};
const end = gulp.series(clear,
	clearEnd,
	gulp.parallel(html, css, js, image, fonts),
	fontsStyle,
	final);
const dev = gulp.series(end,
	gulp.parallel(server, watcher),
);
//* Call back
export { clear };
export { clearEnd };
export { html };
export { css };
export { js };
export { image };
export { fonts };
export { fontsStyle };
export { final };
//* Assembly
export default app.isProd ? end : dev;