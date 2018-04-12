var playlist = {
  weezer: "Islands in the sun",
  kanye: "Golddigger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  console.log(playlist);
  return playlist;
}
updatePlaylist(playlist, "Passenger", "All the little lights");
console.log(playlist);