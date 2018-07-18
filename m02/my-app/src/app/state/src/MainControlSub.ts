import { TdMainControl } from './TdMainControl';
import { Sub003Control } from './Sub003Control';
import { Sub002Control } from './Sub002Control';
import { StateProgramService } from './../state-program.service';
import { StateManager } from '../state-manager';
import { Sub001Control } from './Sub001Control';

export class MainControlSub extends StateManager {
  // Imprement here!

  sp: StateProgramService;
  SetupSp(svc) { this.sp = svc; }

  br_0001(st) {  if (this.sp.curEvent === 'test_1') {    this.SetNext(st);    } }
  br_0002(st) {  if (this.sp.curEvent === 'test_2') {    this.SetNext(st);    } }
  br_0003(st) {  if (this.sp.curEvent === 'test_3') {    this.SetNext(st);    } }
  br_0004(st) {  if (this.sp.curEvent === 'test_4') {    this.SetNext(st);    } }
  br_0005(st) {  if (this.sp.curEvent === 'test_5') {    this.SetNext(st);    } }
  br_0006(st) {  if (this.sp.curEvent === 'test_6') {    this.SetNext(st);    } }
  br_0007(st) {  if (this.sp.curEvent === 'test_7') {    this.SetNext(st);    } }
  br_0008(st) {  if (this.sp.curEvent === 'test_8') {    this.SetNext(st);    } }
  br_0009(st) {  if (this.sp.curEvent === 'test_9') {    this.SetNext(st);    } }
  br_0010(st) {  if (this.sp.curEvent === 'test_10') {    this.SetNext(st);    } }

  test0001() {
    console.log('test001 program');
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;

    const target = el.nativeElement;
    rend.setStyle(target, 'color', 'red');
    rend.listen(target, 'click', () => alert('ok'));
  }

  test0002() {
    console.log('test002 program');
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;

    const div = rend.createElement('div');
    const text = rend.createText('Hello world!');

    rend.appendChild(div, text);
    rend.appendChild(el.nativeElement, div);
  }

  test0003() {
    console.log('test003 program');
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;

    const target = document.getElementById('hoge');
    const span = rend.createElement('span');
    const text = rend.createText('Insert text by id');
    if (target != null) {
        rend.appendChild(span, text);
        rend.appendChild(target, span);
    }
  }
  test0004() {
    console.log('test004 program');
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;

    const parent = document.getElementById('hoge');
    if (parent != null && parent.firstChild != null) {
        rend.removeChild(parent, parent.firstChild);
    }
  }
  test0005() {
    console.log('test005 program');
    const app = this.sp.appComponent;
    const el = app.el;
    const rend = app.rend;

    const img = rend.createElement('img');

    rend.setAttribute(img, 'src'  , app.hertimg);
    rend.setAttribute(img, 'width', '100px');
    rend.appendChild(el.nativeElement, img);
  }

  test0006() {
    console.log('test006 program');
    const sc = new Sub001Control();
    sc.start();
    sc.SetupSp(this.sp);
    this.sp.addStateManager(sc);
  }

  test0007() {
    console.log('test007 program');
    const app = this.sp.appComponent;

    const el = app.el;
    const rend = app.rend;
    const canvas_el = rend.createElement('canvas');
    rend.setAttribute(canvas_el, 'id', 'cv1');
    rend.setAttribute(canvas_el, 'width',  '200px');
    rend.setAttribute(canvas_el, 'height', '200px');
    rend.setStyle(canvas_el, 'backgroundColor', '#ffffff00' );
    rend.setStyle(canvas_el, 'position', 'absolute');
    rend.setStyle(canvas_el, 'left',   '200px');
    rend.setStyle(canvas_el, 'bottom', '200px');
    rend.appendChild(el.nativeElement, canvas_el);

    const ctx = (<HTMLCanvasElement>canvas_el).getContext('2d');
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(0, 0, 80, 80);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(40, 40, 40, 0, (Math.PI * 2) * (3 / 4));
    ctx.stroke();
  }

  test0008() {
    console.log('test008 program');
    const sc = new Sub002Control();
    sc.SetupSp(this.sp);
    sc.start();
    this.sp.addStateManager(sc);
  }

  test0009() {
    console.log('test009 program');
    const sc = new Sub003Control();
    sc.SetupSp(this.sp);
    sc.start();
    this.sp.addStateManager(sc);
  }

  test0010() {
    console.log('test010 program');
    const sc = new TdMainControl();
    sc.SetupSp(this.sp);
    sc.start();
    this.sp.addStateManager(sc);
  }
}
