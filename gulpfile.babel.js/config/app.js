import news from '../../#src/data/news.json';
import pngquant from "imagemin-pngquant";
import recompress from "imagemin-jpeg-recompress";
import loadPlugins from "gulp-load-plugins";
import pugbem from "pug-bem";

const gul = loadPlugins();
const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
	isProd: isProd,
	isDev: isDev,

	webpack: {
		mode: isProd ? "production" : "development"
	},
	pugMin: {
		pretty: isDev,
		plugins: [pugbem],
		data: {
			news: news
		},
	},
	htmlMin: {
		collapseWhitespace: isProd
	},
	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg'],
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	renameJs: {
		extname: '.js',
		suffix: '.min',
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			"Android >= 4",
			"last 3 versions",
			"Firefox >= 24",
			"Safari >= 6",
			"Opera >= 12"
		]
	},
	imagemin: ({
		verbose: true,
		interlaced: true,
		progressive: true,
		optimizationLevel: 5,
	}
	[
		recompress({
			loops: 6,
			min: 50,
			max: 90,
			quality: 'high',
			use: [pngquant({
				quality: [0.8, 1],
				strip: true,
				speed: 1
			})],
		}),
		gul.imagemin.gifsicle(),
		gul.imagemin.optipng(),
		gul.imagemin.svgo()
	]
	),
}

