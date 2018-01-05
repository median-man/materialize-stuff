const { expect } = chai;

describe('Enemy Activation Table', () => {
    describe('TableView', () => {
      describe('constructor function', () => {
        it('accepts a selector parameter and an array of data');
        it('adds a row for each item in the array of data');
        it('sets the scenario property to an empty string');
      });
      describe('when the advance column header is clicked', () => {
        it('sets the scenario property to "advance"');
        it('highlights the advance column and removes highlighting from the other columns');
      });
      describe('when the battle column header is clicked', () => {
        it('sets the scenario property to "battle"');
        it('highlights the battle column and removes highlighting from the other columns');
      });
      describe('when the counter attack column header is clicked', () => {
        it('sets the scenario property to "counterattack"');
        it('highlights the counter attack column and removes highlighting from the other columns');
      });
      describe('highlightRow method', () => {
        it('highlights the first row when passed a 0 and clears highlighting from all other rows');
        it('highlights the fourth row when passed a 4 and clears highlighting from all other rows');
        it('highlights the seventh row when passed a 7 and clears highlighting from all other rows');
      });
      describe('selectUnit method', () => {
        describe('when scenario is "advance" and row param is 0', () => {
          it('adds the "result" class to the cell in the first row of the ' +
            'advance column and removes it from all other cells');
        });        
        describe('when scenario is "counterattack" and row param is 5', () => {
          it('adds the "result" class to the cell in the sixth row of the ' +
            'counter attack column and removes it from all other cells');
        });
        describe('when scenario is "battle" and row param is 13', () => {
          it('adds the "result" class to the cell in the 14th row of the ' +
            'battle column and removes it from all other cells');
        });
      });
    });
});
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
