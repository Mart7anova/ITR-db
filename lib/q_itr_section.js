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
exports.q_itr_section = void 0;
var sequelize_1 = require("sequelize");
var q_itr_section = /** @class */ (function (_super) {
    __extends(q_itr_section, _super);
    function q_itr_section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    q_itr_section.initModel = function (sequelize) {
        return sequelize.define('q_itr_section', {
            id: {
                autoIncrement: true,
                autoIncrementIdentity: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            itr_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            title: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            body: {
                type: sequelize_1.DataTypes.STRING,
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
        });
    };
    return q_itr_section;
}(sequelize_1.Model));
exports.q_itr_section = q_itr_section;
