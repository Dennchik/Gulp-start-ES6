// //* Configuration
import path from "../config/path.js";
import app from "../config/app.js";

//* Processing - Pug
export default () => {
	return $.gulp.src(path.pug.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "PUG",
				message: error.message
			}))
		}))
		.pipe($.gul.pug(app.pugMin))
		.pipe($.gul.webpHtml())
		.pipe($.gulp.dest(path.pug.dest));
};