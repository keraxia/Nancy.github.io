window.onload = function () {

    var chartDom = document.getElementById('chart');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            
            axisPointer: {
            shadowStyle: {
              color: 'rgba(95,70,55,0.1)',
              width: '1'
            },
            type: 'cross',
            crossStyle: {
                color: '#3c2313',
            },
            label:{
              backgroundColor:'rgba(95,70,55,0.5)'
            }
            },
            backgroundColor: 'rgba(95,70,55,0.5)',
            textStyle: {
              color: 'white',
              align:'center',
            },
            borderColor: 'rgba(95,70,55,0)'
        },
        toolbox: {
            feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
            },
        },
        legend: {
            data: ['湿咖啡渣产量', '干咖啡渣产量', '咖啡销量']
        },
        xAxis: [
            {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisPointer: {
                type: 'shadow'
            }
            }
        ],
        yAxis: [
            {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(95,70,55,0.3)',
                    width: 0.5,
                    type: 'solid',
                }
            },
            name: '咖啡渣产量',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value} kg'
            },
            },
            {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(95,70,55,0.3)',
                    width: 0.5,
                    type: 'solid',
                }
            },
            name: '咖啡销量',
            min: 0,
            max: 1200,
            interval: 240,
            axisLabel: {
                formatter: '{value} 杯'
            }
            }
        ],
        series: [
            {
            name: '湿咖啡渣产量',
            type: 'bar',
            color: '#886845',
            tooltip: {
                valueFormatter: function (value) {
                return value + ' kg';
                }
            },
            data: [45.8,45.5,45.2,45.8,46.2,36.1,34.5 ]
            },
            {
            name: '干咖啡渣产量',
            type: 'bar',
            color: '#CBAF87',
            tooltip: {
                valueFormatter: function (value) {
                return value + ' kg';
                }
            },
            data: [14.3,14.2,14.2,14.3,14.5,11.3,10.8 ]
            },
            {
            name: '咖啡销量',
            type: 'line',
            lineStyle: {
                color: '#F2944B', //改变折线颜色
                width: 4
            },
            color:'#F2944B',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                return value + ' 杯';
                }
            },
            data: [1103,1096,1089,1103,1113,869,831]
            }
        ]
        };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });

}