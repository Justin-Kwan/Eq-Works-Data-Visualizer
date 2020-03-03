class ChartBuilder {

  constructor() {
    this.DOLLAR_SIGN = "$";
    this.NO_PREFIX = "";
  }

  buildChart(chartType, chartData) {
    return {
      type: chartType,
      data: {
        labels: chartData.xAxes,
        datasets: chartData.datasets
      },
      options: {
        scales: {
          yAxes: [{
            beginAtZero: true
          }]
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    }
  }

}

module.exports = ChartBuilder;
