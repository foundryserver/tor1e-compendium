export class Tor1eCompendiumEquipement {
  async creationEquipement() {
    console.log("===================================================================");
    console.log("                        EQUIPMENT                                 ");
    console.log("===================================================================");

    console.log("===== CREATING BASE EQUIPMENT FOLDER ==== ");
    let dossierEquipement = await Folder.create({
      name: "Equipment",
      type: "Item",
      sorting: "a",
      parent: null,
    });

    console.log("===================================================================");
    console.log("                        WAR GEAR                                 ");
    console.log("===================================================================");

    console.log("===== CREATING BASE WAR GEAR FOLDER ==== ");
    let dossierAttirailDeGuerre = await Folder.create({
      name: "War Gear",
      type: "Item",
      sorting: "a",
      color: "#2e0505",
      parent: dossierEquipement._id,
    });

    console.log("-------------------------------------------------------------------");
    console.log("                              WEAPONS                                ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATING BASE PLAYER WEAPONS FOLDER ==== ");
    let dossierArmes = await Folder.create({
      name: "Weapons",
      type: "Item",
      color: "#181b26",
      sorting: "m",
      parent: dossierAttirailDeGuerre._id,
    });

    console.log("===== STEP 3: CREATING PLAYER WEAPONS ==== ");
    await Item.create({
      name: "Dagger",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_dagger.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 12 },
        damage: { value: 3 },
        calledShot: { value: "tor1e.weapons.calledShots.none" },
        description: { value: "<p><em>Core Rule Book, page 131</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.none" },
        equipped: { value: false },
        skill: { name: "Dagger" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Short sword",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 1 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 128</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
        equipped: { value: false },
        skill: { name: "Short Sword" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Sword",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 2 },
        injury: { value: "16" },
        edge: { value: 10 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 128</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
        equipped: { value: false },
        skill: { name: "Sword" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Long sword (1m)",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 3 },
        injury: { value: "16" },
        edge: { value: 10 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 128</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
        equipped: { value: false },
        skill: { name: "Long Sword" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Long sword (2m)",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_swords.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 3 },
        injury: { value: "18" },
        edge: { value: 10 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 128</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
        equipped: { value: false },
        skill: { name: "Long Sword" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Spear",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_spears.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 2 },
        injury: { value: "14" },
        edge: { value: 9 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Core Rule Book, page 130</em></p>" },
        ranged: { value: true, short: { value: 5 }, medium: { value: 10 }, long: { value: 20 } },
        group: { value: "tor1e.weapons.groups.spears" },
        equipped: { value: false },
        skill: { name: "Spear" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Great spear",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_spears.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 4 },
        injury: { value: "16" },
        edge: { value: 9 },
        damage: { value: 9 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Core Rule Book, page 130</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.spears" },
        equipped: { value: false },
        skill: { name: "Great Spear" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Axe",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 2 },
        injury: { value: "18" },
        edge: { value: 12 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 129</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
        equipped: { value: false },
        skill: { name: "Axe" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Great axe",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 4 },
        injury: { value: "20" },
        edge: { value: 12 },
        damage: { value: 9 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 129</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
        equipped: { value: false },
        skill: { name: "Axe" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Long-handled axe (1m)",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 3 },
        injury: { value: "18" },
        edge: { value: 12 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 129</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
        equipped: { value: false },
        skill: { name: "Long-Handled Axe" },
        twoHandWeapon: { value: false },
      },
    });
    await Item.create({
      name: "Long-handled axe (2m)",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_axes.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 3 },
        injury: { value: "20" },
        edge: { value: 12 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 129</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
        equipped: { value: false },
        skill: { name: "Long-Handled Axe" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Bow",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_bows.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 1 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Core Rule Book, page 130</em></p>" },
        ranged: { value: true, short: { value: 10 }, medium: { value: 20 }, long: { value: 30 } },
        group: { value: "tor1e.weapons.groups.bows" },
        equipped: { value: false },
        skill: { name: "Bow" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Longbow",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_bows.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 3 },
        injury: { value: "16" },
        edge: { value: 10 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Core Rule Book, page 130</em></p>" },
        ranged: { value: true, short: { value: 20 }, medium: { value: 30 }, long: { value: 40 } },
        group: { value: "tor1e.weapons.groups.bows" },
        equipped: { value: false },
        skill: { name: "Longbow" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Mattock",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_mattock.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 3 },
        injury: { value: "18" },
        edge: { value: 10 },
        damage: { value: 8 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 131</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.none" },
        equipped: { value: false },
        skill: { name: "Mattock" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Brawl",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_dagger.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 0 },
        injury: { value: "" },
        edge: { value: 0 },
        damage: { value: 1 },
        calledShot: { value: "tor1e.weapons.calledShots.none" },
        description: { value: "<p><em>See core rulebook.</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.none" },
        equipped: { value: false },
        skill: { name: "Brawling" },
        twoHandWeapon: { value: true },
      },
    });
    await Item.create({
      name: "Rock throw",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/weapon_dagger.png",
      folder: dossierArmes._id,
      permission: { default: 2 },
      system: {
        encumbrance: { value: 0 },
        injury: { value: "" },
        edge: { value: 0 },
        damage: { value: 1 },
        calledShot: { value: "tor1e.weapons.calledShots.none" },
        description: { value: "<p><em>See core rulebook.</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.none" },
        equipped: { value: false },
        skill: { name: "Athletics" },
        twoHandWeapon: { value: true },
      },
    });

    console.log("===== CREATING OTHER WEAPONS ==== ");
    let dossierAutresArmes = await Folder.create({
      name: "Other Weapons",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierAttirailDeGuerre._id,
    });
    await Item.create({
      name: "Horn bow",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_ranged.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 10 },
        damage: { value: 4 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: true, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bows" },
      },
    });
    await Item.create({
      name: "Sweep",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 12 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Core Rule Book, page 258</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Heavy scimitar (2m)",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-scimitar.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
      },
    });
    await Item.create({
      name: "Serrated blade",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-scimitar.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 12 },
        damage: { value: 3 },
        calledShot: { value: "tor1e.weapons.calledShots.none" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.none" },
      },
    });
    await Item.create({
      name: "Hooks",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "15" },
        edge: { value: 12 },
        damage: { value: 6 },
        calledShot: { value: "tor1e.weapons.calledShots.poison" },
        description: { value: "<p><em>Ténèbres sur la Forêt Noire, page 134</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Stinger",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 3 },
        calledShot: { value: "tor1e.weapons.calledShots.poison" },
        description: { value: "<p><em>Core Rule Book, page 249</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Shredding",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 6 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Core Rule Book, page 255</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Crushing",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 12 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Core Rule Book, page 252</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Broad-bladed sword",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-scimitar.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
      },
    });
    await Item.create({
      name: "Curved sword",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-scimitar.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 10 },
        damage: { value: 4 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
      },
    });
    await Item.create({
      name: "Serrated sword",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-scimitar.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 8 },
        calledShot: { value: "tor1e.weapons.calledShots.disarm" },
        description: { value: "<p><em>Les Vestiges du Nord, page 59</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.swords" },
      },
    });
    await Item.create({
      name: "Strangulation",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 6 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Contes & Légendes des Terres Sauvages, page 21</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Great black mace",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_close.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 8 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Fondcombe, page 70</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
      },
    });
    await Item.create({
      name: "Claws",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 3 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Fondcombe, page 78</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Strangling claws",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Ténèbres sur la Forêt Noire, page 97</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Orc axe",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_close.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 5 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
      },
    });
    await Item.create({
      name: "Blow",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_close.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 12 },
        damage: { value: 6 },
        calledShot: { value: "tor1e.weapons.calledShots.knockdown" },
        description: { value: "<p><em>Guide de la Ville du lac, page 23</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Laceration",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 10 },
        damage: { value: 9 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 288</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Broadhead spear",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-spear.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 9 },
        damage: { value: 4 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Core Rule Book, page 244</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.spears" },
      },
    });
    await Item.create({
      name: "Stone-tipped spear",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-spear.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "12" },
        edge: { value: 10 },
        damage: { value: 4 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Ténèbres sur la Forêt Noire, page 134</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.spears" },
      },
    });
    await Item.create({
      name: "Long axe",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_close.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "18" },
        edge: { value: 12 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Contes et Légendes des Terres Sauvages, page 75</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
      },
    });
    await Item.create({
      name: "Heavy hammer",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_close.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 8 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 252</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
      },
    });
    await Item.create({
      name: "Club",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_close.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "14" },
        edge: { value: 10 },
        damage: { value: 6 },
        calledShot: { value: "tor1e.weapons.calledShots.break-shield" },
        description: { value: "<p><em>Core Rule Book, page 252</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.axes" },
      },
    });
    await Item.create({
      name: "Bite",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "16" },
        edge: { value: 12 },
        damage: { value: 3 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Core Rule Book, page 252</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Trample",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "18" },
        edge: { value: 8 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.knockdown" },
        description: { value: "<p><em>Ténèbres sur la Forêt Noire, page 136</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.bestial" },
      },
    });
    await Item.create({
      name: "Pike",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-spear.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "15" },
        edge: { value: 10 },
        damage: { value: 7 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Contes et Légendes des Terres Sauvages, page 75</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.spears" },
      },
    });
    await Item.create({
      name: "Morgul dagger",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon-scimitar.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "20" },
        edge: { value: 12 },
        damage: { value: 4 },
        calledShot: { value: "tor1e.weapons.calledShots.pierce" },
        description: { value: "<p><em>Fondcombe, page 84</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups.none" },
      },
    });
    await Item.create({
      name: "Web",
      type: "weapon",
      img: "systems/tor1e/assets/images/icons/adversary_weapon_bestial.png",
      folder: dossierAutresArmes._id,
      system: {
        encumbrance: { value: 0 },
        injury: { value: "0" },
        edge: { value: 0 },
        damage: { value: 0 },
        calledShot: { value: "tor1e.weapons.calledShots." },
        description: { value: "<p><em>Core Rule Book, page 249</em></p>" },
        ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
        group: { value: "tor1e.weapons.groups." },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("                        ARMORS                                    ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATING BASE ARMORS FOLDER ==== ");
    let dossierArmures = await Folder.create({
      name: "Armors",
      type: "Item",
      color: "#181b26",
      sorting: "m",
      parent: dossierAttirailDeGuerre._id,
    });

    console.log("===== CREATING ARMORS ==== ");
    await Item.create({
      name: "Leather shirt",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/armour.png",
      folder: dossierArmures._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 126</em></p>" },
        encumbrance: { value: 4 },
        protection: { value: 1 },
        group: { value: "leather" },
      },
    });
    await Item.create({
      name: "Long-sleeved corslet",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/armour.png",
      folder: dossierArmures._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 126</em></p>" },
        encumbrance: { value: 8 },
        protection: { value: 2 },
        group: { value: "leather" },
      },
    });
    await Item.create({
      name: "Mail shirt",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/armour.png",
      folder: dossierArmures._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 126</em></p>" },
        encumbrance: { value: 12 },
        protection: { value: 3 },
        group: { value: "mail" },
      },
    });
    await Item.create({
      name: "Chainmail",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/armour.png",
      folder: dossierArmures._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 126</em></p>" },
        encumbrance: { value: 16 },
        protection: { value: 4 },
        group: { value: "mail" },
      },
    });
    await Item.create({
      name: "Hauberk",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/armour.png",
      folder: dossierArmures._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 126</em></p>" },
        encumbrance: { value: 20 },
        protection: { value: 5 },
        group: { value: "mail" },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("                        HELMETS                                    ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATING BASE HELMETS FOLDER ==== ");
    let dossierCasques = await Folder.create({
      name: "Helmets",
      type: "Item",
      color: "#181b26",
      sorting: "m",
      parent: dossierAttirailDeGuerre._id,
    });

    console.log("===== STEP 8: CREATING HELMETS ==== ");
    await Item.create({
      name: "Iron and leather skullcap",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/headgear.png",
      folder: dossierCasques._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 126</em></p>" },
        encumbrance: { value: 2 },
        protection: { value: 1 },
        group: { value: "head" },
      },
    });
    await Item.create({
      name: "Helmet",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/headgear.png",
      folder: dossierCasques._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 125</em></p>" },
        encumbrance: { value: 6 },
        protection: { value: 4 },
        group: { value: "head" },
      },
    });

    console.log("-------------------------------------------------------------------");
    console.log("                        SHIELDS                                    ");
    console.log("-------------------------------------------------------------------");

    console.log("===== CREATING BASE SHIELDS FOLDER ==== ");
    let dossierBoucliers = await Folder.create({
      name: "Shields",
      type: "Item",
      color: "#181b26",
      sorting: "m",
      parent: dossierAttirailDeGuerre._id,
    });

    console.log("===== CREATING SHIELDS ==== ");
    await Item.create({
      name: "Round shield",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/shield.png",
      folder: dossierBoucliers._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 127</em></p>" },
        encumbrance: { value: 1 },
        protection: { value: 1 },
        group: { value: "shield" },
      },
    });
    await Item.create({
      name: "Shield",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/shield.png",
      folder: dossierBoucliers._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 127</em></p>" },
        encumbrance: { value: 3 },
        protection: { value: 2 },
        group: { value: "shield" },
      },
    });
    await Item.create({
      name: "Great shield",
      type: "armour",
      img: "systems/tor1e/assets/images/icons/shield.png",
      folder: dossierBoucliers._id,
      permission: { default: 2 },
      system: {
        description: { value: "<p><em>Core Rule Book, page 127</em></p>" },
        encumbrance: { value: 5 },
        protection: { value: 3 },
        group: { value: "shield" },
      },
    });

    console.log("===================================================================");
    console.log("                        NON-MARTIAL EQUIPMENT                         ");
    console.log("===================================================================");

    console.log("===== CREATING BASE NON-MARTIAL EQUIPMENT FOLDER ==== ");
    let dossierEquipementNonMartial = await Folder.create({
      name: "Non-martial Equipment",
      type: "Item",
      sorting: "a",
      color: "#2e0505",
      parent: dossierEquipement._id,
    });

    console.log("===== CREATING SUBFOLDERS ==== ");
    let dossierMusique = await Folder.create({
      name: "Musical Instruments",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierEquipementNonMartial._id,
    });

    let dossierOutils = await Folder.create({
      name: "Tools",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierEquipementNonMartial._id,
    });

    let dossierSante = await Folder.create({
      name: "Health",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierEquipementNonMartial._id,
    });

    let dossierVetements = await Folder.create({
      name: "Clothing",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierEquipementNonMartial._id,
    });
    let dossierAnimaux = await Folder.create({
      name: "Animals",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierEquipementNonMartial._id,
    });
    let dossierDomaines = await Folder.create({
      name: "Domains",
      type: "Item",
      color: "#181b26",
      sorting: "a",
      parent: dossierEquipementNonMartial._id,
    });
    await Item.create({
      name: "Horn",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Cor.webp",
      folder: dossierMusique._id,
      system: { description: { value: "<p>Wind instrument made of wood or metal</p>" }, encumbrance: { value: 0 } },
    });
    await Item.create({
      name: "Flute",
      type: "miscellaneous",
      img: "icons/tools/instruments/flute-simple-wood.webp",
      folder: dossierMusique._id,
      system: {
        description: {
          value: "<p>Roughly carved from a piece of wood or a reed, the flute can also be an object finely crafted by the best artisans</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Harp",
      type: "miscellaneous",
      img: "icons/tools/instruments/harp-lap-brown.webp",
      folder: dossierMusique._id,
      system: {
        description: {
          value: "<p>The musician plucks strings stretched between two parallel uprights to produce a soft, clear and powerful sound.</p>",
        },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Lute",
      type: "miscellaneous",
      img: "icons/tools/instruments/lute-gold-brown.webp",
      folder: dossierMusique._id,
      system: {
        description: { value: "<p>String instrument with strings stretched over a hollow resonating wood body</p>" },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Tambourine",
      type: "miscellaneous",
      img: "icons/tools/instruments/drum-hand-tan.webp",
      folder: dossierMusique._id,
      system: {
        description: {
          value: "<p>Animal skin stretched over a hollow wooden object produces a dry and sharp sound</p>",
        },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Scribe's accessories",
      type: "miscellaneous",
      img: "icons/tools/scribal/ink-quill-pink.webp",
      folder: dossierOutils._id,
      system: {
        description: { value: "<p>Parchments, inks and quills for a scholar wishing to note their discoveries</p>" },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Candle",
      type: "miscellaneous",
      img: "icons/sundries/lights/candle-unlit-red.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>Candle providing meager but sufficient lighting to see further than one's feet</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Skinning dagger",
      type: "miscellaneous",
      img: "icons/tools/cooking/knife-chef-steel-brown.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>Knife whose shape allows for penetrating and cleanly cutting animal hide</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Fishing net",
      type: "miscellaneous",
      img: "icons/tools/fishing/net-tan.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>Small net for fishing from the shore or from a boat in a river or lake</p>",
        },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Lamp",
      type: "miscellaneous",
      img: "icons/sundries/lights/lantern-iron-yellow.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>Simple metal lamp containing a candle or a wick and an oil container</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Herbalist's tools",
      type: "miscellaneous",
      img: "icons/tools/cooking/mortar-herbs-yellow.webp",
      folder: dossierOutils._id,
      system: {
        description: { value: "<p>Measuring, cutting and preparation tools for medicinal herbs and concoctions</p>" },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Cooking tools",
      type: "miscellaneous",
      img: "icons/tools/cooking/fork-steel-tan.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>A pot to simmer a freshly caught rabbit, a spoon and a cup...</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Blacksmith's tools",
      type: "miscellaneous",
      img: "icons/tools/smithing/pincers.webp",
      folder: dossierOutils._id,
      system: { description: { value: "<p>Blacksmith's tongs and hammers</p>" }, encumbrance: { value: 1 } },
    });
    await Item.create({
      name: "Tailor's tools",
      type: "miscellaneous",
      img: "icons/commodities/cloth/thread-spindle-white.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>Scissors, needles and other tools for making clothing and clothing accessories</p>",
        },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Leatherworking tools",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Outils_cuir.webp",
      folder: dossierOutils._id,
      system: {
        description: { value: "<p>Measuring, cutting and stitching tools for leather pieces.</p>" },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Pipe",
      type: "miscellaneous",
      img: "icons/sundries/misc/pipe-wooden-curved-oak.webp",
      folder: dossierOutils._id,
      system: {
        description: {
          value: "<p>A hobbit specialty, the pipe is a delicately designed object for smoking dried leaves</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Torch",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Torche.webp",
      folder: dossierOutils._id,
      system: {
        description: { value: "<p>Stick wrapped in cloth that is lit for illumination.</p>" },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Bandages",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Bandages.webp",
      folder: dossierSante._id,
      system: {
        description: {
          value: "<p>Clean cloth strip to protect a wound or maintain a dressing.</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Mushrooms",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Champignons.webp",
      folder: dossierSante._id,
      system: {
        description: {
          value: "<p>Whether to enhance the flavor of a meal or for their medicinal properties, mushrooms have great qualities.</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Medicinal herbs",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Herbe_medicinale.webp",
      folder: dossierSante._id,
      system: {
        description: {
          value: "<p>Fresh or dried herbs, in balm form or as a concoction to dilute and drink...</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Ointment",
      type: "miscellaneous",
      img: "icons/commodities/materials/bowl-powder-grey.webp",
      folder: dossierSante._id,
      system: {
        description: {
          value: "<p>Concoction prepared by an herbalist that is applied to a wound to soothe it</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Travel pack",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Paquetage_voyage.webp",
      folder: dossierSante._id,
      system: {
        description: {
          value: "<p><h3><span style='text-decoration: underline;'><strong>Autumn and Winter</strong></span></h3><ul><li>Contents: Thick and warm clothing (jackets, fur-lined cape), blanket, water and provisions for a week of travel.</li><li>Encumbrance: 3</li></ul></p><p><h3><span style='text-decoration: underline;'><strong>Spring and Summer</strong></span></h3><ul><li>Contents: Fine and light clothing, thin cape and blanket, water and provisions for a week of travel.</li><li>Encumbrance: 2</li></ul></p>",
        },
        encumbrance: { value: 3 },
      },
    });
    await Item.create({
      name: "Travel accessories",
      type: "miscellaneous",
      img: "icons/tools/navigation/map-marked-black.webp",
      folder: dossierVetements._id,
      system: {
        description: {
          value: "<p>An annotated map, a well-balanced bag, compact accessories, everything needed to travel more easily.</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Dress clothes",
      type: "miscellaneous",
      img: "icons/equipment/chest/shirt-collared-grey.webp",
      folder: dossierVetements._id,
      system: {
        description: {
          value: "<p>Good quality clothing allowing one to frequent the court without appearing ridiculous</p>",
        },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Hide",
      type: "miscellaneous",
      img: "icons/commodities/leather/fur-pelt-bear.webp",
      folder: dossierVetements._id,
      system: {
        description: {
          value: "<p>Tanned and smoothed hide. Very warm in winter and gives the wearer a bestial appearance</p>",
        },
        encumbrance: { value: 1 },
      },
    });
    await Item.create({
      name: "Dog",
      type: "miscellaneous",
      img: "modules/tor1e-compendium/images/divers/Chien.webp",
      folder: dossierAnimaux._id,
      system: {
        description: { value: "<p>Domesticated dog that helps herd flocks and guard the home.</p>" },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Domain",
      type: "miscellaneous",
      img: "icons/environment/settlement/house-woods.webp",
      folder: dossierDomaines._id,
      system: {
        description: {
          value: "<p>Rickety shack in the wind, stone house, farm buildings, inn, opulent dwelling...</p>",
        },
        encumbrance: { value: 0 },
      },
    });
    await Item.create({
      name: "Small pouch",
      type: "miscellaneous",
      img: "icons/containers/bags/coinpouch-simple-leather-silver-brown.webp",
      folder: dossierOutils._id,
      system: { description: { value: "<p>Small leather bag</p>" }, encumbrance: { value: 0 } },
    });
    await Item.create({
      name: "Paper",
      type: "miscellaneous",
      img: "icons/sundries/scrolls/scroll-writing-gold.webp",
      folder: dossierOutils._id,
      system: { description: { value: "<p>Sheet of parchment or leather</p>" }, encumbrance: { value: 0 } },
    });
    await Item.create({
      name: "Gem",
      type: "miscellaneous",
      img: "icons/commodities/gems/gem-faceted-round-white.webp",
      folder: dossierOutils._id,
      system: { description: { value: "<p>Precious stone or not</p>" }, encumbrance: { value: 0 } },
    });
    await Item.create({
      name: "Walking staff",
      type: "miscellaneous",
      img: "icons/tools/fasteners/pin-round.webp",
      folder: dossierOutils._id,
      system: {
        description: { value: "<p>Simple roughly carved branch or finely engraved piece of wood</p>" },
        encumbrance: { value: 0 },
      },
    });

    console.log("===== EQUIPMENT CREATION COMPLETE ==== ");
  }
}
