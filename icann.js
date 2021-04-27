Accounts.oauth.registerService("icann");

if (Meteor.isClient) {
  const loginWithOidc = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    Oidc.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction("icann", loginWithOidc);
  Meteor.loginWithOidc = (...args) => Accounts.applyLoginFunction("icann", args);
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ["services.icann"],
    forOtherUsers: ["services.icann.id"],
  });
}
