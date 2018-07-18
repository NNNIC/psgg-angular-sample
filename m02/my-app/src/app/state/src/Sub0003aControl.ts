// This source is created by ExcelStateChartConverter.exe. Source : Sub0003aControl.xlsx
import { Sub0003aControlSub } from './Sub0003aControlSub';
export class Sub0003aControl extends Sub0003aControlSub {
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
            this.SetNext(this.S_INIT);
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
        S_DRAW_CIRCLE
        円描画
    */
    S_DRAW_CIRCLE(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_DRAW_CIRCLE';
            // this.curstatecmt  = '円描画';
            this.draw_init();
        }
        this.draw_update();
        if (!this.draw_wait()) { return; }


        if (!this.HasNextState()) {
            this.SetNext(this.S_DESTROY);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_INIT
        初期化
    */
    S_INIT(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_INIT';
            // this.curstatecmt  = '初期化';

        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_DRAW_CIRCLE);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_DESTROY
        終了処理
    */
    S_DESTROY(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_DESTROY';
            // this.curstatecmt  = '終了処理';
            this.OutOfDate();


        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_END);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}
