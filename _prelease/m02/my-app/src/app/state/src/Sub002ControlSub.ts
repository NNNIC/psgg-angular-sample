import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class Sub002ControlSub extends StateManager {
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
}
