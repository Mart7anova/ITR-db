import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { q_user, q_userId } from './q_user';
export interface q_user_itrAttributes {
    id: number;
    user_id: number;
    itr_title: string;
    itr_description?: string;
    itr_aim?: string;
    itr_section: string[];
}
export type q_user_itrPk = "id";
export type q_user_itrId = q_user_itr[q_user_itrPk];
export type q_user_itrOptionalAttributes = "itr_description" | "itr_aim";
export type q_user_itrCreationAttributes = Optional<q_user_itrAttributes, q_user_itrOptionalAttributes>;
export declare class q_user_itr extends Model<q_user_itrAttributes, q_user_itrCreationAttributes> implements q_user_itrAttributes {
    id: number;
    user_id: number;
    itr_title: string;
    itr_description?: string;
    itr_aim?: string;
    itr_section: string[];
    user: q_user;
    getUser: Sequelize.BelongsToGetAssociationMixin<q_user>;
    setUser: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
    createUser: Sequelize.BelongsToCreateAssociationMixin<q_user>;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_user_itr;
}
