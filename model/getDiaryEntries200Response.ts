/**
 * ManageSpace Diary API
 * ManageSpace Diary API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DiaryEntryResponse } from './diaryEntryResponse';


export interface GetDiaryEntries200Response { 
    data?: Array<DiaryEntryResponse>;
    success?: boolean;
    error?: object;
}
