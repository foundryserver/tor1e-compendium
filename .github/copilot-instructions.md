# Copilot Instructions

## Project Overview

This project creates a **Foundry VTT v11 module** for **The One Ring 1st Edition (TOR1E)** game system. It's an English translation of an existing French module that provides a comprehensive compendium of game content including character traits, equipment, adversaries, and NPCs. This project is a copy of this project https://gitlab.com/ghorin/tor1e-compendium-fr and is being translated to English.

## Documentation and Official Resources

Look in the resources directory for documentation and official materials for the TOR1E game system. There are core rules, and supplements.

### Core Functionality

The module delivers a **macro-driven content generation system** that programmatically creates organized Foundry VTT entities (Items, Actors, Folders) based on hardcoded data in JavaScript files.

## Architecture

### Main Entry Point

- **`main.mjs`**: ES6 module that exports the main `Tor1eCompendium` class and registers it to `game.tor1eCompendium` on init
- **`module.json`**: Standard Foundry module manifest defining compatibility, packs, and dependencies

### Core Components

The system is organized into specialized generator classes:

1. **`scripts/caracteristiques.js`** - `Tor1eCompendiumCaracteristiques`

   - Creates character-related Items: skills, virtues, rewards, flaws, special abilities
   - Organizes content into hierarchical folder structures by category and culture
   - Contains ~4,949 lines of detailed game content

2. **`scripts/equipement.js`** - `Tor1eCompendiumEquipement`

   - Generates weapons, armor, tools, clothing, animals, and miscellaneous equipment
   - Includes both player and adversary weapons with complete stats
   - Contains ~1,397 lines covering all equipment types

3. **`scripts/adversaires.js`** - `Tor1eCompendiumAdversaires`

   - Creates adversary Actors organized by creature type (Orcs, Spiders, Trolls, etc.)
   - Contains ~1,084 lines of enemy definitions

4. **`scripts/pnj.js`** - `Tor1eCompendiumPNJ`

   - Generates NPC Actors organized by cultural groups and regions
   - Contains ~2,186 lines covering various peoples and locations

5. **`scripts/dev.js`** - `Tor1eCompendiumDev`
   - Development utilities for debugging, cleanup, and JSON export
   - Contains ~165 lines of utility functions

### Macro System

- **Pack**: `tor1e-compendium-en` (currently French: `tor1e-compendium-fr`)
- **Macro**: "Initialize the compendium" calls `game.tor1eCompendium.initWorld()`
- **Command**: Executes full content generation or specific subsystems

## Data Structures

### TOR1E Game System Items

The module creates Items with these `type` values:

- **`skill`**: Character skills with associated stats and groups
- **`virtues`**: Character virtues/traits with cultural categories
- **`reward`**: Character rewards and special abilities
- **`weapon`**: Weapons with combat stats (damage, edge, injury, etc.)
- **`miscellaneous`**: General equipment and tools

### TOR1E Game System Actors

- **NPCs**: Characters organized by cultural groups
- **Adversaries**: Enemies organized by creature type

### Common Data Properties

**Items** typically include:

```javascript
{
  name: "Item Name",
  type: "item_type",
  img: "path/to/icon.png",
  folder: folderId,
  permission: { default: 2 },
  data: {
    description: { value: "<p>Description with page references</p>" },
    // Type-specific properties...
  }
}
```

**Weapons** have specialized properties:

```javascript
data: {
  encumbrance: { value: 1 },
  injury: { value: "14" },
  edge: { value: 10 },
  damage: { value: 5 },
  calledShot: { value: "tor1e.weapons.calledShots.disarm" },
  ranged: { value: false, short: { value: 0 }, medium: { value: 0 }, long: { value: 0 } },
  group: { value: "tor1e.weapons.groups.swords" },
  skill: { name: "Short Sword" },
  twoHandWeapon: { value: false }
}
```

## Development Guidelines

### Code Organization

- Each generator class handles one content category
- Content is organized into logical folder hierarchies
- All content references official rule book pages
- Translation maintains original structure and organization

### Asset Management

- **Icons**: `icons/` folder contains custom macro and entity icons
- **Images**: `images/divers/` contains custom equipment illustrations
- **System Assets**: References `systems/tor1e/assets/images/icons/` for standard icons

### Content Translation Notes

- This is a French-to-English translation project
- Some content may need review for accuracy (mentioned in README)
- Page references include both English and French source books
- Cultural content should maintain Middle-earth authenticity

### Development Utilities

Use `dev.js` methods for:

- **`dev_Delete_all()`**: Clean up generated content during development
- **`dev_ExportActor_to_Json()`**: Export entities for analysis
- **`dev_Debug()`**: Console debugging of entities

### Best Practices

1. **Folder Structure**: Maintain hierarchical organization (Categories → Subcategories → Items)
2. **Naming**: Use descriptive names matching official translations
3. **Icons**: Use appropriate system icons or provide custom ones
4. **Descriptions**: Include rulebook page references
5. **Permissions**: Set `{ default: 2 }` for public access
6. **Data Integrity**: Ensure all required properties are present for each item type

## Module Information

- **Compatibility**: Foundry VTT v11 only
- **Game System**: `tor1e` (The One Ring 1st Edition)
- **Version**: 1.0.3
- **Repository**: https://github.com/foundryserver/tor1e-compendium
- **Original**: Translated from French GitLab project by Ghorin

## Documentation

- [Foundry VTT Module Development Documentation](https://foundryvtt.com/article/module-development/)
- [Foundry VTT Module Packaging Documentation](https://foundryvtt.com/article/package-management/)
- [Foundry VTT v 11 API Documentation](https://foundryvtt.com/api/v11/)
- [Foundry VTT v 13 API Documentation](https://foundryvtt.com/api/v13/)
- [TOR1E System Documentation](https://github.com/gregthompson27/tor1e-foundry-vtt)

## Technologies

- **JavaScript (ES6 Modules)**: Core logic and data generation
- **Foundry VTT API**: Entity creation and management
- **JSON**: Module manifest and pack data
- **WebP**: Optimized icon format
