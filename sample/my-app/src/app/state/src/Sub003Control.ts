import { Sub0003aControl } from './Sub0003aControl';
import { Sub003bControl } from './Sub003bControl';
import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class Sub003Control extends StateManager {

  // Imprement here!
  sp: StateProgramService;
  count = 0;
  b_stop: boolean;

  ct: CanvasRenderingContext2D;


  SetupSp(svc) { this.sp = svc; }

  sub003_init() {

    this.b_stop = false;
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;
    const canvas_el = rend.createElement('canvas');
    rend.setAttribute(canvas_el, 'id', 'cv1');
    rend.setAttribute(canvas_el, 'width',  '800px');
    rend.setAttribute(canvas_el, 'height', '600px');
    rend.setStyle(canvas_el, 'backgroundColor', '#a9a9a9' );
    rend.setStyle(canvas_el, 'position', 'absolute');
    rend.setStyle(canvas_el, 'left',   '200px');
    rend.setStyle(canvas_el, 'bottom', '200px');
    rend.appendChild(el.nativeElement, canvas_el);

    this.ct = (<HTMLCanvasElement>canvas_el).getContext('2d');

    //
    const sc = new Sub003bControl();
    sc.ct = this.ct;
    sc.width = 800;
    sc.height = 600;
    sc.color  = '#aaaaaa';
    sc.start();
    this.sp.addStateManager(sc);
  }
  change_values() {
    this.b_stop = this.count > 500;
  }

  br_godraw(st) {
    if (!this.b_stop) {
      this.SetNext(st);
    }
  }

  br_notAbove(st) {
    if (!this.HasNextState()) {
      this.SetNext(st);
    }
  }

  kick_draw() {
    const sc = new Sub0003aControl();
    sc.ct = this.ct;
    sc.center_x = this.sp.get_random_int(800);
    sc.center_y = this.sp.get_random_int(600);
    sc.radius   = 1 + this.sp.get_random_int(50);
    sc.start();

    this.sp.addStateManager(sc);

    this.count ++;
  }

  wait_isdone() {
    return true;
  }


    public start() {
        this.Goto(this.S_START);
    }

    // [SYN-G-GEN OUTPUT START] indent(4) $/./$
//  psggConverterLib.dll converted from Sub003Control.xlsx. 
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


    // [SYN-G-GEN OUTPUT END]
}

