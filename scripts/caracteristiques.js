export class Tor1eCompendiumCaracteristiques {
  async creationCaracteristiques() {
    console.log("===================================================================");
    console.log("          CREATING CHARACTERISTICS FOR CHARACTERS");
    console.log("===================================================================");

    console.log("===== CREATING BASE CHARACTERISTICS FOLDER ====");
    let dossierCaracteristiques = await Folder.create({
      name: "Characteristics",
      type: "Item",
      sorting: "a",
      parent: null,
    });

    console.log("-------------------------------------------------------------------");
    console.log("          ==> SKILLS");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATING BASE SKILLS FOLDER ====");
    let dossierCompetences = await Folder.create({
      name: "Skills",
      type: "Item",
      color: "#2e0505",
      sorting: "m",
      parent: dossierCaracteristiques._id,
    });

    console.log("===== CREATING SKILLS SUBFOLDERS ====");

    let dossierCompetencesDetaillees = await Folder.create({
      name: "Detailed Skills",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCompetences._id,
    });
    let dossierCompetencesGeneriques = await Folder.create({
      name: "Generic Skills",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCompetences._id,
    });
    let dossierCompetencesArmes = await Folder.create({
      name: "Weapon Skills",
      type: "Item",
      color: "#181b26",
      sorting: "m",
      parent: dossierCompetences._id,
    });

    console.log("===== CREATING DETAILED SKILLS ====");

    console.log("... Body skills");
    await Item.create({
      name: "Presence",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "personality" },
      },
    });
    await Item.create({
      name: "Athletics",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 86</em></p>" },
        favoured: { value: false },
        group: { value: "movement" },
      },
    });
    await Item.create({
      name: "Awareness",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 87</em></p>" },
        favoured: { value: false },
        group: { value: "perception" },
      },
    });
    await Item.create({
      name: "Exploration",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 88</em></p>" },
        favoured: { value: false },
        group: { value: "survival" },
      },
    });
    await Item.create({
      name: "Singing",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 88</em></p>" },
        favoured: { value: false },
        group: { value: "custom" },
      },
    });
    await Item.create({
      name: "Crafting",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 89</em></p>" },
        favoured: { value: false },
        group: { value: "vocation" },
      },
    });

    console.log("... Heart skills");
    await Item.create({
      name: "Inspiration",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "heart" },
        description: { value: "<p><em>Core Rule Book, page 86</em></p>" },
        favoured: { value: false },
        group: { value: "personality" },
      },
    });
    await Item.create({
      name: "Travel",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "heart" },
        description: { value: "<p><em>Core Rule Book, page 86</em></p>" },
        favoured: { value: false },
        group: { value: "movement" },
      },
    });
    await Item.create({
      name: "Intuition",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "heart" },
        description: { value: "<p><em>Core Rule Book, page 87</em></p>" },
        favoured: { value: false },
        group: { value: "perception" },
      },
    });
    await Item.create({
      name: "Healing",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "heart" },
        description: { value: "<p><em>Core Rule Book, page 88</em></p>" },
        favoured: { value: false },
        group: { value: "survival" },
      },
    });
    await Item.create({
      name: "Courtesy",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "heart" },
        description: { value: "<p><em>Core Rule Book, page 89</em></p>" },
        favoured: { value: false },
        group: { value: "custom" },
      },
    });
    await Item.create({
      name: "Warfare",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "heart" },
        description: { value: "<p><em>Core Rule Book, page 89</em></p>" },
        favoured: { value: false },
        group: { value: "vocation" },
      },
    });

    console.log("... Spirit skills");
    await Item.create({
      name: "Persuasion",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "wits" },
        description: { value: "<p><em>Core Rule Book, page 86</em></p>" },
        favoured: { value: false },
        group: { value: "personality" },
      },
    });
    await Item.create({
      name: "Stealth",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "wits" },
        description: { value: "<p><em>Core Rule Book, page 87</em></p>" },
        favoured: { value: false },
        group: { value: "movement" },
      },
    });
    await Item.create({
      name: "Search",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "wits" },
        description: { value: "<p><em>Core Rule Book, page 88</em></p>" },
        favoured: { value: false },
        group: { value: "perception" },
      },
    });
    await Item.create({
      name: "Hunting",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "wits" },
        description: { value: "<p><em>Core Rule Book, page 88</em></p>" },
        favoured: { value: false },
        group: { value: "survival" },
      },
    });
    await Item.create({
      name: "Puzzles",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "wits" },
        description: { value: "<p><em>Core Rule Book, page 89</em></p>" },
        favoured: { value: false },
        group: { value: "custom" },
      },
    });
    await Item.create({
      name: "Knowledge",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesDetaillees._id,
      data: {
        associatedStat: { value: "wits" },
        description: { value: "<p><em>Core Rule Book, page 90</em></p>" },
        favoured: { value: false },
        group: { value: "vocation" },
      },
    });

    console.log("===== CREATING GENERIC SKILLS ====");
    await Item.create({
      name: "Personality",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesGeneriques._id,
      data: {
        associatedStat: { value: "personality" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "personality" },
      },
    });
    await Item.create({
      name: "Movement",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesGeneriques._id,
      data: {
        associatedStat: { value: "movement" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "movement" },
      },
    });
    await Item.create({
      name: "Perception",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesGeneriques._id,
      data: {
        associatedStat: { value: "perception" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "perception" },
      },
    });
    await Item.create({
      name: "Survival",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesGeneriques._id,
      data: {
        associatedStat: { value: "survival" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "survival" },
      },
    });
    await Item.create({
      name: "Customs",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesGeneriques._id,
      data: {
        associatedStat: { value: "custom" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "custom" },
      },
    });
    await Item.create({
      name: "Profession",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/skill.png",
      folder: dossierCompetencesGeneriques._id,
      data: {
        associatedStat: { value: "vocation" },
        description: { value: "<p><em>Core Rule Book, page 85</em></p>" },
        favoured: { value: false },
        group: { value: "vocation" },
      },
    });

    console.log("===== CREATING WEAPON SKILLS ====");
    await Item.create({
      name: "Dagger",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_dagger.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Mattock",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_mattock.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "(Swords)",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Short Sword",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Sword",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Long Sword",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "(Spears)",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_spears.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Spear",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_spears.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Great Spear",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_spears.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "(Axes)",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Axe",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Long Axe",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "(Bows)",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_bows.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Bow",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_bows.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });
    await Item.create({
      name: "Longbow",
      type: "skill",
      img: "systems/tor1e/assets/images/icons/weapon_bows.png",
      folder: dossierCompetencesArmes._id,
      permission: { default: 2 },
      data: {
        associatedStat: { value: "body" },
        description: { value: "<p><em>Core Rule Book, page 92</em></p>" },
        favoured: { value: false },
        group: { value: "combat" },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("          ==> SPECIAL ABILITIES ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATING BASE SPECIALS FOLDER ====");
    let dossierCapacitesSpeciales = await Folder.create({
      name: "Special Abilities",
      type: "Item",
      color: "#2e0505",
      sorting: "m",
      parent: dossierCaracteristiques._id,
    });

    console.log("===== CREATING SUBFOLDERS ====");

    let dossierCapacitesSpecialesNormales = await Folder.create({
      name: "... normal",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCapacitesSpeciales._id,
    });

    let dossierCapacitesSpecialesAmeliorations = await Folder.create({
      name: "... improvements",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCapacitesSpeciales._id,
    });
    let dossierCapacitesSpecialesPuissantes = await Folder.create({
      name: "... powerful",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCapacitesSpeciales._id,
    });
    let dossierCapacitesSpecialesDragons = await Folder.create({
      name: "... for Dragons",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCapacitesSpeciales._id,
    });
    let dossierCapacitesSpecialesMortVivants = await Folder.create({
      name: "... for Undead",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierCapacitesSpeciales._id,
    });

    console.log("===== CREATING SPECIAL ABILITIES ====");
    console.log("... Normal abilities");
    await Item.create({
      name: "Abomination",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Relentlessness",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 23</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Animosity (culture)",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Brutal Assault",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Plunging Attack",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Native",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: { description: { value: "<p><em>Erebor, page 75</em></p>" }, active: { value: false }, cost: { value: 0 } },
    });
    await Item.create({
      name: "Sun Aversion",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Two-Headed",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>The Vestiges of the North, page 58</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Regional Knowledge (region)",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 95</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Tough Hide",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Disconcerting",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 240</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Trainer",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Ténèbres sur la Forêt noire, page 13</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Dwimmerlaik",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Fear",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 241</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Countless Offspring",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 120</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Enchantment",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Ténèbres sur la Forêt noire, page 110</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Frightful Spells",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 241</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Raven Spirit",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 72</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Embrace",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 241</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Devastating Force",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 288</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Terrifying Force",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 241</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Great Leap",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 241</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Large Size",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 241</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Black Forest Dweller",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 112</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Darkness Dweller",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Wood Horror",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 119</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Cowardice",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Mountaineer",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 45</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Word of Power and Terror",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Numerous Poisons",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 100 et 122</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Drowning",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book.</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "No Quarter",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Fear of Fire",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Black Fear",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Blacker than Darkness",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Weak Point",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Fetid Stench",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Abominable Resistance",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Poisonous Breath",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: {
          value: "<p><em>Wildlands Guide / Tales and Legends of the Wild Lands, page 111 / 141</em></p>",
        },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Black Breath",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Suffering of Others",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Tales and Legends of the Wild Lands, page 127</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Submission (target)",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 119</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Tentacular",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Tales and Legends of the Wild Lands, page 20</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Illusion Webs",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Wildlands Guide, page 122</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Mortal Trait",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Tales and Legends of the Wild Lands, page 56</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Visions of Torment",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Supernatural Vitality",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Tales and Legends of the Wild Lands, page 75</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Serpent Speed",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Ominous Voice",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Imperious Voice",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesNormales._id,
      data: {
        description: { value: "<p><em>Core Rule Book, page 242</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });

    console.log("... improvements");
    await Item.create({
      name: "Seasoned",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Veteran",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Shrouded in Shadows",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Core Rule Book.</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Expert",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Killer",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Dark Glamour",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Core Rule Book.</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Stubborn",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Formidable",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Grab and Drown",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Core Rule Book.</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Superior",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesAmeliorations._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });

    console.log("... powerful");
    await Item.create({
      name: "Merciless Strike",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesPuissantes._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Unbridled Hatred",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesPuissantes._id,
      data: {
        description: { value: "<p><em>Rivendell, page 67</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Elusive",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesPuissantes._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Malice",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesPuissantes._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });
    await Item.create({
      name: "Sovereign",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesPuissantes._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Terrible",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesPuissantes._id,
      data: {
        description: { value: "<p><em>Rivendell, page 68</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });

    console.log("... for undead");
    await Item.create({
      name: "Phantom",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesMortVivants._id,
      data: {
        description: { value: "<p><em>Rivendell, page 76</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Spectral",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesMortVivants._id,
      data: {
        description: { value: "<p><em>Rivendell, page 76</em></p>" },
        active: { value: false },
        cost: { value: 0 },
      },
    });
    await Item.create({
      name: "Specter’s Supernatural Vitality",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesMortVivants._id,
      data: {
        description: { value: "<p><em>Rivendell, page 76</em></p>" },
        active: { value: true },
        cost: { value: 1 },
      },
    });

    console.log("... for dragons");
    await Item.create({
      name: "Weak Point",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesDragons._id,
      data: { description: { value: "<p><em>Erebor, page 76</em></p>" }, active: { value: false }, cost: { value: 0 } },
    });
    await Item.create({
      name: "Fiery Breath",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesDragons._id,
      data: { description: { value: "<p><em>Erebor, page 76</em></p>" }, active: { value: true }, cost: { value: 1 } },
    });
    await Item.create({
      name: "Poisonous Breath",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesDragons._id,
      data: { description: { value: "<p><em>Erebor, page 76</em></p>" }, active: { value: true }, cost: { value: 1 } },
    });
    await Item.create({
      name: "Fierce Speed",
      type: "special-ability",
      img: "systems/tor1e/assets/images/icons/adversary_special-ability.png",
      folder: dossierCapacitesSpecialesDragons._id,
      data: { description: { value: "<p><em>Erebor, page 76</em></p>" }, active: { value: false }, cost: { value: 0 } },
    });

    console.log("-------------------------------------------------------------------");
    console.log("          ==> TRAITS (specialties and distinctive features)");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATE BASE TRAITS FOLDER ====");
    let dossierTraits = await Folder.create({
      name: "Traits",
      type: "Item",
      color: "#2e0505",
      sorting: "a",
      parent: dossierCaracteristiques._id,
    });

    console.log("===== CREATE SUBFOLDERS ====");

    let dossierParticularites = await Folder.create({
      name: "Distinctive Features",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierTraits._id,
    });

    let dossierSpecialites = await Folder.create({
      name: "Specialties",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierTraits._id,
    });

    console.log("===== CREATE TRAITS ====");
    console.log("Specialties");
    await Item.create({
      name: "Firestarter",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 94</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Horsemanship",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Les Riders of Rohan, page 142</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Boatman",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 94</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Embroidery",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Rivendell, page 15</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Cartography",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: {
          value: "<p><em>Darkness over Mirkwood / Wildlands Guide, page  130 / 84</em></p>",
        },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Hunting",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Rivendell, page 65</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Leadership",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion, page 104</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Commerce",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 94</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Fauna Knowledge",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 94</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Mountain Knowledge",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Mountainer, page Mountainer</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Enemy Knowledge [race]",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 94</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Elven Lore",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 95</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Regional Knowledge",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 95</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Gondor Knowledge",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion, page 65</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Shadow Awareness",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 95</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Storytelling",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 95</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Cooking",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 95</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Enemy of Sauron",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Rivendell, page 129</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Folklore",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 95</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Smithing",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Smoking",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Herbalism",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Gardener",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Masonry",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Medicine",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Minstrel",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 26</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Carpentry",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 96</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Mountaineer",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Wildlands Guide, page 45</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Climber",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 97</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Swimming",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 97</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Reveler",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Wildlands Guide, page 30</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Connoisseur’s Eye",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Bree, page 41</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Fishing",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 97</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Tracking",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Riders of Rohan, page 150</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Knowledge Rhymes",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 97</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Weaving",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Wildlands Guide, page 24</em></p>" },
        group: { value: "speciality" },
      },
    });
    await Item.create({
      name: "Ancient Tradition",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 97</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Arnor Tradition",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Rivendell, page 121</em></p>" }, group: { value: "speciality" } },
    });
    await Item.create({
      name: "Troglodyte",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/speciality.png",
      folder: dossierSpecialites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 97</em></p>" }, group: { value: "speciality" } },
    });

    console.log("Distinctive Features");
    await Item.create({
      name: "Bitter",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>The Vestiges of the North, page 95</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Friend of Elves",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Tales and Legends of the Wild Lands, page 80</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Cunning",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Bold",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Beautiful",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Grumpy",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Brutal",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>The Vestiges of the North, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Secretive",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Circumspect",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Tough",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 288</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Courageous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 98</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Wrathful",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Deadly Wrath",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 288</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Courteous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Cruel",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Wildlands Guide, page 30</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Curious",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Determined",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Hardened",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Energetic",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Headstrong",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Eccentric",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Wildlands Guide, page 22</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Fierce",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Les Riders of Rohan, page 190</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Proud",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Devastating Force",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 288</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Mad",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Wildlands Guide, page 55</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Frank",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Generous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Gigantic",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 288</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Large",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Honorable",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Impetuous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 99</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Unwavering",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Evasive",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Jovial",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Loyal",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Majestic",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Clever",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Machinations",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: {
          value: "<p><em>Darkness over Mirkwood / Wildlands Guide, page 133 / 100</em></p>",
        },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Suspicious",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Merciful",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Observant",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Keen Hearing",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Passionate",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Patient",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Small",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Prescient",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Rivendell, page 121</em></p>" }, group: { value: "distinctiveFeature" } },
    });
    await Item.create({
      name: "Presumptuous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>The Vestiges of the North, page 55</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Agile",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Prudent",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Vindictive",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>The Vestiges of the North, page 100</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Swift",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Resilient",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Robust",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Severe",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Sincere",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Sinister",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Reckless",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Vengeful",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });
    await Item.create({
      name: "Sharp Vision",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/distinctive_feature.png",
      folder: dossierParticularites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 101</em></p>" },
        group: { value: "distinctiveFeature" },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("          ==> VIRTUES                                               ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATE BASE FOLDER ====");
    let dossierVertus = await Folder.create({
      name: "Virtues",
      type: "Item",
      color: "#2e0505",
      sorting: "a",
      parent: dossierCaracteristiques._id,
    });

    console.log("===== CREATE SUBFOLDERS ====");
    let dossierVertusMaitrises = await Folder.create({
      name: "... Masteries",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusBardides = await Folder.create({
      name: "for Bardings",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusBeornides = await Folder.create({
      name: "for Beornings",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusRohirrim = await Folder.create({
      name: "for Riders of Rohan",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHommesBree = await Folder.create({
      name: "for Men of Bree",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHommesMinasTirith = await Folder.create({
      name: "for Men of Minas Tirith",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHommesPaysDun = await Folder.create({
      name: "for Men of the Land of Dun",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHommesDuLac = await Folder.create({
      name: "for Men of the Lake",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHommesDesBoisDesTerresSauvages = await Folder.create({
      name: "for Men of the Woods",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusRodeurDuNord = await Folder.create({
      name: "for Rangers of the North",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHobbitComte = await Folder.create({
      name: "for Hobbits of the Shire",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHobbitBree = await Folder.create({
      name: "for Hobbits of Bree",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusHobbitSauvageValleeAnduin = await Folder.create({
      name: "for Wild Hobbits of the Anduin Valleys",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusElfeForetNoire = await Folder.create({
      name: "for Elves of the Black Forest",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusElfeCapricieuxForetNoire = await Folder.create({
      name: "for Capricious Elves of the Black Forest",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusElfeLorien = await Folder.create({
      name: "for Elves of Lothlórien",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertushautElfeRivendell = await Folder.create({
      name: "for High Elves of Rivendell",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusNainErebor = await Folder.create({
      name: "for Dwarves of the Lonely Mountain",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusNainMontsDeFer = await Folder.create({
      name: "for Dwarves of the Iron Hills",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusNainMontagnesGrises = await Folder.create({
      name: "for Dwarves of the Grey Mountains",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });
    let dossierVertusNainMontagnesBleues = await Folder.create({
      name: "for Dwarves of the Blue Mountains",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierVertus._id,
    });

    console.log("===== CREATE VIRTUES ====");
    console.log("Masteries");
    await Item.create({
      name: "Confident",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Gifted",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Expert",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Mighty Hand",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Sure Hand",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Resistant",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Master Corruption",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Master Fear",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Master Protection",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 114</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });
    await Item.create({
      name: "Master Skill",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusMaitrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 114</em></p>" },
        type: { value: "tor1e.virtues.groups.masteries" },
      },
    });

    console.log("cultural virtues");
    await Item.create({
      name: "Dreadful Visions",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Heritage",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 106</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Man of the King",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 106</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Master of Arms",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 106</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Fierce Shot",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 107</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Honey Biscuits",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 107</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Considerable Strength",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 107</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Brother of Bears",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 107</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Thick Skin",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Night Wanderer",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Horse Leaders of the Riddermark",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 145</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ominous Blessing",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 23</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "House Squire",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 145</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Royal Guard",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 146</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Master of Fate",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 146</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Old Songs and Children’s Tales",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 146</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Courage of the Desperate",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 42</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Friendly and Outspoken",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 42</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "From Memories and Old Tales",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 42</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "People of Bree, Small and Great",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 43</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Happy as Ulysses",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 43</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Captain of Gondor",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 67</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Tower Guard",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 67</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "In Battle",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 67</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Beyond the Perilous Roads",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 68</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Piercing Sight",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 68</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "A Mysterious People",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 152</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Champion of the Hill Men",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 152</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Of Sinister Appearance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 152</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Bad Omen",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 153</em></p>" },
        active: { value: true },
        cost: { value: 1 },
        group: { value: "cultural" },
      },
    });
    await Item.create({
      name: "Savage Assault",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierVertusHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 153</em></p>" },
        active: { value: true },
        cost: { value: 1 },
        group: { value: "cultural" },
      },
    });
    await Item.create({
      name: "Guild Archer",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 28</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Merchant Prince",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 28</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Shield Combat",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 28</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Business Sense",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 28</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Seaman’s Foot",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du lac, page 29</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Song of Devotion",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 114</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dogs of the Black Forest",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 114</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Medicinal Herbs",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 115</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "The Hunter's Will",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 115</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Natural Vigilance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 115</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Intrepid Guardians",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 124</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ranger's Endurance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 125</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Revealed Royalty",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 125</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Whisper of the Earth",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 125</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Familiar with Nature",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 125</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Art of Disappearance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 112</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "As Hard as Stone",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Brave When Needed",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Straight to the Point",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Little Folk",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Courage of the Desperate",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 42</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Friendly and Indiscreet",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 42</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "People of Bree, Young and Old",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 43</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Art of Disappearance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 112</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Little Folk",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Art of Disappearance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 112</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "As Hard as Stone",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Brave When Needed",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Straight to the Point",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Little Folk",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 113</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Stinging Riddles",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 86</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Scourge of the Shadow",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "The Heralds",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Magic of the Silvan Elves",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Deadly Archery",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elven Dreams",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 112</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "The Call of the Black Forest",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 81</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "The Heralds",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Magic of the Silvan Elves",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Deadly Archery",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elven Dreams",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 112</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elven Waybread",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 50</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "The Heralds",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Favour of the Lady",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 50</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Deadly Archery",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 111</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elven Dreams",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 112</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Eregion Craftsman",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 132</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Beauty of the Stars",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 133</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elbereth Gilthoniel!",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 133</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Power of the Firstborn",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 133</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Eldar Prowess",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 133</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ancestral Hatred",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Stubbornness",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "The Ravens of the Mountain",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 109</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Broken Spells",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Way of Durin",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ancestral Hatred",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Stubbornness",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Oath of Allegiance",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Erebor, page 100</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Broken Spells",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Way of Durin",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ancestral Hatred",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Stubbornness",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dark Affairs",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Erebor, page 105</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Broken Spells",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Way of Durin",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ancestral Hatred",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Stubbornness",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 108</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Ardent Chants",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 35</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Broken Spells",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });
    await Item.create({
      name: "Way of Durin",
      type: "virtues",
      img: "systems/tor1e/assets/images/icons/virtue.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 110</em></p>" },
        type: { value: "tor1e.virtues.groups.cultural" },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("          ==> REWARDS                                              ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATE BASE REWARDS FOLDER ====");
    let dossierRecompenses = await Folder.create({
      name: "Rewards",
      type: "Item",
      color: "#2e0505",
      sorting: "a",
      parent: dossierCaracteristiques._id,
    });

    console.log("===== CREATE SUBFOLDERS ====");
    let dossierRecompensesQualites = await Folder.create({
      name: "... Qualities",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesBardides = await Folder.create({
      name: "for Bardings",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesBeornides = await Folder.create({
      name: "for Beornings",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesRohirrim = await Folder.create({
      name: "pour Riders of Rohan",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHommesBree = await Folder.create({
      name: "for Men of Bree",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHommesMinasTirith = await Folder.create({
      name: "for Men of Minas Tirith",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHommesPaysDun = await Folder.create({
      name: "for Men of the Land of Dun",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHommesDuLac = await Folder.create({
      name: "for Men of the Lake",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHommesDesBoisDesTerresSauvages = await Folder.create({
      name: "for Men of the Woods",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesRodeurDuNord = await Folder.create({
      name: "for Rangers of the North",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHobbitsComte = await Folder.create({
      name: "for Hobbits of the Shire",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHobbitsBree = await Folder.create({
      name: "for Hobbits of Bree",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesHobbitSauvageValleeAnduin = await Folder.create({
      name: "for Wild Hobbits of the Anduin Valleys",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesElfeForetNoire = await Folder.create({
      name: "for Elves of the Black Forest",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesElfeCapricieuxForetNoire = await Folder.create({
      name: "for Capricious Elves of the Black Forest",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesElfeLorien = await Folder.create({
      name: "for Elves of Lothlórien",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompenseshautElfeRivendell = await Folder.create({
      name: "for High Elves of Rivendell",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesNainErebor = await Folder.create({
      name: "for Dwarves of the Lonely Mountain",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesNainMontsDeFer = await Folder.create({
      name: "for Dwarves of the Iron Hills",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesNainMontagnesGrises = await Folder.create({
      name: "for Dwarves of the Grey Mountains",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });
    let dossierRecompensesNainMontagnesBleues = await Folder.create({
      name: "for Dwarves of the Blue Mountains",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierRecompenses._id,
    });

    console.log("===== CREATE REWARDS ====");
    console.log("Qualities");
    await Item.create({
      name: "Resourceful",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesQualites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.qualities" },
      },
    });
    await Item.create({
      name: "Precise",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesQualites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.qualities" },
      },
    });
    await Item.create({
      name: "Reinforced",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesQualites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.qualities" },
      },
    });
    await Item.create({
      name: "Devastating",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesQualites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.qualities" },
      },
    });
    await Item.create({
      name: "Keen",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesQualites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.qualities" },
      },
    });
    await Item.create({
      name: "Fierce",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesQualites._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.qualities" },
      },
    });

    console.log("Cultural Rewards");
    await Item.create({
      name: "Dale Longbow",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "King Brandor's Lance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Great Pavise",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesBardides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Giant-Slayer Lance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 118</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Noble Armor",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Quartering Axe",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesBeornides._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Hauberk of Old Gondor",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book.</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Crested Helm",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book.</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Gleaming Lance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesRohirrim._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Référence, page </em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Bailiff's Lantern",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Livre, page Page</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Prancing Pony Pipe",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Shield of the First Men",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Horn of Minas Anor",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 119</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Shield of the Citadel",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 120</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Weapon of the Great Lineage",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesMinasTirith._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 120</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Armor of the Spires",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 120</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Heartseeker",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 147</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Great Forest Axe",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesPaysDun._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 147</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Copper Armor",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 147</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Whetstone",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 43</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Serpent Blade",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesDuLac._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 43</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Bearded Axe",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Bree, page 43</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Feather Armor",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 68</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Shepherd's Bow",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHommesDesBoisDesTerresSauvages._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 68</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Relic of Arnor",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 68</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Star of the Dúnedain",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 153</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Numenorean Arrows",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesRodeurDuNord._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 153</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Bow of the North",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitsComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Riders of Rohan, page 153</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "King's Blade",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitsComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du Lac, page 29</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Armor of Luck",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitsComte._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du Lac, page 29</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Arc des Hauts du Nord",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitsBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Guide de la Ville du Lac, page 29</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Lame de Roi",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitsBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 122</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Armure de Chance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitsBree._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 122</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Marsh Bow",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 122</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Lame de Roi",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 126</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Armure de Chance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 126</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Fishing Spear",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesHobbitSauvageValleeAnduin._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 122</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Bitter Lance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 126</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Lancer's Shield",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 126</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Sylvan Bow",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 126</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Lance amère",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Bouclier du lancier",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Arc sylvain",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 122</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Wine of the Dark Mountains",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeCapricieuxForetNoire._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elven Cloak",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Galadhrim Bow",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 122</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Elven Brooch",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesElfeLorien._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 86</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Minor Ring",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Compendia & Maps of Forbidden Knowledge",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Spear of the Last Alliance",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompenseshautElfeRivendell._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Azanulbizar Axe",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Hauberk",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Helm of Dread",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainErebor._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 121</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Hache de l’Azanulbizar",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 81</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Haubert de Pied-d’Acier",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 50</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Heaume d’Effroi",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontsDeFer._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 50</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Worm Axe",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Adventurer’s Companion (vo), page 50</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Hauberk",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 134</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Helm of Dread",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontagnesGrises._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 134</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Harp of the Halls",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Rivendell, page 134</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Dwarven Hauberk",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 120</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });
    await Item.create({
      name: "Helm of Dread",
      type: "reward",
      img: "systems/tor1e/assets/images/icons/reward.png",
      folder: dossierRecompensesNainMontagnesBleues._id,
      permission: { default: 2 },
      data: {
        description: { value: "<p><em>Core Rule Book, page 120</em></p>" },
        type: { value: "tor1e.reward.groups.cultural" },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("          ==> SHADOW FLAWS                                          ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATE BASE FOLDER ====");
    let dossierDefautsOmbre = await Folder.create({
      name: "Flaws",
      type: "Item",
      color: "#2e0505",
      sorting: "a",
      parent: dossierCaracteristiques,
    });

    console.log("===== CREATE SUBFOLDERS ====");
    let dossierMaledictionVengeance = await Folder.create({
      name: "Curse of Vengeance",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierDefautsOmbre._id,
    });
    let dossierMalDuDragon = await Folder.create({
      name: "Dragon Sickness",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierDefautsOmbre._id,
    });
    let dossierAttraitDuPouvoir = await Folder.create({
      name: "Lure of Power",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierDefautsOmbre._id,
    });
    let dossierAttraitDesSecrets = await Folder.create({
      name: "Lure of Secrets",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierDefautsOmbre._id,
    });
    let dossierFolieItinerante = await Folder.create({
      name: "Wandering Madness",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierDefautsOmbre._id,
    });

    await Item.create({
      name: "Vindictive",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMaledictionVengeance._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 235</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Brutal",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMaledictionVengeance._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 235</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Cruel",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMaledictionVengeance._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Murderous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMaledictionVengeance._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Greedy",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMalDuDragon._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Suspicious",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMalDuDragon._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Dishonest",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMalDuDragon._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Thief",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierMalDuDragon._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Bitter",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDuPouvoir._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Arrogant",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDuPouvoir._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Presumptuous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDuPouvoir._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Tyrannical",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDuPouvoir._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 236</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Haughty",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDesSecrets._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Contemptuous",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDesSecrets._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Calculating",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDesSecrets._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Deceitful",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierAttraitDesSecrets._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Lazy",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierFolieItinerante._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Distracted",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierFolieItinerante._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Indifferent",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierFolieItinerante._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });
    await Item.create({
      name: "Cowardly",
      type: "trait",
      img: "systems/tor1e/assets/images/icons/shadow-weakness.png",
      folder: dossierFolieItinerante._id,
      permission: { default: 2 },
      data: { description: { value: "<p><em>Core Rule Book, page 237</em></p>" }, group: { value: "flaw" } },
    });

    console.log("===== END OF CHARACTERISTICS CREATION ====");
  }
}
