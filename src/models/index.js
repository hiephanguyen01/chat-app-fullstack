const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.User = require("./user.model.js")(mongoose);
db.Notification = require("./notification.model.js")(mongoose);
db.Message = require("./message.model.js")(mongoose);
db.Contact = require("./contact.model.js")(mongoose);

module.exports = db;
