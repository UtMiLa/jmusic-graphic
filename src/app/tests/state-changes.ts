import { NoteType, NoteDirection, StaffDef, ClefType, Time } from '../../../../jmusic-model/src/model';


export const stateChanges = {
  staves: [{
         initialClef: { clefType: ClefType.G, line: -2 },
         initialMeter: { count: 4, value: 4 },
         initialKey: { accidental: -1, count: 3 },
         voices:[
           {
             noteDirection: NoteDirection.Up,
             content: {
             elements: "c''1 \\key b \\major c''1"
           }},
             {
             noteDirection: NoteDirection.Down,
             content: {
             elements: "c'4 \\clef alto c'4 c'4 c'4 c'1"
         }},
         ]
     } as StaffDef,
     {
       initialClef: { clefType: ClefType.F, line: 2 },
       initialMeter: { count: 4, value: 4 },
       initialKey: { accidental: -1, count: 3 },
       voices:[
         {
           noteDirection: NoteDirection.Up,
           content: {
           elements: "c4 c4 c4 c4"
         }},
           {
           noteDirection: NoteDirection.Down,
           content: {
           elements: "c,1 c,1"
       }},
       ]
   } as StaffDef
   ]
 };
