import { TdRender } from './TdRender';
import { TdBallControl } from './TdBallControl';
import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class TdMainControlSub extends StateManager {
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
}
