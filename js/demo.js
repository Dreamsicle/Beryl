function randColor() {
	var colors = ['#ffbc42', '#e67216', '#028090', '#20BF55', '#C5283D', '#930E67', '#596058', '#A4A8A3']
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

document.getElementById("header").style.backgroundImage = pattern.toDataUrl()

$('.accentBG').css('background-color', sessionRandColor)
$('.accentColor').css('color', sessionRandColor)
$('.card').css('background-color', sessionRandColor)