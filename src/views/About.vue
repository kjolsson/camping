<template>
  <div class="row">
    <div class="col-8">
      <h1>Event och att göra</h1>
      <br />
      <h6 class="text-uppercase fw-bold mb-4">Sevärdeheter</h6>
      <p>
        <a
          href="https://motormuseum.wixsite.com/motormuseum"
          target="_blank"
          class="text-reset"
          >Motala Motormuseum</a
        >
      </p>
      <p>
        <a href="https://godegard.se/" target="_blank" class="text-reset"
          >Gode Gård</a
        >
      </p>
      <p>
        <a
          href="http://www.motala-industrimuseum.com/"
          target="_blank"
          class="text-reset"
          >Motala Industrimuseum</a
        >
      </p>
      <h6 class="text-uppercase fw-bold mb-4">Spa</h6>
      <p>
        Här kan du koppla av och njuta av diverse spa behandlingar
        <router-link class="btn btn-light" to="/Spa">Visa mer</router-link>
      </p>

      <h6 class="text-uppercase fw-bold mb-4">Bada</h6>
      <p>Närmaste badplats ligger precis runt hörnet, Motalasjö</p>

      <h6 class="text-uppercase fw-bold mb-4">Äta</h6>
      <p>
        Här kan du boka bord och kika på våran meny för restaurangen.
        <router-link class="btn btn-light" to="/restaurant"
          >Visa mer</router-link
        >
      </p>

      <h6 class="text-uppercase fw-bold mb-4">Bo</h6>
      <p>
        Här kan du boka boende samt plats för husvagn/tält
        <router-link class="btn btn-light" to="/accommodation"
          >Visa mer</router-link
        >
      </p>

      
      <p>
        Kolla gärna in Motalas egna hemsida för fler evenemang: <br>
        <a
          href="https://motalasjostad.se/evenemang/kalender/"
          target="_blank"
          class="text-reset"
          >Motala</a
        >
      </p>
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
    asideBookings,
  },
};
</script>
    