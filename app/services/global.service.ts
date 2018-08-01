/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class GlobalService {
   protected static WEB_CONTEXT_PATH = "/ui/html-sample";

   protected headers = new Headers({"Content-Type": "application/json"});
   public readonly htmlClientSdk: any;

   constructor(protected http: Http) {
      this.htmlClientSdk = (<any>window.frameElement).htmlClientSdk;
   }

   protected handleError(error: any): Promise<any> {
      let errMsg = error.message || "Server error: check console for details";
      return Promise.reject(errMsg);
   }
}
