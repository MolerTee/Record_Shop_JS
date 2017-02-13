var assert = require('assert');
var Record = require('../record');
// var recordStore = require('../recordStore');

describe ('record', function(){

  it('should have artist', function(){
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    assert.equal("Genesis", record.getArtist());
  });

  it('should have title', function(){
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    assert.equal("Invisible Touch", record.getTitle());
  });

  it('should have price', function(){
    var record = new Record("Genesis", "Invisible Touch", 2.50);
    assert.equal(2.50, record.getPrice());
  });






});



