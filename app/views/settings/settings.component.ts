/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {SettingsService} from "../../services/settings.service";

@Component(
    {
        templateUrl: './settings.component.html'
    }
)

export class SettingsComponent implements OnInit {
    numberOfChassisPerPage: number =
        SettingsService.DEFAULT_NUMBER_CHASSIS_PER_PAGE;
    showSuccessMessage: boolean = false;

    ngOnInit(): void {
        let value =
            parseInt(localStorage.getItem(SettingsService.NUMBER_CHASSIS_PER_PAGE_PROPERTY));
        if (value && value > 0) {
            this.numberOfChassisPerPage = value;
        }
    }

    /**
     * Sets the new value in the local storage.
     * @param numberChassisPerPage -
     * number of chassis displayed in the chassis list per page.
     */
    setNumberChassisPerPageInLocalStorage(numberChassisPerPage: number) {
        localStorage.setItem(
            SettingsService.NUMBER_CHASSIS_PER_PAGE_PROPERTY, numberChassisPerPage.toString());
    }

    /**
     * Triggered when user clicks on "Update" button.
     */
    onUpdate() {
        let value: number = parseInt(this.numberOfChassisPerPage.toString());
        if (value === Number.NaN || value <= 0) {
            value = SettingsService.DEFAULT_NUMBER_CHASSIS_PER_PAGE;
        }

        this.numberOfChassisPerPage = value;
        this.setNumberChassisPerPageInLocalStorage(value);
        this.showSuccessMessage = true;
    }
}
