<template>
  <div class="klineBox">
    <!--交易量折线图 -->
    <div id="main" class="main"></div>

    <!-- option 日 周 月 -->
    <ul class="option clearfix">
        <li :class="{active:datesec}" @click="date">日</li>
        <li :class="{active:weeksec}" @click="week">周</li>
        <li :class="{active:monthsec}" @click="month">月</li>
        <li :class="{active:quartersec}" @click="quarter">季度</li>
    </ul>
  </div>
</template>
<script>
    var echarts = require('echarts');
    var myChart;
    import {rawData1,rawData2,rawData3,rawData4} from '../data/data.js';

    var dates = rawData1.map(function (item) {
        return item[0];
    });
    var data = rawData1.map(function (item) {
        return [+item[1], +item[2], +item[5], +item[6]];
    });
    var option = {
        backgroundColor: '#21202D',
        legend: {
            data: ['日K'],
            inactiveColor: '#777',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'none',
            axisPointer: {
                animation: false,
                type: 'cross',
                lineStyle: {
                    color: '#376df4',
                    width: 2,
                    opacity: 1
                }
            }
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#8392A5' } }
        },
        yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: '#8392A5' } },
            splitLine: { show: false },
            axisLabel: {
                    formatter: '{value}',
                    rotate:60
                }
        },
        dataZoom: [{
            textStyle: {
                color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            dataBackground: {
                areaStyle: {
                    color: '#8392A5'
                },
                lineStyle: {
                    opacity: 0.8,
                    color: '#8392A5'
                }
            },
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        animation: false,
        series: [
            {
                type: 'candlestick',
                name: '日K',
                data: data,
                itemStyle: {
                    normal: {
                        color: '#FD1050',
                        color0: '#0CF49B',
                        borderColor: '#FD1050',
                        borderColor0: '#0CF49B'
                    }
                }
            }
        ]
    };
    export default{
        data(){
          return{
            datesec:false,
            weeksec:false,
            monthsec:false,
            quartersec:false
          }
        },
        methods:{
            date(){
                this.datesec=true;
                this.weeksec=false;
                this.monthsec=false;
                this.quartersec=false;
                dates = rawData1.map(function (item) {
                    return item[0];
                });
                data = rawData1.map(function (item) {
                    return [+item[1], +item[2], +item[5], +item[6]];
                });
                option = {
                    backgroundColor: '#21202D',
                    legend: {
                        data: ['日K'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false },
                        axisLabel: {
                                formatter: '{value}',
                                rotate:60
                            }
                    },
                    dataZoom: [{
                        textStyle: {
                            color: '#8392A5'
                        },
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        dataBackground: {
                            areaStyle: {
                                color: '#8392A5'
                            },
                            lineStyle: {
                                opacity: 0.8,
                                color: '#8392A5'
                            }
                        },
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    animation: false,
                    series: [
                        {
                            type: 'candlestick',
                            name: '日K',
                            data: data,
                            itemStyle: {
                                normal: {
                                    color: '#FD1050',
                                    color0: '#0CF49B',
                                    borderColor: '#FD1050',
                                    borderColor0: '#0CF49B'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option,true)
            },
            week(){
                this.datesec=false;
                this.weeksec=true;
                this.monthsec=false;
                this.quartersec=false;
                dates = rawData2.map(function (item) {
                    return item[0];
                });
                data = rawData2.map(function (item) {
                    return [+item[1], +item[2], +item[5], +item[6]];
                });
                option = {
                    backgroundColor: '#21202D',
                    legend: {
                        data: ['周'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false },
                        axisLabel: {
                                formatter: '{value}',
                                rotate:60
                            }
                    },
                    animation: false,
                    series: [
                        {
                            type: 'candlestick',
                            name: '周',
                            data: data,
                            itemStyle: {
                                normal: {
                                    color: '#FD1050',
                                    color0: '#0CF49B',
                                    borderColor: '#FD1050',
                                    borderColor0: '#0CF49B'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option,true)
            },
            month(){
                this.datesec=false;
                this.weeksec=false;
                this.monthsec=true;
                this.quartersec=false;
                dates = rawData3.map(function (item) {
                    return item[0];
                });
                data = rawData3.map(function (item) {
                    return [+item[1], +item[2], +item[5], +item[6]];
                });
                option = {
                    backgroundColor: '#21202D',
                    legend: {
                        data: ['月'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false },
                        axisLabel: {
                                formatter: '{value}',
                                rotate:60
                            }
                    },
                    animation: false,
                    series: [
                        {
                            type: 'candlestick',
                            name: '月',
                            data: data,
                            itemStyle: {
                                normal: {
                                    color: '#FD1050',
                                    color0: '#0CF49B',
                                    borderColor: '#FD1050',
                                    borderColor0: '#0CF49B'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option,true)
            },
            quarter(){
                this.datesec=false;
                this.weeksec=false;
                this.monthsec=false;
                this.quartersec=true;
                dates = rawData4.map(function (item) {
                    return item[0];
                });
                data = rawData4.map(function (item) {
                    return [+item[1], +item[2], +item[5], +item[6]];
                });
                option = {
                    backgroundColor: '#21202D',
                    legend: {
                        data: ['季度'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false },
                        axisLabel: {
                                formatter: '{value}',
                                rotate:60
                            }
                    },
                    animation: false,
                    series: [
                        {
                            type: 'candlestick',
                            name: '季度',
                            data: data,
                            itemStyle: {
                                normal: {
                                    color: '#FD1050',
                                    color0: '#0CF49B',
                                    borderColor: '#FD1050',
                                    borderColor0: '#0CF49B'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option,true)
            }
        },
        mounted(){
            myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(option,true);
        } 
    }
</script>
<style scoped>
  .klineBox{
    height: 400px;
    background: #21202D;
    position: relative;
  }
  .main{
    margin: 0 auto;
    width: 100%;
    height: 350px;
  }
  .option li{
    float: left;
    height: 1rem;
    line-height: 1rem;
    width: 2rem;
    margin-left: .5rem;
    color: #fff;
    text-align: center;
    border-radius: 5px;
  }
  .active{
    background:#fd1050; 
  }
</style>

