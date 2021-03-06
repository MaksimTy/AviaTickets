import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// init select
const select = document.querySelectorAll("select");
M.FormSelect.init(select);

export function getSelectInstanse(elem) {
  return M.FormSelect.getInstance(elem);
}

//init autocomplete
const autocomplete = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplete, {
  data: {
    Apple: null,
    Microsoft: null,
    Google: "https://placehold.it/250x250",
  },
});

export function getAutocompleteInstanse(elem) {
  return M.Autocomplete.getInstance(elem);
}

//init datepickers
const datepickers = document.querySelectorAll(".datepicker");
M.Datepicker.init(datepickers, {
  showClearBtn: true,
  format : 'yyyy-mm',
});

export function getDatepickerInstanse(elem) {
  return M.Datepicker.getInstance(elem);
}


// Init dropdown
const dropdowns = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdowns);
