// This source is created by ExcelStateChartConverter.exe. Source : Sub002Control.xlsx
import { Sub002ControlSub } from './Sub002ControlSub';
export class Sub002Control extends Sub002ControlSub {
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
        S_INIT
        キャンバス作成
    */
    S_INIT(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_INIT';
            // this.curstatecmt  = 'キャンバス作成';
            this.sub002_init();
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
        S_DRAW_CIRCLE
        円作成
    */
    S_DRAW_CIRCLE(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_DRAW_CIRCLE';
            // this.curstatecmt  = '円作成';
            this.draw_circle_init();

        }
        this.draw_circle_update();

        if (!this.draw_circle_wait()) { return; }


        if (!this.HasNextState()) {
            this.SetNext(this.S_DESTROY);
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
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}
