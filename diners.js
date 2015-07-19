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

exports.Diners = Diners;