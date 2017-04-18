<template>
  <div class="con">
    <div>
      <div class="buyAction clearfix">
            <p class="code"><input type="text" placeholder="发行人姓名/代码" v-model="code"></p>
            <p class="price"><span class="de" @click="dePrice">-</span><input type="text" placeholder="买入价格" v-model="price"><span class="add" @click="addPrice">+</span></p>
            <p class="num"><span class="de" @click="deNum">-</span><input type="text" placeholder="数量" v-model="num"><span class="add" @click="addNum">+</span></p>
            <p class="sum clearfix">
              <span>总价</span>
              <input type="text" placeholder="发行人姓名/代码" v-model="sum">
            </p>
            <p class="buy">
              <button @click="sellOut">卖出</button>
            </p>
      </div>
      <div class="buyDetail">
        <ul class="out">
          <li>
            卖5:<span>10.2</span>
          </li>
          <li>
            卖4:<span>10.2</span>
          </li>
          <li>
            卖3:<span>10.2</span>
          </li>
          <li>
            卖2:<span>10.2</span>
          </li>
          <li>
            卖1:<span>10.2</span>
          </li>
        </ul>
        <ul class="in">
          <li>
            买5:<span>10.2</span>
          </li>
          <li>
            买4:<span>10.2</span>
          </li>
          <li>
            买3:<span>10.2</span>
          </li>
          <li>
            买2:<span>10.2</span>
          </li>
          <li>
            买1:<span>10.2</span>
          </li>
        </ul>
      </div>
    </div>
    <table>
      <tr>
        <th>名称/市值（元）</th>
        <th>持有（股）</th>
        <th>现价（元）</th>
        <th>盈亏（元）</th>
      </tr>
      <tr>
        <th>{{this.code}}/20.5</th>
        <th>300</th>
        <th>30</th>
        <th class="gainClass gain">3000</th>
      </tr>
    </table>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default{
      data(){
        return{
          code:'',
          price:0,
          num:0
        }
      },
      computed:{
        sum:function(){
          let sum = Math.round(parseFloat(this.price*this.num*10000).toFixed(4))/100;
          return sum/100;
        }
      },
      methods:{
          addPrice(){
            this.price++;
          },
          dePrice(){
            if(this.price<=0){
              return;
            }
            this.price--;
          },
          deNum(){
            if(this.num<=0){
              return;
            }
            this.num--;
          },
          addNum(){
            this.num++
          },
          sellOut(){
            if(this.sum==0){
              Toast('请输入卖出数量');
              return;
            }
            var self=this;
            MessageBox({
              title: '提示',
              message: '确定卖出'+self.num+'股(股市代码:'+self.code+'),如果卖出成功你将获得'+self.sum+'元',
              showCancelButton: true
            }).then(action=>{
              if(action=="confirm"){
                this.$router.push('/selfBuyDetail/'+self.code+'/'+self.num+'/'+self.sum+'/0')
              }
            })
          }
      },
      mounted(){
        this.code=this.$route.params.code;
        this.price=2.35;
          
      } 
  }
</script>
<style scoped>
  .con{
    padding-top: 1rem;
  }
  .buyAction{
    float: left;
  }
  .buyDetail{
    float: right;
    width: 6.5rem;
  }
  .buyDetail li{
    padding-left: .5rem;
    height: 1rem;
    line-height: 1rem;
  }
  .buyDetail ul.out li{
    color: #0099FF;
  }
  .buyDetail ul.in li{
    color: #fd1050;
  }
  input{
    box-sizing:border-box;
    width: 200px;
    height: 30px;
    margin-left: .5rem;
    border: 1px solid #0099FF;
    text-indent: 2em;
  }
  .price,.num{
    margin: .5rem 0 0 .5rem;
    width: 200px;
  }
  
  .price span,.num span{
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #0099FF;
    color: #fff;
    font-size: 16px;
  }
  .add{
    float: right;
  }
  .de{
    float: left;
  }
  .price input,.num input{
    width: 140px;
    margin-left: 0;
  }
  .sum{
    margin: .5rem 0 0 0.5rem;
  }
  .sum span{
    float: left;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #0099FF;
    color: #fff;
    font-size: 16px;
  }
  .sum input{
    float: left;
    margin-left: 0;
    width: 140px;
  }
  .buy button{
    margin-top: .5rem;
    margin-left: .5rem;
    display: inline-block;
    box-sizing:border-box;
    width: 200px;
    height: 30px;
    outline: none;
    background: #0099FF;
    border: none;
    color: #fff;
  }
  table{
    margin-top: 30px;
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

