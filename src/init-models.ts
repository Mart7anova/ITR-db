import type { Sequelize } from "sequelize";
import { q_article as _q_article } from "./q_article";
import type { q_articleAttributes, q_articleCreationAttributes } from "./q_article";
import { q_user as _q_user } from "./q_user";
import type { q_userAttributes, q_userCreationAttributes } from "./q_user";
import { q_user_itr as _q_user_itr } from "./q_user_itr";
import type { q_user_itrAttributes, q_user_itrCreationAttributes } from "./q_user_itr";

export {
  _q_article as q_article,
  _q_user as q_user,
  _q_user_itr as q_user_itr,
};

export type {
  q_articleAttributes,
  q_articleCreationAttributes,
  q_userAttributes,
  q_userCreationAttributes,
  q_user_itrAttributes,
  q_user_itrCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const q_article = _q_article.initModel(sequelize);
  const q_user = _q_user.initModel(sequelize);
  const q_user_itr = _q_user_itr.initModel(sequelize);

  q_article.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_article, { as: "q_articles", foreignKey: "user_id"});
  q_user_itr.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_user_itr, { as: "q_user_itrs", foreignKey: "user_id"});

  return {
    q_article: q_article,
    q_user: q_user,
    q_user_itr: q_user_itr,
  };
}
