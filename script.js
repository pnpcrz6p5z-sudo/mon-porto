// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateIcon();

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon();
});

function updateIcon() {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Enter your Personal Details here
export const personalDetails = {
  name: "N'DA YAKPIN YVES JOCELYN",
  tagline: "Professionnel logistique spécialisé en coordination terrain",
  img: "IMG_6568.jpeg",
  about: `Jeune professionnel dynamique avec une expérience dans la logistique, la gestion d'équipe et la collecte de données terrain. J'ai participé à des projets nationaux d'adressage urbain avec le MCLU et le BNETD. Organisé, rigoureux et capable de travailler en équipe, je maîtrise les outils informatiques de base et j'ai une bonne capacité d'adaptation. Disponible immédiatement pour accompagner des projets terrain et garantir un suivi de qualité.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/pnpcrz6p5z-sudo",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Coordinateur terrain",
    Company: "Projet PAVI (MCLU / BNETD)",
    Location: "Daloa, Korhogo, Yamoussoukro",
    Type: "Full Time",
    Duration: "2025",
  },
  {
    Position: "Chef d'équipe",
    Company: "Projet d'adressage PADA (MCLU / BNETD)",
    Location: "Abidjan",
    Type: "Full Time",
    Duration: "2022 - 2024",
  },
  {
    Position: "Supervision installations techniques",
    Company: "Caméras & panneaux solaires",
    Location: "Abidjan",
    Type: "Full Time",
    Duration: "2019 - 2020",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Degree: "Bac A",
    Institution: "Établissement scolaire",
    Location: "Côte d'Ivoire",
    Duration: "2021",
  },
  {
    Degree: "BTS Logistique",
    Institution: "Établissement de formation",
    Location: "Côte d'Ivoire",
    Duration: "En cours",
  },
  {
    Degree: "Formation en infographie",
    Institution: "Centre de formation",
    Location: "Côte d'Ivoire",
    Duration: "Complétée",
  },
  {
    Degree: "Certification Cisco Intro to Data Science",
    Institution: "Cisco",
    Location: "En ligne",
    Duration: "Certifié",
  },
  {
    Degree: "Certification Cisco Intro to Modern AI",
    Institution: "Cisco",
    Location: "En ligne",
    Duration: "Certifié",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  languages: ["Microsoft Word", "Microsoft Excel", "PowerPoint"],
  tools: ["Photoshop", "QGIS", "QField", "Visual Studio Code"],
  databases: [],
  frameworks: []
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Projet PAVI - Coordination terrain",
    description: "Coordination des équipes terrain, organisation et suivi des activités, contrôle qualité des données collectées, rédaction de rapports pour le projet d'adressage urbain national.",
    techUsed: ["QGIS", "QField", "Microsoft Office"],
    link: "#",
    github: "#"
  },
  {
    title: "Projet PADA - Adressage urbain",
    description: "Gestion d'équipe d'agents terrain, collecte et organisation des données, participation à l'adressage du District d'Abidjan, formation des nouveaux agents.",
    techUsed: ["QGIS", "QField", "Microsoft Office"],
    link: "#",
    github: "#"
  },
  {
    title: "Installations techniques",
    description: "Supervision des travaux d'installation de caméras et panneaux solaires, organisation du travail sur site, coordination avec les techniciens.",
    techUsed: ["Gestion de projet", "Coordination technique"],
    link: "#",
    github: "#"
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Yvesmryves@gmail.com",
  phone: "+225 0777828099",
  address: "Abidjan, Côte d'Ivoire",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/pnpcrz6p5z-sudo"
};
