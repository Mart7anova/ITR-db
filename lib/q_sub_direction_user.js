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
exports.q_sub_direction_user = void 0;
var sequelize_1 = require("sequelize");
var q_sub_direction_user = /** @class */ (function (_super) {
    __extends(q_sub_direction_user, _super);
    function q_sub_direction_user() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_sub_direction_user.initModel = function (sequelize) {
        return sequelize.define('q_sub_direction_user', {
            user_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'q_user',
                    key: 'id'
                }
            },
            sub_direction_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'q_sub_direction',
                    key: 'id'
                }
            }
        }, {
            tableName: 'q_sub_direction_user',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "q_sub_direction_user_pkey",
                    unique: true,
                    fields: [
                        { name: "user_id" },
                        { name: "sub_direction_id" },
                    ]
                },
            ]
        });
    };
    return q_sub_direction_user;
}(sequelize_1.Model));
exports.q_sub_direction_user = q_sub_direction_user;
