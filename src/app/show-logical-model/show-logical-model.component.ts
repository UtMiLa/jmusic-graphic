import { Component, Input, OnInit } from '@angular/core';
import { PhysicalModel, viewModelToPhysical, StandardMetrics } from '../../../../jmusic-model/src/physical-view';
import { ScoreViewModel } from '../../../../jmusic-model/src/logical-view';
import { Cursor } from '../../../../jmusic-model/src/physical-view/physical/cursor';

@Component({
  selector: 'app-show-logical-model',
  templateUrl: './show-logical-model.component.html',
  styleUrls: ['./show-logical-model.component.scss']
})
export class ShowLogicalModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _cursor?: Cursor;
  @Input()
  public get cursor(): Cursor {
    return this._cursor;
  }
  public set cursor(value: Cursor) {
    this._cursor = value;
    if (this._model) try {
      this.physical = viewModelToPhysical(this._model, this.settings, this.cursor);
    } catch (e) {
      console.log(e);
      this._cursor = undefined;
    }
  }

  private _model: ScoreViewModel;
  @Input()
  public get model(): ScoreViewModel {
    return this._model;
  }
  public set model(value: ScoreViewModel) {
    this._model = value;
    // if (this.scoreCanvas) this.render();
    if (this._model) try {
      this.physical = viewModelToPhysical(this._model, this.settings, this.cursor);
      console.log('model', this._model, this.physical);

    } catch (e) {
      console.log(e);
      this._model = undefined;
    }
  }

  @Input()
  staffCount: number = 1;

  settings =
  new StandardMetrics({
      staffLineWidth: 6,

    });

  physical: PhysicalModel;

}
