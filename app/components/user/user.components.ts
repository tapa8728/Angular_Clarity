// Building my 1st angular component from scratch
// step1: import component module from angular corepackage
import { Component } from '@angular/core';

// step2: define a decorator (typescript feature) to add-on features to the component class.
@Component({
  selector: 'app-user',
  //template: '<h2> John Doe </h2>'
  templateUrl: './user.components.html',
})

// step3: define a class for this component.
// remember that in angular template <--> class are 2-way bound
export class UserComponent {

}

// step4: Now add this new component to app.module.ts file

// step5:  Finally add it to app.component.html and index.html
