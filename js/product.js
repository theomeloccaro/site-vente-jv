// Sample product data
const products = {
  wwe: {
    name: "WWE 2K24",
    description:
      "WWE 2K24 est l'édition 2024 de la célèbre licence de jeux de catch. Les joueurs peuvent y retrouver trouver les grandes stars de la WWE à travers des matchs remplis d'action et de rebondissements en tout genre.",
    informations:
      "Développeur: Visual Concepts\n Editeur: 2K\nDate de sortie: 8 mars 2024\nGenre: Jeux solo, Simulation, Sport",
    price: "49,99€",
    image1: "images/wwe.jpg",
    image2: "images/wwe2.jpg",
    image3: "images/wwe3.jpg",
    video: "https://www.youtube.com/embed/W8SiQKottLo",
  },
  tekken8: {
    name: "Tekken 8",
    description:
      "Tekken 8 est le huitième épisode de la série de jeux de combat éponyme. Retrouvez tous les personnages les plus mythiques de la saga et enchaînez les combos pour abattre tous vos adversaires, aussi puissants soient-ils.",
    informations:
      "Développeur: BANDAI NAMCO Studios Inc.\nEditeur: BANDAI NAMCO ENTERTAINEMENT\nDate de sortie: 26 janvier 2024\nGenre: Jeux solo, Action",
    price: "49,99€",
    image1: "images/tekken-8.jpg",
    image2: "images/tekken2.jpg",
    image3: "images/tekken3.jpg",
    video: "https://www.youtube.com/embed/_MM4clV2qjE",
  },
  cp77: {
    name: "Cyberpunk 2077",
    description:
      "Jeu de rôle dystopique et futuriste en open-world, Cyberpunk 2077 est basé sur le RPG papier du même nom. Dans un futur pas si lointain, la technologie a évolué au point de devenir un don à double tranchant pour l'humanité...",
    informations:
      "Développeur: CD PROJEKT RED\nEditeur: CD PROJEKT RED\nDate de sortie: 5 décembre 2023\nGenre: Jeux solo, RPG",
    price: "49,99€",
    image1: "images/cyberpunk-2077.jpg",
    image2: "images/cp2.jpg",
    image3: "images/cp3.jpg",
    video: "https://www.youtube.com/embed/1DSutjnvTX4",
  },
  hd: {
    name: "Helldivers 2",
    description:
      "Helldivers II est un jeu de tir à la troisième personne, jouable seul à ou plusieurs en coopération, où l'on doit affronter des tonnes d'ennemis extraterrestres. On peut notamment s'aider d'atouts spéciaux, que l'on peut faire délivrer directement du ciel, et miser beaucoup sur l'entraide tout en faisant attention aux tirs alliés.",
    informations:
      "Développeur: Arrowhead Game Studios, Arrowhead Game Studios AB\nEditeur:	PlayStation Mobile, Inc., PlayStation PC LLC\nDate de sortie: 8 février 2024\nGenre: Co-op en ligne, Action",
    price: "49,99€",
    image1: "images/helldivers.jpg",
    image2: "images/hd2.jpg",
    image3: "images/hd3.jpg",
    video: "https://www.youtube.com/embed/0d_5JuwNn-Q",
  },
  fc24: {
    name: "EA SPORTS FC 24",
    description:
      "Premièr jeu de la célèbre licence de Football d'Electronic Arts a abandonner son partenariat avec la FIFA, EA Sports FC 24 retrouve les mécaniques de FIFA 23 et met en scène de nombreux sportifs de la scène internationale du ballon rond.",
    informations:
      "Développeur:	Electronic Arts, EA Canada & EA Romania, Arrowhead Game Studios AB\nEditeur: Electronic Arts\nDate de sortie: 29 septembre 2023\nGenre: Jeux solo, Simulation, Sport",
    price: "49,99€",
    image1: "images/fifa.jpg",
    image2: "images/fifa2.jpg",
    image3: "images/fifa3.jpg",
    video: "https://www.youtube.com/embed/XhP3Xh4LMA8",
  },
  tcmf: {
    name: "The Crew Motorfest",
    description:
      "The Crew 3 est la suite de The Crew, le célèbre jeu de course arcade en monde ouvert. Il est possible de naviguer dans une carte immense en prenant les commandes de nombreux véhicules, comme des voitures de course, des bateaux, des avions ou même des motos dans des défis endiablé.",
    informations:
      "Développeur:	IVORY, Ubisoft Ivory Tower\nEditeur: Ubisoft\nDate de sortie:	14 septembre 2023\nGenre: Jeux solo, Course",
    price: "49,99€",
    image1: "images/tcmf.jpg",
    image2: "images/tcmf2.jpg",
    image3: "images/tcmf3.jpg",
    video: "https://www.youtube.com/embed/ugKIELPN8mI",
  },
  hogwarts: {
    name: "Hogwarts Legacy",
    description:
      "Hogwarts Legacy : l'Héritage de Poudlard est un jeu de rôle se déroulant au XIXe siècle dans l'univers d'Harry Potter. Le joueur y incarne un étudiant et peut librement explorer Poudlard et s'y forger sa carrière de sorcier.",
    informations:
      "Développeur:	Avalanche Software\nEditeur: Warner Bros. Games\nDate de sortie: 10 février 2023\nGenre: Jeux solo, Action, Aventure, RPG",
    price: "29,99€",
    image1: "images/hl.jpg",
    image2: "images/hl2.jpg",
    image3: "images/hl3.jpg",
    video: "https://www.youtube.com/embed/M8ApyJqnME0",
  },
  sb: {
    name: "Skull and Bones",
    description:
      "Nous sommes dans l'âge d'or de la piraterie. Dans une époque où des capitaines renégats sont à la tête des plus puissantes flottes navales de guerre. Vous incarnez un capitaine pirate débutant et cupide, parti naviguer des Caraïbes à l'océan Indien. Pour réussir à devenir le pirate ultime, vous devrez construire une flotte de vaisseaux, éliminer vos rivaux, attaquer les routes ou peut-être déciderez de vous allier aux plus influents afin d'assouvir votre suprématie...",
    informations:
      "Développeur: Ubisoft\nEditeur: Ubisoft\nDate de sortie: 16 février 2024\nGenre: Action, Aventure, Coopération, RPG, Stratégie",
    price: "29,99€",
    image1: "images/sb.jpg",
    image2: "images/sb2.jpg",
    image3: "images/sb3.jpg",
    video: "https://www.youtube.com/embed/OmDYo7MbQxo",
  },
  ufc5: {
    name: "UFC 5",
    description:
      "EA SPORTS UFC 5  est aussi vrai que possible. Grâce aux capacités de rendu avancées du moteur Frostbite, vos combattants préférés bénéficient désormais d'une apparence inégalée et d'un environnement incroyablement fidèle qui donnera à leur entrée dans l'octogone l'allure d'un combat principal d’un PPV. Le tout nouveau système de dégâts authentique donnera vie à l'intensité et à la stratégie d'un combat, les coupures et les frappes reçues affectant la mobilité, la défense, l'endurance et bien plus encore. ",
    informations:
      "Développeur: EA Sports\nEditeur: Electronic Arts\nDate de sortie: 27 octobre 2023\nGenre: Multijoueur, Jeux solo, Sport, Simulation",
    price: "29,99€",
    image1: "images/ufc5.jpg",
    image2: "images/ufc2.jpg",
    image3: "images/ufc3.jpg",
    video: "https://www.youtube.com/embed/1R4MdobS1nI",
  },
  payday3: {
    name: "Payday 3",
    description:
      "Payday 3 est un jeu vidéo en mode coopératif jouable en ligne. Le joueur doit y planifier un casse avec ses amis et le réaliser. Plusieurs stratégies sont possibles : des plus fines aux plus violentes. Certains détails sont définis de façon aléatoire à chaque partie pour forcer les participants à revoir leurs plans. Le titre est développé par Overkill Software. C'est la suite de Payday 2.",
    informations:
      "Développeur: OVERKILL Software, Starbreeze Studios\nEditeur:	Deep Silver, Starbreeze, Prime Matter\nDate de sortie: 21 septembre 2023\nGenre: Jeux solo, Action, Aventure, RPG",
    price: "29,99€",
    image1: "images/pd3.jpg",
    image2: "images/pd3-2.jpg",
    image3: "images/pd3-3.jpg",
    video: "https://www.youtube.com/embed/TlkwDNirzF8",
  },
  ed: {
    name: "Elden Ring",
    description:
      "Elden Ring est le nouveau jeu de From Software. Il s'agit d'un Action-RPG à la troisième personne qui se déroule dans un monde ouvert. Le jeu marque la collaboration entre Hidetaka Miyazaki et George R. R. Martin, le créateur de Game of Thrones.",
    informations:
      "Développeur:	FromSoftware, Inc\nEditeur:	BANDAI NAMCO Entertainment, FromSoftware, Inc\nDate de sortie: 25 février 2022\nGenre: Jeux solo, Action, RPG",
    price: "29,99€",
    image1: "images/ed.jpg",
    image2: "images/ed2.jpg",
    image3: "images/ed3.jpg",
    video: "https://www.youtube.com/embed/E3Huy2cdih0",
  },
  wrc: {
    name: "EA SPORTS WRC",
    description:
      "EA Sports WRC, également connu sous le nom de WRC, est un jeu vidéo de course développé par Codemasters et édité par EA Sports. Il détient la licence officielle (acquise par Codemasters en 2020) du Championnat du Monde des Rallyes et est propulsé par le moteur Unreal Engine 4. Il s'agit du premier jeu de rallye de Codemasters à disposer de la licence officielle du WRC depuis Colin McRae Rally 3 en 2002.",
    informations:
      "Développeur:	Codemasters\nEditeur:	Electronic Arts, EA Sports\nDate de sortie:	3 novembre 2023\nGenre:	Jeux solo, Course, Simulation, Sport",
    price: "29,99€",
    image1: "images/wrc.jpg",
    image2: "images/wrc2.jpg",
    image3: "images/wrc3.jpg",
    video: "https://www.youtube.com/embed/JFy_cWefBtQ",
  },
};

// Fonction pour récupérer les informations du produit
function displayProduct(productId) {
  let product = products[productId];
  if (product) {
    document.querySelectorAll(".product-name").forEach(function (element) {
      element.textContent = product.name;
    });

    document
      .querySelectorAll(".product-informations")
      .forEach(function (element) {
        element.innerHTML = product.informations.replace(/\n/g, "<br>");
      });

    document
      .querySelectorAll(".product-description")
      .forEach(function (element) {
        element.innerHTML = product.description.replace(/\n/g, "<br>");
      });

    document.querySelectorAll(".product-price").forEach(function (element) {
      element.textContent = product.price;
    });

    // Update product images
    document.querySelectorAll(".product-image1").forEach(function (element) {
      element.src = product.image1;
    });

    document.querySelectorAll(".product-image2").forEach(function (element) {
      element.src = product.image2;
    });

    document.querySelectorAll(".product-image3").forEach(function (element) {
      element.src = product.image3;
    });

    document.querySelectorAll(".product-video").forEach(function (element) {
      element.src = product.video;
    });
  } else {
    // Product not found
    console.log("Product not found");
  }
}

// Récupérer le product ID depuis l'url
let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

// Afficher les informations du produit
if (productId) {
  displayProduct(productId);
} else {
  console.log("Product ID not provided in URL");
}
