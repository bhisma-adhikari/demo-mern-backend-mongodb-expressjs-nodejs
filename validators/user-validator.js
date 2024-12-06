const validateUserForPost = (user) => {
  let errors = [];
  if (user == null) {
    errors.push('ERROR: user cannot be null');
  } else {
    let firstName = user.firstName;
    if (firstName == null || !firstName.trim()) {
      errors.push('ERROR: invalid firstName');
    }

    let lastName = user.lastName;
    if (lastName == null || !lastName.trim()) {
      errors.push('ERROR: invalid lastName');
    }

    let loginCredential = user.loginCredential;
    if (loginCredential == null) {
      errors.push('ERROR: invalid loginCredential; cannot be null');
    } else {
      let username = loginCredential.username;
      if (username == null || !username.trim()) {
        errors.push('ERROR: invalid username');
      }
      let password = loginCredential.password;
      if (password == null || !password.trim()) {
        errors.push('ERROR: invalid password');
      }
    }
  }
  return errors;
};

module.exports = { validateUserForPost };