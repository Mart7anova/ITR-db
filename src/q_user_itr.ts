import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_user, q_userId } from './q_user';

export interface q_user_itrAttributes {
  id: number;
  user_id: number;
  itr_title: string;
  itr_description?: string;
  itr_aim?: string;
  itr_section: string;
}

export type q_user_itrPk = "id";
export type q_user_itrId = q_user_itr[q_user_itrPk];
export type q_user_itrOptionalAttributes = "itr_description" | "itr_aim";
export type q_user_itrCreationAttributes = Optional<q_user_itrAttributes, q_user_itrOptionalAttributes>;

export class q_user_itr extends Model<q_user_itrAttributes, q_user_itrCreationAttributes> implements q_user_itrAttributes {
  id!: number;
  user_id!: number;
  itr_title!: string;
  itr_description?: string;
  itr_aim?: string;
  itr_section!: string;

  // q_user_itr belongsTo q_user via user_id
  user!: q_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<q_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<q_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_user_itr {
    return sequelize.define('q_user_itr', {
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
    },
    itr_section: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'q_user_itr',
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
  }) as typeof q_user_itr;
  }
}
