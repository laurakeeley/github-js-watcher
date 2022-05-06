/* global Chart */
/* global axios */

let pop = {};
let forks = {};

axios
  .get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    this.vueData = response.data;
    let vueForks = this.vueData.forks;
    let vuePop = parseInt(
      (this.vueData.forks +
        this.vueData.watchers +
        this.vueData.subscribers_count) /
        3
    );
    console.log("vuePop", vuePop);
    forks["Vue"] = vueForks;
    pop["Vue"] = vuePop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/angular/angular.js")
  .then(function (response) {
    this.angularData = response.data;
    // console.log(angularData);
    let angularPop = parseInt(
      (this.angularData.forks +
        this.angularData.watchers +
        this.angularData.subscribers_count) /
        3
    );
    console.log("angularPop", angularPop);
    pop["Angular"] = angularPop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/emberjs/ember.js")
  .then(function (response) {
    this.emberData = response.data;
    // console.log(emberData);
    let emberPop = parseInt(
      (this.emberData.forks +
        this.emberData.watchers +
        this.emberData.subscribers_count) /
        3
    );
    console.log("emberPop", emberPop);
    pop["Ember"] = emberPop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/sveltejs/svelte")
  .then(function (response) {
    this.svelteData = response.data;
    // console.log(svelteData);
    let sveltePop = parseInt(
      (this.svelteData.forks +
        this.svelteData.watchers +
        this.svelteData.subscribers_count) /
        3
    );
    console.log("sveltePop", sveltePop);
    pop["Svelte"] = sveltePop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/facebook/react")
  .then(function (response) {
    this.reactData = response.data;
    // console.log(reactData);
    let reactPop = parseInt(
      (this.reactData.forks +
        this.reactData.watchers +
        this.reactData.subscribers_count) /
        3
    );
    console.log("reactPop", reactPop);
    pop["React"] = reactPop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
    datasets: [
      {
        label: "JavaScript Framework Popularity",
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
