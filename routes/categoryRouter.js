const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");
router
  .route("/category")
  .get(categoryCtrl.getCagories)
  .post(auth, authAdmin, categoryCtrl.createCategory);

router
  .route("/category/:id")
  .put(auth, authAdmin, categoryCtrl.updateCategory)
  .delete(auth, authAdmin, categoryCtrl.deleteCategory);

module.exports = router;
