import * as Sequelize from 'sequelize';
import { Model } from 'sequelize';
import type { q_itr_section, q_itr_sectionId } from './q_itr_section';
export interface q_itr_testAttributes {
    id: number;
    section_id: number;
    question: string;
    answer: string[];
    right_answer_id: number;
}
export type q_itr_testPk = "id";
export type q_itr_testId = q_itr_test[q_itr_testPk];
export type q_itr_testCreationAttributes = q_itr_testAttributes;
export declare class q_itr_test extends Model<q_itr_testAttributes, q_itr_testCreationAttributes> implements q_itr_testAttributes {
    id: number;
    section_id: number;
    question: string;
    answer: string[];
    right_answer_id: number;
    section: q_itr_section;
    getSection: Sequelize.BelongsToGetAssociationMixin<q_itr_section>;
    setSection: Sequelize.BelongsToSetAssociationMixin<q_itr_section, q_itr_sectionId>;
    createSection: Sequelize.BelongsToCreateAssociationMixin<q_itr_section>;
    static initModel(sequelize: Sequelize.Sequelize): typeof q_itr_test;
}
