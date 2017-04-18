<template>
  <div class="conviewBox">
    <mt-header title="交易">
      <router-link to="/personList" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- option -->
    <div class="option">
      <ul class="clearfix">
        <li><router-link to="purchase">买入</router-link></li>
        <li><router-link to="sellOut">卖出</router-link></li>
        <li><router-link to="subsidiary">已购</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
    
    import Kline from './kline'
    export default{
        data(){
          return{
            title:''
          }
        },
        components:{
            Kline
        },
        methods:{
            goBuy(){
                this.$router.push('/')
            }
        },
        mounted(){
            this.title=this.$route.params.name;
            
        } 
    }
</script>
<style scoped>
  .conviewBox{
    height: 100%;
    position: relative;
  }
  .mint-header{
    background: #21202D;
    color: #fff;
  }
  .option ul{
    display: flex;
  }
  .option ul li{
    flex:1;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    
  }
  .option ul li a{
    font-size: 16px;
    padding-bottom: 5px;
  }
  .option ul li .router-link-active{
    color: #0099FF;
    border-bottom: 2px solid #0099FF;
  }
</style>

