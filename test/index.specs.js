const assert = require('assert');
const {sum, mult, breakChocolate} = require('../index.js');

describe('testing function sum', () =>{
   it('should equal 6', () =>{
      assert.equal(sum(2, 3), 5);
   });
    it('should not be equal 0', () =>{
        assert.notEqual(sum(2, 3), 0);
    });
});

describe('testing function mult', () =>{
   it('should return 6', ()=>{
     assert.equal(mult(2, 3), 6);
   });
   it('should return 0', () =>{
       assert.equal(mult(2, 0), 0);
   });
});

describe('testing function breakChocolate', () =>{
   it('should return 15', () =>{
       assert.equal(breakChocolate(4, 4), 15);
   });
    it('should return 0 with 0 entry', () =>{
        assert.equal(breakChocolate(4, 0), 0);
    });
    it('should return 0 with negative entry', () =>{
        assert.equal(breakChocolate(-4, 4), 0);
    });
});
