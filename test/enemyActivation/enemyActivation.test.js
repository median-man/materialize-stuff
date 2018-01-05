const { expect } = chai;

describe('Enemy Activation Table', () => {
  describe('when the activate unit button is clicked and the advance scenario is selected', () => {
    it('generates a random number from 1 to 100 inclusive');
    describe('when a 14 is rolled', () => {
      it('marks the unit in the cell at the 3rd row in the advance column');
      it('adds a message to the log for the roll');
      it('adds a message to the log for the result');
      describe('the roll message added to the log', () => {
        it('has a pattern like "h:m:ss am/pm: Rolled a 14 on the Enemy Activation Table"')
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
        it('has a pattern like "h:m:ss am/pm: Rolled a 72 on the Enemy Activation Table"')
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
  In order spend less time rolling dice and lookin gup info on a table
  I want to get the activated unit by clicking a button
  And I want to see what number was rolled

  Scenario 1: Unit is activated
  Given that I have chosen the advance scenario
  When I click the activate button
  Then a random number from 1 to 100 should be displayed
  Given that the number rolled is 14
  And the cell for the unit is in the third row (corresponds to a roll of 14)
  Then I should see the activated unit marked on the table in its cell in the 3rd row of the advance column
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
// an animation should display where rows are highlighted randomly for a short period of time until stopping
// on the correct row based on the roll.
// the unit at the intersection of the row and column should be highlighted and bolded and have an animation
// there should be a log message added at the bottom of the table

// end of + button click operation

// rendering the table
// there should be a tableView constructor which accepts a query selector string and an array of data to display
// a row should be created for each element of the data array and appended to the table
// the constructor should create an on click listener for the scenario headers (user input for scenario)
    // when the user clicks one of the scenario column headers
    // the column should be highlighted
    // other columns should not be highlighted
// the constructor should create click listener for the '+' button
    // refer to comments above for the handling operation
// the table object should provide a method which starts the roll animation
    // this method should accept a time parameter and a index for the row that should be displayed
    // the row highlighting animation should run for the specified time before stopping on the indicated row

// the log
// there should be a logView constructor which accepts a query selector string
// the push method should accept a string as a paremter and add the string to the top of the log with a timestamp
