import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_sub_direction, q_sub_directionId } from './q_sub_direction';

export interface q_directionAttributes {
  id: number;
  name: string;
}

export type q_directionPk = "id";
export type q_directionId = q_direction[q_directionPk];
export type q_directionCreationAttributes = q_directionAttributes;

export class q_direction extends Model<q_directionAttributes, q_directionCreationAttributes> implements q_directionAttributes {
  id!: number;
  name!: string;

  // q_direction hasMany q_sub_direction via direction_id
  q_sub_directions!: q_sub_direction[];
  getQ_sub_directions!: Sequelize.HasManyGetAssociationsMixin<q_sub_direction>;
  setQ_sub_directions!: Sequelize.HasManySetAssociationsMixin<q_sub_direction, q_sub_directionId>;
  addQ_sub_direction!: Sequelize.HasManyAddAssociationMixin<q_sub_direction, q_sub_directionId>;
  addQ_sub_directions!: Sequelize.HasManyAddAssociationsMixin<q_sub_direction, q_sub_directionId>;
  createQ_sub_direction!: Sequelize.HasManyCreateAssociationMixin<q_sub_direction>;
  removeQ_sub_direction!: Sequelize.HasManyRemoveAssociationMixin<q_sub_direction, q_sub_directionId>;
  removeQ_sub_directions!: Sequelize.HasManyRemoveAssociationsMixin<q_sub_direction, q_sub_directionId>;
  hasQ_sub_direction!: Sequelize.HasManyHasAssociationMixin<q_sub_direction, q_sub_directionId>;
  hasQ_sub_directions!: Sequelize.HasManyHasAssociationsMixin<q_sub_direction, q_sub_directionId>;
  countQ_sub_directions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_direction {
    return sequelize.define('q_direction', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'q_direction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_direction_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_direction;
  }
}
