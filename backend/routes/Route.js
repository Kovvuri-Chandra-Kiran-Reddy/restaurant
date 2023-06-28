const express = require('express')
const router = express.Router();
const UserModel = require('./../models/UserModel')

router.route('/upload').post((req, res) => {
    const RestaurantName = req.body.RestaurantName;
    const RestaurantLocation = req.body.RestaurantLocation;
    const OwnerName = req.body.OwnerName;
    const OwnerEmail = req.body.OwnerEmail;
    const OwnerPhone = req.body.OwnerPhone;
    const OwnerPassword = req.body.hashedOwnerPassword;
    const menuItems = req.body.menuItemsSep;
    const newData = new UserModel({
        RestaurantName, RestaurantLocation, OwnerName, OwnerEmail, OwnerPhone, OwnerPassword, menuItems
    });

    newData.save();
})


module.exports = router;