import gulp from 'gulp';
//* Configuration
import path from '../config/path.js';
import app from '../config/app.js';
//* Plugins
import gulpIf from 'gulp-if';
import loadPlugins from 'gulp-load-plugins';

const gul = loadPlugins();
//* Processing - Css
export default () => {
	return gulp.src(path.css.src)
		.pipe(gul.plumber({
			errorHandler: gul.notify.onError(error => ({
				title: 'CSS',
				message: error.message,
			})),
		}))
		.pipe(gulpIf(app.isDev, gul.sourcemaps.init({
			loadMaps: true,
		})))
		.pipe(gul.stripCssComments())
		.pipe(gul.webpCss())
		.pipe(gul.debug({ title: 'webpCss' }))
		.pipe(gul.groupCssMediaQueries())
		.pipe(gul.autoprefixer(app.autoprefixer))
		.pipe(gul.shorthand())
		.pipe(gulpIf(app.isDev, gul.sourcemaps.write('.', {
			includeContent: false,
		})))
		.pipe(gulp.dest(path.css.dest))
		.pipe(gul.size({ title: 'До сжатия-css:' }))
		.pipe(gulpIf(app.isProd, gul.csso('style.css')))
		.pipe(gulpIf(app.isProd, gul.rename({
			basename: 'style',
			extname: '.css',
			suffix: '.min',
		})))
		.pipe(gul.size({ title: 'После сжатия-css:' }))
		.pipe(gulp.dest(path.css.dest));
};
