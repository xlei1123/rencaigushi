<template>
  <div class="conviewBox" v-show="conviewBox">
    <mt-header title="有名股市"></mt-header>
    <ul>
      <li class="persontit">
        <p class="info">全部</p>
        <p class="money">当前股价</p>
        <p class="rose">涨跌幅</p>
      </li>
      <li v-for="(person,index) in personList" class="person" @click="goInfo(index)">
        <img :src="person.picurl" class="photo">
        <p class="info">
          <span>{{person.name}}</span><br>
          <span>{{person.code}}</span>
        </p>
        <p class="money" v-if="person.rose>0">{{person.money}}</p>
        <p class="money bottom" v-else>{{person.money}}</p>
        <p class="rose" v-if="person.rose>0">{{person.rose}}%</p>
        <p class="rose bottom" v-else>{{person.rose}}% <span></span></p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        personList:[
          {
            name:'创新学堂',
            picurl:'./static/photo/cxxt.png',
            code:8060,
            money:'1200',
            rose:2.25
          },
          {
            name:'韩寒',
            picurl:'./static/photo/hh.jpg',
            code:8008,
            money:'1200',
            rose:2.05
          },
          {
            name:'英勇',
            picurl:'./static/photo/yy.jpg',
            code:8102,
            money:'1200',
            rose:1.85
          },
          {
            name:'毕淑敏',
            picurl:'./static/photo/bsm.jpg',
            code:8083,
            money:'1200',
            rose:1.65
          },
          {
            name:'汉大帮',
            picurl:'./static/photo/hdb.jpg',
            code:8004,
            money:'1200',
            rose:1.05
          },
          {
            name:'鲁迅',
            picurl:'./static/photo/lx.jpg',
            code:8005,
            money:'1200',
            rose:0.85
          },{
            name:'徐志摩',
            picurl:'./static/photo/xzm.jpg',
            code:8006,
            money:'1200',
            rose:0.65
          },{
            name:'李达康',
            picurl:'./static/photo/ldk.jpeg',
            code:8007,
            money:'1200',
            rose:-0.25
          },{
            name:'侯亮平',
            picurl:'./static/photo/hl.jpg',
            code:8068,
            money:'1200',
            rose:-2.25
          },{
            name:'再别康桥',
            picurl:'./static/photo/zbkq.jpg',
            code:7050,
            money:'1200',
            rose:-2.45
          }
        ],
        conviewBox:true
      }
    },
    methods:{
     goInfo(index){
        this.conviewBox=false;
          this.$router.push('/activity2/'+this.personList[index].name+'/'+this.personList[index].code)
     }
    },
    mounted(){
    } 
  }
</script>
<style scoped>
  .conviewBox{
    height: 100%;
    background: #21202D;
  }
  .mint-header{
    background: #21202D;
    color: #fff;
  }
  .persontit{
    height: 2rem;
    padding: .5rem;
  }
  .persontit .info{
    padding: 0 1rem;
    line-height: 2rem;
    color: #fff;
  }
  .persontit .money{
    color: #fff;
  }
  .persontit .rose{
    background:transparent;
    color: #fff;
  }
  .person{
    height: 2rem;
    padding: .5rem;
    background: #21202D;
  }
  .person span{
    color: #fff;
  }
  .photo{
    line-height: 2rem;
    float: left;
    width: 2rem;
    height: 2rem;
  }
  .info{
    height: 2rem;
    width: 3.5rem;
    line-height: 2rem;
    float: left;
    margin-left: .5rem;
  }
  .money{
    float: left;
    height: 2rem;
    line-height: 2rem;
    margin-left: 5rem;
    color: #fd1050;
  }
  .money.bottom{
    color: #0cf49b;
  }
  .rose{
    float: right;
    height: 2rem;
    line-height: 2rem;
    padding-right: 20px;
    color: #fd1050;
    background: url(../assets/arrowTop.png) no-repeat right;
    background-size: 15px;
  }
  .rose.bottom{
    position: relative;
    background: transparent;
    color: #0cf49b;
  }
  .rose.bottom span{
    position: absolute;
    right: -5px;
    top: .8rem;
    width: 15px;
    height: 15px;
    background: url(../assets/arrowBottom.png) no-repeat right;
    background-size: 100%;
    -webkit-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -o-transform:rotate(180deg);
    transform:rotate(180deg);
  }
  .info{
    line-height: 1rem;
  }
</style>

