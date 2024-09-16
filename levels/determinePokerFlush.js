function determinePokerFlush(hand) {
  if (hand.length !== 5) {
    console.log("Please give 5 cards!");
  }

  const index = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  const suitHand = hand[0].slice(1, 2);

  let valuesHand = [];

  for (let i = 0; i < hand.length; i++) {
    let val = hand[i].slice(0, 1);
    let suit = hand[i].slice(1, 2);

    if (suit !== suitHand) {
      console.log("Different suits!");
      return;
    }

    if (valuesHand.length === 0) {
      valuesHand.push(val);
      continue;
    }

    let indexPreviousVal = index.indexOf(valuesHand[i - 1]);
    let indexVal = index.indexOf(val);
    let modulo = (indexPreviousVal % 10) - 1;

    if (indexVal < indexPreviousVal && indexVal < modulo) {
      console.log("Not a flush!");
      return;
    }

    valuesHand.push(val);
  }

  console.log("Flush!");
}

test1 = ["AS", "3S", "4S", "5S", "6S"];
test2 = ["AS", "3S", "9S", "KS", "4S"];

determinePokerFlush(test1);
