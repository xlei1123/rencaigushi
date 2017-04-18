<template>
  <div class="conviewBox">
    <mt-header :title="title">
        <router-link to="/personList" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <!--交易量折线图 -->
    <div id="main" class="main"></div>
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
        <p class="tit">|&nbsp大额交易</p>
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
  </div>
</template>
<script>
  var echarts = require('echarts');
  var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        backgroundColor: '#21202D',
        legend: {
            data:['买入量','卖出量','市场估值'],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: { lineStyle: { color: '#8392A5' } }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '交易量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}',
                    rotate:60
                },
                axisLine: { lineStyle: { color: '#8392A5' } }
            }
        ],
        series: [
            {
                name:'买入量',
                type:'bar',
                data:[7.0, 23.2, 76.7, 135.6, 162.2, 180.6, 100.0, 25.6,6.4, 3.3]
            },
            {
                name:'卖出量',
                type:'bar',
                data:[9.0, 26.4, 70.7, 175.6, 182.2, 10.7, 160.8,28.7, 6.0, 2.3]
            },
            {
                name:'市场估值',
                type:'line',
                data:[9.3, 27.5, 75.2, 170.3, 200.4, 150.0, 120.3, 120.5, 120.0, 110.2]
            }
        ]
    };
  export default{
    data(){
      return{
        title:'',
        personList:[]
      }
    },
    methods:{
     
    },
    mounted(){
        this.title=this.$route.params.name;
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option)
    } 
  }
</script>
<style scoped>
  .conviewBox{
    height: 100%;
    position: relative;
    background: #21202D;
  }
  .mint-header{
    background: #21202D;
    color: #fff;
  }
  .main{
    height: 50%;
  }
  .summary{
    padding: .5rem;
    color: #fff;
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
</style>

