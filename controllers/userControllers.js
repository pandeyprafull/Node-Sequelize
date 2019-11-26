const User = require('../models/bb_users_Schema');
const Mobile = require('../models/bb_mobile_otp_Schema');
const { usernameStr, passwordStr } = require('../utils/randomStr');
const otp = require('../utils/randomNum');
console.log(otp())
const Mysql_dt = require('../utils/mySql_dateTime');

exports.getUser = async(req, res, next) => {
    const id =  req.params.id;
    console.log(id);
    const user =  await User.findAll({limit: 1, where: {user_id: id}}).catch(err => console.log(err));
    console.log(user)
    return res.status(200).json({ message: 'User found Success', user});

},

exports.getMobile = async(req, res, next) =>{
    // const id = req.params.id
    // console.log(id)
    const mobile_users = await Mobile.findAll({ limit: 5}).catch(err => console.log(err));
    console.log(mobile_users);

  return res.status(200).json({ message: "mobile Users Found", mobile_users})


}

exports.postLogin_Number = async(req, res, next) =>{
    const { mobile } = req.body;
    console.log(mobile);

    const user_mobile = await Mobile.findAll({ where: { mobile: mobile}}).catch(err => console.log(err));
    console.log("Exist User....",user_mobile.map(i => i.dataValues));

    if(user_mobile.length > 0){
    const updated_Otp = await Mobile.update({
        otp: otp()
    }, {where: { user_id: user_mobile.map(i => i.dataValues.user_id)}}).catch(err => console.log(err));
    console.log("Updated Doc.......",updated_Otp);
    const otp_doc = await Mobile.findByPk(user_mobile[0].dataValues.row_id);
    return res.status(201).json({ message: 'User Exist Otp updated success', otp_doc});

    } else {
        const user = await User.create({
            username: usernameStr,
            password: passwordStr,
            last_contest_date:Mysql_dt,
            customer_id: usernameStr,
            registered_date: Mysql_dt,
            referral_code: usernameStr,
            modified_date: Mysql_dt,
            api_secret_key: usernameStr
           }).catch(err => console.log(err));
           console.log("USer Inserted doc",user.dataValues.user_id);
        const user_mobile_saved = await Mobile.create({
            user_id: user.user_id,
            mobile: mobile,
            otp: otp(),
            expiry: Mysql_dt,
            modified_date: Mysql_dt,
            date_added: Mysql_dt
        }).catch(err => console.log(err))
        console.log(user_mobile_saved)
        return res.status(201).json({ message: "User registered Success", user_mobile_saved});
    }


}