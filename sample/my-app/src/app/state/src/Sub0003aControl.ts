import { StateProgramService } from './../state-program.service';
import { StateManager } from '../state-manager';

export class Sub0003aControl extends StateManager {

  // Imprement here!
  sp: StateProgramService;

  public ct: CanvasRenderingContext2D;
  public center_x = 100;
  public center_y = 100;
  public radius   = 100;
  public step     = 1;

  angle: number;

  SetupSp(svc) { this.sp = svc; }

  draw_init() {
    this.angle = 0;
    this.ct.lineWidth = 8;
  }

  draw_update() {
    let a = this.angle;
    if (a > 360) { a = 360; }

    const ct = this.ct;
    ct.strokeStyle = 'red';
    ct.beginPath();
    ct.arc(this.center_x, this.center_y, this.radius, 0, (Math.PI * 2) * (a / 360) );
    ct.stroke();
    this.angle += this.step;
  }

  draw_wait() {
    return (this.angle - this.step) > 360;
  }

    public start() {
        this.Goto(this.S_START);
    }
    // [SYN-G-GEN OUTPUT START] indent(4) $/./$
//  psggConverterLib.dll converted from Sub0003aControl.xlsx. 
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


    // [SYN-G-GEN OUTPUT END]

}
