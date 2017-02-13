var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../recordStore');
var Customer = require('../customer');

describe("customer" ,  function(){

  it("should have name", function(){
    var customer = new Customer("Trizo" , 2500);
    assert.equal("Trizo", customer.getName());
  });

  it("should have cash", function(){
    var customer = new Customer("Trizo" , 2500);
    assert.equal(2500, customer.getCash());
  });

  it("should be able to add record", function(){
    var customer = new Customer("Trizo", 2500);
    var record = new Record("Rick James", "Unity", 100);
    customer.addRecord(record);
    var collection = customer.albums;
    assert.equal(1, collection.length);
  });

  it("should be able to sell record", function(){
    var customer = new Customer("Trizo", 2500);
    var record = new Record("Rick James", "Unity", 100);
    var recordStore = new RecordStore("shoppy", "edinburgh");
    customer.addRecord(record);
    customer.sellRecord(record);
    assert.equal(2600, customer.getCash());
  });

  it("should be able to buy record", function(){
    var customer = new Customer("Trizo", 2500);
    var record = new Record("Rick James", "Unity", 100);
    var recordStore = new RecordStore("shoppy", "edinburgh");
    recordStore.addRecord(record);
    customer.buyRecord(record);
    recordStore.sellRecord(record);
    assert.equal(2400, customer.getCash());
    assert.equal(100, recordStore.getBalance());
  });

  it("should not be able to buy album if not enough money", function(){
    var customer = new Customer("Trizo", 90);
    var record = new Record("Rick James", "Unity", 100);
    var recordStore = new RecordStore("shoppy", "edinburgh");
    recordStore.addRecord(record);
    assert.equal("you need more money son" , customer.buyRecord(record));
  });

});