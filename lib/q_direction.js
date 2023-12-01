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
exports.q_direction = void 0;
var sequelize_1 = require("sequelize");
var q_direction = /** @class */ (function (_super) {
    __extends(q_direction, _super);
    function q_direction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_direction.initModel = function (sequelize) {
        return q_direction.init({
            id: {
                autoIncrement: true,
                autoIncrementIdentity: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            }
        }, {
            sequelize: sequelize,
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
        });
    };
    return q_direction;
}(sequelize_1.Model));
exports.q_direction = q_direction;
