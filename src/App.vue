<template>
  <the-layout>
    <template v-slot:header>
      <button-header></button-header>
    </template>

    <router-view></router-view>

    <template #footer>
      <test-footer></test-footer>
    </template>
  </the-layout>
</template>

<script>
import theLayout from "./components/theLayout.vue";
import buttonHeader from "./components/buttonHeader.vue";
import TentBooking from "./components/TentBooking.vue";
import TestFooter from "./components/TestFooter.vue";
import DatePicker from "./components/DatePicker.vue";
import RestBooking from "./components/restBooking.vue";
import SpaBooking from "./components/spaBooking.vue";
import mainCard from "./components/mainCard.vue";
import asideBookings from "./components/asideBookings.vue";

export default {
  name: "App",
  components: {
    theLayout,
    buttonHeader,
    TentBooking,
    TestFooter,
    DatePicker,
    RestBooking,
    SpaBooking,
    mainCard,
    asideBookings,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}
#link {
  color: white;
  text-decoration: none;
}
</style>
