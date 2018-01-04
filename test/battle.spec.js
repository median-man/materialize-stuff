const chai = require('chai');
const { crew, Crewman } = require('../src/battle');

const { expect } = chai;
chai.should();

describe('Battle', () => {
  describe('Crewman', () => {
    const validRoles = ['commander', 'gunner', 'loader', 'driver', 'asst. driver'];
    const validRole = validRoles[0];
  
    // function to validate role argument as a pre-condition for a test
    function validateRole(role) {
      expect(() => new Crewman(role), 'pre-condition failed').to.not.throw();
    }
  
    describe('Crewman.newRating()', () => {
      // test doesn't check randomness. just checks that number is within range
      it('should return a random integer between 1 and 5', () => {
        const rating = Crewman.newRating();
        expect(Number.isInteger(rating)).to.be.true;
        expect(rating).to.be.within(1, 5);
      });
    });
  
    // Crewman.roles is an array of strings enumerating the valid
    // roles that a crewman may have.
    describe('Crewman.roles', () => {
      it('should be an array of strings', () => {
        Crewman.roles.should.be.an('array');
      });
      it(`should have only the following members: ${validRoles.join(', ')}`, () => {
        Crewman.roles.should.have.members(validRoles);
      });
    });
  
    // Tests for Crewman instance
    describe('constructor', () => {
      it('will throw if role is not a valid role enumerated by Crewman.role', () => {
        function shouldThrow(role) {
          expect(validRoles, 'pre-condition').to.not.include(role);
          expect(() => new Crewman(role), `new Crewman('${role}')`).to.throw();
        }
        // test inputs that should throw
        ['test', 'c'].forEach(shouldThrow);
  
        // test inputs that should not throw (in Crewman.role)
        Crewman.roles.forEach(role => new Crewman(role));
      });
  
      it('has a role property initally set to equal the role argument', () => {
        function checkRole(role) {
          new Crewman(role).role.should.equal(role);
        }
        Crewman.roles.forEach(checkRole);
      });
      
      // it should throw if rating is out of bounds. it should not throw if no rating
      // is passed to the constructor. rating is an optional parameter.
      it('should throw if rating argument provided and it is not a number from 1 to 10 inclusive', () => {
        validateRole(validRole); // pre-condition
        function shouldThrow(rating) {
          expect(() => new Crewman(validRole, rating), 
            `new Crewman('${validRole}', ${rating})`).to.throw();
        }
        [0, -1, 11, '11', [1, 2]].forEach(shouldThrow);
      });
  
      it('rating should be a random number from 1 to 10 when no rating argument is given', () => {
        const crewman = new Crewman(validRole);
        validateRole(validRole); // pre-condition
  
        // not interested in testing the implementation of the random number so long
        // as it falls within the range
        crewman.rating.should.be.a('number').and.be.within(1,5);
      });
  
      it('rating should be equal to the rating argument if it is defined', () => {
        // preconditions
        validateRole(validRole);
  
        expect(new Crewman(validRole, 6).rating).to.equal(6);
        expect(new Crewman(validRole, 7).rating).to.equal(7);
      });
    });
  });
  describe('crew', () => {
    it.skip('is an array containing 5 crewman', () => {
      expect(crew).to.be.an('array').with.a.lengthOf(5);
      function validateMembersOfCrew(crewman) {
        expect(crewman).to.be.a('object');
        expect(crewman).to.be.an.instanceOf(Crewman);

      }
      crew.forEach(validateMembersOfCrew);
    });
  });
});
