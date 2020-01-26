const assert = require('assert');
const {sum, mult} = require('../index.js');

describe('testing function sum', () =>{
   it('should equal 6', () =>{
      assert.equal(sum(2, 3), 5);
   });
    it('should not be equal 0', () =>{
        assert.notEqual(sum(2, 3), 0);
    });
});
