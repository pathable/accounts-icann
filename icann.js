Accounts.oauth.registerService("icann");

if (Meteor.isClient) {
  const loginWithIcann = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    Icann.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction("icann", loginWithIcann);
  Meteor.loginWithIcann = (...args) => Accounts.applyLoginFunction("icann", args);
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ["services.icann"],
    forOtherUsers: ["services.icann.id"],
  });
}
