<template>
  <div class="row">
    <h1>Välkommen till Motala Camping</h1>
    <div class="col-8">
      <main-card>
        <template v-slot:title>Hitta hit</template>
        <template v-slot:info
          >Tryck på knappen nedan för att visa en karta till Motala
          Camping.</template
        >
        <template v-slot:button>
          <router-link id="link" to="/findus">Visa karta</router-link>
        </template>
      </main-card>

      <main-card>
        <template v-slot:title>Evenemang i närheten</template>
        <template v-slot:info
          >Tryck på knappen nedan för att visa evenemang i närområdet.</template
        >
        <template v-slot:button>
          <router-link id="link" to="/about">Visa Evenemang</router-link>
        </template>
      </main-card>

      <main-card>
        <template v-slot:title>Boka bord till restaurang</template>
        <template v-slot:info
          >Tryck på knappen nedan för att se vår meny samt boka bord på
          restaurangen.</template
        >
        <template v-slot:button>
          <router-link id="link" to="/restaurant">Äta och dricka</router-link>
        </template>
      </main-card>

      <main-card>
        <template v-slot:title>Boka Boende</template>
        <template v-slot:info
          >Tryck på knappen nedan för att se våra olika typer av
          boende.</template
        >
        <template v-slot:button>
          <router-link id="link" to="/accommodation">Boende</router-link>
        </template>
      </main-card>

      <main-card>
        <template v-slot:title>Spa</template>
        <template v-slot:info
          >Tryck på knappen nedan för att se våra olika typer av
          spa-behandlingar.</template
        >
        <template v-slot:button>
          <router-link id="link" to="/spa">Spa</router-link>
        </template>
      </main-card>
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
    