import { StateProgramService } from './../state-program.service';
import { StateManager } from '../state-manager';

export class Sub0003aControlSub extends StateManager {
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
}
