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
const allaahcause = require("./books/allaahcause.js");

const erreurgramatical = require("./books/erreurgramatical.js");
const nager = require("./books/nager.js");
const asraf2024 = require("./books/asraf2024.js");
const shirkabdallah = require("./books/shirkabdallah.js");
const lastseen = require("./books/lastseen.js");
const mopekitsunnatjamaat = require("./books/mopekitsunnatjamaat.js");
const roumiunescokustar = require("./books/roumiunescokustar.js");
const younussoufi = require("./books/younussoufi.js");
const zka2023 = require("./books/zka2023.js");
const abdoulmunaafiq = require("./books/abdoulmunaafiq.js");
const ppeches = require("./books/ppeches.js");
const tocoumajuif = require("./books/tocoumajuif.js");
const lajoieducoeur = require("./books/lajoieducoeur.js");
const heureiftwaar2 = require("./books/heureiftwaar2.js");
const restetolacaze = require("./books/restetolacaze.js");
const coumafaireenecontratnikaah = require("./books/coumafaireenecontratnikaah.js");
const jannahforme = require("./books/jannahforme.js");
const coronadansquran = require("./books/coronadansquran.js");
const qadianidonnesalafiraison = require("./books/qadianidonnesalafiraison.js");
const luqman = require("./books/luqman.js");
const lalumiere = require("./books/lalumiere.js");
const iftarparty = require("./books/iftarparty.js");
const duaaduprophetepouralmiqdaad = require("./books/duaaduprophetepouralmiqdaad.js");
const differencesunnishiah = require("./books/differencesunnishiah.js");
const duaa2 = require("./books/duaa2.js");
const aadam = require("./books/aadam.js");
const satanfairepourtoi = require("./books/satanfairepourtoi.js");
const rapprochement = require("./books/rapprochement.js");
const supportemasijidsalafi = require("./books/supportemasijidsalafi.js");
const umarsuoud = require("./books/umarsuoud.js");
const russieukraine = require("./books/russieukraine.js");
const congedecembre1 = require("./books/congedecembre1.js");
const kabahdeobandi = require("./books/kabahdeobandi.js");
const hajj = require("./books/hajj.js");
const peches6 = require("./books/peches6.js");
const abdouldg = require("./books/abdouldg.js");
const exempleallaah = require("./books/exempleallaah.js");
const barakat = require("./books/barakat.js");
const alasr = require("./books/alasr.js");
const hunafa = require("./books/hunafa.js");
const wasilabidah = require("./books/wasilabidah.js");
const ynqa = require("./books/ynqa.js");
const kitchoz4 = require("./books/kitchoz4.js");
const apprendredeen = require("./books/apprendredeen.js");
const portab = require("./books/portab.js");
const zaahir = require("./books/zaahir.js");
const zakaattla = require("./books/zakaattla.js");
const erreursdialogues = require("./books/erreursdialogues.js");
const madaakhilah = require("./books/madaakhilah.js");
const qabr = require("./books/qabr.js");
const s5v82 = require("./books/s5v82.js");
const qaariah = require("./books/qaariah.js");
const gravitenegligelesson = require("./books/gravitenegligelesson.js");
const homo = require("./books/homo.js");
const mentiibrahim = require("./books/mentiibrahim.js");
const ruine = require("./books/ruine.js");
const obligationunir = require("./books/obligationunir.js");
const corrigecomprehension = require("./books/corrigecomprehension.js");
const mmaladies = require("./books/mmaladies.js");
const reponseaeneattaquedemustafa = require("./books/reponseaeneattaquedemustafa.js");
const depense = require("./books/depense.js");
const publicite = require("./books/publicite.js");
const alhuda = require("./books/alhuda.js");
const khutbah = require("./books/khutbah.js");
const infitwaar = require("./books/infitwaar.js");
const fetekafir = require("./books/fetekafir.js");
const ibrahim = require("./books/ibrahim.js");
const lamortabutwalib = require("./books/lamortabutwalib.js");
const totracas1 = require("./books/totracas1.js");
const prendcomptetobansactions = require("./books/prendcomptetobansactions.js");
const jin11 = require("./books/jin11.js");
const laviecourte = require("./books/laviecourte.js");
const grandreve = require("./books/grandreve.js");
const salafiyyahbaazmoul = require("./books/salafiyyahbaazmoul.js");
const kustar = require("./books/kustar.js");
const coumacontrollalangue = require("./books/coumacontrollalangue.js");
const moubiqaat = require("./books/moubiqaat.js");
const paroleumaraziiz = require("./books/paroleumaraziiz.js");
const haardanslicouhaaroun = require("./books/haardanslicouhaaroun.js");
const consultation = require("./books/consultation.js");
const kiferislaam = require("./books/kiferislaam.js");
const poussetravers = require("./books/poussetravers.js");
const valeuriymaan = require("./books/valeuriymaan.js");
const crimes99 = require("./books/crimes99.js");
const leader = require("./books/leader.js");
const conneamenetolavie = require("./books/conneamenetolavie.js");
const dwimaad = require("./books/dwimaad.js");
const khubayb = require("./books/khubayb.js");
const duaaaqeedah = require("./books/duaaaqeedah.js");
const hudaterrorisme = require("./books/hudaterrorisme.js");
const liaison = require("./books/liaison.js");
const salatnour = require("./books/salatnour.js");
const payskafir = require("./books/payskafir.js");
const cheveuxbouffon = require("./books/cheveuxbouffon.js");
const duaaquraan = require("./books/duaaquraan.js");
const rizqfacilite = require("./books/rizqfacilite.js");
const argentdirigeverslenfer = require("./books/argentdirigeverslenfer.js");
const istisqaakhutbah = require("./books/istisqaakhutbah.js");
const arafat1444 = require("./books/arafat1444.js");
const messagessalaam = require("./books/messagessalaam.js");
const duaaange = require("./books/duaaange.js");
const malounaat = require("./books/malounaat.js");
const metserieux = require("./books/metserieux.js");
const enemisislam = require("./books/enemisislam.js");
const zikralledormi = require("./books/zikralledormi.js");
const sheikhfawzanlorsayyid = require("./books/sheikhfawzanlorsayyid.js");
const globalfasting = require("./books/globalfasting.js");
const coupedumonde = require("./books/coupedumonde.js");
const bansveridiquespaspeurbansmenteurs = require("./books/bansveridiquespaspeurbansmenteurs.js");
const sincere = require("./books/sincere.js");
const rajab = require("./books/rajab.js");
const bareilwiahbaash = require("./books/bareilwiahbaash.js");
const douceur = require("./books/douceur.js");
const jin1 = require("./books/jin1.js");
const changer = require("./books/changer.js");
const reponsedenepetitgarson = require("./books/reponsedenepetitgarson.js");
const masjidmarchant1 = require("./books/masjidmarchant1.js");
const bienetrekuffar = require("./books/bienetrekuffar.js");
const khutbahibnmasoud = require("./books/khutbahibnmasoud.js");
const vaccin = require("./books/vaccin.js");
const contributiondawah = require("./books/contributiondawah.js");
const honneurislaam = require("./books/honneurislaam.js");
const bonhajj = require("./books/bonhajj.js");
const parolezuhri = require("./books/parolezuhri.js");
const vertusalaam = require("./books/vertusalaam.js");
const duaaammaar = require("./books/duaaammaar.js");
const khusouswalat = require("./books/khusouswalat.js");
const election = require("./books/election.js");
const gatevaleurpardah = require("./books/gatevaleurpardah.js");
const conseils7 = require("./books/conseils7.js");
const victoireislaam = require("./books/victoireislaam.js");
const troisayatkhutbahhaajah = require("./books/troisayatkhutbahhaajah.js");
const topapa1 = require("./books/topapa1.js");
const khusou2 = require("./books/khusou2.js");
const nouvellemusulmane = require("./books/nouvellemusulmane.js");
const quifairenouscontentarabiesaoudite = require("./books/quifairenouscontentarabiesaoudite.js");
const musulmanpolitique = require("./books/musulmanpolitique.js");
const masjidboneur = require("./books/masjidboneur.js");
const pascausementi = require("./books/pascausementi.js");
const simpleveriter = require("./books/simpleveriter.js");
const kaafirplusserieuxquitoi = require("./books/kaafirplusserieuxquitoi.js");
const conseilsnouvomusulmans = require("./books/conseilsnouvomusulmans.js");
const bookreadingsoimportance = require("./books/bookreadingsoimportance.js");
const conger = require("./books/conger.js");
const paresse = require("./books/paresse.js");
const brulepavillon = require("./books/brulepavillon.js");
const hhhh = require("./books/hhhh.js");
const assurance = require("./books/assurance.js");
const injusticeconnaissancedeen = require("./books/injusticeconnaissancedeen.js");
const profitelesmorts = require("./books/profitelesmorts.js");
const redressesituationpolitique = require("./books/redressesituationpolitique.js");
const najmi = require("./books/najmi.js");
const standenverskufr = require("./books/standenverskufr.js");
const afinpasregretter = require("./books/afinpasregretter.js");
const imitationtrou = require("./books/imitationtrou.js");
const khutbah27 = require("./books/khutbah27.js");
const lafindecembre = require("./books/lafindecembre.js");
const mauvaislamort = require("./books/mauvaislamort.js");
const satisfaction = require("./books/satisfaction.js");
const contentgagnejannah = require("./books/contentgagnejannah.js");
const hadithirbaad = require("./books/hadithirbaad.js");
const hadishuzayfah = require("./books/hadishuzayfah.js");
const invitationagentsshaytwaan = require("./books/invitationagentsshaytwaan.js");
const luhaydaan = require("./books/luhaydaan.js");
const deenbadinage = require("./books/deenbadinage.js");
const lapaix = require("./books/lapaix.js");
const zourer = require("./books/zourer.js");
const jeunesse = require("./books/jeunesse.js");
const examen = require("./books/examen.js");
const avertissementzinaa = require("./books/avertissementzinaa.js");
const loveforall = require("./books/loveforall.js");
const tiralarc = require("./books/tiralarc.js");
const vieillesse = require("./books/vieillesse.js");
const intelligence = require("./books/intelligence.js");
const arrivesacotenous = require("./books/arrivesacotenous.js");
const haalat = require("./books/haalat.js");
const limportancetwahaarah = require("./books/limportancetwahaarah.js");
const reglementnouvomusulman = require("./books/reglementnouvomusulman.js");
const s6v151 = require("./books/s6v151.js");
const omobansesclaves = require("./books/omobansesclaves.js");
const honneursalafi = require("./books/honneursalafi.js");
const qadianikaafir = require("./books/qadianikaafir.js");
const salafiyyahahmadnajmi = require("./books/salafiyyahahmadnajmi.js");
const abscde = require("./books/abscde.js");
const consequence1 = require("./books/consequence1.js");
const zistoirestabligh = require("./books/zistoirestabligh.js");
const sunnatentremagribesha = require("./books/sunnatentremagribesha.js");
const deentomber = require("./books/deentomber.js");
const educationacademik = require("./books/educationacademik.js");
const apprendredeenpriorite = require("./books/apprendredeenpriorite.js");
const amelioreoudeteriore = require("./books/amelioreoudeteriore.js");
const swalaatmasjidbidati = require("./books/swalaatmasjidbidati.js");
const badinage = require("./books/badinage.js");
const atmospherehajj = require("./books/atmospherehajj.js");
const arrogance = require("./books/arrogance.js");
const sauvetoiislaam = require("./books/sauvetoiislaam.js");
const madinabidah = require("./books/madinabidah.js");
const quifairemopaseneshiiah = require("./books/quifairemopaseneshiiah.js");
const hajjconseilsmadames = require("./books/hajjconseilsmadames.js");
const cyclone = require("./books/cyclone.js");
const swalatnouvo = require("./books/swalatnouvo.js");
const malhonnetete = require("./books/malhonnetete.js");
const pechetofrere = require("./books/pechetofrere.js");
const suunahjumuah = require("./books/suunahjumuah.js");
const s33v35 = require("./books/s33v35.js");
const indecence = require("./books/indecence.js");
const tournenousdansjihaad = require("./books/tournenousdansjihaad.js");
const noumanali = require("./books/noumanali.js");
const avantmarieroutifille = require("./books/avantmarieroutifille.js");
const faveurdelo = require("./books/faveurdelo.js");
const histoireasraf = require("./books/histoireasraf.js");
const salafiyyahibnbaaz = require("./books/salafiyyahibnbaaz.js");
const prencompteougrson = require("./books/prencompteougrson.js");
const duashirksavants = require("./books/duashirksavants.js");
const savantsegares = require("./books/savantsegares.js");
const mamanabuhurayrah = require("./books/mamanabuhurayrah.js");
const kisanlaintelligent = require("./books/kisanlaintelligent.js");
const ghibat = require("./books/ghibat.js");
const madiinah = require("./books/madiinah.js");
const societemadinah = require("./books/societemadinah.js");
const cigaret = require("./books/cigaret.js");
const aadaabsorti = require("./books/aadaabsorti.js");
const cequimoinspire = require("./books/cequimoinspire.js");
const niqaab = require("./books/niqaab.js");
const battemadame = require("./books/battemadame.js");
const rozaautre1 = require("./books/rozaautre1.js");
const frequentation = require("./books/frequentation.js");
const quigagnerdansopposehaq = require("./books/quigagnerdansopposehaq.js");
const iysaa = require("./books/iysaa.js");
const perdipendantconfinement = require("./books/perdipendantconfinement.js");
const tremblement = require("./books/tremblement.js");
const fajr = require("./books/fajr.js");
const tamtam = require("./books/tamtam.js");
const mahram = require("./books/mahram.js");
const conseils = require("./books/conseils.js");
const blaguerapresesha = require("./books/blaguerapresesha.js");
const aayatulkursi = require("./books/aayatulkursi.js");
const tamtamdecembre = require("./books/tamtamdecembre.js");
const aadaablever = require("./books/aadaablever.js");
const combat = require("./books/combat.js");
const jin8 = require("./books/jin8.js");
const promotion = require("./books/promotion.js");
const laveriteclaire = require("./books/laveriteclaire.js");
const salafiuthaymin = require("./books/salafiuthaymin.js");
const jannahfacile = require("./books/jannahfacile.js");
const madameaccepterislaam = require("./books/madameaccepterislaam.js");
const oubliepasse = require("./books/oubliepasse.js");
const gaza = require("./books/gaza.js");
const mubaahalah = require("./books/mubaahalah.js");
const wahdatbareilwi = require("./books/wahdatbareilwi.js");
const coumabanlaoulertovivre = require("./books/coumabanlaoulertovivre.js");
const bokouzenfants = require("./books/bokouzenfants.js");
const humilitesalaf = require("./books/humilitesalaf.js");
const kab = require("./books/kab.js");
const egarementtabligh = require("./books/egarementtabligh.js");
const modernisme = require("./books/modernisme.js");
const zikrlematin = require("./books/zikrlematin.js");
const kusoufresume = require("./books/kusoufresume.js");
const lessoninternet = require("./books/lessoninternet.js");
const debatsoplace = require("./books/debatsoplace.js");
const maladieamour = require("./books/maladieamour.js");
const jin6 = require("./books/jin6.js");
const labarbe = require("./books/labarbe.js");
const jin7 = require("./books/jin7.js");
const qunoutnawaazil = require("./books/qunoutnawaazil.js");
const assassinatumar = require("./books/assassinatumar.js");
const sunnahavantmaghrib = require("./books/sunnahavantmaghrib.js");
const khidr = require("./books/khidr.js");
const parfaireswalat = require("./books/parfaireswalat.js");
const tombeegarement = require("./books/tombeegarement.js");
const amustfapesauverdemubaahalah = require("./books/amustfapesauverdemubaahalah.js");
const aadaabchemin = require("./books/aadaabchemin.js");
const droitsmadames = require("./books/droitsmadames.js");
const ahlussunna = require("./books/ahlussunna.js");
const erreursjanaazah = require("./books/erreursjanaazah.js");
const maladetwahaarah = require("./books/maladetwahaarah.js");
const passion = require("./books/passion.js");
const dispute = require("./books/dispute.js");
const embrassepouce = require("./books/embrassepouce.js");
const jin12 = require("./books/jin12.js");
const sajdah = require("./books/sajdah.js");
const qrbidah = require("./books/qrbidah.js");
const ibaadurrahmaan = require("./books/ibaadurrahmaan.js");
const admireharaam = require("./books/admireharaam.js");
const waswasah = require("./books/waswasah.js");
const jin10 = require("./books/jin10.js");
const mensongeamustafa = require("./books/mensongeamustafa.js");
const meerun = require("./books/meerun.js");
const permission = require("./books/permission.js");
const profitebansmorts = require("./books/profitebansmorts.js");
const akoz = require("./books/akoz.js");
const businessruqyah = require("./books/businessruqyah.js");
const lagarde = require("./books/lagarde.js");
const pemort = require("./books/pemort.js");
const mariageislamique = require("./books/mariageislamique.js");
const mahdi = require("./books/mahdi.js");
const sortitabligh = require("./books/sortitabligh.js");
const erreursacre = require("./books/erreursacre.js");
const lamainapresrukou = require("./books/lamainapresrukou.js");
const salafzenfant = require("./books/salafzenfant.js");
const zakaatdawah = require("./books/zakaatdawah.js");
const azaanapresdafan = require("./books/azaanapresdafan.js");
const consolation = require("./books/consolation.js");
const lalangue = require("./books/lalangue.js");
const haidpetite = require("./books/haidpetite.js");
const infidelite = require("./books/infidelite.js");
const importancearabe = require("./books/importancearabe.js");
const lamortbidatipeerbye = require("./books/lamortbidatipeerbye.js");
const muftibilal = require("./books/muftibilal.js");
const fitnahdunyaa = require("./books/fitnahdunyaa.js");
const contributionmadame = require("./books/contributionmadame.js");
const tousdansenfer = require("./books/tousdansenfer.js");
const khilafahignorants = require("./books/khilafahignorants.js");
const kiferibaadat = require("./books/kiferibaadat.js");
const bidahhasanahmustafa = require("./books/bidahhasanahmustafa.js");
const bassessepeerbye = require("./books/bassessepeerbye.js");
const falsificationhadis = require("./books/falsificationhadis.js");
const qiyaamah = require("./books/qiyaamah.js");
const isis = require("./books/isis.js");
const swahabahcontentislaam = require("./books/swahabahcontentislaam.js");
const maladeswalaat = require("./books/maladeswalaat.js");
const lakaze = require("./books/lakaze.js");
const jamiil = require("./books/jamiil.js");
const umrahbref = require("./books/umrahbref.js");
const asrafappel = require("./books/asrafappel.js");
const peerbyetapearcolonnne = require("./books/peerbyetapearcolonnne.js");
const salafiyyahles4imaam = require("./books/salafiyyahles4imaam.js");
const aadaabcauser = require("./books/aadaabcauser.js");
const madamefairesalatmasjid = require("./books/madamefairesalatmasjid.js");
const mixite = require("./books/mixite.js");
const reponsesexplicites = require("./books/reponsesexplicites.js");
const thawablalangue = require("./books/thawablalangue.js");
const reza = require("./books/reza.js");
const swalaatduhaa = require("./books/swalaatduhaa.js");
const lamusique = require("./books/lamusique.js");
const shaban = require("./books/shaban.js");
const hajjprofits = require("./books/hajjprofits.js");
const palestine = require("./books/palestine.js");
const khutbahzk = require("./books/khutbahzk.js");
const quelgroupe = require("./books/quelgroupe.js");
const bareilwiresume = require("./books/bareilwiresume.js");
const abdouldefense = require("./books/abdouldefense.js");
const accusation = require("./books/accusation.js");
const innocencesalafiyyah = require("./books/innocencesalafiyyah.js");
const aadaabreve = require("./books/aadaabreve.js");
const endeuil = require("./books/endeuil.js");
const quiz = require("./books/quiz.js");
const jin2 = require("./books/jin2.js");
const hiver = require("./books/hiver.js");
const mubaahalahvstawbah = require("./books/mubaahalahvstawbah.js");
const muharram = require("./books/muharram.js");
const rendremaladevisite = require("./books/rendremaladevisite.js");
const exageration = require("./books/exageration.js");
const hizbuttahreer = require("./books/hizbuttahreer.js");
const asraffalsificationquran = require("./books/asraffalsificationquran.js");
const peerbyeenflamme = require("./books/peerbyeenflamme.js");
const dixzulhijjah = require("./books/dixzulhijjah.js");
const jim9 = require("./books/jim9.js");
const aadaabriye = require("./books/aadaabriye.js");
const wahabi = require("./books/wahabi.js");
const jin5 = require("./books/jin5.js");
const formation = require("./books/formation.js");
const hausse = require("./books/hausse.js");
const lapluie = require("./books/lapluie.js");
const tawheedavanttout = require("./books/tawheedavanttout.js");
const finimort = require("./books/finimort.js");
const lichien = require("./books/lichien.js");
const nawawi40 = require("./books/nawawi40.js");
const zikrimportance = require("./books/zikrimportance.js");
const argentharaam = require("./books/argentharaam.js");
const jin4 = require("./books/jin4.js");
const adil = require("./books/adil.js");
const swalatistisqaa = require("./books/swalatistisqaa.js");
const zabah = require("./books/zabah.js");
const salafisecte = require("./books/salafisecte.js");
const dawabidati = require("./books/dawabidati.js");
const aadaabpleurer = require("./books/aadaabpleurer.js");
const bidahuthaymiin = require("./books/bidahuthaymiin.js");
const corona = require("./books/corona.js");
const jin3 = require("./books/jin3.js");
const gagnanouvelle = require("./books/gagnanouvelle.js");
const aadaab = require("./books/aadaab.js");
const hijaamah = require("./books/hijaamah.js");
const liaan = require("./books/liaan.js");
const tawheed = require("./books/tawheed.js");
const erreursmuswalli = require("./books/erreursmuswalli.js");
const manhaj = require("./books/manhaj.js");
const reglementswalattatwawwu = require("./books/reglementswalattatwawwu.js");
const sauvenousmaurice = require("./books/sauvenousmaurice.js");
const oprofet = require("./books/oprofet.js");
const suivreulamaa = require("./books/suivreulamaa.js");
const stress = require("./books/stress.js");
const khul = require("./books/khul.js");
const fiqh2 = require("./books/fiqh2.js");
const sawmresume = require("./books/sawmresume.js");
const ubydjbri = require("./books/ubydjbri.js");
const baignemayyit = require("./books/baignemayyit.js");
const fiqh3 = require("./books/fiqh3.js");
const aadaabdormi = require("./books/aadaabdormi.js");
const delo = require("./books/delo.js");
const charieetsuivre = require("./books/charieetsuivre.js");
const ziyaratqabrastaan = require("./books/ziyaratqabrastaan.js");
const azkaar = require("./books/azkaar.js");
const aqeedahpetit = require("./books/aqeedahpetit.js");
const itikaaf = require("./books/itikaaf.js");
const musulmanidentite = require("./books/musulmanidentite.js");
const shirkibntaymiyyah = require("./books/shirkibntaymiyyah.js");
const kawtharizikr = require("./books/kawtharizikr.js");
const fatwaalabbaad = require("./books/fatwaalabbaad.js");
const alhudaenesecte = require("./books/alhudaenesecte.js");
const intro11 = require("./books/intro11.js");
const prophetenour = require("./books/prophetenour.js");
const khutbahcreole = require("./books/khutbahcreole.js");
const sajdasahu = require("./books/sajdasahu.js");
const aadaabswadaqah = require("./books/aadaabswadaqah.js");
const sunanfitrah = require("./books/sunanfitrah.js");
const vertuswalaat = require("./books/vertuswalaat.js");
const hadis75 = require("./books/hadis75.js");
const lamentation = require("./books/lamentation.js");
const toilette = require("./books/toilette.js");
const propphetemort = require("./books/propphetemort.js");
const alhudazionis = require("./books/alhudazionis.js");
const duaprofitab = require("./books/duaprofitab.js");
const polygamiereglements = require("./books/polygamiereglements.js");
const dawasalafiyyah = require("./books/dawasalafiyyah.js");
const swahaabah1 = require("./books/swahaabah1.js");
const bareillwisalafi = require("./books/bareillwisalafi.js");
const parentsduprophete = require("./books/parentsduprophete.js");
const quraaniyyoun = require("./books/quraaniyyoun.js");
const conseilsajeunes = require("./books/conseilsajeunes.js");
const dafan = require("./books/dafan.js");
const fiqh1 = require("./books/fiqh1.js");
const sunanraatibah = require("./books/sunanraatibah.js");
const jourslesons12 = require("./books/jourslesons12.js");
const nomsallaahpourzenfants = require("./books/nomsallaahpourzenfants.js");
const ikhwaan = require("./books/ikhwaan.js");
const dawakafir = require("./books/dawakafir.js");
const bahai = require("./books/bahai.js");
const propheteghaib = require("./books/propheteghaib.js");
const usoultafsiir = require("./books/usoultafsiir.js");
const salafiyyahrabii = require("./books/salafiyyahrabii.js");
const swalatactions = require("./books/swalatactions.js");
const lamort1 = require("./books/lamort1.js");
const raisons7 = require("./books/raisons7.js");
const ynfinalement = require("./books/ynfinalement.js");
const zinaa = require("./books/zinaa.js");
const awliyaa = require("./books/awliyaa.js");
const rafulyadayn1 = require("./books/rafulyadayn1.js");
const quraniyounnakchedy = require("./books/quraniyounnakchedy.js");
const petithadismadrasah = require("./books/petithadismadrasah.js");
const rafida = require("./books/rafida.js");
const ibntaymiabio = require("./books/ibntaymiabio.js");
const depenselestemps = require("./books/depenselestemps.js");
const nawaaqid = require("./books/nawaaqid.js");
const swalatjanazah = require("./books/swalatjanazah.js");
const shirkamustafa = require("./books/shirkamustafa.js");
const najaazaat = require("./books/najaazaat.js");
const sexualite = require("./books/sexualite.js");
const fatwaseries1 = require("./books/fatwaseries1.js");
const eidreglements = require("./books/eidreglements.js");
const hazir = require("./books/hazir.js");
const halaaal = require("./books/halaaal.js");
const anges = require("./books/anges.js");
const fatwaanajmi = require("./books/fatwaanajmi.js");
const barbahaari = require("./books/barbahaari.js");
const soufisme = require("./books/soufisme.js");
const yawmunnabideux = require("./books/yawmunnabideux.js");
const mozenfant = require("./books/mozenfant.js");
const zakaatimcomplet = require("./books/zakaatimcomplet.js");
const fawaaid = require("./books/fawaaid.js");
const jihaadmnhj = require("./books/jihaadmnhj.js");
const peche = require("./books/peche.js");

const caractere = require("./books/caractere.js");
const bidah = require("./books/bidah.js");
const contradiction = require("./books/contradiction.js");
const iymaanaa = require("./books/iymaanaa.js");
const rusul = require("./books/rusul.js");
const rabiiconnaissances = require("./books/rabiiconnaissances.js");
const destin = require("./books/destin.js");
const aadaabconnaissance = require("./books/aadaabconnaissance.js");
const cotallaah = require("./books/cotallaah.js");
const taqleed = require("./books/taqleed.js");
const rudoud1 = require("./books/rudoud1.js");
const jannah = require("./books/jannah.js");
const twalaq = require("./books/twalaq.js");
const qadiani = require("./books/qadiani.js");
const selectionpetithadiith = require("./books/selectionpetithadiith.js");
const darga = require("./books/darga.js");
const hajj2023 = require("./books/hajj2023.js");
const kitaabswiyaam = require("./books/kitaabswiyaam.js");

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
  erreurgramatical,
  nager,
  asraf2024,
  shirkabdallah,
  lastseen,
  mopekitsunnatjamaat,
  roumiunescokustar,
  zka2023,
  younussoufi,
  abdoulmunaafiq,
  tocoumajuif,
  ppeches,
  lajoieducoeur,
  heureiftwaar2,
  restetolacaze,
  coumafaireenecontratnikaah,
  coronadansquran,
  jannahforme,
  qadianidonnesalafiraison,
  luqman,
  lalumiere,
  iftarparty,
  differencesunnishiah,
  duaaduprophetepouralmiqdaad,
  duaa2,
  aadam,
  satanfairepourtoi,
  rapprochement,
  supportemasijidsalafi,
  umarsuoud,
  russieukraine,
  congedecembre1,
  exempleallaah,
  kabahdeobandi,
  abdouldg,
  peches6,
  hajj,
  hunafa,
  barakat,
  alasr,
  wasilabidah,
  kitchoz4,
  ynqa,
  zaahir,
  apprendredeen,
  portab,
  zakaattla,
  erreursdialogues,
  madaakhilah,
  qabr,
  s5v82,
  qaariah,
  homo,
  obligationunir,
  ruine,
  mentiibrahim,
  gravitenegligelesson,
  depense,
  corrigecomprehension,
  mmaladies,
  reponseaeneattaquedemustafa,
  khutbah,
  alhuda,
  publicite,
  totracas1,
  infitwaar,
  lamortabutwalib,
  fetekafir,
  ibrahim,
  prendcomptetobansactions,
  jin11,
  laviecourte,
  grandreve,
  salafiyyahbaazmoul,
  kustar,
  coumacontrollalangue,
  moubiqaat,
  paroleumaraziiz,
  haardanslicouhaaroun,
  consultation,
  kiferislaam,
  poussetravers,
  valeuriymaan,
  crimes99,
  leader,
  conneamenetolavie,
  dwimaad,
  khubayb,
  duaaaqeedah,
  hudaterrorisme,
  liaison,
  salatnour,
  payskafir,
  cheveuxbouffon,
  duaaquraan,
  rizqfacilite,
  argentdirigeverslenfer,
  istisqaakhutbah,
  arafat1444,
  messagessalaam,
  malounaat,
  metserieux,
  duaaange,
  coupedumonde,
  zikralledormi,
  enemisislam,
  globalfasting,
  sincere,
  sheikhfawzanlorsayyid,
  bansveridiquespaspeurbansmenteurs,
  douceur,
  rajab,
  bareilwiahbaash,
  reponsedenepetitgarson,
  jin1,
  changer,
  khutbahibnmasoud,
  masjidmarchant1,
  bienetrekuffar,
  vaccin,
  contributiondawah,
  honneurislaam,
  bonhajj,
  parolezuhri,
  vertusalaam,
  duaaammaar,
  khusouswalat,
  gatevaleurpardah,
  topapa1,
  election,
  victoireislaam,
  khusou2,
  troisayatkhutbahhaajah,
  conseils7,
  quifairenouscontentarabiesaoudite,
  musulmanpolitique,
  simpleveriter,
  kaafirplusserieuxquitoi,
  pascausementi,
  masjidboneur,
  nouvellemusulmane,
  conseilsnouvomusulmans,
  bookreadingsoimportance,
  conger,
  paresse,
  brulepavillon,
  hhhh,
  assurance,
  injusticeconnaissancedeen,
  profitelesmorts,
  redressesituationpolitique,
  najmi,
  standenverskufr,
  afinpasregretter,
  imitationtrou,
  khutbah27,
  lafindecembre,
  mauvaislamort,
  satisfaction,
  contentgagnejannah,
  hadishuzayfah,
  hadithirbaad,
  invitationagentsshaytwaan,
  luhaydaan,
  deenbadinage,
  lapaix,
  zourer,
  jeunesse,
  examen,
  tiralarc,
  avertissementzinaa,
  vieillesse,
  loveforall,
  intelligence,
  s6v151,
  haalat,
  arrivesacotenous,
  limportancetwahaarah,
  omobansesclaves,
  qadianikaafir,
  reglementnouvomusulman,
  honneursalafi,
  salafiyyahahmadnajmi,
  zistoirestabligh,
  consequence1,
  sunnatentremagribesha,
  educationacademik,
  abscde,
  apprendredeenpriorite,
  deentomber,
  amelioreoudeteriore,
  arrogance,
  swalaatmasjidbidati,
  badinage,
  quifairemopaseneshiiah,
  atmospherehajj,
  sauvetoiislaam,
  madinabidah,
  malhonnetete,
  swalatnouvo,
  hajjconseilsmadames,
  cyclone,
  pechetofrere,
  suunahjumuah,
  tournenousdansjihaad,
  s33v35,
  indecence,
  avantmarieroutifille,
  faveurdelo,
  histoireasraf,
  noumanali,
  duashirksavants,
  salafiyyahibnbaaz,
  prencompteougrson,
  savantsegares,
  kisanlaintelligent,
  mamanabuhurayrah,
  ghibat,
  societemadinah,
  madiinah,
  cequimoinspire,
  aadaabsorti,
  cigaret,
  perdipendantconfinement,
  battemadame,
  niqaab,
  frequentation,
  iysaa,
  quigagnerdansopposehaq,
  rozaautre1,
  tremblement,
  fajr,
  mahram,
  conseils,
  aayatulkursi,
  tamtam,
  blaguerapresesha,
  tamtamdecembre,
  aadaablever,
  combat,
  jin8,
  promotion,
  salafiuthaymin,
  laveriteclaire,
  jannahfacile,
  oubliepasse,
  madameaccepterislaam,
  gaza,
  mubaahalah,
  modernisme,
  bokouzenfants,
  coumabanlaoulertovivre,
  humilitesalaf,
  wahdatbareilwi,
  kab,
  egarementtabligh,
  zikrlematin,
  kusoufresume,
  lessoninternet,
  maladieamour,
  debatsoplace,
  jin6,
  assassinatumar,
  qunoutnawaazil,
  khidr,
  parfaireswalat,
  labarbe,
  jin7,
  aadaabchemin,
  sunnahavantmaghrib,
  tombeegarement,
  amustfapesauverdemubaahalah,
  ahlussunna,
  droitsmadames,
  erreursjanaazah,
  qrbidah,
  maladetwahaarah,
  passion,
  dispute,
  jin12,
  sajdah,
  embrassepouce,
  ibaadurrahmaan,
  waswasah,
  admireharaam,
  meerun,
  mensongeamustafa,
  permission,
  jin10,
  akoz,
  profitebansmorts,
  lagarde,
  pemort,
  mariageislamique,
  businessruqyah,
  mahdi,
  sortitabligh,
  erreursacre,
  lamainapresrukou,
  salafzenfant,
  zakaatdawah,
  azaanapresdafan,
  consolation,
  importancearabe,
  infidelite,
  lalangue,
  haidpetite,
  lamortbidatipeerbye,
  muftibilal,
  fitnahdunyaa,
  bassessepeerbye,
  contributionmadame,
  tousdansenfer,
  khilafahignorants,
  kiferibaadat,
  bidahhasanahmustafa,
  falsificationhadis,
  isis,
  qiyaamah,
  swahabahcontentislaam,
  jamiil,
  maladeswalaat,
  lakaze,
  umrahbref,
  asrafappel,
  peerbyetapearcolonnne,
  salafiyyahles4imaam,
  aadaabcauser,
  madamefairesalatmasjid,
  mixite,
  reponsesexplicites,
  thawablalangue,
  reza,
  swalaatduhaa,
  lamusique,
  shaban,
  hajjprofits,
  palestine,
  khutbahzk,
  quelgroupe,
  bareilwiresume,
  abdouldefense,
  accusation,
  innocencesalafiyyah,
  aadaabreve,
  endeuil,
  jin2,
  quiz,
  hiver,
  muharram,
  mubaahalahvstawbah,
  rendremaladevisite,
  exageration,
  hizbuttahreer,
  asraffalsificationquran,
  peerbyeenflamme,
  dixzulhijjah,
  jim9,
  aadaabriye,
  wahabi,
  jin5,
  formation,
  hausse,
  lapluie,
  tawheedavanttout,
  finimort,
  lichien,
  zikrimportance,
  nawawi40,
  argentharaam,
  adil,
  jin4,
  zabah,
  swalatistisqaa,
  salafisecte,
  dawabidati,
  aadaabpleurer,
  bidahuthaymiin,
  corona,
  jin3,
  gagnanouvelle,
  aadaab,
  hijaamah,
  liaan,
  tawheed,
  khul,
  erreursmuswalli,
  oprofet,
  manhaj,
  reglementswalattatwawwu,
  sauvenousmaurice,
  suivreulamaa,
  fiqh2,
  stress,
  sawmresume,
  baignemayyit,
  fiqh3,
  aadaabdormi,
  ubydjbri,
  delo,
  charieetsuivre,
  ziyaratqabrastaan,
  azkaar,
  aqeedahpetit,
  difference,
  itikaaf,
  alhudaenesecte,
  shirkibntaymiyyah,
  musulmanidentite,
  fatwaalabbaad,
  kawtharizikr,
  intro11,
  khutbahcreole,
  prophetenour,
  sunanfitrah,
  sajdasahu,
  vertuswalaat,
  hadis75,
  lamentation,
  aadaabswadaqah,
  polygamiereglements,
  propphetemort,
  toilette,
  duaprofitab,
  alhudazionis,
  dawasalafiyyah,
  swahaabah1,
  bareillwisalafi,
  parentsduprophete,
  conseilsajeunes,
  quraaniyyoun,
  dafan,
  sunanraatibah,
  jourslesons12,
  fiqh1,
  dawakafir,
  nomsallaahpourzenfants,
  ikhwaan,
  bahai,
  propheteghaib,
  swalatactions,
  usoultafsiir,
  salafiyyahrabii,
  raisons7,
  lamort1,
  najaazaat,
  ynfinalement,
  zinaa,
  awliyaa,
  rafulyadayn1,
  quraniyounnakchedy,
  petithadismadrasah,
  rafida,
  ibntaymiabio,
  nawaaqid,
  swalatjanazah,
  depenselestemps,
  shirkamustafa,
  fatwaseries1,
  sexualite,
  eidreglements,
  hazir,
  anges,
  fatwaanajmi,
  halaaal,
  barbahaari,
  soufisme,
  mozenfant,
  yawmunnabideux,
  zakaatimcomplet,
  peche,
  fawaaid,
  jihaadmnhj,
  bidah,
  darga,
  caractere,
  contradiction,
  iymaanaa,
  rusul,
  destin,
  rudoud1,
  rabiiconnaissances,
  aadaabconnaissance,
  taqleed,
  jannah,
  twalaq,
  qadiani,
  selectionpetithadiith,
  kitaabswiyaam,
  hajj2023,
];

let allBooksSet = new Set();

for (let books of allBooksArray) {
  const wordArray = books
    .replace(/[^\w\sàèéâôê'-]/gi, "")
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
