class Narrative {
    constructor(title,author,sourceFolder,image,text,tracks){
        this.title = title;
        this.author = author;
        this.sourceFolder = sourceFolder;
        this.image = image;
        this.text = text;
        this.tracks = tracks;
        
        this.currentTrack = tracks[0];
        this.loading = false;
        this.active = false;
    }

    getImageURL(){
        return this.sourceFolder + this.image;
    }

    getTextURL(){
        return this.sourceFolder + this.text;
    }

    getCurrentTrackURL(){
        let trackName = this.currentTrack.replace(':', '');
        return this.sourceFolder + "MP3s/" + trackName + '.mp3';
    }

    toggleActive() {
        this.active = true;
    }

    toggleInactive() {
        this.active = false;
    }

    nextTrack() {
        if (this.loading) {return;}

        this.loading = true;

        if (this.tracks.indexOf(this.currentTrack) < this.tracks.length - 1) {
            this.currentTrack = this.tracks[this.tracks.indexOf(this.currentTrack) + 1];
            updateAudioPlayer();
        }

        this.loading = false;
    }

    previousTrack() {
        if (this.loading) {return};

        this.loading = true;

        if (this.tracks.indexOf(this.currentTrack) > 0) {
            this.currentTrack = this.tracks[this.tracks.indexOf(this.currentTrack) - 1];
            updateAudioPlayer();
        }

        this.loading = false;
    }
};

const narratives = 
[
    new Narrative(
        "Diary of a College Hunk", //title
        "Keefer Schoon", //author
        "narratives/diary_of_a_college_hunk/", //sourceFolder
        "cover_art.png", //imageURL
        "Diary of a College Hunk.pdf", //textURL
        [ //track list
            "Introduction",
            "The Eggman",
            "Culdesack Island House",
            "(The Next Time)",
            "College Spunks Hort",
            "Harold Leroy",
            "Uncle T",
            "Honorable Mentions",
            "College Spunks The Final Spunk",
            "Closing"]
        ), //track list

    new Narrative(
        "Hub 51", 
        "Keefer Schoon", 
        "narratives/hub_51/",
        "cover_art.jpg",
        "", //no textURL
        [
            "Introduction",
            "Preface",
            "Training, Pt. I",
            "Training, Pt. II",
            "Training, Pt. III",
            "Closing"
        ]
    ),

    new Narrative(
        "Six Flags Great America", 
        "Keefer Schoon", 
        "narratives/six_flags_great_america/",
        "cover_art.jpg",
        "",
        [
            "Introduction",
            "Preface",
            "[Sober] American Eagle",
            "[Sober] Food Court",
            "[Sober] X-Flight",
            "SFGA Status & Statuses",
            "[Tipsy] Always Meet Your Heroes",
            "[Drunk] Batman: The Ride",
            "[Faded] Justice League: Battle for Metropolis",
            "Closing"
        ]
    )
]

function updateTrackList() {
    
    document.getElementById('trackList').replaceChildren();

    var heading = document.createElement('h5');
    heading.innerHTML = "Tracks";
    trackList.appendChild(heading);

    var narr = narratives.find((element) => element.active == true);
	narr.tracks.forEach(element => {
		var temp = document.createElement('p');
        var count = narr.tracks.indexOf(element) + 1;
		temp.innerHTML = count + ": " + element;
		trackList.appendChild(temp);
	});
}

function updateAudioPlayer() {
    narr = narratives.find((element) => element.active == true);

    var audio = document.getElementById('audio_player');
    audio.src = narr.getCurrentTrackURL();
    console.log(narr.getCurrentTrackURL());

    var title = document.getElementById("audio_title");
    title.innerHTML = narr.title;

    var author = document.getElementById("audio_author");
    author.innerHTML = "By " + narr.author;

    var trackTitle = document.getElementById('audio_track_title');
    trackTitle.innerHTML = '"' + narr.currentTrack + '"';

    var img = document.getElementById('audio_img');
    img.src = narr.getImageURL();
}

function changeActiveNarrative(narr) {
    if (narr.active == true) {return;}

    narratives.forEach(element =>{
        element.active = false;
    });

    narr.active = true;

    updateTrackList();
    updateAudioPlayer();
}

