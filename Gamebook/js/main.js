var yolo = prompt('Are you ready to play?').toUpperCase();

if (yolo === "YES") {
  alert('Great! Lets continue');
}
if (yolo !== 'YES' || yolo === 'NO') {
  alert("I didn't understand your choice. Hit YES. Refresh Page to Start again!");
  document.write("I didn't understand your choice. Hit yes or no. Refresh Page to Start again!")
  throw new Error();
}
var user = prompt("You wake up in a forest. You forget your name but remember you have the power of sonic speed. An Enemy reveals himself in front of you. Mr. Eggman! Do you choose to fight? Or do you choose to run?").toUpperCase();
switch (user) {
  case 'RUN':
    if (user === 'RUN') {
      alert("You are running from the Eggman, which is a very intelligent choice. As you must collect power rings to enhance your strength to defeat Eggman. But you must go fast otherwise Mr. Eggman shall catch up to you and capture you.")
    }
    break;
  case 'FIGHT':
    if (user === 'FIGHT') {
      alert("Mr. Eggman is too powerful to defeat. He captures you but you manage to escape him and run. In order to defeat him, you must collect power rings to enhance your strength. You must go fast otherwise Mr. Eggman shall catch up to you and capture you.")
    }
    break;
  default:
    if (user !== 'RUN' || user !== 'FIGHT') {}
    alert("I didn't understand your choice. Hit Run or Fight. Refresh Page to Start again!");
    throw new Error();
}
alert("You must go now find the rings. Use the controls to guide you to finding them. (Forward, Backward, Left, Right)")
var a = prompt('Where shall you go?').toUpperCase();
if (a === 'BACKWARD' || a === 'RIGHT') {
alert('Cannot go that way! Left or Forward!')
throw new Error();
}
if (a === 'FORWARD') {

  var b = prompt('You see a house in front of you. It seems there might be something important in there? Shall we open the door?').toUpperCase();
  if (b === 'OPEN DOOR' || b === 'YES') {
    alert('The door seems to be locked. Maybe you should look around.')
  } else {
    alert('I didnt understand your choice. Hit yes or Open door. Refresh to Play Again.')
    throw new Error();
  }


  var c = prompt('There seems to be a path ahead of you. Shall you go left and check it out?').toUpperCase();
  if (c === 'LEFT' || c === 'YES') {
    alert('Here beholds an old lady. She asks you if you want the key to the house.')
  } else {
    alert('I didnt understand your choice. Hit yes or go left. Refresh to Play Again.')
    throw new Error();
  }
  var d = prompt('What shall you say?').toUpperCase();
  if (d === 'YES') {
    alert("The only way to get the key is if you answer the old lady’s riddle.")
  } else if (d === "NO") {
    alert('Oh no, You did not grab the key fast enough so Mr. Eggman came up and captured you! Refresh page to start over!')
    throw new Error();
  } else {
    alert('I didnt understand your choice. Hit yes or go left. Refresh to Play Again.')
    throw new Error();
  }
  var e = prompt('What dress can never be worn?').toUpperCase();
  if (e === 'ADDRESS') {
    alert('Correct, You now behold the key')
  } else {
    alert('Wrong. To answer again, refresh page')
    throw new Error();
  }
var f = prompt('You see a path to your right! Where shall you go?').toUpperCase();
  if (f === 'RIGHT') {
    alert('You are back to where you were! Where shall you go now?')
  } else {
    alert('I did not understand this command, you can only go right! Refresh page to start over!')
    throw new Error();
  }
  var g = prompt('Maybe you should go back to the house? but what direction is it?').toUpperCase();
  if (g === 'FORWARD') {
    alert('You see the same house but it looks like the key the old lady gave you fits in the key slot, lets see if it does')
  } else {
    alert('Wrong. To answer again, refresh page')
    throw new Error();
  }
  var h = prompt('What are you going to do?').toUpperCase();
  if (h === 'OPEN DOOR') {
    alert('You unlock the door with your key and enter house. You find the missing ring! BUT OH NO!!!! Mr. Eggman has caught up to you, but you behold the power ring to defeat him. It is time to fight!')
  }
  var i = prompt('Mr. Eggman goes for an attack, Shall you choose to (Block or Hit)').toUpperCase();
  if (i === 'BLOCK') {
    alert('Good move, Mr Eggman has tripped on himself and knocked himself out. YOU WIN!')
  } else if (i === 'HIT') {
    alert('You hit Eggman before he could hit you. He is now knocked out. YOU WIN!')
  } else {
    alert('Wrong. To answer again, refresh page')
    throw new Error();
  }
} else if (a === 'LEFT') {

  var c = prompt('There seems to be a path ahead of you. Shall you go left and check it out?').toUpperCase();
  if (c === 'LEFT' || c === 'YES') {
    alert('Here beholds an old lady. She asks you if you want the key to the house.')
  } else {
    alert('I didnt understand your choice. Hit yes or go left. Refresh to Play Again.')
    throw new Error();
  }
  var d = prompt('What shall you say?').toUpperCase();
  if (d === 'YES') {
    alert("The only way to get the key is if you answer the old lady’s riddle.")
  } else if (d === "NO") {
    alert('Oh no, You did not grab the key fast enough so Mr. Eggman came up and captured you! Refresh page to start over!')
    throw new Error();
  } else {
    alert('I didnt understand your choice. Hit yes or go left. Refresh to Play Again.')
    throw new Error();
  }
  var e = prompt('What dress can never be worn?').toUpperCase();
  if (e === 'ADDRESS') {
    alert('Correct, You now behold the key')
  } else {
    alert('Wrong. To answer again, refresh page')
    throw new Error();
  }
  }
 var f = prompt('You see a path to your right! Where shall you go?').toUpperCase();
if (f === 'RIGHT') {
  alert('You are back to where you were! Where shall you go now?')
} else {
  alert('I did not understand this command, you can only go right! Refresh page to start over!')
  throw new Error();
}
var g = prompt('Maybe you should go back to the house? but what direction is it?').toUpperCase();
if (g === 'FORWARD') {
  alert('You see the same house but it looks like the key the old lady gave you fits in the key slot, lets see if it does')
} else {
  alert('Wrong. To answer again, refresh page')
  throw new Error();
}
var h = prompt('What are you going to do?').toUpperCase();
if (h === 'OPEN DOOR') {
  alert('You unlock the door with your key and enter house. You find the missing ring! BUT OH NO!!!! Mr. Eggman has caught up to you, but you behold the power ring to defeat him. It is time to fight!')
}
var i = prompt('Mr. Eggman goes for an attack, Shall you choose to (Block or Hit)').toUpperCase();
if (i === 'BLOCK') {
  alert('Good move, Mr Eggman has tripped on himself and knocked himself out. YOU WIN!')
    throw new Error();
} else if (i === 'HIT') {
  alert('You hit Eggman before he could hit you. He is now knocked out. YOU WIN!')
    throw new Error();
} else {
  alert('Wrong. To answer again, refresh page')
  throw new Error();
}
while(i === 'BLOCK' || i === 'HIT') {
alert('You win, why are you still on this?');
}
