import { ElementRef, Renderer2 } from '@angular/core';
import { StateProgramService } from './../state-program.service';
import { StateManager } from '../state-manager';

export class Sub001ControlSub extends StateManager {
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
}
