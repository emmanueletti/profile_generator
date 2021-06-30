const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const responses = {};

rl.question(`What's your name? Nicknames are also acceptable :)  `, (answer) => {
  responses.name = answer;
  // nested question 2
  rl.question(`What's an activity you like doing?  `, (answer) => {
    responses.activity = answer;
    rl.question(`What do you listen to while doing that?  `, (answer) => {
      responses.activityMusic = answer;

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)  `, (answer) => {
        responses.favMeal = answer;

        rl.question(`What's your favourite thing to eat for that meal?  `, (answer) => {
          responses.favFood = answer;

          rl.question(`Which sport is your absolute favourite?  `, (answer) => {
            responses.favSport = answer;

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!  `, (answer) => {
              responses.superpower = answer;
              const { name, activity, activityMusic, favMeal, favFood, favSport, superpower } = responses;
              console.log(
                `My name is ${name}, and I love ${activity} esp to ${activityMusic} playing. My fav meal of the day is ${favMeal} and I love eating ${favFood}. I'm a huge fan of ${favSport}. And my super power is ${superpower}`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});
