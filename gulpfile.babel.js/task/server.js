//* Server
export default () => {
	$.browserSync.init({
		server: {
			baseDir: $.path.root
		},
		notify: false,
	});
};