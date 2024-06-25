const {Router} = require('express');
const { singupVerification, singup } = require('../Controllers/Signup');
const { SendOtp } = require('../Controllers/SendOtp');
const { loginVerification } = require('../Controllers/Login');
const {forgotPassword } = require('../Controllers/Forget_Password/ForgotPassword');
const { VerifyOtp } = require('../Controllers/VerifyOtp');
const { ResetPassword } = require('../Controllers/Forget_Password/ResetPassword');
const route = Router();

route.post('/signupVerification',singupVerification);
route.post('/signup',singup);
route.post('/sendOtp',SendOtp);
route.post('/login',loginVerification);
route.post('/forgotPassword',forgotPassword);
route.post('/VerifyOtp',VerifyOtp);
route.post('/resetPassword',ResetPassword);

module.exports = {route};