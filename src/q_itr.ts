import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_itr_user, q_itr_userId } from './q_itr_user';
import type { q_user, q_userId } from './q_user';

export interface q_itrAttributes {
  id: number;
  user_id: number;
  itr_title: string;
  itr_description?: string;
  itr_aim?: string;
}

export type q_itrPk = "id";
export type q_itrId = q_itr[q_itrPk];
export type q_itrOptionalAttributes = "itr_description" | "itr_aim";
export type q_itrCreationAttributes = Optional<q_itrAttributes, q_itrOptionalAttributes>;

export class q_itr extends Model<q_itrAttributes, q_itrCreationAttributes> implements q_itrAttributes {
  id!: number;
  user_id!: number;
  itr_title!: string;
  itr_description?: string;
  itr_aim?: string;

  // q_itr hasMany q_itr_user via itr_id
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
  // q_itr belongsToMany q_user via itr_id and user_id
  user_id_q_users!: q_user[];
  getUser_id_q_users!: Sequelize.BelongsToManyGetAssociationsMixin<q_user>;
  setUser_id_q_users!: Sequelize.BelongsToManySetAssociationsMixin<q_user, q_userId>;
  addUser_id_q_user!: Sequelize.BelongsToManyAddAssociationMixin<q_user, q_userId>;
  addUser_id_q_users!: Sequelize.BelongsToManyAddAssociationsMixin<q_user, q_userId>;
  createUser_id_q_user!: Sequelize.BelongsToManyCreateAssociationMixin<q_user>;
  removeUser_id_q_user!: Sequelize.BelongsToManyRemoveAssociationMixin<q_user, q_userId>;
  removeUser_id_q_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<q_user, q_userId>;
  hasUser_id_q_user!: Sequelize.BelongsToManyHasAssociationMixin<q_user, q_userId>;
  hasUser_id_q_users!: Sequelize.BelongsToManyHasAssociationsMixin<q_user, q_userId>;
  countUser_id_q_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // q_itr belongsTo q_user via user_id
  user!: q_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<q_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<q_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_itr {
    return sequelize.define('q_itr', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'q_user',
        key: 'id'
      }
    },
    itr_title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    itr_description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    itr_aim: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    tableName: 'q_itr',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_user_itr_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_itr;
  }
}
