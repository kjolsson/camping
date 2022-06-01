<template>
  <div>
    <h2>Boka bord</h2>
    <div class="mb-3">
      <label class="form-label">Välj datum: </label>
      <date-picker v-model="startDate" />
    </div>
    <div class="mb-3 col-4">
      <label class="form-label">Välj bord och tid: </label>
      <select id="new-value" v-model="timeInput" class="form-select">
        <option value="undefined" selected disabled hidden>Inget val</option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 1 kl 14:00')"
          value="Bord 1 kl 14:00"
        >
          Bord 1 kl 14:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 1 kl 16:00')"
          value="Bord 1 kl 16:00"
        >
          Bord 1 kl 16:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 1 kl 18:00')"
          value="Bord 1 kl 18:00"
        >
          Bord 1 kl 18:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 1 kl 20:00')"
          value="Bord 1 kl 20:00"
        >
          Bord 1 kl 20:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 2 kl 14:00')"
          value="Bord 2 kl 14:00"
        >
          Bord 2 kl 14:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 2 kl 16:00')"
          value="Bord 2 kl 16:00"
        >
          Bord 2 kl 16:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 2 kl 18:00')"
          value="Bord 2 kl 18:00"
        >
          Bord 2 kl 18:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 2 kl 20:00')"
          value="Bord 2 kl 20:00"
        >
          Bord 2 kl 20:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 3 kl 14:00')"
          value="Bord 3 kl 14:00"
        >
          Bord 3 kl 14:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 3 kl 16:00')"
          value="Bord 3 kl 16:00"
        >
          Bord 3 kl 16:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 3 kl 18:00')"
          value="Bord 3 kl 18:00"
        >
          Bord 3 kl 18:00
        </option>
        <option
          v-if="!rest.find((o) => o.tableNumber === 'Bord 3 kl 20:00')"
          value="Bord 3 kl 20:00"
        >
          Bord 3 kl 20:00
        </option>
      </select>
    </div>
    <div class="form-floating mb-3 col-4">
      <input
        type="text"
        class="form-control"
        id="forname"
        placeholder="forname"
        v-model="firstName"
      />
      <label for="forname" class="form-label">Förnamn</label>
    </div>
    <div class="form-floating mb-3 col-4">
      <input
        type="text"
        class="form-control"
        id="lastname"
        placeholder="lastname"
        v-model="lastName"
      />
      <label for="lastname" class="form-label">Efternamn</label>
    </div>

    <button
      id="submit"
      @click="addTableBooking(), onChange()"
      class="btn btn-primary"
    >
      Boka Bord
    </button>

    <br /><br />
  </div>
</template>

<script>
import { restaurant } from "@/restaurant.js";
import DatePicker from "@/components/DatePicker.vue";
export default {
  components: { DatePicker },
  data() {
    return {
      rest: restaurant.bookedTables,
      timeInput: "undefined",
      firstName: "",
      lastName: "",
      startDate: new Date(),
    };
  },
  methods: {
    addTableBooking() {
      if (
        this.timeInput == "undefined" ||
        (this.firstName == "" && this.lastName == "")
      ) {
        alert("Välj plats");
      } else {
        restaurant.addTheTableBooking(
          this.timeInput,
          this.firstName,
          this.lastName,
          this.startDate
        );
      }
    },
    removeBooking() {
      restaurant.removeTheBooking(this.index);
    },
    onChange() {
      this.timeInput = "undefined";
    },
  },
};
</script>

<style scoped>
</style>