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
    console.log("=== Tor1eCompendium : CHARACTERISTICS START ===");
    await this.mesCaracteristiques.creationCaracteristiques();
    console.log("=== Tor1eCompendium : CHARACTERISTICS END ===");
  }

  // INTIALISATION OF EQUIPMENT ITEMS
  async initEquipement() {
    console.log("=== Tor1eCompendium : EQUIPMENT START ===");
    await this.monEquipement.creationEquipement();
    console.log("=== Tor1eCompendium : EQUIPMENT END ===");
  }

  // Installation OF ADVERSARIES
  async initAdversaires() {
    console.log("=== Tor1eCompendium : ADVERSARIES START ===");
    await this.mesAdversaires.creationAdversaires();
    console.log("=== Tor1eCompendium : ADVERSARIES END ===");
  }

  // Installation OF NPCs
  async initPNJs() {
    console.log("=== Tor1eCompendium : NPCs START ===");
    await this.mesPNJs.creationPNJs();
    console.log("=== Tor1eCompendium : NPCs END ===");
  }

  // Installation OF THE ENTIRE WORLD (Characteristics, items, adversaries)
  async initWorld() {
    ui.notifications.notify("=== TOR1E - EN - COMPENDIUM : START ===");
    await this.initCaracteristiques();
    await this.initEquipement();
    await this.initAdversaires();
    await this.initPNJs();
    ui.notifications.notify("=== TOR1E - EN - COMPENDIUM : END ===");
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
  console.log("=== Tor1e Compendium : Init ok ===");
});
