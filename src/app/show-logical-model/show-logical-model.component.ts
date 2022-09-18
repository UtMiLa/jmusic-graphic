import { Component, Input, OnInit } from '@angular/core';
import { PhysicalModel, viewModelToPhysical, StandardMetrics } from '../../../../jmusic-model/src/physical-view';
import { ScoreViewModel } from '../../../../jmusic-model/src/logical-view';

@Component({
  selector: 'app-show-logical-model',
  templateUrl: './show-logical-model.component.html',
  styleUrls: ['./show-logical-model.component.scss']
})
export class ShowLogicalModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _model: ScoreViewModel;
  @Input()
  public get model(): ScoreViewModel {
    return this._model;
  }
  public set model(value: ScoreViewModel) {
    this._model = value;
    // if (this.scoreCanvas) this.render();
    this.physical = viewModelToPhysical(this._model, this.settings)
  }

  settings =
  new StandardMetrics({
      staffLineWidth: 6,
      staffLengthOffset: 10,
    });

  physical: PhysicalModel;

}
