import { StateProgramService } from './../state-program.service';
import { StateManager } from './../state-manager';

export class Sub003bControl extends StateManager {

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

    public start() {
        this.Goto(this.S_START);
    }
    // [SYN-G-GEN OUTPUT START] indent(4) $/./$
//  psggConverterLib.dll converted from Sub003bControl.xlsx. 
    /*
        S_CLEARALL
        全削除
    */
    S_CLEARALL(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_CLEARALL';
            // this.curstatecmt  = '全削除';
        }
        this.clear_all();
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
        S_START
        開始
    */
    S_START(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_START';
            // this.curstatecmt  = '開始';
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_CLEARALL);
        }
        this.NoWait();
        if (this.HasNextState()) {
            this.GoNext();
        }
    }


    // [SYN-G-GEN OUTPUT END]

}
