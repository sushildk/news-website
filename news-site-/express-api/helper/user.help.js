const bcrypt = require('bcrypt');
const config = require('./../config/index');

module.exports = (req, user) => {
    if (req.name)
        user.name = req.name;
    if (req.username)
        user.username = req.username;
    // console.log("passdasf0", req.oldPassword + ' vcc ' + req.password)
    // if (req.oldPassword) {
    //     var isMatched = bcrypt.compareSync(req.oldPassword, user.password);
    //     console.log('old password', req.oldPassword + isMatched);
    // } else {
    //     var isMatched = true;
    // }
    // if (req.password && isMatched) {
    if (req.password)

        user.password = bcrypt.hashSync(req.password, config.saltRounds);
    // } else {
    //     return true
    // }
    if (req.email)
        user.email = req.email;
    if (req.phoneNumber)
        user.phoneNumber = req.phoneNumber;
    if (req.dob)
        user.dob = req.dob;
    if (req.gender)
        user.gender = req.gender;
    if (req.role)
        user.role = req.role;
    if (req.roomAddress)
        user.roomAddress = req.roomAddress;
    return user;
}