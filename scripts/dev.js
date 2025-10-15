export class Tor1eCompendiumDev {
  async dev_Delete_all() {
    new Dialog({
      title: "Deleting Actors, Items or Folders",
      content: `
                            <form>
                                <div class="form-group">
                                    <label>Select object type to delete</label>
                                    <select id="objet-Type">
                                        <option value="actors">Actor</option>
                                        <option value="items">Item</option>
                                        <option value="folders">Folder</option>
                                    </select>
                                    <label>Only objects at root?</label>
                                    <select id="objet-racine">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </form>`,
      buttons: {
        yes: {
          icon: "<i class='fas fa-check'></i>",
          label: `Continue`,
        },
      },
      default: "yes",
      close: async (html) => {
        try {
          let objetType = html.find("select#objet-Type")[0]?.value || null;
          let objetRacine = html.find("select#objet-racine")[0]?.value || null;

          if (objetType !== null && objetRacine != null) {
            console.log("Deleting objects of type " + objetType);
            if (objetRacine == "yes") console.log("   and located at root");
            else console.log("   and located at all levels");

            if (objetType == "items") {
              const itemsToDelete = game.items.filter((t) => {
                return objetRacine == "yes" ? !t.folder : true;
              });
              for (const item of itemsToDelete) {
                await item.delete();
              }
            }

            if (objetType == "actors") {
              const actorsToDelete = game.actors.filter((t) => {
                return objetRacine == "yes" ? !t.folder : true;
              });
              for (const actor of actorsToDelete) {
                await actor.delete();
              }
            }

            if (objetType == "folders") {
              const foldersToDelete = game.folders.filter((t) => {
                return objetRacine == "yes" ? !t.folder : true;
              });
              for (const folder of foldersToDelete) {
                await folder.delete();
              }
            }

            ui.notifications.info(`Deleted ${objetType} successfully.`);
          }
        } catch (error) {
          console.error("Error during deletion:", error);
          ui.notifications.error("Error occurred during deletion. Check console for details.");
        }
      },
    }).render(true);
  }
  async dev_ExportActor_to_Json() {
    new Dialog({
      title: "Export Actor to JSON",
      content: `
                            <form>
                                <div class="form-group">
                                    <label>Enter the Actor name</label>
                                    <input type='text' name='objet-Nom'></input>
                                </div>
                            </form>`,
      buttons: {
        yes: {
          icon: "<i class='fas fa-check'></i>",
          label: `Continue`,
        },
      },
      default: "yes",
      close: async (html) => {
        try {
          let objetNom = html.find("input[name='objet-Nom']").val();

          if (objetNom !== "") {
            const foundActors = game.actors.filter((t) => t.name === objetNom);

            if (foundActors.length === 0) {
              ui.notifications.warn(`No actor found with name: ${objetNom}`);
              return;
            }

            for (const actor of foundActors) {
              console.log("Exporting actor:", actor);
              await actor.exportToJSON();
            }

            ui.notifications.info(`Exported ${foundActors.length} actor(s) to JSON.`);
          } else {
            ui.notifications.warn("Please enter an actor name.");
          }
        } catch (error) {
          console.error("Error during export:", error);
          ui.notifications.error("Error occurred during export. Check console for details.");
        }
      },
    }).render(true);
  }

  async dev_Debug() {
    new Dialog({
      title: "Debug Actor, Item or Folder",
      content: `
                            <form>
                                <div class="form-group">
                                    <label>Enter the name and type of the object</label>
                  <select id="objet-Type" />
                    <option value="actors">Actor</option>
                    <option value="items">Item</option>
                    <option value="folders">Folder</option>
                  </select>
                  <input type='text' name='objet-Nom'></input>
                </div>
              </form>`,
      buttons: {
        yes: {
          icon: "<i class='fas fa-check'></i>",
          label: `Continue`,
        },
      },
      default: "yes",
      close: async (html) => {
        try {
          let objetType = html.find("select#objet-Type")[0]?.value || null;
          let objetNom = html.find("input[name='objet-Nom']").val();

          if (objetNom !== "") {
            console.log("Searching for " + objetNom + " of type " + objetType);

            let foundObjects = [];

            if (objetType == "items") {
              foundObjects = game.items.filter((t) => t.name === objetNom);
            } else if (objetType == "actors") {
              foundObjects = game.actors.filter((t) => t.name === objetNom);
            } else if (objetType == "folders") {
              foundObjects = game.folders.filter((t) => t.name === objetNom);
            }

            if (foundObjects.length === 0) {
              console.log(`No ${objetType} found with name: ${objetNom}`);
              ui.notifications.warn(`No ${objetType} found with name: ${objetNom}`);
            } else {
              console.log(`Found ${foundObjects.length} ${objetType}(s):`);
              foundObjects.forEach((obj, index) => {
                console.log(`${index + 1}:`, obj);
              });
              ui.notifications.info(`Found ${foundObjects.length} ${objetType}(s). Check console for details.`);
            }
          } else {
            ui.notifications.warn("Please enter an object name.");
          }
        } catch (error) {
          console.error("Error during debug:", error);
          ui.notifications.error("Error occurred during debug. Check console for details.");
        }
      },
    }).render(true);
  }
}
