export default class BodyEnums {
  constructor() {}

  list() {
    var items = [];
    for (var i = 0; i < arguments.length; i++) items.push(arguments[i]);
    return items;
  }

  item(id, name, colour) {
    return { id: id, name: name, colour: colour || "#dddddd" };
  }

  BODY_SIZE = {
    ZERO_SKINNY: this.item("ZERO_SKINNY", "skinny", "#c9dde8"),
    ONE_SLENDER: this.item("ONE_SLENDER", "slender", "#9ec9dc"),
    TWO_AVERAGE: this.item("TWO_AVERAGE", "average", "#88b8d4"),
    THREE_LARGE: this.item("THREE_LARGE", "large", "#6fa4c4"),
    FOUR_HUGE: this.item("FOUR_HUGE", "huge", "#4f88ab"),
  };
  BODY_SIZE_LIST = this.list(
    this.BODY_SIZE.ZERO_SKINNY,
    this.BODY_SIZE.ONE_SLENDER,
    this.BODY_SIZE.TWO_AVERAGE,
    this.BODY_SIZE.THREE_LARGE,
    this.BODY_SIZE.FOUR_HUGE,
  );

  MUSCLE = {
    ZERO_SOFT: this.item("ZERO_SOFT", "soft", "#f0d0d0"),
    ONE_LIGHTLY: this.item("ONE_LIGHTLY", "lightly muscled", "#e8b4b4"),
    TWO_TONED: this.item("TWO_TONED", "toned", "#d88888"),
    THREE_MUSCULAR: this.item("THREE_MUSCULAR", "muscular", "#c06060"),
    FOUR_RIPPED: this.item("FOUR_RIPPED", "ripped", "#a83838"),
  };
  MUSCLE_LIST = this.list(
    this.MUSCLE.ZERO_SOFT,
    this.MUSCLE.ONE_LIGHTLY,
    this.MUSCLE.TWO_TONED,
    this.MUSCLE.THREE_MUSCULAR,
    this.MUSCLE.FOUR_RIPPED,
  );

  LIP = {
    ZERO_THIN: this.item("ZERO_THIN", "thin"),
    ONE_AVERAGE: this.item("ONE_AVERAGE", "average-sized"),
    TWO_FULL: this.item("TWO_FULL", "full"),
    THREE_PLUMP: this.item("THREE_PLUMP", "plump"),
    FOUR_HUGE: this.item("FOUR_HUGE", "huge"),
  };
  LIP_LIST = this.list(
    this.LIP.ZERO_THIN,
    this.LIP.ONE_AVERAGE,
    this.LIP.TWO_FULL,
    this.LIP.THREE_PLUMP,
    this.LIP.FOUR_HUGE,
  );

  HAIR_LENGTH = {
    ZERO_BALD: this.item("ZERO_BALD", "bald"),
    ONE_VERY_SHORT: this.item("ONE_VERY_SHORT", "very short"),
    TWO_SHORT: this.item("TWO_SHORT", "short"),
    THREE_SHOULDER: this.item("THREE_SHOULDER", "shoulder-length"),
    FOUR_LONG: this.item("FOUR_LONG", "long"),
    FIVE_VERY_LONG: this.item("FIVE_VERY_LONG", "very long"),
    SIX_INCREDIBLY: this.item("SIX_INCREDIBLY", "incredibly long"),
  };
  HAIR_LENGTH_LIST = this.list(
    this.HAIR_LENGTH.ZERO_BALD,
    this.HAIR_LENGTH.ONE_VERY_SHORT,
    this.HAIR_LENGTH.TWO_SHORT,
    this.HAIR_LENGTH.THREE_SHOULDER,
    this.HAIR_LENGTH.FOUR_LONG,
    this.HAIR_LENGTH.FIVE_VERY_LONG,
    this.HAIR_LENGTH.SIX_INCREDIBLY,
  );

  HAIR_STYLE = [
    { id: "NONE", name: "none", minLength: 0 },
    { id: "MESSY", name: "messy", minLength: 1 },
    { id: "LOOSE", name: "loose", minLength: 1 },
    { id: "SLICKED_BACK", name: "slicked-back", minLength: 1 },
    { id: "MOHAWK", name: "mohawk", minLength: 1 },
    { id: "AFRO", name: "afro", minLength: 1 },
    { id: "SIDECUT", name: "sidecut", minLength: 1 },
    { id: "PIXIE", name: "pixie-cut", minLength: 1 },
    { id: "BOB_CUT", name: "bob cut", minLength: 2 },
    { id: "STRAIGHT", name: "straight", minLength: 2 },
    { id: "WAVY", name: "wavy", minLength: 2 },
    { id: "CURLY", name: "curly", minLength: 2 },
    { id: "PONYTAIL", name: "ponytail", minLength: 3 },
    { id: "LOW_PONYTAIL", name: "low ponytail", minLength: 3 },
    { id: "BUN", name: "bun", minLength: 3 },
    { id: "CHIGNON", name: "chignon", minLength: 3 },
    { id: "BRAIDED", name: "braided", minLength: 3 },
    { id: "TWIN_TAILS", name: "twin tails", minLength: 3 },
    { id: "TWIN_BRAIDS", name: "twin braids", minLength: 3 },
    { id: "SIDE_BRAIDS", name: "side braids", minLength: 3 },
    { id: "CROWN_BRAID", name: "crown braid", minLength: 3 },
    { id: "HIME_CUT", name: "hime cut", minLength: 3 },
    { id: "TOPKNOT", name: "topknot", minLength: 2 },
    { id: "DREADLOCKS", name: "dreadlocks", minLength: 2 },
  ];

  CUP = {
    FLAT: this.item("FLAT", "flat"),
    AA: this.item("AA", "AA-cup"),
    A: this.item("A", "A-cup"),
    B: this.item("B", "B-cup"),
    C: this.item("C", "C-cup"),
    D: this.item("D", "D-cup"),
    DD: this.item("DD", "DD-cup"),
    E: this.item("E", "E-cup"),
    F: this.item("F", "F-cup"),
    FF: this.item("FF", "FF-cup"),
    G: this.item("G", "G-cup"),
    GG: this.item("GG", "GG-cup"),
    H: this.item("H", "H-cup"),
  };
  CUP_LIST = this.list(
    this.CUP.FLAT,
    this.CUP.AA,
    this.CUP.A,
    this.CUP.B,
    this.CUP.C,
    this.CUP.D,
    this.CUP.DD,
    this.CUP.E,
    this.CUP.F,
    this.CUP.FF,
    this.CUP.G,
    this.CUP.GG,
    this.CUP.H,
  );

  BREAST_SHAPE = [
    this.item("ROUND", "round"),
    this.item("POINTY", "pointy"),
    this.item("PERKY", "perky"),
    this.item("SIDE_SET", "side-set"),
    this.item("WIDE", "wide"),
    this.item("NARROW", "narrow"),
  ];

  SIZE5 = [
    this.item("ZERO", "tiny"),
    this.item("ONE", "small"),
    this.item("TWO", "average-sized"),
    this.item("THREE", "large"),
    this.item("FOUR", "huge"),
  ];

  SKIN = [
    { id: "PALE", name: "pale", hex: "#f3d7c4" },
    { id: "LIGHT", name: "light", hex: "#e8c4a8" },
    { id: "PORCELAIN", name: "porcelain", hex: "#f7e6d8" },
    { id: "ROSY", name: "rosy", hex: "#e8b39a" },
    { id: "OLIVE", name: "olive", hex: "#c49262" },
    { id: "TANNED", name: "tanned", hex: "#c68642" },
    { id: "DARK", name: "dark", hex: "#8d5524" },
    { id: "EBONY", name: "ebony", hex: "#3b2213" },
  ];

  HAIR_COLOUR = [
    { id: "BLACK", name: "black", hex: "#1a1a1a" },
    { id: "DARK_BROWN", name: "dark brown", hex: "#3b2414" },
    { id: "BROWN", name: "brown", hex: "#6b3f1d" },
    { id: "AUBURN", name: "auburn", hex: "#922b05" },
    { id: "GINGER", name: "ginger", hex: "#c45216" },
    { id: "BLONDE", name: "blonde", hex: "#d4b46a" },
    { id: "PLATINUM", name: "platinum", hex: "#e8dcb0" },
    { id: "GREY", name: "grey", hex: "#9a9a9a" },
    { id: "WHITE", name: "white", hex: "#f0f0f0" },
    { id: "PINK", name: "pink", hex: "#ff6bda" },
  ];

  EYE = [
    { id: "BROWN", name: "brown", hex: "#6b3f1d" },
    { id: "HAZEL", name: "hazel", hex: "#8e7618" },
    { id: "GREEN", name: "green", hex: "#3d8c40" },
    { id: "BLUE", name: "blue", hex: "#3b6ea5" },
    { id: "GREY", name: "grey", hex: "#7a7a7a" },
    { id: "AMBER", name: "amber", hex: "#c47b17" },
  ];

  hairLengthIndex = function (id) {
    for (var i = 0; i < HAIR_LENGTH_LIST.length; i++) {
      if (HAIR_LENGTH_LIST[i].id === id) return i;
    }
    return 0;
  };

  bodyShapeOf = function (size, muscle) {
    var si = BODY_SIZE_LIST.indexOf(size);
    var mi = MUSCLE_LIST.indexOf(muscle);
    if (si < 0) si = 2;
    if (mi < 0) mi = 2;
    if (mi >= 3 && si <= 1) return { name: "athletic", colour: "#57be7e" };
    if (mi >= 3) return { name: "muscular", colour: "#c06060" };
    if (si >= 4) return { name: "huge", colour: "#4f88ab" };
    if (si >= 3) return { name: "large", colour: "#6fa4c4" };
    if (si === 0) return { name: "skinny", colour: "#c9dde8" };
    if (si === 1) return { name: "slender", colour: "#9ec9dc" };
    return { name: "average", colour: "#88b8d4" };
  };

  findById = function (arr, id) {
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
    return arr[0];
  };

  e(id, name) {
    return { id: id, name: name };
  }

  BODY_HAIR = [
    this.e("ZERO_NONE", "none"),
    this.e("ONE_STUBBLE", "stubble"),
    this.e("TWO_MANICURED", "manicured"),
    this.e("THREE_TRIMMED", "trimmed"),
    this.e("FOUR_NATURAL", "natural"),
    this.e("FIVE_UNKEMPT", "unkempt"),
    this.e("SIX_BUSHY", "bushy"),
    this.e("SEVEN_WILD", "wild"),
  ];

  BODY_MATERIAL = [
    this.e("FLESH", "flesh"),
    this.e("SLIME", "slime"),
    this.e("FIRE", "fire"),
    this.e("ICE", "ice"),
    this.e("AIR", "air"),
    this.e("EARTH", "earth"),
    this.e("WATER", "water"),
    this.e("ARCANE", "arcane"),
    this.e("RUBBER", "rubber"),
  ];

  GENITAL_ARRANGEMENT = [
    this.e("NORMAL", "normal"),
    this.e("CLOACA", "cloaca"),
    this.e("CLOACA_BEHIND", "rear cloaca"),
  ];

  RACE_STAGE = [
    this.e("HUMAN", "human"),
    this.e("PARTIAL", "partial"),
    this.e("LESSER", "lesser"),
    this.e("GREATER", "greater"),
    this.e("FELINE_MORPH", "feline-morph"),
  ];

  NIPPLE_SHAPE = [
    this.e("NORMAL", "normal"),
    this.e("INVERTED", "inverted"),
    this.e("LIPS", "lips"),
    this.e("VAGINA", "vagina"),
  ];

  AREOLAE_SHAPE = [
    this.e("NORMAL", "round"),
    this.e("HEART", "heart"),
    this.e("STAR", "star"),
  ];

  EYE_SHAPE = [
    this.e("ROUND", "round"),
    this.e("HORIZONTAL", "horizontal"),
    this.e("VERTICAL", "vertical"),
    this.e("HEART", "heart"),
    this.e("STAR", "star"),
  ];

  FOOT_STRUCTURE = [
    this.e("PLANTIGRADE", "plantigrade"),
    this.e("DIGITIGRADE", "digitigrade"),
    this.e("UNGULIGRADE", "unguligrade"),
    this.e("ARACHNOID", "arachnoid"),
  ];

  LEG_CONFIGURATION = [
    this.e("BIPEDAL", "bipedal"),
    this.e("TAUR", "taur"),
    this.e("TAIL_LONG", "serpent"),
    this.e("TAIL", "tail"),
    this.e("ARACHNID", "arachnid"),
    this.e("CEPHALOPOD", "cephalopod"),
    this.e("AVIAN", "avian"),
  ];

  LACTATION = [
    this.e("ZERO_NONE", "none"),
    this.e("ONE_TRICKLE", "a trickle"),
    this.e("TWO_LITTLE", "a small amount"),
    this.e("THREE_DECENT_AMOUNT", "a decent amount"),
    this.e("FOUR_LARGE", "a large amount"),
    this.e("FIVE_HUGE", "a huge amount"),
    this.e("SIX_EXTREME", "an extreme amount"),
    this.e("SEVEN_MONSTROUS", "a monstrous amount"),
  ];

  CUM_PRODUCTION = [
    this.e("ZERO_NONE", "none"),
    this.e("ONE_TRICKLE", "a trickle"),
    this.e("TWO_SMALL_AMOUNT", "a small amount"),
    this.e("THREE_AVERAGE", "an average amount"),
    this.e("FOUR_LARGE", "a large amount"),
    this.e("FIVE_HUGE", "a huge amount"),
    this.e("SIX_EXTREME", "an extreme amount"),
    this.e("SEVEN_MONSTROUS", "a monstrous amount"),
  ];

  CAPACITY = [
    this.e("ZERO_IMPENETRABLE", "impenetrably tight"),
    this.e("ONE_EXTREMELY_TIGHT", "extremely tight"),
    this.e("TWO_TIGHT", "tight"),
    this.e("THREE_SLIGHTLY_LOOSE", "slightly loose"),
    this.e("FOUR_LOOSE", "loose"),
    this.e("FIVE_ROOMY", "roomy"),
    this.e("SIX_STRETCHED_OPEN", "stretched open"),
    this.e("SEVEN_GAPING", "gaping"),
  ];

  AGE_CATEGORY = [
    {
      id: "TEENS_LATE",
      name: "late teens",
      min: 18,
      max: 19,
      colour: "#ff9de0",
    },
    { id: "TWENTIES", name: "twenties", min: 20, max: 29, colour: "#ff6bda" },
    { id: "THIRTIES", name: "thirties", min: 30, max: 39, colour: "#e36f9b" },
    { id: "FORTIES", name: "forties", min: 40, max: 49, colour: "#c06fe3" },
    { id: "FIFTIES", name: "fifties", min: 50, max: 59, colour: "#b98cff" },
    {
      id: "SIXTIES_PLUS",
      name: "sixties or older",
      min: 60,
      max: 200,
      colour: "#888888",
    },
  ];

  WETNESS = [
    this.e("ZERO_DRY", "dry"),
    this.e("ONE_SLIGHTLY_MOIST", "slightly moist"),
    this.e("TWO_MOIST", "moist"),
    this.e("THREE_WET", "wet"),
    this.e("FOUR_SLIMY", "slimy"),
    this.e("FIVE_SLOPPY", "sloppy"),
    this.e("SIX_SOPPING_WET", "sopping wet"),
    this.e("SEVEN_DROOLING", "drooling"),
  ];

  ELASTICITY = [
    this.e("ZERO_UNYIELDING", "unyielding"),
    this.e("ONE_RIGID", "rigid"),
    this.e("TWO_FIRM", "firm"),
    this.e("THREE_FLEXIBLE", "flexible"),
    this.e("FOUR_LIMBER", "limber"),
    this.e("FIVE_STRETCHY", "stretchy"),
    this.e("SIX_SUPPLE", "supple"),
    this.e("SEVEN_ELASTIC", "elastic"),
  ];

  PLASTICITY = [
    this.e("ZERO_RUBBERY", "rubbery"),
    this.e("ONE_SPRINGY", "springy"),
    this.e("TWO_TENSILE", "tensile"),
    this.e("THREE_RESILIENT", "resilient"),
    this.e("FOUR_ACCOMMODATING", "accommodating"),
    this.e("FIVE_YIELDING", "yielding"),
    this.e("SIX_MALLEABLE", "malleable"),
    this.e("SEVEN_MOULDABLE", "mouldable"),
  ];

  ORIFICE_DEPTH = [
    this.e("ZERO_EXTREMELY_SHALLOW", "extremely shallow"),
    this.e("ONE_SHALLOW", "shallow"),
    this.e("TWO_AVERAGE", "average"),
    this.e("THREE_DEEP", "deep"),
    this.e("FOUR_VERY_DEEP", "very deep"),
    this.e("FIVE_CAVERNOUS", "cavernous"),
    this.e("SIX_FATHOMLESS", "fathomless"),
    this.e("SEVEN_UNFATHOMABLE", "unfathomable"),
  ];

  PENETRATION_GIRTH = [
    this.e("ZERO_THIN", "thin"),
    this.e("ONE_SLENDER", "slender"),
    this.e("TWO_NARROW", "narrow"),
    this.e("THREE_AVERAGE", "average"),
    this.e("FOUR_GIRTHY", "girthy"),
    this.e("FIVE_THICK", "thick"),
    this.e("SIX_CHUBBY", "chubby"),
    this.e("SEVEN_FAT", "fat"),
  ];

  WING_SIZE = [
    this.e("ZERO_NONEXISTENT", "none"),
    this.e("ONE_TINY", "tiny"),
    this.e("TWO_SMALL", "small"),
    this.e("THREE_AVERAGE", "average"),
    this.e("FOUR_LARGE", "large"),
    this.e("FIVE_HUGE", "huge"),
    this.e("SIX_MASSIVE", "massive"),
    this.e("SEVEN_UNREASONABLE", "unreasonable"),
  ];

  PART_TYPE = {
    NONE: this.e("NONE", "none"),
    HUMAN: this.e("HUMAN", "human"),
    DEMON: this.e("DEMON", "demon"),
    CAT_MORPH: this.e("CAT_MORPH", "cat-morph"),
    DOG_MORPH: this.e("DOG_MORPH", "dog-morph"),
    WOLF_MORPH: this.e("WOLF_MORPH", "wolf-morph"),
    HORSE_MORPH: this.e("HORSE_MORPH", "horse-morph"),
    FOX_MORPH: this.e("FOX_MORPH", "fox-morph"),
    HARPY: this.e("HARPY", "harpy"),
  };

  RACE = [
    this.e("HUMAN", "human"),
    this.e("DEMON", "demon"),
    this.e("CAT_MORPH", "cat-morph"),
    this.e("DOG_MORPH", "dog-morph"),
    this.e("WOLF_MORPH", "wolf-morph"),
    this.e("HORSE_MORPH", "horse-morph"),
    this.e("FOX_MORPH", "fox-morph"),
    this.e("HARPY", "harpy"),
  ];

  PIERCING_SLOTS = [
    "ear",
    "nose",
    "lip",
    "tongue",
    "navel",
    "nipple",
    "vagina",
    "penis",
  ];

  ORIFICE_MODIFIER = [
    this.e("PUFFY", "puffy"),
    this.e("RIBBED", "internally-ribbed"),
    this.e("TENTACLED", "tentacled"),
    this.e("MUSCLE_CONTROL", "internally-muscled"),
  ];

  PENETRATION_MODIFIER = [
    this.e("SHEATHED", "sheathed"),
    this.e("RIBBED", "ribbed"),
    this.e("TENTACLED", "tentacled"),
    this.e("KNOTTED", "knotted"),
    this.e("BLUNT", "blunt"),
    this.e("TAPERED", "tapered"),
    this.e("FLARED", "flared"),
    this.e("BARBED", "barbed"),
    this.e("VEINY", "veiny"),
    this.e("PREHENSILE", "prehensile"),
    this.e("OVIPOSITOR", "ovipositor"),
  ];

  TONGUE_MODIFIER = [
    this.e("RIBBED", "ribbed"),
    this.e("TENTACLED", "tentacled"),
    this.e("BIFURCATED", "bifurcated"),
    this.e("WIDE", "wide"),
    this.e("FLAT", "flat"),
    this.e("STRONG", "strong"),
    this.e("TAPERED", "tapered"),
  ];

  FLUID_FLAVOUR = [
    this.e("CUM", "cum"),
    this.e("MILK", "milk"),
    this.e("GIRL_CUM", "girlcum"),
    this.e("FLAVOURLESS", "flavourless"),
    this.e("BUBBLEGUM", "bubblegum"),
    this.e("BEER", "beer"),
    this.e("VANILLA", "vanilla"),
    this.e("STRAWBERRY", "strawberry"),
    this.e("CHOCOLATE", "chocolate"),
    this.e("PINEAPPLE", "pineapple"),
    this.e("HONEY", "honey"),
    this.e("MINT", "mint"),
    this.e("CHERRY", "cherry"),
    this.e("COFFEE", "coffee"),
    this.e("TEA", "tea"),
    this.e("MAPLE", "maple"),
    this.e("CINNAMON", "cinnamon"),
    this.e("LEMON", "lemon"),
    this.e("ORANGE", "orange"),
    this.e("GRAPE", "grape"),
    this.e("MELON", "melon"),
    this.e("COCONUT", "coconut"),
    this.e("BLUEBERRY", "blueberry"),
    this.e("BANANA", "banana"),
  ];

  FLUID_MODIFIER = [
    this.e("VISCOUS", "viscous"),
    this.e("STICKY", "sticky"),
    this.e("SLIMY", "slimy"),
    this.e("BUBBLING", "bubbling"),
    this.e("MUSKY", "musky"),
    this.e("MINERAL_OIL", "mineral oil"),
    this.e("ALCOHOLIC", "strongly alcoholic"),
    this.e("ALCOHOLIC_WEAK", "alcoholic"),
    this.e("ADDICTIVE", "addictive"),
    this.e("HALLUCINOGENIC", "psychoactive"),
  ];

  TF_COLOURS = [
    { id: "PALE", name: "pale", hex: "#f3d7c4" },
    { id: "LIGHT", name: "light", hex: "#e8c4a8" },
    { id: "PORCELAIN", name: "porcelain", hex: "#f7e6d8" },
    { id: "ROSY", name: "rosy", hex: "#e8b39a" },
    { id: "OLIVE", name: "olive", hex: "#c49262" },
    { id: "TANNED", name: "tanned", hex: "#c68642" },
    { id: "DARK", name: "dark", hex: "#8d5524" },
    { id: "EBONY", name: "ebony", hex: "#3b2213" },
    { id: "BLACK", name: "black", hex: "#1a1a1a" },
    { id: "WHITE", name: "white", hex: "#f0f0f0" },
    { id: "GREY", name: "grey", hex: "#9a9a9a" },
    { id: "RED", name: "red", hex: "#c41e3a" },
    { id: "CRIMSON", name: "crimson", hex: "#8b0000" },
    { id: "PURPLE", name: "purple", hex: "#7b3fa1" },
    { id: "VIOLET", name: "violet", hex: "#9b59b6" },
    { id: "LILAC", name: "lilac", hex: "#c8a2c8" },
    { id: "PINK", name: "pink", hex: "#ff6bda" },
    { id: "BLUE", name: "blue", hex: "#3b6ea5" },
    { id: "GREEN", name: "green", hex: "#3d8c40" },
    { id: "GOLD", name: "gold", hex: "#d4af37" },
    { id: "SILVER", name: "silver", hex: "#c0c0c0" },
    { id: "AMBER", name: "amber", hex: "#c47b17" },
    { id: "BROWN", name: "brown", hex: "#6b3f1d" },
    { id: "HAZEL", name: "hazel", hex: "#8e7618" },
  ];

  SELF_TRANSFORM_RACES = [
    "DEMON",
    "ANGEL",
    "SLIME",
    "ELEMENTAL",
    "LILIN",
    "ELDER_LILIN",
    "HALF_DEMON",
    "IMP",
  ];

  MAKEUP_SLOTS = [
    {
      id: "MAKEUP_BLUSHER",
      name: "Blusher",
      help: "Blusher (also called rouge) is used to colour the cheeks so as to provide a more youthful appearance, and to emphasise the cheekbones.",
    },
    {
      id: "MAKEUP_LIPSTICK",
      name: "Lipstick",
      help: "Lipstick is used to provide colour, texture, and protection to the wearer's lips.",
    },
    {
      id: "MAKEUP_EYE_LINER",
      name: "Eyeliner",
      help: "Eyeliner is applied around the contours of the eyes to help to define shape or highlight different features.",
    },
    {
      id: "MAKEUP_EYE_SHADOW",
      name: "Eye shadow",
      help: "Eye shadow is used to make the wearer's eyes stand out or look more attractive.",
    },
    {
      id: "MAKEUP_NAIL_POLISH_HANDS",
      name: "Nail polish",
      help: "Nail polish is used to colour and protect the nails on your hands.",
    },
    {
      id: "MAKEUP_NAIL_POLISH_FEET",
      name: "Toenail polish",
      help: "Toenail polish is used to colour and protect the nails on your feet.",
    },
  ];

  MAKEUP_COLOURS = [
    { id: "NONE", name: "none", hex: "#888888" },
    { id: "BLACK", name: "black", hex: "#1a1a1a" },
    { id: "WHITE", name: "white", hex: "#f0f0f0" },
    { id: "RED", name: "red", hex: "#c41e3a" },
    { id: "RED_DARK", name: "dark red", hex: "#8b0000" },
    { id: "RED_LIGHT", name: "light red", hex: "#e35d6a" },
    { id: "PINK", name: "pink", hex: "#ff6bda" },
    { id: "PINK_LIGHT", name: "light pink", hex: "#ffb6d9" },
    { id: "PURPLE", name: "purple", hex: "#7b3fa1" },
    { id: "PURPLE_LIGHT", name: "light purple", hex: "#c8a2c8" },
    { id: "BLUE", name: "blue", hex: "#3b6ea5" },
    { id: "BLUE_LIGHT", name: "light blue", hex: "#7eb6d9" },
    { id: "GOLD", name: "gold", hex: "#d4af37" },
    { id: "SILVER", name: "silver", hex: "#c0c0c0" },
    { id: "CLEAR", name: "clear", hex: "#dddddd" },
  ];

  PIERCING_TYPES = [
    {
      id: "ear",
      name: "Ear",
      help: "A piercing through the earlobe or cartilage.",
    },
    { id: "nose", name: "Nose", help: "A piercing through the nose." },
    { id: "lip", name: "Lip", help: "A piercing through the lip." },
    { id: "tongue", name: "Tongue", help: "A piercing through the tongue." },
    { id: "navel", name: "Navel", help: "A piercing through the navel." },
    { id: "nipple", name: "Nipple", help: "A piercing through the nipple." },
    {
      id: "vagina",
      name: "Vagina",
      help: "A piercing through the clitoral hood or labia.",
      needs: "vagina",
    },
    {
      id: "penis",
      name: "Penis",
      help: "A piercing through the penis.",
      needs: "penis",
    },
  ];

  TATTOO_SLOTS = [
    { id: "HEAD", name: "head" },
    { id: "EYES", name: "upper face" },
    { id: "HAIR", name: "ears" },
    { id: "MOUTH", name: "lower face" },
    { id: "NECK", name: "neck" },
    { id: "TORSO_OVER", name: "upper back" },
    { id: "TORSO_UNDER", name: "lower back" },
    { id: "CHEST", name: "chest" },
    { id: "NIPPLE", name: "nipples" },
    { id: "STOMACH", name: "stomach" },
    { id: "HAND", name: "forearms" },
    { id: "WRIST", name: "upper arms" },
    { id: "FINGER", name: "hands" },
    { id: "HIPS", name: "hips" },
    { id: "ANUS", name: "ass" },
    { id: "LEG", name: "upper leg" },
    { id: "GROIN", name: "lower abdomen" },
    { id: "SOCK", name: "lower leg" },
    { id: "ANKLE", name: "ankles" },
    { id: "FOOT", name: "feet" },
    { id: "HORNS", name: "horns", needs: "horns" },
    { id: "WINGS", name: "wings", needs: "wings" },
    { id: "TAIL", name: "tail", needs: "tail" },
    { id: "PENIS", name: "penis", needs: "penis" },
    { id: "VAGINA", name: "vagina", needs: "vagina" },
  ];

  TATTOO_TYPES = [
    {
      id: "NONE",
      name: "none",
      help: "No design — writing or a counter only.",
    },
    {
      id: "hearts",
      name: "hearts",
      help: "A series of hearts and swirling lines.",
    },
    { id: "flowers", name: "flowers", help: "A spray of flowers." },
    {
      id: "flowers_detailed",
      name: "detailed flowers",
      help: "A detailed floral design.",
    },
    { id: "rose", name: "rose", help: "A single rose." },
    { id: "tribal", name: "tribal", help: "A tribal band." },
    { id: "lines", name: "lines", help: "A set of simple lines." },
    { id: "pentagram", name: "pentagram", help: "A pentagram." },
    { id: "spiral", name: "spiral knot", help: "A spiral Celtic knot." },
    { id: "trinity", name: "trinity knot", help: "A trinity Celtic knot." },
    { id: "spider", name: "spider", help: "A spider." },
    { id: "paw", name: "dog paw", help: "A dog's paw print." },
    { id: "paw_cat", name: "cat paw", help: "A cat's paw print." },
    { id: "hoof", name: "horse-shoe", help: "A horseshoe." },
    { id: "butterflies", name: "butterflies", help: "A pair of butterflies." },
    {
      id: "crossed_blades",
      name: "crossed blades",
      help: "A pair of crossed blades.",
    },
    { id: "barcode", name: "barcode", help: "A barcode." },
  ];
}
