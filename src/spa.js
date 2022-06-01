import { reactive } from "vue";

export const spa = reactive({
    bookedSpa: [],

    addTheSpaBooking(spaInput, firstName, lastName, startDate, treatMent) {
        let object = {};
    
        object.spaNumber = spaInput;
        object.dateBookedFrom = (startDate.getMonth() + 1) + "-" + startDate.getDate() //+ " " + startDate.getHours() + ":" + startDate.getMinutes();
        object.spaFirstName = firstName;
        object.spaLastName = lastName;
        object.spaTreatment = treatMent;
    
        this.bookedSpa.push(object);
      },
    
      removeTheBooking(index) {
        this.bookedSpa.splice(index, 1);
      },
})