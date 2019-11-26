const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../utils/dbConfig');

class User extends Model {};

User.init({
    user_id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    account_type: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
        defaultValue: '1'
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: null
    },
    username_edited: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'

    },
    referral_code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: null

    },
    facebook_id: {
        type: Sequelize.STRING,
        defaultValue: null,

    },
    google_id: {
     type: Sequelize.STRING,
     defaultValue: null
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        defaultValue: null
    } ,
    gender: {
        type: Sequelize.CHAR(1),
        defaultValue: null
    },
    dob: {
        type: Sequelize.DATEONLY,
        defaultValue: null
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    phone: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: null
    },
    address: {
        type: Sequelize.TEXT,
        defaultValue: null
    },
    city: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    state: {
        type: Sequelize.STRING,
        defaultValue: null,

    },
    country_code: {
        type: Sequelize.CHAR(2),
        defaultValue: null
    },
    zipcode: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    unused_amount: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00'

    },
    credits: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00',
    },
    bonus_cash: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00'
    },
    signup_bonus: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
        defaultValue: '0'
    },
    total_cash_added: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00'
    },
    total_contest_joined: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        defaultValue: '0'
    },
    total_contest_won: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        defaultValue: '0'
    },
    total_cash_won: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00',

    },
    last_contest_date: {
        type: Sequelize.DATE,
        allowNull: false

    },
    phone_verified: {
    type: Sequelize.TINYINT(1),
    allowNull: false,
    defaultValue: '0'
    },

    email_verified: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'
    },
    pan_verified: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'
    },
    bank_verified: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'
    },
    aadhaar_verified: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'
    },
    affiliated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    is_affiliate:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    affiliate_commission: {
        type: Sequelize.TINYINT(3),
        allowNull: false,
        defaultValue: '0'
    },
    affiliate_commission:{
        type: Sequelize.TINYINT(3),
        allowNull: false,
        defaultValue: '0'
    },
    affiliate_refer_bonus: {
        type : Sequelize.TINYINT(11),
        allowNull: false,
        defaultValue: '0'
    },
    total_affiliates: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    current_affiliate_amount: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00'
    },
    total_affiliate_amount: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: '0.00'
    },
    total_referred: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
    },
    notifications: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    classic_startup: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    batting_startup: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    bowling_startup: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    verified_user: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'
    },
    flag: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: '0'
    },
    total_comments: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
    },
    web_token: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    status: {
        type: Sequelize.ENUM('0','1'),
        allowNull: false,
        defaultValue: '1'
    },
    customer_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registered_date: {
        type: Sequelize.DATE,
        allowNull: false,

    },
    modified_date: {
        type: Sequelize.TIME,
        allowNull: false,

    },
    api_secret_key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    access_token: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    is_paytm_linked: {
        type: Sequelize.INTEGER(11),
        defaultValue: '0'
    }
},  {sequelize, modelName: 'bb_users',  timestamps: false, underscored: true});


// class MyModel extends Model {}
// MyModel.init({
//   userId: {
//     type: Sequelize.INTEGER,
//     field: 'user_id'
//   }
// }, { sequelize });


module.exports = User;

