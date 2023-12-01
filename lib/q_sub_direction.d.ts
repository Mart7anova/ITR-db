import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { q_direction, q_directionId } from './q_direction';
import type { q_sub_direction_user, q_sub_direction_userId } from './q_sub_direction_user';
import type { q_user, q_userId } from './q_user';
export interface q_sub_directionAttributes {
    id: number;
    id_direction: number;
    name: string;
    desc?: string;
}
export type q_sub_directionPk = "id";
export type q_sub_directionId = q_sub_direction[q_sub_directionPk];
export type q_sub_directionOptionalAttributes = "desc";
export type q_sub_directionCreationAttributes = Optional<q_sub_directionAttributes, q_sub_directionOptionalAttributes>;
export declare class q_sub_direction extends Model<q_sub_directionAttributes, q_sub_directionCreationAttributes> implements q_sub_directionAttributes {
    id: number;
    id_direction: number;
    name: string;
    desc?: string;
    id_direction_q_direction: q_direction;
    getId_direction_q_direction: Sequelize.BelongsToGetAssociationMixin<q_direction>;
    setId_direction_q_direction: Sequelize.BelongsToSetAssociationMixin<q_direction, q_directionId>;
    createId_direction_q_direction: Sequelize.BelongsToCreateAssociationMixin<q_direction>;
    q_sub_direction_users: q_sub_direction_user[];
    getQ_sub_direction_users: Sequelize.HasManyGetAssociationsMixin<q_sub_direction_user>;
    setQ_sub_direction_users: Sequelize.HasManySetAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
    addQ_sub_direction_user: Sequelize.HasManyAddAssociationMixin<q_sub_direction_user, q_sub_direction_userId>;
    addQ_sub_direction_users: Sequelize.HasManyAddAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
    createQ_sub_direction_user: Sequelize.HasManyCreateAssociationMixin<q_sub_direction_user>;
    removeQ_sub_direction_user: Sequelize.HasManyRemoveAssociationMixin<q_sub_direction_user, q_sub_direction_userId>;
    removeQ_sub_direction_users: Sequelize.HasManyRemoveAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
    hasQ_sub_direction_user: Sequelize.HasManyHasAssociationMixin<q_sub_direction_user, q_sub_direction_userId>;
    hasQ_sub_direction_users: Sequelize.HasManyHasAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
    countQ_sub_direction_users: Sequelize.HasManyCountAssociationsMixin;
    user_id_q_users: q_user[];
    getUser_id_q_users: Sequelize.BelongsToManyGetAssociationsMixin<q_user>;
    setUser_id_q_users: Sequelize.BelongsToManySetAssociationsMixin<q_user, q_userId>;
    addUser_id_q_user: Sequelize.BelongsToManyAddAssociationMixin<q_user, q_userId>;
    addUser_id_q_users: Sequelize.BelongsToManyAddAssociationsMixin<q_user, q_userId>;
    createUser_id_q_user: Sequelize.BelongsToManyCreateAssociationMixin<q_user>;
    removeUser_id_q_user: Sequelize.BelongsToManyRemoveAssociationMixin<q_user, q_userId>;
    removeUser_id_q_users: Sequelize.BelongsToManyRemoveAssociationsMixin<q_user, q_userId>;
    hasUser_id_q_user: Sequelize.BelongsToManyHasAssociationMixin<q_user, q_userId>;
    hasUser_id_q_users: Sequelize.BelongsToManyHasAssociationsMixin<q_user, q_userId>;
    countUser_id_q_users: Sequelize.BelongsToManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_sub_direction;
}
