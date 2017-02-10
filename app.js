// creating Pike Place Market stor object:
var pikePlaceMarket = {
  min: 17,
  max: 88,
  averageCookiesPerCustomer: 5.2,
  // random customer per hour number generator:
  customerPerHourFnctn: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour:[],
  // cookies per hour generator:
  generateCookies:function(){
    for (i=0; i<8; i++){
      this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
    }
  }
}
//Call function to generate cookies amounts for Pike Place
pikePlaceMarket.generateCookies();
// creating <li> for Pike Place elements on page
var parent = document.getElementById('Pike-Place');
var child;
var total = 0;
for (i=0; i<8; i++){
  child = document.createElement('li');
  if (i<2){
    child.textContent= ( (10+i) + ' am:' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
  }
  total += pikePlaceMarket.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
// appending total to the <ul>
child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);


// creating SeaTac Airport	6	24	1.2 object:
var seaTac = {
  min: 6,
  max: 24,
  averageCookiesPerCustomer: 1.2,
  // random customer per hour number generator:
  customerPerHourFnctn: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour:[],
  // cookies per hour generator:
  generateCookies:function(){
    for (i=0; i<8; i++){
      this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
    }
  }
}
//Call function to generate cookies amounts for SeaTac
seaTac.generateCookies();

// ul list for SeaTac:
parent = document.getElementById('seaTac');
total = 0;
for (i=0; i<8; i++){
  child = document.createElement('li');
  if (i<2){
    child.textContent= ( (10+i) + ' am:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
  }
  total += seaTac.cookiesPerHour[i];
  parent.appendChild(child);
}
// appending total for seaTac:
child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);

// generating object for Southcenter	11	38	1.9 store:
var southCenter = {
  min: 11,
  max: 38,
  averageCookiesPerCustomer: 1.9,
  // random customer per hour number generator:
  customerPerHourFnctn: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookiesPerHour:[],
  // cookies per hour generator:
  generateCookies:function(){
    for (i=0; i<8; i++){
      this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
    }
  }
}//end of object

southCenter.generateCookies();
// ul for South Center
total = 0;
parent = document.getElementById('southCenter');
for (i = 0; i<8; i++){
  child = document.createElement('li');
  if (i<2){
    child.textContent= ( (10+i) + ' am:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }
  total += southCenter.cookiesPerHour[i];
  parent.appendChild(child);
}
// Total li:
child = document.createElement('li');
child.textContent = 'Total : ' + total + ' cookies'
parent.appendChild(child);
