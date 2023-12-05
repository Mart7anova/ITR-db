import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_user, q_userId } from './q_user';

export interface q_mentor_infoAttributes {
  id: number;
  user_id: number;
  experience: string;
  direction: string[];
  education: string[];
  cost: number;
  about: string;
  isAdopted: boolean;
}

export type q_mentor_infoPk = "id";
export type q_mentor_infoId = q_mentor_info[q_mentor_infoPk];
export type q_mentor_infoCreationAttributes = q_mentor_infoAttributes;

export class q_mentor_info extends Model<q_mentor_infoAttributes, q_mentor_infoCreationAttributes> implements q_mentor_infoAttributes {
  id!: number;
  user_id!: number;
  experience!: string;
  direction!: string[];
  education!: string[];
  cost!: number;
  about!: string;
  isAdopted!: boolean;

  // q_mentor_info belongsTo q_user via user_id
  user!: q_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<q_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<q_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_mentor_info {
    return sequelize.define('q_mentor_info', {
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
    experience: {
      type: DataTypes.TIME,
      allowNull: false
    },
    direction: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    education: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    cost: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    about: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
    isAdopted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'q_mentor_info',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_mentor_info_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_mentor_info;
  }
}
