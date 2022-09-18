import { Component, OnInit } from '@angular/core';
import { VertVarSizeGlyphs } from '../../../../jmusic-model/src/physical-view';
import { ScoreViewModel } from '../../../../jmusic-model/src/logical-view';
import { NoteType, NoteDirection, StaffDef, ClefType } from '../../../../jmusic-model/src/model';


const lineWidth = 10;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scoreModel = {
          initialClef: { clefType: ClefType.G, line: -2 },
          //initialKey: { accidental: -1, count: 4 },
          initialKey: { accidental: 1, count: 7 },
          seq: {
              elements: 'c\'1 <c\' d\'>4 e\'2 e\'\'8 <b\' d\'\'>64 <a\' c\'\'>32 <g\' b\'>16'
          }
      } as StaffDef;

  inputJson = { elements: [
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
      glyph: 'noteheads.s0',
      position: { x: 50, y: -1 * lineWidth }
    },
    {
      glyph: 'noteheads.s2',
      position: { x: 70, y: 2 * lineWidth }
    },
    {
      glyph: 'flags.d3',
      position: { x: 70, y: 2 * lineWidth - 25 }
    },
    { "element": 101, "length": -25, "position": { "x": 70, "y": 20 } },
] }

  inputText: string;

  logicalModel: ScoreViewModel = {staves:[{
    objects: [
        {
            position: 1,
            clefType: ClefType.G,
            line: -2
        },
        {
            positions: [-6],
            noteType: NoteType.NWhole,
            direction: NoteDirection.Up
        },
        {
            positions: [-5, -3, 0],
            noteType: NoteType.NQuarter,
            direction: NoteDirection.Up
        },
        {
            positions: [-4, -2, 0, 3],
            noteType: NoteType.NHalf,
            direction: NoteDirection.Down
        }
    ]
  }]
};

}
