import { Component, Input, OnInit } from '@angular/core';
import { ScoreDef, StaffDef } from '../../../../jmusic-model/src/model';
import { ScoreViewModel, scoreModelToViewModel } from '../../../../jmusic-model/src/logical-view';
import { TimeMap } from '../../../../jmusic-model/src/tools/time-map';

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
    this.logicalModel = scoreModelToViewModel(value);/*{
      staves: value.staves.map(staff => staffModelToViewModel(staff, new TimeMap()))
     };*/
     //console.log(this.logicalModel);

    //this.logicalModel =  scoreModelToViewModel({staves: value.staves});
    //console.log(this.logicalModel);


  }

  logicalModel: ScoreViewModel;

}
