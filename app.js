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
pikePlaceMarket.generateCookies();

var parent = document.getElementById('Pike-Place');
var child;
var total = 0;
for (i=0; i<8; i++){
  child = document.createElement('li');
  child.textContent= ( (10+i) + ' :' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
  total += pikePlaceMarket.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
child = document.createElement('li');
child.textContent = ('Total cookies: ' + total);
parent.appendChild(child);
