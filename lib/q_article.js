"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.q_article = void 0;
var sequelize_1 = require("sequelize");
var q_article = /** @class */ (function (_super) {
    __extends(q_article, _super);
    function q_article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_article.initModel = function (sequelize) {
        return sequelize.define('q_article', {
            id: {
                autoIncrement: true,
                autoIncrementIdentity: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'q_user',
                    key: 'id'
                }
            },
            checked: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            title: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            img: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            body: {
                type: sequelize_1.DataTypes.STRING,
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
        });
    };
    return q_article;
}(sequelize_1.Model));
exports.q_article = q_article;
