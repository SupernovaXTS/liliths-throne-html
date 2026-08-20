import bodyEnums from "./body-enums.js";
export default class Body {
  idOf(v, fallback) {
    if (v == null) return fallback || "NONE";
    if (typeof v === "string") return v;
    return v.id || fallback || "NONE";
  }

  enumAt(list, index) {
    if (!list || !list.length) return null;
    var i = Math.max(0, Math.min(list.length - 1, index));
    return list[i];
  }

  orifice(opts) {
    opts = opts || {};
    return {
      wetness: this.idOf(opts.wetness, "TWO_MOIST"),
      capacity: this.idOf(opts.capacity, "TWO"),
      depth: this.idOf(opts.depth, "TWO_AVERAGE"),
      elasticity: this.idOf(opts.elasticity, "THREE_FLEXIBLE"),
      plasticity: this.idOf(opts.plasticity, "THREE_RESILIENT"),
      stretchedCapacity:
        opts.stretchedCapacity != null ? opts.stretchedCapacity : null,
      modifiers: opts.modifiers ? opts.modifiers.slice() : [],
      stuffed: !!opts.stuffed,
      virgin: opts.virgin !== false,
    };
  }

  covering(type, primary, pattern, modifier) {
    return {
      type: type || "HUMAN",
      primary: primary || "LIGHT",
      secondary: primary || "LIGHT",
      pattern: pattern || "NONE",
      modifier: modifier || "SMOOTH",
    };
  }

  emptyOrifice() {
    return this.orifice({});
  }

  createBody(opts) {
    opts = opts || {};
    var fem = !!opts.feminine;
    var hasPenis = opts.hasPenis != null ? !!opts.hasPenis : !fem;
    var hasVagina = opts.hasVagina != null ? !!opts.hasVagina : !!fem;
    var hasBreasts = opts.hasBreasts != null ? !!opts.hasBreasts : !!fem;
    var race = opts.race || "HUMAN";
    var part = (type) => {
      return type || (race === "HUMAN" ? "HUMAN" : race);
    };

    return {
      height: opts.height != null ? opts.height : fem ? 168 : 178,
      femininity: opts.femininity != null ? opts.femininity : fem ? 70 : 30,
      bodySize: this.idOf(opts.bodySize, "TWO_AVERAGE"),
      muscle: this.idOf(opts.muscle, fem ? "ONE_LIGHTLY" : "TWO_TONED"),
      bodyMaterial: this.idOf(opts.bodyMaterial, "FLESH"),
      genitalArrangement: this.idOf(opts.genitalArrangement, "NORMAL"),
      pubicHair: this.idOf(opts.pubicHair, "ZERO_NONE"),
      facialHair: this.idOf(opts.facialHair, "ZERO_NONE"),
      underarmHair: this.idOf(opts.underarmHair, "ZERO_NONE"),
      assHair: this.idOf(opts.assHair, "ZERO_NONE"),
      feral: !!opts.feral,
      subspecies: opts.subspecies || race,
      fleshSubspecies: opts.fleshSubspecies || race,
      raceStage: this.idOf(opts.raceStage, "HUMAN"),
      subspeciesOverride: opts.subspeciesOverride || null,
      halfDemonSubspecies: opts.halfDemonSubspecies || null,
      piercedStomach: !!opts.piercedStomach,
      takesAfterMother: opts.takesAfterMother !== false,
      arm: {
        type: part(opts.armType),
        rows: opts.armRows != null ? opts.armRows : 1,
        underarmHair: this.idOf(opts.underarmHair, "ZERO_NONE"),
      },
      ass: {
        type: part(opts.assType),
        size: this.idOf(opts.assSize, fem ? "THREE" : "TWO"),
        hipSize: this.idOf(opts.hipSize, fem ? "THREE" : "TWO"),
        anus: this.orifice({
          virgin: opts.assVirgin !== false,
          capacity: opts.assCapacity,
        }),
        bleached: !!opts.anusBleached,
      },
      breast: {
        type: part(opts.breastType),
        shape: this.idOf(opts.breastShape, "ROUND"),
        size: this.idOf(opts.breastSize, hasBreasts ? "C" : "FLAT"),
        rows: opts.breastRows != null ? opts.breastRows : 1,
        milkStorage: opts.milkStorage || 0,
        milkStored: opts.milkStored || 0,
        nipple: {
          shape: this.idOf(opts.nippleShape, "NORMAL"),
          size: this.idOf(opts.nippleSize, fem ? "TWO" : "ONE"),
          countPerBreast: opts.nippleCount != null ? opts.nippleCount : 1,
          pierced: !!opts.piercedNipples,
          puffy: !!opts.nipplesPuffy,
          fuckable: !!opts.fuckableNipples,
        },
        areolae: {
          shape: this.idOf(opts.areolaeShape, "NORMAL"),
          size: this.idOf(opts.areolaeSize, fem ? "TWO" : "ONE"),
        },
        orifice: this.orifice({ virgin: true }),
      },
      breastCrotch: {
        type: "NONE",
        shape: "ROUND",
        size: "FLAT",
        rows: 0,
        milkStorage: 0,
        milkStored: 0,
      },
      face: {
        type: part(opts.faceType),
        lipSize: this.idOf(opts.lipSize, fem ? "TWO_FULL" : "ONE_AVERAGE"),
        lipsPuffy: !!opts.lipsPuffy,
        piercedLip: !!opts.piercedLip,
        mouth: this.orifice({ virgin: opts.faceVirgin !== false }),
        tongue: {
          length: opts.tongueLength || 0,
          pierced: !!opts.piercedTongue,
          modifiers: [],
        },
      },
      eye: {
        type: part(opts.eyeType),
        iris: this.idOf(opts.eye, "BROWN"),
        irisShape: this.idOf(opts.irisShape, "ROUND"),
        pupilShape: this.idOf(opts.pupilShape, "ROUND"),
        pairs: opts.eyePairs != null ? opts.eyePairs : 1,
      },
      ear: {
        type: part(opts.earType),
        pierced: !!opts.piercedEar,
      },
      hair: {
        type: part(opts.hairType),
        length: this.idOf(opts.hairLength, fem ? "FOUR_LONG" : "TWO_SHORT"),
        style: this.idOf(opts.hairStyle, fem ? "WAVY" : "MESSY"),
        colour: this.idOf(opts.hair, "BROWN"),
        neckFluff: !!opts.neckFluff,
      },
      leg: {
        type: part(opts.legType),
        configuration: this.idOf(opts.legConfiguration, "BIPEDAL"),
        footStructure: this.idOf(opts.footStructure, "PLANTIGRADE"),
      },
      torso: {
        type: part(opts.torsoType),
        covering: this.covering(race, this.idOf(opts.skin, "LIGHT")),
      },
      antenna: { type: "NONE", length: 0, rows: 0, perRow: 0 },
      horn: {
        type: opts.hornType || "NONE",
        length: opts.hornLength || 0,
        rows: opts.hornRows || 0,
        perRow: 0,
      },
      tail: {
        type: opts.tailType || "NONE",
        count: opts.tailCount || 0,
        girth: "THREE_AVERAGE",
        lengthPercent: 0,
      },
      tentacle: {
        type: "NONE",
        count: 0,
        girth: "THREE_AVERAGE",
        lengthPercent: 0,
      },
      wing: {
        type: opts.wingType || "NONE",
        size: this.idOf(opts.wingSize, "ZERO_NONEXISTENT"),
      },
      spinneret: this.orifice({ virgin: true }),
      penis: {
        type: hasPenis ? part(opts.penisType) : "NONE",
        length: hasPenis
          ? opts.penisLength != null
            ? opts.penisLength
            : 15
          : 0,
        girth: this.idOf(opts.penisGirth, "THREE_AVERAGE"),
        pierced: !!opts.piercedPenis,
        virgin: opts.penisVirgin !== false,
        modifiers: [],
        testicle: {
          size: this.idOf(opts.testicleSize, "TWO"),
          count: opts.testicleCount != null ? opts.testicleCount : 2,
          internal: !!opts.internalTesticles,
          cumStorage: opts.cumStorage || 0,
          cumStored: opts.cumStored || 0,
        },
        urethra: this.orifice({ virgin: true }),
      },
      vagina: {
        type: hasVagina ? part(opts.vaginaType) : "NONE",
        labiaSize: this.idOf(opts.labiaSize, "TWO"),
        clitSize: this.idOf(opts.clitorisSize, "ZERO"),
        clitGirth: this.idOf(opts.clitGirth, "THREE_AVERAGE"),
        pierced: !!opts.piercedVagina,
        hymen: opts.hymen !== false,
        virgin: opts.vaginaVirgin !== false,
        orifice: this.orifice({
          capacity: opts.vaginaCapacity,
          virgin: opts.vaginaVirgin !== false,
        }),
        urethra: this.orifice({ virgin: true }),
      },
      coverings: {
        HUMAN: this.covering("HUMAN", this.idOf(opts.skin, "LIGHT")),
        HAIR: this.covering("HUMAN", this.idOf(opts.hair, "BROWN")),
        EYE_IRISES: this.covering("HUMAN", this.idOf(opts.eye, "BROWN")),
      },
    };
  }

  syncBodyFromCharacter(ch) {
    if (!ch) return ch;
    if (!ch.body && typeof LT.ensureBody === "function") LT.ensureBody(ch);
    var b = ch.body;
    if (!b) return ch;
    if (ch.heightCm != null) b.height = ch.heightCm;
    if (ch.femininityValue != null) b.femininity = ch.femininityValue;
    if (ch.bodySize && ch.bodySize.id) b.bodySize = ch.bodySize.id;
    if (ch.muscle && ch.muscle.id) b.muscle = ch.muscle.id;
    if (ch.skin && b.torso && b.torso.covering) {
      b.torso.covering.primary = ch.skin.id || ch.skin;
      if (b.coverings && b.coverings.HUMAN)
        b.coverings.HUMAN.primary = b.torso.covering.primary;
    }
    if (ch.lipSize && ch.lipSize.id && b.face) b.face.lipSize = ch.lipSize.id;
    if (b.face) b.face.lipsPuffy = !!ch.lipsPuffy;
    if (ch.eye && b.eye) b.eye.iris = ch.eye.id || ch.eye;
    if (ch.hairLength && ch.hairLength.id && b.hair)
      b.hair.length = ch.hairLength.id;
    if (ch.hairStyle && ch.hairStyle.id && b.hair)
      b.hair.style = ch.hairStyle.id;
    if (ch.hair && b.hair) b.hair.colour = ch.hair.id || ch.hair;
    if (ch.breastSize && ch.breastSize.id && b.breast)
      b.breast.size = ch.breastSize.id;
    if (ch.breastShape && ch.breastShape.id && b.breast)
      b.breast.shape = ch.breastShape.id;
    if (ch.nippleSize && ch.nippleSize.id && b.breast && b.breast.nipple)
      b.breast.nipple.size = ch.nippleSize.id;
    if (ch.areolaeSize && ch.areolaeSize.id && b.breast && b.breast.areolae)
      b.breast.areolae.size = ch.areolaeSize.id;
    if (b.breast && b.breast.nipple) b.breast.nipple.puffy = !!ch.nipplesPuffy;
    if (ch.assSize && ch.assSize.id && b.ass) b.ass.size = ch.assSize.id;
    if (ch.hipSize && ch.hipSize.id && b.ass) b.ass.hipSize = ch.hipSize.id;
    if (b.ass) b.ass.bleached = !!ch.anusBleached;
    if (ch.penisLength != null && b.penis) b.penis.length = ch.penisLength;
    if (ch.testicleSize && ch.testicleSize.id && b.penis && b.penis.testicle)
      b.penis.testicle.size = ch.testicleSize.id;
    if (ch.vaginaCapacity && b.vagina && b.vagina.orifice)
      b.vagina.orifice.capacity = ch.vaginaCapacity.id || ch.vaginaCapacity;
    if (ch.labiaSize && ch.labiaSize.id && b.vagina)
      b.vagina.labiaSize = ch.labiaSize.id;
    if (ch.clitorisSize && ch.clitorisSize.id && b.vagina)
      b.vagina.clitSize = ch.clitorisSize.id;
    return ch;
  }

  syncCharacterFromBody(ch) {
    if (!ch || !ch.body) return ch;
    var b = ch.body;
    ch.heightCm = b.height;
    ch.femininityValue = b.femininity;
    ch.bodySize = (LT.BODY_SIZE && LT.BODY_SIZE[b.bodySize]) || ch.bodySize;
    ch.muscle = (LT.MUSCLE && LT.MUSCLE[b.muscle]) || ch.muscle;
    ch.skin =
      typeof bodyEnums.findById === "function"
        ? bodyEnums.findById(LT.SKIN, b.torso.covering.primary)
        : ch.skin;
    ch.lipSize = (LT.LIP && LT.LIP[b.face.lipSize]) || ch.lipSize;
    ch.lipsPuffy = b.face.lipsPuffy;
    ch.eye =
      typeof bodyEnums.findById === "function"
        ? bodyEnums.findById(LT.EYE, b.eye.iris)
        : ch.eye;
    ch.hairLength =
      (LT.HAIR_LENGTH && LT.HAIR_LENGTH[b.hair.length]) || ch.hairLength;
    ch.hairStyle =
      typeof bodyEnums.findById === "function"
        ? bodyEnums.findById(LT.HAIR_STYLE, b.hair.style)
        : ch.hairStyle;
    ch.hair =
      typeof bodyEnums.findById === "function"
        ? bodyEnums.findById(LT.HAIR_COLOUR, b.hair.colour)
        : ch.hair;
    ch.breastSize = (LT.CUP && LT.CUP[b.breast.size]) || ch.breastSize;
    ch.breastShape =
      typeof bodyEnums.findById === "function"
        ? bodyEnums.findById(LT.BREAST_SHAPE, b.breast.shape)
        : ch.breastShape;
    ch.nippleSize =
      (bodyEnums.SIZE5 &&
        bodyEnums.findById(bodyEnums.SIZE5, b.breast.nipple.size)) ||
      ch.nippleSize;
    ch.areolaeSize =
      (bodyEnums.SIZE5 &&
        bodyEnums.findById(bodyEnums.SIZE5, b.breast.areolae.size)) ||
      ch.areolaeSize;
    ch.nipplesPuffy = b.breast.nipple.puffy;
    ch.assSize =
      (bodyEnums.SIZE5 && bodyEnums.findById(bodyEnums.SIZE5, b.ass.size)) ||
      ch.assSize;
    ch.hipSize =
      (bodyEnums.SIZE5 && bodyEnums.findById(bodyEnums.SIZE5, b.ass.hipSize)) ||
      ch.hipSize;
    ch.anusBleached = b.ass.bleached;
    ch.penisLength = b.penis.length;
    ch.testicleSize =
      (bodyEnums.SIZE5 &&
        bodyEnums.findById(bodyEnums.SIZE5, b.penis.testicle.size)) ||
      ch.testicleSize;
    ch.vaginaCapacity =
      (bodyEnums.SIZE5 &&
        bodyEnums.findById(bodyEnums.SIZE5, b.vagina.orifice.capacity)) ||
      ch.vaginaCapacity;
    ch.labiaSize =
      (bodyEnums.SIZE5 &&
        bodyEnums.findById(bodyEnums.SIZE5, b.vagina.labiaSize)) ||
      ch.labiaSize;
    ch.clitorisSize =
      (bodyEnums.SIZE5 &&
        bodyEnums.findById(bodyEnums.SIZE5, b.vagina.clitSize)) ||
      ch.clitorisSize;
    ch.penisPresent = b.penis.type !== "NONE";
    ch.vaginaPresent = b.vagina.type !== "NONE";
    ch.raceName = (b.subspecies || "human").toLowerCase().replace(/_/g, "-");
    ch.fullRace = ch.raceName;
    return ch;
  }

  ensureBody(ch) {
    if (!ch) return null;
    if (!ch.body) {
      ch.body = LT.createBody({
        feminine: ch.isFeminine ? ch.isFeminine() : ch.femininityValue >= 50,
        hasPenis: ch.hasPenis
          ? ch.hasPenis()
          : !!(ch.gender && ch.gender.hasPenis),
        hasVagina: ch.hasVagina
          ? ch.hasVagina()
          : !!(ch.gender && ch.gender.hasVagina),
        hasBreasts: ch.hasBreasts
          ? ch.hasBreasts()
          : !!(ch.gender && ch.gender.hasBreasts),
        height: ch.heightCm,
        femininity: ch.femininityValue,
        bodySize: ch.bodySize,
        muscle: ch.muscle,
        skin: ch.skin,
        lipSize: ch.lipSize,
        lipsPuffy: ch.lipsPuffy,
        eye: ch.eye,
        hairLength: ch.hairLength,
        hairStyle: ch.hairStyle,
        hair: ch.hair,
        breastSize: ch.breastSize,
        breastShape: ch.breastShape,
        nippleSize: ch.nippleSize,
        areolaeSize: ch.areolaeSize,
        nipplesPuffy: ch.nipplesPuffy,
        assSize: ch.assSize,
        hipSize: ch.hipSize,
        anusBleached: ch.anusBleached,
        penisLength: ch.penisLength,
        testicleSize: ch.testicleSize,
        vaginaCapacity: ch.vaginaCapacity && ch.vaginaCapacity.id,
        labiaSize: ch.labiaSize,
        clitorisSize: ch.clitorisSize,
        race: (ch.raceName || "human")
          .toUpperCase()
          .replace(/-/g, "_")
          .replace(/_MORPH$/, "_MORPH"),
      });
    }
    return ch.body;
  }

  ensureCharacterSystems(ch) {
    if (!ch) return ch;
    this.ensureBody(ch);
    if (!ch.fetishes) ch.fetishes = {};
    if (!ch.fetishDesire) ch.fetishDesire = {};
    if (!ch.perks) ch.perks = [];
    if (ch.perkPoints == null) ch.perkPoints = 0;
    if (!ch.attributes) {
      ch.attributes = {
        physique: ch.physique || 10,
        arcane: ch.arcane || 10,
        corruption: ch.corruption || 0,
        fertility: 10,
        virility: 10,
      };
    }
    if (!ch.affection) ch.affection = {};
    if (ch.obedience == null) ch.obedience = 0;
    if (!ch.pregnancy) {
      ch.pregnancy = {
        possibilities: [],
        litter: null,
        incubating: {},
        seconds: 0,
        pregnant: false,
      };
    }
    if (!ch.offspring) ch.offspring = [];
    if (!ch.tattoos) ch.tattoos = {};
    if (!ch.scars) ch.scars = {};
    if (!ch.piercings) {
      ch.piercings = {};
      (bodyEnums.PIERCING_SLOTS || []).forEach((slot) => {
        ch.piercings[slot] = false;
      });
    }
    if (!ch.makeup) {
      ch.makeup = {};
      (bodyEnums.MAKEUP_SLOTS || []).forEach((slot) => {
        ch.makeup[slot.id] = { colour: "NONE", modifier: "MAKEUP" };
      });
    }
    if (!ch.addictions) ch.addictions = {};
    if (!ch.potionAttributes) ch.potionAttributes = {};
    if (ch.enchantmentLimit == null)
      ch.enchantmentLimit = 10 + Math.floor((ch.level || 1) / 2);
    if (!ch.companions) ch.companions = [];
    if (!ch.sexCount) {
      ch.sexCount = {
        sexAsSub: 0,
        sexAsDom: 0,
        timesOrgasmed: 0,
        timesCumsInOthers: 0,
        timesOthersCumIn: 0,
      };
    }
    if (!ch.sex) {
      ch.sex = {
        vaginal: 0,
        anal: 0,
        oral: 0,
        penisVirgin: true,
        vaginaVirgin: true,
      };
    }
    return ch;
  }

  serializeBody(body) {
    if (!body) return null;
    try {
      return JSON.parse(JSON.stringify(body));
    } catch (e) {
      return null;
    }
  }

  applySavedBody(ch, data) {
    if (!ch) return ch;
    if (data && data.body) ch.body = data.body;
    else this.ensureBody(ch);
    if (data) {
      if (data.fetishes) ch.fetishes = data.fetishes;
      if (data.fetishDesire) ch.fetishDesire = data.fetishDesire;
      if (data.perks) ch.perks = data.perks;
      if (data.perkPoints != null) ch.perkPoints = data.perkPoints;
      if (data.attributes) ch.attributes = data.attributes;
      if (data.affection) ch.affection = data.affection;
      if (data.obedience != null) ch.obedience = data.obedience;
      if (data.pregnancy) ch.pregnancy = data.pregnancy;
      if (data.offspring) ch.offspring = data.offspring;
      if (data.tattoos) ch.tattoos = data.tattoos;
      if (data.makeup) ch.makeup = data.makeup;
      if (data.scars) ch.scars = data.scars;
      if (data.piercings) ch.piercings = data.piercings;
      if (data.addictions) ch.addictions = data.addictions;
      if (data.potionAttributes) ch.potionAttributes = data.potionAttributes;
      if (data.enchantmentLimit != null)
        ch.enchantmentLimit = data.enchantmentLimit;
      if (data.companions) ch.companions = data.companions;
      if (data.sexCount) ch.sexCount = data.sexCount;
    }
    this.ensureCharacterSystems(ch);
    this.syncCharacterFromBody(ch);
    return ch;
  }
}
