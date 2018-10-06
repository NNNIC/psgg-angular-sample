import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class Sub003bControlSub extends StateManager {

  // Imprement here!

  sp: StateProgramService;

  public ct: CanvasRenderingContext2D;
  public width: number;
  public height: number;
  public color:  string;

  SetupSp(svc) { this.sp = svc; }

  clear_all() {
    this.ct.fillStyle = this.color;
    this.ct.fillRect(0, 0, this.width, this.height);
  }

}
