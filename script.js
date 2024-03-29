var createPolitician = function(name, partyColor) {

var politician = {};
politician.name = name;
politician.partyColor = partyColor;
politician.electionResults = null;
politician.totalVotes = 0;

politician.tallyTotalVotes = function(){

  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++) {

    this.totalVotes = this.totalVotes + this.electionResults[i];

  }
};

return politician;

};

var ronald = createPolitician("Ronald Bump", [132, 17, 11]);

var lizzie = createPolitician("Lizzie Sporran", [245, 141, 136]);


ronald.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

lizzie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

ronald.electionResults[9] = 1;
lizzie.electionResults[9] = 28;

ronald.electionResults[4] = 17;
lizzie.electionResults[4] = 38;

ronald.electionResults[43] = 11;
lizzie.electionResults[43] = 27;

ronald.tallyTotalVotes();
lizzie.tallyTotalVotes();

console.log(ronald.totalVotes);
console.log(lizzie.totalVotes);

console.log("Ronald's color is " + ronald.partyColor);

console.log("Lizzie's color is " + lizzie.partyColor);


var setStateResults = function(state){

  theStates[state].winner = null;

  if (ronald.electionResults[state] > lizzie.electionResults[state]) {

    theStates[state].winner = ronald;

  } else if (ronald.electionResults[state] < lizzie.electionResults[state]) {

    theStates[state].winner = lizzie;

  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {

    theStates[state].rgbColor = stateWinner.partyColor;

  } else {

    theStates[state].rgbColor = [11, 32, 57];

  }

  var stateInfoTable = document.getElementById ('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = ronald.name;
  candidate2Name.innerText = lizzie.name;

  candidate1Results.innerText = ronald.electionResults[state];
  candidate2Results.innerText = lizzie.electionResults[state];

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }

};


var winner = "???";

if (ronald.totalVotes > lizzie.totalVotes) {
  winner = ronald.name;
} else if (ronald.totalVotes < lizzie.totalVotes) {
  winner = lizzie.name;
} else {
  winner = "DRAW";
};

console.log("And the winner is... " + winner + "!");

var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = ronald.name;
row.children[1].innerText = ronald.totalVotes;
row.children[2].innerText = lizzie.name;
row.children[3].innerText = lizzie.totalVotes;
row.children[5].innerText = winner;
