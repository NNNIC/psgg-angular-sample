//  psggConverterLib.dll converted from Sub003Control.xlsx. 
import { Sub003ControlSub } from './Sub003ControlSub';

export class Sub003Control extends Sub003ControlSub {

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
        初期化
    */
    S_INIT(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_INIT';
            // this.curstatecmt  = '初期化';
            this.sub003_init();
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_ChangeValues);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_ChangeValues
        値変更
    */
    S_ChangeValues(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_ChangeValues';
            // this.curstatecmt  = '値変更';
            this.change_values();
        }
        this.br_godraw(this.S_KickDrawCircle)
        this.br_notAbove(this.S_END)
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_KickDrawCircle
        円描画を起動
    */
    S_KickDrawCircle(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_KickDrawCircle';
            // this.curstatecmt  = '円描画を起動';
            this.kick_draw();
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_WAIT);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_WAIT
        待ち
    */
    S_WAIT(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_WAIT';
            // this.curstatecmt  = '待ち';
        }
        if (!this.wait_isdone()) { return; }
        if (!this.HasNextState()) {
            this.SetNext(this.S_ChangeValues);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }

}

