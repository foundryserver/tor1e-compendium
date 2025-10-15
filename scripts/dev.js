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
      close: (html) => {
        let objetType = html.find("select#objet-Type")[0]?.value || null;
        let objetRacine = html.find("select#objet-racine")[0]?.value || null;

        if (objetType !== null && objetRacine != null) {
          console.log("Deleting objects of type " + objetType);
          if (objetRacine == "yes") console.log("   and located at root");
          else console.log("   and located at all levels");

          if (objetType == "items") {
            game.items.forEach((t) => {
              if (objetRacine == "yes") {
                if (!t.folder) {
                  t.delete();
                }
              } else {
                t.delete();
              }
            });
          }

          if (objetType == "actors") {
            game.actors.forEach((t) => {
              if (objetRacine == "yes") {
                if (!t.folder) {
                  t.delete();
                }
              } else {
                t.delete();
              }
            });
          }

          if (objetType == "folders") {
            game.folders.forEach((t) => {
              if (objetRacine == "yes") {
                if (!t.folder) {
                  t.delete();
                }
              } else {
                t.delete();
              }
            });
          }
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
      close: (html) => {
        let objetNom = html.find("input[name='objet-Nom']").val();

        if (objetNom !== "") {
          game.actors.forEach((t) => {
            if (t.name == objetNom) {
              console.log(t);
              t.exportToJSON();
            }
          });
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
      close: (html) => {
        let objetType = html.find("select#objet-Type")[0]?.value || null;
        let objetNom = html.find("input[name='objet-Nom']").val();

        if (objetNom !== "") {
          console.log("Searching for " + objetNom + " of type " + objetType);

          if (objetType == "items") {
            game.items.forEach((t) => {
              if (t.name == objetNom) {
                console.log(t);
              }
            });
          }

          if (objetType == "actors") {
            game.actors.forEach((t) => {
              if (t.name == objetNom) {
                console.log(t);
              }
            });
          }

          if (objetType == "folders") {
            game.folders.forEach((t) => {
              if (t.name == objetNom) {
                console.log(t);
              }
            });
          }
        }
      },
    }).render(true);
  }
}
