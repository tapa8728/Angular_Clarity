/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {
   Component, NgZone, Input, SimpleChanges,
   OnChanges
} from '@angular/core';

import {Chassis} from "../../../model/chassis.model";
import {HostsService} from "../../../services/hosts.service";

@Component(
      {
         selector: 'hosts-list-view',
         templateUrl: './hosts-list.component.html'
      }
)

export class HostListComponent implements OnChanges {

   private static HOST_SUMMARY_VIEW_EXTENSION_ID = "vsphere.core.host.summary";

   @Input()
   chassis: Chassis;

   hostsList: Map<string, any>[];

   onContextMenu = HostListComponent.preventContextMenu;

   constructor(private zone: NgZone, private hostsService: HostsService) {
   }

   ngOnChanges(changes: SimpleChanges) {
      this.retrieveHosts();
   }

   /**
    * Navigate To the host summary view of a given objectId
    */
   navigateToHostSummaryView(objectId: string): void {
      let navigateParams = {
         targetViewId: HostListComponent.HOST_SUMMARY_VIEW_EXTENSION_ID,
         objectId: objectId
      };
      this.hostsService.htmlClientSdk.app.navigateTo(navigateParams);
   }

   /**
    * Refresh the list of host objects.
    */
   private retrieveHosts(): void {
      this.hostsService.getHosts(this.chassis)
            .then(result => this.hostsList = result);
   }

   static preventContextMenu(): boolean {
      return false;
   }
}
