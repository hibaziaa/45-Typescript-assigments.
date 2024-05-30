// Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//writing a function.
function make_album(
  artistName: string,
  albumTitle: string,
  numOfTracks?: number
) {
  //storing it in an object.
  let music_album: {
    artistName: string;
    albumTitle: string;
    numOfTracks?: number;
  } = {
    artistName: artistName,
    albumTitle: albumTitle,
  };
  // passing in if_statement for the optional parameter.
  if (numOfTracks !== undefined) {
    music_album.numOfTracks = numOfTracks;
  }
  //returning the function by giving object's name
  return music_album;
}
//storing every invoking in different variables and printing it.
let album1 = make_album("Asim Azhar", "Bematlab");
console.log(album1);
let album2 = make_album("Karan Aujla", "Making Memories");
console.log(album2);
let album3 = make_album("Talhah Anjum", "Open Letters");
console.log(album3);
//one that contain optional parameter too.
let album4 = make_album("Talhah Yunus", "Sukoon", 10);
console.log(album4);
