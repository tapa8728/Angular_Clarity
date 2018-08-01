/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Location}     from "@angular/common";
import {Subscription} from "rxjs/Subscription";


// The document URL is
// .../index.html?view=<name>&..._rest_of_the_parameters

@Component({
   template: '<router-outlet></router-outlet>'
})
export class AppRoutingComponent implements OnInit {
   private subscription: Subscription;

   constructor(private router: Router,
               private location: Location,
               private route: ActivatedRoute) {
   }

   ngOnInit(): void {
      let path = this.location.path();
      // console.log("app.component path = " + path);

      const FORWARD_SLASH_ENCODED2 = "%252F";
      const FORWARD_SLASH_ENCODED = /%2F/g;

      // Extract query parameters and navigate to view
      this.subscription = this.route.queryParams.subscribe(
         (param: any) => {
            let view = param["view"];
            let objectId = param["objectId"];
            let actionUid = param["actionUid"];
            let targets = param["targets"];
            let locale = param["locale"];
            let params = {};
            // console.log("Params = " + view + ", " + objectId + ", " + actionUid + ", " + targets + ", " + locale);

            if (!view) {
               console.error("Missing view parameter!")
               return;
            }
            if (objectId) {
               // Standard view URL
               objectId = objectId.replace(FORWARD_SLASH_ENCODED, FORWARD_SLASH_ENCODED2);
            }
            if (actionUid) {
               // Action URL"s targets contains the objectId or null for a global action
               params["actionUid"] = actionUid;
               if (targets) {
                  objectId = targets.replace(FORWARD_SLASH_ENCODED, FORWARD_SLASH_ENCODED2);
               } else {
                  objectId = null;
               }
            }

            let commands: any[] = ["/" + view];
            if (objectId) {
               commands[commands.length] = objectId;
            }
            // console.log('navigate commands:', commands);

            // Navigate without adding a new state in the browser history but rather
            // replace the current one {replaceUrl: true} since this is a second navigation
            // within the same call (the first one being the navigation to the very page).
            // Without this the user cannot go back with a simple click of the
            // browser 'back' button/shortcut
            this.router.navigate(commands, {replaceUrl : true});

         });
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}
