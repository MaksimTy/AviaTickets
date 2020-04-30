import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tickets";
import favoritesDb from "./store/favorites_db";
import favoritesUI from "./views/favorites_ui";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form;
  const tickets = ticketsUI.ticketsContainer;
  const favorites = favoritesUI.favoritesContainer;
  onFavoritiesUpdate();

  //Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  tickets.addEventListener("click", (e) => {
    onAddToFavorities(e);
  });

  favorites.addEventListener("click", (e) => {
    onFavoritiesDelete(e);
  });

  //Hendlers

  async function initApp() {
    await locations.init();
    formUI.setAutocompleteDate(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // собрать данные из inputs
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departValue;
    const return_date = formUI.arrivalValue;
    const currency = currencyUI.currencyValue;
    //code, code, 2020-05, 2020-06
    //console.log(origin, destination, depart_date, return_date);
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });

    ticketsUI.renderTickets(locations.lastSearch);
  }

  function onAddToFavorities(e) {
    const ticketIndex = ticketsUI.getTicketIndex(e);
    if (ticketIndex) {
      const currency = currencyUI.currencyValue;
      const currencySymbol = currencyUI.getСurrencySymbol();

      favoritesDb.addTicket(
        locations.lastSearch[ticketIndex],
        currency,
        currencySymbol
      );
      onFavoritiesUpdate();
    }
  }

  function onFavoritiesUpdate() {
    favoritesUI.renderFavorites(favoritesDb.store);
  }

  function onFavoritiesDelete(e) {
    const ticket = favoritesUI.getTicketCardId(e);
    if (ticket) {
      favoritesDb.removeTicket(ticket);
      onFavoritiesUpdate();
    }
  }
});
