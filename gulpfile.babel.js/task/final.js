import gulp from "gulp";
//* Configuration
import path from "../config/path.js";
//* Plugins
import loadPlugins from "gulp-load-plugins";

const gul = loadPlugins();
//* Final assembly - Обработка Final
export default () => {
	return gulp.src(path.final.src)
		.pipe(gul.size({ title: "Конечный размер файлов:" }))
		.pipe(gulp.dest(path.final.dest))
}