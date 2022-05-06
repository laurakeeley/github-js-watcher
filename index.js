/* global Chart */
/* global axios */

// let labels = ["Vue", "Angular", "Ember", "Svelte", "React"];
let labels = ["Stars", "Watchers", "Forks", "Popularity"];
let vue = {};
let angular = {};
let ember = {};
let svelte = {};
let react = {};

axios
  .get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    this.vueData = response.data;
    let vueStars = this.vueData.subscribers_count;
    let vueWatchers = this.vueData.watchers;
    let vueForks = this.vueData.forks;
    let vuePop = parseInt(
      (this.vueData.forks +
        this.vueData.watchers +
        this.vueData.subscribers_count) /
        3
    );
    console.log(
      "vueStars",
      vueStars,
      "vueWatchers",
      vueWatchers,
      "vueForks",
      vueForks,
      "vuePop",
      vuePop
    );
    vue["Stars"] = vueStars;
    vue["Watchers"] = vueWatchers;
    vue["Forks"] = vueForks;
    vue["Popularity"] = vuePop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/angular/angular.js")
  .then(function (response) {
    this.angularData = response.data;
    let angularStars = this.angularData.subscribers_count;
    let angularWatchers = this.angularData.watchers;
    let angularForks = this.angularData.forks;
    let angularPop = parseInt(
      (this.angularData.forks +
        this.angularData.watchers +
        this.angularData.subscribers_count) /
        3
    );
    console.log(
      "angularStars",
      angularStars,
      "angularWatchers",
      angularWatchers,
      "angularForks",
      angularForks,
      "angularPop",
      angularPop
    );
    angular["Stars"] = angularStars;
    angular["Watchers"] = angularWatchers;
    angular["Forks"] = angularForks;
    angular["Popularity"] = angularPop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/emberjs/ember.js")
  .then(function (response) {
    this.emberData = response.data;
    let emberStars = this.emberData.subscribers_count;
    let emberWatchers = this.emberData.watchers;
    let emberForks = this.emberData.forks;
    let emberPop = parseInt(
      (this.emberData.forks +
        this.emberData.watchers +
        this.emberData.subscribers_count) /
        3
    );
    console.log(
      "emberStars",
      emberStars,
      "emberWatchers",
      emberWatchers,
      "emberForks",
      emberForks,
      "emberPop",
      emberPop
    );
    ember["Stars"] = emberStars;
    ember["Watchers"] = emberWatchers;
    ember["Forks"] = emberForks;
    ember["Popularity"] = emberPop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/sveltejs/svelte")
  .then(function (response) {
    this.svelteData = response.data;
    let svelteStars = this.svelteData.subscribers_count;
    let svelteWatchers = this.svelteData.watchers;
    let svelteForks = this.svelteData.forks;
    let sveltePop = parseInt(
      (this.svelteData.forks +
        this.svelteData.watchers +
        this.svelteData.subscribers_count) /
        3
    );
    console.log(
      "svelteStars",
      svelteStars,
      "svelteWatchers",
      svelteWatchers,
      "svelteForks",
      svelteForks,
      "sveltePop",
      sveltePop
    );
    svelte["Stars"] = svelteStars;
    svelte["Watchers"] = svelteWatchers;
    svelte["Forks"] = svelteForks;
    svelte["Popularity"] = sveltePop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
axios
  .get("https://api.github.com/repos/facebook/react")
  .then(function (response) {
    this.reactData = response.data;
    let reactStars = this.reactData.subscribers_count;
    let reactWatchers = this.reactData.watchers;
    let reactForks = this.reactData.forks;
    let reactPop = parseInt(
      (this.reactData.forks +
        this.reactData.watchers +
        this.reactData.subscribers_count) /
        3
    );
    console.log(
      "reactStars",
      reactStars,
      "reactWatchers",
      reactWatchers,
      "reactForks",
      reactForks,
      "reactPop",
      reactPop
    );
    react["Stars"] = reactStars;
    react["Watchers"] = reactWatchers;
    react["Forks"] = reactForks;
    react["Popularity"] = reactPop;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Vue",
        data: vue,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Angular",
        data: angular,
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Ember",
        data: ember,
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Svelte",
        data: svelte,
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "React",
        data: react,
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
        // stacked: true,
      },
    },
  },
});
