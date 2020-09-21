function main() {
  let teamOneScore = 0
  let teamTwoScore = 0

  const teamOneNameElement = document.querySelector('.team1 h2')
  const teamTwoNameElement = document.querySelector('.team2 h2')

  function handleChangeTeamOneName(event) {
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value
    teamOneNameElement.textContent = inputFieldValue
  }

  function handleChangeTeamTwoName(event) {
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value
    teamTwoNameElement.textContent = inputFieldValue
  }

  const teamOneInput = document.querySelector('.team1 input')
  const teamTwoInput = document.querySelector('.team2 input')

  teamOneInput.addEventListener('input', handleChangeTeamOneName)
  teamTwoInput.addEventListener('input', handleChangeTeamTwoName)

  function resetTheScore() {
    teamOneScore = 0
    teamTwoScore = 0
    const teamOneScoreElement = document.querySelector('.team1 h3')
    const teamTwoScoreElement = document.querySelector('.team2 h3')
    teamOneScoreElement.textContent = teamOneScore
    console.log(teamOneScoreElement)
    teamTwoScoreElement.textContent = teamTwoScore
    console.log(teamTwoScoreElement)
  }

  function incrementTheScoreForTeamOne() {
    teamOneScore = teamOneScore + 1
    console.log(teamOneScore)
    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)
    teamOneScoreElement.textContent = teamOneScore

    if (teamOneScore > 20) {
      window.alert('Team One Wins!!')
      teamOneScoreElement.textContent = 0
    }
  }

  function decreaseTheScoreForTeamOne() {
    teamOneScore = teamOneScore - 1
    console.log(teamOneScore)
    const teamOneScoreElement = document.querySelector('.team1 h3')

    teamOneScoreElement.textContent = teamOneScore
    if (teamOneScore === -1) {
      window.alert('ERROR')
      teamOneScoreElement.textContent = 0
    }
  }

  function incrementTheScoreForTeamTwo() {
    teamTwoScore = teamTwoScore + 1
    console.log(teamTwoScore)
    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)
    teamTwoScoreElement.textContent = teamTwoScore

    if (teamTwoScore > 20) {
      window.alert('Team Two Wins!!')
      teamTwoScoreElement.textContent = 0
    }
  }

  function decreaseTheScoreForTeamTwo() {
    teamTwoScore = teamTwoScore - 1
    console.log(teamTwoScore)
    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)
    teamTwoScoreElement.textContent = teamTwoScore

    if (teamTwoScore === -1) {
      window.alert('ERROR')
      teamTwoScoreElement.textContent = 0
    }
  }

  const resetButton = document.querySelector('.reset')
  resetButton.addEventListener('click', resetTheScore)

  const teamOneAddButton = document.querySelector('.team1 .add')
  teamOneAddButton.addEventListener('click', incrementTheScoreForTeamOne)

  const teamOneSubtractButton = document.querySelector('.team1 .subtract')
  teamOneSubtractButton.addEventListener('click', decreaseTheScoreForTeamOne)

  const teamTwoAddButton = document.querySelector('.team2 .add')
  teamTwoAddButton.addEventListener('click', incrementTheScoreForTeamTwo)

  const teamTwoSubtractButton = document.querySelector('.team2 .subtract')
  teamTwoSubtractButton.addEventListener('click', decreaseTheScoreForTeamTwo)
}

document.addEventListener('DOMContentLoaded', main)
