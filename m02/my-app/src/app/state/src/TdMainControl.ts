// This source is created by ExcelStateChartConverter.exe. Source : TdMainControl.xlsx
import { TdMainControlSub } from './TdMainControlSub';
export class TdMainControl extends TdMainControlSub {
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
        CANVAS作成等
    */
    S_INIT(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_INIT';
            // this.curstatecmt  = 'CANVAS作成等';
            this.initialize();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_UPDATE_BEGIN);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_WORK

    */
    S_WORK(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_WORK';
            // this.curstatecmt  = '';

        }
        this.render();


        if (!this.HasNextState()) {
            this.SetNext(this.S_TICK);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_BALL
        new state
    */
    S_BALL(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_BALL';
            // this.curstatecmt  = 'new state';
            this.ball_update();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_WORK);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_UPDATE_BEGIN
        更新開始
    */
    S_UPDATE_BEGIN(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_UPDATE_BEGIN';
            // this.curstatecmt  = '更新開始';
            this.render_begin();
        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_BALL);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_TICK
        new state
    */
    S_TICK(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_TICK';
            // this.curstatecmt  = 'new state';

        }



        if (!this.HasNextState()) {
            this.SetNext(this.S_UPDATE_BEGIN);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}
