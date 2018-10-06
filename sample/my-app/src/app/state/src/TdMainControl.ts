import { TdRender } from './TdRender';
import { TdBallControl } from './TdBallControl';
import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class TdMainControl extends StateManager {

  // Imprement here!
  sp: StateProgramService;
  ct: CanvasRenderingContext2D;

  SetupSp(svc) { this.sp = svc; }



  initialize() {

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

    for ( let i = 0; i < 100; i++) {
      for (let j = 0; j < 30; j++) {
        const ballsc = new TdBallControl();
        ballsc.x = 10 + 12 * i;
        ballsc.y = 10 + 12 * j;
        ballsc.step = 0.1 + 0.3 * j;
        ballsc.start();

        this.sp.addStateManager(ballsc);
      }
    }
  }

  render_begin() {
    TdRender.clear();
    TdRender.add(1, (ct: CanvasRenderingContext2D)  => {
      ct.fillStyle = '#aaaaaa';
      ct.fillRect(0, 0, 800, 600);
    });
  }

  ball_update() {
    // this.updater.update();
  }

  render() {
    const ct = this.ct;
    this.sp.stateUpdate.callOnce = () => {
      TdRender.Renderer(this.ct);
    };
  }

    public start() {
        this.Goto(this.S_START);
    }
    // [SYN-G-GEN OUTPUT START] indent(4) $/./$
//  psggConverterLib.dll converted from TdMainControl.xlsx. 
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


    // [SYN-G-GEN OUTPUT END]
}
