// 1) create a function that simulates a tournament for 11 players
// 2) represent the tournament in terms of rounds, where two elements are paired and one wins to move forward
// 3) randomize the winners so the results are non deterministic
// 4) output the results as rounds progress


function tournament(players) {
	const pass = []
  if(players.length % 2 === 1) {
  	pass.push(players.pop())
  }
  
  const brackets = players.reduce((acc, player, index, arr) => {
  	if(index % 2 === 0) {
    	const tempArr = []
    		tempArr.push(arr[index])
        tempArr.pus(arr[index-1])
        acc.push(tempArr)
    }
  	return acc
  }, [])
  
  if(pass.length > 0) {
  	brackets.push(pass)
  }
}

function winner(player1, player2) {
  if (Math.round(Math.random() * 10 > 5) {
  	return player1
  }
  return player2
}

[0,1,2,3,4,5,6,7,8,9,10,11] -> [[0,1]...[9.10][11]]