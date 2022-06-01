<template>
  <div class="row">
    <div class="col-8">
      <h1>Hitta till oss</h1>
      <p>Använd kartan för att se vart campingen ligger.</p>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1G72u45ScFRHb13Lk2ZvVu-BPkVh_WOM&ehbc=2E312F"
        width="50%"
        height="480"
      ></iframe>
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
import asideBookings from "@/components/asideBookings.vue";

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
    