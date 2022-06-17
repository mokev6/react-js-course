import { PrecedentConditionType } from './PrecedentConditionType';

export type TermsheetType = {
    id: number;
    type: string;
    sousType: string;
    precedentConditions: PrecedentConditionType[]
}