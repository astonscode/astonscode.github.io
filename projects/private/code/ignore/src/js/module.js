function titleArray(action, input, index) {
  if (action == `add`) {
    userTitleArray[userTitleArray.length] = input
  } else if (action == `removeLast`) {
    userTitleArray.pop()
  } else if (action == `removeSpec`) {
    userTitleArray.splice(index, 1)
  } else if (action == `replace`) {
    userTitleArray[index] = input
  }
}

function userChecking() {
  if (userLevel >= 30) {
    colorVal = '#5dff4e'
    userTitle = userTitleArray[1]
  }
  if (userLevel >= 50) {
    colorVal = '#3784ff'
    userTitle = userTitleArray[2]
  }
  if (userLevel >= 80) {
    colorVal = '#624aff'
    userTitle = userTitleArray[3]
  }
  if (userLevel >= 100) {
    colorVal = '#9500ff'
    userTitle = userTitleArray[4]
  }
  if (userLevel >= 150) {
    colorVal = '#ff0000'
    userTitle = userTitleArray[5]
  }
  if (userLevel >= 200) {
    colorVal = '#ffaa00'
    userTitle = userTitleArray[6]
  }
  if (userLevel >= 250) {
    colorVal = '#6bfffd'
    userTitle = userTitleArray[7]
  }
  if (userLevel >= 300) {
    colorVal = '#6bd3ff'
    userTitle = userTitleArray[8]
  }
  if (userLevel >= 350) {
    colorVal = '#e2b4ff'
    userTitle = userTitleArray[9]
  }
  if (userLevel >= 400) {
    colorVal = '#ffb4b4'
    userTitle = userTitleArray[10]
  }
  if (userLevel >= 450) {
    colorVal = '#fad0ff'
    userTitle = userTitleArray[11]
  }
  if (userLevel >= maxLevel) {
    colorVal = '#8fb4ff'
    userTitle = userTitleArray[12]
  }

  document.querySelector('.userLevel').innerHTML = `[${userLevel}] `
  document.querySelector('.userNameVal').innerHTML = `${userName}`
  document.querySelector('.userRank').innerHTML = userTitle
  document.querySelector('.userLevel').style.color = colorVal
}

window.userTitleArray = userTitleArray
