import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { q_user, q_userId } from './q_user';
export interface q_articleAttributes {
    id: number;
    user_id: number;
    checked: boolean;
    title: string;
    img?: string;
    body: string;
}
export type q_articlePk = "id";
export type q_articleId = q_article[q_articlePk];
export type q_articleOptionalAttributes = "img";
export type q_articleCreationAttributes = Optional<q_articleAttributes, q_articleOptionalAttributes>;
export declare class q_article extends Model<q_articleAttributes, q_articleCreationAttributes> implements q_articleAttributes {
    id: number;
    user_id: number;
    checked: boolean;
    title: string;
    img?: string;
    body: string;
    user: q_user;
    getUser: Sequelize.BelongsToGetAssociationMixin<q_user>;
    setUser: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
    createUser: Sequelize.BelongsToCreateAssociationMixin<q_user>;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_article;
}
