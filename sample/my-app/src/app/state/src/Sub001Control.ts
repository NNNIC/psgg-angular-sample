import { ElementRef, Renderer2 } from '@angular/core';
import { StateProgramService } from './../state-program.service';
import { StateManager } from '../state-manager';

export class Sub001Control extends StateManager {

  // Imprement here!
  sp: StateProgramService;

  private el:   ElementRef;
  private img:  any;
  private pos:  any;
  private rend: Renderer2;
  private parent: any;
  private left: number;

  SetupSp(svc) { this.sp = svc; }

  init() {

    const app = this.sp.appComponent;

    this.left = 1;

    this.el = app.el;
    this.rend = app.rend;
    this.img  = this.rend.createElement('img');
    this.rend.setAttribute(this.img, 'src'  , app.hertimg);
    this.rend.setAttribute(this.img, 'width', '100px');


    this.rend.setStyle(this.img, 'position', 'absolute');
    this.rend.setStyle(this.img, 'top', '0px' );
    this.rend.setStyle(this.img, 'left', this.left.toString() + 'px' );
    this.rend.appendChild(this.el.nativeElement, this.img);
  }
  update() {
      this.left += 10;
      this.rend.setStyle(this.img, 'left', this.left.toString() + 'px' );
      this.rend.setAttribute(this.img, 'width', this.left.toString() + 'px' );
  }

  isDone(): boolean {
      if (this.left > 800) {
          this.rend.removeChild(this.el.nativeElement, this.img);
          return true;
      }
      return false;
  }

  destroy() {

  }


    public start() {
        this.Goto(this.S_START);
    }
    //  states           [SYN-G-GEN OUTPUT START] indent(4) $/./$
//  psggConverterLib.dll converted from Sub001Control.xlsx. 
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


    //       [SYN-G-GEN OUTPUT END]

}
