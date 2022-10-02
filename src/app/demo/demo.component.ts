import { physBeaming } from './../tests/physical-beaming';
import { physBasics } from './../tests/physical-basics';
import { koral41 } from './../tests/koral41';
import { accidentalTest } from './../tests/accidentalDisplacement';
import { Component, OnInit } from '@angular/core';
import { HorizVarSizeGlyphs, VertVarSizeGlyphs } from '../../../../jmusic-model/src/physical-view';
import { ScoreViewModel } from '../../../../jmusic-model/src/logical-view';
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


  scoreModelChords = accidentalTest;

  scoreModel = koral41;

  inputJson = physBeaming; /*{ elements: [
    {
        element: VertVarSizeGlyphs.Line,
        position: { x: 0, y: 4 * lineWidth },
        length: 130
    },
    {
        element: VertVarSizeGlyphs.Line,
        position: { x: 0, y: 3 * lineWidth },
        length: 130
    },
    {
        element: VertVarSizeGlyphs.Line,
        position: { x: 0, y: 2 * lineWidth },
        length: 130
    },
    {
        element: VertVarSizeGlyphs.Line,
        position: { x: 0, y: lineWidth },
        length: 130
    },
    {
        element: VertVarSizeGlyphs.Line,
        position: { x: 0, y: 0 },
        length: 130
    },
    {
      glyph: 'clefs.G',
        position: { x: 20, y: 1 * lineWidth  }
    },
    {
      glyph: 'three',
      //scale: 2,
        position: { x: 50, y: 2 * lineWidth  }
    },
    {
      glyph: 'four',
      //scale: 2,
        position: { x: 50, y: 0  }
    },
    {
      glyph: 'noteheads.s0',
      position: { x: 70, y: -1 * lineWidth }
    },
    {
      glyph: 'noteheads.s2',
      position: { x: 90, y: -1 * lineWidth }
    },
    {
      glyph: 'noteheads.s2',
      position: { x: 110, y: 2 * lineWidth }
    },
    {
      glyph: 'flags.d3',
      position: { x: 110, y: 2 * lineWidth - 25 }
    },
    {
      glyph: 'dots.dot',
      position: { x: 120, y: 2.5 * lineWidth }
    },
    {
      glyph: 'rests.2',
      position: { x: 130, y: 2 * lineWidth }
    },
    { "element": 101, "length": 25, "position": { "x": 90+7, "y": -1 * lineWidth } },
    { "element": 101, "length": -25, "position": { "x": 110, "y": 2 * lineWidth } },
    { "element": VertVarSizeGlyphs.Tie, "length": 10, direction: NoteDirection.Up, "position": { "x": 80, "y": -1 * lineWidth - 3 } },
    {
      element: HorizVarSizeGlyphs.Bar,
      position: { x: 150, y: 0 },
      length: 4 * lineWidth
  },

] }*/

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
        ties: [
          { position: -5, direction: NoteDirection.Up },
          { position: -3, direction: NoteDirection.Up },
          { position: 0, direction: NoteDirection.Down }
        ],
        accidentals: [{
          position: -3,
          alternation: 1,
          displacement: 0
        }],
        notes: [
        {
            positions: [-5, -3, 0],
            noteType: NoteType.NQuarter,
            direction: NoteDirection.Up
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





