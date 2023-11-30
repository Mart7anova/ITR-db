import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
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

export class q_article extends Model<q_articleAttributes, q_articleCreationAttributes> implements q_articleAttributes {
  id!: number;
  user_id!: number;
  checked!: boolean;
  title!: string;
  img?: string;
  body!: string;

  // q_article belongsTo q_user via user_id
  user!: q_user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<q_user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<q_user, q_userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<q_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof q_article {
    return sequelize.define('q_article', {
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
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'q_article',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "q_article_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof q_article;
  }
}
