const PROJECTS = [
  {
    name: "spotify-proxy",
    readme: 'i just wanted to share my favorite musics playlist from spotify and music im listenin right now or recently listened. Spotify has web api for that but everyone needs to create their own application and then get secrets and keys to get token for 1 hour. its hard to achieve it just from frontend so i created this repo to help people so that they dont have to create their own backend but use this one which will be identical to spotify version but just proxy. Its built with Go. kinda 1% is finished. the apis i need are done. and its fully working on the vps',
    stack: ["Go", "Redis"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'Go', class: 'go' },
      { name: 'Redis', class: 'redis' },
    ],
  },
  {
    name: 'diabetes',
    readme: 'nah, it only helped with <b><i>HOW</i></b> part. im the one who chose dataset and guided the ai to do what. i grinded one day before deadline. got 88, answers came out <span title="11.01.2026">today</span>. i hope my professor will not find out this and reduce it. it would be such cringe. but no way, <b>I did it myself!</b> okay? no vibe fckn codin.',
    stack: ["Python", "Jupyter Notebook"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'Python', class: 'python' },
      { name: 'Jupyter Notebook', class: 'jupyter-notebook' },
    ],
  },
  {
    name: 'loopify',
    readme: 'at one moment, i just wanted to listen on music infinitely so i just built this with chatgpt',
    stack: ["JavaScript", "CSS", "HTML"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'JavaScript', class: 'javascript' },
      { name: 'CSS', class: 'css' },
      { name: 'HTML', class: 'html' },
    ],
  },
  {
    name: 'sketchvue',
    readme: 'YEA! ai helped with this too but overall project is mine even if it sucks or whatever',
    stack: ["JavaScript", "Vue"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'JavaScript', class: 'javascript' },
      { name: 'Vue', class: 'vue' },
    ],
  },
  {
    name: 'formify',
    readme: 'Its basically training project from iTransition. i could not pass coz i could not explain useEffect with cleanup function. I did not know it. ai assisted with this too. yea i suck. im fckn vibecoder or whatever those rusters say or maybe im not meant to be coder!! it does not mean anything . <b>HUHHHH!</b> ruh4ur34irro3rhfjfopfk k40f34ffefjwefj epwfkewkfewpof',
    stack: ["TypeScript", "React"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'TypeScript', class: 'typescript' },
      { name: 'React', class: 'react' },
    ],
  },
  {
    name: 'movie-app',
    readme: 'People can add their favorite movies and leave reviews. I do not even remember what it does LOL',
    stack: ["C#", "Angular"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'C#', class: 'csharp' },
      { name: 'Angular', class: 'angular' },
    ],
  },
  {
    name: 'pomodoro',
    readme: 'My first project with js. I did build it myself even if it small and fckn buggy. at that fckn time there was not any ai bullshit',
    stack: ["JavaScript", "CSS", "HTML"],
    size: 4096,
    links: 2,
    permissions: "drwxr-xr-x",
    date: "Mar 11",
    languages: [
      { name: 'JavaScript', class: 'javascript' },
      { name: 'CSS', class: 'css' },
      { name: 'HTML', class: 'html' },
    ],
  },
];

let cwd = "/home/duche/projects";

const currentDir = {
  permissions: "drwx------",
  links: PROJECTS.length,
  owner: "duche",
  group: "duche",
  size: 4096,
  date: "Mar 15",
  name: ".",
};

const oneUpDir = {
  permissions: "drwx------",
  links: 2,
  owner: "root",
  group: "root",
  size: 4096,
  date: "Mar 15",
  name: "..",
};

/**
 * 
 * @param {string[]} args 
 * @returns {boolean}
 */
function isShowAll(args) {
  return args.includes("-la") || args.includes("-l") || args.includes("-a");
}

function lsShort() {
  return PROJECTS.map((project) => project.name);
}

function lsLong() {
  return [
    ...[
      currentDir,
      oneUpDir,
    ],
    ...PROJECTS.map((project) => ({
      permissions: project.permissions,
      links: project.links,
      owner: "duche",
      group: "users",
      size: project.size,
      date: project.date,
      name: `${project.name}/`,
    }))
  ];
}

/**
 * 
 * @param {string[]} args 
 */
function lsInsideRoot(args) {
  if (isShowAll(args)) {
    return [
      currentDir,
      oneUpDir,
      {
        permissions: "drwxr--r--",
        links: 1,
        owner: "root",
        group: "users",
        size: 4096,
        date: "Mar 15",
        name: "home/",
      },
    ];
  }
  return ["home"];
}

/**
 * 
 * @param {string[]} args 
 */
function lsInsideHome(args) {
  if (isShowAll(args)) {
    return [
      currentDir,
      oneUpDir,
      {
        permissions: "drwxr--r--",
        links: 1,
        owner: "root",
        group: "duche",
        size: 4096,
        date: "Mar 15",
        name: "duche/",
      },
    ];
  }
  return ["duche"];
}

/**
 * 
 * @param {string[]} args 
 */
function lsInsideDuche(args) {
  if (isShowAll(args)) {
    return [
      currentDir,
      oneUpDir,
      {
        permissions: "drwxr--r--",
        links: 1,
        owner: "duche",
        group: "users",
        size: 4096,
        date: "Mar 15",
        name: "projects/",
      },
    ];
  }
  return ["projects"];
}

/**
 * @param {string[]} args
 */
function lsInsideProject(args) {
  if (isShowAll(args)) {
    return [
      currentDir,
      oneUpDir,
      {
        permissions: '-rw-r--r--',
        links: 1,
        owner: "duche",
        group: "users",
        size: 512,
        date: 'Mar 15',
        name: "README.md",
      },
    ];
  }

  return ["README.md"];
}

/**
 * 
 * @param {string[]} args 
 */
function handleList(args) {
  const inRoot = cwd === '/';
  if (inRoot)
    return lsInsideRoot(args);

  const inHome = cwd === "/home";
  if (inHome)
    return lsInsideHome(args);

  const inDuche = cwd === "/home/duche";
  if (inDuche)
    return lsInsideDuche(args);

  const inProject = cwd.includes('/projects/');
  if (inProject)
    return lsInsideProject(args);

  if (isShowAll(args))
    return lsLong();

  return lsShort();
}

function handleClear() {
  const terminalBody = document.querySelector(".terminal-body");
  terminalBody.textContent = ""; 
}

/**
 * handle cd
 * @param {string[]} args 
 */
function handleCd(args) {
  const target = args[0];

  if (!target) {
    cwd = "/home/duche/projects";
  } else if (target === "/") {
    cwd = "/";
  } else if (target === "home" || target === "/home") {
    cwd = "/home";
  } else if (target === "~" || target === "/home/duche" || target === "duche" || target === "/duche") {
    cwd = "/home/duche";
  } else if (target === "projects") {
    cwd = "/home/duche/projects";
  } else if (target === ".") {
    // do nothing
  } else if (target === "..") {
    cwd = cwd.substring(0, cwd.lastIndexOf("/"));

    if (cwd === "") cwd = "/";
  } else {
    const projectName = target.replace(/^\//, '').split('/')[0];
    const project = PROJECTS.find(p => p.name === projectName);
    if (!project) return `bash: cd: ${target}: No such file or directory`;
    cwd = `/home/duche/projects/${projectName}`;
  }

  updatePrompt();
  return null;
}

/**
 * handle cat
 * @param {string[]} args 
 */
function handleCat(args) {
  const target = args[0];

  if (!target)
    return "";
  else if (target === "README.md") {
    const parts = cwd.split("/");
    const projectName = parts[parts.length - 1];

    const project = PROJECTS.find(p => p.name === projectName);
    if (!project) return `bash: cat: ${target}: No such file or directory`;
    return project.readme;
  }

  return `bash: cat: ${target}: No such file or directory`;
}

/**
 * Handle Linux commands
 * @param {string} raw 
 */
function handleCommand(raw) {
  const parts = raw.split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);

  switch (cmd) {
    case "ls":
      return handleList(args);

    case "clear":
      return handleClear();

    case "cd":
      return handleCd(args);
    
    case "cat":
      return handleCat(args);
    
    default:
      return "command not found";
  }
}

function updatePrompt() {
  document.getElementById("current-directory").textContent = `${cwd}$`;
}

/**
 * Appends given El to terminal body
 * @param {Element} el 
 */
function appendToTerminal(el) {
  document.querySelector(".terminal-body").appendChild(el);
}

/**
 * Creates html for entered command
 * @param {string} value 
 */
function showEnteredCommand(value) {
  const p = document.createElement("p");
  p.classList.add("current-directory");
  p.textContent = `${cwd}$: `;
  
  const span = document.createElement("span");
  span.textContent = value;
  span.style.color = 'var(--rose-pine--pine-moon)';
  p.appendChild(span);

  appendToTerminal(p);
}

/**
 * Creates html for command - ls
 * @param {string[]} output 
 */
function showLs(output) {
  const div = document.createElement("div");
  div.classList.add("ls-container-short");

  for (const item of output) {
    const span = document.createElement("span");
    span.textContent = item;
    div.appendChild(span);
  }

  appendToTerminal(div);
}

/**
 * Creates html for commands - ls -la, ls -l, ls -a
 * @param {{
 *   permissions: string,
 *   links: number,
 *   owner: string,
 *   group: string,
 *   size: number,
 *   date: string,
 *   name: string
 * }[]} output
 */
function showLsLa(output) {
  const div = document.createElement("div");
  div.classList.add("ls-container-long");

  for (const item of output) {
    const line = [
      item.permissions,
      String(item.links).padStart(2),
      item.owner.padEnd(6),
      item.group.padEnd(6),
      String(item.size).padStart(5),
      item.date.padEnd(8),
      item.name,
    ].join(' ');
    const p = document.createElement('p');
    p.textContent = line;
    div.appendChild(p);
  }

  appendToTerminal(div);
}

/**
 * Creates html for case where command is not found
 * @param {string} output 
 */
function showStringOutput(output) {
  const p = document.createElement("p");
  p.classList.add("not-found-line")
  p.innerHTML = output;
  appendToTerminal(p);
}

/**
 * 
 * @param {string} value 
 */
function handleInput(value) {
  showEnteredCommand(value);

  const output = handleCommand(value);
  if (Array.isArray(output) && output.length > 0 && typeof output[0] === 'string') {
    showLs(output);
  } else if (Array.isArray(output) && output.length > 0 && typeof output[0] === "object") {
    showLsLa(output);
  } else if (typeof output === "string") {
    showStringOutput(output);
  }

  const body = document.querySelector(".terminal-body");
  body.scrollTop = body.scrollHeight;

  input.value = "";
}

const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleInput(input.value.trim());
  }
});

handleInput("ls -la");
handleInput("cd /diabetes");
handleInput("cat README.md");
