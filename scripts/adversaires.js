export class Tor1eCompendiumAdversaires {
  async creationAdversaires() {
    console.log("===== CREATION OF ADVERSARIES ====");

    let dossierAdversaires = await Folder.create({
      name: "Adversaries",
      type: "Actor",
      sorting: "a",
      parent: null,
    });

    let dossierOrcsGob = await Folder.create({
      name: "Orcs and Goblins",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierAraignees = await Folder.create({
      name: "Spiders",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierTrolls = await Folder.create({
      name: "Trolls",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierLoups = await Folder.create({
      name: "Wolves",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierVampires = await Folder.create({
      name: "Vampires",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierCreaturesDesMarais = await Folder.create({
      name: "Marsh Creatures",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierEsprits = await Folder.create({
      name: "Specters, Shadows and Spirits",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierDragonsBasilics = await Folder.create({
      name: "Dragons and Basilisks",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierDivers = await Folder.create({
      name: "Various Creatures",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierHommesMauvaisRhovanion = await Folder.create({
      name: "Evil Men of Rhovanion",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierHommesMauvaisEriador = await Folder.create({
      name: "Evil Men of Eriador",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });
    let dossierRohan = await Folder.create({
      name: "Evil Men of Rohan",
      type: "Actor",
      sorting: "a",
      color: "#2e0505",
      parent: dossierAdversaires._id,
    });

    let monActor1 = await this.ajouteUnAdversaire(dossierOrcsGob, "Great Orc", "modules/tor1e-compendium/icons/adv-orc.webp", 7, 48, "", 8, 5, false, 3, true, 2, false, 2, true, 2, false, 2, false, 2, true, false);
    await this.ajouteArme(monActor1, "Heavy Scimitar (2-Hd)", "", 3, true, 7, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor1, "Broad Tipped Spear", "", 3, false, 5, 10, 12, "Piercing", "");
    await this.ajouteArme(monActor1, "Orc Axe", "", 2, true, 5, 12, 16, "Shield Breaker", "");
    await this.ajoutePieceArmure(monActor1, "Mail Shirt", 4, "");
    await this.ajoutePieceArmure(monActor1, "Shield", 2, "");
    await this.ajouteCapaciteSpeciale(monActor1, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor1, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor1, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor1, "Large Size", "", "");
    let monActor2 = await this.ajouteUnAdversaire(dossierOrcsGob, "Snaga Tracker", "modules/tor1e-compendium/icons/adv-orc.webp", 2, 8, "", 2, 3, false, 2, false, 2, false, 2, true, 2, true, 1, false, 1, false, false);
    await this.ajouteArme(monActor2, "Horn Bow", "", 2, false, 4, 10, 12, "Poison", "");
    await this.ajouteArme(monActor2, "Tooth Knife", "", 2, true, 3, 12, 14, "", "");
    await this.ajoutePieceArmure(monActor2, "Long-sleeved Cuirass", 2, "");
    await this.ajouteCapaciteSpeciale(monActor2, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor2, "Serpent's Speed", "", "");
    let monActor3 = await this.ajouteUnAdversaire(dossierOrcsGob, "Black Uruk", "modules/tor1e-compendium/icons/adv-orc.webp", 5, 20, "", 4, 5, false, 3, false, 3, true, 3, true, 2, true, 1, false, 2, false, false);
    await this.ajouteArme(monActor3, "Broad Sword", "", 2, true, 5, 10, 14, "Poison", "");
    await this.ajouteArme(monActor3, "Broad Tipped Spear", "", 2, false, 5, 10, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor3, "Long-sleeved Cuirass", 2, "");
    await this.ajoutePieceArmure(monActor3, "Shield", 2, "");
    await this.ajouteCapaciteSpeciale(monActor3, "Terrible Strength", "", "");
    let monActor4 = await this.ajouteUnAdversaire(dossierOrcsGob, "Lugburz Messenger", "modules/tor1e-compendium/icons/adv-orc.webp", 4, 18, "", 5, 0, false, 3, true, 2, false, 2, false, 2, true, 2, true, 3, false, false);
    await this.ajouteArme(monActor4, "Heavy Scimitar (2-Hd)", "", 2, false, 7, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor4, "Tooth Knife", "", 3, true, 3, 12, 14, "", "");
    await this.ajoutePieceArmure(monActor4, "Long-sleeved Cuirass", 2, "");
    await this.ajouteCapaciteSpeciale(monActor4, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor4, "Serpent's Speed", "", "");
    await this.ajouteCapaciteSpeciale(monActor4, "Imperious Voice", "", "");
    let monActor5 = await this.ajouteUnAdversaire(dossierOrcsGob, "Orc Chief", "modules/tor1e-compendium/icons/adv-orc.webp", 5, 20, "Animosity: Mount Gram (Hobbits), Goblin-town (Dwarves)", 5, 4, false, 3, false, 3, true, 2, false, 2, true, 1, false, 3, true, false);
    await this.ajouteArme(monActor5, "Orc Axe", "", 3, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor5, "Spear", "", 2, true, 4, 9, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor5, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor5, "Grand Shield", 3, "");
    await this.ajouteCapaciteSpeciale(monActor5, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor5, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor5, "Serpent's Speed", "", "");
    await this.ajouteCapaciteSpeciale(monActor5, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor5, "Animosity (culture)", "Animosity (Mount Gram: Hobbits, Goblin-town: Dwarves)", "");
    let monActor6 = await this.ajouteUnAdversaire(dossierOrcsGob, "Goblin Bowher", "modules/tor1e-compendium/icons/adv-orc.webp", 2, 8, "Animosity: Mount Gram (Hobbits), Goblin-town (Dwarves)", 1, 2, false, 1, false, 3, true, 2, false, 2, false, 1, false, 1, false, false);
    await this.ajouteArme(monActor6, "Horn Bow", "", 2, true, 4, 10, 12, "Poison", "");
    await this.ajouteArme(monActor6, "Tooth Knife", "", 1, false, 3, 12, 14, "", "");
    await this.ajoutePieceArmure(monActor6, "Long-sleeved Cuirass", 2, "");
    await this.ajouteCapaciteSpeciale(monActor6, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor6, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor6, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor6, "Animosity (culture)", "Animosity (Mount Gram: Hobbits, Goblin-town: Dwarves)", "");
    let monActor7 = await this.ajouteUnAdversaire(dossierOrcsGob, "Orc Guard", "modules/tor1e-compendium/icons/adv-orc.webp", 4, 16, "Animosity: Mount Gram (Hobbits), Goblin-town (Dwarves)", 3, 4, false, 2, false, 3, false, 3, true, 2, false, 2, true, 1, false, false);
    await this.ajouteArme(monActor7, "Spear", "", 3, false, 4, 9, 12, "Piercing", "");
    await this.ajouteArme(monActor7, "Curved Sword", "", 2, false, 4, 10, 12, "Disarm", "");
    await this.ajoutePieceArmure(monActor7, "Long-sleeved Cuirass", 2, "");
    await this.ajoutePieceArmure(monActor7, "Shield", 2, "");
    await this.ajouteCapaciteSpeciale(monActor7, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor7, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor7, "Animosity (culture)", "Animosity (Mount Gram: Hobbits, Goblin-town: Dwarves)", "");
    let monActor8 = await this.ajouteUnAdversaire(dossierOrcsGob, "Orc Soldier", "modules/tor1e-compendium/icons/adv-orc.webp", 3, 12, "Animosity: Mount Gram (Hobbits), Goblin-town (Dwarves)", 1, 3, false, 2, false, 2, false, 3, false, 2, true, 1, false, 1, false, false);
    await this.ajouteArme(monActor8, "Curved Sword", "", 2, false, 4, 10, 12, "Disarm", "");
    await this.ajouteArme(monActor8, "Spear", "", 2, false, 4, 9, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor8, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor8, "Shield", 1, "");
    await this.ajouteCapaciteSpeciale(monActor8, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor8, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor8, "Animosity (culture)", "Animosity (Mount Gram: Hobbits, Goblin-town: Dwarves)", "");
    let monActor9 = await this.ajouteUnAdversaire(dossierOrcsGob, "Gorgol, son of Bolg", "modules/tor1e-compendium/icons/adv-orc.webp", 6, 45, "Azog's Scimitar: Heritage of the Northern Goblins. Increases the Hate value of its bearer by 3 and of their followers by 1.", 10, 6, false, 4, true, 2, false, 3, true, 2, false, 2, false, 4, true, true);
    await this.ajouteArme(monActor9, "Heavy Scimitar (2-Hd)", "", 4, true, 8, 10, 15, "Shield Breaker, Piercing", "<b>Azog's Scimitar</b>: Heritage of the Northern Goblins. Increases the Hate value of its bearer by 3 and of their followers by 1.");
    await this.ajouteArme(monActor9, "Orc Axe", "", 2, false, 5, 12, 16, "Piercing", "");
    await this.ajoutePieceArmure(monActor9, "Mail Shirt", 4, "");
    await this.ajouteCapaciteSpeciale(monActor9, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor9, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor9, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor9, "Animosity (culture)", "Animosity (Dwarves)", "");
    let monActor10 = await this.ajouteUnAdversaire(dossierOrcsGob, "New Great Goblin", "modules/tor1e-compendium/icons/adv-orc.webp", 7, 60, "", 8, 3, false, 3, true, 1, false, 2, false, 2, false, 3, true, 3, true, true);
    await this.ajouteArme(monActor10, "Orc Axe", "", 3, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor10, "Broad Tipped Spear", "", 2, false, 5, 10, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor10, "Mail Shirt", 4, "");
    await this.ajoutePieceArmure(monActor10, "Grand Shield", 3, "");
    await this.ajouteCapaciteSpeciale(monActor10, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor10, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor10, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor10, "Animosity (culture)", "Animosity (Beornings)", "");
    let monActor11 = await this.ajouteUnAdversaire(dossierOrcsGob, "Maghaz, Orc Captain", "modules/tor1e-compendium/icons/adv-orc.webp", 4, 14, "", 5, 3, false, 3, true, 1, false, 2, false, 2, true, 2, false, 3, false, true);
    await this.ajouteArme(monActor11, "Curved Sword", "", 3, false, 4, 10, 12, "Disarm", "");
    await this.ajouteArme(monActor11, "Spear", "", 2, false, 4, 9, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor11, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor11, "Shield", 1, "");
    await this.ajouteCapaciteSpeciale(monActor11, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor11, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor11, "Serpent's Speed", "", "");
    let monActor12 = await this.ajouteUnAdversaire(dossierOrcsGob, "Forest Goblin", "modules/tor1e-compendium/icons/adv-orc.webp", 2, 10, "", 2, 1, false, 1, false, 3, true, 2, false, 2, true, 1, false, 1, false, false);
    await this.ajouteArme(monActor12, "Stone-tipped Spear", "", 2, true, 4, 10, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor12, "Long-sleeved Cuirass", 2, "");
    await this.ajoutePieceArmure(monActor12, "Shield", 1, "");
    await this.ajouteCapaciteSpeciale(monActor12, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor12, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor12, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor12, "Forest Dweller", "", "");
    let monActor13 = await this.ajouteUnAdversaire(dossierOrcsGob, "Ghor the Swindler", "modules/tor1e-compendium/icons/adv-orc.webp", 6, 35, "", 6, 5, true, 3, true, 2, false, 2, true, 2, false, 2, false, 2, false, true);
    await this.ajouteArme(monActor13, "Heavy Scimitar (2-Hd)", "", 3, true, 7, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor13, "Orc Axe", "", 3, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajoutePieceArmure(monActor13, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor13, "Helmet", 4, "");
    await this.ajouteCapaciteSpeciale(monActor13, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor13, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor13, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor13, "Brutal Assault", "", "");
    let monActor14 = await this.ajouteUnAdversaire(dossierOrcsGob, "Burzash, War Lord", "modules/tor1e-compendium/icons/adv-orc.webp", 7, 48, "", 8, 5, false, 3, false, 2, false, 2, true, 2, false, 2, false, 2, true, true);
    await this.ajouteArme(monActor14, "Heavy Scimitar (2-Hd)", "", 3, true, 7, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor14, "Broad Tipped Spear", "", 3, false, 5, 10, 12, "Piercing", "");
    await this.ajouteArme(monActor14, "Orc Axe", "", 2, true, 5, 12, 16, "Shield Breaker", "");
    await this.ajoutePieceArmure(monActor14, "Shield", 2, "");
    await this.ajoutePieceArmure(monActor14, "Mail Shirt", 4, "");
    await this.ajouteCapaciteSpeciale(monActor14, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor14, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor14, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor14, "Large Size", "", "");
    let monActor15 = await this.ajouteUnAdversaire(dossierOrcsGob, "Goblin of Carn Dûm", "modules/tor1e-compendium/icons/adv-orc.webp", 2, 10, "<b>Disparate band</b>: If Hill-men accompany the Goblins, Cowardice is ineffective and the SR to set an ambush increases to 18.", 2, 3, false, 1, false, 3, false, 3, false, 2, true, 1, false, 1, true, false);
    await this.ajouteArme(monActor15, "Broad Sword", "", 2, true, 5, 10, 14, "Poison", "");
    await this.ajouteArme(monActor15, "Horn Bow", "", 1, false, 4, 10, 12, "Poison", "");
    await this.ajoutePieceArmure(monActor15, "Long-sleeved Cuirass", 2, "");
    await this.ajouteCapaciteSpeciale(monActor15, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor15, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor15, "Animosity (culture)", "Animosity (Dunedains)", "");
    await this.ajouteCapaciteSpeciale(monActor15, "Animosity (culture)", "Animosity (Elves)", "");
    let monActor16 = await this.ajouteUnAdversaire(dossierOrcsGob, "Mount Gram Orc", "modules/tor1e-compendium/icons/adv-orc.webp", 4, 14, "The Orcs of Gram have not forgotten the crushing defeat inflicted by Bandobras Took, the Bullroarer, and since then harbor a fierce hatred for all Hobbits. Their ambition also leads them to conspire against neighboring Orcs and to lead a patrol of Rangers toward the site of a rival Orc community.", 4, 3, false, 3, false, 2, false, 2, true, 2, true, 1, false, 1, false, false);
    await this.ajouteArme(monActor16, "Curved Sword", "", 2, true, 4, 10, 12, "Disarm", "");
    await this.ajouteArme(monActor16, "Spear", "", 2, false, 4, 9, 14, "Piercing", "");
    await this.ajoutePieceArmure(monActor16, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor16, "Shield", 1, "");
    await this.ajouteCapaciteSpeciale(monActor16, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor16, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor16, "Animosity (culture)", "Animosity (Hobbits)", "");
    let monActor17 = await this.ajouteUnAdversaire(dossierOrcsGob, "Radgul the Orc Chief", "modules/tor1e-compendium/icons/adv-orc.webp", 6, 35, "Leader of the Orcs of Mount Gram. An old, scarred, gnarled, and ambitious Orc who aims for the throne of Mount Gundabad through patience and cunning.", 9, 6, false, 4, true, 2, true, 3, false, 3, true, 2, false, 2, false, true);
    await this.ajouteArme(monActor17, "Orc Axe", "", 4, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor17, "Spear", "", 2, true, 4, 9, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor17, "Mail Shirt", 4, "");
    await this.ajoutePieceArmure(monActor17, "Grand Shield", 3, "");
    await this.ajouteCapaciteSpeciale(monActor17, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor17, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor17, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor17, "Animosity (culture)", "Animosity (Hobbits)", "");
    let monActor18 = await this.ajouteUnAdversaire(dossierOrcsGob, "Gishak Gashnaga", "modules/tor1e-compendium/icons/adv-orc.webp", 7, 48, "", 8, 5, false, 3, true, 2, false, 2, true, 2, false, 2, false, 2, true, true);
    await this.ajouteArme(monActor18, "Heavy Scimitar (2-Hd)", "", 3, true, 7, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor18, "Broad Tipped Spear", "", 3, false, 5, 10, 12, "Piercing", "");
    await this.ajouteArme(monActor18, "Orc Axe", "", 2, true, 5, 12, 16, "Shield Breaker", "");
    await this.ajoutePieceArmure(monActor18, "Mail Shirt", 4, "");
    await this.ajoutePieceArmure(monActor18, "Shield", 2, "");
    await this.ajouteCapaciteSpeciale(monActor18, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor18, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor18, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor18, "Large Size", "", "");
    let monActor19 = await this.ajouteUnAdversaire(dossierOrcsGob, "The Ruthless", "modules/tor1e-compendium/icons/adv-orc.webp", 7, 48, "<b>Location</b>: Tower of the Flame of Ice, Frozen Valley (Nan Gorthrim), Angmar", 8, 5, false, 3, true, 2, false, 3, true, 2, false, 2, false, 3, true, true);
    await this.ajouteArme(monActor19, "Heavy Scimitar (2-Hd)", "", 4, true, 7, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor19, "Broad Tipped Spear", "", 3, false, 5, 10, 12, "Piercing", "");
    await this.ajoutePieceArmure(monActor19, "Mail Shirt", 4, "");
    await this.ajoutePieceArmure(monActor19, "Shield", 2, "");
    await this.ajouteCapaciteSpeciale(monActor19, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor19, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor19, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor19, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor19, "Elusive", "", "");
    await this.ajouteCapaciteSpeciale(monActor19, "Murderous", "", "");
    let monActor20 = await this.ajouteUnAdversaire(dossierAraignees, "Attercop the Spider", "modules/tor1e-compendium/icons/adv-araignee.webp", 3, 12, "", 2, 4, false, 1, false, 3, true, 1, true, 1, false, 1, false, 1, false, false);
    await this.ajouteArme(monActor20, "Web", "", 2, true, 0, 0, 0, "", "");
    await this.ajouteArme(monActor20, "Stinger", "", 2, true, 3, 10, 14, "Poison", "");
    await this.ajoutePieceArmure(monActor20, "Long-sleeved Cuirass", 2, "Shell");
    await this.ajouteCapaciteSpeciale(monActor20, "Great Leap", "", "");
    await this.ajouteCapaciteSpeciale(monActor20, "Embrace", "", "");
    let monActor21 = await this.ajouteUnAdversaire(dossierAraignees, "Cave Spider", "modules/tor1e-compendium/icons/adv-araignee.webp", 3, 12, "", 2, 4, false, 1, false, 3, true, 1, true, 1, false, 1, false, 1, false, false);
    await this.ajouteArme(monActor21, "Web", "", 2, true, 0, 0, 0, "", "");
    await this.ajouteArme(monActor21, "Stinger", "", 2, true, 3, 10, 14, "Poison", "");
    await this.ajoutePieceArmure(monActor21, "Long-sleeved Cuirass", 2, "Shell");
    await this.ajouteCapaciteSpeciale(monActor21, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor21, "Embrace", "", "");
    let monActor22 = await this.ajouteUnAdversaire(dossierAraignees, "Great Spider", "modules/tor1e-compendium/icons/adv-araignee.webp", 4, 36, "", 3, 5, false, 3, false, 3, true, 2, true, 2, false, 2, false, 1, false, false);
    await this.ajouteArme(monActor22, "Web", "", 2, true, 0, 0, 0, "", "");
    await this.ajouteArme(monActor22, "Stinger", "", 2, true, 3, 10, 14, "Poison", "");
    await this.ajoutePieceArmure(monActor22, "Long-sleeved Cuirass", 3, "Shell");
    await this.ajouteCapaciteSpeciale(monActor22, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor22, "Terrible Spells", "", "Enchantment: Failed Corruption Test = hero cannot attack for (10-Wisdom) rounds.");
    await this.ajouteCapaciteSpeciale(monActor22, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor22, "Embrace", "", "");
    let monActor23 = await this.ajouteUnAdversaire(dossierAraignees, "Hunter Spider", "modules/tor1e-compendium/icons/adv-araignee.webp", 4, 25, "", 3, 6, false, 2, false, 3, true, 2, false, 3, true, 1, false, 1, false, false);
    await this.ajouteArme(monActor23, "Fangs", "", 2, true, 6, 12, 15, "Poison", "");
    await this.ajoutePieceArmure(monActor23, "Long-sleeved Cuirass", 3, "Shell");
    await this.ajouteCapaciteSpeciale(monActor23, "Great Leap", "", "");
    await this.ajouteCapaciteSpeciale(monActor23, "Terrible Strength", "", "");
    let monActor24 = await this.ajouteUnAdversaire(dossierAraignees, "Sarqin the Fat", "modules/tor1e-compendium/icons/adv-araignee.webp", 8, 90, "", 8, 5, true, 4, false, 1, true, 3, false, 2, true, 3, false, 2, false, true);
    await this.ajouteArme(monActor24, "Web", "", 3, true, 0, 0, 0, "", "If superior success + : immediate attack");
    await this.ajouteArme(monActor24, "Fangs", "", 4, true, 6, 12, 15, "Poison", "<b>Superior spider poison</b>: Duration 1D6 days.");
    await this.ajoutePieceArmure(monActor24, "Mail Shirt", 3, "Shell");
    await this.ajouteCapaciteSpeciale(monActor24, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor24, "Tough Hide", "", "");
    await this.ajouteCapaciteSpeciale(monActor24, "Abomination", "", "<b>Sarqin the Fat</b> : Use SR 16");
    await this.ajouteCapaciteSpeciale(monActor24, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor24, "Fetid stench", "", "");
    await this.ajouteCapaciteSpeciale(monActor24, "Countless Children", "", "");
    let monActor25 = await this.ajouteUnAdversaire(dossierAraignees, "Tauler The Savage", "modules/tor1e-compendium/icons/adv-araignee.webp", 7, 60, "", 8, 8, true, 3, false, 4, true, 4, false, 4, true, 3, false, 3, false, true);
    await this.ajouteArme(monActor25, "Fangs", "", 5, true, 7, 12, 14, "Poison", "<b>Superior spider poison</b>: Duration 1D6 days.");
    await this.ajouteArme(monActor25, "Trampling", "", 3, false, 7, 8, 18, "Knockdown", "");
    await this.ajoutePieceArmure(monActor25, "Mail Shirt", 3, "Shell");
    await this.ajouteCapaciteSpeciale(monActor25, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor25, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor25, "Abominable Resilience", "", "<b>Tauler The Savage</b> : Use SR 16");
    await this.ajouteCapaciteSpeciale(monActor25, "Fear", "", "<b>Tauler The Savage</b> : Use SR 16");
    let monActor26 = await this.ajouteUnAdversaire(dossierAraignees, "Tyulquin the Weaver", "modules/tor1e-compendium/icons/adv-araignee.webp", 9, 60, "", 8, 7, true, 4, false, 3, true, 3, false, 3, true, 2, false, 4, true, true);
    await this.ajouteArme(monActor26, "Web", "", 3, true, 0, 0, 0, "", "If superior success + : immediate attack");
    await this.ajouteArme(monActor26, "Fangs", "", 4, false, 9, 8, 18, "Poison", "<b>Superior spider poison</b> : Duration 1D6 Days.");
    await this.ajoutePieceArmure(monActor26, "Mail Shirt", 3, "Shell");
    await this.ajouteCapaciteSpeciale(monActor26, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor26, "Fear", "", "<b>Tyulqin la tisseuse</b> : Use SR 20");
    await this.ajouteCapaciteSpeciale(monActor26, "Terrible Spells", "", "<b>Stupefaction</b>: The target makes a Corruption test SR 16. Failure: under the spider's influence and moves toward the nearest Web. Captured (Embrace). Next action is lost.");
    await this.ajouteCapaciteSpeciale(monActor26, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor26, "Many poisons", "", "");
    await this.ajouteCapaciteSpeciale(monActor26, "Webs Illusion", "", "");
    let monActor27 = await this.ajouteUnAdversaire(dossierTrolls, "Cave Troll", "modules/tor1e-compendium/icons/adv-troll.webp", 7, 76, "", 8, 5, true, 2, false, 2, true, 1, true, 2, false, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor27, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor27, "Bite", "", 3, false, 5, 12, 14, "", "");
    await this.ajouteArme(monActor27, "Crushing Blow", "", 1, true, 7, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor27, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor27, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor27, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor27, "Tough Hide", "", "");
    let monActor28 = await this.ajouteUnAdversaire(dossierTrolls, "Hill Troll", "modules/tor1e-compendium/icons/adv-troll.webp", 7, 84, "", 7, 5, false, 3, false, 2, false, 3, false, 2, false, 0, false, 2, false, false);
    await this.ajoutePieceArmure(monActor28, "Mail Shirt", 3, "Thick leather");
    await this.ajoutePieceArmure(monActor28, "Shield", 1, "");
    await this.ajouteArme(monActor28, "Heavy Hammer", "", 3, false, 8, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor28, "Crushing Blow", "", 2, false, 7, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor28, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor28, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor28, "Fear", "", "");
    let monActor29 = await this.ajouteUnAdversaire(dossierTrolls, "Hill Troll Chief", "modules/tor1e-compendium/icons/adv-troll.webp", 8, 90, "", 10, 6, false, 3, true, 2, false, 2, false, 2, false, 1, false, 3, false, false);
    await this.ajoutePieceArmure(monActor29, "Mail Shirt", 4, "Thick leather");
    await this.ajoutePieceArmure(monActor29, "Shield", 1, "");
    await this.ajouteArme(monActor29, "Heavy Hammer", "", 4, true, 8, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor29, "Crushing Blow", "", 2, true, 5, 12, 14, "", "");
    await this.ajouteCapaciteSpeciale(monActor29, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor29, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor29, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor29, "No Quarter", "", "");
    let monActor30 = await this.ajouteUnAdversaire(dossierTrolls, "Mountain Troll", "modules/tor1e-compendium/icons/adv-troll.webp", 9, 96, "", 7, 7, false, 4, true, 2, false, 2, false, 3, false, 1, false, 1, false, false);
    await this.ajoutePieceArmure(monActor30, "Mail Shirt", 4, "Thick leather");
    await this.ajouteArme(monActor30, "Crushing Blow", "", 4, true, 9, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor30, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor30, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor30, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor30, "Abomination", "", "");
    let monActor31 = await this.ajouteUnAdversaire(dossierTrolls, "Stone Troll", "modules/tor1e-compendium/icons/adv-troll.webp", 6, 72, "", 5, 5, false, 2, false, 2, false, 2, true, 1, false, 1, true, 1, false, false);
    await this.ajouteArme(monActor31, "Club", "", 3, false, 6, 10, 14, "", "");
    await this.ajouteArme(monActor31, "Crushing Blow", "", 1, true, 6, 12, 12, "", "");
    await this.ajoutePieceArmure(monActor31, "Mail Shirt", 3, "Pierre");
    await this.ajouteCapaciteSpeciale(monActor31, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor31, "Animosity (culture)", "Animosity (Dwarves)", "");
    await this.ajouteCapaciteSpeciale(monActor31, "Terrible Strength", "", "");
    let monActor32 = await this.ajouteUnAdversaire(dossierTrolls, "Weakened Stone Troll", "modules/tor1e-compendium/icons/adv-troll.webp", 6, 60, "", 3, 5, false, 2, false, 2, false, 1, true, 1, false, 1, true, 1, false, false);
    await this.ajouteArme(monActor32, "Club", "", 3, false, 6, 10, 14, "", "");
    await this.ajouteArme(monActor32, "Crushing Blow", "", 1, true, 6, 12, 12, "", "");
    await this.ajoutePieceArmure(monActor32, "Mail Shirt", 3, "Pierre");
    await this.ajouteCapaciteSpeciale(monActor32, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor32, "Animosity (culture)", "Animosity (Dwarves)", "");
    await this.ajouteCapaciteSpeciale(monActor32, "Terrible Strength", "", "");
    let monActor33 = await this.ajouteUnAdversaire(dossierTrolls, "Snow Troll", "modules/tor1e-compendium/icons/adv-troll.webp", 8, 80, "", 8, 6, true, 3, false, 3, true, 2, false, 2, true, 0, false, 0, false, false);
    await this.ajouteArme(monActor33, "Crushing Blow", "", 3, true, 5, 10, 16, "", "");
    await this.ajouteArme(monActor33, "Bite", "", 4, false, 8, 12, 14, "", "");
    await this.ajoutePieceArmure(monActor33, "Mail Shirt", 3, "Thick leather");
    await this.ajouteCapaciteSpeciale(monActor33, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor33, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor33, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor33, "Fear", "", "");
    let monActor34 = await this.ajouteUnAdversaire(dossierTrolls, "Berk the Doorkeeper", "modules/tor1e-compendium/icons/adv-troll.webp", 6, 72, "Berk lives on the edge of the eastern road, where he likes to trap travelers by placing tree trunks on the road to force them to clear the way and tire themselves out. At night, he can then quietly raid the camp of the sleeping travelers. He lives in a troll hole that used to house 3 trolls, now petrified.", 5, 5, false, 2, false, 2, false, 2, true, 1, false, 1, true, 1, false, true);
    await this.ajouteArme(monActor34, "Club", "", 3, false, 6, 10, 14, "", "");
    await this.ajouteArme(monActor34, "Crushing Blow", "", 1, true, 6, 12, 12, "", "");
    await this.ajoutePieceArmure(monActor34, "Mail Shirt", 3, "Thick leather");
    await this.ajouteCapaciteSpeciale(monActor34, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor34, "Animosity (culture)", "Animosity (Dwarves)", "");
    await this.ajouteCapaciteSpeciale(monActor34, "Terrible Strength", "", "");
    let monActor35 = await this.ajouteUnAdversaire(dossierTrolls, "Bloody-stump the Hunter", "modules/tor1e-compendium/icons/adv-troll.webp", 8, 95, "", 10, 4, false, 3, false, 2, false, 2, false, 3, true, 1, false, 3, false, true);
    await this.ajouteArme(monActor35, "Great Black Mace", "", 4, true, 8, 10, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor35, "Bite", "", 2, true, 5, 8, 14, "", "");
    await this.ajoutePieceArmure(monActor35, "Mail Shirt", 4, "Very thick leather");
    await this.ajouteCapaciteSpeciale(monActor35, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor35, "Animosity (culture)", "Animosity (Northern Rangers)", "");
    await this.ajouteCapaciteSpeciale(monActor35, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor35, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor35, "Ruthless Blow", "", "");
    let monActor36 = await this.ajouteUnAdversaire(dossierTrolls, "Ettin", "modules/tor1e-compendium/icons/adv-troll.webp", 6, 76, "", 7, 3, true, 1, false, 0, false, 3, false, 1, true, 0, false, 0, false, false);
    await this.ajouteArme(monActor36, "Crushing Blow", "", 3, true, 6, 12, 12, "", "");
    await this.ajouteArme(monActor36, "Rend", "", 2, false, 6, 12, 16, "", "");
    await this.ajoutePieceArmure(monActor36, "Mail Shirt", 3, "Thick leather");
    await this.ajouteCapaciteSpeciale(monActor36, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor36, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor36, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor36, "Two-headed", "Bicephalous or 4 arms", "Bicephalous: if a hero attempts an ambush, roll 2 Fate Dice for their Battle, Hunting, or Stealth check and keep the lowest result. Additionally, all Stealth checks by a hero have SR +2. 4 arms: Two targets using Embrace, or one target + 1 main attack.");
    let monActor37 = await this.ajouteUnAdversaire(dossierTrolls, "Rine, Queen of Rivenfort", "modules/tor1e-compendium/icons/adv-troll.webp", 7, 80, "", 6, 3, false, 3, true, 2, false, 2, false, 2, true, 2, true, 3, false, true);
    await this.ajouteArme(monActor37, "Club", "", 4, false, 6, 10, 14, "", "");
    await this.ajouteArme(monActor37, "Crushing Blow", "", 2, true, 7, 12, 12, "Knockdown", "");
    await this.ajoutePieceArmure(monActor37, "Mail Shirt", 3, "Thick leather");
    await this.ajouteCapaciteSpeciale(monActor37, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor37, "Animosity (culture)", "Animosity (Dwarves)", "");
    await this.ajouteCapaciteSpeciale(monActor37, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor37, "Weak Spot", "", "When the creature scores a called shot or spends a point of Hate, it exposes its weak spot for the companions' next attack. If it is then hit by a piercing blow, its Protection test is made with its reduced Armour value (the value marked with * in its profile).");
    let monActor38 = await this.ajouteUnAdversaire(dossierTrolls, "Captain Mormog", "modules/tor1e-compendium/icons/adv-troll.webp", 9, 95, "", 10, 3, false, 4, true, 3, false, 3, true, 3, false, 2, false, 3, false, true);
    await this.ajouteArme(monActor38, "Sword dentelée", "", 3, true, 8, 12, 16, "Piercing", "");
    await this.ajouteArme(monActor38, "Claws", "", 3, true, 6, 12, 12, "Disarm", "");
    await this.ajoutePieceArmure(monActor38, "Mail Shirt", 3, "Thick leather");
    await this.ajouteCapaciteSpeciale(monActor38, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor38, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor38, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor38, "Terrible", "", "");
    await this.ajouteCapaciteSpeciale(monActor38, "Serpent's Speed", "", "");
    let monActor39 = await this.ajouteUnAdversaire(dossierLoups, "Warg", "modules/tor1e-compendium/icons/adv-loup.webp", 3, 12, "", 1, 5, false, 1, false, 3, false, 2, true, 3, true, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor39, "Long-sleeved Cuirass", 2, "Thick leather");
    await this.ajouteArme(monActor39, "Bite", "", 2, true, 3, 10, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor39, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor39, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor39, "Great Leap", "", "");
    let monActor40 = await this.ajouteUnAdversaire(dossierLoups, "Pack Leader", "modules/tor1e-compendium/icons/adv-loup.webp", 5, 16, "", 3, 6, false, 2, false, 3, false, 2, false, 3, false, 1, false, 1, true, false);
    await this.ajoutePieceArmure(monActor40, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor40, "Bite", "", 3, false, 5, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor40, "Rend", "", 1, true, 5, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor40, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor40, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor40, "Brutal Assault", "", "");
    let monActor41 = await this.ajouteUnAdversaire(dossierLoups, "Sauron's Molossus", "modules/tor1e-compendium/icons/adv-loup.webp", 6, 20, "", 5, 6, false, 3, false, 3, true, 3, true, 2, true, 1, false, 3, false, false);
    await this.ajoutePieceArmure(monActor41, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor41, "Bite", "", 3, true, 6, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor41, "Rend", "", 1, true, 6, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor41, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor41, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor41, "Brutal Assault", "", "");
    let monActor42 = await this.ajouteUnAdversaire(dossierLoups, "Werewolf of Mirkwood", "modules/tor1e-compendium/icons/adv-loup.webp", 8, 68, "", 12, 9, false, 2, true, 3, true, 3, false, 3, true, 1, false, 3, false, true);
    await this.ajoutePieceArmure(monActor42, "Mail Shirt", 4, "Very thick leather");
    await this.ajouteArme(monActor42, "Bite", "", 4, true, 8, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor42, "Rend", "", 1, true, 8, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor42, "Abomination", "Abomination (SR16)", "");
    await this.ajouteCapaciteSpeciale(monActor42, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor42, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor42, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor42, "Great Leap", "", "");
    let monActor43 = await this.ajouteUnAdversaire(dossierLoups, "Nagrhaw, Warg Pack Leader", "modules/tor1e-compendium/icons/adv-loup.webp", 6, 22, "", 6, 6, true, 3, true, 2, false, 3, false, 3, true, 2, false, 4, false, true);
    await this.ajoutePieceArmure(monActor43, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor43, "Bite", "", 3, true, 6, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor43, "Rend", "", 2, false, 6, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor43, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor43, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor43, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor43, "Imperious Voice", "", "");
    let monActor44 = await this.ajouteUnAdversaire(dossierLoups, "Dreorg the Wargling", "modules/tor1e-compendium/icons/adv-loup.webp", 5, 20, "Spirit of a Hillman who has taken refuge in the body of a Warg. Dreorg is accompanied by at least 3 pack leaders, and the members of his pack do not have Fear of fire.", 8, 7, false, 3, false, 3, false, 2, false, 3, true, 1, false, 3, true, true);
    await this.ajoutePieceArmure(monActor44, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor44, "Bite", "", 3, false, 5, 10, 18, "Piercing", "");
    await this.ajouteArme(monActor44, "Rend", "", 2, true, 5, 12, 14, "", "");
    await this.ajouteCapaciteSpeciale(monActor44, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor44, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor44, "Great Leap", "", "");
    await this.ajouteCapaciteSpeciale(monActor44, "Fear", "", "");
    let monActor45 = await this.ajouteUnAdversaire(dossierLoups, "Warg of Rubicorne Pass", "modules/tor1e-compendium/icons/adv-loup.webp", 6, 20, "", 5, 6, false, 3, false, 3, true, 3, true, 2, true, 1, false, 3, false, false);
    await this.ajoutePieceArmure(monActor45, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor45, "Bite", "", 3, true, 6, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor45, "Rend", "", 1, true, 6, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor45, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor45, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor45, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor45, "Darkness Deweller", "", "");
    let monActor46 = await this.ajouteUnAdversaire(dossierLoups, "Wild Wolf-dog", "modules/tor1e-compendium/icons/adv-loup.webp", 2, 10, "", 2, 5, false, 2, false, 2, false, 3, false, 1, false, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor46, "Long-sleeved Cuirass", 2, "Thick leather");
    await this.ajouteArme(monActor46, "Bite", "", 2, false, 4, 10, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor46, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor46, "Great Leap", "", "");
    let monActor47 = await this.ajouteUnAdversaire(dossierVampires, "Great Bat", "modules/tor1e-compendium/icons/adv-vampire.webp", 3, 10, "", 2, 5, false, 1, false, 3, false, 3, false, 3, false, 0, false, 0, true, false);
    await this.ajoutePieceArmure(monActor47, "Long-sleeved Cuirass", 2, "Thick leather");
    await this.ajouteArme(monActor47, "Bite", "", 3, false, 3, 12, 16, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor47, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor47, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor47, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor47, "Dive Attack", "", "");
    await this.ajouteCapaciteSpeciale(monActor47, "Disconcerting", "", "");
    let monActor48 = await this.ajouteUnAdversaire(dossierVampires, "Secret Shadow", "modules/tor1e-compendium/icons/adv-vampire.webp", 5, 35, "", 6, 7, false, 2, false, 3, true, 3, true, 3, false, 2, false, 2, true, false);
    await this.ajoutePieceArmure(monActor48, "Mail Shirt", 3, "Very thick leather");
    await this.ajouteArme(monActor48, "Bite", "", 3, true, 5, 12, 16, "Piercing", "");
    await this.ajouteArme(monActor48, "Sweep", "", 2, false, 5, 12, 14, "", "");
    await this.ajouteCapaciteSpeciale(monActor48, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor48, "Serpent's Speed", "", "");
    await this.ajouteCapaciteSpeciale(monActor48, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor48, "Dive Attack", "", "");
    await this.ajouteCapaciteSpeciale(monActor48, "Disconcerting", "", "");
    await this.ajouteCapaciteSpeciale(monActor48, "Brutal Assault", "", "");
    let monActor49 = await this.ajouteUnAdversaire(dossierCreaturesDesMarais, "Hobgoblin", "modules/tor1e-compendium/icons/adv-divers.webp", 4, 36, "", 5, 4, true, 1, false, 2, false, 3, true, 2, true, 1, false, 1, false, false);
    await this.ajoutePieceArmure(monActor49, "Long-sleeved Cuirass", 2, "Thick leather");
    await this.ajoutePieceArmure(monActor49, "Grand Shield", 3, "Very thick leather");
    await this.ajouteArme(monActor49, "Orc Axe", "", 3, true, 4, 12, 14, "Shield Breaker", "");
    await this.ajouteArme(monActor49, "Bite", "", 3, false, 5, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor49, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor49, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor49, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor49, "No Quarter", "", "");
    let monActor50 = await this.ajouteUnAdversaire(dossierCreaturesDesMarais, "Macrale", "modules/tor1e-compendium/icons/adv-divers.webp", 5, 16, "", 4, 4, false, 2, false, 3, false, 2, true, 2, true, 2, false, 1, false, false);
    await this.ajoutePieceArmure(monActor50, "Long-sleeved Cuirass", 2, "Thick leather");
    await this.ajouteArme(monActor50, "Claws", "", 3, true, 6, 12, 15, "", "");
    await this.ajouteCapaciteSpeciale(monActor50, "Embrace", "", "");
    await this.ajouteCapaciteSpeciale(monActor50, "Serpent's Speed", "", "");
    let monActor51 = await this.ajouteUnAdversaire(dossierCreaturesDesMarais, "Marsh Ogre", "modules/tor1e-compendium/icons/adv-troll.webp", 6, 80, "", 6, 5, true, 1, false, 2, false, 2, true, 1, true, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor51, "Long-sleeved Cuirass", 2, "Thick leather");
    await this.ajouteArme(monActor51, "Horion", "", 3, false, 6, 12, 12, "Knockdown", "");
    await this.ajouteCapaciteSpeciale(monActor51, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor51, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor51, "Relentlessness", "", "");
    let monActor52 = await this.ajouteUnAdversaire(dossierCreaturesDesMarais, "Marsh Dweller", "modules/tor1e-compendium/icons/adv-divers.webp", 4, 10, "", 2, 4, false, 2, false, 1, false, 1, false, 2, false, 1, true, 0, false, false);
    await this.ajoutePieceArmure(monActor52, "Mail Shirt", 3, "Very thick leather");
    await this.ajouteArme(monActor52, "Bite", "", 2, false, 4, 12, 12, "", "");
    await this.ajouteArme(monActor52, "Claws", "", 1, true, 5, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor52, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor52, "Fetid stench", "", "");
    let monActor53 = await this.ajouteUnAdversaire(dossierEsprits, "Warg Spirit", "modules/tor1e-compendium/icons/adv-esprit.webp", 3, 12, "Trait: Flees into the darkness and disappears when Hate reaches zero.", 3, 5, false, 1, false, 3, false, 2, true, 2, false, 0, false, 0, false, false);
    await this.ajouteArme(monActor53, "Bite", "", 2, true, 3, 10, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor53, "Great Leap", "", "");
    await this.ajouteCapaciteSpeciale(monActor53, "Fear of fire", "", "");
    await this.ajoutePieceArmure(monActor53, "Long-sleeved Cuirass", 2, "Spirit form");
    let monActor54 = await this.ajouteUnAdversaire(dossierEsprits, "Forest Specter", "modules/tor1e-compendium/icons/adv-esprit.webp", 5, 54, "", 8, 7, false, 1, false, 3, false, 2, false, 1, false, 2, false, 3, false, false);
    await this.ajouteArme(monActor54, "Claws étrangleuses", "", 3, false, 5, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor54, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor54, "Cowardice", "", "");
    await this.ajouteCapaciteSpeciale(monActor54, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor54, "Fear", "Fear (SR 16)", "");
    await this.ajouteCapaciteSpeciale(monActor54, "Forest Horror", "", "");
    await this.ajoutePieceArmure(monActor54, "Mail Shirt", 4, "Spirit form");
    let monActor55 = await this.ajouteUnAdversaire(dossierEsprits, "The Gibbet King", "modules/tor1e-compendium/icons/adv-esprit.webp", 8, 55, "The Gibbet King does not attack his enemies physically, but each round he targets a companion either with Terrible Spells or with Disconcerting, exposing them to attacks from his slaves.", 8, 5, true, 4, true, 1, false, 4, true, 1, false, 3, false, 2, false, true);
    await this.ajouteCapaciteSpeciale(monActor55, "Terrible Spells", "", "Enchantment: Failed Corruption test SR 14 = +1 Shadow point, hero is frozen in place, unable to defend or attack for a number of rounds equal to current Shadow value, unless 1 Hope point is spent per action.");
    await this.ajouteCapaciteSpeciale(monActor55, "Disconcerting", "", "");
    await this.ajouteCapaciteSpeciale(monActor55, "Fear", "Suffering of Others", "The Gibbet King gains 1 Hate point each time a companion is wounded or has 0 Endurance.");
    await this.ajouteCapaciteSpeciale(monActor55, "Abomination", "", "");
    await this.ajoutePieceArmure(monActor55, "Mail Shirt", 3, "Spirit form");
    let monActor56 = await this.ajouteUnAdversaire(dossierEsprits, "Raegenhere", "modules/tor1e-compendium/icons/adv-esprit.webp", 8, 70, "", 10, 7, false, 3, false, 3, true, 3, false, 2, false, 4, true, 3, true, true);
    await this.ajouteArme(monActor56, "Grande hache", "", 3, true, 9, 12, 20, "Shield Breaker", "");
    await this.ajouteArme(monActor56, "Claws étrangleuses", "", 3, false, 5, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor56, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor56, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor56, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor56, "Fear of fire", "", "");
    await this.ajoutePieceArmure(monActor56, "Mail Shirt", 3, "Spirit form");
    let monActor57 = await this.ajouteUnAdversaire(dossierEsprits, "Forest Ghost", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 50, "", 10, 6, false, 3, true, 3, false, 2, true, 3, false, 2, true, 2, false, true);
    await this.ajoutePieceArmure(monActor57, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteArme(monActor57, "Long Sword (1-Hd)", "", 3, false, 7, 9, 16, "Disarm", "");
    await this.ajouteArme(monActor57, "Claws", "", 2, true, 4, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Dive Attack", "Dive Attack (forme éthérée)", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Black Breath", "", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Doomful Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Terrible Spells", "", "Shadow of Terror: The target makes a Presence test SR10 + attrLevel. Failure: becomes a servant of the Shadow for attrLevel weeks, obeying the specter.");
    await this.ajouteCapaciteSpeciale(monActor57, "Fear of fire", "Fear of fire (physical form)", "");
    await this.ajouteCapaciteSpeciale(monActor57, "Dwimmerlaik", "Dwimmerlaik (physical form)", "");
    let monActor58 = await this.ajouteUnAdversaire(dossierEsprits, "Messenger of Mordor", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 50, "", 10, 6, false, 2, false, 3, true, 2, false, 3, true, 2, true, 2, false, true);
    await this.ajoutePieceArmure(monActor58, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteArme(monActor58, "Long Sword (1-Hd)", "", 2, true, 7, 9, 16, "Disarm", "");
    await this.ajouteArme(monActor58, "Claws", "", 3, false, 4, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Disconcerting", "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Black Breath", "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Doomful Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Terrible Spells", "", "Shadow of Terror: The target makes a Presence test SR10 + attrLevel. Failure: becomes a servant of the Shadow for attrLevel weeks, obeying the specter.");
    await this.ajouteCapaciteSpeciale(monActor58, "Fear of fire", "Fear of fire (physical form)", "");
    await this.ajouteCapaciteSpeciale(monActor58, "Dwimmerlaik", "Dwimmerlaik (physical form)", "");
    let monActor59 = await this.ajouteUnAdversaire(dossierEsprits, "Lieutenant of Dol Guldur", "modules/tor1e-compendium/icons/adv-esprit.webp", 5, 60, "", 12, 7, true, 4, true, 3, false, 4, true, 2, false, 2, false, 4, true, true);
    await this.ajoutePieceArmure(monActor59, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteArme(monActor59, "Long Sword (1-Hd)", "", 3, true, 7, 9, 16, "Disarm", "");
    await this.ajouteArme(monActor59, "Claws", "", 3, false, 5, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Black Breath", "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Doomful Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Terrible Spells", "", "Shadow of Terror: The target makes a Presence test SR10 + attrLevel. Failure: becomes a servant of the Shadow for attrLevel weeks, obeying the specter.");
    await this.ajouteCapaciteSpeciale(monActor59, "Fear of fire", "Fear of fire (physical form)", "");
    await this.ajouteCapaciteSpeciale(monActor59, "Dwimmerlaik", "Dwimmerlaik (physical form)", "");
    let monActor60 = await this.ajouteUnAdversaire(dossierEsprits, "Night Spirit", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 54, "Shadow creature haunting the corpse of a fallen warrior. It attacks with a barbed Spear and resorts to its Claws if disarmed.", 8, 7, false, 1, false, 3, true, 2, false, 1, false, 2, true, 3, false, false);
    await this.ajoutePieceArmure(monActor60, "Long-sleeved Cuirass", 4, "Spirit form");
    await this.ajouteArme(monActor60, "Spear", "", 3, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor60, "Claws", "", 2, false, 4, 12, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor60, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor60, "Dive Attack", "", "");
    await this.ajouteCapaciteSpeciale(monActor60, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor60, "Cowardice", "", "");
    let monActor61 = await this.ajouteUnAdversaire(dossierEsprits, "Undead Warrior", "modules/tor1e-compendium/icons/adv-esprit.webp", 3, 15, "", 4, 3, false, 0, false, 2, true, 1, false, 1, true, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor61, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteArme(monActor61, "Claws", "", 2, true, 3, 9, 12, "", "");
    await this.ajouteArme(monActor61, "Sword", "", 1, false, 5, 10, 16, "", "");
    await this.ajouteCapaciteSpeciale(monActor61, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor61, "Spectral Vitality", "", "");
    let monActor62 = await this.ajouteUnAdversaire(dossierEsprits, "Hobbit Archer Specter", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 30, "", 3, 5, false, 3, true, 4, true, 3, false, 1, false, 3, false, 2, false, false);
    await this.ajoutePieceArmure(monActor62, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteCapaciteSpeciale(monActor62, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor62, "Phantasmal", "", "");
    let monActor63 = await this.ajouteUnAdversaire(dossierEsprits, "Steward of Carn Dûm", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 70, "", 6, 5, false, 2, false, 4, false, 3, true, 0, false, 1, false, 3, false, true);
    await this.ajoutePieceArmure(monActor63, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajoutePieceArmure(monActor63, "Shield", 2, "");
    await this.ajouteArme(monActor63, "Sword", "Rusty Blade", 2, true, 4, 10, 12, "Disarm", "");
    await this.ajouteArme(monActor63, "Spear", "Ruthless Spear", 2, false, 4, 9, 12, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor63, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor63, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor63, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor63, "Spectral Vitality", "", "");
    await this.ajouteCapaciteSpeciale(monActor63, "Spectral", "", "");
    let monActor64 = await this.ajouteUnAdversaire(dossierEsprits, "The Spirit King", "modules/tor1e-compendium/icons/adv-esprit.webp", 6, 74, "", 12, 7, true, 5, true, 4, false, 3, false, 2, false, 4, false, 3, true, true);
    await this.ajoutePieceArmure(monActor64, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajoutePieceArmure(monActor64, "Shield", 1, "");
    await this.ajouteArme(monActor64, "Sword", "Sword ancestrale", 3, true, 6, 10, 14, "Disarm", "");
    await this.ajouteArme(monActor64, "Claws", "Icy Touch", 3, false, 6, 12, 18, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor64, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor64, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor64, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor64, "Darker than Darkness", "", "");
    await this.ajouteCapaciteSpeciale(monActor64, "Terrible Spells", "", "Lament of the Spirit King: The hero hears a tune with abominable intonations. Corruption test SR20, failure: isolated from companions and deep sleep (unconscious). Hero is dragged to the tomb to be sacrificed.");
    let monActor65 = await this.ajouteUnAdversaire(dossierEsprits, "Barrow-wight", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 54, "", 6, 4, true, 2, true, 3, false, 2, true, 1, false, 1, false, 2, false, false);
    await this.ajoutePieceArmure(monActor65, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteArme(monActor65, "Sword", "Sword ancestrale", 3, false, 6, 10, 14, "Disarm", "La lame rouillée et acérée procure une sensation glaciale.");
    await this.ajouteArme(monActor65, "Claws", "Icy Touch", 1, true, 4, 12, 18, "Piercing", "The bony hands close around the victim's flesh, leaving them paralyzed.");
    await this.ajouteCapaciteSpeciale(monActor65, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor65, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor65, "Terrible Spells", "", "Barrow-wight's Lament: The creature hums a tune that chills the blood. The hero makes a Corruption test SR 16: failure = isolated from companions and falls into a deep sleep (considered unconscious). The hero is dragged to the tomb to be sacrificed. If found in time: Healing is required to awaken.");
    await this.ajouteCapaciteSpeciale(monActor65, "Fear", "", "");
    let monActor66 = await this.ajouteUnAdversaire(dossierEsprits, "Muddy Soldier", "modules/tor1e-compendium/icons/adv-esprit.webp", 3, 12, "", 3, 3, false, 0, false, 2, false, 1, false, 1, false, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor66, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteArme(monActor66, "Claws", "", 2, false, 3, 9, 12, "", "");
    await this.ajouteArme(monActor66, "Short Sword", "", 2, true, 5, 10, 14, "Disarm", "");
    await this.ajouteCapaciteSpeciale(monActor66, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor66, "Embrace", "", "If the creature's main attack hits, the victim cannot change combat stance and their parry value is halved (rounded up). The embracing creature can no longer use its main attack while holding its target, but may use its secondary attack if it has one.<br><br>If the embrace succeeds, the soldier drags the victim into the mud. Each round: instead of fighting, the soldier may make a Movement test SR (10 + victim's Body). Success: the victim is submerged and severely hindered (defense with SR-4, attack with SR+4).");
    await this.ajouteCapaciteSpeciale(monActor66, "Spectral Vitality", "", "");
    let monActor67 = await this.ajouteUnAdversaire(dossierEsprits, "Fallen Specter", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 35, "", 6, 5, false, 2, false, 4, false, 3, true, 0, false, 1, false, 3, false, false);
    await this.ajoutePieceArmure(monActor67, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajoutePieceArmure(monActor67, "Shield", 2, "");
    await this.ajouteArme(monActor67, "Sword", "Rusty Blade", 2, true, 4, 10, 12, "Disarm", "");
    await this.ajouteArme(monActor67, "Spear", "Ruthless Spear", 2, false, 4, 9, 12, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor67, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor67, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor67, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor67, "Spectral Vitality", "", "");
    await this.ajouteCapaciteSpeciale(monActor67, "Spectral", "", "");
    let monActor68 = await this.ajouteUnAdversaire(dossierEsprits, "Apparition", "modules/tor1e-compendium/icons/adv-esprit.webp", 4, 28, "Wandering souls, not necessarily violent, sow despair and sorrow by sharing their own. They manifest in the dead of night near the place they haunt.", 6, 5, false, 3, true, 4, true, 3, false, 1, false, 3, false, 2, false, false);
    await this.ajoutePieceArmure(monActor68, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteCapaciteSpeciale(monActor68, "Phantasmal", "", "");
    await this.ajouteCapaciteSpeciale(monActor68, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor68, "Terrible Spells", "", "Overwhelm: A hero who fails their Corruption test SR 16 experiences unbearable sorrow: +4* Shadow points. On an Eye of Sauron, an old wound reopens and the hero becomes Wounded.");
    await this.ajouteCapaciteSpeciale(monActor68, "Visions of Tourment", "", "");
    let monActor69 = await this.ajouteUnAdversaire(dossierEsprits, "The Witch-king (intangible form)", "modules/tor1e-compendium/icons/adv-esprit.webp", 8, 90, "", 22, 0, false, 5, true, 3, true, 3, false, 3, true, 2, false, 5, true, true);
    await this.ajouteCapaciteSpeciale(monActor69, "Terrible Spells", "", "Interdiction: The target is struck with stupor and loses their next action. On an Eye of Sauron, their weapon breaks (or is dropped if it is a magical weapon). Shadow of Terror: Cast on a Man, Hobbit, or Dwarf to enslave them for 2 months. The hero then strives to carry out instructions, out of fear and often reluctantly, which generates anxiety. Friend: Presence test SR 18.");
    await this.ajouteCapaciteSpeciale(monActor69, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor69, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor69, "Black Breath", "", "");
    await this.ajouteCapaciteSpeciale(monActor69, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor69, "Doomful Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor69, "Word of Power and Terror", "", "");
    await this.ajouteCapaciteSpeciale(monActor69, "Black Fear", "", "");
    let monActor70 = await this.ajouteUnAdversaire(dossierEsprits, "The Witch-king (physical form)", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 8, 90, "In combat, if Endurance=0, not defeated, Hate is halved, gains Cowardice ability. Can only be wounded by weapons Fatal to Mordor. Disappears if Wounded and Endurance = 0.", 22, 12, false, 5, true, 3, true, 3, false, 3, true, 2, false, 5, true, true);
    await this.ajoutePieceArmure(monActor70, "Long-sleeved Cuirass", 3, "Spirit form");
    await this.ajouteArme(monActor70, "Long Sword (1-Hd)", "", 4, true, 7, 9, 16, "Disarm", "");
    await this.ajouteArme(monActor70, "Long Sword (2-Hd)", "", 4, true, 9, 9, 18, "Disarm", "");
    await this.ajouteArme(monActor70, "Claws", "", 3, false, 8, 12, 16, "Piercing", "The bony hands close around the victim's flesh, leaving them paralyzed.");
    await this.ajouteArme(monActor70, "Morgul Dagger", "", 3, true, 4, 12, 20, "Piercing", "Wounded by a Morgul Dagger: see page 84 of the Rivendell supplement");
    await this.ajouteCapaciteSpeciale(monActor70, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor70, "Souverain", "", "");
    await this.ajouteCapaciteSpeciale(monActor70, "Dwimmerlaik", "", "");
    await this.ajouteCapaciteSpeciale(monActor70, "Fear of fire", "", "");
    await this.ajouteCapaciteSpeciale(monActor70, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor70, "Brutal Assault", "", "");
    let monActor71 = await this.ajouteUnAdversaire(dossierEsprits, "Húldrahir, Dúnadan Specter", "modules/tor1e-compendium/icons/adv-esprit.webp", 6, 35, "", 9, 7, false, 3, true, 4, true, 3, false, 1, false, 3, false, 2, false, true);
    await this.ajoutePieceArmure(monActor71, "Long-sleeved Cuirass", 2, "Spirit form");
    await this.ajouteCapaciteSpeciale(monActor71, "Phantasmal", "", "");
    await this.ajouteCapaciteSpeciale(monActor71, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor71, "Terrible Spells", "", "Madness: A hero who fails their Corruption test SR 16 suffers terrifying visions: +6 Shadow points. On an Eye of Sauron, the player loses control of their character for a full combat round, as if affected by a bout of madness (Core Rulebook p.233).");
    await this.ajouteCapaciteSpeciale(monActor71, "Visions de Tourment", "", "");
    let monActor72 = await this.ajouteUnAdversaire(dossierDragonsBasilics, "Basilisk", "modules/tor1e-compendium/icons/adv-dragon.webp", 6, 40, "", 3, 4, false, 1, false, 2, false, 2, true, 3, false, 1, false, 1, false, false);
    await this.ajoutePieceArmure(monActor72, "Mail Shirt", 4, "Ecailles");
    await this.ajouteArme(monActor72, "Bite", "", 2, false, 4, 12, 14, "Piercing, Poison", "Basilisk Poison: Paralyzed, the victim falls to the ground after min(Body, Heart) rounds. They suffer the effects of the Poisoned condition. After one day, test VailSpear SR 14. Success: the effect disappears, failure: permanent paralysis and death within a few months.");
    await this.ajouteCapaciteSpeciale(monActor72, "Tough Hide", "", "");
    await this.ajouteCapaciteSpeciale(monActor72, "Animosity (culture)", "Animosity (Eleves)", "");
    await this.ajouteCapaciteSpeciale(monActor72, "Abominable Resilience", "", "");
    await this.ajouteCapaciteSpeciale(monActor72, "PPoison Breath", "", "");
    let monActor73 = await this.ajouteUnAdversaire(dossierDragonsBasilics, "Raenar", "modules/tor1e-compendium/icons/adv-dragon.webp", 10, 120, "", 12, 12, true, 6, true, 5, true, 6, false, 3, false, 5, true, 4, true, true);
    await this.ajoutePieceArmure(monActor73, "Mail Shirt", 6, "Dragon Scales");
    await this.ajouteArme(monActor73, "Bite", "", 5, true, 10, 8, 18, "Piercing", "");
    await this.ajouteArme(monActor73, "Rend", "", 3, false, 7, 9, 20, "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Poison Breath", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Tough Hide", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Fetid stench", "", "");
    await this.ajouteCapaciteSpeciale(monActor73, "Terrible Spells", "", "Dragon spell: Corruption test SR 16. Failure = +1 Shadow Point + In combat, the victim can no longer attack. In encounters, the victim is compelled to answer questions truthfully. Duration: (10 - Wisdom) rounds.");
    await this.ajouteCapaciteSpeciale(monActor73, "Weak Spot", "", "If Raenar scores a Called Shot or spends 1 Hate Point, he exposes his weak spot for the next attack. If hit with a Piercing Blow, Protection test with only 1 die; failure: breaks off combat and flees.");
    let monActor74 = await this.ajouteUnAdversaire(dossierDragonsBasilics, "The Forest Dragon", "modules/tor1e-compendium/icons/adv-dragon.webp", 8, 99, "", 10, 6, true, 3, true, 4, true, 5, true, 4, true, 2, false, 3, false, true);
    await this.ajouteArme(monActor74, "Bite", "", 3, true, 9, 9, 20, "Piercing", "");
    await this.ajouteArme(monActor74, "Rend", "Constriction", 3, false, 14, 12, 16, "", "The creature wraps its tail around its enemy to crush them between its coils");
    await this.ajoutePieceArmure(monActor74, "Mail Shirt", 4, "Dragon Scales");
    await this.ajouteCapaciteSpeciale(monActor74, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor74, "Tough Hide", "", "");
    await this.ajouteCapaciteSpeciale(monActor74, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor74, "Abomination", "", "");
    await this.ajouteCapaciteSpeciale(monActor74, "Forest Dweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor74, "Terrible Spells", "", "Dragon spell: Corruption test SR 14. Failure = +1 Shadow Point + Permanent paralysis (failure) or 4 rounds (success) or 1 round (great success). Break the spell: death of the Dragon or healing by a Wizard.");
    await this.ajouteCapaciteSpeciale(monActor74, "Weak Spot", "", "");
    let monActor75 = await this.ajouteUnAdversaire(dossierDivers, "Dire Hawk", "modules/tor1e-compendium/icons/adv-divers.webp", 2, 10, "", 4, 5, false, 1, false, 2, false, 2, true, 2, false, 0, false, 0, false, false);
    await this.ajoutePieceArmure(monActor75, "Long-sleeved Cuirass", 2, "Plumes épaisses");
    await this.ajouteArme(monActor75, "Bite", "Beak", 2, true, 4, 10, 16, "Piercing", "");
    await this.ajouteArme(monActor75, "Claws", "Talons", 1, false, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor75, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor75, "Serpent's Speed", "", "");
    let monActor76 = await this.ajouteUnAdversaire(dossierDivers, "The Well Thing", "modules/tor1e-compendium/icons/adv-divers.webp", 4, 45, "", 6, 4, true, 0, false, 2, true, 3, false, 0, false, 0, false, 2, false, true);
    await this.ajoutePieceArmure(monActor76, "Long-sleeved Cuirass", 3, "Ecorce");
    await this.ajouteArme(monActor76, "Bite", "Lashing Tendrils", 3, true, 5, 12, 14, "", "If the attack succeeds: Uses Embrace to immobilize the target before attacking with Strangulation.");
    await this.ajouteArme(monActor76, "Crushing Blow", "Etranglement", 3, false, 6, 10, 14, "", "");
    await this.ajouteCapaciteSpeciale(monActor76, "Tentacles", "", "");
    await this.ajouteCapaciteSpeciale(monActor76, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor76, "Embrace", "", "");
    let monActor77 = await this.ajouteUnAdversaire(dossierDivers, "The Long Vale Watcher", "modules/tor1e-compendium/icons/adv-divers.webp", 9, 90, "", 9, 9, false, 2, false, 3, true, 2, false, 3, true, 0, false, 0, false, true);
    await this.ajoutePieceArmure(monActor77, "Mail Shirt", 5, "Shell");
    await this.ajouteArme(monActor77, "Crushing Blow", "Crushing Claw", 3, true, 9, 8, 18, "Shield Breaker", "");
    await this.ajouteArme(monActor77, "Claws", "Paw Strike", 2, false, 7, 10, 16, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor77, "Elusive", "", "");
    await this.ajouteCapaciteSpeciale(monActor77, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor77, "Weak Spot", "", "");
    await this.ajouteCapaciteSpeciale(monActor77, "Terrible Strength", "", "");
    await this.ajouteCapaciteSpeciale(monActor77, "Brutal Assault", "", "");
    let monActor78 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Hillman of Gundabad", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 4, 16, "", 3, 5, false, 1, false, 3, true, 2, false, 3, false, 2, false, 2, true, false);
    await this.ajoutePieceArmure(monActor78, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor78, "Spear", "", 2, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor78, "Short Sword", "", 2, false, 5, 10, 14, "Disarm", "");
    await this.ajouteCapaciteSpeciale(monActor78, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor78, "Fear of fire", "", "");
    let monActor79 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Wild Man of Mirkwood", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 3, 15, "", 3, 3, false, 2, false, 2, true, 2, false, 2, true, 1, false, 0, false, false);
    await this.ajoutePieceArmure(monActor79, "Mail Shirt", 3, "");
    await this.ajouteArme(monActor79, "Spear", "", 2, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor79, "Bow", "", 2, false, 5, 10, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor79, "Animosity (culture)", "Animosity (Eleves)", "");
    await this.ajouteCapaciteSpeciale(monActor79, "Submission (target)", "Submission (spiders)", "");
    await this.ajouteCapaciteSpeciale(monActor79, "Forest Dweller", "", "");
    let monActor80 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Valdis (Great Vampire)", "modules/tor1e-compendium/icons/adv-vampire.webp", 7, 70, "", 12, 9, false, 3, false, 5, true, 4, true, 3, false, 2, false, 1, false, true);
    await this.ajoutePieceArmure(monActor80, "Mail Shirt", 3, "Thick leather");
    await this.ajouteArme(monActor80, "Sweep", "", 4, true, 7, 12, 16, "Piercing", "");
    await this.ajouteArme(monActor80, "Bite", "", 4, false, 7, 12, 14, "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Serpent's Speed", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Darkness Deweller", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Dive Attack", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Disconcerting", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Brutal Assault", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Large Size", "", "");
    await this.ajouteCapaciteSpeciale(monActor80, "Enchantment", "", "");
    let monActor81 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Valter the Bloodthirsty", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 5, 19, "Son of Valind (knight and close to Girion, Lord of Dale before the coming of Smaug), Valter inherited his father's sword and armor, which gave him the desire to found his own kingdom and rule over lesser men. A born leader, charming and eloquent, Valter met and took command of a band of brigands. For him, honor and truth are illusions and only strength and desire matter. Finally, Valter has a knack for uncovering secrets and finding others' character flaws. Secret grudges, persistent envy, feelings of frustration... Valter will notice and promises to do everything to fix it... as long as you obey him.", 4, 5, false, 4, true, 3, true, 2, false, 2, false, 3, false, 2, false, true);
    await this.ajoutePieceArmure(monActor81, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor81, "Grand Shield", 3, "");
    await this.ajoutePieceArmure(monActor81, "Helmet", 4, "");
    await this.ajouteArme(monActor81, "Sword", "", 3, false, 5, 10, 16, "Disarm", "");
    await this.ajouteCapaciteSpeciale(monActor81, "Imperious Voice", "", "");
    let monActor82 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Outlaw Archer", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 3, 14, "", 1, 3, false, 2, false, 3, false, 2, true, 2, false, 1, false, 1, false, false);
    await this.ajoutePieceArmure(monActor82, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor82, "Bow", "", 2, true, 5, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor82, "Dagger", "", 1, false, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor82, "Deadly Trait", "", "");
    let monActor83 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Outlaw Warrior", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 3, 14, "", 2, 4, false, 2, false, 2, true, 2, false, 2, true, 1, false, 2, false, false);
    await this.ajoutePieceArmure(monActor83, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor83, "Shield", 1, "");
    await this.ajouteArme(monActor83, "Spear", "", 2, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor83, "Axe", "", 2, false, 5, 12, 18, "Shield Breaker", "");
    await this.ajouteCapaciteSpeciale(monActor83, "No Quarter", "", "");
    let monActor84 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Eastern Warrior", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 3, 12, "", 2, 4, false, 2, false, 2, false, 1, false, 2, false, 2, true, 1, true, false);
    await this.ajoutePieceArmure(monActor84, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor84, "Pique", "", 3, false, 7, 10, 15, "Shield Breaker", "");
    await this.ajouteArme(monActor84, "Long-Handled Axe", "", 3, false, 7, 12, 18, "Shield Breaker", "");
    await this.ajouteCapaciteSpeciale(monActor84, "No Quarter", "", "");
    let monActor85 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Hillman of Rhudaur", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 4, 18, "Disparate band: If Goblins accompany the Hillmen, Cowardice is ineffective and the SR to set an ambush increases to 18.", 4, 5, false, 1, false, 3, true, 2, false, 3, false, 2, false, 2, true, false);
    await this.ajoutePieceArmure(monActor85, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor85, "Orc Axe", "", 3, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor85, "Spear", "", 2, true, 5, 9, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor85, "Animosity (culture)", "Animosity (Dunedain)", "");
    await this.ajouteCapaciteSpeciale(monActor85, "Terrible Spells", "", "Men's Curse: The targeted companion makes a Corruption Test SR16. On failure, they gain 1 Shadow point. Then, they lose 1 Hope point each time they roll an Eye of Sauron, until the next sunset or sunrise.");
    await this.ajouteCapaciteSpeciale(monActor85, "Raven Spirit", "", "");
    let monActor86 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Heddwyn, Angmar Sorcerer-Servant", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 6, 26, "Scarlet Madness: The target makes a Corruption test. Failure: The hero is Melancholic until the end of the encounter. On a bout of madness (rolling an Eye of Sauron), the hero succumbs to uncontrollable rage and turns against friends and allies for a number of rounds equal to their Wisdom value. The Loremaster takes control of the hero during this madness.", 6, 6, true, 3, true, 2, false, 2, false, 3, false, 3, false, 3, true, true);
    await this.ajoutePieceArmure(monActor86, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor86, "Spear", "", 3, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor86, "Short Sword", "", 2, false, 5, 10, 14, "Disarm", "");
    await this.ajouteCapaciteSpeciale(monActor86, "Fear", "", "");
    await this.ajouteCapaciteSpeciale(monActor86, "Unbridled Hate", "", "");
    await this.ajouteCapaciteSpeciale(monActor86, "Terrible Spells", "", "<p><strong>Frost and Thaw</strong>: The target makes a Corruption test. Failure: The hero suffers the effects of extreme cold and is exhausted for the rest of the encounter.</p><p><strong>Scarlet Madness</strong>: The target makes a Corruption test. Failure: The targeted hero is melancholic for the rest of the encounter. On an Eye of Sauron, they suffer a bout of madness, lose control, and attack their friends and allies.</p>");
    let monActor87 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Heddwyn, Warg-spirit", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 5, 20, "S'il est blessé ou que sa Haine ou Endurance tombe à 0 : il bat en retraite vers son corps endormi dans ses quartiers. Les dégâts subis ne sont pas transférés à sa forme humaine (idem pour ses gardes du corps)", 5, 6, false, 2, false, 3, false, 2, false, 2, false, 0, false, 0, false, true);
    await this.ajoutePieceArmure(monActor87, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor87, "Bite", "", 3, true, 4, 10, 16, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor87, "Great Leap", "", "");
    await this.ajouteCapaciteSpeciale(monActor87, "Fear of fire", "", "");
    let monActor88 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Scoundrel of Esgaroth", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 2, 12, "", 2, 4, false, 1, false, 2, false, 2, false, 2, false, 2, false, 1, false, false);
    await this.ajoutePieceArmure(monActor88, "Leather Shirt", 1, "");
    await this.ajouteArme(monActor88, "Short Sword", "", 2, true, 5, 10, 14, "Disarm", "");
    await this.ajouteCapaciteSpeciale(monActor88, "Cowardice", "", "");
    let monActor89 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Oderic", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 4, 18, "Originally from Stonyford and adopted by Helmgut after the horrific death of his parents, Oderic is a moody young Beorning who wishes to be loved but whose bad temper and gloom alienate all sympathy. An excellent warrior but not a leader of men, it is his brother Rathfic who eventually takes Helmgut's place, which Oderic saw as a betrayal. Later, Brunhild chose to marry his brother, though Oderic was in love with her. Wanting to leave, his drunken brother provoked him and anger led to a bad move: he accidentally killed his brother. Arrested and then freed from his jailers by Orcs, he joined a band of outlaws in the Wolf-wood.", 3, 5, false, 1, false, 2, true, 3, false, 2, false, 2, false, 1, false, true);
    await this.ajoutePieceArmure(monActor89, "Leather Shirt", 1, "");
    await this.ajouteArme(monActor89, "Sword", "", 4, true, 5, 10, 16, "Disarm", "");
    await this.ajouteArme(monActor89, "Axe", "", 2, false, 5, 12, 18, "Shield Breaker", "");
    await this.ajouteCapaciteSpeciale(monActor89, "Brutal Assault", "", "");
    let monActor90 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Warrior of Tyrant's Hill", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 3, 16, "", 3, 4, false, 2, false, 2, false, 2, false, 3, false, 1, false, 3, false, false);
    await this.ajoutePieceArmure(monActor90, "Long-sleeved Cuirass", 2, "");
    await this.ajoutePieceArmure(monActor90, "Shield", 1, "");
    await this.ajouteArme(monActor90, "Sword", "", 3, false, 5, 12, 16, "Disarm", "");
    await this.ajouteArme(monActor90, "Bite", "Molosse", 3, false, 4, 12, 14, "", "");
    await this.ajouteCapaciteSpeciale(monActor90, "Trainer", "", "");
    await this.ajouteCapaciteSpeciale(monActor90, "No Quarter", "", "");
    let monActor91 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Thark, Chief of the Hillmen", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 6, 24, "Thark and his followers offer their (paid) services to travelers as guides and scouts. If refused, Thark demands a toll. In any case, he leads travelers to a place where he will have an advantage.", 4, 5, false, 3, false, 3, true, 2, false, 3, false, 2, false, 2, true, true);
    await this.ajoutePieceArmure(monActor91, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor91, "Orc Axe", "", 3, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor91, "Spear", "", 2, true, 5, 9, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor91, "Animosity (culture)", "Animosity (Dunedain)", "");
    await this.ajouteCapaciteSpeciale(monActor91, "Terrible Spells", "", "Hill-men's Curse: The target makes a Corruption Test SR16. On failure, they gain 1 Shadow point. Then, they lose 1 Hope point each time they roll an Eye of Sauron, until the next sunset or sunrise.");
    await this.ajouteCapaciteSpeciale(monActor91, "Raven Spirit", "", "");
    await this.ajouteCapaciteSpeciale(monActor91, "Regional Knowledge (region)", "Regional Knowledge (Angmar)", "");
    await this.ajouteCapaciteSpeciale(monActor91, "Mountaineer", "", "");
    let monActor92 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Ruthless Bandits", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 4, 14, "", 3, 4, false, 1, false, 2, true, 2, false, 2, true, 1, false, 2, false, false);
    await this.ajoutePieceArmure(monActor92, "Leather Shirt", 1, "");
    await this.ajoutePieceArmure(monActor92, "Shield", 1, "");
    await this.ajouteArme(monActor92, "Sword", "", 2, true, 5, 10, 16, "Disarm", "");
    await this.ajouteArme(monActor92, "Bow", "", 1, false, 5, 10, 14, "Piercing", "");
    await this.ajouteCapaciteSpeciale(monActor92, "No Quarter", "", "");
    let monActor93 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Beorn (Bear Form)", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 9, 99, "", 12, 12, false, 5, true, 4, true, 3, false, 3, false, 0, false, 3, false);
    await this.ajoutePieceArmure(monActor93, "Mail Shirt", 4, "Thick leather");
    await this.ajouteArme(monActor93, "Laceration", "", 4, true, 9, 10, 16, "Shield Breaker", "");
    await this.ajouteCapaciteSpeciale(monActor93, "Abomination", "Gigantic", "If Beorn is Wounded once or his Endurance is reduced to 0: He continues to fight until another Wound or loss of Endurance (while already wounded)");
    await this.ajouteCapaciteSpeciale(monActor93, "Relentlessness", "Tenacious", "Reduce by 9 the Endurance loss caused by an enemy attack");
    await this.ajouteCapaciteSpeciale(monActor93, "Relentlessness", "Devastating Force", "After a successful attack, the Endurance points lost by the target are increased by 9 points.");
    await this.ajouteCapaciteSpeciale(monActor93, "Relentlessness", "Murderous Wrath", "Personality test SR 10 + highest attribute level among opponents. Success: The enemy loses Hate Points: 1 point + 1 point per 6 (distributed by the Loremaster).");
    let monActor94 = await this.ajouteUnAdversaire(dossierHommesMauvaisRhovanion, "Gerold the Beorning", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 7, 20, "", 4, 4, false, 2, false, 4, true, 3, false, 2, true, 2, false, 1, false);
    await this.ajoutePieceArmure(monActor94, "Mail Shirt", 3, "");
    await this.ajouteArme(monActor94, "Axe", "", 4, true, 5, 12, 18, "Shield Breaker", "");
    await this.ajouteCapaciteSpeciale(monActor94, "No Quarter", "Devastating Force", "After a successful attack, the Endurance points lost by the target are increased by 7 points.");
    let monActor95 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Dwarf Thief", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 4, 18, "<p>While Dwarves are generally hardworking, grumpy but honest, some are unfortunately cut from a different cloth: Finding that working for uncertain profit was a waste of time, some dwarves prefer to use more direct methods to make their fortune.</p>", 3, 4, false, 0, false, 2, true, 2, true, 1, false, 0, false, 3, false);
    await this.ajoutePieceArmure(monActor95, "Mail Shirt", 3, "");
    await this.ajouteArme(monActor95, "Mace", "", 2, true, 8, 10, 18, "Shield Breaker", "");
    let monActor96 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Lófar the Swindler", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 6, 22, "<p>Originally from the Blue Mountains, Lófar suffers from a terrible reputation there due to his penchant for cheating, which led to his banishment.</p><p>Trained as a miner, he turned to tomb raiding. He is clever enough to avoid the Barrow-downs and has settled in the ruins of Fornost.</p><p>Leading a small band of dwarves, they operate underground to avoid being spotted by the Rangers. Although they have found many treasures, Lófar and his companions are now afflicted by Dragon-sickness.</p>", 5, 6, false, 3, true, 2, true, 3, true, 1, false, 1, false, 3, false);
    await this.ajouteCapaciteSpeciale(monActor96, "Imperious Voice", "", "");
    await this.ajouteArme(monActor96, "Mace", "", 4, true, 8, 10, 18, "Shield Breaker", "");
    let monActor97 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Sergent Cyrnan", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 5, 22, "", 5, 5, true, 3, true, 3, true, 2, false, 3, false, 2, false, 2, false);
    await this.ajoutePieceArmure(monActor97, "Long-sleeved Cuirass", 2, "");
    await this.ajoutePieceArmure(monActor97, "Shield", 1, "");
    await this.ajouteArme(monActor97, "Sword", "", 3, true, 5, 10, 16, "Disarm", "");
    await this.ajouteCapaciteSpeciale(monActor97, "Imperious Voice", "", "");
    await this.ajouteCapaciteSpeciale(monActor97, "No Quarter", "", "");
    let monActor98 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Caradog, Hunter of Dunland", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 5, 15, "", 4, 4, false, 1, false, 2, true, 3, false, 3, false, 1, false, 3, false);
    await this.ajoutePieceArmure(monActor98, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor98, "Spear", "", 2, true, 5, 6, 14, "Piercing", "");
    await this.ajouteArme(monActor98, "Dagger", "", 2, false, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor98, "No Quarter", "", "");
    let monActor99 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Wathach the Seer", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 6, 14, "", 8, 4, false, 3, true, 2, false, 3, false, 1, false, 3, false, 3, true);
    await this.ajoutePieceArmure(monActor99, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor99, "Tooth Knife", "", 3, true, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor99, "Imperious Voice", "", "");
    let monActor100 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Ruffians", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 2, 8, "", 1, 3, false, 2, false, 1, false, 2, true, 1, false, 1, false, 1, true);
    await this.ajoutePieceArmure(monActor100, "Leather Shirt", 1, "");
    await this.ajouteArme(monActor100, "Dagger", "", 3, true, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor100, "Cowardice", "", "");
    let monActor101 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Man-at-Arms of the Wagon Company", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 4, 12, "", 2, 3, false, 1, false, 2, true, 2, false, 2, false, 1, false, 2, true);
    await this.ajoutePieceArmure(monActor101, "Leather Shirt", 1, "");
    await this.ajouteArme(monActor101, "Spear", "", 2, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor101, "Dagger", "", 2, true, 5, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor101, "Bow", "", 1, false, 3, 12, 12, "", "");
    let monActor102 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Warrior of Dun", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 5, 16, "", 4, 5, false, 2, true, 3, false, 2, true, 3, false, 1, false, 1, false);
    await this.ajoutePieceArmure(monActor102, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor102, "Long-Handled Axe (1-Hd)", "", 3, true, 5, 12, 18, "Shield Breaker", "");
    await this.ajouteArme(monActor102, "Great Spear", "", 3, true, 9, 9, 16, "Piercing", "");
    await this.ajouteArme(monActor102, "Dagger", "", 1, false, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor102, "Pas de quartier", "", "");
    let monActor103 = await this.ajouteUnAdversaire(dossierHommesMauvaisEriador, "Armed Villager", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 3, 10, "", 1, 3, false, 1, false, 1, false, 2, false, 2, false, 1, true, 1, false);
    await this.ajoutePieceArmure(monActor103, "Leather Shirt", 1, "");
    await this.ajouteArme(monActor103, "Sword", "", 2, false, 5, 10, 16, "Disarm", "");
    await this.ajouteArme(monActor103, "Spear", "", 1, true, 5, 9, 14, "Piercing", "");
    await this.ajouteArme(monActor103, "Bow", "", 3, false, 5, 10, 14, "Piercing", "");
    await this.ajouteArme(monActor103, "Dagger", "", 1, false, 3, 12, 12, "", "");
    let monActor104 = await this.ajouteUnAdversaire(dossierRohan, "Thelred, renegade rider of Rohan", "modules/tor1e-compendium/icons/adv-homme-mauvais.webp", 6, 15, "", 5, 6, true, 2, false, 3, true, 3, true, 2, false, 1, false, 3, false);
    await this.ajoutePieceArmure(monActor104, "Long-sleeved Cuirass", 2, "");
    await this.ajouteArme(monActor104, "Sword", "", 3, false, 5, 10, 16, "Disarm", "");
    await this.ajouteArme(monActor104, "Spear", "", 3, true, 5, 9, 14, "Piercing, Poison*", "*Poison: Thelred's spear is coated with a poison concocted by Ainfean, a gift from Uathach. A character hit by the spear collapses, seized by convulsions, and begins to foam at the mouth after a number of rounds equal to their Body value (in addition to the usual effects of the Poisoned condition).");
    await this.ajouteArme(monActor104, "Dagger", "", 2, false, 3, 12, 12, "", "");
    await this.ajouteCapaciteSpeciale(monActor104, "No Quarter", "", "");
    let monActor105 = await this.ajouteUnAdversaire(dossierOrcsGob, "Rugash the Serpent, Orc Chief", "modules/tor1e-compendium/icons/adv-orc.webp", 5, 28, "<p>Rugash is not an Orc chief like the others, which largely explains why his tribe has prospered so much in the Wastes. When he joined the Battle of Five Armies, he was neither the strongest nor the most talented of his kind. But he was cunning and, a rare thing for an Orc, subtle. He knew what to say to each commander to steer events the way he wanted. For many years, he was content to stay in the background, letting others face the challenges and betrayals that most Orc chiefs regularly encounter. It was not the defeat at the Battle of Five Armies that changed Rugash's fate, but its consequences.</p><p>When he sensed the battle turning in favor of his enemies, Rugash fled north before the rout. He had already planned his escape and found a well-hidden ravine to hide in. Thanks to this foresight, he avoided the fate of his comrades, killed by Eagles during their flight. As the surviving Orcs and Goblins gathered, Rugash joined a group led by a brute determined to quickly take revenge on the Dwarves. Rugash discreetly poisoned him and took his place.</p><p>Rugash's strategy has paid off in the Wastes, where cunning usually counts more than strength. As elusive as a shadow, his tribe often moves its camp and tends to strike during a sandstorm. It was his warriors who nicknamed him 'the Serpent', a nickname he wears with pride. After this long series of successes, Rugash's ambitions have evolved. Now, his scouts carefully observe prime targets along the eastern border of the Dale region in preparation for upcoming raids.</p>", 7, 5, false, 4, true, 3, true, 2, false, 3, true, 1, false, 2, false, true);
    await this.ajoutePieceArmure(monActor105, "Mail Shirt", 3, "");
    await this.ajoutePieceArmure(monActor105, "Grand Shield", 3, "");
    await this.ajouteArme(monActor105, "Axe", "Orc Axe", 2, false, 5, 12, 16, "Shield Breaker", "");
    await this.ajouteArme(monActor105, "Spear", "", 4, true, 7, 10, 12, "Poison", "The Serpent's Fang is a spear with a wide, split head");
    await this.ajouteCapaciteSpeciale(monActor105, "Sunlight Aversion", "", "");
    await this.ajouteCapaciteSpeciale(monActor105, "Serpent's Speed", "", "");
    await this.ajouteCapaciteSpeciale(monActor105, "Imperious Voice", "", "");

    console.log("===== END OF ADVERSARY CREATION ====");
  }

  async ajouteUnAdversaire(_dossier, _nom, _img, _attLevel, _endurance, _description, _hate, _parry, _armureFav, _skillPersoRang, _skillPersoFav, _skillMoveRang, _skillMoveFav, _skillPerceptionRang, _skillPerceptionFav, _skillSurvieRang, _skillSurvieFav, _skillCustomRang, _skillCustomFav, _skillVocationRang, _skillVocationFav, _tokenLie) {
    console.log("===> adding " + _nom);
    let monActor = await Actor.create({
      name: _nom,
      type: "adversary",
      folder: _dossier._id,
      img: _img,
      system: {
        stateOfHealth: { weary: { value: false } },
        attributeLevel: { value: _attLevel },
        endurance: { value: _endurance, max: _endurance },
        description: { value: "<p>" + _description + "</p>" },
        hate: { value: _hate, max: _hate },
        parry: { value: _parry },
        armour: { favoured: { value: _armureFav } },
        skills: {
          personality: { value: _skillPersoRang, favoured: { value: _skillPersoFav } },
          movement: { value: _skillMoveRang, favoured: { value: _skillMoveFav } },
          perception: { value: _skillPerceptionRang, favoured: { value: _skillPerceptionFav } },
          survival: { value: _skillSurvieRang, favoured: { value: _skillSurvieFav } },
          custom: { value: _skillCustomRang, favoured: { value: _skillCustomFav } },
          vocation: { value: _skillVocationRang, favoured: { value: _skillVocationFav } },
        },
      },
    });

    const update = {};
    update.token = {
      actorLink: _tokenLie,
      disposition: CONST.TOKEN_DISPOSITIONS.HOSTILE,
      bar1: {
        attribute: "endurance",
      },
      bar2: {
        attribute: "hate",
      },
      displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
      displayName: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
      sight: { enabled: false },
    };
    await monActor.update(update);

    return monActor;
  }

  async ajouteCapaciteSpeciale(monActor, nomCapacite, nouveauNom, descriptionAdditionnelle) {
    // Chercher la capacité spéciale dans les Items
    const maCapacite = game.items.contents.find((i) => i.type === "special-ability" && i.name === nomCapacite);

    // Créer une copie de l'item dans la feuille de personnage
    await monActor.createEmbeddedDocuments("Item", [maCapacite], { renderSheet: false });

    if (nouveauNom !== "" || descriptionAdditionnelle !== "") {
      // récupérer l'item dans la feuille de perso
      const monItem = monActor.items.find((i) => i.type === "special-ability" && i.name === nomCapacite);

      // Construire la mise à jour des données
      let newDescription = "";
      if (descriptionAdditionnelle !== "") {
        if (monItem.system.description.value !== null) {
          newDescription = "<p>" + descriptionAdditionnelle + "</p>" + monItem.system.description.value;
        } else {
          newDescription = "<p>" + descriptionAdditionnelle + "</p>";
        }
      } else {
        newDescription = monItem.system.description.value;
      }

      let newNom = "";
      if (nouveauNom !== "") {
        newNom = nouveauNom;
      } else {
        newNom = monItem.name;
      }

      let monUpdate = {
        _id: monItem._id,
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
  }

  async ajoutePieceArmure(monActor, nomArmure, protection, nouveauNom) {
    // Chercher l'armure dans les Items
    const monArmure = game.items.contents.find((i) => i.type === "armour" && i.name === nomArmure);

    // Créer une copie de l'item dans la feuille de personnage
    await monActor.createEmbeddedDocuments("Item", [monArmure], { renderSheet: false });

    // récupérer l'item dans la feuille de perso
    const monItem = monActor.items.find((i) => i.type === "armour" && i.name === nomArmure);

    // Construire la mise à jour des données
    let monUpdate = "";
    if (nouveauNom !== "") {
      monUpdate = {
        _id: monItem._id,
        name: nouveauNom,
        system: {
          protection: {
            value: protection,
          },
          equipped: {
            value: true,
          },
        },
      };
    } else {
      monUpdate = {
        _id: monItem._id,
        system: {
          protection: {
            value: protection,
          },
          equipped: {
            value: true,
          },
        },
      };
    }

    // Appliquer la mise à jour
    const monUpdated = await monActor.updateEmbeddedDocuments("Item", [monUpdate]);
  }

  async ajouteArme(monActor, nomArme, nouveauNom, rang, fav, degats, taille, blessure, coupPrecis, descriptionAdditionnelle) {
    // Chercher l'arme dans les Items
    const monArme = game.items.contents.find((i) => i.type === "weapon" && i.name === nomArme);

    // Créer une copie de l'item dans la feuille de personnage
    await monActor.createEmbeddedDocuments("Item", [monArme], { renderSheet: false });

    // récupérer l'item dans la feuille de perso
    const monItem = monActor.items.find((i) => i.type === "weapon" && i.name === nomArme);

    // Revoir la description si besoin
    let newDescription = "";
    if (descriptionAdditionnelle !== "") {
      if (monItem.system.description.value !== null) {
        newDescription = "<p>" + descriptionAdditionnelle + "</p>" + monItem.system.description.value;
      } else {
        newDescription = "<p>" + descriptionAdditionnelle + "</p>";
      }
    } else {
      newDescription = monItem.system.description.value;
    }

    // Déterminer le nom final
    let newNom = nomArme;
    if (nouveauNom !== "") {
      newNom = nouveauNom;
    }

    // Construire la mise à jour des données
    const monUpdate = {
      _id: monItem._id,
      name: newNom,
      system: {
        favoured: {
          value: fav,
        },
        skill: {
          value: rang,
        },
        damage: {
          value: degats,
        },
        edge: {
          value: taille,
        },
        injury: {
          value: blessure,
        },
        calledShot: {
          value: coupPrecis,
        },
        description: {
          value: newDescription,
        },
      },
    };

    // Appliquer la mise à jour
    const monUpdated = await monActor.updateEmbeddedDocuments("Item", [monUpdate]);
  }
}
