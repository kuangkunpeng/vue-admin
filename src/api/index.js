import Vue from 'vue'
import store from '@/store'
import axios from 'axios'
axios.defaults.baseURL = process.env.API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  store.dispatch('changeLoading',true);
 return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  store.dispatch('changeLoading',false);
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(function () {
    store.dispatch('changeLoading',false);
  });
})





Vue.prototype.$ajax = axios;

export default {
	install(Vue, options) {
		Vue.prototype.getData = function (url,data,success,error) {
			this.$ajax.get(url,data).then(success).catch(error);
		}
	}
}
