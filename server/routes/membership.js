const router = require("express").Router();
const results = require("../validators");
const isAuthenticated = require("../middleware/auth");
const membershipController = require("../controllers/membership");

// membership routes
router.get(
  "/membership_list",
  results,
  isAuthenticated,
  membershipController.membershipList
);
router.post(
  "/add_membership/",
  results,
  isAuthenticated,
  membershipController.create
);

router.post(
  "/add_wishlist/:membershipId",
  results,
  isAuthenticated,
  membershipController.addToWishlist
);
router.post(
  "/remove_wishlist/:membershipId",
  results,
  isAuthenticated,
  membershipController.removeFromWishlist
);
router.get(
  "/info_membership/:membershipId",
  results,
  isAuthenticated,
  membershipController.membershipInfo
);
router.post(
  "/update_by_Id/:membershipId",
  results,
  isAuthenticated,
  membershipController.membershipUpdate
);

module.exports = router;
