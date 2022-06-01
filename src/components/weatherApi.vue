<template>
  <div class="row">
    <div class="col">
      Temp: {{ currentWeather }}
      <div>{{ thisWeather.tempFeelsLike }} {{ thisWeather.sky }}</div>
    </div>
    <div class="col">
      <button @click="fetchData()">Hämta väderdata</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentWeather: "Ingen data",
      thisWeather: {
        tempFeelsLike: "",
        sky: "",
      },
    };
  },
  methods: {
    fetchData() {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=58.5379983&lon=15.0470408&appid=4c3e2330209b0178bcd39a2ffa8918b6&units=metric&lang=se"
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          response.json().then((weather) => {
            let weatherDescription = weather.weather;

            this.currentWeather = Math.round(weather.main.temp) + " °C";
            this.thisWeather.tempFeelsLike =
              "Känns som: " + Math.round(weather.main.feels_like) + " °C";
            this.thisWeather.sky = weatherDescription[0].description;
          });
        })
        .catch(function (err) {
          console.log("Fetch Error: ", err);
        });
    },
  },
};
</script>

<style scoped>
</style>