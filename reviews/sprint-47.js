
/* render ticket-distribution chart */
function renderTicketDistribution(data) {
  var ctx = document.getElementById("ticket-distribution");

  var chartData = {
      labels: Object.keys(data),
      datasets: [
          {
              data: Object.values(data),
              backgroundColor: [
                  "#e5493a",
                  "#4bade8",
                  "#63ba3c",
                  "#9da8b5"
              ],
              hoverBackgroundColor: [
                  "#cb4336",
                  "#3d85b0",
                  "#59a636",
                  "#939da8"
              ]
          }]
  };

  var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: chartData,
      options: {
        scale: 15
      }
  });
}


/* render ticket-distribution chart */
function renderTicketStatus(data) {
  var ctx = document.getElementById("ticket-status");

  var chartData = {
      labels: Object.keys(data),
      datasets: [
          {
              data: Object.values(data),
              backgroundColor: [
                  "#8ae429",
                  "#ff7f00",
                  "#67a723"
              ],
              hoverBackgroundColor: [
                  "#9afe2e",
                  "#fac25a",
                  "#7fc236"
              ]
          }]
  };

  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: chartData
  });
}
