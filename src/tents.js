import { reactive } from "vue";

//Make it reactive to update it on screen instantly
export const tents = reactive({
  //Tent objects with info about when its booked, who booked and tent number
  bookedTents: [],

  //Function which creates a new object with all the info we're sending with addTentBooking() from Tentbooking.vue
  addTheTentBooking(tentInput, firstName, lastName, startDate, endDate) {
    let object = {};

    object.residenceNumber = tentInput;
    object.dateBookedFrom = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
    object.dateBookedToo =
      endDate.getFullYear() +
      "-" +
      (endDate.getMonth() + 1) +
      "-" +
      endDate.getDate();
    object.tentFirstName = firstName;
    object.tentLastName = lastName;

    //pushes the newly created object into bookedTents array
    this.bookedTents.push(object);
  },

  removeTheBooking(index) {
    this.bookedTents.splice(index, 1);
  },
});
