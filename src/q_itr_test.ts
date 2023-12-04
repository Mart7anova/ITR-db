import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { q_itr_section, q_itr_sectionId } from './q_itr_section';

export interface q_itr_testAttributes {
  id: number;
  section_id: number;
  question: string;
  answer: string[];
  right_anser_id: number;
}

export type q_itr_testPk = "id";
export type q_itr_testId = q_itr_test[q_itr_testPk];
export type q_itr_testCreationAttributes = q_itr_testAttributes;

export class q_itr_test extends Model<q_itr_testAttributes, q_itr_testCreationAttributes> implements q_itr_testAttributes {
  id!: number;
  section_id!: number;
  question!: string;
  answer!: string[];
  right_anser_id!: number;

  // q_itr_test belongsTo q_itr_section via section_id
  section!: q_itr_section;
  getSection!: Sequelize.BelongsToGetAssociationMixin<q_itr_section>;
  setSection!: Sequelize.BelongsToSetAssociationMixin<q_itr_section, q_itr_sectionId>;
  createSection!: Sequelize.BelongsToCreateAssociationMixin<q_itr_section>;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_itr_test {
    return sequelize.define('q_itr_test', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    section_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'q_itr_section',
        key: 'id'
      }
    },
    question: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    answer: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    right_anser_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    tableName: 'q_itr_test',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "й_test_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_itr_test;
  }
}
