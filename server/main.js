import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  signUpOrLogin(options) {
    console.log(Accounts.findUserByEmail(options.email));

    if (!Accounts.findUserByEmail(options.email)) {
      Accounts.createUser({email: options.email, password: options.password});
      if (Accounts.findUserByEmail(options.email)) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}

//method to save fund to user account
//method to retrieve user's funds for account page
//
);