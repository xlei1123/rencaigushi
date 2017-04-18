import Vue from 'vue'
import VueRouter from 'vue-router'
import personList from './components/personList'
import activity from './components/activity'
import activity2 from './components/activity2'
import buy from './components/buy'
import purchase from './components/purchase'
import sellOut from './components/sellOut'
import subsidiary from './components/subsidiary'
import selfBuyDetail from './components/selfBuyDetail'
Vue.use(VueRouter);
const routes = [
    {path:'/personList',component:personList},
    {path:'/activity/:name',component:activity},
    {path:'/activity2/:name/:code',component:activity2},
    {
    	path:'/buy/:code',
    	component:buy,
    	children:[
    		{path:'purchase',component:purchase},
    		{path:'sellOut',component:sellOut},
    		{path:'subsidiary',component:subsidiary},
    		{path:'',redirect:'purchase'}
    	]
	},
    {path:'/selfBuyDetail/:code/:num/:sum/:buy',component:selfBuyDetail},
    {path:'/',redirect:'/personList'}   
]
const router = new VueRouter({
  routes
});
// router.beforeEach((to,from,next) => {
//     console.log(to,from);
//     next();
// })
export default router
