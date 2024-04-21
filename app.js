const fs = require("fs");
const laMort = require("./books/lamort");
const madames = require("./books/madames");
const aqeedah1 = require("./books/aqeedah1");
const swifaatQawaid = require("./books/swifaatqawaid");
const tawheedFitnahQabr = require("./books/tawheedftnahqabr");
const adorekaba = require("./books/adorekaba");
const attentatsuicidejihaad = require("./books/attentatsuicidejihaad");
const azaanislam = require("./books/azaanislam");
const barbariezanimo = require("./books/barbariezanimo");
const beauteislaam = require("./books/beauteislaam");
const calamitebondie = require("./books/calamitebondie");
const connaissancesimportantes = require("./books/connaissancesimportantes");
const crime = require("./books/crime");
const degoutpourislaam = require("./books/degoutpourislaam");
const difference = require("./books/difference");
const esclavage = require("./books/esclavage");
const feteskaafir = require("./books/feteskaafir");
const hadiithpaspreserve = require("./books/hadiithpaspreserve.js");
const hebdo = require("./books/hebdo");
const ideesmuhammad = require("./books/ideesmuhammad.js");
const islammadame = require("./books/islammadame.js");
const lavieapreslamort = require("./books/lavieapreslamort.js");
const madameszarmes = require("./books/madameszarmes.js");
const makkah = require("./books/makkah.js");
const miracle = require("./books/miracle");
const mocontentmoreligion = require("./books/mocontentmoreligion.js");
const noir = require("./books/noir.js");
const originalsin = require("./books/originalsin.js");
const pourtousdimounes = require("./books/pourtousdimounes.js");
const protegeoumadameettifi = require("./books/protegeoumadameettifi.js");
const pudeur = require("./books/pudeur.js");
const punitionsseveres = require("./books/punitionsseveres.js");
const realiteislaam = require("./books/realiteislaam.js");
const suicide = require("./books/suicide.js");
const tolerence = require("./books/tolerence.js");
const touspeadorebondieu = require("./books/touspeadorebondieu.js");
const violence = require("./books/violence.js");
const contenu = require("./books/contenu.js");
const erreurslecture = require("./books/erreurslecture.js");
const faatihah = require("./books/faatihah.js");
const faussesconceptionsetbidah = require("./books/faussesconceptionsetbidah.js");
const honorequraan = require("./books/honorequraan.js");
const memorisation = require("./books/memorisation.js");
const portable = require("./books/portable.js");
const quietealquraan = require("./books/quietealquraan.js");
const reglementsecoute = require("./books/reglementsecoute.js");
const reglementsetudierenseigner = require("./books/reglementsetudierenseigner.js");
const reglementslecture = require("./books/reglementslecture.js");
const reglementsmushaf = require("./books/reglementsmushaf.js");
const revelationetcompilation = require("./books/revelationetcompilation.js");
const sajdahtilaawah = require("./books/sajdahtilaawah.js");
const traduction = require("./books/traduction.js");
const valeur = require("./books/valeur.js");
const vertuscertainssourah = require("./books/vertuscertainssourah.js");

const ibaadatprofet = require("./books/ibaadatprofet.js");
const miraj = require("./books/miraj.js");
const muhammadtoexemple = require("./books/muhammadtoexemple.js");
const araigne = require("./books/araigne.js");
const laviepro = require("./books/laviepro.js");
const nana = require("./books/nana.js");
const profethonore = require("./books/profethonore.js");
const connaisanceprofet = require("./books/connaisanceprofet.js");
const lamortprophete = require("./books/lamortprophete.js");
const sir = require("./books/sir.js");
const duaashirk = require("./books/duaashirk.js");
const ibaadah = require("./books/ibaadah.js");
const kitabtawheed = require("./books/kitabtawheed.js");
const istiaanah = require("./books/istiaanah.js");
const zaatullaah = require("./books/zaatullaah.js");
const nomsallaahdetail = require("./books/nomsallaahdetail.js");
const aqeedahallaahtwo = require("./books/aqeedahallaahtwo.js");
const cotallaah = require("./books/cotallaah.js");
const allaahcause = require("./books/allaahcause.js");

const allBooksArray = [
  laMort,
  madames,
  aqeedah1,
  swifaatQawaid,
  tawheedFitnahQabr,
  hadiithpaspreserve,
  hebdo,
  ideesmuhammad,
  islammadame,
  adorekaba,
  lavieapreslamort,
  barbariezanimo,
  azaanislam,
  beauteislaam,
  calamitebondie,
  degoutpourislaam,
  difference,
  esclavage,
  feteskaafir,
  connaissancesimportantes,
  crime,
  attentatsuicidejihaad,
  madameszarmes,
  makkah,
  miracle,
  mocontentmoreligion,
  noir,
  originalsin,
  pourtousdimounes,
  protegeoumadameettifi,
  pudeur,
  punitionsseveres,
  realiteislaam,
  suicide,
  tolerence,
  touspeadorebondieu,
  violence,
  contenu,
  erreurslecture,
  faatihah,
  faussesconceptionsetbidah,
  honorequraan,
  memorisation,
  portable,
  quietealquraan,
  reglementsecoute,
  reglementsetudierenseigner,
  reglementslecture,
  reglementsmushaf,
  revelationetcompilation,
  sajdahtilaawah,
  traduction,
  valeur,
  vertuscertainssourah,
  ibaadatprofet,
  miraj,
  muhammadtoexemple,
  araigne,
  laviepro,
  nana,
  profethonore,
  connaisanceprofet,
  lamortprophete,
  sir,
  duaashirk,
  ibaadah,
  kitabtawheed,
  istiaanah,
  zaatullaah,
  nomsallaahdetail,
  aqeedahallaahtwo,
  cotallaah,
  allaahcause,
];

let allBooksSet = new Set();

for (let books of allBooksArray) {
  const wordArray = books
    .replace(/[^\w\sàèéâôê-]/gi, "")
    .toLowerCase()
    .split(/\s+/);

  const wordSet = new Set(wordArray);

  allBooksSet = new Set([...allBooksSet, ...wordSet]);
}

// Create a Set to store unique words

function writeToJSFile(data, filename) {
  const content = `module.exports = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync(filename, content);
}

const objWithEmptyValues = {};
for (const item of allBooksSet) {
  objWithEmptyValues[item] = "";
}

writeToJSFile(objWithEmptyValues, "output.js");
