/* tslint:disable */
/* eslint-disable */
/**
 * dashboard-backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CampaignManagement } from './CampaignManagement';
import {
    CampaignManagementFromJSON,
    CampaignManagementFromJSONTyped,
    CampaignManagementToJSON,
} from './CampaignManagement';
import type { CampaignPriority } from './CampaignPriority';
import {
    CampaignPriorityFromJSON,
    CampaignPriorityFromJSONTyped,
    CampaignPriorityToJSON,
} from './CampaignPriority';
import type { CampaignType } from './CampaignType';
import {
    CampaignTypeFromJSON,
    CampaignTypeFromJSONTyped,
    CampaignTypeToJSON,
} from './CampaignType';
import type { CampaignTypeFilter } from './CampaignTypeFilter';
import {
    CampaignTypeFilterFromJSON,
    CampaignTypeFilterFromJSONTyped,
    CampaignTypeFilterToJSON,
} from './CampaignTypeFilter';
import type { EntityState } from './EntityState';
import {
    EntityStateFromJSON,
    EntityStateFromJSONTyped,
    EntityStateToJSON,
} from './EntityState';

/**
 * 
 * @export
 * @interface CampaignFilter
 */
export interface CampaignFilter {
    /**
     * 
     * @type {CampaignType}
     * @memberof CampaignFilter
     */
    type?: CampaignType;
    /**
     * 
     * @type {CampaignManagement}
     * @memberof CampaignFilter
     */
    management?: CampaignManagement;
    /**
     * 
     * @type {EntityState}
     * @memberof CampaignFilter
     */
    state?: EntityState;
    /**
     * 
     * @type {CampaignPriority}
     * @memberof CampaignFilter
     */
    priority?: CampaignPriority;
    /**
     * 
     * @type {CampaignTypeFilter}
     * @memberof CampaignFilter
     */
    filter?: CampaignTypeFilter;
    /**
     * 
     * @type {boolean}
     * @memberof CampaignFilter
     */
    template?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CampaignFilter
     */
    searchAttribute?: string;
    /**
     * 
     * @type {Array<EntityState>}
     * @memberof CampaignFilter
     */
    includeStates?: Array<EntityState>;
    /**
     * 
     * @type {Array<EntityState>}
     * @memberof CampaignFilter
     */
    excludeStates?: Array<EntityState>;
    /**
     * 
     * @type {Array<CampaignManagement>}
     * @memberof CampaignFilter
     */
    includeManagements?: Array<CampaignManagement>;
    /**
     * 
     * @type {Array<CampaignManagement>}
     * @memberof CampaignFilter
     */
    excludeManagements?: Array<CampaignManagement>;
}

/**
 * Check if a given object implements the CampaignFilter interface.
 */
export function instanceOfCampaignFilter(value: object): boolean {
    return true;
}

export function CampaignFilterFromJSON(json: any): CampaignFilter {
    return CampaignFilterFromJSONTyped(json, false);
}

export function CampaignFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : CampaignTypeFromJSON(json['type']),
        'management': json['management'] == null ? undefined : CampaignManagementFromJSON(json['management']),
        'state': json['state'] == null ? undefined : EntityStateFromJSON(json['state']),
        'priority': json['priority'] == null ? undefined : CampaignPriorityFromJSON(json['priority']),
        'filter': json['filter'] == null ? undefined : CampaignTypeFilterFromJSON(json['filter']),
        'template': json['template'] == null ? undefined : json['template'],
        'searchAttribute': json['searchAttribute'] == null ? undefined : json['searchAttribute'],
        'includeStates': json['includeStates'] == null ? undefined : ((json['includeStates'] as Array<any>).map(EntityStateFromJSON)),
        'excludeStates': json['excludeStates'] == null ? undefined : ((json['excludeStates'] as Array<any>).map(EntityStateFromJSON)),
        'includeManagements': json['includeManagements'] == null ? undefined : ((json['includeManagements'] as Array<any>).map(CampaignManagementFromJSON)),
        'excludeManagements': json['excludeManagements'] == null ? undefined : ((json['excludeManagements'] as Array<any>).map(CampaignManagementFromJSON)),
    };
}

export function CampaignFilterToJSON(value?: CampaignFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': CampaignTypeToJSON(value['type']),
        'management': CampaignManagementToJSON(value['management']),
        'state': EntityStateToJSON(value['state']),
        'priority': CampaignPriorityToJSON(value['priority']),
        'filter': CampaignTypeFilterToJSON(value['filter']),
        'template': value['template'],
        'searchAttribute': value['searchAttribute'],
        'includeStates': value['includeStates'] == null ? undefined : ((value['includeStates'] as Array<any>).map(EntityStateToJSON)),
        'excludeStates': value['excludeStates'] == null ? undefined : ((value['excludeStates'] as Array<any>).map(EntityStateToJSON)),
        'includeManagements': value['includeManagements'] == null ? undefined : ((value['includeManagements'] as Array<any>).map(CampaignManagementToJSON)),
        'excludeManagements': value['excludeManagements'] == null ? undefined : ((value['excludeManagements'] as Array<any>).map(CampaignManagementToJSON)),
    };
}
