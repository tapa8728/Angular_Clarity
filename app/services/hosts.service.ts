/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Chassis} from "../model/chassis.model";
import {GlobalService} from "./global.service";

import "rxjs/add/operator/toPromise";

@Injectable()
export class HostsService extends GlobalService{
   /**
    * For a given chassis, sends a post message to get all hosts
    */
   public getHosts(chassis: Chassis): Promise<Map<string, any>[]> {
      const listUrl = `${HostsService.WEB_CONTEXT_PATH}/rest/hosts`;
      return this.http.post(listUrl, JSON.stringify(chassis), {headers: this.headers})
         .toPromise()
         .then((response: Response) => {
            return response.json() as Map<string, any>[];
         })
         .catch(this.handleError);
   }
}
