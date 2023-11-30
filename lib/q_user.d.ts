import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { q_article, q_articleId } from './q_article';
import type { q_user_itr, q_user_itrId } from './q_user_itr';
export interface q_userAttributes {
    id: number;
    email: string;
    password: string;
    token_auth?: string;
    isadmin: boolean;
    is_mentor: boolean;
    name?: string;
    age?: Date;
    about?: string;
    photo?: string;
}
export type q_userPk = "id";
export type q_userId = q_user[q_userPk];
export type q_userOptionalAttributes = "token_auth" | "name" | "age" | "about" | "photo";
export type q_userCreationAttributes = Optional<q_userAttributes, q_userOptionalAttributes>;
export declare class q_user extends Model<q_userAttributes, q_userCreationAttributes> implements q_userAttributes {
    id: number;
    email: string;
    password: string;
    token_auth?: string;
    isadmin: boolean;
    is_mentor: boolean;
    name?: string;
    age?: Date;
    about?: string;
    photo?: string;
    q_articles: q_article[];
    getQ_articles: Sequelize.HasManyGetAssociationsMixin<q_article>;
    setQ_articles: Sequelize.HasManySetAssociationsMixin<q_article, q_articleId>;
    addQ_article: Sequelize.HasManyAddAssociationMixin<q_article, q_articleId>;
    addQ_articles: Sequelize.HasManyAddAssociationsMixin<q_article, q_articleId>;
    createQ_article: Sequelize.HasManyCreateAssociationMixin<q_article>;
    removeQ_article: Sequelize.HasManyRemoveAssociationMixin<q_article, q_articleId>;
    removeQ_articles: Sequelize.HasManyRemoveAssociationsMixin<q_article, q_articleId>;
    hasQ_article: Sequelize.HasManyHasAssociationMixin<q_article, q_articleId>;
    hasQ_articles: Sequelize.HasManyHasAssociationsMixin<q_article, q_articleId>;
    countQ_articles: Sequelize.HasManyCountAssociationsMixin;
    q_user_itrs: q_user_itr[];
    getQ_user_itrs: Sequelize.HasManyGetAssociationsMixin<q_user_itr>;
    setQ_user_itrs: Sequelize.HasManySetAssociationsMixin<q_user_itr, q_user_itrId>;
    addQ_user_itr: Sequelize.HasManyAddAssociationMixin<q_user_itr, q_user_itrId>;
    addQ_user_itrs: Sequelize.HasManyAddAssociationsMixin<q_user_itr, q_user_itrId>;
    createQ_user_itr: Sequelize.HasManyCreateAssociationMixin<q_user_itr>;
    removeQ_user_itr: Sequelize.HasManyRemoveAssociationMixin<q_user_itr, q_user_itrId>;
    removeQ_user_itrs: Sequelize.HasManyRemoveAssociationsMixin<q_user_itr, q_user_itrId>;
    hasQ_user_itr: Sequelize.HasManyHasAssociationMixin<q_user_itr, q_user_itrId>;
    hasQ_user_itrs: Sequelize.HasManyHasAssociationsMixin<q_user_itr, q_user_itrId>;
    countQ_user_itrs: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_user;
}
