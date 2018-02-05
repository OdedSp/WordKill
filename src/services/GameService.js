import { words } from "./words";

var targets;
// var words = ['cook', 'computer', 'phone', 'couch', 'shirt', 'tree', 'keys', 'garbage', 'wind', 'write']

function getPlayerObjs(names) {
  var playerObjs = []
  var shuffledNames = shuffle(names.slice(0, names.length))
  return new Promise((resolve, reject) => {
    shuffledNames.forEach((name, i) => {
      playerObjs.push({
        id: i,
        name: shuffledNames[i],
        isAlive: true,
        killWord: getKillWord(),
        target: getTarget(i, shuffledNames),
        deathtoll: 0
      })
    });
    var shuffledPlayerObjs = shuffle(playerObjs)
    resolve(playerObjs)
  })
}

function getTarget(i, names) {
  if (i === names.length - 1) {
    return names[0]
  } else {
    return names[i + 1]
  }
}

function getKillWord() {
  return words.splice(Math.floor(Math.random() * words.length), 1)[0]
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

export default {
  getPlayerObjs
}
