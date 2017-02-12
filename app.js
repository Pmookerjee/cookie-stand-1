// Building a constructor function
function Stand(name, min, max, averageCookies){
  // var newStand = {};
  this.name= name;
  this.min = min;
  this.max = max;
  this.averageCookies = averageCookies;
  this.customerPerHourFnctn= function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  this.cookiesPerHour=[];
  // cookies per hour generator:
  this.generateCookies=function(){
    for (var i=0; i<8; i++){
      this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookies);
    }
  }
  //rendering table rows
  this.renderAsRow = function(){
    var table = document.getElementById('standsTable');
    var trElement = document.createElement('tr');
    var nameData;
    nameData = document.createElement('td');
    nameData.textContent = this.name;
    trElement.appendChild(nameData);
    standsTable.appendChild(trElement);
    for (i = 0; i<8; i++){
      nameData = document.createElement('td');
      nameData.textContent = this.cookiesPerHour[i];
      trElement.appendChild(nameData);
      standsTable.appendChild(trElement);
    }
  }
}
// creating and rendering a row for the Pike Place:
var stand = new Stand('Pike Place',	17,	88,	5.2);
console.log(stand);
stand.generateCookies();
stand.renderAsRow();

// creating and rendering a row for the Sea-Tac:
var stand = new Stand('SeaTac Airport',	6,	24,	1.2);
console.log(stand);
stand.generateCookies();
stand.renderAsRow();

var stand = new Stand('Southcenter',	11,	38,	1.9);
console.log(stand);
stand.generateCookies();
stand.renderAsRow();

var stand = new Stand('Alki',	3,	24, 2.6);
console.log(stand);
stand.generateCookies();
stand.renderAsRow();

trElement = document.createElement('tr');
nameData = document.createElement('td');
nameData.textContent = 'Total';
trElement.appendChild(nameData);
standsTable.appendChild(trElement);
var totalByHour;
for (i = 0; i<8; i++){
  nameData = document.createElement('td');
  nameData.textContent = this.cookiesPerHour[i];
  totalByHour +=this.cookiesPerHour[i];
  trElement.appendChild(nameData);
  standsTable.appendChild(trElement);
}
//creating an array of all cookie stands:
// var allStands = [['Pike Place',	17,	88,	5.2], ['SeaTac Airport',	6,	24,	1.2],['Southcenter',	11,	38,	1.9],['Bellevue Square',	20,	48,	3.3
// ], ['Alki',	3,	24, 2.6]];
// //rendering objects using the above array:
// var stand;
// for (i=0; i< 5; i++){
//   stand = new Stand(allStands[i]);
//   console.log(stand);
//   stand.generateCookies();
//   //console.log(stand.name);
//   stand.renderAsRow();
// }
//
//
//
//
//
//
//




























//
// // creating Pike Place Market stor object:
// var pikePlaceMarket = {
//   min: 17,
//   max: 88,
//   averageCookiesPerCustomer: 5.2,
//   // random customer per hour number generator:
//   customerPerHourFnctn: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour:[],
//   // cookies per hour generator:
//   generateCookies:function(){
//     for (var i=0; i<8; i++){
//       this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
//     }
//   }
// }
// //Call function to generate cookies amounts for Pike Place
// pikePlaceMarket.generateCookies();
// // creating <li> for Pike Place elements on page
// var parent = document.getElementById('Pike-Place');
// var child;
// var total = 0;
// for (var i=0; i<8; i++){
//   child = document.createElement('li');
//   if (i<2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
//   } else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + pikePlaceMarket.cookiesPerHour[i] + ' cookies');
//   }
//   total += pikePlaceMarket.cookiesPerHour[i];
//   parent.appendChild(child);
//   console.log(total);
// }
// // appending total to the <ul>
// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);
//
//
// // creating SeaTac Airport	6	24	1.2 object:
// var seaTac = {
//   min: 6,
//   max: 24,
//   averageCookiesPerCustomer: 1.2,
//   // random customer per hour number generator:
//   customerPerHourFnctn: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour:[],
//   // cookies per hour generator:
//   generateCookies:function(){
//     for (i=0; i<8; i++){
//       this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
//     }
//   }
// }
// //Call function to generate cookies amounts for SeaTac
// seaTac.generateCookies();
//
// // ul list for SeaTac:
// parent = document.getElementById('seaTac');
// total = 0;
// for (i=0; i<8; i++){
//   child = document.createElement('li');
//   if (i<2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
//   } else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
//   }
//   total += seaTac.cookiesPerHour[i];
//   parent.appendChild(child);
// }
// // appending total for seaTac:
// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);
//
// // generating object for Southcenter	11	38	1.9 store:
// var southCenter = {
//   min: 11,
//   max: 38,
//   averageCookiesPerCustomer: 1.9,
//   // random customer per hour number generator:
//   customerPerHourFnctn: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour:[],
//   // cookies per hour generator:
//   generateCookies:function(){
//     for (i=0; i<8; i++){
//       this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
//     }
//   }
// }//end of object
//
// southCenter.generateCookies();
// // ul for South Center
// total = 0;
// parent = document.getElementById('southCenter');
// for (i = 0; i<8; i++){
//   child = document.createElement('li');
//   if (i<2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
//   } else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
//   }
//   total += southCenter.cookiesPerHour[i];
//   parent.appendChild(child);
// }
// // Total li:
// child = document.createElement('li');
// child.textContent = 'Total : ' + total + ' cookies'
// parent.appendChild(child);
//
// // Bellevue Square	20	48	3.3   - create object:
// var bellSquare = {
//   min: 20,
//   max: 48,
//   averageCookiesPerCustomer: 3.3,
//   customerPerHourFnctn: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour:[],
//   // cookies per hour generator:
//   generateCookies:function(){
//     for (i=0; i<8; i++){
//       this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
//     }
//   }
// }
// bellSquare.generateCookies();
// // creating li for bellSquare:
// total = 0;
// parent = document.getElementById('bellSquare');
// for (i = 0; i<8; i++){
//   child = document.createElement('li');
//   if (i<2){
//     child.textContent = ( (10+i) + ' am:' + ' ' + bellSquare.cookiesPerHour[i] + ' cookies');
//   } else  if (i===2){
//     child.textContent = ( '12 pm:' + ' ' + bellSquare.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent = ( (i-2) + ' pm:' + ' ' + bellSquare.cookiesPerHour[i] + ' cookies');
//   }
//   total += bellSquare.cookiesPerHour[i];
//   parent.appendChild(child);
// }
// child = document.createElement('li');
// child.textContent = 'Total : ' + total + ' cookies';
// parent.appendChild(child);
//
//
// //creating Alki object: Alki	3	24    2.6
//
// var alki = {
//   min: 3,
//   max: 24,
//   averageCookiesPerCustomer : 2.6,
//   customerPerHourFnctn: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour:[],
//   // cookies per hour generator:
//   generateCookies:function(){
//     for (i=0; i<8; i++){
//       this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
//     }
//   }
// }
// alki.generateCookies();
// // creating li
// total = 0;
// parent = document.getElementById('alki');
// for (i = 0; i<8; i++){
//   child = document.createElement('li');
//   if (i<2){
//     child.textContent = ( (10+i) + ' am:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
//   } else  if (i===2){
//     child.textContent = ( '12 pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent = ( (i-2) + ' pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
//   }
//   total += alki.cookiesPerHour[i];
//   parent.appendChild(child);
// }
// // total:
//   child = document.createElement('li');
//   child.textContent = 'Total: ' + total + ' cookies';
//   parent.appendChild(child);
