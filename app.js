var pikePlaceMarket = {
  min: 17,
  max: 88,
  averageCookiesPerCustomer: 5.2,
  customerPerHourFnctn: function(min, max){
     //min = Math.ceil(this.minCustomers);
     //max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour:[],
  generateCookies:function(){
    for (i=0; i<8; i++){
      this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
    }
  }
}
