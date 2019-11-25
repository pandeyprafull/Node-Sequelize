const User = require('../models/UserSchema');

 exports.getUser = async(req, res, next) => {
    const id =  req.params.id;
    console.log(id);
    const user =  await User.findAll({limit: 1, where: {user_id: id}}).catch(err => console.log(err));
    console.log(user)
    return res.status(200).json({ message: 'User found Success', user});

}