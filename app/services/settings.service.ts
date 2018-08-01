/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Injectable} from "@angular/core";

@Injectable()
export class SettingsService {
    /**
     * Property name used to set the number of displayed
     * chassis per page in the local storage.
     * @type {string}
     */
    public static readonly NUMBER_CHASSIS_PER_PAGE_PROPERTY: string =
        "com.vmware.samples.customobject.numberChassisPerPage";

    /**
     *  Default number of chassis displayed in Chassis List per page.
     * @type {number}
     */
    public static readonly DEFAULT_NUMBER_CHASSIS_PER_PAGE: number = 10;
}