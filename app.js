// Building a constructor function
function Stand(name, min, max, averageCookies){
  // var newStand = {};
  this.name= name;
  this.min = min;
  this.max = max;
  this.averageCookies = averageCookies;
  this.cookiesPerHour=[];
};

//random nuber generator:
Stand.prototype.customerPerHourFnctn= function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// cookies per hour generator:
Stand.prototype.generateCookies=function(){
  for (var i=0; i<8; i++){
    this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookies);
    columnsTotal[i]+= this.cookiesPerHour[i];
    console.log(columnsTotal[i] +" cookies "+ this.cookiesPerHour[i]);
  }
}

//rendering table rows function:
Stand.prototype.renderAsRow = function(){
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

//creating a table header function:
function renderHeader(){
  var table = document.getElementById('standsTable');
  var trElement = document.createElement('thead');
  var nameData;
  nameData = document.createElement('td');
  nameData.textContent = "Store Name";
  trElement.appendChild(nameData);
  standsTable.appendChild(trElement);
  for (i = 0; i<8;i++){
    nameData = document.createElement('td');
    if (i<2){
      nameData.textContent = (10+i) + ' am'
    } else if(i===2){
      nameData.textContent = '12 pm'
    } else {
      nameData.textContent = (i-2) + ' pm'
    }
    trElement.appendChild(nameData);
    standsTable.appendChild(trElement);
  }
};
// creating a footer function:
function renderFooter(){
  var table = document.getElementById('standsTable');
  trElement = document.createElement('tfoot');
  trElement.id = 'footer';
  nameData = document.createElement('td');
  nameData.textContent = 'Total';
  trElement.appendChild(nameData);
  standsTable.appendChild(trElement);
  console.log('totals');
  //var totalByHour;
  for (i = 0; i<8; i++){
    nameData = document.createElement('td');
    nameData.textContent = columnsTotal[i];
    console.log(nameData.textContent);
    //totalByHour +=columnsTotal[i];
    trElement.appendChild(nameData);
    standsTable.appendChild(trElement);
  }
};

// columns totals array:
var columnsTotal = [0, 0, 0, 0, 0, 0, 0, 0];

//calling the header funcion:
renderHeader();

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

//calling a footer
renderFooter();



function handleButtonClick(event) {
  renderFooter();
  console.log(event.target);
}



function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  document.getElementById('standsTable').deleteTFoot();

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max =  parseInt(event.target.max.value);
  var aver =  parseInt(event.target.avCook.value);
  console.log (name, min, max, aver);
  var newStore = new Stand(name, min, max, aver);
  console.log(stand);
  console.log("new store added" + newStore);
  newStore.generateCookies();
  newStore.renderAsRow();

  //trying to delete told footer



  renderFooter();
  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avCook.value = null;
}

form.addEventListener('submit', handleFormSubmit);
button.addEventListener('click', handleButtonClick);
