import * as Sequelize from 'sequelize';
import { Model } from 'sequelize';
import type { q_sub_direction, q_sub_directionId } from './q_sub_direction';
import type { q_user, q_userId } from './q_user';
export interface q_sub_direction_userAttributes {
    user_id: number;
    sub_direction_id: number;
}
export type q_sub_direction_userPk = "user_id" | "sub_direction_id";
export type q_sub_direction_userId = q_sub_direction_user[q_sub_direction_userPk];
export type q_sub_direction_userCreationAttributes = q_sub_direction_userAttributes;
export declare class q_sub_direction_user extends Model<q_sub_direction_userAttributes, q_sub_direction_userCreationAttributes> implements q_sub_direction_userAttributes {
    user_id: number;
    sub_direction_id: number;
    sub_direction: q_sub_direction;
    getSub_direction: Sequelize.BelongsToGetAssociationMixin<q_sub_direction>;
    setSub_direction: Sequelize.BelongsToSetAssociationMixin<q_sub_direction, q_sub_directionId>;
    createSub_direction: Sequelize.BelongsToCreateAssociationMixin<q_sub_direction>;
    user: q_user;
    getUser: Sequelize.BelongsToGetAssociationMixin<q_user>;
    setUser: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
    createUser: Sequelize.BelongsToCreateAssociationMixin<q_user>;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_sub_direction_user;
}
