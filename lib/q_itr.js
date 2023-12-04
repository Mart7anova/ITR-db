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
exports.q_itr = void 0;
var sequelize_1 = require("sequelize");
var q_itr = /** @class */ (function (_super) {
    __extends(q_itr, _super);
    function q_itr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_itr.initModel = function (sequelize) {
        return sequelize.define('q_itr', {
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
            itr_title: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            itr_description: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true
            },
            itr_aim: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: true
            },
            itr_section: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                allowNull: false
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
        });
    };
    return q_itr;
}(sequelize_1.Model));
exports.q_itr = q_itr;
