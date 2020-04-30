class FavoritesUI {
  constructor() {
    this.container = document.getElementById("dropdown1");
  }

  get favoritesContainer() {
    return this.container;
  }

  renderFavorites(favorites) {
    this.clearContainer();
    if (!Object.keys(favorites).length) {
      return;
    }
    let fragment = "";
    Object.entries(favorites).forEach(([key, value]) => {
      const template = FavoritesUI.favoritesTemplate(key, value);
      fragment += template;
    });
    this.container.insertAdjacentHTML("afterbegin", fragment);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  static favoritesTemplate(key, value) {
    return `
   
    <div id="${key}" class="favorite-item  d-flex align-items-start">
      <div class="card horizontal mx-0">
        <div class="d-flex">
          <img src="${value.airline_logo}" class="favorite-item-airline-img mxy-auto" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <div class="favorite-item-destination d-flex align-items-center">
              <div class="d-flex align-items-center mr-auto">
                <span class="favorite-item-city">${value.origin_name}</span>
                <i class="medium material-icons">flight_takeoff</i>
              </div>
              <div class="d-flex align-items-center">
                <i class="medium material-icons">flight_land</i>
                <span class="favorite-item-city">${value.destination_name}</span>
              </div>
            </div>
            <div class="ticket-time-price d-flex align-items-center">
              <span class="ticket-time-departure">${value.departure_at}</span>
              <span class="ticket-price ml-auto">${value.currencySymbol}${value.price}</span>
            </div>
            <div class="ticket-additional-info">
              <span class="ticket-transfers">Пересадок: ${value.transfers}</span>
              <span class="ticket-flight-number">Номер рейса: ${value.flight_number}</span>
             </div>
            </div>
        </div>
        <div class="card-action">
          <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite">
              Delete
          </a>
        </div>
      </div>
    </div>
  
    `;
  }

  getTicketCardId(e) {
    if (e.target.tagName === "A") {
      const ticketCard = e.target.closest(".favorite-item");
      return ticketCard.id;
    }
  }
}

const favoritesUI = new FavoritesUI();
export default favoritesUI;
