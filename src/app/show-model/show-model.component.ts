import { Component, Input, OnInit } from '@angular/core';
import { ScoreDef, StaffDef } from '../../../../jmusic-model/src/model';
import { staffModelToViewModel, ScoreViewModel } from '../../../../jmusic-model/src/logical-view';

@Component({
  selector: 'app-show-model',
  templateUrl: './show-model.component.html',
  styleUrls: ['./show-model.component.scss']
})
export class ShowModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _model: ScoreDef;
  @Input()
  public get model(): ScoreDef {
    return this._model;
  }
  public set model(value: ScoreDef) {
    this._model = value;
    this.logicalModel = {
      staves: value.staves.map(staff => staffModelToViewModel(staff))
     };
  }

  logicalModel: ScoreViewModel;

}
