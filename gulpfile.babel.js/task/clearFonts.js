//* Deleting a directory - Fonts
import del from "del";
//* Конфигурация
import path from "../config/path.js";
export default () => {
	return del(path.fontsStyle.dest);
};
