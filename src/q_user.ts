import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_article, q_articleId } from './q_article';
import type { q_itr, q_itrId } from './q_itr';
import type { q_itr_user, q_itr_userId } from './q_itr_user';
import type { q_mentor_info, q_mentor_infoId } from './q_mentor_info';
import type { q_sub_direction, q_sub_directionId } from './q_sub_direction';
import type { q_sub_direction_user, q_sub_direction_userId } from './q_sub_direction_user';

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

export class q_user extends Model<q_userAttributes, q_userCreationAttributes> implements q_userAttributes {
  id!: number;
  email!: string;
  password!: string;
  token_auth?: string;
  isadmin!: boolean;
  is_mentor!: boolean;
  name?: string;
  age?: Date;
  about?: string;
  photo?: string;

  // q_user hasMany q_article via user_id
  q_articles!: q_article[];
  getQ_articles!: Sequelize.HasManyGetAssociationsMixin<q_article>;
  setQ_articles!: Sequelize.HasManySetAssociationsMixin<q_article, q_articleId>;
  addQ_article!: Sequelize.HasManyAddAssociationMixin<q_article, q_articleId>;
  addQ_articles!: Sequelize.HasManyAddAssociationsMixin<q_article, q_articleId>;
  createQ_article!: Sequelize.HasManyCreateAssociationMixin<q_article>;
  removeQ_article!: Sequelize.HasManyRemoveAssociationMixin<q_article, q_articleId>;
  removeQ_articles!: Sequelize.HasManyRemoveAssociationsMixin<q_article, q_articleId>;
  hasQ_article!: Sequelize.HasManyHasAssociationMixin<q_article, q_articleId>;
  hasQ_articles!: Sequelize.HasManyHasAssociationsMixin<q_article, q_articleId>;
  countQ_articles!: Sequelize.HasManyCountAssociationsMixin;
  // q_user hasMany q_itr via user_id
  q_itrs!: q_itr[];
  getQ_itrs!: Sequelize.HasManyGetAssociationsMixin<q_itr>;
  setQ_itrs!: Sequelize.HasManySetAssociationsMixin<q_itr, q_itrId>;
  addQ_itr!: Sequelize.HasManyAddAssociationMixin<q_itr, q_itrId>;
  addQ_itrs!: Sequelize.HasManyAddAssociationsMixin<q_itr, q_itrId>;
  createQ_itr!: Sequelize.HasManyCreateAssociationMixin<q_itr>;
  removeQ_itr!: Sequelize.HasManyRemoveAssociationMixin<q_itr, q_itrId>;
  removeQ_itrs!: Sequelize.HasManyRemoveAssociationsMixin<q_itr, q_itrId>;
  hasQ_itr!: Sequelize.HasManyHasAssociationMixin<q_itr, q_itrId>;
  hasQ_itrs!: Sequelize.HasManyHasAssociationsMixin<q_itr, q_itrId>;
  countQ_itrs!: Sequelize.HasManyCountAssociationsMixin;
  // q_user belongsToMany q_itr via user_id and itr_id
  itr_id_q_itrs!: q_itr[];
  getItr_id_q_itrs!: Sequelize.BelongsToManyGetAssociationsMixin<q_itr>;
  setItr_id_q_itrs!: Sequelize.BelongsToManySetAssociationsMixin<q_itr, q_itrId>;
  addItr_id_q_itr!: Sequelize.BelongsToManyAddAssociationMixin<q_itr, q_itrId>;
  addItr_id_q_itrs!: Sequelize.BelongsToManyAddAssociationsMixin<q_itr, q_itrId>;
  createItr_id_q_itr!: Sequelize.BelongsToManyCreateAssociationMixin<q_itr>;
  removeItr_id_q_itr!: Sequelize.BelongsToManyRemoveAssociationMixin<q_itr, q_itrId>;
  removeItr_id_q_itrs!: Sequelize.BelongsToManyRemoveAssociationsMixin<q_itr, q_itrId>;
  hasItr_id_q_itr!: Sequelize.BelongsToManyHasAssociationMixin<q_itr, q_itrId>;
  hasItr_id_q_itrs!: Sequelize.BelongsToManyHasAssociationsMixin<q_itr, q_itrId>;
  countItr_id_q_itrs!: Sequelize.BelongsToManyCountAssociationsMixin;
  // q_user hasMany q_itr_user via user_id
  q_itr_users!: q_itr_user[];
  getQ_itr_users!: Sequelize.HasManyGetAssociationsMixin<q_itr_user>;
  setQ_itr_users!: Sequelize.HasManySetAssociationsMixin<q_itr_user, q_itr_userId>;
  addQ_itr_user!: Sequelize.HasManyAddAssociationMixin<q_itr_user, q_itr_userId>;
  addQ_itr_users!: Sequelize.HasManyAddAssociationsMixin<q_itr_user, q_itr_userId>;
  createQ_itr_user!: Sequelize.HasManyCreateAssociationMixin<q_itr_user>;
  removeQ_itr_user!: Sequelize.HasManyRemoveAssociationMixin<q_itr_user, q_itr_userId>;
  removeQ_itr_users!: Sequelize.HasManyRemoveAssociationsMixin<q_itr_user, q_itr_userId>;
  hasQ_itr_user!: Sequelize.HasManyHasAssociationMixin<q_itr_user, q_itr_userId>;
  hasQ_itr_users!: Sequelize.HasManyHasAssociationsMixin<q_itr_user, q_itr_userId>;
  countQ_itr_users!: Sequelize.HasManyCountAssociationsMixin;
  // q_user hasMany q_mentor_info via user_id
  q_mentor_infos!: q_mentor_info[];
  getQ_mentor_infos!: Sequelize.HasManyGetAssociationsMixin<q_mentor_info>;
  setQ_mentor_infos!: Sequelize.HasManySetAssociationsMixin<q_mentor_info, q_mentor_infoId>;
  addQ_mentor_info!: Sequelize.HasManyAddAssociationMixin<q_mentor_info, q_mentor_infoId>;
  addQ_mentor_infos!: Sequelize.HasManyAddAssociationsMixin<q_mentor_info, q_mentor_infoId>;
  createQ_mentor_info!: Sequelize.HasManyCreateAssociationMixin<q_mentor_info>;
  removeQ_mentor_info!: Sequelize.HasManyRemoveAssociationMixin<q_mentor_info, q_mentor_infoId>;
  removeQ_mentor_infos!: Sequelize.HasManyRemoveAssociationsMixin<q_mentor_info, q_mentor_infoId>;
  hasQ_mentor_info!: Sequelize.HasManyHasAssociationMixin<q_mentor_info, q_mentor_infoId>;
  hasQ_mentor_infos!: Sequelize.HasManyHasAssociationsMixin<q_mentor_info, q_mentor_infoId>;
  countQ_mentor_infos!: Sequelize.HasManyCountAssociationsMixin;
  // q_user belongsToMany q_sub_direction via user_id and sub_direction_id
  sub_direction_id_q_sub_directions!: q_sub_direction[];
  getSub_direction_id_q_sub_directions!: Sequelize.BelongsToManyGetAssociationsMixin<q_sub_direction>;
  setSub_direction_id_q_sub_directions!: Sequelize.BelongsToManySetAssociationsMixin<q_sub_direction, q_sub_directionId>;
  addSub_direction_id_q_sub_direction!: Sequelize.BelongsToManyAddAssociationMixin<q_sub_direction, q_sub_directionId>;
  addSub_direction_id_q_sub_directions!: Sequelize.BelongsToManyAddAssociationsMixin<q_sub_direction, q_sub_directionId>;
  createSub_direction_id_q_sub_direction!: Sequelize.BelongsToManyCreateAssociationMixin<q_sub_direction>;
  removeSub_direction_id_q_sub_direction!: Sequelize.BelongsToManyRemoveAssociationMixin<q_sub_direction, q_sub_directionId>;
  removeSub_direction_id_q_sub_directions!: Sequelize.BelongsToManyRemoveAssociationsMixin<q_sub_direction, q_sub_directionId>;
  hasSub_direction_id_q_sub_direction!: Sequelize.BelongsToManyHasAssociationMixin<q_sub_direction, q_sub_directionId>;
  hasSub_direction_id_q_sub_directions!: Sequelize.BelongsToManyHasAssociationsMixin<q_sub_direction, q_sub_directionId>;
  countSub_direction_id_q_sub_directions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // q_user hasMany q_sub_direction_user via user_id
  q_sub_direction_users!: q_sub_direction_user[];
  getQ_sub_direction_users!: Sequelize.HasManyGetAssociationsMixin<q_sub_direction_user>;
  setQ_sub_direction_users!: Sequelize.HasManySetAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
  addQ_sub_direction_user!: Sequelize.HasManyAddAssociationMixin<q_sub_direction_user, q_sub_direction_userId>;
  addQ_sub_direction_users!: Sequelize.HasManyAddAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
  createQ_sub_direction_user!: Sequelize.HasManyCreateAssociationMixin<q_sub_direction_user>;
  removeQ_sub_direction_user!: Sequelize.HasManyRemoveAssociationMixin<q_sub_direction_user, q_sub_direction_userId>;
  removeQ_sub_direction_users!: Sequelize.HasManyRemoveAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
  hasQ_sub_direction_user!: Sequelize.HasManyHasAssociationMixin<q_sub_direction_user, q_sub_direction_userId>;
  hasQ_sub_direction_users!: Sequelize.HasManyHasAssociationsMixin<q_sub_direction_user, q_sub_direction_userId>;
  countQ_sub_direction_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_user {
    return sequelize.define('q_user', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    token_auth: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_mentor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    age: {
      type: DataTypes.DATE,
      allowNull: true
    },
    about: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'q_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_user;
  }
}
