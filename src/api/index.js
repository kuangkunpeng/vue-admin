import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = process.env.API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$ajax = axios;

export default {
	install(Vue, options) {
		Vue.prototype.checkLogin = function (url,data,success,error) {
			this.$ajax.get(url,data).then(success).catch(error);
		}
	}
}
