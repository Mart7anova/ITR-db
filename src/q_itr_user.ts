import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_itr, q_itrId } from './q_itr';
import type { q_user, q_userId } from './q_user';

export interface q_itr_userAttributes {
  user_id: number;
  itr_id: number;
}

export type q_itr_userPk = "user_id" | "itr_id";
export type q_itr_userId = q_itr_user[q_itr_userPk];
export type q_itr_userCreationAttributes = q_itr_userAttributes;

export class q_itr_user extends Model<q_itr_userAttributes, q_itr_userCreationAttributes> implements q_itr_userAttributes {
  user_id!: number;
  itr_id!: number;

  // q_itr_user belongsTo q_itr via itr_id
  itr!: q_itr;
  getItr!: Sequelize.BelongsToGetAssociationMixin<q_itr>;
  setItr!: Sequelize.BelongsToSetAssociationMixin<q_itr, q_itrId>;
  createItr!: Sequelize.BelongsToCreateAssociationMixin<q_itr>;
  // q_itr_user belongsTo q_user via user_id
  user!: q_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<q_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<q_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_itr_user {
    return sequelize.define('q_itr_user', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'q_user',
        key: 'id'
      }
    },
    itr_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'q_itr',
        key: 'id'
      }
    }
  }, {
    tableName: 'q_itr_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_itr_user_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "itr_id" },
        ]
      },
    ]
  }) as typeof q_itr_user;
  }
}
