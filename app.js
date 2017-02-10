var pikePlaceMarket = {
  minCustomers: 17,
  maxCustomers: 88,
  averageCookiesPerCustomer: 5.2,
  customerPerHourFnctn: function (this.minCustomers, this.maxCustomers){
  min = Math.ceil(this.minCustomers);
  max = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
