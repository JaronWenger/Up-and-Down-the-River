var round = 1;
var points = 0;
var ePoints = 0;
var tPoints = 0;
var cpuPoints = 0;
var gPoints = 0;
var dPoints = 0;

var eB
var tB
var bB
var gB
var dB

var cpuBidTracker = 0;
var trump = false;
var playerOnesTurn = false;
var lead = 5;

const Spades = ["2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","Js.png","Qs.png","Ks.png","As.png"];
const Clubs = ["2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","Jc.png","Qc.png","Kc.png","Ac.png"];
const Hearts = ["2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","Jh.png","Qh.png","Kh.png","Ah.png"];
const Diamonds = ["2d.png","3d.png","4d.png","5d.png","6d.png","7d.png","8d.png","9d.png","10d.png","Jd.png","Qd.png","Kd.png","Ad.png"];

const deck = ["2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","Js.png","Qs.png","Ks.png","As.png","2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","Jc.png","Qc.png","Kc.png","Ac.png","2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","Jh.png","Qh.png","Kh.png","Ah.png","2d.png","3d.png","4d.png","5d.png","6d.png","7d.png","8d.png","9d.png","10d.png","Jd.png","Qd.png","Kd.png","Ad.png"];
var shuffledDeck = shuffleDeck([...deck]);

function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/////FIRST ACTION////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  //////SET TRUMP BUTTON TO SHUFFLE
  var refreshImage = document.getElementById('trump-card');
  if (refreshImage) {
    refreshImage.addEventListener('click', function() {
      // Reload the page when the image is clicked
      shuffleHands()
    });
  }
  /////FIRST ROUND://///////
  establishLead()
  playerDeal()
  trumpDeal()


  //BID////////////////////
  var myButton = document.getElementById('0');
  if (myButton) {
    myButton.addEventListener('click', function() {
      // Call your function when the button is clicked
      playRound(0);
    });
  }
  var myButton = document.getElementById('1');
  if (myButton) {
    myButton.addEventListener('click', function() {
      // Call your function when the button is clicked
      playRound(1);
    });
  }
});
/////////////////////////////////////////////////////////
/////////////////////TRUMP CARD PRESSED/////////////////////////
/////////////////////TRUMP CARD PRESSED/////////////////////////
/////////////////////TRUMP CARD PRESSED/////////////////////////
function shuffleHands() {

  eB = 0
  tB = 0
  bB = 0
  gB = 0
  dB = 0


  round++

  var heading = document.getElementById("round");
  heading.innerHTML = ("ROUND: " + round);

  resetLeads();

  shuffledDeck = shuffleDeck([...deck]);

  establishLead()

  playerDeal()

  trumpDeal()

  var gCard = document.getElementById('gamma-card');
  gCard.src = "./images/bike.png";

  var dCard = document.getElementById('delta-card');
  dCard.src = "./images/bike.png";

  var cpuCard = document.getElementById('computer-card');
  cpuCard.src = "./images/bike.png";

  var eCard = document.getElementById('epsilon-card');
  eCard.src = "./images/bike.png";

  var tCard = document.getElementById('theta-card');
  tCard.src = "./images/bike.png";
}





function establishLead() {
  //LEAD ESTABLISHED
//var randomLead = Math.floor(Math.random() * 2);
lead++;

// Use modulus to loop back to the first player after the 6th player
lead %= 6;

switch (lead) {
  case 0:
      ///change lead to player one
    var pLead = document.getElementById('pDot');
    pLead.style.backgroundColor = "rgb(0, 126, 40)";
    pLead.style.height = "60px";
    pLead.style.width = "60px";
    playerOnesTurn = true;
    break;

  case 1:
  //change lead to EPSILON
  var eLead = document.getElementById('eDot');
  eLead.style.backgroundColor = "rgb(0, 126, 40)";
  eLead.style.height = "60px";
  eLead.style.width = "60px";
  eLead.style.left = "380px"
  eLead.style.bottom = "385px"

  playerOnesTurn = false;
  cpuBet(3, "eBid")
  cpuBet(4, "tBid")
  cpuBet(5, "cpuBid")
  cpuBet(6, "gBid")
  cpuBet(7, "dBid")
    break;

  case 2:
  //change lead to THETA
  var tLead = document.getElementById('tDot');
  tLead.style.backgroundColor = "rgb(0, 126, 40)";
  tLead.style.height = "60px";
  tLead.style.width = "60px";
  tLead.style.left = "380px"
  tLead.style.top = "180px"

  playerOnesTurn = false;
  cpuBet(4, "tBid")
  cpuBet(5, "cpuBid")
  cpuBet(6, "gBid")
  cpuBet(7, "dBid")

    break;
  case 3:
  //change lead to BETA
  var bLead = document.getElementById('cDot');
  bLead.style.backgroundColor = "rgb(0, 126, 40)";
  bLead.style.height = "60px";
  bLead.style.width = "60px";
  bLead.style.top = "25px"

  playerOnesTurn = false;
  cpuBet(5, "cpuBid")
  cpuBet(6, "gBid")
  cpuBet(7, "dBid")
    break;
  case 4:
  //change lead to GAMMA
  var gLead = document.getElementById('gDot');
  gLead.style.backgroundColor = "rgb(0, 126, 40)";
  gLead.style.height = "60px";
  gLead.style.width = "60px";
  gLead.style.top = "180px";
  gLead.style.right = "380px";

  playerOnesTurn = false;
  cpuBet(6, "gBid")
  cpuBet(7, "dBid")
    break;
  case 5:
  //change lead to DELTA
  var dLead = document.getElementById('dDot');
  dLead.style.backgroundColor = "rgb(0, 126, 40)";
  dLead.style.height = "60px";
  dLead.style.width = "60px";
  dLead.style.bottom = "385px";
  dLead.style.right = "380px";

  playerOnesTurn = false;
  cpuBet(7, "dBid")
    break;
}
}///////////////////////
////////////////////////
function resetLeads() {
  //reset all
  var pLead = document.getElementById('pDot');
  pLead.style.backgroundColor = "rgb(0, 0, 0)";
  pLead.style.height = "20px";
  pLead.style.width = "20px";
  

  //reset oposite
  var cLead = document.getElementById('cDot');
  cLead.style.backgroundColor = "rgb(0, 0, 0)";
  cLead.style.height = "20px";
  cLead.style.width = "20px";
  cLead.style.top = "50px";


  var eLead = document.getElementById('eDot');
  eLead.style.backgroundColor = "rgb(0, 0, 0)";
  eLead.style.height = "20px";
  eLead.style.width = "20px";
  eLead.style.left = "400px"
  eLead.style.bottom = "400px"




  var tLead = document.getElementById('tDot');
  tLead.style.backgroundColor = "rgb(0, 0, 0)";
  tLead.style.height = "20px";
  tLead.style.width = "20px";
  tLead.style.left = "400px";
  tLead.style.top = "200px";




  var gLead = document.getElementById('gDot');
  gLead.style.backgroundColor = "rgb(0, 0, 0)";
  gLead.style.height = "20px";
  gLead.style.width = "20px";
  gLead.style.top = "200px";
  gLead.style.right = "400px";




  var dLead = document.getElementById('dDot');
  dLead.style.backgroundColor = "rgb(0, 0, 0)";
  dLead.style.height = "20px";
  dLead.style.width = "20px";
  dLead.style.bottom = "400px";
  dLead.style.right = "400px";







  var cpuBet = document.getElementById('cpuBid');
  cpuBet.innerHTML = "";
  cpuBet.style.opacity = "0%";

  var gBet = document.getElementById('gBid');
  gBet.innerHTML = "";
  gBet.style.opacity = "0%";

  var dBet = document.getElementById('dBid');
  dBet.innerHTML = "";
  dBet.style.opacity = "0%";

  var eBet = document.getElementById('eBid');
  eBet.innerHTML = "";
  eBet.style.opacity = "0%";

  var tBet = document.getElementById('tBid');
  tBet.innerHTML = "";
  tBet.style.opacity = "0%";
}






function cpuBet(num, computerBid) {
  const tCard = shuffledDeck[2];
  const cCard = shuffledDeck[num];
  // Establish trump Suit
  let tSuit;
  if (Spades.includes(tCard)) {
    tSuit = "S";
  } else if (Clubs.includes(tCard)) {
    tSuit = "C";
  } else if (Hearts.includes(tCard)) {
    tSuit = "H";
  } else if (Diamonds.includes(tCard)) {
    tSuit = "D";
  }
  // Establish cpu Suit
  let cSuit;
  let suit;
  if (Spades.includes(cCard)) {
    cSuit = "S";
    suit = Spades
  } else if (Clubs.includes(cCard)) {
    cSuit = "C";
    suit = Clubs
  } else if (Hearts.includes(cCard)) {
    cSuit = "H";
    suit = Hearts
  } else if (Diamonds.includes(cCard)) {
    cSuit = "D";
    suit = Diamonds
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////      COMPUTER BID STRATEGY         /////////////////////////////////////////////////////////////////////////////////
  // Does the computer have trump?

  var cpuBet = document.getElementById(computerBid);
  const index = suit.indexOf(cCard);

  if (tSuit === cSuit) {
    trump = true
    if (index > 0){
/////Bid 1
      cpuBet.innerHTML = "1";
      cpuBet.style.opacity = "100%";
      cpuBidTracker = 1
      zed(num, 1)
    }else{
////Bid 1     
      cpuBet.innerHTML = "1";
      cpuBet.style.opacity = "100%";
      cpuBidTracker = 1
      zed(num, 1)
    }

  } else {
    trump = false
    if (index > 10){
      /////Bid 1
            cpuBet.innerHTML = "1";
            cpuBet.style.opacity = "100%";
            cpuBidTracker = 1
            zed(num, 1)
          }else{
      ////Bid 0      
            cpuBet.innerHTML = "0";
            cpuBet.style.opacity = "100%";
            cpuBidTracker = 1
            zed(num, 0)
          }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













function playerDeal() {
  //PLAYERS CARD DEAL
  var imageElement = document.getElementById('player-card');
  if (imageElement) {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * shuffledDeck.length);

    // Set the image source to the randomly chosen image path
    imageElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[0];
  }
}
function trumpDeal() {
    //TRUMP CARD DEAL
    var trumpElement = document.getElementById('trump-card');
    if (trumpElement) {
      // Get a random index from the array
      var randomIndex = Math.floor(Math.random() * shuffledDeck.length);
  
      // Set the image source to the randomly chosen image path
      trumpElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[2];
    }
}























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////       PLAY BALL         ////////////////////////////////////////////////////////////////////////////////
function playRound(bid) {
  
  ////SHOW CARDS
  var eCardElement = document.getElementById('epsilon-card');
  eCardElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[3];

  var tCardElement = document.getElementById('theta-card');
  tCardElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[4];

  var cpuCardElement = document.getElementById('computer-card');
  cpuCardElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[5];

  var gCardElement = document.getElementById('gamma-card');
  gCardElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[6];

  var dCardElement = document.getElementById('delta-card');
  dCardElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[7];


  const playerCard = shuffledDeck[0];
  const trumpCard = shuffledDeck[2];

  const eCard = shuffledDeck[3];
  const tCard = shuffledDeck[4];
  const cpuCard = shuffledDeck[5];
  const gCard = shuffledDeck[6];
  const dCard = shuffledDeck[7];

  const cards = [playerCard, eCard, tCard, cpuCard, gCard, dCard];


  // Establish player Suit
  const pCardInfo = determineSuit(playerCard);
  var pSuit = pCardInfo.cSuit; // Output: "S"
  var playerSuit = pCardInfo.cpuSuit; // Output: "Spades"

  // Establish trump Suit
  const trumCardInfo = determineSuit(trumpCard);
  var trumSuit = trumCardInfo.cSuit; // Output: "S"
  var trumpSuit = trumCardInfo.cpuSuit; // Output: "Spades"

  // Establish EPSILON Suit
  const eCardInfo = determineSuit(eCard);
  var eSuit = eCardInfo.cSuit; // Output: "S"
  var epsilonSuit = eCardInfo.cpuSuit; // Output: "Spades"

  // Establish THETA Suit
  const tCardInfo = determineSuit(tCard);
  var tSuit = tCardInfo.cSuit; // Output: "S"
  var thetaSuit = tCardInfo.cpuSuit; // Output: "Spades"

  // Establish cpu Suit
  const cardInfo = determineSuit(cpuCard);
  var cSuit = cardInfo.cSuit; // Output: "S"
  var cpuSuit = cardInfo.cpuSuit; // Output: "Spades"

  // Establish GAMMA Suit
  const gCardInfo = determineSuit(gCard);
  var gSuit = gCardInfo.cSuit; // Output: "S"
  var gammaSuit = gCardInfo.cpuSuit; // Output: "Spades"

  // Establish DELTA Suit
  const dCardInfo = determineSuit(dCard);
  var dSuit = dCardInfo.cSuit; // Output: "S"
  var deltaSuit = dCardInfo.cpuSuit; // Output: "Spades"




    ///////////////////winning or losing the trick
    var pIndex = playerSuit.indexOf(playerCard)

    var eIndex = epsilonSuit.indexOf(eCard)
    var tIndex = thetaSuit.indexOf(tCard)
    var cIndex = cpuSuit.indexOf(cpuCard)
    var gIndex = gammaSuit.indexOf(gCard)
    var dIndex = deltaSuit.indexOf(dCard)

    const cardIndexes = [pIndex, eIndex, tIndex, cIndex, gIndex, dIndex];

    ///////  have the cards = ["8s", "2h", "3d", "As", "7h", 3s]     cpuCard, eCard = ("8s")      have the tSuit = ("s"),        have the   lead    person,  have the index of each player  7. /////////////////
 
    const trumpCardPositions = [];

    for (let i = 0; i < cards.length; i++) {
      const currentCard = cards[i];
      const currentSuit = currentCard.charAt(currentCard.length - 5).toLowerCase(); // Extract the suit and convert to lowercase

      if (currentSuit === trumSuit) {
        trumpCardPositions.push(i);
      }
    }

    if (trumpCardPositions.length > 0) {

   
      const selectedCardValues = trumpCardPositions.map(index => cardIndexes[index]);
      const maxCardValue = Math.max(...selectedCardValues);
      const indexOfMaxValue = selectedCardValues.indexOf(maxCardValue);




      var winner = trumpCardPositions[indexOfMaxValue]

    if (winner === 0){
      console.log("ALPHA wins")
      var playerOneHeading = document.getElementById("points");
      if (bid === 1) {
        points = points + 11
        playerOneHeading.innerHTML = ("A: " + points)
      } else {
        points = points - 1
        playerOneHeading.innerHTML = ("A: " + points)
      }

    } else if (winner === 1 ) {
      console.log("epsilon wins")
      var playerOneHeading = document.getElementById("points");
      if (bid === 1) {
        points = points - 1
        playerOneHeading.innerHTML = ("A: " + points)
      } else {
        points = points + 10
        playerOneHeading.innerHTML = ("A: " + points)
      }
    } else if (winner === 2 ) {
      console.log("Theta wins")
      var playerOneHeading = document.getElementById("points");
      if (bid === 1) {
        points = points - 1
        playerOneHeading.innerHTML = ("A: " + points)
      } else {
        points = points + 10
        playerOneHeading.innerHTML = ("A: " + points)
      }
    } else if (winner === 3 ) {
      console.log("Beta wins")
      var playerOneHeading = document.getElementById("points");
      if (bid === 1) {
        points = points - 1
        playerOneHeading.innerHTML = ("A: " + points)
      } else {
        points = points + 10
        playerOneHeading.innerHTML = ("A: " + points)
      }
    } else if (winner === 4 ) {
      console.log("Gamma wins")
      var playerOneHeading = document.getElementById("points");
      if (bid === 1) {
        points = points - 1
        playerOneHeading.innerHTML = ("A: " + points)
      } else {
        points = points + 10
        playerOneHeading.innerHTML = ("A: " + points)
      }
    } else if (winner === 5 ) {
      console.log("DELTA wins")
      var playerOneHeading = document.getElementById("points");
      if (bid === 1) {
        points = points - 1
        playerOneHeading.innerHTML = ("A: " + points)
      } else {
        points = points + 10
        playerOneHeading.innerHTML = ("A: " + points)
      }
    }

    ///////////////////////////////////hold cpu bets//////////////////////////
    var remaining = [1,2,3,4,5];

    if (lead === 0){
      remaining = [1,2,3,4,5];
    } else if (lead === 1) {
      remaining = [];
    } else if (lead === 2) {
      remaining = [1];
    } else if (lead === 3) {
      remaining = [1,2];
    } else if (lead === 4) {
      remaining = [1,2,3];
    } else if (lead === 5) {
      remaining = [1,2,3,4];
    }

    //////---------------------------------------------------------------------------------

    var tally = [1,2,3,4,5].filter((element, index) => !remaining.includes(element));

    console.log("remain" + remaining)
    console.log("tally" + tally)


    function multiplyByFactorInPlaceTwo(array) {
      for (let i = 0; i < array.length; i++) {
        shownTally(tally[i], winner)
      }
    }
    multiplyByFactorInPlaceTwo(tally);

    //////---------------------------------------------------------------------------------






    let newCardIndexes = cardIndexes.filter((element, index) => remaining.includes(index));

    function multiplyByFactorInPlace(array, specificIndexes) {
      for (let i = 0; i < array.length; i++) {
        cpuBetOnPlayerOnesTurn(array[i],specificIndexes[i], trumSuit, cards[i+1], winner)
      }
    }
    multiplyByFactorInPlace(remaining, newCardIndexes);
/////////////////////////////////////////////////////////////////////
    } else {
      



      const leadCardPositions = [];

      var leader = pSuit
      if (lead === 0){
        leader = pSuit
      } else if (lead === 1){
        leader = eSuit
      } else if (lead === 2){
        leader = tSuit
      } else if (lead === 3){
        leader = cSuit
      } else if (lead === 4){
        leader = gSuit
      } else if (lead === 5){
        leader = dSuit
      }


      for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];
        const currentSuit = currentCard.charAt(currentCard.length - 5).toLowerCase(); // Extract the suit and convert to lowercase
  
        if (currentSuit === leader) {
          leadCardPositions.push(i);
        }
      }

      if (leadCardPositions.length > 0) {
 
     
        const selectedCardValues = leadCardPositions.map(index => cardIndexes[index]);
        const maxCardValue = Math.max(...selectedCardValues);
        const indexOfMaxValue = selectedCardValues.indexOf(maxCardValue);
  

  

  
        var winner = leadCardPositions[indexOfMaxValue]
  
        if (winner === 0){
          console.log("ALPHA wins")
          var playerOneHeading = document.getElementById("points");
          if (bid === 1) {
            points = points + 11
            playerOneHeading.innerHTML = ("A: " + points)
          } else {
            points = points - 1
            playerOneHeading.innerHTML = ("A: " + points)
          }
    
        } else if (winner === 1 ) {
          console.log("epsilon wins")
          var playerOneHeading = document.getElementById("points");
          if (bid === 1) {
            points = points - 1
            playerOneHeading.innerHTML = ("A: " + points)
          } else {
            points = points + 10
            playerOneHeading.innerHTML = ("A: " + points)
          }
        } else if (winner === 2 ) {
          console.log("Theta wins")
          var playerOneHeading = document.getElementById("points");
          if (bid === 1) {
            points = points - 1
            playerOneHeading.innerHTML = ("A: " + points)
          } else {
            points = points + 10
            playerOneHeading.innerHTML = ("A: " + points)
          }
        } else if (winner === 3 ) {
          console.log("Beta wins")
          var playerOneHeading = document.getElementById("points");
          if (bid === 1) {
            points = points - 1
            playerOneHeading.innerHTML = ("A: " + points)
          } else {
            points = points + 10
            playerOneHeading.innerHTML = ("A: " + points)
          }
        } else if (winner === 4 ) {
          console.log("Gamma wins")
          var playerOneHeading = document.getElementById("points");
          if (bid === 1) {
            points = points - 1
            playerOneHeading.innerHTML = ("A: " + points)
          } else {
            points = points + 10
            playerOneHeading.innerHTML = ("A: " + points)
          }
        } else if (winner === 5 ) {
          console.log("DELTA wins")
          var playerOneHeading = document.getElementById("points");
          if (bid === 1) {
            points = points - 1
            playerOneHeading.innerHTML = ("A: " + points)
          } else {
            points = points + 10
            playerOneHeading.innerHTML = ("A: " + points)
          }
        }

    ///////////////////////////////////hold cpu bets//////////////////////////
    var remaining = [1,2,3,4,5];

    if (lead === 0){
      remaining = [1,2,3,4,5];
    } else if (lead === 1) {
      remaining = [];
    } else if (lead === 2) {
      remaining = [1];
    } else if (lead === 3) {
      remaining = [1,2];
    } else if (lead === 4) {
      remaining = [1,2,3];
    } else if (lead === 5) {
      remaining = [1,2,3,4];
    }

//////---------------------------------------------------------------------------------

    var tally = [1,2,3,4,5].filter((element, index) => !remaining.includes(element));


    function multiplyByFactorInPlaceTwo(array) {
      for (let i = 0; i < array.length; i++) {
        shownTally(tally[i], winner)
      }
    }
    multiplyByFactorInPlaceTwo(tally);


//////---------------------------------------------------------------------------------







    let newCardIndexes = cardIndexes.filter((element, index) => remaining.includes(index));



    

    function multiplyByFactorInPlace(array, specificIndexes) {
      for (let i = 0; i < array.length; i++) {
        (function (index) {
        cpuBetOnPlayerOnesTurn(array[i],specificIndexes[i], trumSuit, cards[i+1], winner)
      })(i);
      }
    }
    multiplyByFactorInPlace(remaining, newCardIndexes);

    }
  }
}




function determineSuit(cpuCard) {
  let cSuit;
  let cpuSuit;

  if (Spades.includes(cpuCard)) {
    cSuit = "s";
    cpuSuit = Spades;
  } else if (Clubs.includes(cpuCard)) {
    cSuit = "c";
    cpuSuit = Clubs;
  } else if (Hearts.includes(cpuCard)) {
    cSuit = "h";
    cpuSuit = Hearts;
  } else if (Diamonds.includes(cpuCard)) {
    cSuit = "d";
    cpuSuit = Diamonds;
  } else {
    // Handle the case when cpuCard is not found in any suit
    console.error("Invalid card:", cpuCard);
    return null; // or throw an error, depending on your needs
  }

  return { cSuit, cpuSuit };
}












function winScore(bid) {
  if (bid === 1){
    points = points + 11;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  } else if (bid === 0) {
    points = points - 1;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  }
}
function loseScore(bid) {
  if (bid === 1){
    points = points - 1;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  } else if (bid === 0){
    points = points + 10;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  }
}





///////////////////////////////////////////////////cpu bid when not leading////////////////////////////////////
function cpuWinScore(cIndex) {
  if (cpuBidTracker === 1){
    cpuPoints = cpuPoints + 11;
    var scoreHeading = document.getElementById("cpuPoints");
    scoreHeading.innerHTML = ("B: " + cpuPoints);
  } else if (cpuBidTracker === 0) {
    cpuPoints = cpuPoints - 1;
    var scoreHeading = document.getElementById("cpuPoints");
    scoreHeading.innerHTML = ("B: " + cpuPoints);
  }
}
///////////////////////////////////////////////////cpu bid when not leading////////////////////////////////////
function cpuLoseScore(cIndex) {
  if (cpuBidTracker === 1){
    cpuPoints = cpuPoints - 1;
    var cpuScoreHeading = document.getElementById("cpuPoints");
    cpuScoreHeading.innerHTML = ("B: " + cpuPoints);
  } else if (cpuBidTracker === 0){
    cpuPoints = cpuPoints + 10;
    var cpuScoreHeading = document.getElementById("cpuPoints");
    cpuScoreHeading.innerHTML = ("B: " + cpuPoints);
  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cpuBetOnPlayerOnesTurn(cpuReveal, indexes, truSuit, cardSuit, winner){
  const newCardSuit = cardSuit.replace(/[2-9]|10|J|Q|K|A/g, '').replace(/\..+$/, '');

///////////////////////////playeronesTurn//////establish cpu bet////////
if (cpuReveal === 1) {
  var cpuBet = document.getElementById('eBid');
  var cpuScoreHeading = document.getElementById("ePoints");
  var score = ePoints
  var preHTML = "E: "
} else if (cpuReveal === 2) {
  var cpuBet = document.getElementById('tBid');
  var cpuScoreHeading = document.getElementById("tPoints");
  var score = tPoints
  var preHTML = "T: "
} else if (cpuReveal === 3) {
  var cpuBet = document.getElementById('cpuBid');
  var cpuScoreHeading = document.getElementById("bPoints");
  var score = cpuPoints
  var preHTML = "B: "
} else if (cpuReveal === 4) {
  var cpuBet = document.getElementById('gBid');
  var cpuScoreHeading = document.getElementById("gPoints");
  var score = gPoints
  var preHTML = "G: "
} else if (cpuReveal === 5) {
  var cpuBet = document.getElementById('dBid');
  var cpuScoreHeading = document.getElementById("dPoints");
  var score = dPoints
  var preHTML = "D: "
}




if (truSuit === newCardSuit) {
  cpuBet.innerHTML = "1";
  cpuBet.style.opacity = "100%";
  if (cpuReveal === winner){
    score = score + 11
    cpuScoreHeading.innerHTML = (preHTML + score);
    kleveland(11, cpuReveal)
  } else {
    score = score - 1
    cpuScoreHeading.innerHTML = (preHTML + score);
    kleveland(-1, cpuReveal)
  }
} else if (truSuit !== newCardSuit) {
  if (indexes > 11){
    cpuBet.innerHTML = "1";
    cpuBet.style.opacity = "100%";
    if (cpuReveal === winner){
      score = score + 11
      cpuScoreHeading.innerHTML = (preHTML + score);
      kleveland(11, cpuReveal)
    } else {
      score = score - 1
      cpuScoreHeading.innerHTML = (preHTML + score);
      kleveland(-1, cpuReveal)
    }
  } else {
    cpuBet.innerHTML = "0";
    cpuBet.style.opacity = "100%";
    if (cpuReveal === winner){
      score = score - 1
      cpuScoreHeading.innerHTML = (preHTML + score);
      kleveland(-1, cpuReveal)
    } else {
      score = score + 10
      cpuScoreHeading.innerHTML = (preHTML + score);
      kleveland(10, cpuReveal)
    }
  }
}


function kleveland(change, seat) {
  if (seat === 1) {
    ePoints = ePoints + change
  } else if (seat === 2) {
    tPoints = tPoints + change
  } else if (seat === 3) {
    cpuPoints = cpuPoints + change
  } else if (seat === 4) {
    gPoints = gPoints + change
  } else if (seat === 5) {
    dPoints = dPoints + change
  }
} 







}




function shownTally(numRemain, winner) {

  if (numRemain === 1) {
    var cpuScoreHeading = document.getElementById("ePoints");
    if (numRemain === winner) {
      if (eB === 1) {
        ePoints = ePoints + 11
        cpuScoreHeading.innerHTML = ("E: " + ePoints)
      } else if (eB === 0) {
        ePoints = ePoints - 1
        cpuScoreHeading.innerHTML = ("E: " + ePoints)
      }
    } else {
      if (eB === 1) {
        ePoints = ePoints - 1
        cpuScoreHeading.innerHTML = ("E: " + ePoints)
      } else if (eB === 0) {
        ePoints = ePoints + 10
        cpuScoreHeading.innerHTML = ("E: " + ePoints)
      }
    }
  } else if (numRemain === 2) {
    var cpuScoreHeading = document.getElementById("tPoints");
    if (numRemain === winner) {
      if (tB === 1) {
        tPoints = tPoints + 11
        cpuScoreHeading.innerHTML = ("T: " + tPoints)
      } else if (tB === 0) {
        tPoints = tPoints - 1
        cpuScoreHeading.innerHTML = ("T: " + tPoints)
      }
    } else {
      if (tB === 1) {
        tPoints = tPoints - 1
        cpuScoreHeading.innerHTML = ("T: " + tPoints)
      } else if (tB === 0) {
        tPoints = tPoints + 10
        cpuScoreHeading.innerHTML = ("T: " + tPoints)
      }
    }
  } else if (numRemain === 3) {
    var cpuScoreHeading = document.getElementById("bPoints");
    if (numRemain === winner) {
      if (bB === 1) {
        cpuPoints = cpuPoints + 11
        cpuScoreHeading.innerHTML = ("B: " + cpuPoints)
      } else if (bB === 0) {
        cpuPoints = cpuPoints - 1
        cpuScoreHeading.innerHTML = ("B: " + cpuPoints)
      }
    } else {
      if (bB === 1) {
        cpuPoints = cpuPoints - 1
        cpuScoreHeading.innerHTML = ("B: " + cpuPoints)
      } else if (bB === 0) {
        cpuPoints = cpuPoints + 10
        cpuScoreHeading.innerHTML = ("B: " + cpuPoints)
      }
    }
  } else if (numRemain === 4) {
    var cpuScoreHeading = document.getElementById("gPoints");
    if (numRemain === winner) {
      if (gB === 1) {
        gPoints = gPoints + 11
        cpuScoreHeading.innerHTML = ("G: " + gPoints)
      } else if (gB === 0) {
        gPoints = gPoints - 1
        cpuScoreHeading.innerHTML = ("G: " + gPoints)
      }
    } else {
      if (gB === 1) {
        gPoints = gPoints - 1
        cpuScoreHeading.innerHTML = ("G: " + gPoints)
      } else if (gB === 0) {
        gPoints = gPoints + 10
        cpuScoreHeading.innerHTML = ("G: " + gPoints)
      }
    }
  } else if (numRemain === 5) {
    var cpuScoreHeading = document.getElementById("dPoints");
    if (numRemain === winner) {
      if (dB === 1) {
        dPoints = dPoints + 11
        cpuScoreHeading.innerHTML = ("D: " + dPoints)
      } else if (dB === 0) {
        dPoints = dPoints - 1
        cpuScoreHeading.innerHTML = ("D: " + dPoints)
      }
    } else {
      if (dB === 1) {
        dPoints = dPoints - 1
        cpuScoreHeading.innerHTML = ("D: " + dPoints)
      } else if (dB === 0) {
        dPoints = dPoints + 10
        cpuScoreHeading.innerHTML = ("D: " + dPoints)
      }
    
    }
    console.log("dPoints " + dPoints)
  }


}



function zed (num, bid) {


  newNum = num - 2

  if (newNum === 1) {
    eB = bid
  } else if (newNum === 2) {
    tB = bid
  } else if (newNum === 3) {
    bB = bid
  } else if (newNum === 4) {
    gB = bid
  } else if (newNum === 5) {
    dB = bid
  }
  console.log(eB,tB,bB,gB,dB)
}

function fin(pointVar) {
  if (pointVar === ePoints){
    ePoints
  }
}