var chartColors = {
    red: "rgb(255, 99, 132)"
  };
  
  var color = Chart.helpers.color;
  var config = {
    type: "bar",
    data: {
      datasets: [
        {
          type: "line",
          yAxisID: "match",
          backgroundColor: "transparent",
          borderColor: chartColors.red,
          pointBackgroundColor: chartColors.red,
          tension: 0,
          fill: false
        }
      ]
    },
    plugins: [ChartDataSource],
    options: {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Player Name"
            }
          }
        ],
        yAxes: [
          {
            id: "match",
            gridLines: {
              drawOnChartArea: false
            }
          }
        ]
      },
      plugins: {
        datasource: {
          type: "csv",
          url:"https://raw.githubusercontent.com/BharathDevadiga/Most_sixes_in_testcricket/main/Most_Sixes_in_Test_Cricket.csv",
          delimiter: ",",
          rowMapping: "index",
          datasetLabels: true,
          indexLabels: true
        }
      }
    }
  };
  
  window.onload = function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myChart = new Chart(ctx, config);
  };
  