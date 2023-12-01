"use strict";
exports.__esModule = true;
exports.initModels = exports.q_user_itr = exports.q_user = exports.q_sub_direction_user = exports.q_sub_direction = exports.q_mentor_info = exports.q_direction = exports.q_article = void 0;
var q_article_1 = require("./q_article");
exports.q_article = q_article_1.q_article;
var q_direction_1 = require("./q_direction");
exports.q_direction = q_direction_1.q_direction;
var q_mentor_info_1 = require("./q_mentor_info");
exports.q_mentor_info = q_mentor_info_1.q_mentor_info;
var q_sub_direction_1 = require("./q_sub_direction");
exports.q_sub_direction = q_sub_direction_1.q_sub_direction;
var q_sub_direction_user_1 = require("./q_sub_direction_user");
exports.q_sub_direction_user = q_sub_direction_user_1.q_sub_direction_user;
var q_user_1 = require("./q_user");
exports.q_user = q_user_1.q_user;
var q_user_itr_1 = require("./q_user_itr");
exports.q_user_itr = q_user_itr_1.q_user_itr;
function initModels(sequelize) {
    var q_article = q_article_1.q_article.initModel(sequelize);
    var q_direction = q_direction_1.q_direction.initModel(sequelize);
    var q_mentor_info = q_mentor_info_1.q_mentor_info.initModel(sequelize);
    var q_sub_direction = q_sub_direction_1.q_sub_direction.initModel(sequelize);
    var q_sub_direction_user = q_sub_direction_user_1.q_sub_direction_user.initModel(sequelize);
    var q_user = q_user_1.q_user.initModel(sequelize);
    var q_user_itr = q_user_itr_1.q_user_itr.initModel(sequelize);
    q_sub_direction.belongsToMany(q_user, { as: 'user_id_q_users', through: q_sub_direction_user, foreignKey: "sub_direction_id", otherKey: "user_id" });
    q_user.belongsToMany(q_sub_direction, { as: 'sub_direction_id_q_sub_directions', through: q_sub_direction_user, foreignKey: "user_id", otherKey: "sub_direction_id" });
    q_sub_direction.belongsTo(q_direction, { as: "id_direction_q_direction", foreignKey: "id_direction" });
    q_direction.hasMany(q_sub_direction, { as: "q_sub_directions", foreignKey: "id_direction" });
    q_sub_direction_user.belongsTo(q_sub_direction, { as: "sub_direction", foreignKey: "sub_direction_id" });
    q_sub_direction.hasMany(q_sub_direction_user, { as: "q_sub_direction_users", foreignKey: "sub_direction_id" });
    q_article.belongsTo(q_user, { as: "user", foreignKey: "user_id" });
    q_user.hasMany(q_article, { as: "q_articles", foreignKey: "user_id" });
    q_mentor_info.belongsTo(q_user, { as: "user", foreignKey: "user_id" });
    q_user.hasMany(q_mentor_info, { as: "q_mentor_infos", foreignKey: "user_id" });
    q_sub_direction_user.belongsTo(q_user, { as: "user", foreignKey: "user_id" });
    q_user.hasMany(q_sub_direction_user, { as: "q_sub_direction_users", foreignKey: "user_id" });
    q_user_itr.belongsTo(q_user, { as: "user", foreignKey: "user_id" });
    q_user.hasMany(q_user_itr, { as: "q_user_itrs", foreignKey: "user_id" });
    return {
        q_article: q_article,
        q_direction: q_direction,
        q_mentor_info: q_mentor_info,
        q_sub_direction: q_sub_direction,
        q_sub_direction_user: q_sub_direction_user,
        q_user: q_user,
        q_user_itr: q_user_itr
    };
}
exports.initModels = initModels;
