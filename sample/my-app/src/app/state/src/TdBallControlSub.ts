import { StateManager } from './../state-manager';
import { TdRender } from './TdRender';

export class TdBallControlSub extends StateManager {
  // Imprement here!

  width  = 10;
  height = 10;

  x = 0;
  y = 100;
  step = 1;


  xmax = 800;

  initialize() {

  }

  move() {
    const x = this.x;
    const y = this.y;
    const w = this.width;
    const h = this.height;
    TdRender.add( TdRender.MID, (ct: CanvasRenderingContext2D) => {
      ct.fillStyle = '#ffff00';
      ct.fillRect( x, y, w, h);
    } );
    this.x += this.step;
  }

  is_done() {
    return (this.x - this.step > this.xmax);
  }
}
