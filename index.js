console.log('hello Peter');

/* 
Tamagotchi creature starts out with these traits:
Birth date/time: 
Age : 0
Name: Input by user
Life Stage: Baby
Hunger: 100 (on a scale from 0 - full to 150 - starved to death)
Humor: 50 (On a scale from 0 - foul mood to 150 - euphoric)
Tiredness: 20 (On a scale from 0 - hyperactive to 150 - asleep)
Wisdom: 0 (On a scale from 0 - newborn to unlimited - Yoda)

When creature is a baby,
User has two possible actions:
    Feed (decreases hunger to 0, increases humor to 150)
    Sing Lullaby (increases humor a lot, nap resets tiredness to 0)
Wisdom remains unchanged
Hunger increases (possible death)
Humor decreases
Tiredness increases


When age gets to 1, Life Stage updates to Kid
User has two possible actions:
    Feed (decreases hunger a lot, increases humor a little, increases tiredness a little)
    Play (increases hunger a little, increases humor a lot, increases tiredness a little, increases wisdom a little)
Hunger increases (possible death)
Humor decreases
Tiredness increases - naps automatic at 150

When age gets to 10, Life Stage updates to Teen
User has three possible actions:
    Feed (decreases hunger a little, increases humor a little)
    Teach (increases hunger a little, increases humor a little, increases wisdom a lot)
    Play (increases hunger a little, increases humor a lot, increases wisdom a lot)
Hunger increases (possible death)
Humor decreases
Tiredness increases (naps automatic at 150)

When age gets to 18, Life Stage updates to Adult
User has four possible actions:
    Socialize (decreases hunger a little, increases humor a lot, increases wisdom a little)
    Enjoy Culture (decreases hunger a little, increases humor a lot, increases wisdom a lot)
    Go to work (decreases hunger a lot, decreases humor a little, increases wisdom a little)
    Romance (increases hunger a lot, increases humor a lot, increases wisdom a lot)
Hunger increases (possible death)
Humor decreases (possible death)
Tiredness increases (sleep automatic)

When age gets to 70, Life Stage updates to Old Creature
User has two possible actions:
    Play bridge (decreases hunger a little, increases humor a little)
    Travel (increases hunger a little, increases humor a lot)
Hunger increases (possible death)
Humor decreases (possible death)
Tiredness increases (sleep automatic)

When age gets to 100, Life Stage updates to Dead
User has one possible action:
    Choose Epitaph (Text input, becomes a gravestone for download, gravestone goes into cemetary - local or online?)
    Score calculation: Sum humor from each life stage, add wisdom. Life score is written on the epitaph.
    Humor gets reset at each life stage, wisdom accumulates throughout life.

Changing state: +/- is a bit random, or based upon other combinations of traits. 'Your baby was too tired to eat, it spat everything up!'
Time must elapse: methos advances time and adjusts hunger, humor, tiredness
When you open browser, look up tamagotchi age with Date.now(), figure out current state by calling 'advance time' until time is correct
Say it takes a month to win the game, then a day IRL is 3 yrs in the game

*/