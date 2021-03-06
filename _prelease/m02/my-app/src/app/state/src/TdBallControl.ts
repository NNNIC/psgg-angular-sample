﻿//  psggConverterLib.dll converted from TdBallControl.xlsx. 
import { TdBallControlSub } from './TdBallControlSub';

export class TdBallControl extends TdBallControlSub {

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
        S_0001
        new state
    */
    S_0001(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_0001';
            // this.curstatecmt  = 'new state';
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
            this.initialize();
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_MOVE);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_MOVE
        移動
    */
    S_MOVE(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_MOVE';
            // this.curstatecmt  = '移動';
        }
        this.move();
        if (!this.is_done()) { return; }
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

