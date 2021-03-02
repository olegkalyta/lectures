const inputEmail = document.getElementById('emailInput')
const inputPass = document.getElementById('passwordInput')

const buttonClick = () => {
  alert.alert(inputEmail.value, inputPass.value)
}

module.exports.buttonClick = buttonClick
