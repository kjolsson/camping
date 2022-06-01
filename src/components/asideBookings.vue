<template>
  <div>
    <h3>Alla dina bokningar:</h3>
    <!--Rest booking-->
    <div v-for="(item, index) in rest" v-bind:key="item">
      <div class="row">
        <div class="col">
          <p>
            {{ item.tableNumber }}, Den:
            {{ item.dateBookedFrom }}
          </p>
          <p>Bokad av: {{ item.restFirstName }} {{ item.restLastName }}</p>
        </div>
      </div>
      <button @click="removeRestBooking(index)" class="btn btn-danger">
        Avboka
      </button>
    </div>

    <!--Spa booking-->
    <div v-for="(item, index) in spa" v-bind:key="item">
      <div class="row">
        <div class="col">
          <p>
            {{ item.spaTreatment }} {{ item.spaNumber }}, Den:
            {{ item.dateBookedFrom }}
          </p>
          <p>Bokad av: {{ item.spaFirstName }} {{ item.spaLastName }}</p>
        </div>
      </div>
      <button @click="removeSpaBooking(index)" class="btn btn-danger">
        Avboka
      </button>
    </div>

    <!--Living booking-->
    <div v-for="(item, index) in tent" v-bind:key="item">
      <div class="row">
        <div class="col">
          <p>
            {{ item.residenceNumber }}, Från och med:
            {{ item.dateBookedFrom }} till: {{ item.dateBookedToo }}
          </p>
          <p>Bokad av: {{ item.tentFirstName }} {{ item.tentLastName }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button @click="removeTentBooking(index)" class="btn btn-danger">
            Avboka
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { restaurant } from "@/restaurant.js";
import { spa } from "@/spa.js";
import { tents } from "@/tents.js";

export default {
  data() {
    return {
      rest: restaurant.bookedTables,
      spa: spa.bookedSpa,
      tent: tents.bookedTents,
    };
  },
  methods: {
    removeRestBooking() {
      restaurant.removeTheBooking(this.index);
    },
    removeSpaBooking() {
      spa.removeTheBooking(this.index);
    },
    removeTentBooking() {
      tents.removeTheBooking(this.index);
    },
  },
};
</script>

<style scoped>
</style>