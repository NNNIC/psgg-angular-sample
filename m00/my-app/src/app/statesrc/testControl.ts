//  psggConverterLib.dll converted from testControl.xlsx. 
import { AppComponent } from '../app.component'; // add to template-source.txt
import { testControlSub } from './testControlSub';

export class testControl extends testControlSub {

    public start() {
        this.Goto(this.S_START);
    }
    public is_end() {
        return this.CheckState(this.S_END);
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
            this.SetNext(this.S_HELLO);
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
        S_HELLO
        say hello!
    */
    S_HELLO(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_HELLO';
            // this.curstatecmt  = 'say hello!';
            AppComponent.s_title='SYN-G-GEN !!!';
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_END);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}

