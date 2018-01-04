


// valid roles for a Crewman
Crewman.roles = ['commander', 'gunner', 'loader', 'driver', 'asst. driver'];

Crewman.newRating = function newCrewmanRating() {
  return Math.floor(Math.random() * 4) + 1;
};

// Constructs a crewman. Rating is optional number.
function Crewman(role, rating) {
  if (!Crewman.roles.includes(role)) throw new Error();

  // rating should be a number between 1 and 10 if it is defined
  if ((rating && typeof rating !== 'number') || rating <= 0 || rating >= 11) {
    throw new Error();
  }
  this.role = role;

  // rating is initially set to a random number between 1 and 5
  this.rating = rating || Crewman.newRating();
}
const crew = new Array(5).fill(new Crewman('commander'));

module.exports = { crew, Crewman };
