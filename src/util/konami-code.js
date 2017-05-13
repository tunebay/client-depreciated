export default (userEvent) => {
  const KonamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let userSequence = [];
  let position = 0;
  document.addEventListener('keydown', (e) => {
    if (e.keyCode !== KonamiCode[position]) {
      userSequence = [];
      position = 0;
    } else {
      userSequence.push(e.keyCode);
      position += 1;
      if (userSequence.length === 10) {
        userEvent();
        userSequence = [];
        position = 0;
      }
    }
  });
};
