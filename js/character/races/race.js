(function () {
  LT.raceStage = class RaceStage {
    constructor(opts) {
      this.id = opts.id;
      this.parent = opts.parent || null;
      this.parts = opts.parts; // What parts to use for racial inheritence
    }
    getTree() {
      var tree = [];
      tree.push(this); // 0
      if (this.parent) {
        tree.push(this.parent); // 1
        if (this.parent.parent) {
          tree.push(this.parent.parent); // 2
          if (this.parent.parent.parent) {
            tree.push(this.parent.parent.parent); // 3
            if (this.parent.parent.parent.parent) {
              tree.push(this.parent.parent.parent.parent); // 4
            }
          }
        }
      }
      return tree;
    }
    get totalParts() {
      if (this.totalParts) return this.totalParts;
      var tree = this.getTree();
      var parts = {};
      for (var stage of tree) {
        parts = { ...parts, ...stage.parts };
      }
      return (this.totalParts = parts);
    }
  };
  var raceStages = {
    human: new RaceStage({
      id: "human",
      parts: {},
    }),
    partial: new RaceStage({
      id: "partial",
      parent: raceStages.human,
      parts: {
        antenna: true,
        eyes: true,
        ear: true,
        hair: true,
        horn: true,
        wing: true,
        tail: true,
      },
    }),
    minor: new RaceStage({
      id: "minor",
      parent: raceStages.partial,
      parts: {
        ass: true,
        breast: true,
        penis: true,
        vagina: true,
      },
    }),
    lesser: new RaceStage({
      id: "lesser",
      parent: raceStages.minor,
      parts: {
        arms: true,
        legs: true,
      },
    }),
    greater: new RaceStage({
      id: "greater",
      parent: raceStages.lesser,
      parts: {
        face: true,
        torso: true,
        tongue: true,
        tentacle: true,
      },
    }),
  };
  class orientationWeights {
    constructor(opts) {
      this.masculine = {
        gynephilic: opts.masculine.gynephilic,
        ambiphilic: opts.masculine.ambiphilic,
        androphilic: opts.masculine.androphilic,
      };
      this.feminine = {
        gynephilic: opts.feminine.gynephilic,
        ambiphilic: opts.feminine.ambiphilic,
        androphilic: opts.feminine.androphilic,
      };
    }
  }
  class bodyStats {
    constructor(opts) {
      this.male = {
        height: opts.male.height || 0,
        weight: opts.male.weight || 0,
        muscle: opts.male.muscle || 0,
        fat: opts.male.fat || 0,
      };
      this.female = {
        height: opts.female.height || 0,
        weight: opts.female.weight || 0,
        muscle: opts.female.muscle || 0,
        fat: opts.female.fat || 0,
      };
    }
  }
  LT.race = class Race {
    constructor(opts) {
      this.id = opts.id;
      this.name = opts.name;
      this.feminine = opts.feminine;
      this.masculine = opts.masculine;
      this.androgynous = opts.androgynous;
      this.personalityChances = opts.personalityChances; // a list of trait and a chance from 0-1
      this.orientationWeights = new orientationWeights(opts.orientationWeights);
      this.bodyMaterial = opts.bodyMaterial || "flesh";
      this.bodyHair = opts.bodyHair || "hair";
      this.genitalArrangement = opts.genitalArrangement || "normal";
      this.bodyStats = new bodyStats(opts.bodyStats); //
    }
  };
})();
