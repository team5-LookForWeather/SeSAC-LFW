const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.OOTD = require("../OOTD1/OOTD.js")(sequelize, Sequelize);
db.OOTD_picture = require("../OOTD1/OOTD_picture.js")(sequelize, Sequelize);
db.OOTD_like = require("../OOTD1/OOTD_like.js")(sequelize, Sequelize);
db.OOTD_comment = require("../OOTD1/OOTD_comment.js")(sequelize, Sequelize);
db.Memo = require("../MEMO/MEMO.js")(sequelize, Sequelize);

db.User.hasMany(db.User_OOTD, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade"
});
db.User_OOTD.belongsTo(db.User, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade"
})

db.User.hasMany(db.User_OOTD_, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade"
});
db.OOTD.belongsTo(db.User, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade"
})


module.exports = db;