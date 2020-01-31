const assert = require('assert');
const {sum, mult, breakChocolate, converter, slope, past, howMuchILoveYou} = require('../index.js');

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
describe('testing function converter', () =>{
   it('should return 3,54', () =>{
       assert.equal(converter(10), 3.54);
   });
});
describe('testing function slope', () =>{
    it('should return 4', () =>{
        assert.equal(slope([0, 2, 4, 18]), '4');
    });
    it('should return undefined', () =>{
        assert.equal(slope([4, 2, 4, 18]), 'undefined');
    });
});
describe('testing function past', () =>{
    it('should return 61000', () =>{
        assert.equal(past(0, 1, 1), 61000);
    });
    it('should return 0', () =>{
        assert.equal(past(0, 0, 0), 0);
    });
});
describe('testing function howMuchILoveYou', ()=>{
    it('should return I love you',()=>{
        assert.equal(howMuchILoveYou(7), 'I love you');
});
    it('should return not at all', () =>{
        assert.equal(howMuchILoveYou(6), 'not at all');
    });
});
