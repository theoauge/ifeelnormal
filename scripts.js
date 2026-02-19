const homeButton = document.getElementById("homeButton");
const homePage = document.getElementById("home");
const narrativesButton = document.getElementById("narrativesButton");
const narrativesPage = document.getElementById("narratives");
const collagesButton = document.getElementById("collagesButton");
const collagesPage = document.getElementById("collages");
const sayhiButton = document.getElementById("sayhiButton");
const sayhiPage = document.getElementById("sayhi");



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

function hide(element) {
	element.display = none;
}

function show(element) {
	element.display = block;
}

//combine with window listener
homeButton.addEventListener("click", function(event){
	replaceChildAll();
	homePage.hidden = false;
	document.getElementById("header").innerHTML = "welcome to normal";
});

narrativesButton.addEventListener("click", function(event){
	replaceChildAll();


	var source_folder = "./narratives/diary_of_a_college_hunk/"; //next in array
	var source_title = "Diary Of A College Hunk"; //parse from folder name
	var source_img = source_folder + "cover_art.png"; //find only .png in folder

	source_folder = "./narratives/arthur_the_rat/";
	source_title = "Arthur The Rat";
	source_img = source_folder + "arthur_photo.jpg";


	const playbackDiv = document.createElement('div');
	playbackDiv.id = "playback";

	const article1 = document.createElement('article');

	const title = document.createElement('h3');
	title.textContent = source_title;

	article1.appendChild(title);

	var audioplayer = document.createElement('audio');
	audioplayer.controls = true;
	audioplayer.src = "./narratives/arthur_the_rat/Arthur.mp3";
	audioplayer.textContent = "Your browser does not support audio files.";

	article1.appendChild(audioplayer);
	playbackDiv.appendChild(article1);

	const image = document.createElement('img');
	image.src = source_img;
	image.alt = source_title + " thumbnail";

	const article2 = document.createElement('article');
	article2.appendChild(image);
	playbackDiv.appendChild(article2);

	narrativesPage.appendChild(playbackDiv);

	document.getElementById("header").innerHTML = "narratives";
	
});

//loads collages page
collagesButton.addEventListener("click", function(event){
	replaceChildAll();


	/*const fs = require('fs');

	const narrPath = './narratives';

	fs.readdir(narrPath, (err, files) => {

		if (err) {
			console.error('Error reading directory:', err);
			return;
		}
		
		files.forEach(file => {
			console.log(file);
		});
	});*/

	//repeat for all files
	const source = "collages/football_player_ad.png";
	const source_title = "Football Player Ad";

	const frame = document.createElement('article');
	frame.className = "frame";

	const image = document.createElement('img');
	image.src = source;
	image.alt = source_title
	frame.appendChild(image);

	const title = document.createElement('h4');
	title.className = "collage_title";
	title.textContent = source_title;
	frame.appendChild(title);

	collagesPage.appendChild(frame);

	document.getElementById("header").innerHTML = "collages";
});


sayhiButton.addEventListener("click", function(event){
	replaceChildAll();
	sayhiPage.hidden = false;
	document.getElementById("header").innerHTML = "say hi";
});

window.addEventListener('load', function(){
	replaceChildAll();
	homePage.hidden = false;
	document.getElementById("header").innerHTML = "welcome to normal";
});

function replaceChildAll() {
	homePage.hidden = true;
	narrativesPage.replaceChildren();
	collagesPage.replaceChildren();
	sayhiPage.hidden = true;
}


function changeFont(fontName) {
	document.documentElement.style.setProperty('--custom-font', fontName);
}

function changeColor(t, b, a) {
	document.documentElement.style.setProperty('--custom-text', t);
	document.documentElement.style.setProperty('--custom-background', b);
	document.documentElement.style.setProperty('--custom-accent', a);
}

