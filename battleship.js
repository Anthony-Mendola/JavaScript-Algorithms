//    1) build a battle simulator
//    2) function must select one army as the winner
//    3) add randomness to the function so the result is non deterministic

const battleship = (army1, army2) =>  {
  let firstArmy = Math.floor(Math.random() * army1);
  let secondArmy = Math.floor(Math.random() * army2);
  if (firstArmy > secondArmy) {
  console.log(`army1 is the winner with a score of ${firstArmy}! army2 is the loser with a score of ${secondArmy} :(`)
  } else if (firstArmy === secondArmy) {
    battleship(army1, army2)
  }
  else {
  console.log(`army2 is the winner with a score of ${secondArmy}! army1 is the loser with a score of ${firstArmy} :(`)
    }
} 


battleship(10, 10)