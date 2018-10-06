import { Component } from '@angular/core';
import { testControl } from './statesrc/testControl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //del title = 'app';

  // == add ==
  get title() : string { return AppComponent.s_title; } 
  static s_title = 'app';


  test() {
    const sm = new testControl();
    sm.start();
    while(!sm.is_end()) {
      sm.Update();
    }
  }
  // == add end ==

}
