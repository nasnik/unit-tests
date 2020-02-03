const assert = require('assert');
const {expect} = require('chai');
const {sum, mult, breakChocolate, converter, slope, past, howMuchILoveYou, iceBrickVolume, angle, problem, myFirstKata} = require('../index.js');


describe('testing function sum', () =>{
   it('should equal 6', () =>{
  //    assert.equal(sum(2, 3), 5);
      expect(sum(2, 3)).to.equal(5);
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
describe('testing function iceBrickVolume', () =>{
    it('parameters should be > 0', function () {
        expect(iceBrickVolume(0, 0, 0)).to.equal(0);
    });
});
describe('testing function angle', () =>{
    it('should return twice as much as the previous value', () =>{
        expect(angle(4)).to.equal(360);
    });
});
describe('testing function problem', () =>{
    it('should return Error if entry is string', () =>{
        expect(problem('mom')).to.equal('Error');
    });
    it('should calculate correctly 56', () =>{
        expect(problem(1)).to.equal(56);
    });
});
describe('testing function myFirstKata', () =>{
   it('should return false if one entry isnt a number', ()=>{
      expect(myFirstKata(3, '6')).to.equal(false);
   });
    it('should return correct num', () =>{
       expect(myFirstKata(3, 5)).to.equal(5);
    });
});
