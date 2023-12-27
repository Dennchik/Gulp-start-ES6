import gulp from "gulp";
// //* Configuration
import path from "../config/path.js";
import app from "../config/app.js";
// //* Plugins
import loadPlugins from "gulp-load-plugins";

const gul = loadPlugins();
//* Processing - Html
export default () => {
	return gulp.src(path.html.src)
		.pipe(gul.plumber({
			errorHandler: gul.notify.onError(error => ({
				title: "Html",
				message: error.message
			}))
		}))
		.pipe(gul.fileInclude())
		.pipe(gul.webpHtml())
		.pipe(gul.size({ title: "До сжатия-Html:" }))
		.pipe(gul.htmlmin(app.htmlMin))
		.pipe(gul.size({ title: "После сжатия-Html:" }))
		.pipe(gulp.dest(path.html.dest));
}

