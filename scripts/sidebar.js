const focus = "im focusing on finishing my final year project at uni";

const tils = [
  { date: '2026-03-21', text: "do you ever feel like not wanting to do anything, like even things u loved??" },
  { date: '2026-03-20', text: "i went to shoping - spent around 100$ - this is too much in my country lol" },
  { date: '2026-03-20', text: "i deleted all of my games" },
  { date: '2026-03-19', text: "why am i so boring and dramatic" },
  { date: '2026-03-19', text: "a girl wanted me to boost her and offered her very donated account - but i rejected it coz my game was not going well" },
  { date: '2026-03-07', text: "learned functions in rust" },
  { date: '2026-03-04', text: "i dunno? try to be independent even if i suck? probably i didnt understood what they meant" },
];

function insertSidebar() {
  const aside = document.querySelector("aside");

  const focusSection = document.createElement('section');
  focusSection.className = 'sidebar-focus';
  focusSection.innerHTML = `<p class="til-heading">// focusing on</p><p class="sidebar-focus-text">${focus}</p>`;
  aside.appendChild(focusSection);

  const section = document.createElement('section');
  section.className = 'til';

  const heading = document.createElement('p');
  heading.className = 'til-heading';
  heading.textContent = '// logs';
  section.appendChild(heading);

  const log = document.createElement('div');
  log.className = 'til-log';

  tils.forEach(({ date, text }) => {
    const line = document.createElement('p');
    line.innerHTML = `<span class="til-date">[${date}]</span> ${text}`;
    log.appendChild(line);
  });

  section.appendChild(log);
  aside.appendChild(section);
}

insertSidebar();
