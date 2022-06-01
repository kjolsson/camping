<template>
  <router-link id="restaurant" class="btn btn-light" to="/restaurant">Restaurang</router-link>
  <router-link class="btn btn-light" to="/about">Att Göra</router-link>
  <router-link class="btn btn-light" to="/findus">Visa Karta</router-link>
  <router-link class="btn btn-light" to="/accommodation">Boka Boende</router-link
  >
  <div class="date">Datum: {{ todayDate }}</div>
  <weather-api-vue />
</template>

 

<script>
import weatherApiVue from "@/components/weatherApi.vue";
export default {
  components: {
    weatherApiVue,
  },
  data() {
    return {
      todayDate:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
    };
  },
};
</script>

<style scoped>
.btn {
  border: none;
  padding: 1rem;
}

.btn:hover {
  background-color: rgb(223, 223, 223);
  text-decoration: underline;
}
.date {
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}
</style>