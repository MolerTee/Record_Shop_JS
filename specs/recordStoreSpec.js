var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../recordStore');
var Customer = require('../customer');

describe('recordStore', function(){

  it("should have name", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    assert.equal("shoppy", recordStore.getName());
  });

  it("should have city", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    assert.equal("edinburgh", recordStore.getCity());
  });

  it("should have inventory", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    var inventory  = recordStore.getInventory();
    assert.equal(0, inventory.length);
  });

  it("should have balance", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    assert.equal(0, recordStore.getBalance());
  });

  it("should have items in inventory", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    recordStore.addRecord(record);
    var inventory = recordStore.getInventory();
    assert.equal(1, inventory.length);
  });

  it("should list items in inventory", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    var record2 = new Record("another", "record", 5);
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    var inventory = recordStore.getInventory();
    assert.equal(recordStore.listItems(inventory), "Genesis Invisible Touch £2.5 another record £5 ");
  });

  it("should sell album", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    var inventory = recordStore.getInventory();
    assert.equal(0, inventory.length);
  });

  it("should update balance", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    assert.equal(2.5, recordStore.balance);
  });

  it("should report finnancial situation", function(){
    var recordStore = new RecordStore("shoppy", "edinburgh");
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    var record2 = new Record("another", "record", 5);
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.equal("Balance: 2.5 Inventory Total: 7.5", recordStore.makeReport(recordStore.getInventory()));
  });



});