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
exports.q_mentor_info = void 0;
var sequelize_1 = require("sequelize");
var q_mentor_info = /** @class */ (function (_super) {
    __extends(q_mentor_info, _super);
    function q_mentor_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_mentor_info.initModel = function (sequelize) {
        return sequelize.define('q_mentor_info', {
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
            experience: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: false
            },
            direction: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                allowNull: false
            },
            education: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                allowNull: false
            },
            cost: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: false
            },
            about: {
                type: sequelize_1.DataTypes.STRING(2048),
                allowNull: false
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
        });
    };
    return q_mentor_info;
}(sequelize_1.Model));
exports.q_mentor_info = q_mentor_info;
