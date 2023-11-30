import type { Sequelize } from "sequelize";
import { q_article as _q_article } from "./q_article";
import type { q_articleAttributes, q_articleCreationAttributes } from "./q_article";
import { q_user as _q_user } from "./q_user";
import type { q_userAttributes, q_userCreationAttributes } from "./q_user";
import { q_user_itr as _q_user_itr } from "./q_user_itr";
import type { q_user_itrAttributes, q_user_itrCreationAttributes } from "./q_user_itr";
export { _q_article as q_article, _q_user as q_user, _q_user_itr as q_user_itr, };
export type { q_articleAttributes, q_articleCreationAttributes, q_userAttributes, q_userCreationAttributes, q_user_itrAttributes, q_user_itrCreationAttributes, };
export declare function initModels(sequelize: Sequelize): {
    q_article: typeof _q_article;
    q_user: typeof _q_user;
    q_user_itr: typeof _q_user_itr;
};
