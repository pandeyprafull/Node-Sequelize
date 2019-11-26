const moment = require('moment');

const dt = new Date();
dt.setMinutes( dt.getMinutes() + 30 );
console.log(dt)