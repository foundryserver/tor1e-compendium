export class Tor1eCompendiumPNJ {
  async creationPNJs() {
    console.log("===== CREATING NPCs ====");

    // NPC FOLDER
    let dossierPNJ = await Folder.create({
      name: "NPC",
      type: "Actor",
      sorting: "a",
      parent: null,
    });

    // FOLDER FOR REGIONS / PEOPLES
    let dossierHommesDesBois = await Folder.create({
      name: "Men of the Woods",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierBeornides = await Folder.create({
      name: "Beornings",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierNains = await Folder.create({
      name: "Dwarves",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierHommesMauvais = await Folder.create({
      name: "Evil Men",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierEsgaroth = await Folder.create({
      name: "Esgaroth",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierDale = await Folder.create({
      name: "Dale",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierViglundings = await Folder.create({
      name: "Viglundings",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierHommesAnduin = await Folder.create({
      name: "Vales of Anduin",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierEriador = await Folder.create({
      name: "Men of Eriador",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierElfesForetNoire = await Folder.create({
      name: "Elves of the Black Forest",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierElfesFondcombe = await Folder.create({
      name: "Elves of Rivendell",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierElfesLorien = await Folder.create({
      name: "Elves of Lorien",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierHobbits = await Folder.create({
      name: "Hobbits",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });
    let dossierOrientaux = await Folder.create({
      name: "Orientals",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierPNJ._id,
    });

    // CREATION DES ACTORS
    let monActor1 = await this.ajouteUnPNJ(dossierHommesDesBois, "Hartfast, son of Harmunt", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 18, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor2 = await this.ajouteUnPNJ(dossierHommesDesBois, "Beranald the Gatekeeper", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 15, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor3 = await this.ajouteUnPNJ(dossierHommesDesBois, "Iwmud the Goatherd", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 15, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor4 = await this.ajouteUnPNJ(dossierHommesDesBois, "Gárhild the Vixen", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 16, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor5 = await this.ajouteUnPNJ(dossierHommesDesBois, "The Daughters of the Forest", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor6 = await this.ajouteUnPNJ(dossierHommesMauvais, "Valdis (woman)", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 19, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.HOSTILE);
    let monActor7 = await this.ajouteUnPNJ(dossierHommesMauvais, "Sorceress of the Black Forest", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.HOSTILE);
    let monActor8 = await this.ajouteUnPNJ(dossierEsgaroth, "Guard of Lake-town", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 17, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor9 = await this.ajouteUnPNJ(dossierEsgaroth, "Merchant of Esgaroth", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor10 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Fire-starter)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor11 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Boatman)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor12 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Hunter)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor13 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Cook)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor14 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Smith)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor15 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Herbalist)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor16 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Gardener)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor17 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Mason)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor18 = await this.ajouteUnPNJ(dossierEsgaroth, "Craftsman (Carpenter)", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor19 = await this.ajouteUnPNJ(dossierEsgaroth, "Captain of the Guard", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor20 = await this.ajouteUnPNJ(dossierEsgaroth, "Guard of the Guard", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor21 = await this.ajouteUnPNJ(dossierEsgaroth, "Town Councillor", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor22 = await this.ajouteUnPNJ(dossierEsgaroth, "Healer", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor23 = await this.ajouteUnPNJ(dossierEsgaroth, "Boatman of Esgaroth", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor24 = await this.ajouteUnPNJ(dossierEsgaroth, "Guild Archer", "modules/tor1e-compendium/icons/pnj-homme.webp", 7, 19, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor25 = await this.ajouteUnPNJ(dossierDale, "Royal Archer of Dale", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 20, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor26 = await this.ajouteUnPNJ(dossierBeornides, "Osred the Rider", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 21, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor27 = await this.ajouteUnPNJ(dossierBeornides, "Túrin the Tinker", "modules/tor1e-compendium/icons/pnj-homme.webp", 2, 16, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor28 = await this.ajouteUnPNJ(dossierBeornides, "Gelvira Pot-stirrer", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor29 = await this.ajouteUnPNJ(dossierBeornides, "Ennalda, the Spear-maiden", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 19, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor30 = await this.ajouteUnPNJ(dossierBeornides, "Dwarf Smith", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 17, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor31 = await this.ajouteUnPNJ(dossierNains, "Bofri, son of Bofur", "modules/tor1e-compendium/icons/pnj-nain.webp", 3, 21, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor32 = await this.ajouteUnPNJ(dossierNains, "Dwarf Noble", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor33 = await this.ajouteUnPNJ(dossierNains, "Frar the Beardless", "modules/tor1e-compendium/icons/pnj-nain.webp", 4, 22, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor34 = await this.ajouteUnPNJ(dossierNains, "Tholin the Merchant", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor35 = await this.ajouteUnPNJ(dossierHommesDesBois, "Geirbald the Kinslayer", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 17, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor36 = await this.ajouteUnPNJ(dossierHommesDesBois, "Ingomer Axe-breaker", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 17, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor37 = await this.ajouteUnPNJ(dossierHommesDesBois, "Mogdred", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor38 = await this.ajouteUnPNJ(dossierEsgaroth, "Hunald, the Bewitched Assassin", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor39 = await this.ajouteUnPNJ(dossierDale, "Bardide Noble", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 20, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor40 = await this.ajouteUnPNJ(dossierDale, "Elstan, First Captain of Dale", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor41 = await this.ajouteUnPNJ(dossierDale, "Elstan's Men", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 12, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor42 = await this.ajouteUnPNJ(dossierEsgaroth, "Halbrech", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 16, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor43 = await this.ajouteUnPNJ(dossierViglundings, "Viglund", "modules/tor1e-compendium/icons/pnj-homme.webp", 7, 23, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor44 = await this.ajouteUnPNJ(dossierViglundings, "Viglar, son of Viglund", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 19, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor45 = await this.ajouteUnPNJ(dossierViglundings, "Saviga the Goblin", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 12, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor46 = await this.ajouteUnPNJ(dossierViglundings, "Thunar", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 21, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor47 = await this.ajouteUnPNJ(dossierViglundings, "Aestid, daughter of Viglund", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor48 = await this.ajouteUnPNJ(dossierHommesAnduin, "Amfossa the Trapper", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 30, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor49 = await this.ajouteUnPNJ(dossierHommesAnduin, "Hwalda", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 15, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor50 = await this.ajouteUnPNJ(dossierHommesAnduin, "Mab the Spinner", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor51 = await this.ajouteUnPNJ(dossierHommesAnduin, "Cruac the Outlaw", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 18, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor52 = await this.ajouteUnPNJ(dossierHommesAnduin, "Tom the Black", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor53 = await this.ajouteUnPNJ(dossierHommesAnduin, "Valderic", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 21, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor54 = await this.ajouteUnPNJ(dossierHommesAnduin, "Arciryas", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor55 = await this.ajouteUnPNJ(dossierHommesAnduin, "Vidugalum", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 30, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor56 = await this.ajouteUnPNJ(dossierEriador, "Ostley the Mad", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 15, "<p><em>Fondcombe, page 62</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor57 = await this.ajouteUnPNJ(dossierEriador, "Arbarad", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 24, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor58 = await this.ajouteUnPNJ(dossierEriador, "Talandil", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 20, "<p><em>Fondcombe, page 59</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor59 = await this.ajouteUnPNJ(dossierEriador, "Hiraval, son of Hirgeleb", "modules/tor1e-compendium/icons/pnj-homme.webp", 7, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor60 = await this.ajouteUnPNJ(dossierEriador, "Edrahil, son of Hiraval", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 12, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor61 = await this.ajouteUnPNJ(dossierEriador, "Arnulf the Leofide", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 18, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor62 = await this.ajouteUnPNJ(dossierDale, "Gwina", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 15, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor63 = await this.ajouteUnPNJ(dossierEriador, "Kyna", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 18, "<p><em>Fondcombe, page 65</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor64 = await this.ajouteUnPNJ(dossierEriador, "Bradan", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 19, "<p><em>Fondcombe, page 66</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor65 = await this.ajouteUnPNJ(dossierEsgaroth, "Elven Boatman", "modules/tor1e-compendium/icons/pnj-elfe.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor66 = await this.ajouteUnPNJ(dossierEsgaroth, "Woodland Elf Envoy", "modules/tor1e-compendium/icons/pnj-elfe.webp", 6, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor67 = await this.ajouteUnPNJ(dossierEsgaroth, "Woodland Elf Sentinel", "modules/tor1e-compendium/icons/pnj-elfe.webp", 6, 18, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor68 = await this.ajouteUnPNJ(dossierElfesForetNoire, "King Thranduil", "modules/tor1e-compendium/icons/pnj-elfe.webp", 9, 60, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor69 = await this.ajouteUnPNJ(dossierElfesFondcombe, "Elrond", "modules/tor1e-compendium/icons/pnj-elfe.webp", 9, 0, "<p><em>Fondcombe, page 13</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor70 = await this.ajouteUnPNJ(dossierElfesFondcombe, "Arwen Undómiel", "modules/tor1e-compendium/icons/pnj-elfe.webp", 7, 0, "<p><em>Fondcombe, page 15</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor71 = await this.ajouteUnPNJ(dossierElfesFondcombe, "Glorfindel", "modules/tor1e-compendium/icons/pnj-elfe.webp", 9, 0, "<p><em>Fondcombe, page 16</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor72 = await this.ajouteUnPNJ(dossierElfesFondcombe, "Aiwiel", "modules/tor1e-compendium/icons/pnj-elfe.webp", 5, 0, "<p><em>Fondcombe, page 33</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor73 = await this.ajouteUnPNJ(dossierElfesFondcombe, "Gondril", "modules/tor1e-compendium/icons/pnj-elfe.webp", 5, 18, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor74 = await this.ajouteUnPNJ(dossierElfesLorien, "Cendre", "modules/tor1e-compendium/icons/pnj-elfe.webp", 8, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor75 = await this.ajouteUnPNJ(dossierElfesLorien, "Haldir", "modules/tor1e-compendium/icons/pnj-elfe.webp", 8, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor76 = await this.ajouteUnPNJ(dossierHobbits, "Byrgol", "modules/tor1e-compendium/icons/pnj-hobbit.webp", 3, 13, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor77 = await this.ajouteUnPNJ(dossierHobbits, "Folulf and Arnulf", "modules/tor1e-compendium/icons/pnj-hobbit.webp", 4, 12, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor78 = await this.ajouteUnPNJ(dossierHobbits, "Elwin", "modules/tor1e-compendium/icons/pnj-hobbit.webp", 4, 12, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor79 = await this.ajouteUnPNJ(dossierHobbits, "Fay", "modules/tor1e-compendium/icons/pnj-hobbit.webp", 5, 10, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor80 = await this.ajouteUnPNJ(dossierHobbits, "Herbert", "modules/tor1e-compendium/icons/pnj-hobbit.webp", 3, 12, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor81 = await this.ajouteUnPNJ(dossierNains, "Stone Guard", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 18, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor82 = await this.ajouteUnPNJ(dossierNains, "Iron Guard", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 26, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor83 = await this.ajouteUnPNJ(dossierNains, "Smith of Erebor", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor84 = await this.ajouteUnPNJ(dossierNains, "Mason of Erebor", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor85 = await this.ajouteUnPNJ(dossierNains, "Dáin Ironfoot, King under the Mountain", "modules/tor1e-compendium/icons/pnj-nain.webp", 8, 28, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor86 = await this.ajouteUnPNJ(dossierNains, "Munin, Keeper of the Archives", "modules/tor1e-compendium/icons/pnj-nain.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor87 = await this.ajouteUnPNJ(dossierNains, "Glóin the Envoy", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor88 = await this.ajouteUnPNJ(dossierNains, "Óin the Healer", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor89 = await this.ajouteUnPNJ(dossierNains, "Bifur the Merchant", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor90 = await this.ajouteUnPNJ(dossierNains, "Bofur the Miner", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor91 = await this.ajouteUnPNJ(dossierNains, "Bombur the Fat", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor92 = await this.ajouteUnPNJ(dossierNains, "Balin the Statesman", "modules/tor1e-compendium/icons/pnj-nain.webp", 7, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor93 = await this.ajouteUnPNJ(dossierNains, "Dori the Merchant", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor94 = await this.ajouteUnPNJ(dossierNains, "Dwalin the Warrior", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 25, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor95 = await this.ajouteUnPNJ(dossierNains, "Ori the Scribe", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor96 = await this.ajouteUnPNJ(dossierDale, "Merchant of Dale", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor97 = await this.ajouteUnPNJ(dossierDale, "Smith of the Hammer Street", "modules/tor1e-compendium/icons/pnj-nain.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor98 = await this.ajouteUnPNJ(dossierDale, "Bardide Courtier", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor99 = await this.ajouteUnPNJ(dossierDale, "Guard of Dale", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 17, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor100 = await this.ajouteUnPNJ(dossierDale, "Captain of the Guard of Dale", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 20, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor101 = await this.ajouteUnPNJ(dossierDale, "Healer of the Water House", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, false, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor102 = await this.ajouteUnPNJ(dossierDale, "Bard the Dragon-slayer, King of Dale", "modules/tor1e-compendium/icons/pnj-homme.webp", 6, 26, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor103 = await this.ajouteUnPNJ(dossierDale, "Queen Una the Fair", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor104 = await this.ajouteUnPNJ(dossierDale, "Brindal, Clever Thief", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 0, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor105 = await this.ajouteUnPNJ(dossierDale, "Bryni, Lord of Rivebourg", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 19, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor106 = await this.ajouteUnPNJ(dossierDale, "Garrick of the Black Arrow", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 19, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor107 = await this.ajouteUnPNJ(dossierDale, "Hakon, Bardide Noble", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 26, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor108 = await this.ajouteUnPNJ(dossierDale, "Erna", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 32, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor109 = await this.ajouteUnPNJ(dossierDale, "Hakon, Bardide Noble", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 26, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor110 = await this.ajouteUnPNJ(dossierElfesForetNoire, "Ellaras the Seeker", "modules/tor1e-compendium/icons/pnj-elfe.webp", 6, 28, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor111 = await this.ajouteUnPNJ(dossierNains, "Thorin Stonehelm", "modules/tor1e-compendium/icons/pnj-nain.webp", 6, 24, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor112 = await this.ajouteUnPNJ(dossierDale, "Alduna", "modules/tor1e-compendium/icons/pnj-homme.webp", 3, 17, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor113 = await this.ajouteUnPNJ(dossierOrientaux, "Kajus the Oriental", "modules/tor1e-compendium/icons/pnj-homme.webp", 4, 13, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);
    let monActor114 = await this.ajouteUnPNJ(dossierDale, "Loore the Tracker", "modules/tor1e-compendium/icons/pnj-homme.webp", 5, 19, "<p><em>See Core Rule Book</em></p>", false, true, CONST.TOKEN_DISPOSITIONS.NEUTRAL);

    // AJOUT DES COMPETENCES NOTABLES
    await this.ajouteCompetenceNotable(monActor1, "Presence", 3, true);
    await this.ajouteCompetenceNotable(monActor1, "Intuition", 3, false);
    await this.ajouteCompetenceNotable(monActor1, "Axe", 3, true);
    await this.ajouteCompetenceNotable(monActor2, "Presence", 3, false);
    await this.ajouteCompetenceNotable(monActor2, "Intuition", 3, false);
    await this.ajouteCompetenceNotable(monActor2, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor3, "Knowledge", 3, false);
    await this.ajouteCompetenceNotable(monActor3, "Puzzles", 3, true);
    await this.ajouteCompetenceNotable(monActor3, "Singing", 2, false);
    await this.ajouteCompetenceNotable(monActor4, "Stealth", 4, false);
    await this.ajouteCompetenceNotable(monActor4, "Exploration", 4, false);
    await this.ajouteCompetenceNotable(monActor4, "Spear", 3, false);
    await this.ajouteCompetenceNotable(monActor5, "Stealth", 5, true);
    await this.ajouteCompetenceNotable(monActor5, "Persuasion", 3, true);
    await this.ajouteCompetenceNotable(monActor6, "Hunting", 3, false);
    await this.ajouteCompetenceNotable(monActor6, "Puzzles", 4, false);
    await this.ajouteCompetenceNotable(monActor6, "Warfare", 2, false);
    await this.ajouteCompetenceNotable(monActor7, "Knowledge", 5, false);
    await this.ajouteCompetenceNotable(monActor8, "Awareness", 2, false);
    await this.ajouteCompetenceNotable(monActor8, "Search", 2, false);
    await this.ajouteCompetenceNotable(monActor8, "Spear", 2, false);
    await this.ajouteCompetenceNotable(monActor9, "Intuition", 2, false);
    await this.ajouteCompetenceNotable(monActor9, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor10, "Crafting", 4, true);
    await this.ajouteCompetenceNotable(monActor19, "Sword", 2, true);
    await this.ajouteCompetenceNotable(monActor20, "Athletics", 2, false);
    await this.ajouteCompetenceNotable(monActor20, "Awareness", 2, true);
    await this.ajouteCompetenceNotable(monActor21, "Courtesy", 3, true);
    await this.ajouteCompetenceNotable(monActor21, "Knowledge", 2, false);
    await this.ajouteCompetenceNotable(monActor22, "Healing", 3, true);
    await this.ajouteCompetenceNotable(monActor22, "Knowledge", 2, true);
    await this.ajouteCompetenceNotable(monActor23, "Athletics", 3, true);
    await this.ajouteCompetenceNotable(monActor23, "Travel", 2, false);
    await this.ajouteCompetenceNotable(monActor24, "Awareness", 2, false);
    await this.ajouteCompetenceNotable(monActor24, "Longbow", 3, true);
    await this.ajouteCompetenceNotable(monActor25, "Awareness", 3, true);
    await this.ajouteCompetenceNotable(monActor25, "Longbow", 3, true);
    await this.ajouteCompetenceNotable(monActor26, "Athletics", 3, false);
    await this.ajouteCompetenceNotable(monActor26, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor26, "Spear", 3, true);
    await this.ajouteCompetenceNotable(monActor27, "Travel", 3, false);
    await this.ajouteCompetenceNotable(monActor27, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor27, "Puzzles", 3, true);
    await this.ajouteCompetenceNotable(monActor28, "Crafting", 3, true);
    await this.ajouteCompetenceNotable(monActor28, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor28, "Warfare", 3, false);
    await this.ajouteCompetenceNotable(monActor29, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor29, "Spear", 3, true);
    await this.ajouteCompetenceNotable(monActor30, "Crafting", 4, true);
    await this.ajouteCompetenceNotable(monActor31, "Exploration", 3, true);
    await this.ajouteCompetenceNotable(monActor31, "Crafting", 4, false);
    await this.ajouteCompetenceNotable(monActor32, "Presence", 3, false);
    await this.ajouteCompetenceNotable(monActor32, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor32, "Warfare", 2, false);
    await this.ajouteCompetenceNotable(monActor33, "Survival", 3, true);
    await this.ajouteCompetenceNotable(monActor33, "Axe", 3, false);
    await this.ajouteCompetenceNotable(monActor34, "Travel", 4, true);
    await this.ajouteCompetenceNotable(monActor34, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor34, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor34, "Axe", 2, false);
    await this.ajouteCompetenceNotable(monActor35, "Hunting", 5, false);
    await this.ajouteCompetenceNotable(monActor35, "Long Axe", 3, true);
    await this.ajouteCompetenceNotable(monActor36, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor36, "Warfare", 4, false);
    await this.ajouteCompetenceNotable(monActor36, "Axe", 4, true);
    await this.ajouteCompetenceNotable(monActor37, "Warfare", 4, false);
    await this.ajouteCompetenceNotable(monActor37, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor37, "Sword", 3, false);
    await this.ajouteCompetenceNotable(monActor38, "Awareness", 3, false);
    await this.ajouteCompetenceNotable(monActor38, "Sword", 3, false);
    await this.ajouteCompetenceNotable(monActor38, "Longbow", 3, true);
    await this.ajouteCompetenceNotable(monActor39, "Inspiration", 3, false);
    await this.ajouteCompetenceNotable(monActor39, "Persuasion", 1, false);
    await this.ajouteCompetenceNotable(monActor39, "Long Sword", 3, true);
    await this.ajouteCompetenceNotable(monActor40, "Awareness", 3, true);
    await this.ajouteCompetenceNotable(monActor40, "Warfare", 3, false);
    await this.ajouteCompetenceNotable(monActor40, "Inspiration", 4, true);
    await this.ajouteCompetenceNotable(monActor40, "Sword", 4, false);
    await this.ajouteCompetenceNotable(monActor40, "Spear", 4, true);
    await this.ajouteCompetenceNotable(monActor41, "Personality", 2, false);
    await this.ajouteCompetenceNotable(monActor41, "Movement", 2, false);
    await this.ajouteCompetenceNotable(monActor41, "Perception", 2, false);
    await this.ajouteCompetenceNotable(monActor41, "Survival", 1, false);
    await this.ajouteCompetenceNotable(monActor41, "Customs", 3, true);
    await this.ajouteCompetenceNotable(monActor41, "Profession", 2, false);
    await this.ajouteCompetenceNotable(monActor41, "Sword", 2, false);
    await this.ajouteCompetenceNotable(monActor42, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor42, "Stealth", 3, true);
    await this.ajouteCompetenceNotable(monActor43, "Warfare", 3, true);
    await this.ajouteCompetenceNotable(monActor43, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor43, "Axe", 4, true);
    await this.ajouteCompetenceNotable(monActor44, "Singing", 3, false);
    await this.ajouteCompetenceNotable(monActor44, "Persuasion", 2, true);
    await this.ajouteCompetenceNotable(monActor44, "Axe", 3, true);
    await this.ajouteCompetenceNotable(monActor45, "Intuition", 3, true);
    await this.ajouteCompetenceNotable(monActor45, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor45, "Spear", 3, true);
    await this.ajouteCompetenceNotable(monActor46, "Warfare", 4, false);
    await this.ajouteCompetenceNotable(monActor46, "Hunting", 3, true);
    await this.ajouteCompetenceNotable(monActor46, "Axe", 4, false);
    await this.ajouteCompetenceNotable(monActor46, "Bow", 3, false);
    await this.ajouteCompetenceNotable(monActor47, "Stealth", 4, false);
    await this.ajouteCompetenceNotable(monActor47, "Puzzles", 3, false);
    await this.ajouteCompetenceNotable(monActor48, "Hunting", 3, true);
    await this.ajouteCompetenceNotable(monActor48, "Knowledge", 3, false);
    await this.ajouteCompetenceNotable(monActor48, "Bow", 3, true);
    await this.ajouteCompetenceNotable(monActor49, "Hunting", 3, false);
    await this.ajouteCompetenceNotable(monActor49, "Exploration", 3, true);
    await this.ajouteCompetenceNotable(monActor49, "Sword", 2, true);
    await this.ajouteCompetenceNotable(monActor50, "Knowledge", 4, false);
    await this.ajouteCompetenceNotable(monActor50, "Healing", 3, true);
    await this.ajouteCompetenceNotable(monActor50, "Crafting", 3, true);
    await this.ajouteCompetenceNotable(monActor51, "Warfare", 4, false);
    await this.ajouteCompetenceNotable(monActor51, "Puzzles", 3, true);
    await this.ajouteCompetenceNotable(monActor52, "Presence", 2, false);
    await this.ajouteCompetenceNotable(monActor52, "Singing", 3, false);
    await this.ajouteCompetenceNotable(monActor52, "Long Axe", 2, false);
    await this.ajouteCompetenceNotable(monActor53, "Exploration", 3, false);
    await this.ajouteCompetenceNotable(monActor53, "Search", 3, true);
    await this.ajouteCompetenceNotable(monActor54, "Knowledge", 4, false);
    await this.ajouteCompetenceNotable(monActor54, "Healing", 4, true);
    await this.ajouteCompetenceNotable(monActor55, "Courtesy", 2, false);
    await this.ajouteCompetenceNotable(monActor55, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor55, "Knowledge", 3, true);
    await this.ajouteCompetenceNotable(monActor56, "Search", 3, false);
    await this.ajouteCompetenceNotable(monActor56, "Exploration", 2, true);
    await this.ajouteCompetenceNotable(monActor57, "Awareness", 3, false);
    await this.ajouteCompetenceNotable(monActor57, "Travel", 2, false);
    await this.ajouteCompetenceNotable(monActor57, "Hunting", 3, false);
    await this.ajouteCompetenceNotable(monActor57, "Longbow", 3, false);
    await this.ajouteCompetenceNotable(monActor58, "Knowledge", 3, false);
    await this.ajouteCompetenceNotable(monActor58, "Singing", 2, true);
    await this.ajouteCompetenceNotable(monActor58, "Long Sword", 2, false);
    await this.ajouteCompetenceNotable(monActor59, "Presence", 3, false);
    await this.ajouteCompetenceNotable(monActor59, "Travel", 3, false);
    await this.ajouteCompetenceNotable(monActor59, "Long Sword", 3, true);
    await this.ajouteCompetenceNotable(monActor59, "Bow", 2, true);
    await this.ajouteCompetenceNotable(monActor60, "Singing", 2, false);
    await this.ajouteCompetenceNotable(monActor60, "Courtesy", 2, false);
    await this.ajouteCompetenceNotable(monActor60, "Healing", 1, true);
    await this.ajouteCompetenceNotable(monActor60, "Bow", 3, false);
    await this.ajouteCompetenceNotable(monActor61, "Stealth", 4, false);
    await this.ajouteCompetenceNotable(monActor61, "Exploration", 4, true);
    await this.ajouteCompetenceNotable(monActor61, "Spear", 3, false);
    await this.ajouteCompetenceNotable(monActor62, "Athletics", 3, false);
    await this.ajouteCompetenceNotable(monActor62, "Puzzles", 3, true);
    await this.ajouteCompetenceNotable(monActor62, "Spear", 2, false);
    await this.ajouteCompetenceNotable(monActor63, "Athletics", 2, true);
    await this.ajouteCompetenceNotable(monActor63, "Exploration", 2, false);
    await this.ajouteCompetenceNotable(monActor63, "Spear", 3, false);
    await this.ajouteCompetenceNotable(monActor64, "Athletics", 2, false);
    await this.ajouteCompetenceNotable(monActor64, "Travel", 2, false);
    await this.ajouteCompetenceNotable(monActor65, "Travel", 3, true);
    await this.ajouteCompetenceNotable(monActor66, "Courtesy", 3, true);
    await this.ajouteCompetenceNotable(monActor66, "Intuition", 2, false);
    await this.ajouteCompetenceNotable(monActor67, "Athletics", 2, true);
    await this.ajouteCompetenceNotable(monActor67, "Spear", 2, false);
    await this.ajouteCompetenceNotable(monActor67, "Bow", 3, false);
    await this.ajouteCompetenceNotable(monActor68, "Knowledge", 4, true);
    await this.ajouteCompetenceNotable(monActor68, "Courtesy", 5, false);
    await this.ajouteCompetenceNotable(monActor68, "Spear", 5, true);
    await this.ajouteCompetenceNotable(monActor68, "Bow", 5, false);
    await this.ajouteCompetenceNotable(monActor69, "Knowledge", 6, true);
    await this.ajouteCompetenceNotable(monActor69, "Healing", 5, true);
    await this.ajouteCompetenceNotable(monActor69, "Intuition", 4, false);
    await this.ajouteCompetenceNotable(monActor70, "Crafting", 3, true);
    await this.ajouteCompetenceNotable(monActor70, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor70, "Intuition", 4, true);
    await this.ajouteCompetenceNotable(monActor71, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor71, "Exploration", 4, true);
    await this.ajouteCompetenceNotable(monActor71, "Warfare", 5, true);
    await this.ajouteCompetenceNotable(monActor72, "Knowledge", 4, true);
    await this.ajouteCompetenceNotable(monActor72, "Search", 3, false);
    await this.ajouteCompetenceNotable(monActor73, "Crafting", 3, true);
    await this.ajouteCompetenceNotable(monActor73, "Long Sword", 2, false);
    await this.ajouteCompetenceNotable(monActor74, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor74, "Knowledge", 4, false);
    await this.ajouteCompetenceNotable(monActor74, "Singing", 5, true);
    await this.ajouteCompetenceNotable(monActor75, "Awareness", 4, true);
    await this.ajouteCompetenceNotable(monActor75, "Stealth", 4, false);
    await this.ajouteCompetenceNotable(monActor75, "Longbow", 5, true);
    await this.ajouteCompetenceNotable(monActor76, "Stealth", 4, true);
    await this.ajouteCompetenceNotable(monActor76, "Travel", 2, false);
    await this.ajouteCompetenceNotable(monActor76, "Sword", 2, false);
    await this.ajouteCompetenceNotable(monActor77, "Presence", 2, false);
    await this.ajouteCompetenceNotable(monActor77, "Hunting", 2, true);
    await this.ajouteCompetenceNotable(monActor77, "Axe", 3, false);
    await this.ajouteCompetenceNotable(monActor77, "Bow", 2, true);
    await this.ajouteCompetenceNotable(monActor78, "Inspiration", 3, false);
    await this.ajouteCompetenceNotable(monActor78, "Travel", 1, true);
    await this.ajouteCompetenceNotable(monActor78, "Sword", 2, true);
    await this.ajouteCompetenceNotable(monActor79, "Stealth", 3, false);
    await this.ajouteCompetenceNotable(monActor79, "Awareness", 3, true);
    await this.ajouteCompetenceNotable(monActor79, "Bow", 2, true);
    await this.ajouteCompetenceNotable(monActor80, "Athletics", 2, true);
    await this.ajouteCompetenceNotable(monActor80, "Presence", 2, false);
    await this.ajouteCompetenceNotable(monActor80, "Spear", 2, true);
    await this.ajouteCompetenceNotable(monActor80, "Dagger", 3, false);
    await this.ajouteCompetenceNotable(monActor81, "Axe", 3, false);
    await this.ajouteCompetenceNotable(monActor81, "Awareness", 3, true);
    await this.ajouteCompetenceNotable(monActor81, "Search", 2, false);
    await this.ajouteCompetenceNotable(monActor82, "Bigot", 3, true);
    await this.ajouteCompetenceNotable(monActor83, "Crafting", 4, true);
    await this.ajouteCompetenceNotable(monActor84, "Crafting", 4, true);
    await this.ajouteCompetenceNotable(monActor85, "Warfare", 4, false);
    await this.ajouteCompetenceNotable(monActor85, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor85, "Intuition", 4, true);
    await this.ajouteCompetenceNotable(monActor85, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor85, "Axe", 4, true);
    await this.ajouteCompetenceNotable(monActor86, "Knowledge", 4, true);
    await this.ajouteCompetenceNotable(monActor87, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor87, "Intuition", 3, false);
    await this.ajouteCompetenceNotable(monActor87, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor88, "Inspiration", 3, false);
    await this.ajouteCompetenceNotable(monActor88, "Travel", 3, false);
    await this.ajouteCompetenceNotable(monActor88, "Healing", 3, true);
    await this.ajouteCompetenceNotable(monActor89, "Awareness", 3, false);
    await this.ajouteCompetenceNotable(monActor89, "Travel", 3, false);
    await this.ajouteCompetenceNotable(monActor89, "Bigot", 3, true);
    await this.ajouteCompetenceNotable(monActor90, "Exploration", 3, false);
    await this.ajouteCompetenceNotable(monActor90, "Bigot", 3, true);
    await this.ajouteCompetenceNotable(monActor91, "Courtesy", 3, false);
    await this.ajouteCompetenceNotable(monActor91, "Intuition", 4, true);
    await this.ajouteCompetenceNotable(monActor91, "Singing", 3, false);
    await this.ajouteCompetenceNotable(monActor92, "Awareness", 4, false);
    await this.ajouteCompetenceNotable(monActor92, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor92, "Intuition", 4, false);
    await this.ajouteCompetenceNotable(monActor92, "Knowledge", 4, false);
    await this.ajouteCompetenceNotable(monActor93, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor93, "Singing", 3, false);
    await this.ajouteCompetenceNotable(monActor93, "Axe", 3, false);
    await this.ajouteCompetenceNotable(monActor94, "Presence", 4, false);
    await this.ajouteCompetenceNotable(monActor94, "Axe", 4, true);
    await this.ajouteCompetenceNotable(monActor95, "Exploration", 3, false);
    await this.ajouteCompetenceNotable(monActor95, "Knowledge", 4, true);
    await this.ajouteCompetenceNotable(monActor95, "Search", 3, false);
    await this.ajouteCompetenceNotable(monActor96, "Crafting", 4, true);
    await this.ajouteCompetenceNotable(monActor96, "Puzzles", 3, false);
    await this.ajouteCompetenceNotable(monActor96, "Singing", 3, false);
    await this.ajouteCompetenceNotable(monActor97, "Intuition", 2, false);
    await this.ajouteCompetenceNotable(monActor97, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor98, "Crafting", 4, true);
    await this.ajouteCompetenceNotable(monActor99, "Courtesy", 3, true);
    await this.ajouteCompetenceNotable(monActor99, "Inspiration", 2, false);
    await this.ajouteCompetenceNotable(monActor99, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor100, "Awareness", 2, true);
    await this.ajouteCompetenceNotable(monActor100, "Search", 2, false);
    await this.ajouteCompetenceNotable(monActor100, "Sword", 2, false);
    await this.ajouteCompetenceNotable(monActor101, "Awareness", 2, true);
    await this.ajouteCompetenceNotable(monActor101, "Search", 2, false);
    await this.ajouteCompetenceNotable(monActor101, "Sword", 3, true);
    await this.ajouteCompetenceNotable(monActor102, "Healing", 3, false);
    await this.ajouteCompetenceNotable(monActor102, "Knowledge", 2, false);
    await this.ajouteCompetenceNotable(monActor103, "Intuition", 3, true);
    await this.ajouteCompetenceNotable(monActor103, "Hunting", 3, false);
    await this.ajouteCompetenceNotable(monActor103, "Longbow", 5, true);
    await this.ajouteCompetenceNotable(monActor104, "Presence", 3, false);
    await this.ajouteCompetenceNotable(monActor104, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor104, "Intuition", 4, false);
    await this.ajouteCompetenceNotable(monActor105, "Awareness", 3, false);
    await this.ajouteCompetenceNotable(monActor105, "Athletics", 3, true);
    await this.ajouteCompetenceNotable(monActor105, "Stealth", 4, false);
    await this.ajouteCompetenceNotable(monActor106, "Presence", 3, false);
    await this.ajouteCompetenceNotable(monActor106, "Hunting", 3, false);
    await this.ajouteCompetenceNotable(monActor107, "Search", 3, false);
    await this.ajouteCompetenceNotable(monActor107, "Travel", 3, false);
    await this.ajouteCompetenceNotable(monActor107, "Bow", 4, true);
    await this.ajouteCompetenceNotable(monActor108, "Intuition", 2, true);
    await this.ajouteCompetenceNotable(monActor108, "Persuasion", 4, true);
    await this.ajouteCompetenceNotable(monActor108, "Stealth", 3, false);
    await this.ajouteCompetenceNotable(monActor109, "Hunting", 3, true);
    await this.ajouteCompetenceNotable(monActor109, "Knowledge", 3, false);
    await this.ajouteCompetenceNotable(monActor109, "Longbow", 4, true);
    await this.ajouteCompetenceNotable(monActor110, "Knowledge", 4, false);
    await this.ajouteCompetenceNotable(monActor110, "Search", 3, true);
    await this.ajouteCompetenceNotable(monActor110, "Bow", 4, true);
    await this.ajouteCompetenceNotable(monActor111, "Presence", 3, false);
    await this.ajouteCompetenceNotable(monActor111, "Crafting", 3, true);
    await this.ajouteCompetenceNotable(monActor111, "Bigot", 4, false);
    await this.ajouteCompetenceNotable(monActor112, "Courtesy", 4, true);
    await this.ajouteCompetenceNotable(monActor112, "Persuasion", 3, false);
    await this.ajouteCompetenceNotable(monActor113, "Courtesy", 4, false);
    await this.ajouteCompetenceNotable(monActor113, "Intuition", 4, true);
    await this.ajouteCompetenceNotable(monActor113, "Travel", 3, false);
    await this.ajouteCompetenceNotable(monActor114, "Hunting", 4, false);
    await this.ajouteCompetenceNotable(monActor114, "Bow", 3, false);
    await this.ajouteCompetenceNotable(monActor114, "Travel", 4, false);

    // ADD TRAITS
    await this.ajouteTrait(monActor1, "Mountaineer", "", "");
    await this.ajouteTrait(monActor1, "Enemy Knowledge [race]", "Enemy Knowledge [Goblins]", "");
    await this.ajouteTrait(monActor1, "Tough", "", "");
    await this.ajouteTrait(monActor1, "Stubborn", "", "");
    await this.ajouteTrait(monActor2, "Folklore", "", "");
    await this.ajouteTrait(monActor2, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor2, "Honorable", "", "");
    await this.ajouteTrait(monActor2, "Circumspect", "", "");
    await this.ajouteTrait(monActor3, "Smoking", "", "");
    await this.ajouteTrait(monActor3, "Medicine", "", "");
    await this.ajouteTrait(monActor3, "Cunning", "", "");
    await this.ajouteTrait(monActor3, "Secretive", "", "");
    await this.ajouteTrait(monActor3, "Patient", "", "");
    await this.ajouteTrait(monActor4, "Enemy Knowledge [race]", "Enemy Knowledge [Spiders]", "");
    await this.ajouteTrait(monActor4, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor4, "Courtesy", "", "");
    await this.ajouteTrait(monActor4, "Curious", "", "");
    await this.ajouteTrait(monActor4, "Cunning", "", "");
    await this.ajouteTrait(monActor5, "Regional Knowledge", "Regional Knowledge: Black Forest", "");
    await this.ajouteTrait(monActor5, "Swimming", "", "");
    await this.ajouteTrait(monActor5, "Beautiful", "Belle", "");
    await this.ajouteTrait(monActor5, "Insaisissable", "", "");
    await this.ajouteTrait(monActor6, "Regional Knowledge", "Regional Knowledge: Esgaroth", "");
    await this.ajouteTrait(monActor6, "Manigances", "", "");
    await this.ajouteTrait(monActor6, "Determined", "", "");
    await this.ajouteTrait(monActor6, "Beautiful", "Belle", "");
    await this.ajouteTrait(monActor6, "Cunning", "", "");
    await this.ajouteTrait(monActor7, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor7, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor7, "Secretive", "", "");
    await this.ajouteTrait(monActor7, "Majestic", "", "");
    await this.ajouteTrait(monActor8, "Wary", "", "");
    await this.ajouteTrait(monActor8, "Severe", "", "");
    await this.ajouteTrait(monActor9, "Commerce", "", "");
    await this.ajouteTrait(monActor9, "Circumspect", "", "");
    await this.ajouteTrait(monActor10, "Firestarter", "", "");
    await this.ajouteTrait(monActor10, "Grumpy", "", "");
    await this.ajouteTrait(monActor10, "Determined", "", "");
    await this.ajouteTrait(monActor11, "Boatman", "", "");
    await this.ajouteTrait(monActor12, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor13, "Cooking", "", "");
    await this.ajouteTrait(monActor14, "Smithing", "", "");
    await this.ajouteTrait(monActor15, "Herbalism", "", "");
    await this.ajouteTrait(monActor16, "Gardener", "", "");
    await this.ajouteTrait(monActor17, "Masonry", "", "");
    await this.ajouteTrait(monActor18, "Carpentry", "", "");
    await this.ajouteTrait(monActor11, "Grumpy", "", "");
    await this.ajouteTrait(monActor11, "Determined", "", "");
    await this.ajouteTrait(monActor12, "Grumpy", "", "");
    await this.ajouteTrait(monActor12, "Determined", "", "");
    await this.ajouteTrait(monActor13, "Grumpy", "", "");
    await this.ajouteTrait(monActor13, "Determined", "", "");
    await this.ajouteTrait(monActor14, "Grumpy", "", "");
    await this.ajouteTrait(monActor14, "Determined", "", "");
    await this.ajouteTrait(monActor15, "Grumpy", "", "");
    await this.ajouteTrait(monActor15, "Determined", "", "");
    await this.ajouteTrait(monActor16, "Grumpy", "", "");
    await this.ajouteTrait(monActor16, "Determined", "", "");
    await this.ajouteTrait(monActor17, "Grumpy", "", "");
    await this.ajouteTrait(monActor17, "Determined", "", "");
    await this.ajouteTrait(monActor18, "Grumpy", "", "");
    await this.ajouteTrait(monActor18, "Determined", "", "");
    await this.ajouteTrait(monActor19, "Observant", "", "");
    await this.ajouteTrait(monActor19, "Patient", "", "");
    await this.ajouteTrait(monActor20, "Circumspect", "", "");
    await this.ajouteTrait(monActor20, "Resistant", "", "");
    await this.ajouteTrait(monActor21, "Cunning", "", "");
    await this.ajouteTrait(monActor21, "Courtesy", "", "");
    await this.ajouteTrait(monActor21, "Commerce", "", "");
    await this.ajouteTrait(monActor22, "Merciful", "", "");
    await this.ajouteTrait(monActor22, "Patient", "", "");
    await this.ajouteTrait(monActor22, "Herbalism", "", "");
    await this.ajouteTrait(monActor22, "Medicine", "", "");
    await this.ajouteTrait(monActor23, "Boatman", "", "");
    await this.ajouteTrait(monActor23, "Resistant", "", "");
    await this.ajouteTrait(monActor23, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor24, "Enemy Knowledge [race]", "Enemy Knowledge [Dragons]", "");
    await this.ajouteTrait(monActor24, "Hardened", "", "");
    await this.ajouteTrait(monActor24, "Loyal", "", "");
    await this.ajouteTrait(monActor25, "Carpentry", "", "");
    await this.ajouteTrait(monActor25, "Energetic", "", "");
    await this.ajouteTrait(monActor25, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor26, "Commerce", "", "");
    await this.ajouteTrait(monActor26, "Folklore", "", "");
    await this.ajouteTrait(monActor26, "Generous", "", "");
    await this.ajouteTrait(monActor26, "Majestic", "", "");
    await this.ajouteTrait(monActor27, "Commerce", "", "");
    await this.ajouteTrait(monActor27, "Smithing", "", "");
    await this.ajouteTrait(monActor27, "Jovial", "", "");
    await this.ajouteTrait(monActor27, "Stubborn", "", "");
    await this.ajouteTrait(monActor28, "Cooking", "", "");
    await this.ajouteTrait(monActor28, "Folklore", "", "");
    await this.ajouteTrait(monActor28, "Generous", "", "");
    await this.ajouteTrait(monActor28, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor29, "Enemy Knowledge [race]", "Enemy Knowledge [Wild Wolves]", "");
    await this.ajouteTrait(monActor29, "Regional Knowledge", "Regional Knowledge [Black Forest]", "");
    await this.ajouteTrait(monActor29, "Observant", "", "");
    await this.ajouteTrait(monActor29, "Severe", "", "");
    await this.ajouteTrait(monActor29, "Vengeful", "", "");
    await this.ajouteTrait(monActor30, "Secretive", "", "");
    await this.ajouteTrait(monActor30, "Sinister", "", "");
    await this.ajouteTrait(monActor30, "Smithing", "", "");
    await this.ajouteTrait(monActor31, "Masonry", "", "");
    await this.ajouteTrait(monActor31, "Cartography", "", "");
    await this.ajouteTrait(monActor31, "Energetic", "", "");
    await this.ajouteTrait(monActor31, "Bold", "", "");
    await this.ajouteTrait(monActor32, "Grumpy", "", "");
    await this.ajouteTrait(monActor32, "Courageous", "", "");
    await this.ajouteTrait(monActor32, "Majestic", "", "");
    await this.ajouteTrait(monActor32, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor33, "Commerce", "", "");
    await this.ajouteTrait(monActor33, "Troglodyte", "", "");
    await this.ajouteTrait(monActor33, "Excentrique", "", "");
    await this.ajouteTrait(monActor33, "Vengeful", "", "");
    await this.ajouteTrait(monActor34, "Commerce", "", "");
    await this.ajouteTrait(monActor34, "Folklore", "", "");
    await this.ajouteTrait(monActor34, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor34, "Jovial", "", "");
    await this.ajouteTrait(monActor35, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor35, "Regional Knowledge", "Regional Knowledge [Black Forest]", "");
    await this.ajouteTrait(monActor35, "Hardened", "", "");
    await this.ajouteTrait(monActor35, "Sincere", "", "");
    await this.ajouteTrait(monActor36, "Enemy Knowledge [race]", "Enemy Knowledge [Spiders]", "");
    await this.ajouteTrait(monActor36, "Regional Knowledge", "Regional Knowledge [Black Forest]", "");
    await this.ajouteTrait(monActor36, "Frank", "", "");
    await this.ajouteTrait(monActor36, "Loyal", "", "");
    await this.ajouteTrait(monActor37, "Regional Knowledge", "Regional Knowledge [Black Forest]", "");
    await this.ajouteTrait(monActor37, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor37, "Courageous", "", "");
    await this.ajouteTrait(monActor37, "Daring", "", "");
    await this.ajouteTrait(monActor38, "Wary", "", "");
    await this.ajouteTrait(monActor38, "Sinister", "", "");
    await this.ajouteTrait(monActor39, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor39, "Courageous", "", "");
    await this.ajouteTrait(monActor39, "Proud", "", "");
    await this.ajouteTrait(monActor40, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor40, "Storytelling", "", "");
    await this.ajouteTrait(monActor40, "Jovial", "", "");
    await this.ajouteTrait(monActor40, "Sincere", "", "");
    await this.ajouteTrait(monActor42, "Commerce", "", "");
    await this.ajouteTrait(monActor42, "Elven Lore", "", "");
    await this.ajouteTrait(monActor42, "Jovial", "", "");
    await this.ajouteTrait(monActor42, "Secretive", "", "");
    await this.ajouteTrait(monActor43, "Enemy Knowledge [race]", "Enemy Knowledge [Goblins]", "");
    await this.ajouteTrait(monActor43, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor43, "Cruel", "", "");
    await this.ajouteTrait(monActor43, "Severe", "", "");
    await this.ajouteTrait(monActor43, "Vengeful", "", "");
    await this.ajouteTrait(monActor44, "Reveller", "", "");
    await this.ajouteTrait(monActor44, "Daring", "", "");
    await this.ajouteTrait(monActor44, "Robust", "", "");
    await this.ajouteTrait(monActor45, "Enemy Knowledge [race]", "Enemy Knowledge [Goblins]", "");
    await this.ajouteTrait(monActor45, "Storytelling", "", "");
    await this.ajouteTrait(monActor45, "Cunning", "", "");
    await this.ajouteTrait(monActor45, "Patient", "", "");
    await this.ajouteTrait(monActor46, "Regional Knowledge", "Regional Knowledge [Black Forest]", "");
    await this.ajouteTrait(monActor46, "Firestarter", "", "");
    await this.ajouteTrait(monActor46, "Beautiful", "", "");
    await this.ajouteTrait(monActor46, "Vengeful", "", "");
    await this.ajouteTrait(monActor47, "Commerce", "", "");
    await this.ajouteTrait(monActor47, "Folklore", "", "");
    await this.ajouteTrait(monActor47, "Cunning", "", "");
    await this.ajouteTrait(monActor47, "Determined", "", "");
    await this.ajouteTrait(monActor48, "Regional Knowledge", "Regional Knowledge [Anduin]", "");
    await this.ajouteTrait(monActor48, "Swimming", "", "");
    await this.ajouteTrait(monActor48, "Elusive", "", "");
    await this.ajouteTrait(monActor48, "Loyal", "", "");
    await this.ajouteTrait(monActor48, "Patient", "", "");
    await this.ajouteTrait(monActor49, "Enemy Knowledge [race]", "Enemy Knowledge [Wild Wolves]", "");
    await this.ajouteTrait(monActor49, "Carpentry", "", "");
    await this.ajouteTrait(monActor49, "Circumspect", "", "");
    await this.ajouteTrait(monActor49, "Wary", "", "");
    await this.ajouteTrait(monActor50, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor50, "Lore Rhymes", "", "");
    await this.ajouteTrait(monActor50, "Weaving", "", "");
    await this.ajouteTrait(monActor50, "Cunning", "", "");
    await this.ajouteTrait(monActor50, "Secretive", "", "");
    await this.ajouteTrait(monActor51, "Cat Burglar", "Cat Burglar", "");
    await this.ajouteTrait(monActor51, "Mountaineer", "", "");
    await this.ajouteTrait(monActor51, "Jovial", "", "");
    await this.ajouteTrait(monActor51, "Cunning", "", "");
    await this.ajouteTrait(monActor52, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor52, "Gardener", "", "");
    await this.ajouteTrait(monActor52, "Grand", "", "");
    await this.ajouteTrait(monActor52, "Grumpy", "", "");
    await this.ajouteTrait(monActor53, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor53, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor53, "Curious", "", "");
    await this.ajouteTrait(monActor53, "Hardened", "", "");
    await this.ajouteTrait(monActor53, "Impulsive", "", "");
    await this.ajouteTrait(monActor54, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor54, "Herbalism", "", "");
    await this.ajouteTrait(monActor54, "Unyielding", "", "");
    await this.ajouteTrait(monActor54, "Majestic", "", "");
    await this.ajouteTrait(monActor55, "Commerce", "", "");
    await this.ajouteTrait(monActor55, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor55, "Stubborn", "", "");
    await this.ajouteTrait(monActor55, "Proud", "", "");
    await this.ajouteTrait(monActor55, "Majestic", "", "");
    await this.ajouteTrait(monActor56, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor56, "Troglodyte", "", "");
    await this.ajouteTrait(monActor56, "Grumpy", "", "");
    await this.ajouteTrait(monActor56, "Secretive", "", "");
    await this.ajouteTrait(monActor56, "Hardened", "", "");
    await this.ajouteTrait(monActor57, "Firestarter", "", "");
    await this.ajouteTrait(monActor57, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor57, "Tradition of Arnor", "Tradition of Arnor", "");
    await this.ajouteTrait(monActor57, "Impulsive", "", "");
    await this.ajouteTrait(monActor57, "Sinister", "", "");
    await this.ajouteTrait(monActor58, "Fumer", "", "");
    await this.ajouteTrait(monActor58, "Tradition of Arnor", "Tradition of Arnor", "");
    await this.ajouteTrait(monActor58, "Determined", "", "");
    await this.ajouteTrait(monActor58, "Insaisissable", "", "");
    await this.ajouteTrait(monActor59, "Regional Knowledge", "Regional Knowledge [Arnor]", "");
    await this.ajouteTrait(monActor59, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor59, "Bitter", "", "");
    await this.ajouteTrait(monActor59, "Presumptuous", "", "");
    await this.ajouteTrait(monActor60, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor60, "Firestarter", "", "");
    await this.ajouteTrait(monActor60, "Energetic", "", "");
    await this.ajouteTrait(monActor60, "Unyielding", "", "");
    await this.ajouteTrait(monActor61, "Regional Knowledge", "Regional Knowledge [Anduin]", "");
    await this.ajouteTrait(monActor61, "Enemy Knowledge [race]", "Enemy Knowledge [Orcs]", "");
    await this.ajouteTrait(monActor61, "Mad", "", "");
    await this.ajouteTrait(monActor61, "Vengeful", "", "");
    await this.ajouteTrait(monActor62, "Boatman", "", "");
    await this.ajouteTrait(monActor62, "Commerce", "", "");
    await this.ajouteTrait(monActor62, "Jovial", "", "");
    await this.ajouteTrait(monActor62, "Preste", "", "");
    await this.ajouteTrait(monActor63, "Hunting", "", "");
    await this.ajouteTrait(monActor63, "Fishing", "", "");
    await this.ajouteTrait(monActor63, "Curious", "Curious", "");
    await this.ajouteTrait(monActor63, "Passionate", "Passionnée", "");
    await this.ajouteTrait(monActor64, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor64, "Herbalism", "", "");
    await this.ajouteTrait(monActor64, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor64, "Swift", "", "");
    await this.ajouteTrait(monActor65, "Boatman", "", "");
    await this.ajouteTrait(monActor65, "Proud", "", "");
    await this.ajouteTrait(monActor66, "Elven Lore", "", "");
    await this.ajouteTrait(monActor66, "Secretive", "", "");
    await this.ajouteTrait(monActor66, "Cunning", "", "");
    await this.ajouteTrait(monActor66, "Wary", "", "");
    await this.ajouteTrait(monActor67, "Unyielding", "", "");
    await this.ajouteTrait(monActor67, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor68, "Elven Lore", "", "");
    await this.ajouteTrait(monActor68, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor68, "Proud", "", "");
    await this.ajouteTrait(monActor68, "Majestic", "", "");
    await this.ajouteTrait(monActor69, "Elven Lore", "", "");
    await this.ajouteTrait(monActor69, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor69, "Medicine", "", "");
    await this.ajouteTrait(monActor69, "Generous", "", "");
    await this.ajouteTrait(monActor69, "Majestic", "", "");
    await this.ajouteTrait(monActor69, "Observant", "", "");
    await this.ajouteTrait(monActor70, "Elven Lore", "", "");
    await this.ajouteTrait(monActor70, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor70, "Broderie", "", "");
    await this.ajouteTrait(monActor70, "Beautiful", "Belle", "");
    await this.ajouteTrait(monActor70, "Merciful", "Miséricordieuse", "");
    await this.ajouteTrait(monActor70, "Sincere", "", "");
    await this.ajouteTrait(monActor71, "Fauna Knowledge", "", "");
    await this.ajouteTrait(monActor71, "Elven Lore", "", "");
    await this.ajouteTrait(monActor71, "Beautiful", "", "");
    await this.ajouteTrait(monActor71, "Energetic", "", "");
    await this.ajouteTrait(monActor71, "Majestic", "", "");
    await this.ajouteTrait(monActor72, "Elven Lore", "", "");
    await this.ajouteTrait(monActor72, "Enemy of Sauron", "", "");
    await this.ajouteTrait(monActor72, "Majestic", "Majestic", "");
    await this.ajouteTrait(monActor72, "Patient", "Patiente", "");
    await this.ajouteTrait(monActor72, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor73, "Masonry", "", "");
    await this.ajouteTrait(monActor73, "Courageous", "Courageuse", "");
    await this.ajouteTrait(monActor73, "Insaisissable", "", "");
    await this.ajouteTrait(monActor74, "Shadow Awareness", "Shadow Awareness", "");
    await this.ajouteTrait(monActor74, "Elven Lore", "", "");
    await this.ajouteTrait(monActor74, "Circumspect", "", "");
    await this.ajouteTrait(monActor74, "Proud", "", "");
    await this.ajouteTrait(monActor74, "Sinister", "", "");
    await this.ajouteTrait(monActor75, "Enemy Knowledge [race]", "Enemy Knowledge [Goblins]", "");
    await this.ajouteTrait(monActor75, "Folklore", "", "");
    await this.ajouteTrait(monActor75, "Wary", "", "");
    await this.ajouteTrait(monActor75, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor76, "Fishing", "", "");
    await this.ajouteTrait(monActor76, "Troglodyte", "", "");
    await this.ajouteTrait(monActor76, "Passionate", "", "");
    await this.ajouteTrait(monActor76, "Preste", "", "");
    await this.ajouteTrait(monActor76, "Daring", "", "");
    await this.ajouteTrait(monActor77, "Folklore", "", "");
    await this.ajouteTrait(monActor77, "Swift", "Rapide (Folulf)", "");
    await this.ajouteTrait(monActor77, "Circumspect", "Circumspect (Arnulf)", "");
    await this.ajouteTrait(monActor78, "Regional Knowledge", "Regional Knowledge [Eriador]", "");
    await this.ajouteTrait(monActor78, "Passionate", "", "");
    await this.ajouteTrait(monActor78, "Sincere", "", "");
    await this.ajouteTrait(monActor79, "Cat Burglar", "Cat Burglar", "");
    await this.ajouteTrait(monActor79, "Grumpy", "Bourrue", "");
    await this.ajouteTrait(monActor79, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor80, "Enemy Knowledge [race]", "Enemy Knowledge [Loups]", "");
    await this.ajouteTrait(monActor80, "Resentful", "", "");
    await this.ajouteTrait(monActor80, "Brutal", "", "");
    await this.ajouteTrait(monActor81, "Regional Knowledge", "Regional Knowledge [Erebor]", "");
    await this.ajouteTrait(monActor81, "Robust", "", "");
    await this.ajouteTrait(monActor81, "Severe", "", "");
    await this.ajouteTrait(monActor82, "Regional Knowledge", "Regional Knowledge [Erebor]", "");
    await this.ajouteTrait(monActor82, "Enemy Knowledge [race]", "Enemy Knowledge [Orcs]", "");
    await this.ajouteTrait(monActor82, "Sinister", "", "");
    await this.ajouteTrait(monActor82, "Resistant", "", "");
    await this.ajouteTrait(monActor82, "Honorable", "", "");
    await this.ajouteTrait(monActor83, "Smithing", "", "");
    await this.ajouteTrait(monActor83, "Unyielding", "", "");
    await this.ajouteTrait(monActor83, "Secretive", "", "");
    await this.ajouteTrait(monActor84, "Masonry", "", "");
    await this.ajouteTrait(monActor84, "Unyielding", "", "");
    await this.ajouteTrait(monActor84, "Secretive", "", "");
    await this.ajouteTrait(monActor85, "Regional Knowledge", "Regional Knowledge [Erebor]", "");
    await this.ajouteTrait(monActor85, "Enemy Knowledge [race]", "Enemy Knowledge [Orcs]", "");
    await this.ajouteTrait(monActor85, "Proud", "", "");
    await this.ajouteTrait(monActor85, "Severe", "", "");
    await this.ajouteTrait(monActor86, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor86, "Grumpy", "", "");
    await this.ajouteTrait(monActor86, "Unyielding", "", "");
    await this.ajouteTrait(monActor87, "Commerce", "", "");
    await this.ajouteTrait(monActor87, "Courtesy", "", "");
    await this.ajouteTrait(monActor87, "Vengeful", "", "");
    await this.ajouteTrait(monActor88, "Firestarter", "", "");
    await this.ajouteTrait(monActor88, "Herbalism", "", "");
    await this.ajouteTrait(monActor88, "Courageous", "", "");
    await this.ajouteTrait(monActor88, "Frank", "", "");
    await this.ajouteTrait(monActor89, "Smithing", "", "");
    await this.ajouteTrait(monActor89, "Masonry", "", "");
    await this.ajouteTrait(monActor89, "Energetic", "", "");
    await this.ajouteTrait(monActor89, "Circumspect", "", "");
    await this.ajouteTrait(monActor90, "Mountaineer", "", "");
    await this.ajouteTrait(monActor90, "Smithing", "", "");
    await this.ajouteTrait(monActor90, "Bold", "", "");
    await this.ajouteTrait(monActor90, "Robust", "", "");
    await this.ajouteTrait(monActor91, "Cooking", "", "");
    await this.ajouteTrait(monActor91, "Herbalism", "", "");
    await this.ajouteTrait(monActor91, "Cunning", "", "");
    await this.ajouteTrait(monActor91, "Resistant", "", "");
    await this.ajouteTrait(monActor92, "Mountaineer", "", "");
    await this.ajouteTrait(monActor92, "Enemy Knowledge [race]", "Enemy Knowledge [Orcs]", "");
    await this.ajouteTrait(monActor92, "Lore Rhymes", "", "");
    await this.ajouteTrait(monActor92, "Bold", "", "");
    await this.ajouteTrait(monActor92, "Courtesy", "", "");
    await this.ajouteTrait(monActor93, "Regional Knowledge", "Regional Knowledge [Erebor]", "");
    await this.ajouteTrait(monActor93, "Commerce", "", "");
    await this.ajouteTrait(monActor93, "Circumspect", "", "");
    await this.ajouteTrait(monActor93, "Sincere", "", "");
    await this.ajouteTrait(monActor94, "Regional Knowledge", "Regional Knowledge [Erebor]", "");
    await this.ajouteTrait(monActor94, "Enemy Knowledge [race]", "Enemy Knowledge [Orcs]", "");
    await this.ajouteTrait(monActor94, "Hardened", "", "");
    await this.ajouteTrait(monActor94, "Wary", "", "");
    await this.ajouteTrait(monActor95, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor95, "Storytelling", "", "");
    await this.ajouteTrait(monActor95, "Curious", "", "");
    await this.ajouteTrait(monActor95, "Loyal", "", "");
    await this.ajouteTrait(monActor96, "Smithing", "", "");
    await this.ajouteTrait(monActor96, "Fumer", "", "");
    await this.ajouteTrait(monActor96, "Carpentry", "", "");
    await this.ajouteTrait(monActor96, "Energetic", "", "");
    await this.ajouteTrait(monActor96, "Preste", "", "");
    await this.ajouteTrait(monActor97, "Commerce", "", "");
    await this.ajouteTrait(monActor97, "Energetic", "", "");
    await this.ajouteTrait(monActor97, "Frank", "", "");
    await this.ajouteTrait(monActor98, "Smithing", "", "");
    await this.ajouteTrait(monActor98, "Cunning", "", "");
    await this.ajouteTrait(monActor98, "Grumpy", "", "");
    await this.ajouteTrait(monActor99, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor99, "Cunning", "", "");
    await this.ajouteTrait(monActor99, "Majestic", "", "");
    await this.ajouteTrait(monActor100, "Circumspect", "", "");
    await this.ajouteTrait(monActor100, "Circumspect", "", "");
    await this.ajouteTrait(monActor101, "Hardened", "", "");
    await this.ajouteTrait(monActor101, "Circumspect", "", "");
    await this.ajouteTrait(monActor102, "Medicine", "", "");
    await this.ajouteTrait(monActor102, "Herbalism", "", "");
    await this.ajouteTrait(monActor102, "Merciful", "", "");
    await this.ajouteTrait(monActor102, "Patient", "", "");
    await this.ajouteTrait(monActor103, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor103, "Carpentry", "", "");
    await this.ajouteTrait(monActor103, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor103, "Sinister", "", "");
    await this.ajouteTrait(monActor104, "Minstrel", "", "");
    await this.ajouteTrait(monActor104, "Storytelling", "Conteuse", "");
    await this.ajouteTrait(monActor104, "Cunning", "Astucieuse", "");
    await this.ajouteTrait(monActor104, "Beautiful", "Belle", "");
    await this.ajouteTrait(monActor105, "Cat Burglar", "", "");
    await this.ajouteTrait(monActor105, "Commerce", "", "");
    await this.ajouteTrait(monActor105, "Preste", "", "");
    await this.ajouteTrait(monActor105, "Secretive", "", "");
    await this.ajouteTrait(monActor106, "Storytelling", "", "");
    await this.ajouteTrait(monActor106, "Majestic", "", "");
    await this.ajouteTrait(monActor106, "Daring", "", "");
    await this.ajouteTrait(monActor107, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor107, "Sinister", "", "");
    await this.ajouteTrait(monActor107, "Impulsive", "", "");
    await this.ajouteTrait(monActor108, "Regional Knowledge", "Regional Knowledge [Dale]", "");
    await this.ajouteTrait(monActor108, "Commerce", "", "");
    await this.ajouteTrait(monActor108, "Cunning", "", "");
    await this.ajouteTrait(monActor108, "Circumspect", "", "");
    await this.ajouteTrait(monActor109, "Enemy Knowledge [race]", "Enemy Knowledge [Dragons]", "");
    await this.ajouteTrait(monActor109, "Herbalism", "", "");
    await this.ajouteTrait(monActor109, "Severe", "", "");
    await this.ajouteTrait(monActor109, "Vengeful", "", "");
    await this.ajouteTrait(monActor110, "Regional Knowledge", "Regional Knowledge [Grey Mountains]", "");
    await this.ajouteTrait(monActor110, "Mountaineer", "", "");
    await this.ajouteTrait(monActor110, "Determined", "", "");
    await this.ajouteTrait(monActor110, "Hardened", "", "");
    await this.ajouteTrait(monActor111, "Determined", "", "");
    await this.ajouteTrait(monActor111, "Unyielding", "", "");
    await this.ajouteTrait(monActor111, "Circumspect", "", "");
    await this.ajouteTrait(monActor111, "Regional Knowledge", "Regional Knowledge [Iron Hills]", "");
    await this.ajouteTrait(monActor111, "Smithing", "", "");
    await this.ajouteTrait(monActor112, "Boatman", "Batelière", "");
    await this.ajouteTrait(monActor112, "Commerce", "", "");
    await this.ajouteTrait(monActor112, "Courageous", "Courageuse", "");
    await this.ajouteTrait(monActor112, "Jovial", "Joviale", "");
    await this.ajouteTrait(monActor113, "Regional Knowledge", "Regional Knowledge [Rhovanion]", "");
    await this.ajouteTrait(monActor113, "Commerce", "", "");
    await this.ajouteTrait(monActor113, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor113, "Secretive", "", "");
    await this.ajouteTrait(monActor114, "Regional Knowledge", "Regional Knowledge [Borders of Dale]", "");
    await this.ajouteTrait(monActor114, "Ancient Tradition", "", "");
    await this.ajouteTrait(monActor114, "Keen-eyed", "", "");
    await this.ajouteTrait(monActor114, "Robust", "", "");

    console.log("===== END CREATING NPCs ====");
  }

  async ajouteCompetenceNotable(monActor, _nomCompetenceNotable, _rang, _fav) {
    // Chercher le trait dans les Items
    const monItemOrigine = game.items.contents.find((i) => i.type === "skill" && i.name === _nomCompetenceNotable);

    // Créer une copie de l'item dans la feuille de personnage
    await monActor.createEmbeddedDocuments("Item", [monItemOrigine], { renderSheet: false });

    // récupérer l'item dans la feuille de perso
    const monNouvelItem = monActor.items.find((i) => i.type === "skill" && i.name === _nomCompetenceNotable);

    // Construire la mise à jour des données
    const monUpdate = {
      _id: monNouvelItem._id,
      system: {
        value: _rang,
        favoured: {
          value: _fav,
        },
      },
    };

    // Appliquer la mise à jour
    const monUpdated = await monActor.updateEmbeddedDocuments("Item", [monUpdate]);
  }

  async ajouteTrait(monActor, _nomTrait, _nomTraitRenomme, _maDescription) {
    // Chercher le trait dans les Items
    const monItemOrigine = game.items.contents.find((i) => i.type === "trait" && i.name === _nomTrait);

    // Créer une copie de l'item dans la feuille de personnage
    await monActor.createEmbeddedDocuments("Item", [monItemOrigine], { renderSheet: false });

    // récupérer l'item dans la feuille de perso
    const monNouvelItem = monActor.items.find((i) => i.type === "trait" && i.name === _nomTrait);

    // Déterminer le nom final
    let newNom = _nomTrait;
    if (_nomTraitRenomme !== "") {
      newNom = _nomTraitRenomme;
    }

    // Déterminer la description finale
    let newDescription = "";
    if (_maDescription !== "") {
      // => nouvelle description qui remplace la précédente
      newDescription = "<p>" + _maDescription + "</p>";
    } else {
      // On garde la description originale du Trait
      newDescription = monNouvelItem.system.description.value;
    }

    // Construire la mise à jour des données
    const monUpdate = {
      _id: monNouvelItem._id,
      name: newNom,
      system: {
        description: {
          value: newDescription,
        },
      },
    };

    // Appliquer la mise à jour
    const monUpdated = await monActor.updateEmbeddedDocuments("Item", [monUpdate]);
  }

  async ajouteUnPNJ(_dossier, _nom, _img, _attLevel, _endurance, _description, _weary, _tokenLie, _disposition) {
    console.log("==> adding " + _nom);
    let monActor = await Actor.create({
      name: _nom,
      type: "npc",
      folder: _dossier._id,
      img: _img,
      system: {
        stateOfHealth: { weary: { value: false } },
        attributeLevel: { value: _attLevel },
        endurance: { value: _endurance, max: _endurance },
        description: { value: _description },
      },
    });

    const update = {};
    update.token = {
      actorLink: _tokenLie,
      disposition: _disposition,
      bar1: {
        attribute: "endurance",
      },
      displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
      displayName: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
      sight: { enabled: false },
    };
    await monActor.update(update);

    return monActor;
  }
}
