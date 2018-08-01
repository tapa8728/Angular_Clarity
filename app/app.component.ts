/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',   // this will show up in the HTML template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {
    translate.addLangs(["en-US", "de-DE", "fr-FR"]);
    translate.setDefaultLang('en-US');

    let locale = (<any>window.frameElement).htmlClientSdk.app.getClientLocale();
    if (locale && translate.getLangs().indexOf(locale) > 0) {
      translate.use(locale);
    }
  }
}
