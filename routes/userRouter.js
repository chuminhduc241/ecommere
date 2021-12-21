const auth = require("../middleware/auth");
const route = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
route.post("/register", userCtrl.register);
route.get("/refresh_token", userCtrl.refreshToken);
route.post("/login", userCtrl.login);
route.get("/logout", userCtrl.logout);
route.get("/infor", auth, userCtrl.getUser);
route.patch("/addcart", auth, userCtrl.addCart);

module.exports = route;
