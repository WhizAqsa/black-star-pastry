const express = require("express");

const { createCake, getCakes } = require("../controllers/cakeController");
const {
  createPastry,
  getPastries,
} = require("../controllers/pastryController");
const { createDrink, getDrinks } = require("../controllers/drinkController");
const { createAddOn, getAddOns } = require("../controllers/addOnController");
const {
  createSweetPastry,
  getSweetPastries,
} = require("../controllers/sweetpastryController");
const {
  createSavouryPastry,
  getSavouryPastries,
} = require("../controllers/savouryPastryController");
const {
  createTieredCake,
  getTieredCakes,
} = require("../controllers/tieredCakeController");
const {
  getShopCakes,
  createShopCake,
} = require("../controllers/shopCakeController");
// const {
//   sendLoginDetails,
//   getLoginDetails,
// } = require("../controllers/loginDetailsController");
// const {
//   sendSignUpDetails,
//   getSignUpDetails,
// } = require("../controllers/SignUpController");
const router = express.Router();

//creates a cake
router.post("/cake", createCake);
//get cakes
router.get("/cake", getCakes);

//creates cakes to be shopped
router.post("/shopcake", createShopCake);
//get cakes to be shopped
router.get("/shopcake", getShopCakes);

//creates pastry
router.post("/pastry", createPastry);
//get pastries
router.get("/pastry", getPastries);

//creates tieredcake
router.post("/tieredcake", createTieredCake);
//get all tiered cakes
router.get("/tieredcake", getTieredCakes);

//created drink
router.post("/drink", createDrink);
//get all drinks
router.get("/drink", getDrinks);

//creates sweet pastry
router.post("/sweetpastry", createSweetPastry);
//get all sweet pastries
router.get("/sweetpastry", getSweetPastries);

//creates savoury pastry
router.post("/savourypastry", createSavouryPastry);
//get savoury pastries
router.get("/savourypastry", getSavouryPastries);

//creates an addon
router.post("/addon", createAddOn);
//get all addons
router.get("/addon", getAddOns);

//for login
//router.post("/login", sendLoginDetails);
//for sending and receiving user  details
//router.post("/signup", sendSignUpDetails);
//router.get("/signup", getSignUpDetails);
module.exports = router;
