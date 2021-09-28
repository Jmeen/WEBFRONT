const christmasEve = new Date(2021, 11, 25, 00, 00, 00);
const dDay = document.querySelector(".dDay")


function calculateDate() {
  const now = new Date();
  const ddayms = christmasEve - now;
  const ddayDay = Math.floor(ddayms / (1000 * 60 * 60 * 24)) + 1;
  const ddayHour = Math.floor((ddayms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const ddayMin = Math.floor((ddayms % (1000 * 60 * 60)) / (1000 * 60))
  const ddaysec = Math.floor((ddayms % (1000 * 60)) / (1000))

  dDay.innerText = `${ddayDay}d ${ddayHour}h ${ddayMin}m ${ddaysec}s`
}
calculateDate();
setInterval(calculateDate, 1000)