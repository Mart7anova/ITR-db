import * as Sequelize from 'sequelize';
import { Model } from 'sequelize';
import type { q_itr, q_itrId } from './q_itr';
import type { q_user, q_userId } from './q_user';
export interface q_itr_userAttributes {
    user_id: number;
    itr_id: number;
}
export type q_itr_userPk = "user_id" | "itr_id";
export type q_itr_userId = q_itr_user[q_itr_userPk];
export type q_itr_userCreationAttributes = q_itr_userAttributes;
export declare class q_itr_user extends Model<q_itr_userAttributes, q_itr_userCreationAttributes> implements q_itr_userAttributes {
    user_id: number;
    itr_id: number;
    itr: q_itr;
    getItr: Sequelize.BelongsToGetAssociationMixin<q_itr>;
    setItr: Sequelize.BelongsToSetAssociationMixin<q_itr, q_itrId>;
    createItr: Sequelize.BelongsToCreateAssociationMixin<q_itr>;
    user: q_user;
    getUser: Sequelize.BelongsToGetAssociationMixin<q_user>;
    setUser: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
    createUser: Sequelize.BelongsToCreateAssociationMixin<q_user>;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_itr_user;
}
