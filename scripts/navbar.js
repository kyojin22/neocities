const HEART_PATH = 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5';

const LINKS = [
  { label: 'index.html', href: '/' },
  { label: 'about me', href: '/pages/about.html' },
  { label: 'blog', href: '/pages/blog.html' },
  { label: 'anime', href: '/pages/anime.html' },
  { label: 'projects', href: '/pages/projects.html' },
];

function isActive(href) {
  const path = window.location.pathname;
  if (href === '/') return path === '/' || path === '/index.html';
  if (href === '/pages/blog.html') return path === href || path.startsWith('/articles/');
  return path === href;
}

export function insertNavbar() {
  const ul = document.createElement('ul');

  LINKS.forEach(link => {
    const active = isActive(link.href);
    const li = document.createElement('li');
    li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart${active ? ' active' : ''}"><path d="${HEART_PATH}"/></svg><a href="${link.href}">${link.label}</a>`;
    ul.appendChild(li);
  });

  const nav = document.createElement('nav');
  nav.appendChild(ul);
  document.body.insertBefore(nav, document.body.firstChild);
}
