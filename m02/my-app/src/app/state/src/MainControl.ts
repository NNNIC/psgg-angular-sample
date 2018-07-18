// This source is created by ExcelStateChartConverter.exe. Source : MainControl.xlsx
import { MainControlSub } from './MainControlSub';
export class MainControl extends MainControlSub {
    public start() {
        this.Goto(this.S_START);
    }
    /*
        S_START
        開始
    */
    S_START(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_START';
            // this.curstatecmt  = '開始';

        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_END
        終了
    */
    S_END(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_END';
            // this.curstatecmt  = '終了';

        }



        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_BUTTONS
        ボタン分岐
    */
    S_BUTTONS(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_BUTTONS';
            // this.curstatecmt  = 'ボタン分岐';

        }


        this.br_0001(this.S_TEST0001);
    this.br_0002(this.S_TEST002);
    this.br_0003(this.S_TEST003);
    this.br_0004(this.S_TEST4);
    this.br_0005(this.S_TEST5);
    this.br_0006(this.S_TEST6);
    this.br_0007(this.S_TEST7);
    this.br_0008(this.S_TEST8);
    this.br_0009(this.S_TEST9);
    this.br_0010(this.S_TEST10);
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST0001
        new state
    */
    S_TEST0001(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST0001';
            // this.curstatecmt  = 'new state';
            this.test0001();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST002
        new state
    */
    S_TEST002(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST002';
            // this.curstatecmt  = 'new state';
            this.test0002();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST003
        new state
    */
    S_TEST003(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST003';
            // this.curstatecmt  = 'new state';
            this.test0003();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST4
        new state
    */
    S_TEST4(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST4';
            // this.curstatecmt  = 'new state';
            this.test0004();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST5
        new state
    */
    S_TEST5(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST5';
            // this.curstatecmt  = 'new state';
            this.test0005();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST6
        new state
    */
    S_TEST6(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST6';
            // this.curstatecmt  = 'new state';
            this.test0006();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST7
        new state
    */
    S_TEST7(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST7';
            // this.curstatecmt  = 'new state';
            this.test0007();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST8
        new state
    */
    S_TEST8(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST8';
            // this.curstatecmt  = 'new state';
            this.test0008();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST9
        new state
    */
    S_TEST9(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST9';
            // this.curstatecmt  = 'new state';
            this.test0009();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TEST10
        new state
    */
    S_TEST10(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TEST10';
            // this.curstatecmt  = 'new state';
            this.test0010();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BUTTONS);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}
