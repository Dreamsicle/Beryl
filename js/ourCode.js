function randString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=`~\|][{}';/<>.,/";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var pattern = GeoPattern.generate(randString(), {color: '#028090'})

document.getElementById("patternDisplay").style.backgroundImage = pattern.toDataUrl()

function randColor() {
	var colors = ['#093518', '#360B11', '#29041D']
	return colors[Math.floor(Math.random() * colors.length)]
}

function randString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=`~\|][{}';/<>.,/";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var sessionRandColor = randColor()

var pattern = GeoPattern.generate(randString(), {color: sessionRandColor})

document.getElementById("thisIsJustForThePattern").style.backgroundImage = pattern.toDataUrl()