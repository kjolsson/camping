<template>
  <div>
    <h2>Boka Spa</h2>
    <div class="mb-3">
      <label class="form-label">Välj datum: </label>
      <date-picker v-model="startDate" />
    </div>
    <div class="mb-3 col-4">
      <label class="form-label">Välj tid:</label>

      <select class="form-select mb-3" v-model="spaInput">
        <option value="undefined" selected disabled hidden>Inget val</option>
        <option v-if="!spa.find((o) => o.spaNumber === '8:00')" value="8:00">
          8:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '9:00')" value="9:00">
          9:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '10:00')" value="10:00">
          10:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '11:00')" value="11:00">
          11:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '12:00')" value="12:00">
          12:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '13:00')" value="13:00">
          13:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '14:00')" value="14:00">
          14:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '15:00')" value="15:00">
          15:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '16:00')" value="16:00">
          16:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '17:00')" value="17:00">
          17:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '18:00')" value="18:00">
          18:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '19:00')" value="19:00">
          19:00
        </option>
        <option v-if="!spa.find((o) => o.spaNumber === '20:00')" value="20:00">
          20:00
        </option>
      </select>
    </div>
    <div class="mb-3 col-4">
      <label class="form-label">Behandling:</label>
      <select v-model="treatMent" class="form-select mb-3">
        <option value="Massage">Massage</option>
        <option value="Ansiktsbehandling">Ansiktsbehandling</option>
        <option value="Kroppsbehandling">Kroppsbehandling</option>
        <option value="Pedikyr">Pedikyr</option>
      </select>
    </div>
    <div class="form-floating mb-3 col-4">
      <input
        type="text"
        class="form-control"
        id="firstname"
        placeholder="firstname"
        v-model="firstName"
      />
      <label for="firstname" class="formlabel">Förnamn:</label>
    </div>
    <div class="form-floating mb-3 col-4">
      <input
        type="text"
        class="form-control"
        id="lastname"
        placeholder="lastname"
        v-model="lastName"
      />
      <label for="lastname" class="form-label">Efternamn:</label>
    </div>

    <button @click="addSpaBooking(), onChange()" class="btn btn-primary">
      Boka Spa
    </button>
  </div>
</template>

<script>
import { spa } from "@/spa.js";
import DatePicker from "./DatePicker.vue";
export default {
  data() {
    return {
      spa: spa.bookedSpa,
      spaInput: "undefined",
      firstName: "",
      lastName: "",
      startDate: new Date(),
      treatMent: "",
    };
  },
  methods: {
    addSpaBooking() {
      if (
        this.spaInput == "undefined" ||
        (this.firstName == "" && this.lastName == "")
      ) {
        alert("Välj plats");
      } else {
        spa.addTheSpaBooking(
          this.spaInput,
          this.firstName,
          this.lastName,
          this.startDate,
          this.treatMent
        );
      }
    },
    removeBooking() {
      spa.removeTheBooking(this.index);
    },
    onChange() {
      this.spaInput = "undefined";
    },
  },
  components: { DatePicker },
};
</script>

<style scoped>
</style>