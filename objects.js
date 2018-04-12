var playlist = {
  weezer: "Islands in the sun",
  kanye: "Golddigger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  console.log(playlist);
  return playlist;
}

console.log(playlist);