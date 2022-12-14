import { NoteType, NoteDirection, StaffDef, ClefType, Time, SimpleSequence } from '../../../../jmusic-model/src/model';


export const koral41 = {
  staves: [{
         initialClef: { clefType: ClefType.G, line: -2 },
         initialMeter: { count: 6, value: 8, upBeat: Time.newSpan(1, 8) },
         initialKey: { accidental: -1, count: 3 },
         voices:[
           {
             noteDirection: NoteDirection.Up,
             content: new SimpleSequence(
              "a'8 c''4. bes'8 r8 bes'8 ees''8. ees''16 d''8 c''8 g'8 aes'8 bes'8 c''8 aes'8 g'4 g'8 c''4 bes'8 aes'8 c'8 f'8 ees'4. d'4. ees'4.~ ees'4"
              //'c\'\'8 c\'\'2. e\'\'1 r4 g\'\'4'
           )},
             {
             noteDirection: NoteDirection.Down,
             content: new SimpleSequence(
              "ees'8 ees'4. d'8 r8 bes'8 ees'4 aes'8 g'4 ees'8 f'8 c'8 d'8 ees'4 des'8 c'4 des'8 c'4 c'8 bes2. bes4.~ bes4"
             //'c\'8 c\'4 c\'8 c\'8 c\'4 c\'4 <c\' d\'>4 e\'2.. e\'\'8 <b\' d\'\'>64 <a\' c\'\'>32 <g\' b\'>16'
         )},
         ]
     } as StaffDef,
     {
       initialClef: { clefType: ClefType.F, line: 2 },
       initialMeter: { count: 6, value: 8, upBeat: Time.newSpan(1, 8) },
       initialKey: { accidental: -1, count: 3 },
       voices:[
         {
           noteDirection: NoteDirection.Up,
           content: new SimpleSequence(
            "c'8 a4. bes8 r8 bes8 bes4 b8 c'4 c'8 f8 g8 b8 c'4 ees8 ees4 e8 f4 aes8 g4. aes4. g4.~ g4"
         )},
           {
           noteDirection: NoteDirection.Down,
           content: new SimpleSequence( "f8 f4. bes,8 r8 bes8 g4 f8 ees4 c8 d8 ees8 f8 c4 bes,8 aes,4.~ aes,4 f,8 bes,2. ees,4.~ ees,4"
       )},
       ]
   } as StaffDef
   ]
 };
