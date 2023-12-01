import * as Sequelize from 'sequelize';
import { Model } from 'sequelize';
import type { q_user, q_userId } from './q_user';
export interface q_mentor_infoAttributes {
    id: number;
    user_id: number;
    experience: string;
    direction: string[];
    education: string[];
    cost: number;
    about: string;
}
export type q_mentor_infoPk = "id";
export type q_mentor_infoId = q_mentor_info[q_mentor_infoPk];
export type q_mentor_infoCreationAttributes = q_mentor_infoAttributes;
export declare class q_mentor_info extends Model<q_mentor_infoAttributes, q_mentor_infoCreationAttributes> implements q_mentor_infoAttributes {
    id: number;
    user_id: number;
    experience: string;
    direction: string[];
    education: string[];
    cost: number;
    about: string;
    user: q_user;
    getUser: Sequelize.BelongsToGetAssociationMixin<q_user>;
    setUser: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
    createUser: Sequelize.BelongsToCreateAssociationMixin<q_user>;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_mentor_info;
}
