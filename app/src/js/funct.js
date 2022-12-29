// variable declaration
let userName = 'aizi'
let userLevel = 511
const maxLevel = 500
let userTitle
let colorVal

function levelChange (type, amt) {
  if (type == 'add') {
    userLevel = userLevel + amt
  } else if (type == 'subtract') {
    userLevel = userLevel - amt
  } else {
    console.log(`You can't do that.`)
  }

  if (userLevel >= maxLevel) {
    userLevel = maxLevel
    console.log('Max level reached.')
  }

  userChecking()
}
