const UserModel = require('../models/User.model');
const { getToken} = require('../helpers/function.helper')
exports.addUser = async (request, response) => {
    try {
        
        const requestBody = request.body;
        /* Validation */
        if (typeof requestBody != "object") {
            return response.status(400).json({
                status: false,
                message: `required type object but instead got ${typeof requestBody}`
            })
        }

        if (!requestBody.username) {
            return response.status(400).json({
                status: false,
                message: `username is required`
            })
        }
        if (!requestBody.password) {
            return response.status(400).json({
                status: false,
                message: `password is required`
            })
        }
        if (!requestBody.email) {
            return response.status(400).json({
                status: false,
                message: `email is required`
            })
        }
        /* Save Response */
        const newUser = new UserModel({
            ...requestBody
        });
        const result = await newUser.save();

        const token = getToken(result);

        return response.status(200).json({
            status: true,
            message: "user created successfully",
            data: token
        });
        
    } catch (error) {
        return response.status(400).json({
            status : false,
            message : error.message
        })
    }
}

exports.udpateUser = async (request, response) => {
    try {
        
    } catch (error) {
        response.status(400).json({
            status : false,
            message : error.message
        })
    }
}
exports.getUser = async (request, response) => {
    try {
        
    } catch (error) {
        response.status(400).json({
            status : false,
            message : error.message
        })
    }
}
exports.deleteUser = async (request, response) => {
    try {

    } catch (error) {
        response.status(400).json({
            status: false,
            message: error.message
        })
    }
}