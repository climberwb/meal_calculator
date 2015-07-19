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


exports.Diner = Diner;