import { Component, Input, OnInit } from '@angular/core';
import { StaffDef } from '../../../../jmusic-model/src/model';
import { modelToViewModel, ScoreViewModel } from '../../../../jmusic-model/src/logical-view';

@Component({
  selector: 'app-show-model',
  templateUrl: './show-model.component.html',
  styleUrls: ['./show-model.component.scss']
})
export class ShowModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _model: StaffDef;
  @Input()
  public get model(): StaffDef {
    return this._model;
  }
  public set model(value: StaffDef) {
    this._model = value;
    this.logicalModel = {
      staves: [ modelToViewModel(value)]
     };
  }

  logicalModel: ScoreViewModel;

}
