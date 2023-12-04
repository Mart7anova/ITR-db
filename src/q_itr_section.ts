import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_itr_test, q_itr_testId } from './q_itr_test';

export interface q_itr_sectionAttributes {
  id: number;
  itr_id: number;
  title: string;
  body: string;
}

export type q_itr_sectionPk = "id";
export type q_itr_sectionId = q_itr_section[q_itr_sectionPk];
export type q_itr_sectionCreationAttributes = q_itr_sectionAttributes;

export class q_itr_section extends Model<q_itr_sectionAttributes, q_itr_sectionCreationAttributes> implements q_itr_sectionAttributes {
  id!: number;
  itr_id!: number;
  title!: string;
  body!: string;

  // q_itr_section hasMany q_itr_test via section_id
  q_itr_tests!: q_itr_test[];
  getQ_itr_tests!: Sequelize.HasManyGetAssociationsMixin<q_itr_test>;
  setQ_itr_tests!: Sequelize.HasManySetAssociationsMixin<q_itr_test, q_itr_testId>;
  addQ_itr_test!: Sequelize.HasManyAddAssociationMixin<q_itr_test, q_itr_testId>;
  addQ_itr_tests!: Sequelize.HasManyAddAssociationsMixin<q_itr_test, q_itr_testId>;
  createQ_itr_test!: Sequelize.HasManyCreateAssociationMixin<q_itr_test>;
  removeQ_itr_test!: Sequelize.HasManyRemoveAssociationMixin<q_itr_test, q_itr_testId>;
  removeQ_itr_tests!: Sequelize.HasManyRemoveAssociationsMixin<q_itr_test, q_itr_testId>;
  hasQ_itr_test!: Sequelize.HasManyHasAssociationMixin<q_itr_test, q_itr_testId>;
  hasQ_itr_tests!: Sequelize.HasManyHasAssociationsMixin<q_itr_test, q_itr_testId>;
  countQ_itr_tests!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_itr_section {
    return sequelize.define('q_itr_section', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itr_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'q_itr_section',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_itr_section_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_itr_section;
  }
}
