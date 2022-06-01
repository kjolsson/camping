<template>
  <div>
    <h2>Boka boende</h2>
    <div class="mb-3">
      <label>Välj datum: Från</label>
      <date-picker v-model="startDate"></date-picker>
    </div>
    <div class="mb-3">
      <label>Välj datum: Till </label>
      <date-picker v-model="endDate"></date-picker>
    </div>
    <div class="mb-3 col-4">
      <label class="form-label">Välj ert typ av boende: </label>
      <select v-model="tentInput" class="form-select">
        <option value="undefined" selected disabled hidden>Inget val</option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 1')"
          value="Tält 1"
        >
          Tält 1
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 2')"
          value="Tält 2"
        >
          Tält 2
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 3')"
          value="Tält 3"
        >
          Tält 3
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 4')"
          value="Tält 4"
        >
          Tält 4
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 5')"
          value="Tält 5"
        >
          Tält 5
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 6')"
          value="Tält 6"
        >
          Tält 6
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 7')"
          value="Tält 7"
        >
          Tält 7
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 8')"
          value="Tält 8"
        >
          Tält 8
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 9')"
          value="Tält 9"
        >
          Tält 9
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Tält 10')"
          value="Tält 10"
        >
          Tält 10
        </option>

        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 1')"
          value="Husvagn 1"
        >
          Husvagn 1
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 2')"
          value="Husvagn 2"
        >
          Husvagn 2
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 3')"
          value="Husvagn 3"
        >
          Husvagn 3
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 4')"
          value="Husvagn 4"
        >
          Husvagn 4
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 5')"
          value="Husvagn 5"
        >
          Husvagn 5
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 6')"
          value="Husvagn 6"
        >
          Husvagn 6
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 7')"
          value="Husvagn 7"
        >
          Husvagn 7
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 8')"
          value="Husvagn 8"
        >
          Husvagn 8
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 9')"
          value="Husvagn 9"
        >
          Husvagn 9
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 10')"
          value="Husvagn 10"
        >
          Husvagn 10
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 11')"
          value="Husvagn 11"
        >
          Husvagn 11
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 12')"
          value="Husvagn 12"
        >
          Husvagn 12
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 13')"
          value="Husvagn 13"
        >
          Husvagn 13
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 14')"
          value="Husvagn 14"
        >
          Husvagn 14
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 15')"
          value="Husvagn 15"
        >
          Husvagn 15
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 16')"
          value="Husvagn 16"
        >
          Husvagn 16
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 17')"
          value="Husvagn 17"
        >
          Husvagn 17
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 18')"
          value="Husvagn 18"
        >
          Husvagn 18
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 19')"
          value="Husvagn 19"
        >
          Husvagn 19
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Husvagn 20')"
          value="Husvagn 20"
        >
          Husvagn 20
        </option>

        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Stuga 1')"
          value="Stuga 1"
        >
          Stuga 1
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Stuga 2')"
          value="Stuga 2"
        >
          Stuga 2
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Stuga 3')"
          value="Stuga 3"
        >
          Stuga 3
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Stuga 4')"
          value="Stuga 4"
        >
          Stuga 4
        </option>
        <option
          v-if="!tent.find((o) => o.residenceNumber === 'Stuga 5')"
          value="Stuga 5"
        >
          Stuga 5
        </option>
      </select>
    </div>
    <div class="form-floating mb-3 col-4">
      <input
        type="text"
        v-model="firstName"
        class="form-control"
        id="firstname"
        placeholder="firstname"
      />
      <label for="firstname" class="form-label">Förnamn: </label>
    </div>
    <div class="form-floating mb-3 col-4">
      <input
        type="text"
        class="form-control"
        id="lastname"
        placeholder="lastname"
        v-model="lastName"
      />
      <label for="lastname" class="form-label">Efternamn: </label>
    </div>

    <button @click="addTentBooking(), onChange()" class="btn btn-primary">
      Boka Boende
    </button>
    <br /><br />
  </div>
</template>

<script>
import { tents } from "@/tents.js";
import DatePicker from "@/components/DatePicker.vue";
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      tent: tents.bookedTents,
      tentInput: "undefined",
      firstName: "",
      lastName: "",
      startDate: new Date(),
      endDate: new Date(),
    };
  },
  methods: {
    //Sends our input info to tents.js
    //Alerts if user forgets to input name
    addTentBooking() {
      if (
        this.tentInput == "undefined" ||
        (this.firstName == "" && this.lastName == "")
      ) {
        alert("Välj plats");
      } else {
        tents.addTheTentBooking(
          this.tentInput,
          this.firstName,
          this.lastName,
          this.startDate,
          this.endDate
        );
      }
    },
    //Removes item in object Array over at tents.js
    removeBooking() {
      tents.removeTheBooking(this.index);
    },
    //Changes option back to default
    onChange() {
      this.tentInput = "undefined";
    },
  },
};
</script>

<style scoped>
</style>