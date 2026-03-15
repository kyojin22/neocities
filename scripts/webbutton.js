const banners = [
  { link: "https://ransei.neocities.org", name: "Ransei", img: "/assets/img/embeded.gif" },
  { link: "https://moonpiecloud.neocities.org", name: "MoonpieCloud", img: "/banner.jpg" },
  { link: "https://ghostingpen.net", name: "GhostingPen", img: "/photos/button.gif" },
  { link: "https://meowbark2000.neocities.org", name: "Meowbark2000", img: "/Index/mybutton.png" },
  { link: "https://kingdomofakibaten.neocities.org", name: "KingdomOfAkibaten", img: "/img/index/buttons/akibatenButton.gif" },
  { link: "https://dimden.dev", name: "Dimden", img: "/services/images/88x31.gif" },
];

function insertWebButton() {
  const div = document.getElementById('banners');

  for (const banner of banners) {
    const a = document.createElement("a");
    a.href = banner.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");

    img.width = 88;
    img.height = 31;

    img.src = `${banner.link}${banner.img}`;
    img.onerror = () => { img.src = 'https://duche.neocities.org/neocities.png'; img.onerror = null; };
    img.alt = `${banner.name}`;
    img.title = `${banner.name}`;

    a.appendChild(img);
    div.appendChild(a);
  }
}

insertWebButton();
