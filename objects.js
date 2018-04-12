var playlist = {
  weezer: "Islands in the sun",
  kanye: "Golddigger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle });
}