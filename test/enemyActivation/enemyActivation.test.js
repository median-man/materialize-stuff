/* globals generateRoll activateUnit TableView */
const { expect } = chai;

describe('Enemy Activation Table', () => {
  const clearFixture = () => $('#testFixture').empty();
  describe('TableView', () => {
    const actTblId = 'activationTable';
    const selector = `#${actTblId}`;
    const testRows = [
      [{ unit: 'LW' }, { unit: 'LW' }, { unit: 'LW' }],
    ];
    function setupFixture() {
      // clear out the fixtures and create the test structure
      clearFixture();
      return $('<table>', { id: actTblId }).appendTo('#testFixture');
    }
    describe('constructor', () => {
      let $table = null;
      let tblView = null;
      before(() => {
        $table = setupFixture();
      });
      it('throws if the selector is not valid', () => {
        expect(() => new TableView(selector, testRows), 'a valid selector').to.not.throw();
        expect(() => new TableView('#notFound', testRows)).to.throw();
      });
      it('creates a tbody element inside the table', () => {
        tblView = new TableView(selector, testRows);
        expect($table.has('tbody').length, 'tbody').to.equal(1); // eslint-disable-line no-unused-expressions
      });
    });

    /* describe('addRows()', () => {
      let tableView = null;
      let $tblViewFixture = null;
      const testData = ['one', 'two', 'three'];
      before(() => {
        $tblViewFixture = setupFixture();
        tableView = new TableView(selector);

        // there should be no rows if setup worked correctly. Tests depend on this state.
        expect($tblViewFixture.find('tr').length, 'no rows present').to.equal(0);
      });

      it('adds a row to the table for each item in the array', () => {
        tableView.addRows(testData);
        it($tblViewFixture)
      });
    }); */
  });
  describe.skip('generateRoll()', () => {
    it('accepts a seed, min, and max parameters', () => {
      expect(() => generateRoll(0.607, 1, 100)).to.not.throw();
    });
    // Function to run an array of tests given against a given min and max
    // where each element in tests is an object { seed: number, result: number }
    function testGenerateRoll(min, max, tests) {
      describe(`when min is ${min} and max is ${max}`, () => {
        tests.forEach(({ seed, result }) => {
          it(`returns ${result} when the seed is ${seed}`, () => {
            expect(generateRoll(seed, min, max)).to.equal(result);
          });
        });
      });
    }
    testGenerateRoll(1, 100, [
      { seed: 0, result: 1 },
      { seed: 0.6071997, result: 61 },
      { seed: 0.99, result: 100 },
    ]);
    testGenerateRoll(0, 9, [
      { seed: 0, result: 0 },
      { seed: 0.9999999, result: 9 },
      { seed: 0.4704769, result: 4 },
    ]);
  });
  describe.skip('activateUnit()', () => {
    function failingTest(roll, scenario) {
      expect(
        () => activateUnit(roll, scenario),
        `roll = ${roll}, scenario = ${scenario}`,
      ).to.throw();
    }
    it('throws is roll parameter is not from 1 to 100', () => {
      failingTest(0, 'advance');
      failingTest(101, 'advance');
    });
    it('requires a scenario property', () => {
      failingTest(1);
    });
    it('does not throw when scenario property is "advance", "battle", or "counterattack"', () => {
      expect(() => activateUnit(1, 'advance')).to.not.throw();
      expect(() => activateUnit(1, 'battle')).to.not.throw();
      expect(() => activateUnit(1, 'counterattack')).to.not.throw();
    });
    // Function to test the result of the activateUnit method
    function testActivateUnit(roll, scenario, unit, note) {
      describe(`when the roll is ${roll} and the scenario is "${scenario}"`, () => {
        const result = activateUnit(roll, scenario);
        it(`returns an object where the unit property is "${unit}"`, () => {
          expect(result.unit).to.equal(unit);
        });
        if (!unit) {
          it('returns an object that does not have a note property', () => {
            expect(result.note).to.not.exist; // eslint-disable-line no-unused-expressions
          });
        } else {
          it(`returns an object where the note property is ${note}`, () => {
            expect(result.note).to.equal(note);
          });
        }
      });
    }
    testActivateUnit(6, 'advance', 'MG');
    testActivateUnit(11, 'advance', 'LW');
    testActivateUnit(12, 'advance', 'LW');
    testActivateUnit(16, 'advance', 'TRUCK');
    testActivateUnit(20, 'advance', 'TRUCK');
    testActivateUnit(5, 'advance', 'SPG', 1);
    testActivateUnit(99, 'advance', 'SPG');
    testActivateUnit(1, 'battle', 'SPG');
    testActivateUnit(71, 'counterattack', 'TANK', 1);

    // describe('when the roll is 11 adn the scenario is "advance"', () => {})

    /* describe('when the roll is 21', () => {
      const result = activateUnit(1);
      it('returns an object', () => {
        expect(result).to.be.an('object');
      });
      describe('the object returned', () => {
        it('has a unit property equal to ', () => {
          expect(result.unit).to.exist;
        })
      });
    }); */
  });
  describe('when the activate unit button is clicked and the advance scenario is selected', () => {
    it('generates a random number from 1 to 100 inclusive');
    describe('when a 14 is rolled', () => {
      it('marks the unit in the cell at the 3rd row in the advance column');
      it('adds a message to the log for the roll');
      it('adds a message to the log for the result');
      describe('the roll message added to the log', () => {
        it('has a pattern like "h:m:ss am/pm: Rolled a 14 on the Enemy Activation Table"');
      });
      describe('the result message added to the log', () => {
        it('is added after the roll message');
        it('has a pattern like "h:m:ss am/pm: A LW unit was activated"');
      });
    });
  });
  describe('when the activate unit button is clicked and the battle scenario is selected', () => {
    it('generates a random number from 1 to 100 inclusive');
    describe('when a 72 is rolled', () => {
      it('marks the unit in the cell at the 15th row in the battle column');
      it('adds a message to the log for the roll');
      it('adds a message to the log for the result');
      describe('the roll message added to the log', () => {
        it('has a pattern like "h:m:ss am/pm: Rolled a 72 on the Enemy Activation Table"');
      });
      describe('the result message added to the log', () => {
        it('is added after the roll message');
        it('has a pattern like "h:m:ss am/pm: A SPG(2) unit was activated"');
        it('note 2 is given a pulse animation');
      });
    });
  });
});

/* Story: Activate Unit
  As a user of the table
  In order spend less time rolling dice and looking up info on a table
  I want to get the activated unit by clicking a button
  And I want to see what number was rolled

  Scenario 1: Unit is activated
  Given that I have chosen the advance scenario
  When I click the activate button
  Then a random number from 1 to 100 should be displayed
  Given that the number rolled is 14
  And the cell for the unit is in the third row (corresponds to a roll of 14)
  Then I should see the activated unit marked on the table in its cell in the 3rd row of the ...
    ... advance column
  And the row of the selected unit should be called out visibly
  And an entry of the action should be added to the log
*/

/*
enemyActivationData is an array where each item is an object
with the following schema:
Row {
  "type": "object",
  "properties":  {
    // integer from 1 to 100
    "min": {
      "type": "number",
      "required": true
    },
    // integer from 1 to 100 (must be greater than min)
    "max": {
      "type": "number",
      "required": true
    },
    "battle": {
      "type": "object",
      "required": true,
      "properties": {
        // "the class of the unit"
        "unit": {
          "type": "string",
          "required": true
        },
        // special treatment note (1 or 2)
        "note": {
          "type": "number"
          "required": false
        },
      }
    },
    "advance": <same as battle property>,
    "counterattack": <same as battle property>
  }
}
 */

// the activateUnit function
// parameters: scenario, roll
// scenario is a string: 'battle', 'counterattack', 'advance'
// roll is a number from 1 to 100 inclusive
// returns an object { rowNum, unit }
// rowNum is the 0 based index of the row in the table
// columnNum
// looks up roll and row from enemyActivationData

// when the user clicks the + button
// get the input (scenario)

// if the scenario is not set
// a tooltip should pop up prompting the user to choose a scenario column
// the tool tip should display to the right of the header row on larger screens
// the tool tip should siplay below the header row (on top of rows below) on smaller screens
// the tool tip should have a button to close it
// the tool tip should close if the user clicks anywhere outside of the tooltip

// if the scenario is set
// the tableView should call activateUnit function passing the scenario to it


// get a random number from 1 to 100
// an animation should display where rows are highlighted randomly for a short period of time ...
//  ... until stopping
// on the correct row based on the roll.
// the unit at the intersection of the row and column should be highlighted and bolded and have ...
//  ... an animation
// there should be a log message added at the bottom of the table

// end of + button click operation

// rendering the table
// there should be a tableView constructor which accepts a query selector string and an array of ...
//  ... data to display
// a row should be created for each element of the data array and appended to the table
// the constructor should create an on click listener for the scenario headers (user input ...
//  ... for scenario)
// when the user clicks one of the scenario column headers
// the column should be highlighted
// other columns should not be highlighted
// the constructor should create click listener for the '+' button
// refer to comments above for the handling operation
// the table object should provide a method which starts the roll animation
// this method should accept a time parameter and a index for the row that should be displayed
// the row highlighting animation should run for the specified time before stopping on the ...
//  ... indicated row

// the log
// there should be a logView constructor which accepts a query selector string
// the push method should accept a string as a paremter and add the string to the top of the log ...
//  ... with a timestamp
