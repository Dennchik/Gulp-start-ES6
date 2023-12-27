const pathSrc = "./#src";
const pathDest = "./build";
const pathEnd = "./public";

export default {
	root: pathDest,

	pug: {
		src: pathSrc + '/pug/pages/**/*.pug',
		watch: pathSrc + '/pug/**/*.pug',
		dest: pathDest,
	},
	html: {
		src: pathSrc + "/*.html",
		watch: pathSrc + "/**/*.html",
		dest: pathDest
	},
	scss: {
		src: pathSrc + '/scss/*.{sass,scss}',
		watch: pathSrc + '/scss/**/*.{sass,scss}',
		dest: pathDest + '/css',
	},
	css: {
		src: pathSrc + "/css/*.css",
		watch: pathSrc + "/css/**/*.css",
		dest: pathDest + "/css"
	},
	endCss: {
		src: pathDest + "/**/*.css",
		watch: pathDest + "/**/*.css",
		dest: pathEnd + "/css"
	},
	js: {
		src: pathSrc + "/js/*.js",
		watch: pathSrc + "/js/**/*.js",
		dest: pathDest + "/js"
	},
	image: {
		src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
		watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
		dest: pathDest + "/img"
	},
	fonts: {
		src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		dest: pathDest + "/fonts"
	},
	fontsStyle: {
		src: pathSrc + '/scss/core/_fonts.scss',
		watch: pathSrc + '/scss/**/**.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts/',
	},
	final: {
		src: pathDest + "/**/*.*",
		dest: pathEnd
	},
}






