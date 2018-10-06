import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class Sub002Control extends StateManager {

  // Imprement here!
  sp: StateProgramService;
  ct: CanvasRenderingContext2D;
  angle: number;
  step:  number;

  SetupSp(svc) { this.sp = svc; }

  sub002_init() {
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;
    const canvas_el = rend.createElement('canvas');
    rend.setAttribute(canvas_el, 'id', 'cv1');
    rend.setAttribute(canvas_el, 'width',  '400px');
    rend.setAttribute(canvas_el, 'height', '400px');
    rend.setStyle(canvas_el, 'backgroundColor', '#ffffff00' );
    rend.setStyle(canvas_el, 'position', 'absolute');
    rend.setStyle(canvas_el, 'left',   '200px');
    rend.setStyle(canvas_el, 'bottom', '200px');
    rend.appendChild(el.nativeElement, canvas_el);

    this.ct = (<HTMLCanvasElement>canvas_el).getContext('2d');
    this.ct.fillStyle = '#ff0000';
    this.ct.fillRect(0, 0, 200, 200);
  }

  draw_circle_init() {
    const ct = this.ct;
    ct.lineWidth = 8;
    this.angle = 0;
    this.step  = 1;
  }

  draw_circle_update() {

    let a: number = this.angle;
    if (a > 360) { a = 360; }

    const ct = this.ct;
    ct.fillStyle = '#ffffff';
    ct.beginPath();
    ct.arc(100 , 100, 80, 0, (Math.PI * 2) * (a / 360) );
    ct.stroke();
    this.angle += this.step;

  }

  draw_circle_wait(): boolean {
    return (this.angle - this.step > 360);
  }


    public start() {
        this.Goto(this.S_START);
    }

    // [SYN-G-GEN OUTPUT START] indent(4)  $/./$
//  psggConverterLib.dll converted from Sub002Control.xlsx. 
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
