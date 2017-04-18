<template>
  <div class="conviewBox">
    <mt-header :title="title">
      <router-link to="/personList" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 今日该股行情 -->
    <div class="today">
        <table>
          <tr>
              <th class="one top">1.82</th>
              <th class="max">最高：<span>1.86</span></th>
              <th class="now">今开：<span>1.71</span></th>
          </tr>
          <tr>
              <th class="one">3.15%</th>
              <th class="min">最低：<span>1.65</span></th>
              <th>换手：0.2%</th>
          </tr>
        </table>
    </div>
    <!--交易量折线图 -->
    <!-- <div id="main" class="main"></div> -->
    <kline></kline>
    <!-- 简介 -->
    <div class="summary">
        <p class="tit">|&nbsp个人简介</p>
        <table>
            <tr>
                <th>姓名:</th>
                <th>{{title}}</th>
            </tr>
            <tr>
                <th>地区:</th>
                <th>北京</th>

            </tr>
            <tr>
                <th>名族:</th>
                <th>汉族</th>

            </tr>
            <tr>
                <th>年龄:</th>
                <th>23</th>

            </tr>
            <tr>
                <th>学校:</th>
                <th>北京大学</th>
            </tr>
        </table>
    </div>
    <!-- 大额交易记录 -->
    <div class="record">
        <p class="tit">|&nbsp近期大额交易</p>
        <ul>
            <li> <span>*</span>&nbsp2017.04.03发布消息参加竞选北京大学学生会主席，有大额买入2000￥。
            </li>
            <li> <span>*</span>&nbsp2017.04.23发布消息竞选北京大学学生会主席成功，有大额买入5000￥。
            </li>
            <li> <span>*</span>&nbsp2017.05.23发布消息举办个人作品展前期投入，有大额卖出2000￥。
            </li>
        </ul>
    </div>
    <!-- 近期公告 -->
    <div class="Notice">
        <p class="tit">|&nbsp近期公告</p>
        <ul>
            <li class="clearfix">
                个人创新创业讲堂定于2017.05.08在创新学堂平台开课
                <span style="float:right;">2017年04月12日</span>
            </li>
            <li class="clearfix">
                个人创新创业讲堂定于2017.05.08在创新学堂平台开课
                <span style="float:right;">2017年04月12日</span>
            </li>
        </ul>
    </div>
    <!-- 买入 -->
    <div class="buy">
        <span @click="goBuy"></span>
    </div>
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
                this.$router.push('/buy/'+this.$route.params.code)
            }
        },
        mounted(){
            this.title=this.$route.params.name;
            // var myChart = echarts.init(document.getElementById('main'));
            // setTimeout(function(){myChart.setOption(option1)},10)
            
        } 
    }
</script>
<style scoped>
  .conviewBox{
    height: 100%;
    background: #21202D;
    position: relative;
  }
  .mint-header{
    background: #21202D;
    color: #fff;
  }
  .today th{
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
  .main{
    margin: 0 auto;
    width: 90%;
    height: 60%;
  }
  .summary{
    padding: .5rem;
    color: #fff;
    background: #21202D;
  }
  table{
    border: none;
  }
  th{
    text-align: left;
    border: none;
    width: 5rem;
    height: 1rem;
    color: #fff;
  }
  .summary th{
    width: 3rem;
  }
  .today .one{
    color: #fd1050;
  }
  .top{
    background: url(../assets/arrowTop.png) no-repeat 3.2rem;
    background-size: 15px;
  }
  .max span{
    color: #fd1050;
  }
  .min span,.now span{
    color: #0cf49b;
  }
  /*大额交易记录*/
  .record{
    padding: .5rem;
    background: #21202D;
  }
  .tit{
    height: 2rem;
    line-height: 2rem;
    color: #0cf49b;
    font-size: 16px;
    font-weight: bold;
  }
  .record li{
    line-height: 1rem;
    font-size: 14px;
    color: #fff;
  }
  .record li span{
    color: #0cf49b;
  }
  /*公告*/
  .Notice{
    padding: .5rem;
    background: #21202D;
  }
  .Notice .tit{
    height: 2rem;
    line-height: 2rem;
    color: #fd1050;
    font-size: 16px;
    font-weight: bold;
  }
  .Notice li{
    line-height: 1rem;
    font-size: 14px;
    color: #fff;
  }
  .Notice li span{
    color: #fd1050;
  }
  .buy{
    position: fixed;
    bottom: 1rem;
    right: 0px;
    width: 100px;
    height: 50px;
    text-align: right;
  }
  .buy span{
    display: inline-block;
    width: 50px;
    height: 30px;
    background: url(../assets/buy.png) no-repeat;
    background-size: contain;
  }
</style>

