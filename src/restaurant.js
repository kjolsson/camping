import { reactive } from "vue";

export const restaurant = reactive({
  bookedTables: [],

  addTheTableBooking(timeInput, firstName, lastName, startDate) {
    let object = {};

    object.tableNumber = timeInput;
    object.dateBookedFrom = (startDate.getMonth() + 1) + "-" + startDate.getDate() //+ " " + startDate.getHours() + ":" + startDate.getMinutes();
    object.restFirstName = firstName;
    object.restLastName = lastName;

    this.bookedTables.push(object);
  },

  removeTheBooking(index) {
    this.bookedTables.splice(index, 1);
  },
});
