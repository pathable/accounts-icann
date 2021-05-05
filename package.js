Package.describe({
  summary: "Service for ICANN accounts",
  version: "1.0.5",
  name: "pathable:accounts-icann",
  git: "https://github.com/pathable/accounts-icann",
});

Package.onUse((api) => {
  api.versionsFrom("1.10.3-beta.9");

  api.use("ecmascript");
  api.use("accounts-base", ["client", "server"]);
  api.imply("accounts-base", ["client", "server"]);
  api.use("accounts-oauth", ["client", "server"]);
  api.use("pathable:icann-oauth@1.0.3");
  api.imply("pathable:icann-oauth");

  api.addFiles("icann.js");
});
