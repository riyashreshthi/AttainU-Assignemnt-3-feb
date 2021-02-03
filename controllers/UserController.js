const apiResponse = require("../helpers/apiResponse");
const models = require('../models');
const jwt = require('../helpers/jwt');
const statusMsg = require('../helpers/apiResponseMessages');
const User = models.user;

exports.login =
	async (req, res, err) => {
        const token = req.body.token;//social token of app
        const email = req.body.email; 
        if (!token) {
			return apiResponse.validationError(res, statusMsg.BAD_REQUEST);
		} else {
		try {
            const user = await User.findOne({
                raw: true,
                where: { email: email }
            })
                
            if(user) {
                // User already exist
            // const decoded = jwt.verify(token);
            // const userId = decoded['data'];
                const newToken = jwt.sign(user['id'])
                const data = {
                    token: newToken
                }
                return apiResponse.successResponseWithData(res, statusMsg.CREATED, data);
            } else {
                const name = req.body.name;
                const address = req.body.address;
                const newUser = await User.create({
                    name: name,
                    address: address,
                    email: email
                })
                let newToken = jwt.sign(newUser['id']);
                const data = { 
                    token: newToken
                }
                return apiResponse.successResponseWithData(res, statusMsg.CREATED, data);
            }
        } catch(err) {
            if (err.name == "JsonWebTokenError" || err.name == "TokenExpiredError") {
                return apiResponse.unauthorizedResponse(res, statusMsg.UNAUTHORIZED);
            } else {
                console.log(err)
                return apiResponse.validationError(res, statusMsg.BAD_REQUEST);
            }
        }
    }
}
