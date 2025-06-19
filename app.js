// app.js
// --- Data ---
const motivationalQuotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Every rep brings you closer to your best self.",
  "Discipline is the bridge between goals and accomplishment.",
  "You are stronger than you think.",
  "Great things never come from comfort zones.",
  "Progress, not perfection.",
  "The only bad workout is the one you didn't do.",
  "Consistency is what transforms average into excellence.",
  "Your body can stand almost anything. It’s your mind you have to convince.",
  "Don’t limit your challenges. Challenge your limits.",
  "Small steps every day.",
  "You don’t have to be extreme, just consistent."
];

const mudras = [
  { name: 'Gyan Mudra', benefit: 'Focus & Intelligence', desc: 'Touch the tip of the index finger to the tip of the thumb. Keep the other three fingers straight.', icon: 'fa-brain', color: 'text-primary' },
  { name: 'Kubera Mudra', benefit: 'Wealth & Success', desc: 'Join the tips of the thumb, index, and middle fingers. Fold the other two fingers into the palm.', icon: 'fa-coins', color: 'text-warning' },
  { name: 'Hakini Mudra', benefit: 'Memory & Concentration', desc: 'Join the tips of all fingers of both hands together, keeping palms apart.', icon: 'fa-lightbulb', color: 'text-info' }
];
const meditationQuotes = [
  '“It’s not the mountain we conquer, but ourselves.” – Sir Edmund Hillary',
  '“Meditation is not a means to an end. It is both the means and the end.” – Jiddu Krishnamurti',
  '“Inhale confidence, exhale doubt.”',
  '“Stillness is where creativity and solutions are found.”',
  '“The mind is everything. What you think you become.” – Buddha'
];
const animeQuotes = [
  '“It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward.” – Rocky',
  '“If you don’t take risks, you can’t create a future!” – Monkey D. Luffy (One Piece)',
  '“I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way!” – Naruto',
  '“You have to be strong. Stronger than anyone!” – Ippo (Hajime no Ippo)',
  '“The moment you think of giving up, think of the reason why you held on so long.” – Natsu (Fairy Tail)',
  '“It’s not over until I win.” – Ippo (Hajime no Ippo)',
  '“No one starts off being amazing. You have to work at it.” – Hinata (Haikyuu!!)',
  '“The pain of discipline is far less than the pain of regret.” – Unknown'
];

// Generate 52 weeks (12 months) of workouts, cycling through the phases
const phase1 = [
  {
    type: 'Upper Body + Core',
    details: [
      'Push-ups (knee or regular) - 3x5-12',
      'Pike push-ups - 3x3-8',
      'Tricep dips (chair/couch) - 3x5-10',
      'Plank - 3x20-45s',
      'Superman holds - 3x10-15s'
    ],
    spotify: 'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg'
  },
  {
    type: 'Lower Body + Cardio Boxing',
    details: [
      'Bodyweight squats - 3x10-20',
      'Lunges (alt) - 3x6-12/leg',
      'Single-leg glute bridges - 3x5-10/leg',
      'Calf raises - 3x15-25',
      'Wall sit - 3x20-45s',
      'Boxing: Shadow boxing, jab-cross, footwork'
    ],
    spotify: 'https://open.spotify.com/track/2XU0oxnq2qxCpomAAuJY8K'
  },
  {
    type: 'Active Recovery',
    details: [
      'Stretching, light movement, yoga, foam rolling'
    ],
    spotify: 'https://open.spotify.com/track/1AhDOtG9vPSOmsWgNW0BEY'
  },
  {
    type: 'Upper Body + Core',
    details: [
      'Incline push-ups - 3x8-15',
      'Diamond push-ups - 3x3-8',
      'Wall handstand hold - 3x10-30s',
      'Reverse plank - 3x15-30s',
      'Burpees - 3x3-8'
    ],
    spotify: 'https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb'
  },
  {
    type: 'Lower Body + Boxing',
    details: [
      'Jump squats - 3x5-12',
      'Reverse lunges - 3x8-12/leg',
      'Single-leg calf raises - 3x8-15/leg',
      'Side lunges - 3x6-10/leg',
      'Glute bridges - 3x12-20',
      'Boxing: Burpee punch, jump rope, sprawls'
    ],
    spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b'
  },
  {
    type: 'Full Body Circuit',
    details: [
      'Mix of upper/lower/core, HIIT, circuit style'
    ],
    spotify: 'https://open.spotify.com/track/7GhIk7Il098yCjg4BQjzvb'
  },
  {
    type: 'Rest or Light Stretching',
    details: [
      'Rest, light stretching, walk, meditation'
    ],
    spotify: 'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ'
  }
];

const phase2 = [
  {
    type: 'Upper Body A - Strength',
    details: [
      'Standard push-ups - 4x8-15',
      'Pike push-ups - 4x6-12',
      'Archer push-ups (assisted) - 3x3-6/side',
      'Tricep dips - 4x8-15',
      'Plank to push-up - 3x5-10',
      'L-sit hold (bent knees) - 3x10-20s'
    ],
    spotify: 'https://open.spotify.com/track/1rfofaqEpACxVEHIZBJe6W'
  },
  {
    type: 'Lower Body A - Power',
    details: [
      'Jump squats - 4x8-15',
      'Bulgarian split squats - 4x6-12/leg',
      'Single-leg deadlifts - 3x5-10/leg',
      'Lateral bounds - 3x6-10/dir',
      'Single-leg wall sit - 3x15-30s/leg'
    ],
    spotify: 'https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B'
  },
  {
    type: 'Active Recovery',
    details: [
      'Stretching, light movement, yoga, foam rolling'
    ],
    spotify: 'https://open.spotify.com/track/1AhDOtG9vPSOmsWgNW0BEY'
  },
  {
    type: 'Upper Body B - Volume',
    details: [
      'Wide-grip push-ups - 4x10-18',
      'Decline push-ups - 3x6-12',
      'Handstand progression - 4x20-60s',
      'Hindu push-ups - 3x5-10',
      'Side plank - 3x20-45s/side'
    ],
    spotify: 'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg'
  },
  {
    type: 'Lower Body B - Endurance',
    details: [
      'Pistol squat progression - 4x2-8/leg',
      'Curtsy lunges - 4x8-12/leg',
      'Cossack squats - 3x5-10/leg',
      'Single-leg hip thrusts - 4x8-15/leg',
      'Broad jumps - 3x5-8'
    ],
    spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b'
  },
  {
    type: 'Full Body Circuit',
    details: [
      'Mix of advanced upper/lower/core, HIIT, circuit style'
    ],
    spotify: 'https://open.spotify.com/track/7GhIk7Il098yCjg4BQjzvb'
  },
  {
    type: 'Rest or Light Stretching',
    details: [
      'Rest, light stretching, walk, meditation'
    ],
    spotify: 'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ'
  }
];

const phase3 = [
  {
    type: 'Upper Body A - Power & Precision',
    details: [
      'One-arm push-up progression - 4x1-5/arm',
      'Handstand push-ups (wall-assisted) - 4x3-8',
      'Archer push-ups - 4x5-10/side',
      'Muscle-up progression - 4x3-8',
      'Human flag progression - 3x5-15s',
      'Planche progression - 3x10-30s'
    ],
    spotify: 'https://open.spotify.com/track/1rfofaqEpACxVEHIZBJe6W'
  },
  {
    type: 'Lower Body A - Power',
    details: [
      'Jump squats - 4x8-15',
      'Bulgarian split squats - 4x6-12/leg',
      'Single-leg deadlifts - 3x5-10/leg',
      'Lateral bounds - 3x6-10/dir',
      'Single-leg wall sit - 3x15-30s/leg'
    ],
    spotify: 'https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B'
  },
  {
    type: 'Active Recovery',
    details: [
      'Stretching, light movement, yoga, foam rolling'
    ],
    spotify: 'https://open.spotify.com/track/1AhDOtG9vPSOmsWgNW0BEY'
  },
  {
    type: 'Upper Body B - Power & Precision',
    details: [
      'Handstand push-ups (wall-assisted) - 4x3-8',
      'Planche progression - 3x10-30s',
      'Muscle-up progression - 4x3-8',
      'Human flag progression - 3x5-15s',
      'One-arm push-up progression - 4x1-5/arm'
    ],
    spotify: 'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg'
  },
  {
    type: 'Lower Body B - Endurance',
    details: [
      'Pistol squat progression - 4x2-8/leg',
      'Curtsy lunges - 4x8-12/leg',
      'Cossack squats - 3x5-10/leg',
      'Single-leg hip thrusts - 4x8-15/leg',
      'Broad jumps - 3x5-8'
    ],
    spotify: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b'
  },
  {
    type: 'Full Body Circuit',
    details: [
      'Elite full body circuit, advanced HIIT, muscle-ups, planche, human flag'
    ],
    spotify: 'https://open.spotify.com/track/7GhIk7Il098yCjg4BQjzvb'
  },
  {
    type: 'Rest or Light Stretching',
    details: [
      'Rest, light stretching, walk, meditation'
    ],
    spotify: 'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ'
  }
];

// Build 52 weeks of workouts
const workoutPlan = [];
for (let week = 0; week < 52; week++) {
  let phase;
  if (week < 8) phase = phase1; // Months 1-2
  else if (week < 21) phase = phase2; // Months 3-5
  else phase = phase3; // Months 6-12
  for (let d = 0; d < 7; d++) {
    workoutPlan.push({
      week: week + 1,
      day: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][d],
      type: phase[d].type,
      details: phase[d].details,
      spotify: phase[d].spotify
    });
  }
}

let completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');

// --- UI Rendering ---
function renderCalendar() {
  const section = document.getElementById('calendar-section');
  // Show a dropdown to select week
  const weekOptions = Array.from({length: 52}, (_, i) => `<option value="${i+1}">Week ${i+1}</option>`).join('');
  const selectedWeek = window.selectedWeek || 1;
  section.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="mb-0"><i class="fa-solid fa-calendar-days"></i> Calendar</h2>
      <div>
        <label for="weekSelect" class="me-2">Select Week:</label>
        <select id="weekSelect" class="form-select form-select-sm d-inline-block w-auto">${weekOptions}</select>
      </div>
    </div>
    <div class="row">${workoutPlan.filter(w => w.week === +selectedWeek).map((w, i) => `
      <div class="col-md-6">
        <div class="card p-3">
          <div class="d-flex align-items-center mb-2">
            <h5 class="mb-0 flex-grow-1">${w.day}</h5>
            <span class="badge bg-primary">${w.type}</span>
          </div>
          <div class="spotify-embed mb-2">
            <iframe style="border-radius:12px" src="${w.spotify.replace('track/', 'embed/track/')}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-info btn-sm view-btn" data-idx="${workoutPlan.findIndex(x => x === w)}"><i class="fa-solid fa-eye"></i> View Workout</button>
            <button class="btn btn-${completedDays.includes(workoutPlan.findIndex(x => x === w)) ? 'success' : 'secondary'} btn-sm complete-btn" data-idx="${workoutPlan.findIndex(x => x === w)}"><i class="fa-solid fa-check"></i> ${completedDays.includes(workoutPlan.findIndex(x => x === w)) ? 'Completed' : 'Mark Completed'}</button>
          </div>
        </div>
      </div>
    `).join('')}</div>
    <footer class="text-center mt-4 text-light small">Made by Desmond Elorm Honu<br><span class="fst-italic">You always have a choice: you choose to start or you choose to just dream of starting.</span></footer>
  `;
  document.getElementById('weekSelect').value = selectedWeek;
  document.getElementById('weekSelect').addEventListener('change', e => {
    window.selectedWeek = +e.target.value;
    renderCalendar();
  });
  // Attach event listeners
  document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', showWorkoutModal));
  document.querySelectorAll('.complete-btn').forEach(btn => btn.addEventListener('click', markCompleted));
}

function getWorkoutDetailsWithQuote(details, weekIdx, dayIdx, type) {
  // Set sets/reps/time by phase/month
  let sets, reps, time;
  if (weekIdx < 8) { // Months 1-2
    sets = 3; reps = '8-12'; time = '20-45s';
  } else if (weekIdx < 21) { // Months 3-5
    sets = 4; reps = '10-15'; time = '30-60s';
  } else { // Months 6-12
    sets = 5; reps = '12-20'; time = '45-90s';
  }
  const timeExercises = /plank|wall sit|hold|stretch|recovery|yoga|foam rolling|handstand|planche|human flag|l-sit|superman|meditation|mobility|rest|circuit|breathe|bent knees|broad jump/i;
  const perSideExercises = /single-leg|single arm|one-arm|one arm|archer|lunge|lunges|split squat|side lunge|curtsy lunge|cossack|hip thrust|deadlift|wall sit.*leg|planche.*arm|push-up.*arm|push up.*arm|bicep curl.*arm|tricep extension.*arm|shoulder press.*arm|row.*arm|bound.*dir|side plank|calf raise.*leg|glute bridge.*leg|leg raise.*leg|leg lift.*leg|leg curl.*leg|leg extension.*leg|broad jump.*leg|jump.*leg|step up.*leg|kickback.*leg|kick.*leg|arm raise.*arm|arm circle.*arm/i;
  const boxingExercises = /boxing|jab|cross|punch|sprawl|jump rope/i;
  const quote = animeQuotes[(weekIdx + dayIdx) % animeQuotes.length];
  let mudra = null, meditation = '';
  if (!/rest|recovery/i.test(type)) {
    mudra = mudras[(weekIdx + dayIdx) % mudras.length];
    // Suggest a meditation song for this mudra
    const song = mudraMeditationSongs[(weekIdx + dayIdx) % mudraMeditationSongs.length];
    meditation = `<div class='mt-3'><strong>Meditation:</strong> 5-10 min mindful breathing.<br><strong>Mudra:</strong> <span title='${mudra.desc}'><i class='fa-solid ${mudra.icon} ${mudra.color} fa-lg me-1'></i>${mudra.name}</span> <span class='text-info'>(${mudra.benefit})</span><br><strong>Recommended Song:</strong> <a href='${song.spotify}' target='_blank'><i class='fa-brands fa-spotify text-success'></i> ${song.name}</a><br><span class='text-secondary small'>${song.desc}</span></div>`;
  }
  return `<ul>${details.map(d => {
    if (boxingExercises.test(d)) {
      // For boxing, show duration instead of reps/sets
      let boxingTime = weekIdx < 8 ? '2-3 min' : weekIdx < 21 ? '3-4 min' : '4-5 min';
      return `<li><strong>Boxing/Cardio:</strong> ${d.replace(/- .*/, '').trim()} - <span class='text-info'>${boxingTime} continuous</span></li>`;
    } else if (timeExercises.test(d)) {
      let customTime = d.match(/\d{1,3}-?\d{0,3}?s/);
      let displayTime = customTime ? customTime[0] : time;
      if (perSideExercises.test(d)) {
        return `<li>${sets} sets of ${displayTime} <strong>per side</strong> - ${d.replace(/\d+x[\d-]+/, '').replace(/\d{1,3}-?\d{0,3}?s/, '').replace(/- /, '').trim()} (<span class='text-info'>left</span> & <span class='text-info'>right</span>)</li>`;
      } else {
        return `<li>${sets} sets of ${displayTime} - ${d.replace(/\d+x[\d-]+/, '').replace(/\d{1,3}-?\d{0,3}?s/, '').replace(/- /, '').trim()}</li>`;
      }
    } else {
      let customReps = d.match(/\d{1,2}-?\d{0,2}/);
      let displayReps = customReps ? customReps[0] : reps;
      if (perSideExercises.test(d)) {
        return `<li>${sets} sets of ${displayReps} reps <strong>per side</strong> - ${d.replace(/\d+x[\d-]+/, '').replace(/\d{1,2}-?\d{0,2}/, '').replace(/- /, '').trim()} (<span class='text-info'>left</span> & <span class='text-info'>right</span>)</li>`;
      } else {
        return `<li>${sets} sets of ${displayReps} reps - ${d.replace(/\d+x[\d-]+/, '').replace(/\d{1,2}-?\d{0,2}/, '').replace(/- /, '').trim()}</li>`;
      }
    }
  }).join('')}</ul><div class='quote'>"${quote}"</div>${meditation}`;
}

function showWorkoutModal(e) {
  const idx = +e.currentTarget.dataset.idx;
  const w = workoutPlan[idx];
  document.getElementById('workoutModalLabel').textContent = `${w.day} - ${w.type}`;
  document.getElementById('workout-modal-body').innerHTML = getWorkoutDetailsWithQuote(w.details, w.week-1, ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].indexOf(w.day), w.type);
  document.getElementById('mark-completed-btn').dataset.idx = idx;
  const modal = new bootstrap.Modal(document.getElementById('workoutModal'));
  modal.show();
}

document.getElementById('mark-completed-btn').addEventListener('click', function(e) {
  const idx = +e.target.dataset.idx;
  const completedIdx = completedDays.indexOf(idx);
  if (completedIdx === -1) {
    completedDays.push(idx);
  } else {
    completedDays.splice(completedIdx, 1);
  }
  localStorage.setItem('completedDays', JSON.stringify(completedDays));
  renderCalendar();
  bootstrap.Modal.getInstance(document.getElementById('workoutModal')).hide();
  renderProgress();
});

function markCompleted(e) {
  const idx = +e.currentTarget.dataset.idx;
  const completedIdx = completedDays.indexOf(idx);
  if (completedIdx === -1) {
    completedDays.push(idx);
  } else {
    completedDays.splice(completedIdx, 1);
  }
  localStorage.setItem('completedDays', JSON.stringify(completedDays));
  renderCalendar();
  renderProgress();
}

// --- Progress Page ---
function renderProgress() {
  const section = document.getElementById('progress-section');
  const percent = Math.round((completedDays.length / workoutPlan.length) * 100);
  section.innerHTML = `
    <h2 class="mb-4"><i class="fa-solid fa-chart-line"></i> Progress</h2>
    <div class="mb-4">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${percent}%">${percent}%</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 chart-container">
        <canvas id="barChart"></canvas>
      </div>
      <div class="col-md-4 chart-container">
        <canvas id="pieChart"></canvas>
      </div>
      <div class="col-md-4 chart-container">
        <canvas id="lineChart"></canvas>
      </div>
    </div>
    <div class="row mt-4 text-center">
      <div class="col-md-6">
        <i class="fa-solid fa-trophy fa-4x text-warning mb-2"></i>
        <div class="fw-bold">Track your victories!</div>
      </div>
      <div class="col-md-6">
        <i class="fa-solid fa-heart-pulse fa-4x text-danger mb-2"></i>
        <div class="fw-bold">Stay healthy and strong!</div>
      </div>
    </div>
    <footer class="text-center mt-4 text-light small">Made by Desmond Elorm Honu</footer>
  `;
  setTimeout(drawCharts, 100); // Wait for canvas
}

function drawCharts() {
  if (window.barChart) window.barChart.destroy();
  if (window.pieChart) window.pieChart.destroy();
  if (window.lineChart) window.lineChart.destroy();
  // Bar chart: Completed vs Remaining
  const ctxBar = document.getElementById('barChart').getContext('2d');
  window.barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Completed', 'Remaining'],
      datasets: [{
        label: 'Workouts',
        data: [completedDays.length, workoutPlan.length - completedDays.length],
        backgroundColor: ['#00c6ff', '#343a40']
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } },
      responsive: true
    }
  });
  // Pie chart: Distribution
  const ctxPie = document.getElementById('pieChart').getContext('2d');
  window.pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Completed', 'Remaining'],
      datasets: [{
        data: [completedDays.length, workoutPlan.length - completedDays.length],
        backgroundColor: ['#43cea2', '#232526']
      }]
    },
    options: {
      plugins: { legend: { labels: { color: '#fff' } } },
      responsive: true
    }
  });
  // Line chart: Progress over time (weeks)
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  const weekProgress = Array.from({length: 52}, (_, i) => completedDays.filter(idx => Math.floor(idx/7) === i).length);
  window.lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: Array.from({length: 52}, (_, i) => `W${i+1}`),
      datasets: [{
        label: 'Days Completed',
        data: weekProgress,
        borderColor: '#00c6ff',
        backgroundColor: 'rgba(0,198,255,0.2)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      plugins: { legend: { labels: { color: '#fff' } } },
      scales: { y: { beginAtZero: true, ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } },
      responsive: true
    }
  });
}

// --- Tips Page ---
function renderTips() {
  const section = document.getElementById('tips-section');
  // 12 months, each with a modal for tips and a motivational quote
  const monthIcons = [
    'fa-dumbbell', 'fa-bolt', 'fa-fire', 'fa-mountain', 'fa-heart', 'fa-star',
    'fa-trophy', 'fa-brain', 'fa-fist-raised', 'fa-running', 'fa-medal', 'fa-sun'
  ];
  // Unique anime motivational quotes for each month (heroes and villains, with references)
  const monthMotivations = [
    '“It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward.” – Rocky Balboa',
    '“If you don’t take risks, you can’t create a future!” – Monkey D. Luffy (One Piece)',
    '“I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way!” – Naruto Uzumaki',
    '“You have to be strong. Stronger than anyone!” – Ippo Makunouchi (Hajime no Ippo)',
    '“The moment you think of giving up, think of the reason why you held on so long.” – Natsu Dragneel (Fairy Tail)',
    '“It’s not over until I win.” – Ippo Makunouchi (Hajime no Ippo)',
    '“No one starts off being amazing. You have to work at it.” – Shoyo Hinata (Haikyuu!!)',
    '“The pain of discipline is far less than the pain of regret.” – Vegeta (Dragon Ball Z)',
    '“A real hero will always find a way for justice!” – All Might (My Hero Academia)',
    '“In this world, is the destiny of mankind controlled by some transcendental entity or law? No, it is you who decides.” – Griffith (Berserk)',
    '“If you want to know the truth, you must have the courage to accept it.” – Madara Uchiha (Naruto)',
    '“The world isn’t perfect. But it’s there for us, doing the best it can. That’s what makes it so damn beautiful.” – Roy Mustang (Fullmetal Alchemist)' 
  ];
  section.innerHTML = `
    <h2 class="mb-4"><i class="fa-solid fa-lightbulb"></i> Tips & Motivation</h2>
    <div class="row g-4">
      ${Array.from({length:12}, (_,m) => `
        <div class="col-md-4 col-sm-6">
          <div class="card p-3 text-center shadow-lg bg-gradient" style="background: linear-gradient(135deg,#232526 60%,#00c6ff 100%);">
            <div class="mb-2">
              <i class="fa-solid ${monthIcons[m % monthIcons.length]} fa-3x text-info"></i>
            </div>
            <h5>Month ${m+1}</h5>
            <button class="btn btn-outline-light mt-2" data-bs-toggle="modal" data-bs-target="#tipModal${m+1}">View Tips</button>
          </div>
        </div>
        <div class="modal fade" id="tipModal${m+1}" tabindex="-1" aria-labelledby="tipModalLabel${m+1}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="tipModalLabel${m+1}">Month ${m+1} Tips</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" style="background: linear-gradient(135deg,#232526 60%,#00c6ff 100%); color:#fff; border-radius:1rem;">
                <ul>
                  ${getMonthTips(m+1).map(t => `<li>${t}</li>`).join('')}
                </ul>
                <div class='quote mt-3'>"${monthMotivations[m]}"</div>
                <div class='mt-3'><i class='fa-solid ${mudras[m%mudras.length].icon} ${mudras[m%mudras.length].color} fa-2x me-2'></i><strong>${mudras[m%mudras.length].name}</strong> <span class='text-info'>(${mudras[m%mudras.length].benefit})</span></div>
                <div class='mt-2'><strong>Meditation:</strong> 5-10 min mindful breathing</div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <footer class="text-center mt-4 text-light small">Made by Desmond Elorm Honu<br><span class="fst-italic">You always have a choice: you choose to start or you choose to just dream of starting.</span></footer>
  `;
}

function getMonthTips(month) {
  // Unique, phase-appropriate, non-repeating motivational tips for each month
  const tips = [
    [
      'Start with the basics and focus on perfect form.',
      'Build a consistent workout habit—show up every day.',
      'Track your progress with photos and notes.',
      'Celebrate every small win to build momentum.'
    ],
    [
      'Push yourself to add 1-2 reps each week.',
      'Try a new exercise variation to challenge your body.',
      'Stay disciplined—consistency beats intensity.',
      'Warm up and cool down to prevent injury.'
    ],
    [
      'Increase your sets or add a new movement this month.',
      'Visualize your goal physique every morning.',
      'Share your progress with a friend for accountability.',
      'Focus on quality reps, not just quantity.'
    ],
    [
      'Master a new skill (e.g., handstand, pistol squat).',
      'Reflect on your journey so far and set a new goal.',
      'Help someone else get started with calisthenics.',
      'Stay humble and keep learning.'
    ],
    [
      'Try a full-body circuit for a new challenge.',
      'Add a new mudra or meditation to your routine.',
      'Push through plateaus by changing exercise order.',
      'Remember: progress is not always linear.'
    ],
    [
      'Focus on advanced movements and skill work.',
      'Celebrate visible progress and muscle definition.',
      'Keep your motivation high with new goals.',
      'Share your progress for accountability.'
    ],
    [
      'Perfect your form and advanced skills.',
      'Reflect on your journey and set new targets.',
      'Help others get started with calisthenics.',
      'Stay humble and keep learning.'
    ],
    [
      'Increase your workout intensity this month.',
      'Try a new mudra for focus and energy.',
      'Take a deload week if you feel fatigued.',
      'Visualize your success before every session.'
    ],
    [
      'Push for a personal best in your favorite exercise.',
      'Incorporate more mobility work for longevity.',
      'Find a new workout partner for extra motivation.',
      'Remind yourself why you started.'
    ],
    [
      'Try a new training split for variety.',
      'Add a new challenge: longer planks, deeper squats.',
      'Celebrate your discipline, not just your results.',
      'Stay patient—greatness takes time.'
    ],
    [
      'Reflect on your year of progress.',
      'Set a new, ambitious goal for the next 12 months.',
      'Share your transformation story to inspire others.',
      'Thank yourself for never giving up.'
    ],
    [
      'You are now your own hero—keep going.',
      'Mentor someone new to calisthenics.',
      'Keep evolving: there is always another level.',
      'Remember: you always have a choice.'
    ]
  ];
  return tips[month-1];
}

const mudraMeditationSongs = [
  {
    name: 'Weightless – Marconi Union',
    spotify: 'https://open.spotify.com/track/7yCPwWs66K8Ba5lFuU2bcx',
    desc: 'Scientifically shown to reduce anxiety and promote deep relaxation.'
  },
  {
    name: 'Matsya – Anoushka Shankar',
    spotify: 'https://open.spotify.com/track/2QZ7WLBE8h2y1Y5Fb8RYbH',
    desc: 'Soothing sitar and ambient textures for mindful breathing.'
  },
  {
    name: 'Sunset Lover – Petit Biscuit',
    spotify: 'https://open.spotify.com/track/1rfofaqEpACxVEHIZBJe6W',
    desc: 'Gentle electronic instrumental, perfect for calm focus.'
  },
  {
    name: 'Bloom – ODESZA',
    spotify: 'https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B',
    desc: 'Uplifting, meditative electronic soundscape.'
  },
  {
    name: 'Night Owl – Gerry Mulligan',
    spotify: 'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg',
    desc: 'Smooth jazz for a peaceful, mindful state.'
  },
  {
    name: 'Weightless, Pt. 2 – Marconi Union',
    spotify: 'https://open.spotify.com/track/1AhDOtG9vPSOmsWgNW0BEY',
    desc: 'A continuation of the most relaxing song, ideal for meditation.'
  }
];

// --- Navigation ---
function showSection(section) {
  document.getElementById('calendar-section').classList.add('d-none');
  document.getElementById('progress-section').classList.add('d-none');
  document.getElementById('tips-section').classList.add('d-none');
  document.getElementById(section).classList.remove('d-none');
}

document.getElementById('nav-calendar').addEventListener('click', e => {
  showSection('calendar-section');
});
document.getElementById('nav-progress').addEventListener('click', e => {
  renderProgress();
  showSection('progress-section');
});
document.getElementById('nav-tips').addEventListener('click', e => {
  renderTips();
  showSection('tips-section');
});

// --- Initial Render ---
document.addEventListener('DOMContentLoaded', function() {
  renderCalendar();
  renderProgress();
  renderTips();
  showSection('calendar-section');
  document.getElementById('nav-calendar').addEventListener('click', e => {
    showSection('calendar-section');
  });
  document.getElementById('nav-progress').addEventListener('click', e => {
    renderProgress();
    showSection('progress-section');
  });
  document.getElementById('nav-tips').addEventListener('click', e => {
    renderTips();
    showSection('tips-section');
  });
});
