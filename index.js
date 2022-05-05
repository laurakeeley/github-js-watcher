/* global Chart */
/* global axios */

let pop = [];

axios
  .get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    this.vueData = response.data;
    // console.log(vueData);
    let vuePop =
      this.vueData.forks +
      this.vueData.watchers +
      this.vueData.subscribers_count;
    console.log(vuePop / 3);
    pop.push(vuePop);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
axios
  .get("https://api.github.com/repos/angular/angular.js")
  .then(function (response) {
    this.angularData = response.data;
    // console.log(angularData);
    let angularPop =
      this.angularData.forks +
      this.angularData.watchers +
      this.angularData.subscribers_count / 3;
    console.log("angularPop", angularPop);
    pop.push(angularPop);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
    datasets: [
      {
        label: "JavaScript Framework Watcher",
        data: pop,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
