const homeButton = document.getElementById("homeButton");
const main = document.getElementById("home");
const narrativesButton = document.getElementById("narrativesButton");
const collagesButton = document.getElementById("collagesButton");
const sayhiButton = document.getElementById("sayhiButton");
const sayhiPage = document.getElementById("sayhi");
const narrativesImg = document.getElementsByClassName("album");
const body = document.getElementById("body");


function autoGrow(element) {
	element.rows = "auto";
	
	element.style.height = "auto";
	
	element.style.height = element.scrollHeight + "px";
	
	//does not work
	if (element.scrollHeight == 51)
	{
		element.rows = "1";
	}
	
}

function oneRow(textarea) {
	textarea.rows = "1";
	console.log("test");
}

function joke() {
	alert("nice try")
}

window.addEventListener('load', function(){
	main.replaceChildren();
	homePage();
});

//combine with window listener
homeButton.addEventListener("click", function(event){
	main.replaceChildren();
	homePage();
});

function homePage() {
	var keeferImg = document.createElement('img');
	keeferImg.src = 'keefer.jpg';
	keeferImg.title = "keefer";
	keeferImg.className = "keefer";
	document.getElementById('home').append(keeferImg);
	document.getElementById("subtitle").innerHTML = "ifeelnormal.com";
}

function ToTitleCase(str) {
	return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

//narratives global variable defined in narratives.js
//
narrativesButton.addEventListener("click", function(event){
	main.replaceChildren();

	const playbackDiv = document.createElement('div');
	playbackDiv.id = "playback";
	playbackDiv.className = "col-md-5";

	/*current album title*/
	const title = document.createElement('h5');
	title.id = "audio_title";

	const author = document.createElement('h6');
	author.id = "audio_author";

	const trackTitle = document.createElement('h6');
	trackTitle.id = "audio_track_title";

	playbackDiv.appendChild(title);
	playbackDiv.appendChild(author);
	playbackDiv.appendChild(trackTitle);
	
	const audioplayer = document.createElement('audio');
	audioplayer.id = "audio_player";
	audioplayer.controls = true;
	audioplayer.textContent = "Your browser does not support audio files.";

	var previousButton = document.createElement('span');
	previousButton.id = 'previousButton';	
	previousButton.className = "material-symbols-outlined";
	previousButton.innerHTML = "fast_rewind";

	previousButton.addEventListener("click", function(event) {
		narratives.find((element) => element.active == true).previousTrack();
	});

	var nextButton = document.createElement('span');
	nextButton.id = 'nextButton';
	nextButton.className = "material-symbols-outlined";
	nextButton.innerHTML = "fast_forward";

	nextButton.addEventListener("click", function(event) {
		narratives.find((element) => element.active == true).nextTrack();
	});

	playbackDiv.appendChild(audioplayer);
	playbackDiv.appendChild(previousButton);
	playbackDiv.appendChild(nextButton);
	
	var imageContainer = document.createElement('div');
	imageContainer.className = "col-md-6"
	imageContainer.id = "imgContainer";
	const image = document.createElement('img');
	image.id = "audio_img";
	
	imageContainer.appendChild(image);
	
	var testContainer = document.createElement('div');
	testContainer.appendChild(playbackDiv);
	testContainer.appendChild(imageContainer);
	main.appendChild(testContainer);
	
	document.getElementById("subtitle").innerHTML = "narratives";
	
	
	const trackList = document.createElement('div');
	trackList.id = 'trackList';
	trackList.className = 'flex-column';

	const albumsDiv = document.createElement('div');
	albumsDiv.id = 'discography';
	albumsDiv.className = 'flex-column';
	
	narratives.forEach(element => {
		var img = document.createElement('img');
		img.src = element.getImageURL();
		img.style.width = '20%';
		img.title = element.title;
		img.addEventListener("click", function(event) {
			changeActiveNarrative(element);
		});
		albumsDiv.appendChild(img);
	});

	main.appendChild(trackList);
	main.appendChild(albumsDiv);

	changeActiveNarrative(narratives[0]);
});


//loads collages page
collagesButton.addEventListener("click", function(event){
	main.replaceChildren();

	const enlargedFrame = document.createElement('article');
	enlargedFrame.hidden = true;
	enlargedFrame.id = "enlargedFrame";

	const X = document.createElement('span');
	X.id = 'X';
	X.className = 'material-symbols-outlined';
	X.innerHTML = 'cancel';

	X.addEventListener("click", function(event){
		document.getElementById('enlargedFrame').hidden = true;
	});
	enlargedFrame.appendChild(X);

	const bigImage = document.createElement('img');
	bigImage.alt = 'big image';
	bigImage.id = "bigImage";
	enlargedFrame.appendChild(bigImage);

	body.appendChild(enlargedFrame);

	//repeat for all files
	const source = "collages/football_player_ad.png";
	const source_title = "Football Player Ad";

	const frame = document.createElement('article');
	frame.className = "frame";

	const image = document.createElement('img');
	image.src = source;
	image.alt = source_title;
	frame.appendChild(image);

	const title = document.createElement('h4');
	title.className = "collage_title";
	title.textContent = source_title;

	frame.addEventListener("click", function(event){
		document.getElementById('bigImage').src = image.src;
		document.getElementById('enlargedFrame').hidden = false;
	});

	frame.appendChild(title);

	main.appendChild(frame);

	document.getElementById("subtitle").innerHTML = "collages";
});



sayhiButton.addEventListener("click", function(event){
	main.replaceChildren();
	document.getElementById("subtitle").innerHTML = "say hi";
});


function changeFont(fontName) {
	document.documentElement.style.setProperty('--custom-font', fontName);
}

function changeColor(t, g1, g2, a) {
	document.documentElement.style.setProperty('--custom-text', t);
	document.documentElement.style.setProperty('--custom-gradient-1', g1);
	document.documentElement.style.setProperty('--custom-gradient-2', g2);
	document.documentElement.style.setProperty('--custom-accent', a);
}


