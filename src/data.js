const projects = [
  {
    id: "vorex",
    name: "Vorex",
    image: "/images/vorex.jpeg",
    thumb: "/images/thumbs/vorex.png",
    content: (
      <span>
        Custom Wordpress theme built using custom post types, advanced custom
        fields, HTML5, CSS3 and jQuery.
      </span>
    ),
    projectURL: "https://www.vorex.com/",
  },
  {
    id: "unitrends",
    name: "Unitrends MSP",
    image: "/images/unitrends.jpeg",
    thumb: "/images/thumbs/unitrends.png",
    content: (
      <span>Wordpress theme with custom ROI calculator using jQuery.</span>
    ),
    projectURL: "https://www.unitrends.com/",
  },
  {
    id: "suuthe",
    name: "Suuthe",
    image: "/images/suuthe.jpeg",
    thumb: "/images/thumbs/suuthe.png",
    content: (
      <span>BigCommerce website using HTML5, CSS3 and jQuery slider.</span>
    ),
    projectURL: "https://suuthe.com/",
  },
  {
    id: "the-denver-hopper",
    name: "Denver Hopper",
    image: "/images/denverhopper.jpeg",
    thumb: "/images/thumbs/denverhopper.png",
    content: (
      <span>
        Fully responsive WordPress theme using Revolution Slider, custom post
        types / templates, google maps and latest HTML5, CSS3, and jQuery.
      </span>
    ),
    projectURL: "https://denverhopper.com/",
  },
  {
    id: "live-worldly",
    name: "Live Worldly",
    image: "/images/liveworldly.jpeg",
    thumb: "/images/thumbs/liveworldly.png",
    content: (
      <span>
        Denver based fashion company. Front-End Development using BigCommerce.
      </span>
    ),
    projectURL: "https://liveworldly.com/",
  },
  {
    id: "breaking-silence",
    name: "Breaking Silence",
    image: "/images/bssd.jpeg",
    thumb: "/images/thumbs/bssd.png",
    content: (
      <span>
        Denver based audio and video production company. This website uses some
        of the latest technologies including jQuery sliders, HTML, CSS and
        Javascript.
      </span>
    ),
    projectURL: "http://breakingsilence.com",
  },
  {
    id: "lyfe-sport",
    name: "Lyfe Sport",
    image: "/images/lyfesport.jpeg",
    thumb: "/images/thumbs/lyfesport.png",
    content: (
      <span>
        Fully responsive WordPress theme customization using Revolution Slider,
        custom post types / templates, Google DFP ad integration and latest
        HTML5, CSS3 techniques.
      </span>
    ),
    projectURL: "http://lyfesport.com",
  },
  {
    id: "auth-anvil",
    name: "Auth Anvil",
    image: "/images/authanvil.jpeg",
    thumb: "/images/thumbs/authanvil.png",
    content: (
      <span>
        Drupal custom theme for software company AuthAnvil. Built on HTML, CSS,
        jQuery, JS and PHP.
      </span>
    ),
    projectURL: "https://authanvil.com/",
  },
  {
    id: "mychelle",
    name: "Mychelle",
    image: "/images/mychelle.jpeg",
    thumb: "/images/thumbs/mychelle.png",
    content: (
      <span>
        National brand Mychelle Dermaceuticals. Front-End Development E-Commerce
        website using NetSuite platform.
      </span>
    ),
    projectURL: "http://www.mychelle.com/",
  },
  {
    id: "dai",
    name: "DAI Solutions",
    image: "/images/dai.jpeg",
    thumb: "/images/thumbs/dai.png",
    content: (
      <span>
        Fully responsive WordPress theme customization using Revolution Slider,
        custom post types / templates, and latest HTML5, CSS3 techniques.
      </span>
    ),
    projectURL: "http://www.dai-solutions.com/",
  },
  {
    id: "kaseya",
    name: "Kaseya",
    image: "/images/kaseya.jpeg",
    thumb: "/images/thumbs/kaseya.png",
    content: (
      <span>
        Drupal custom theme for software company Kaseya. Built on HTML, CSS,
        jQuery, JS and PHP.
      </span>
    ),
    projectURL: "https://www.kaseya.com/",
  },
  {
    id: "athome",
    name: "At Home Colorado",
    image: "/images/athomeco.jpeg",
    thumb: "/images/thumbs/athomeco.png",
    content: (
      <span>
        Colorado Real Estate website built on Wordpress using the Genesis
        framework using HTML, CSS, jQuery and PHP.
      </span>
    ),
    projectURL: "https://www.athomecolorado.com/",
  },
  {
    id: "denver-bacon",
    name: "Denver Bacon Company",
    image: "/images/dbc.jpeg",
    thumb: "/images/thumbs/dbc.png",
    content: (
      <span>
        Fully responsive Wordpress based theme for local Denver bacon company.
      </span>
    ),
    projectURL: "http://denverbaconco.com",
  },
  {
    id: "hours-into-days",
    name: "Hours Into Days",
    image: "/images/hid.jpeg",
    thumb: "/images/thumbs/hid.png",
    content: (
      <span>
        Denver based rock band website for Hours Into Days. Built using CSS,
        HTML, Javascript and Flash.
      </span>
    ),
    projectURL: "http://hoursintodays.com",
  },
  {
    id: "it-glue",
    name: "IT Glue",
    image: "/images/itglue.jpeg",
    thumb: "/images/thumbs/itglue.png",
    content: (
      <span>Wordpress theme development using PHP/HTML/CSS/jQuery.</span>
    ),
    projectURL: "https://www.itglue.com/",
  },
  {
    id: "kaseya-connect",
    name: "Kaseya Connect",
    image: "/images/kaseya-connect.jpeg",
    thumb: "/images/thumbs/kaseya-connect.png",
    content: (
      <span>
        Wordpress theme customization using custom post types, canvas,
        revolution slider and custom calendar plugins.
      </span>
    ),
    projectURL: "https://www.connectit.com/europe/",
  },
  {
    id: "laboratories-made-better",
    name: "Laboratories Made Better",
    image: "/images/lmb.jpeg",
    thumb: "/images/thumbs/lmb.png",
    content: (
      <span>
        This site was built using purely CSS, HTML and Javascript. A simple 3
        column layout with a easy to use left side navigation.
      </span>
    ),
    projectURL: "http://laboratoriesmadebetter.com",
  },
  {
    id: "lucid-theory",
    name: "Lucid Theory",
    image: "/images/lucid-theory.jpeg",
    thumb: "/images/thumbs/lucid-theory.png",
    content: (
      <span>
        Flash based website for Post-Hardcore band Lucid Theory based out of
        Littleton, Colorado
      </span>
    ),
    projectURL: "http://lucidtheory.com",
  },
  {
    id: "lyfe-media",
    name: "Lyfe Media",
    image: "/images/lyfemedia.jpeg",
    thumb: "/images/thumbs/lyfemedia.png",
    content: (
      <span>
        Fully responsive WordPress theme customization using masonry grid
        layout, custom post types / templates, auto post feeder and latest
        HTML5, CSS3 techniques.
      </span>
    ),
    projectURL: "http://lyfemedia.com",
  },
  {
    id: "lyfe-traveler",
    name: "Lyfe Traveler",
    image: "/images/lyfetraveler.jpeg",
    thumb: "/images/thumbs/lyfetraveler.png",
    content: (
      <span>
        Fully responsive WordPress theme using Revolution Slider and latest
        HTML5, CSS3 techniques.
      </span>
    ),
    projectURL: "http://lyfetraveler.com",
  },
  {
    id: "mds",
    name: "MDS Contractors Inc.",
    image: "/images/mds.jpeg",
    thumb: "/images/thumbs/mds.png",
    content: (
      <span>
        MDS Contractors Inc. is a construction company that remodels homes and
        apartments. This website uses some of the latest technologies including
        jQuery sliders, HTML, CSS and Javascript.
      </span>
    ),
    projectURL: "http://mdscontractors.com",
  },
  {
    id: "pes",
    name: "Professional Engineering Services",
    image: "/images/pes.jpeg",
    thumb: "/images/thumbs/pes.png",
    content: <span>Built purely on CSS, HTML, Javascript and jQuery.</span>,
    projectURL: "http://proengineering.com",
  },
];

export default projects;
