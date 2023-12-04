import type { Sequelize } from "sequelize";
import { q_article as _q_article } from "./q_article";
import type { q_articleAttributes, q_articleCreationAttributes } from "./q_article";
import { q_direction as _q_direction } from "./q_direction";
import type { q_directionAttributes, q_directionCreationAttributes } from "./q_direction";
import { q_itr as _q_itr } from "./q_itr";
import type { q_itrAttributes, q_itrCreationAttributes } from "./q_itr";
import { q_itr_user as _q_itr_user } from "./q_itr_user";
import type { q_itr_userAttributes, q_itr_userCreationAttributes } from "./q_itr_user";
import { q_mentor_info as _q_mentor_info } from "./q_mentor_info";
import type { q_mentor_infoAttributes, q_mentor_infoCreationAttributes } from "./q_mentor_info";
import { q_sub_direction as _q_sub_direction } from "./q_sub_direction";
import type { q_sub_directionAttributes, q_sub_directionCreationAttributes } from "./q_sub_direction";
import { q_sub_direction_user as _q_sub_direction_user } from "./q_sub_direction_user";
import type { q_sub_direction_userAttributes, q_sub_direction_userCreationAttributes } from "./q_sub_direction_user";
import { q_user as _q_user } from "./q_user";
import type { q_userAttributes, q_userCreationAttributes } from "./q_user";

export {
  _q_article as q_article,
  _q_direction as q_direction,
  _q_itr as q_itr,
  _q_itr_user as q_itr_user,
  _q_mentor_info as q_mentor_info,
  _q_sub_direction as q_sub_direction,
  _q_sub_direction_user as q_sub_direction_user,
  _q_user as q_user,
};

export type {
  q_articleAttributes,
  q_articleCreationAttributes,
  q_directionAttributes,
  q_directionCreationAttributes,
  q_itrAttributes,
  q_itrCreationAttributes,
  q_itr_userAttributes,
  q_itr_userCreationAttributes,
  q_mentor_infoAttributes,
  q_mentor_infoCreationAttributes,
  q_sub_directionAttributes,
  q_sub_directionCreationAttributes,
  q_sub_direction_userAttributes,
  q_sub_direction_userCreationAttributes,
  q_userAttributes,
  q_userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const q_article = _q_article.initModel(sequelize);
  const q_direction = _q_direction.initModel(sequelize);
  const q_itr = _q_itr.initModel(sequelize);
  const q_itr_user = _q_itr_user.initModel(sequelize);
  const q_mentor_info = _q_mentor_info.initModel(sequelize);
  const q_sub_direction = _q_sub_direction.initModel(sequelize);
  const q_sub_direction_user = _q_sub_direction_user.initModel(sequelize);
  const q_user = _q_user.initModel(sequelize);

  q_itr.belongsToMany(q_user, { as: 'user_id_q_users', through: q_itr_user, foreignKey: "itr_id", otherKey: "user_id" });
  q_sub_direction.belongsToMany(q_user, { as: 'user_id_q_user_q_sub_direction_users', through: q_sub_direction_user, foreignKey: "sub_direction_id", otherKey: "user_id" });
  q_user.belongsToMany(q_itr, { as: 'itr_id_q_itrs', through: q_itr_user, foreignKey: "user_id", otherKey: "itr_id" });
  q_user.belongsToMany(q_sub_direction, { as: 'sub_direction_id_q_sub_directions', through: q_sub_direction_user, foreignKey: "user_id", otherKey: "sub_direction_id" });
  q_sub_direction.belongsTo(q_direction, { as: "direction", foreignKey: "direction_id"});
  q_direction.hasMany(q_sub_direction, { as: "q_sub_directions", foreignKey: "direction_id"});
  q_itr_user.belongsTo(q_itr, { as: "itr", foreignKey: "itr_id"});
  q_itr.hasMany(q_itr_user, { as: "q_itr_users", foreignKey: "itr_id"});
  q_sub_direction_user.belongsTo(q_sub_direction, { as: "sub_direction", foreignKey: "sub_direction_id"});
  q_sub_direction.hasMany(q_sub_direction_user, { as: "q_sub_direction_users", foreignKey: "sub_direction_id"});
  q_article.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_article, { as: "q_articles", foreignKey: "user_id"});
  q_itr.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_itr, { as: "q_itrs", foreignKey: "user_id"});
  q_itr_user.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_itr_user, { as: "q_itr_users", foreignKey: "user_id"});
  q_mentor_info.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_mentor_info, { as: "q_mentor_infos", foreignKey: "user_id"});
  q_sub_direction_user.belongsTo(q_user, { as: "user", foreignKey: "user_id"});
  q_user.hasMany(q_sub_direction_user, { as: "q_sub_direction_users", foreignKey: "user_id"});

  return {
    q_article: q_article,
    q_direction: q_direction,
    q_itr: q_itr,
    q_itr_user: q_itr_user,
    q_mentor_info: q_mentor_info,
    q_sub_direction: q_sub_direction,
    q_sub_direction_user: q_sub_direction_user,
    q_user: q_user,
  };
}
