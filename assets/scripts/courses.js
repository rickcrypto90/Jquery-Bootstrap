const lock = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>`;
const unlock = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>`;

const courses = [
  {
    title: "Backenders-201",
    teacher: ["Alessandro Catalano", "Salvatore La Torre", "Eric Mario Pavone"],
    description: null,
    locked: null,
    noImg: true,
  },
  {
    title: "Machine Learning - materiale",
    teacher: [
      "Nunzio Biso",
      "Nicolò Calcagno",
      "Andrea Lo Guidice",
      "Danilo Parisi",
      "Laszlo Rozsnyai",
    ],
    description: null,
    locked: null,
    noImg: true,
  },
  {
    title: "Architettura Esagonale",
    teacher: ["Simone Gigantini"],
    description:
      "Questo corso si occupa di spiegare i concetti base e l'utilizzo di una tra le architetture più solide e robuste",
    locked: false,
  },
  {
    title: "Presentazioni AITHO Lab",
    teacher: ["Giacomo Romano"],
    description:
      "Questo corso contiene tutte le risorse collegate alle presentazioni sulle tematiche di Ricerca&Sviluppo trattate in azienda",
    locked: true,
  },
  {
    title: "Backend development Best Practices",
    teacher: ["Alessandro Catalano"],
    description: null,
    locked: false,
  },
  {
    title: "Microservizi",
    teacher: ["Eric Mario Pavone"],
    description: null,
    locked: false,
  },
  {
    title: "Utilizzo tool di sviluppo",
    description:
      "Questo corso si occupa di trattare alcuni tool di sviluppo (IDE) più comuni, al fine di apprenderne il loro utilizzo, configurazione e funzionamento in maniera efficiente e veloce.",
    teacher: ["Giacomo Romano"],
    locked: false,
  },
  {
    title: "Backenders-101",
    description: null,
    teacher: ["Carla Naselli"],
    locked: false,
  },
  {
    title: "Onboarding di base",
    description:
      "Argomenti trattati: IDE IntelliJ, Java & Spring Boot, REST Api, POSTMAN, MySQL & CRUD, Exception base, logica services, interfacce, polimorfismo, ereditarietà, AFU, ATE, E-R Diagram, stime, JUnit Test, frontend base con Angular (integrazione BE/FE).",
    teacher: ["Alessandro Le Mura"],
    locked: false,
  },
  {
    title: "ReactJS 101",
    description:
      "in questo corso imparerai le basi per poter usare ReactJS all'interno di un progetto business. Spiegheremo le principali componenti utili ad inizializzazione un nuovo progetto come npm e typescript ed approfondiremo le principali peculiarità di ReactJS come il virtual dom e gli hook.",
    teacher: ["Orazio Contarino", "Nunzio Mio"],
    locked: false,
  },
  {
    title: "Java",
    description: "I fondamenti della programmazione Java.",
    teacher: [" Gabriele Grillo", "Alessandro Le Mura"],
    locked: false,
  },
  {
    title: "Spring Batch 101",
    description: null,
    teacher: ["Simone Gigantini"],
    locked: null,
  },
  {
    title: "Spring Boot",
    desciption: null,
    teacher: ["Simone Gigantini", "Gabriele Grillo"],
    locked: false,
  },
];

const list = document.getElementById("list");
courses.forEach((course) => {
  const item = `
        <div class="list-group-item d-flex flex-column border" style="gap:1rem">
            <div class="d-flex align-items-center" style="gap: 5px">
         <a href="#" class="d-flex justify-content-between">
      ${course.title}
      </a>
        ${course.locked ? lock : course.locked === null ? "" : unlock}
   </div>
   <div class="d-flex" id="description">
     ${
       course.noImg
         ? ""
         : `<img src="https://placehold.co/600x400" class="img-fluid mr-3" alt="Course Image" style="height: 100px;">`
     }
   
      <div>
         ${
           course.description ? `<p>${course.description}</p>` : "<span></span>"
         }
         <div>
            ${course.teacher
              .map((teacher) => {
                return `<p class="mb-0"><strong>Teacher:</strong> <a href="#" class="text-primary">${teacher}</a></p>`;
              })
              .join("")}
            </div>
      </div>
   </div>
   </div>
        `;
  list.innerHTML += item;
});
