import gulp from "gulp";
//* Configuration
import path from "../config/path.js";
//* Plugins
import loadPlugins from "gulp-load-plugins";

const gul = loadPlugins();
//* Final assembly - Обработка Final
export default () => {
	return gulp.src(path.endCss.src)
		.pipe(gul.purgecss({
			content: ['src/**/*.html']
		}))
		.pipe(gul.stripCssComments())
		.pipe(gul.size({ title: "Конечный размер файлов:" }))
		.pipe(gulp.dest(path.endCss.dest))
}