<template>
  <div class="con">
    <div class="sidiaryDetail">
      <ul class="clearfix top">
        <li>
          可用余额(元)<br>
          1000.00
        </li>
        <li>
          持仓市值(元)<br>
          14340.00
        </li>
      </ul>
      <table>
        <tr>
          <th>名称/市值（元）</th>
          <th>持有（股）</th>
          <th>现价（元）</th>
          <th>盈亏（元）</th>
        </tr>
        <tr v-for="sidiary in sidiarys">
          <th>{{sidiary.name}}/{{sidiary.cap}}</th>
          <th>{{sidiary.num}}</th>
          <th>{{sidiary.nowMoney}}</th>
          <th :class="{gainClass:sidiary.gain>0,gain:true}">{{sidiary.gain}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
        return{
          gain:30,
          sidiarys:[{name:'创新学堂',cap:'80',num:300,nowMoney:20.5,gain:300},{name:'韩寒',cap:'78',num:100,nowMoney:10.5,gain:-200.5},{name:'毕淑敏',cap:'93',num:300,nowMoney:18.5,gain:100},{name:'汉大帮',cap:'62',num:80,nowMoney:20.5,gain:80}]
        }
      }
  }
</script>
<style scoped>
  .top{
    padding: .5rem 0;
    border-bottom: 1px solid #ccc;
  }
  .top li{
    float: left;
    width: 50%;
    text-align: center;
    line-height: 1.5rem;
    font-size: 16px;
  }
  .top li:nth-child(1){
    box-sizing:border-box;
    border-right: 2px solid #ccc;
  }
  table{
    margin-top: 10px;
    width: 100%;
  }
  th{
    border: none;
    height: 1.5rem;
  }
  .gain{
    color: #0099FF;
  }
  .gain.gainClass{
    color: #fd1050;
  }
</style>

