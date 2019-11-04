export class testControl {

    //#region start of manager part
    public curstatename: string;
    public curstatecmt: string;

    public curstate;
    public nextstate;
    public candidatestate;
    public bNoWait;

    public Goto(func) {
        this.nextstate = func;
    }

    public Update() {
        while (true) {
            this.bNoWait = false;
            this._update();
            if (this.bNoWait) {
                continue;
            } else {
                break;
            }
        }
    }
    private _update() {
        let bFirst = false;
        if (this.nextstate != null) {
            this.curstate  = this.nextstate;
            this.nextstate = null;
            bFirst = true;
        }

        if (this.curstate != null) {
            this.curstate(bFirst);
        }

         if (bFirst) {
            console.log(this.curstatename);
         }
    }

    public CheckState(func): boolean {
        return this.curstate === func;
    }

    // Candidate and go
    public SetNext(func) {
        this.candidatestate = func;
    }
    public GoNext() {
        this.nextstate = this.candidatestate;
        this.candidatestate = null;
    }
    public HasNextState(): boolean {
        return this.candidatestate != null;
    }

    // non wait update
    public NoWait() {
        this.bNoWait = true;
    }
    //#endregion  end of manager part

    public start() {
        this.Goto(this.S_START);
    }
    public is_end() {
        return this.CheckState(this.S_END);
    }
    //                             [PSGG OUTPUT START]   $/^[SE]_/$
//  psggConverterLib.dll converted from testControl.xlsx.    psgg-file:..\..\..\..\doc\testControl.psgg
    /*
        S_0001
        new state
    */
    S_0001(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_0001';
            // this.curstatecmt  = 'new state';
            alert("!!");
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_END);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_END
    */
    S_END(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_END';
            // this.curstatecmt  = '';
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }
    /*
        S_START
    */
    S_START(bFirst: boolean) {
        if (bFirst) {
            this.curstatename = 'S_START';
            // this.curstatecmt  = '';
        }
        if (!this.HasNextState()) {
            this.SetNext(this.S_0001);
        }
        if (this.HasNextState()) {
            this.GoNext();
        }
    }


    //                             [PSGG OUTPUT END]
}
