const express = require('express')
const multer = require('multer')
const router = express.Router();
const UserModel = require('./../models/UserModel');
const CustomerModel = require('../models/CustomerModel');

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

router.route('/newcustomer').post((req, res) => {
    const CustomerName = req.body.name;
    const CustomerEmail = req.body.email;
    const CustomerPhone = req.body.phone;
    const CustomerPassword = req.body.password;
    const CustomerImage = req.body.userImage
    const newCustomerData = new CustomerModel({
        CustomerName, CustomerEmail, CustomerPhone, CustomerPassword, CustomerImage
    });

    newCustomerData.save();
})

// check in customer
router.route('/usercheck1').get((req, res) => {
    CustomerModel.find({ CustomerEmail: req.query.email }).then((err, result) => {
        console.log("result", req.query.email)
        if (err) {
            res.send(err)
        }

        res.send(result)

    })
    // res.send({message : "user not found"})
});


module.exports = router;