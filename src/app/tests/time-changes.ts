import { NoteType, NoteDirection, StaffDef, ClefType, Time, SimpleSequence } from '../../../../jmusic-model/src/model';


export const meterModel = {
  staves: [{
         initialClef: { clefType: ClefType.G, line: -2 },
         initialMeter: { count: 4, value: 4 },
         initialKey: { accidental: -1, count: 0 },
         voices:[
           {
             noteDirection: NoteDirection.Up,
             content: new SimpleSequence("c'8 c'8 c'8 c'8 c'8 c'8 c'8 c'8 \\meter 6/8 c'8 c'8 c'8 c'8 c'8 c'8 \\meter 3/4 c'8 c'8 c'8 c'8 c'8 c'8" //
           )},
         ]
     } as StaffDef,

   ]
 };
