import { StateManager } from './base/state-manager';

export class testControlSub extends StateManager {

  b_yesno: boolean;

  br_yes(st) {
    if (!this.HasNextState()) {
      if (this.b_yesno) {
        this.SetNext(st);
      }
    }
  }
  
  br_no(st) {
    if (!this.HasNextState()) {
      if (!this.b_yesno) {
        this.SetNext(st);
      }
    }
  }

  br_notAbove(st) {
    if (!this.HasNextState()) {
      this.SetNext(st);
    }
  }

  // write your code!


}
