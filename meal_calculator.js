var Diners = function(tax,tip_percentage){
    this.tax = tax;
    this.diners=[];
    this.tip_percentage = tip_percentage;
}
Diners.prototype.addDinerToDiners = function(diner){
    this.diners.push(diner);
}
Diners.prototype.billBeforeTaxOrTip = function(){
    var total = 0;
    this.diners.forEach(function(diner){
        total+=diner.dinerBeforeTaxOrTip();
    })
    return total;
}
 
Diners.prototype.totalBill = function(){
    return this.billBeforeTaxOrTip() +this.billBeforeTaxOrTip()*this.tax + this.billBeforeTaxOrTip()*this.tip_percentage;
}
 
Diners.prototype.tipTotalDiners = function(){
    return (this.billBeforeTaxOrTip()+this.billBeforeTaxOrTip()*this.tax)*this.tip_percentage;
}
 
Diners.prototype.tipPerDiner = function(){
    return this.tipTotalDiners()/this.diners.length;
}
Diners.prototype.billPerDiner = function(){
    this.diners.forEach(function(diner){
        console.log(diner.name+": "+diner.dinerAfterTaxAndTip(this));
    }.bind(this));
}
 ////////////////////////////////////////////////////////////////////////////////////////////////////// diner
var Diner = function(diners,name){
    this.dishes =[];
    this.name = name;
}
 
Diner.prototype.addDishToDiner = function(dish){
    this.dishes.push(dish);
}
 
Diner.prototype.dinerBeforeTaxOrTip = function(){
    var total = 0;
    this.dishes.forEach(function(dish){
        total+=dish;
    })
    return total;
}
Diner.prototype.dinerAfterTaxAndTip = function(diners){
    return this.dinerBeforeTaxOrTip()*diners.tax+diners.tipPerDiner()+this.dinerBeforeTaxOrTip();
   
}

var diner = new Diners(0.05,0.1);
// print out bill of diner
//Diner.prototype.bill
var din = new Diner(diner,'Warren');
din.addDishToDiner(23);
din.addDishToDiner(12.23);
diner.addDinerToDiners(din);

var anotherDin = new Diner(diner,'Bill');
anotherDin.addDishToDiner(25);
anotherDin.addDishToDiner(11.22);
diner.addDinerToDiners(anotherDin);

var yetAnotherDin = new Diner(diner,'Carly');
yetAnotherDin.addDishToDiner(27);
yetAnotherDin.addDishToDiner(6.22);
yetAnotherDin.addDishToDiner(4.20);
diner.addDinerToDiners(yetAnotherDin);

console.log("total bill: "+diner.totalBill())
// console.log(din.dinerBeforeTaxOrTip());
diner.billPerDiner();