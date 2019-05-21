<template>
  <canvas id="canvas" width="500" height="500"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
    data() {
        return {
            myChart: null,
            chartLabels: ['13-02-2019'],
            chartData: [0],
        };
    },
    methods: {
        draw(ctx) {
            this.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.chartLabels,
                    datasets: [
                        {
                            label: 'Stan konta',
                            data: this.chartData,
                            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                            borderColor: ['rgba(255,99,132,1)'],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    lineTension: 0,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    padding: 25,
                                },
                            },
                        ],
                    },
                },
            });
        },
        updateChart(newLabels, newData) {
            console.log('Changing labels: ' + newLabels);
            this.chartData = newData;
            this.chartLabels = newLabels;
            this.myChart.data.labels = this.chartLabels;
            this.chartData.forEach(element => {
                this.myChart.data.datasets.forEach(dataset => {
                    dataset.data.pop();
                });
            });

            this.chartData.forEach(element => {
                this.myChart.data.datasets.forEach(dataset => {
                    dataset.data.push(element);
                });
            });

            this.myChart.update();
        },
    },
    mounted() {
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        ctx.translate(0.5, 0.5);
        ctx.imageSmoothingEnabled = true;
        this.draw(ctx);
    },
};
</script>
