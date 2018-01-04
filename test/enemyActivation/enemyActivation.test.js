const { expect } = chai;

// sanity check
describe('This test', () => {
    it('works', () => {
        expect(true).to.be.true;
    })
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
