// This source is created by ExcelStateChartConverter.exe. Source : Sub001Control.xlsx
import { Sub001ControlSub } from './Sub001ControlSub';
export class Sub001Control extends Sub001ControlSub {
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
        初期化
    */
    S_INIT(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_INIT';
            // this.curstatecmt  = '初期化';
            this.init();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_UPDATE);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_UPDATE
        更新
    */
    S_UPDATE(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_UPDATE';
            // this.curstatecmt  = '更新';

        }
        this.update();
        if (!this.isDone()) { return; }


        if (!this.HasNextState()) {
            this.SetNext(this.S_DESTROY);
        }
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
            this.destroy();
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
