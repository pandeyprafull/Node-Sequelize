const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../utils/dbConfig');

class Mobile_Otp extends Model {}

Mobile_Otp.init({
  row_id: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
  },
  user_id: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      unique: true,

  },
  mobile: {
      type: Sequelize.STRING(20),
      allowNull: false
  },
  otp: {
      type: Sequelize.STRING(10),
      allowNull: false
  },
  expiry: {
      type: Sequelize.DATE,
      allowNull: false
  },
  status: {
      type: Sequelize.TINYINT(1),
      allowNull: false,
      defaultValue: '1'
  },
  invalid_attempt: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
  },
  date_added: {
      type: Sequelize.DATE,
      allowNull: false
  },
  modified_date: {
      type: Sequelize.TIME,
      allowNull: false
  }

}, {sequelize, modelName: 'bb_mobile_otp',  timestamps: false, underscored: true, freezeTableName: true});

module.exports = Mobile_Otp;