/**
 * ManageSpace Diary API
 * ManageSpace Diary API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DiaryEntryTypeCodeNames } from './diaryEntryTypeCodeNames';


export interface DiaryEntryTypeRequest { 
    /**
     * Diary Entry Type Id
     */
    diaryEntryTypeId: number;
    codeName: DiaryEntryTypeCodeNames;
    /**
     * Display Name
     */
    displayName: string;
}
export namespace DiaryEntryTypeRequest {
}


