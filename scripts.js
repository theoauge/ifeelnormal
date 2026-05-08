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
	replaceChildAll();
	homePage();
});

//combine with window listener
homeButton.addEventListener("click", function(event){
	replaceChildAll();
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

class Narrative {
	
	constructor(srcFolder, img) {
		this.folder = srcFolder;

		this.title = srcFolder.replaceAll('_', ' ').replaceAll('/', '').replaceAll('.','').replace('narratives', '');
		this.title = ToTitleCase(this.title);

		this.imgLink = img;
		this.tracks = [];
		this.mp3;
	}
}

narrativesButton.addEventListener("click", function(event){
	replaceChildAll();

	const diaryPath = './narratives/diary_of_a_college_hunk/';
	const diary = new Narrative(diaryPath,diaryPath + "cover_art.png");

	const hubPath = './narratives/hub_51/';
	const hub51 = new Narrative(hubPath, hubPath + "cover_art.jpg");

	const sixFlagsPath = './narratives/six_flags_great_america/';
	const sixFlags = new Narrative(sixFlagsPath, sixFlagsPath + "cover_art.jpg");

	const albumsDiv = document.createElement('div');
	albumsDiv.style.display = "flex";

	const playbackDiv = document.createElement('div');
	playbackDiv.id = "playback";

	const article1 = document.createElement('article');

	const title = document.createElement('h3');
	title.id = "audio_title";

	article1.appendChild(title);

	var audioplayer = document.createElement('audio');
	audioplayer.id = "audio_player";
	audioplayer.controls = true;
	audioplayer.textContent = "Your browser does not support audio files.";

	article1.appendChild(audioplayer);
	playbackDiv.appendChild(article1);

	const image = document.createElement('img');
	image.id = "audio_img";

	const article2 = document.createElement('article');
	article2.appendChild(image);
	playbackDiv.appendChild(article2);

	main.appendChild(albumsDiv);
	main.appendChild(playbackDiv);

	document.getElementById("subtitle").innerHTML = "narratives";

	var diaryImg = document.createElement('img');
	diaryImg.src = diary.imgLink;
	diaryImg.style.width = '20%';
	diaryImg.title = diary.title;
	//diaryImg.addEventListener("click", updateSelectedNarrative(diary));
	albumsDiv.append(diaryImg);

	var hub51Img = document.createElement('img');
	hub51Img.src = hub51.imgLink;
	hub51Img.style.width = '20%';
	hub51Img.title = hub51.title;
	//hub51Img.addEventListener("click", updateSelectedNarrative(hub51));
	albumsDiv.append(hub51Img);

	var sixFlagsImg = document.createElement('img');
	sixFlagsImg.id = "sixFlagsImg";
	sixFlagsImg.src = sixFlags.imgLink;
	sixFlagsImg.style.width = '20%';
	sixFlagsImg.title = sixFlags.title;
	albumsDiv.append(sixFlagsImg);
});


function updateSelectedNarrative(narr) {
	document.getElementById('audio_title').textContent = narr.title;
	document.getElementById('audio_player').src = narr.mp3;
	document.getElementById('audio_img').src = narr.imgLink;
	document.getElementById('audio_img').alt = narr.title + " thumbnail";
}

function imageFullSize() {
	console.log("test");
}

//loads collages page
collagesButton.addEventListener("click", function(event){
	replaceChildAll();

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
	replaceChildAll();
	sayhiPage.hidden = false;
	document.getElementById("subtitle").innerHTML = "say hi";
});

function replaceChildAll() {
	main.replaceChildren();
	main.hidden = false;
	sayhiPage.hidden = true;
}


function changeFont(fontName) {
	document.documentElement.style.setProperty('--custom-font', fontName);
}

function changeColor(t, g1, g2, a) {
	document.documentElement.style.setProperty('--custom-text', t);
	document.documentElement.style.setProperty('--custom-gradient-1', g1);
	document.documentElement.style.setProperty('--custom-gradient-2', g2);
	document.documentElement.style.setProperty('--custom-accent', a);
}


