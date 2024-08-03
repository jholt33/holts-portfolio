const projects = [
  {
    id: "vorex",
    name: "Vorex",
    image: "/holts-portfolio/images/vorex.jpeg",
    thumb: "/holts-portfolio/images/thumbs/vorex.png",
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
    image: "/holts-portfolio/images/unitrends.jpeg",
    thumb: "/holts-portfolio/images/thumbs/unitrends.png",
    content: (
      <span>Wordpress theme with custom ROI calculator using jQuery.</span>
    ),
    projectURL: "https://www.unitrends.com/",
  },
  {
    id: "suuthe",
    name: "Suuthe",
    image: "/holts-portfolio/images/suuthe.jpeg",
    thumb: "/holts-portfolio/images/thumbs/suuthe.png",
    content: (
      <span>BigCommerce website using HTML5, CSS3 and jQuery slider.</span>
    ),
    projectURL: "https://suuthe.com/",
  },
  {
    id: "the-denver-hopper",
    name: "Denver Hopper",
    image: "/holts-portfolio/images/denverhopper.jpeg",
    thumb: "/holts-portfolio/images/thumbs/denverhopper.png",
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
    image: "/holts-portfolio/images/liveworldly.jpeg",
    thumb: "/holts-portfolio/images/thumbs/liveworldly.png",
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
    image: "/holts-portfolio/images/bssd.jpeg",
    thumb: "/holts-portfolio/images/thumbs/bssd.png",
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
    image: "/holts-portfolio/images/lyfesport.jpeg",
    thumb: "/holts-portfolio/images/thumbs/lyfesport.png",
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
    image: "/holts-portfolio/images/authanvil.jpeg",
    thumb: "/holts-portfolio/images/thumbs/authanvil.png",
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
    image: "/holts-portfolio/images/mychelle.jpeg",
    thumb: "/holts-portfolio/images/thumbs/mychelle.png",
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
    image: "/holts-portfolio/images/dai.jpeg",
    thumb: "/holts-portfolio/images/thumbs/dai.png",
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
    image: "/holts-portfolio/images/kaseya.jpeg",
    thumb: "/holts-portfolio/images/thumbs/kaseya.png",
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
    image: "/holts-portfolio/images/athomeco.jpeg",
    thumb: "/holts-portfolio/images/thumbs/athomeco.png",
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
    image: "/holts-portfolio/images/dbc.jpeg",
    thumb: "/holts-portfolio/images/thumbs/dbc.png",
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
    image: "/holts-portfolio/images/hid.jpeg",
    thumb: "/holts-portfolio/images/thumbs/hid.png",
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
    image: "/holts-portfolio/images/itglue.jpeg",
    thumb: "/holts-portfolio/images/thumbs/itglue.png",
    content: (
      <span>Wordpress theme development using PHP/HTML/CSS/jQuery.</span>
    ),
    projectURL: "https://www.itglue.com/",
  },
  {
    id: "kaseya-connect",
    name: "Kaseya Connect",
    image: "/holts-portfolio/images/kaseya-connect.jpeg",
    thumb: "/holts-portfolio/images/thumbs/kaseya-connect.png",
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
    image: "/holts-portfolio/images/lmb.jpeg",
    thumb: "/holts-portfolio/images/thumbs/lmb.png",
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
    image: "/holts-portfolio/images/lucid-theory.jpeg",
    thumb: "/holts-portfolio/images/thumbs/lucid-theory.png",
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
    image: "/holts-portfolio/images/lyfemedia.jpeg",
    thumb: "/holts-portfolio/images/thumbs/lyfemedia.png",
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
    image: "/holts-portfolio/images/lyfetraveler.jpeg",
    thumb: "/holts-portfolio/images/thumbs/lyfetraveler.png",
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
    image: "/holts-portfolio/images/mds.jpeg",
    thumb: "/holts-portfolio/images/thumbs/mds.png",
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
    name: "Professional Engineering",
    image: "/holts-portfolio/images/pes.jpeg",
    thumb: "/holts-portfolio/images/thumbs/pes.png",
    content: <span>Built purely on CSS, HTML, Javascript and jQuery.</span>,
    projectURL: "http://proengineering.com",
  },
];

export default projects;
