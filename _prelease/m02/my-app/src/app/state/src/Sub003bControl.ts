// This source is created by ExcelStateChartConverter.exe. Source : Sub003bControl.xlsx
import { Sub003bControlSub } from './Sub003bControlSub';
export class Sub003bControl extends Sub003bControlSub {
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
            this.SetNext(this.S_CLEARALL);
        }
        this.NoWait();
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
        S_CLEARALL
        全削除
    */
    S_CLEARALL(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_CLEARALL';
            // this.curstatecmt  = '全削除';

        }
        this.clear_all();


        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}
