var Customer = function(name , cash){
 this.name = name,
 this.cash = cash,
 this.albums = []

 };

 Customer.prototype = {
  getName: function(){
    return this.name;
  },

  getCash: function(){
    return this.cash;
  },

  addRecord: function(record){
    this.albums.push(record);
  },

  sellRecord: function(record){
    var recordIndex = this.albums.indexOf(record);
    this.albums.splice(recordIndex,1);
    return this.cash += record.price;
  },

  buyRecord: function(record){
    if(record.price > this.cash){
      return "you need more money son"
    }else{
    this.albums.push(record);
    return this.cash -= record.price;
    };
  }


 };

 module.exports = Customer;