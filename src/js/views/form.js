import {
  getAutocompleteInstanse,
  getDatepickerInstanse,
} from "../plugins/materialize";

class FormUI {
  constructor(autocompleteInstanse, datepickerInstanse) {
    this._form = document.forms["locationControls"];
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-destination");
    this.depart = document.getElementById("datepicker-depart");
    this.arrival = document.getElementById("datepicker-arrival");

    this.originAutocomplete = autocompleteInstanse(this.origin);
    this.destinationAutocomplete = autocompleteInstanse(this.destination);
    this.departDatepicker = datepickerInstanse(this.depart);
    this.arrivalDatepicker = datepickerInstanse(this.arrival);
  }

  get form() {
   return this._form;
  }

  setAutocompleteDate(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }

  get originValue() {
    return this.origin.value;
  }

  get destinationValue() {
    return this.destination.value;
  }

  get departValue() {
    return this.departDatepicker.toString();
  }

  get arrivalValue() {
    return this.arrivalDatepicker.toString();
  }
}

const formUI = new FormUI(getAutocompleteInstanse, getDatepickerInstanse);

export default formUI;
