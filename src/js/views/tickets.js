import currencyUI from "./currency";

class TicketsUI {
  constructor(currency) {
    this.container = document.querySelector(".ticket-sections .row");
    this.currencySymbol = currency.getСurrencySymbol.bind(currency);
  }

  get ticketsContainer() {
    return this.container;
  }

  renderTickets(tickets) {
    this.clearContainer();
    if (!tickets.length) {
      this.showEmptyMessage();
      return;
    }
    let fragment = "";
    const currency = this.currencySymbol();

    tickets.forEach((ticket) => {
      const template = TicketsUI.ticketTemplate(
        ticket,
        currency,
        tickets.indexOf(ticket)
      );
      fragment += template;
    });
    this.container.insertAdjacentHTML("afterbegin", fragment);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  showEmptyMessage() {
    const template = TicketsUI.emptyMsgTemplate();
    this.container.insertAdjacentHTML("afterbegin", template);
  }

  static emptyMsgTemplate() {
    return `
    <div class="tickets-empty-res-msg">
      По вашему запросу ничего не найдено.
    </div>
    `;
  }

  static ticketTemplate(ticket, currencySymbol, index) {
    return `
<div class="col s12 m6">
<div id="${index}" class="card ticket-card">
  <div class="ticket-airline d-flex align-items-center">
    <img src="${ticket.airline_logo}" class="ticket-airline-img" />
    <span class="ticket-airline-name">${ticket.airline_name}</span>
  </div>
  <div class="ticket-destination d-flex align-items-center">
    <div class="d-flex align-items-center mr-auto">
      <span class="ticket-city">${ticket.origin_name}</span>
      <i class="medium material-icons">flight_takeoff</i>
    </div>
    <div class="d-flex align-items-center">
      <i class="medium material-icons">flight_land</i>
      <span class="ticket-city">${ticket.destination_name}</span>
    </div>
  </div>
  <div class="ticket-time-price d-flex align-items-center">
    <span class="ticket-time-departure">${ticket.departure_at}</span>
    <span class="ticket-price ml-auto">${currencySymbol}${ticket.price}</span>
  </div>
  <div class="ticket-additional-info">
    <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
    <span class="ticket-fligth-number">Номер рейса: ${ticket.flight_number}</span>
  </div>
  <div class="d-flex">
    <a class="waves-effect waves-light btn-small green darken-1 add-favorite ml-auto">
      Add to favorites
    </a>
    </div>
  </div>
</div>
`;
  }

  getTicketIndex(e) {
    if (e.target.tagName === "A") {
      const ticketCard = e.target.closest(".card", ".ticket-card");
      return ticketCard.id;
    }
  }
}

const ticketsUI = new TicketsUI(currencyUI);
export default ticketsUI;
