function randColor() {
	var colors = ['#028090']
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

document.getElementById("patternDisplay").style.backgroundImage = pattern.toDataUrl()

$('.accentBG').css('background-color', sessionRandColor)
$('.accentColor').css('color', sessionRandColor)
$('.card').css('background-color', sessionRandColor)