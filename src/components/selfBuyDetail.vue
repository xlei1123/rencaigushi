<template>
  <div class="con">
    <mt-header title="交易详情">
      <router-link to="/personList" slot="right">
        <mt-button>完成</mt-button>

      </router-link>
    </mt-header>
    <p class="buyTip">{{tip}}</p>
    <div class="conDetail">
      <p v-if="$route.params.buy==1">
        有名股市<br>
        支付：{{$route.params.sum}}元
      </p>
      <p v-else>
        有名股市<br>
        收入：{{$route.params.sum}}元
      </p>
      <ul>
        <li class="clearfix">
          <span class="tit">股市代号</span>
          <span>{{$route.params.code}}</span>
        </li>
        <li class="clearfix">
          <span class="tit">交易数量</span>
          <span>{{$route.params.num}}</span>
        </li>
      </ul>
    </div>
    
    <p class="company">有名资本</p>
  </div>
</template>
<script>
  export default{
      data(){
        return{
          tip:''
        }
      },
      mounted(){
        if(this.$route.params.buy==1){
          this.tip="买入成功"
        }else{
          this.tip="卖出成功"
        }
      } 
  }
</script>
<style scoped>
  .con{
    height: 100%;
    background: #efefef;
  }
  .buyTip{
    padding-top: .5rem;
    text-indent: 2.2rem;
    text-align: left;
    color: #26a2ff;
    background: url('../assets/success.png') no-repeat 10px 5px;
    background-size: 1.2rem;
  }
  .conDetail{
    margin-top: 1rem;
    padding-top: 3rem;
    background: #fff;
  }
  .conDetail ul{
    margin-top: 1.5rem;
    padding: .5rem 4rem;
  }
  .conDetail ul span{
    float: right;
    color: #999;
    line-height: 1.5rem;
  }
  .conDetail ul span.tit{
    float: left;
  }
  p{
    text-align: center;
    font-size: 18px;
    color: #000;
    line-height: 1rem;
  }
  .company{
    position: fixed;
    bottom: 1rem;
    left: 0;
    width: 100%;
    text-align: center;
    color: #ccc;
  }
</style>

