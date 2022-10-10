import { beamModel } from './../tests/beaming';
import { physBeaming } from './../tests/physical-beaming';
import { physBasics } from './../tests/physical-basics';
import { koral41 } from './../tests/koral41';
import { accidentalTest } from './../tests/accidentalDisplacement';
import { Component, OnInit } from '@angular/core';
import { HorizVarSizeGlyphs, VertVarSizeGlyphs } from '../../../../jmusic-model/src/physical-view';
import { FlagType, ScoreViewModel } from '../../../../jmusic-model/src/logical-view';
import { NoteType, NoteDirection, StaffDef, ClefType, Time } from '../../../../jmusic-model/src/model';


const lineWidth = 5;



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateModelView() {
    this.scoreModel = {
      ...this.scoreModel
    }
  }


  scoreModelChords = beamModel;

  scoreModel = koral41;

  inputJson = physBeaming;

  inputText: string;

  logicalModel: ScoreViewModel = {staves:[{
    timeSlots: [
      {
          absTime: Time.newAbsolute(0, 1),
          clef: {
              position: 1,
              clefType: ClefType.G,
              line: -2
          },
          meter: {
            meterText: ['3', '4']
          },
          notes: [

        {
            positions: [-6],
            noteType: NoteType.NWhole,
            direction: NoteDirection.Up
        },
      ]
    },
    {
      absTime: Time.newAbsolute(1, 1),

      beamings: [{
        beams: [{ fromIdx: 0, toIndex: 1, level: 0 }],
        noteRefs: [
          {absTime: Time.newAbsolute(1, 1), uniq: '0-0-1'},
          {absTime: Time.newAbsolute(9, 8), uniq: '0-0-2'}
        ]
       }],
      notes: [
        {
            positions: [-4, -2, 1],
            noteType: NoteType.NQuarter,
            direction: NoteDirection.Up,
            flagType: FlagType.Beam,
            uniq: '0-0-1'
        },
      ]
    },
    {
        absTime: Time.newAbsolute(9, 8),
        accidentals: [{
          position: -3,
          alteration: 1,
          displacement: 0
        }],
          ties: [
          { position: -5, direction: NoteDirection.Up },
          { position: -3, direction: NoteDirection.Up },
          { position: 0, direction: NoteDirection.Down }
        ],
        notes: [
        {
            positions: [-5, -3, 0],
            noteType: NoteType.NQuarter,
            direction: NoteDirection.Up,
            flagType: FlagType.Beam,
            uniq: '0-0-2'
        },
      ]
    },
    {
        absTime: Time.newAbsolute(5, 4),
        bar: true,
        notes: [

        {
            positions: [-8, -4, -3, -2, -1],
            noteType: NoteType.NHalf,
            direction: NoteDirection.Down
        },
        {
          positions: [0, 2, 3, 4, 7],
          noteType: NoteType.NHalf,
          direction: NoteDirection.Up
      }
    ]
    },
    {
      absTime: Time.newAbsolute(7, 4),
      notes: [

      {
          positions: [],
          noteType: NoteType.RHalf,
          direction: NoteDirection.Down
      }
    ]
    }
  ]
}]};

}





