// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// import store from './store.js'
// http://agentapi.euming.com   正式环境
// http://192.168.50.110:8081/AgentAPI  测试环境
// http://192.168.50.123:8085  本地环境
Vue.prototype.domain = 'http://agentapi.euming.com';

Vue.filter('telFilter',function(val){
  return val.substring(0,3)+"****"+val.substring(8,11); 
})
Vue.directive('tap',{
    bind:function(el,binding){
        var startTx, startTy,endTx,endTy;
        el.addEventListener("touchstart",function(e){
            var touch=e.touches[0];
            startTx = touch.clientX;
            startTy = touch.clientY;
            el.addEventListener("touchend",function(e){
                    var touch = e.changedTouches[0];
                    endTx = touch.clientX;
                    endTy = touch.clientY;
                    if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6){
                        var method = binding.value.method;
                        var params = binding.value.params;
                        method(params);
                    }
                },false);
        },false );
        
    }
})
/* eslint-disable no-new */
// created by xianglei 2017
new Vue({
  el: '#app',
  router:router,
  // store,
  // render: h => h(App)
  template: '<App/>',
  components: { App }
})
