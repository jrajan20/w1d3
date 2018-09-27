var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
  for (var print in this.playlists)
  {
    var list = this.playlists[print];

    console.log(list.id + ": " + list.name + " - " + list.tracks.length + " tracks");
  }

  },
  printTracks : function () {
  for (var print1 in this.tracks)
  {
    var listT = this.tracks[print1];

    console.log(listT.id + ": " + listT.name + " by " + listT.artist + " (" + listT.album + ")");
  }

  },
  printPlaylists: function () {
  for (var print in this.playlists)
  {
    var list = this.playlists[print];

    console.log(list.id + ": " + list.name + " - " + list.tracks.length + " tracks");
  }

  },
  printPlaylist: function (playlistId) {

 
    var listT = this.playlists[playlistId];

    console.log('log 1', listT.id + ": " + listT.name + " - " + listT.tracks.length + " tracks");


  if (playlistId === "p01")
  {
    
    var listT1p = this.tracks.t01
    var listT2p = this.tracks.t02

    console.log('log 2', listT1p.id + ": " + listT1p.name + " by " + listT1p.artist + " (" + listT1p.album + ")");
    console.log('log 3', listT2p.id + ": " + listT2p.name + " by " + listT2p.artist + " (" + listT2p.album + ")");
  }
  else if (playlistId === "p02")
  {
   var listT3p = this.tracks.t03
   
    console.log('log 4', listT3p.id + ": " + listT3p.name + " by " + listT3p.artist + " (" + listT3p.album + ")");
  }

},
addTrackToPlaylist : function (trackId, playlistId) {

var listP = this.playlists[playlistId];
 listP.tracks.push(trackId);
 return this.playlists;
},
 uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
addTrack: function (name, artist, album) {

  var newTr = {
  id: this.uid(),
  name: name,
  artist: artist,
  album: album
  }

 this.tracks[newTr.id] = newTr;
 return this.tracks;
},
addPlaylist: function (name) {

  var newPlay = {
  id: this.uid(),
  name: name,
  tracks: ['t04']
  }

 this.playlists[newPlay.id] = newPlay;
 return this.playlists;
}

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

 

console.log(library.printPlaylists());

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



console.log(library.printTracks());
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)



console.log(library.printPlaylist("p01"));

// adds an existing track to an existing playlist


console.log(library.addTrackToPlaylist("t03","p01"));



// generates a unique id
// (use this for addTrack and addPlaylist)*/



// adds a track to the library



console.log(library.addTrack("jai",'My mom','my family'))

// adds a playlist to the library



console.log(library.addPlaylist("WRAPGOD"))


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}