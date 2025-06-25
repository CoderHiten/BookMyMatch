const matches = [
  {
    teams: "India vs New Zealand",
    date: "2025-06-28",
    time: "14:00",
    stadium: "Wankhede Stadium",
    location: "Mumbai, India"
  },
  {
    teams: "England vs Australia",
    date: "2025-06-29",
    time: "13:30",
    stadium: "Trent Bridge",
    location: "Nottingham, England"
  },
  {
    teams: "South Africa vs West Indies",
    date: "2025-06-30",
    time: "16:00",
    stadium: "Old Trafford",
    location: "Manchester, England"
  },
  {
    teams: "India vs Sri Lanka",
    date: "2025-07-01",
    time: "19:00",
    stadium: "Wankhede Stadium",
    location: "Mumbai, India"
  },
  {
    teams: "Pakistan vs New Zealand",
    date: "2025-07-02",
    time: "15:00",
    stadium: "Sky Stadium",
    location: "Wellington, New Zealand"
  },
  {
    teams: "Bangladesh vs South Africa",
    date: "2025-07-03",
    time: "18:00",
    stadium: "Wanderers Stadium",
    location: "Johannesburg, South Africa"
  },
  {
    teams: "England vs India",
    date: "2025-07-04",
    time: "14:00",
    stadium: "Lord's Cricket Ground",
    location: "London, England"
  },
  {
    teams: "Australia vs Sri Lanka",
    date: "2025-07-05",
    time: "19:00",
    stadium: "Melbourne Cricket Ground",
    location: "Melbourne, Australia"
  },
  {
    teams: "Pakistan vs Bangladesh",
    date: "2025-07-06",
    time: "15:30",
    stadium: "Old Trafford",
    location: "Manchester, England"
  },
  {
    teams: "India vs West Indies",
    date: "2025-07-07",
    time: "17:30",
    stadium: "HPCA Stadium",
    location: "Dharamshala, India"
  },
  {
    teams: "South Africa vs Australia",
    date: "2025-07-08",
    time: "16:00",
    stadium: "Trent Bridge",
    location: "Nottingham, England"
  },
  {
    teams: "England vs New Zealand",
    date: "2025-07-09",
    time: "18:00",
    stadium: "Lord's Cricket Ground",
    location: "London, England"
  },
  {
    teams: "India vs Pakistan",
    date: "2025-07-10",
    time: "19:30",
    stadium: "Narendra Modi Stadium",
    location: "Ahmedabad, India"
  },
  {
    teams: "Sri Lanka vs West Indies",
    date: "2025-07-11",
    time: "13:00",
    stadium: "Wanderers Stadium",
    location: "Johannesburg, South Africa"
  }
];

const nextMatch = matches[0];
const matchTime = new Date(nextMatch.date+"T"+nextMatch.time);
const msec = matchTime - Date.now();
const TimeLeft = new Date(msec);

document.getElementById("match-teams").innerHTML = nextMatch.teams;
document.getElementById("match-datetime").innerHTML = nextMatch.date +", "+ nextMatch.time;
const timeBox = document.getElementById("time-left");

setInterval(function () {
  const now = Date.now();
  const timeLeft = matchTime - now;

  if (timeLeft <= 0) {
    timeBox.textContent = "Match has started!";
    return;
  }

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeBox.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
