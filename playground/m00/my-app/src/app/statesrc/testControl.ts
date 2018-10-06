import { StateManager } from './base/state-manager';

export class testControl extends StateManager {

    public start() {
        this.Goto(this.S_START);
    }
    public is_end() {
        return this.CheckState(this.S_END);
    }
    //                             [SYN-G-GEN OUTPUT START]   $/^[SE]_/$
//  psggConverterLib.dll converted from testControl.xlsx. 
    /*
        S_0001
        new state
    */
    S_0001(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_0001';
            // this.curstatecmt  = 'new state';
            alert('!');
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_END);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_END
    */
    S_END(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_END';
            // this.curstatecmt  = '';
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_START
    */
    S_START(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_START';
            // this.curstatecmt  = '';
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_0001);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }


    //                             [SYN-G-GEN OUTPUT END]
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
}
