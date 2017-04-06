function writeTweet()
{
//  console.log("in writeTweet");
  var randIndex, sentence;
  var intro = ["Have you ever noticed", "It's funny how", "Why is it okay that", "Why is it that"];
  var body = ["the government", "the weather", "cafeteria food", "Chico State", "your cellphone", "your mom"];
  var end = ["is plotting against you.", "is spying on you.", "is controling your mind."];
  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence += " " + body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence += " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
