import { Tor1eCompendiumCaracteristiques } from "./scripts/caracteristiques.js";
import { Tor1eCompendiumEquipement } from "./scripts/equipement.js";
import { Tor1eCompendiumAdversaires } from "./scripts/adversaires.js";
import { Tor1eCompendiumPNJ } from "./scripts/pnj.js";
import { Tor1eCompendiumDev } from "./scripts/dev.js";

export class Tor1eCompendium {
  constructor() {
    this.mesCaracteristiques = new Tor1eCompendiumCaracteristiques();
    this.monEquipement = new Tor1eCompendiumEquipement();
    this.mesAdversaires = new Tor1eCompendiumAdversaires();
    this.mesPNJs = new Tor1eCompendiumPNJ();
    this.dev = new Tor1eCompendiumDev();
  }

  // Installation OF CHARACTER Characteristics
  async initCaracteristiques() {
    console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : CHARACTERISTICS START -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    try {
      await this.mesCaracteristiques.creationCaracteristiques();
      console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : CHARACTERISTICS END -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    } catch (error) {
      console.error("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Error initializing characteristics:", error);
      ui.notifications.error("Failed to initialize characteristics. Check console for details.");
    }
  }

  // Installation OF EQUIPMENT ITEMS
  async initEquipement() {
    console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : EQUIPMENT START -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    try {
      await this.monEquipement.creationEquipement();
      console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : EQUIPMENT END -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    } catch (error) {
      console.error("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Error initializing equipment:", error);
      ui.notifications.error("Failed to initialize equipment. Check console for details.");
    }
  }

  // Installation OF ADVERSARIES
  async initAdversaires() {
    console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : ADVERSARIES START -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    try {
      await this.mesAdversaires.creationAdversaires();
      console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : ADVERSARIES END -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    } catch (error) {
      console.error("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Error initializing adversaries:", error);
      ui.notifications.error("Failed to initialize adversaries. Check console for details.");
    }
  }

  // Installation OF NPCs
  async initPNJs() {
    console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : NPCs START -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    try {
      await this.mesPNJs.creationPNJs();
      console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : NPCs END -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    } catch (error) {
      console.error("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Error initializing NPCs:", error);
      ui.notifications.error("Failed to initialize NPCs. Check console for details.");
    }
  }

  // Installation OF THE ENTIRE WORLD (Characteristics, items, adversaries)
  async initWorld() {
    ui.notifications.info(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  TOR1E - EN - COMPENDIUM : START -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    try {
      await this.initCaracteristiques();
      await this.initEquipement();
      await this.initAdversaires();
      await this.initPNJs();
      ui.notifications.info(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  TOR1E - EN - COMPENDIUM : END -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
    } catch (error) {
      console.error("--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Error initializing world:", error);
      ui.notifications.error("Failed to initialize compendium. Check console for details.");
    }
  }

  // DELETE ALL ACTORS, ITEMS, FOLDERS (after choice)
  async dev_Delete_all() {
    await this.dev.dev_Delete_all();
  }

  // EXPORT AN ACTOR / ITEM / FOLDER TO JSON FILE
  async dev_ExportActor_to_Json() {
    await this.dev.dev_ExportActor_to_Json();
  }

  // SEND AN ACTOR / ITEM / FOLDER TO THE CONSOLE
  async dev_Debug() {
    await this.dev.dev_Debug();
  }
}

Hooks.once("init", async function () {
  game.tor1eCompendium = new Tor1eCompendium();
  console.log(" --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Tor1e Compendium : Init ok -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ");
});
