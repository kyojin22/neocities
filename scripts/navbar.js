const HEART_PATH = 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5';

const LINKS = [
  { label: 'index.html', paths: ['/'], href: '/'  },
  { label: 'about me', paths: ['/pages/about', '/pages/about.html'], href: '/pages/about.html' },
  { label: 'blog', paths: ['pages/blog.html', '/pages/blog.html'], href: '/pages/blog.html' },
  { label: 'anime', paths: ['pages/anime.html', '/pages/anime.html'], href: '/pages/anime.html' },
  { label: 'projects', paths: ['pages/projects.html', '/pages/projects.html'], href: '/pages/projects.html' },
  { label: 'guestbook', paths: ['pages/guestbook.html', '/pages/guestbook.html'], href: '/pages/guestbook.html' },
  { label: 'shrines', paths: ['pages/shrines.html', '/pages/shrines.html'], href: '/pages/shrines.html' },
  { label: 'now', paths: ['pages/now.html', '/pages/now.html'], href: '/pages/now.html' },
];

function isActive(link) {
  const path = window.location.pathname;
  if (link.href === '/') return path === '/' || path === '/index.html';
  if (link.href === '/pages/blog.html') return path === link.href || path.startsWith('/articles/');
  return link.paths.includes(path);
}

export function insertNavbar() {
  const ul = document.createElement('ul');

  LINKS.forEach(link => {
    const active = isActive(link);
    const li = document.createElement('li');
    li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart${active ? ' active' : ''}"><path d="${HEART_PATH}"/></svg><a href="${link.href}">${link.label}</a>`;
    ul.appendChild(li);
  });

  const nav = document.createElement('nav');
  nav.appendChild(ul);
  document.body.insertBefore(nav, document.body.firstChild);
}
