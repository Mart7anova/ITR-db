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
exports.q_user = void 0;
var sequelize_1 = require("sequelize");
var q_user = /** @class */ (function (_super) {
    __extends(q_user, _super);
    function q_user() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_user.initModel = function (sequelize) {
        return sequelize.define('q_user', {
            id: {
                autoIncrement: true,
                autoIncrementIdentity: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            password: {
                type: sequelize_1.DataTypes.STRING(64),
                allowNull: false
            },
            token_auth: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true
            },
            isadmin: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            is_mentor: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: true
            },
            age: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            about: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true
            },
            photo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            }
        }, {
            tableName: 'q_user',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "q_user_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    };
    return q_user;
}(sequelize_1.Model));
exports.q_user = q_user;
