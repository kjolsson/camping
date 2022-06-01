<template>
  <div class="row">
    <div class="col-8">
      <h1>Restaurang Motala Camping</h1>
      <rest-booking></rest-booking>
      <router-link class="btn btn-primary" id="link" to="/restmenu"
        >Visa Meny</router-link
      >
    </div>
    <div class="col-4">
      <aside-bookings></aside-bookings>
    </div>
  </div>
</template>


<script>
import theLayout from "@/components/theLayout.vue";
import buttonHeader from "@/components/buttonHeader.vue";
import TentBooking from "@/components/TentBooking.vue";
import TestFooter from "@/components/TestFooter.vue";
import DatePicker from "@/components/DatePicker.vue";
import RestBooking from "@/components/restBooking.vue";
import SpaBooking from "@/components/spaBooking.vue";
import mainCard from "@/components/mainCard.vue";
import asideBookings from "../components/asideBookings.vue";

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
    asideBookings
  },
};
</script>
    