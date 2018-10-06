import { Sub0003aControl } from './Sub0003aControl';
import { Sub003bControl } from './Sub003bControl';
import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class Sub003ControlSub extends StateManager {
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
}
