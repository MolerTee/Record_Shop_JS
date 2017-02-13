var RecordStore = function(name, city){
  this.name = name,
  this.city = city,
  this.inventory = [],
  this.balance = 0,
  this.inventoryWorth = 0 ,
  this.itemDetails = 0
};

RecordStore.prototype = {
  getName: function(){
    return this.name;
  },

  getCity: function(){
    return this.city;
  },

  getInventory: function(){
    return this.inventory;
  },

  getBalance: function(){
    return this.balance;
  },

  addRecord: function(record){
    this.inventory.push(record);
  },

  listItems: function(array){
    var records = "";
    for (var item of array){
      records += item.artist + " " + item.title + " £" + item.price + " ";
    }
    return records;
  },

  sellRecord: function(record){
    this.balance += record.getPrice();
    var recordIndex = this.inventory.indexOf(record);
    this.inventory.splice(recordIndex,1);
    return this.balance;
  },

  makeReport: function(array){
      for (var item of array){
      this.inventoryWorth += item.getPrice();
    };
    return ("Balance: " + this.balance + " Inventory Total: " + this.inventoryWorth);
  },


    
    
}




module.exports = RecordStore;