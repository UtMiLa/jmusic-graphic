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

  scoreModel = {
          initialClef: { clefType: ClefType.G, line: -2 },
          initialMeter: { count: 6, value: 8, upBeat: Time.newSpan(1, 8) },
          initialKey: { accidental: -1, count: 3 },
          voices:[
            {
              noteDirection: NoteDirection.Up,
              content: {
              elements: "bes'8 bes'4 bes'8 aes'8 g'8 f'8 ees'4 g'8 f'4 bes8 g'8. g'16 aes'8 bes'8 c''8 bes'8 aes'4. g'4 bes'8"
               //'c\'\'8 c\'\'2. e\'\'1 r4 g\'\'4'
            }},
              {
              noteDirection: NoteDirection.Down,
              content: {
              elements: "d'8 ees'4 g'8 ees'4 d'8 ees'8 bes8 c'8 d'4 bes8 ees'2. ees'4 f'8 ees'4 ees'8"
              //'c\'8 c\'4 c\'8 c\'8 c\'4 c\'4 <c\' d\'>4 e\'2.. e\'\'8 <b\' d\'\'>64 <a\' c\'\'>32 <g\' b\'>16'
          }},
          ]
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
      position: { x: 90, y: 2 * lineWidth }
    },
    {
      glyph: 'flags.d3',
      position: { x: 90, y: 2 * lineWidth - 25 }
    },
    {
      glyph: 'dots.dot',
      position: { x: 100, y: 2.5 * lineWidth }
    },
    {
      glyph: 'rests.2',
      position: { x: 110, y: 2 * lineWidth }
    },
    { "element": 101, "length": -25, "position": { "x": 90, "y": 2 * lineWidth } },
    {
      element: HorizVarSizeGlyphs.Bar,
      position: { x: 130, y: 0 },
      length: 4 * lineWidth
  },

] }

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
            positions: [-8, -4, -2, 0, 3, 7],
            noteType: NoteType.NHalf,
            direction: NoteDirection.Down
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
