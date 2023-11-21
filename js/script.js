// Configuração do gráfico
option = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: true,
                fontSize: 30,
                fontWeight: 'bold',
                position: 'center'
            },
            color: ['#04C35C'],
            data: [
                { value: 19.25, name: '19.25' },
            ]
        }
    ]
};
// Inicializa o gráfico
var myChart = echarts.init(document.getElementById('chart-container-1'));
myChart.setOption(option);

var myChart2 = echarts.init(document.getElementById('chart-container-2'));
myChart2.setOption(option);
