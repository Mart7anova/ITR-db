"use strict";
exports.__esModule = true;
exports.initModels = exports.q_user_itr = exports.q_user = exports.q_article = void 0;
var q_article_1 = require("./q_article");
exports.q_article = q_article_1.q_article;
var q_user_1 = require("./q_user");
exports.q_user = q_user_1.q_user;
var q_user_itr_1 = require("./q_user_itr");
exports.q_user_itr = q_user_itr_1.q_user_itr;
function initModels(sequelize) {
    var q_article = q_article_1.q_article.initModel(sequelize);
    var q_user = q_user_1.q_user.initModel(sequelize);
    var q_user_itr = q_user_itr_1.q_user_itr.initModel(sequelize);
    q_article.belongsTo(q_user, { as: "user", foreignKey: "user_id" });
    q_user.hasMany(q_article, { as: "q_articles", foreignKey: "user_id" });
    q_user_itr.belongsTo(q_user, { as: "user", foreignKey: "user_id" });
    q_user.hasMany(q_user_itr, { as: "q_user_itrs", foreignKey: "user_id" });
    return {
        q_article: q_article,
        q_user: q_user,
        q_user_itr: q_user_itr
    };
}
exports.initModels = initModels;
