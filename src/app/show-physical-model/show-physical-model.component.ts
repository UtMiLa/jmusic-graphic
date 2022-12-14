import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PhysicalHorizVarSizeElement, PhysicalModel, FixedSizeGlyphs, HorizVarSizeGlyphs, VertVarSizeGlyphs, renderOnCanvas } from '../../../../jmusic-model/src/physical-view';
import { emmentalerCodes } from '../../../../jmusic-model/src/font/emmentaler-codes';

@Component({
  selector: 'app-show-physical-model',
  templateUrl: './show-physical-model.component.html',
  styleUrls: ['./show-physical-model.component.scss']
})
export class ShowPhysicalModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('scoreCanvas')
  scoreCanvas: ElementRef<HTMLCanvasElement>;

  private _model: PhysicalModel;
  @Input()
  public get model(): PhysicalModel {
    return this._model;
  }
  public set model(value: PhysicalModel) {
    this._model = value;
    if (this.scoreCanvas) this.render();
  }

  @Input()
  scale: number = 1;

  @Input()
  staffCount: number = 1;

  ngAfterViewInit() {
    //console.log(this.scoreCanvas);
    setTimeout(() => { // otherwise does not load fint in Chrome
      this.render();
    }, 10);

  }

  get canvasHeight(): number {
    return 85 * this.scale * this.staffCount;
  }

  render() {
    if (this.model) {
      try {
        renderOnCanvas(this.model, this.scoreCanvas.nativeElement, {
          offsetX: 10,
          offsetY: 40,
          scaleX: this.scale,
          scaleY: this.scale
        });

      } catch (e) {
        console.error(e);
      }
    }
  }

}

