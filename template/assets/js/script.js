// for (i = 1; i <= 10; i++) {
//   console.log("Hello, world " + i);
// }

// let numArray = [];
// for (i = 1; i <= 10; i++) {
//   const total = numArray.push(i);
//   console.log(total);
// }
// console.log(i);

// let array = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
// for (i of array) {
//   console.log(i);
// }

// let apple1 = { color: "red", size: "big" };
// let apple2 = { color: "green", size: "small" };
// let apple3 = { color: "yellow", size: "big" };
// let apples = [apple1, apple2, apple3];
// for (i of apples) {
//   console.log(i.size);
// }

// let retArray = [];
// for (i = 1; i <= 100; i++) {
//   retArray.push("img_" + i + ".jpg");
// }
// console.log(retArray);

// let words = [
//   "hallo",
//   "Auto",
//   "Waschmaschine",
//   "Schrank",
//   "Katze",
//   "Beispiel",
//   "Eltern",
//   "Fenster",
//   "Geburtstag",
//   "Himmel",
//   "schwimmen",
//   "Zeitung",
// ];
// const suchen = () => {
//   for (i = 0; i < words.length; i++) {
//     if (
//       Number(document.querySelector("#zahl").value) == Number(words[i].length)
//     ) {
//       document.querySelector("#druck").innerHTML += `${words[i]} <br>`;
//       console.log(i);
//     }
//   }
// };
// const add = () => {
//   words.push(document.querySelector("#neu").value);
// };

// const imageArray = () => {
//   let retArray = [];

//   for (i = 1; i <= 100; i++)
//     if (i < 10) {
//       retArray.push("img_00" + i + ".jpg");
//     } else if (i > 9 && i < 100) {
//       retArray.push("img_0" + i + ".jpg");
//     } else if (i >= 100) {
//       retArray.push("img_" + i + ".jpg");
//     }
//   return retArray;
// };
// console.log(imageArray());

// const loop = () => {
//   const oos = document.querySelector("#zahl").value;
//   if (oos % 2 == 0) {
//     document.querySelector("#print").textContent = "L";
//     for (i = 1; i <= oos; i++) {
//       document.querySelector("#print").textContent += "o";
//     }
//     document.querySelector("#print").textContent += "p";
//   } else if (oos % 2 != 0) {
//     document.querySelector("#print").textContent = "L";
//     for (i = 1; i <= oos; i++) {
//       if (i % 2 == 0) {
//         document.querySelector("#print").textContent += "O";
//       } else if (i % 2 != 0) {
//         document.querySelector("#print").textContent += "o";
//       }
//     }
//     document.querySelector("#print").textContent += "p";
//   }
// };

// let numArr = [5, 22, 15, 100, 55];
// for (num of numArr) {
//   console.log(num);
//   for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//       const result = Number(num) / Number(i);
//       document.querySelector(
//         "#numArray"
//       ).innerHTML += `${num} is dividable by ${i}. The result is ${result} <br>`;
//     }
//   }
// }

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;
const textTeile = [];
const trennen = () => {
  for (let i = 0; i < text.length; i += 100) {
    const teil = text.slice(i, i + 100);
    const teilNummer = Math.floor(i / 100) + 1;
    const teilMitNummer = `${teil} - ${teilNummer} of gesamte-Nachrichten`;
    textTeile.push(teilMitNummer);
  }
  return textTeile;
};
console.log(trennen(text));
