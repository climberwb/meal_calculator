var Diners = require('./diners');
var Diner =  require('./diner');


var diner = new Diners.Diners(0.05,0.1);

var din = new Diner.Diner(diner,'Warren');
din.addDishToDiner(23);
din.addDishToDiner(12.23);
diner.addDinerToDiners(din);

var anotherDin = new Diner.Diner(diner,'Bill');
anotherDin.addDishToDiner(25);
anotherDin.addDishToDiner(11.22);
diner.addDinerToDiners(anotherDin);

var yetAnotherDin = new Diner.Diner(diner,'Carly');
yetAnotherDin.addDishToDiner(27);
yetAnotherDin.addDishToDiner(6.22);
yetAnotherDin.addDishToDiner(4.20);
diner.addDinerToDiners(yetAnotherDin);

console.log("total bill: "+diner.totalBill())
diner.billPerDiner();