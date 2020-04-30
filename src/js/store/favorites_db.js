import currencyUI from "../views/currency";

class FavoritesDb {
  constructor(key) {
    this.key = key;
    this.store = JSON.parse(localStorage.getItem(this.key)) || {};
  }

  get favorites() {
    return JSON.parse(this.store);
  }

  get length(){
   return Object.values(this.store).length;
  }

  addTicket(ticket, currency, currencySymbol) {
    ticket.currency = currency;
    ticket.currencySymbol = currencySymbol;
    this.store[new Date().valueOf()] = ticket;
    this.saveStore();
  }

  removeTicket(key) {
    delete this.store[key];
    this.clearStore();
    this.saveStore();
  }

  saveStore() {
    localStorage.setItem(this.key, JSON.stringify(this.store));
  }

  clearStore() {
    localStorage.removeItem(this.key);
  }

  
}

const favoritesDb = new FavoritesDb("favorites");
export default favoritesDb;
