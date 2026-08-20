import Enums from "./enums.js";
import bodyEnums from "./bodyEnums.js";
export default class Character {
  constructor(opts) {
    opts = opts || {};
    this.id = opts.id;
    this.player = !!opts.player;
    this.names = {
      masculine: "Unknown",
      androgynous: "Unknown",
      feminine: "Unknown",
    };
    this.surname = "";
    this.gender = Enums.Gender.FEMALE;
    this.femininityValue = 70;
    this.orientation = Enums.Orientation.AMBIPHILIC;
    this.personality = {};
    this.birthday = new Date(1997, 5, 15);
    this.level = 1;
    this.experience = 0;
    this.experienceForLevel = 10;
    this.physique = 10;
    this.arcane = 10;
    this.maxHealth = this.maxHealthOf();
    this.health = this.maxHealth;
    this.maxMana = this.maxManaOf();
    this.mana = this.maxMana;
    this.corruption = 0;
    this.arousal = 0;
    this.lust = 10;
    this.essences = 0;
    this.knownSpells = [];
    this.items = [];
    this.money = 0;
    this.location = null;
    this.equipped = {};
    this.wardrobe = [];
    this.mainWeapon = null;
    this.offhandWeapon = null;
    this.weapons = [];
    this.occupation = null;
    this.sex = {
      vaginal: 0,
      anal: 0,
      oral: 0,
      penisVirgin: true,
      vaginaVirgin: true,
    };
    this.applyHumanDefaults();
  }

  isPlayer() {
    return this.player;
  }

  isFeminine() {
    return this.femininityValue >= 50 || this.gender.feminine;
  }

  getFemininity() {
    return LT.femininityFromValue(this.femininityValue);
  }

  getFemininityValue() {
    return this.femininityValue;
  }

  setFemininity(entry) {
    this.femininityValue = typeof entry === "number" ? entry : entry.value;
  }

  getGender() {
    return this.gender;
  }

  setGender(gender) {
    var changed = this.gender !== gender;
    this.gender = gender;
    if (gender === Enums.Gender.FEMALE && this.femininityValue < 50)
      this.femininityValue = 70;
    if (gender === Enums.Gender.MALE && this.femininityValue > 50)
      this.femininityValue = 30;
    this.penisPresent = !!(gender && gender.hasPenis);
    this.vaginaPresent = !!(gender && gender.hasVagina);
    if (changed) this.applyHumanDefaults();
  }

  hasFetish(id) {
    return !!(this.fetishes && this.fetishes[id]);
  }

  hasPerk(id) {
    return !!(this.perks && this.perks[id]);
  }

  hasPenis() {
    if (this.body && this.body.penis) return this.body.penis.type !== "NONE";
    if (this.penisPresent != null) return !!this.penisPresent;
    return !!(this.gender && this.gender.hasPenis);
  }

  hasVagina() {
    if (this.body && this.body.vagina) return this.body.vagina.type !== "NONE";
    if (this.vaginaPresent != null) return !!this.vaginaPresent;
    return !!(this.gender && this.gender.hasVagina);
  }

  hasBreasts() {
    return (
      !!(this.gender && this.gender.hasBreasts) ||
      (this.breastSize && this.breastSize.id !== "FLAT")
    );
  }

  applyHumanDefaults() {
    var f = this.isFeminine();
    this.heightCm = f ? 168 : 178;
    this.skin = bodyEnums.findById(Enums.SKIN, "LIGHT");
    this.bodySize = Enums.BODY_SIZE.TWO_AVERAGE;
    this.muscle = f ? Enums.MUSCLE.ONE_LIGHTLY : Enums.MUSCLE.TWO_TONED;
    this.lipSize = f ? Enums.LIP.TWO_FULL : Enums.LIP.ONE_AVERAGE;
    this.lipsPuffy = false;
    this.eye = bodyEnums.findById(Enums.EYE, "BROWN");
    this.hairLength = f
      ? Enums.HAIR_LENGTH.FOUR_LONG
      : Enums.HAIR_LENGTH.TWO_SHORT;
    this.hairStyle = f
      ? bodyEnums.findById(Enums.HAIR_STYLE, "WAVY")
      : bodyEnums.findById(Enums.HAIR_STYLE, "MESSY");
    this.hair = bodyEnums.findById(Enums.HAIR_COLOUR, "BROWN");
    this.breastSize = f ? Enums.CUP.C : Enums.CUP.FLAT;
    this.breastShape = bodyEnums.findById(Enums.BREAST_SHAPE, "ROUND");
    this.nippleSize = bodyEnums.SIZE5[f ? 2 : 1];
    this.areolaeSize = bodyEnums.SIZE5[f ? 2 : 1];
    this.nipplesPuffy = false;
    this.assSize = bodyEnums.SIZE5[f ? 3 : 2];
    this.hipSize = bodyEnums.SIZE5[f ? 3 : 2];
    this.anusBleached = false;
    this.penisLength = 15;
    this.testicleSize = bodyEnums.SIZE5[2];
    this.vaginaCapacity = bodyEnums.SIZE5[2];
    this.labiaSize = bodyEnums.SIZE5[2];
    this.clitorisSize = bodyEnums.SIZE5[0];
    if (typeof LT.createBody === "function") {
      this.body = LT.createBody({
        feminine: f,
        hasPenis:
          this.penisPresent != null
            ? !!this.penisPresent
            : !!(this.gender && this.gender.hasPenis),
        hasVagina:
          this.vaginaPresent != null
            ? !!this.vaginaPresent
            : !!(this.gender && this.gender.hasVagina),
        hasBreasts: !!(this.gender && this.gender.hasBreasts) || f,
        height: this.heightCm,
        femininity: this.femininityValue,
        bodySize: this.bodySize,
        muscle: this.muscle,
        skin: this.skin,
        lipSize: this.lipSize,
        lipsPuffy: this.lipsPuffy,
        eye: this.eye,
        hairLength: this.hairLength,
        hairStyle: this.hairStyle,
        hair: this.hair,
        breastSize: this.breastSize,
        breastShape: this.breastShape,
        nippleSize: this.nippleSize,
        areolaeSize: this.areolaeSize,
        nipplesPuffy: this.nipplesPuffy,
        assSize: this.assSize,
        hipSize: this.hipSize,
        anusBleached: this.anusBleached,
        penisLength: this.penisLength,
        testicleSize: this.testicleSize,
        vaginaCapacity: this.vaginaCapacity && this.vaginaCapacity.id,
        labiaSize: this.labiaSize,
        clitorisSize: this.clitorisSize,
        race: "HUMAN",
      });
    }
    if (typeof this.ensureCharacterSystems === "function")
      this.ensureCharacterSystems(this);
  }

  getBodyShape() {
    return LT.bodyShapeOf(this.bodySize, this.muscle);
  }

  describeBody() {
    return LT.describeBody(this);
  }

  getName() {
    if (this.femininityValue < 40) return this.names.masculine;
    if (this.femininityValue > 60) return this.names.feminine;
    return this.names.androgynous;
  }

  setName(masculine, androgynous, feminine) {
    this.names = {
      masculine: masculine,
      androgynous: androgynous || masculine,
      feminine: feminine || masculine,
    };
  }

  getRaceName() {
    var raw = this.fullRace || this.raceName || "human";
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  }

  getAgeValue(now) {
    now =
      now ||
      (typeof LT.gameNow === "function" ? LT.gameNow() : new Date(2019, 9, 1));
    var age = now.getFullYear() - this.birthday.getFullYear();
    var md = now.getMonth() * 32 + now.getDate();
    var bd = this.birthday.getMonth() * 32 + this.birthday.getDate();
    if (md < bd) age -= 1;
    return age;
  }

  setAge(age, now) {
    now =
      now ||
      (typeof LT.gameNow === "function" ? LT.gameNow() : new Date(2019, 9, 1));
    var clamped = Math.max(18, Math.min(50, age));
    var month = this.birthday.getMonth();
    var date = this.birthday.getDate();
    var year = now.getFullYear() - clamped;
    var md = now.getMonth() * 32 + now.getDate();
    var bd = month * 32 + date;
    if (md < bd) year -= 1;
    this.birthday = new Date(year, month, date);
  }

  hasPersonalityTrait(id) {
    return !!this.personality[id];
  }

  togglePersonality(id) {
    var trait = null;
    for (var i = 0; i < LT.PERSONALITY.length; i++) {
      if (LT.PERSONALITY[i].id === id) {
        trait = LT.PERSONALITY[i];
        break;
      }
    }
    if (!trait) return;
    if (this.personality[id]) {
      delete this.personality[id];
      return;
    }
    var exclusive = trait.exclusive || [];
    for (var j = 0; j < exclusive.length; j++)
      delete this.personality[exclusive[j]];
    this.personality[id] = true;
  }

  she() {
    return this.isFeminine() ? "she" : "he";
  }

  her() {
    return this.isFeminine() ? "her" : "his";
  }

  getGenderColour() {
    return this.gender.colour || LT.Colour.ANDROGYNOUS;
  }
  statusPart(key) {
    if (typeof LT.statusBonus !== "function") return 0;
    return LT.statusBonus(this)[key] || 0;
  }

  maxHealthOf() {
    var bonus =
      ((this.enchantBonus && this.enchantBonus.health) || 0) +
      this.statusPart("health");
    return (
      10 + 5 * (this.level || 1) + 2 * (this.effectivePhysique() || 10) + bonus
    );
  }

  maxManaOf() {
    var bonus =
      ((this.enchantBonus && this.enchantBonus.mana) || 0) +
      this.statusPart("mana");
    return (
      5 + 2 * (this.level || 1) + 5 * (this.effectiveArcane() || 10) + bonus
    );
  }

  effectivePhysique() {
    return (
      (this.physique || 10) +
      ((this.enchantBonus && this.enchantBonus.physique) || 0)
    );
  }

  effectiveArcane() {
    return (
      (this.arcane || 10) +
      ((this.enchantBonus && this.enchantBonus.arcane) || 0)
    );
  }

  effectiveCorruption() {
    return (
      (this.corruption || 0) +
      ((this.enchantBonus && this.enchantBonus.corruption) || 0)
    );
  }

  experienceNeeded() {
    return (this.level || 1) * 10;
  }

  unarmedDamage() {
    var bonus = (this.enchantBonus && this.enchantBonus.damageUnarmed) || 0;
    return Math.max(
      1,
      2 + Math.floor((this.effectivePhysique() || 10) / 5) + bonus,
    );
  }

  refreshVitals(fill) {
    if (!this) return this;
    var prevMax = this.maxHealth || 0;
    var prevMaxMana = this.maxMana || 0;
    this.maxHealth = this.maxHealthOf();
    this.maxMana = this.maxManaOf();
    this.experienceForLevel = this.experienceNeeded();
    if (fill || this.health == null) this.health = this.maxHealth;
    else if (this.maxHealth > prevMax) this.health += this.maxHealth - prevMax;
    if (this.health > this.maxHealth) this.health = this.maxHealth;
    if (this.health < 0) this.health = 0;
    if (fill || this.mana == null) this.mana = this.maxMana;
    else if (this.maxMana > prevMaxMana)
      this.mana += this.maxMana - prevMaxMana;
    if (this.mana > this.maxMana) this.mana = this.maxMana;
    if (this.mana < 0) this.mana = 0;
    return this;
  }

  incrementHealth(amount) {
    if (!this) return 0;
    this.refreshVitals();
    var before = this.health || 0;
    this.health = Math.max(
      0,
      Math.min(this.maxHealth || 0, before + (amount || 0)),
    );
    return this.health - before;
  }

  incrementMana(amount) {
    if (!this) return 0;
    this.refreshVitals();
    var before = this.mana || 0;
    this.mana = Math.max(
      0,
      Math.min(this.maxMana || 0, before + (amount || 0)),
    );
    return this.mana - before;
  }

  incrementExperience(amount) {
    var p = LT.game && LT.game.player;
    if (!p || !amount) return "";
    if ((p.level || 1) >= 50) {
      p.experience = 0;
      return "";
    }
    p.experience = (p.experience || 0) + amount;
    var html =
      "<p style='text-align:center;'>You have gained <b style='color:" +
      LT.Colour.ATTRIBUTE_EXPERIENCE +
      ";'>" +
      amount +
      "</b> experience!</p>";
    while (
      (p.level || 1) < 50 &&
      p.experience >= LT.experienceNeeded(p.level)
    ) {
      p.experience -= LT.experienceNeeded(p.level);
      p.level += 1;
      p.refreshVitals();
      html +=
        "<p style='text-align:center;'><b style='color:" +
        LT.Colour.GENERIC_EXCELLENT +
        ";'>Level up!</b> You are now level " +
        p.level +
        "!</p>";
    }
    p.experienceForLevel = LT.experienceNeeded(p.level);
    return html;
  }

  createNewPlayer() {
    var p = new Character({ id: "player", player: true });
    p.setGender(LT.Gender.FEMALE);
    p.setFemininity(LT.Femininity.FEMININE);
    p.orientation = LT.Orientation.AMBIPHILIC;
    p.setName("Unknown", "Unknown", "Unknown");
    p.essences = 10;
    p.knownSpells = [];
    p.refreshVitals(true);
    return p;
  }

  describeBody() {
    if (!this) return "";
    var fem = this.getFemininity();
    var shape = this.getBodyShape();
    var heightFt = Math.floor(this.heightCm / 30.48);
    var heightIn = Math.round((this.heightCm / 2.54) % 12);
    var she = this.she();
    var her = this.her();
    var hairBit =
      this.hairLength.id === "ZERO_BALD"
        ? she.charAt(0).toUpperCase() + she.slice(1) + " is bald."
        : she.charAt(0).toUpperCase() +
          she.slice(1) +
          " has " +
          this.hairLength.name +
          ", " +
          this.hairStyle.name +
          " <span style='color:" +
          this.hair.hex +
          ";'>" +
          this.hair.name +
          "</span> hair.";
    var chest =
      this.breastSize.id === "FLAT"
        ? she.charAt(0).toUpperCase() + she.slice(1) + " has a flat chest."
        : she.charAt(0).toUpperCase() +
          she.slice(1) +
          " has " +
          this.breastShape.name +
          " " +
          this.breastSize.name +
          " breasts.";
    var genitals;
    if (this.hasPenis() && this.hasVagina()) {
      genitals =
        she.charAt(0).toUpperCase() +
        she.slice(1) +
        " has a " +
        this.penisLength +
        "-cm penis and a vagina with " +
        this.labiaSize.name +
        " labia.";
    } else if (this.hasPenis()) {
      genitals =
        she.charAt(0).toUpperCase() +
        she.slice(1) +
        " has a " +
        this.penisLength +
        "-cm penis and " +
        this.testicleSize.name +
        " testicles.";
    } else if (this.hasVagina()) {
      genitals =
        she.charAt(0).toUpperCase() +
        she.slice(1) +
        " has a vagina with " +
        this.labiaSize.name +
        " labia.";
    } else {
      genitals =
        she.charAt(0).toUpperCase() + she.slice(1) + " has a smooth mound.";
    }
    var html =
      "<p>You are " +
      LT.article(fem.name.toLowerCase()) +
      " <span style='color:" +
      fem.colour +
      ";'>" +
      fem.name.toLowerCase() +
      "</span> " +
      this.getGender().name +
      ", standing " +
      this.heightCm +
      "cm (" +
      heightFt +
      "'" +
      heightIn +
      '") tall. Your body is <span style="color:' +
      shape.colour +
      ';">' +
      shape.name +
      "</span> — " +
      this.bodySize.name +
      " and " +
      this.muscle.name +
      " — with <span style='color:" +
      this.skin.hex +
      ";'>" +
      this.skin.name +
      "</span> skin.</p><p>" +
      hairBit +
      " " +
      she.charAt(0).toUpperCase() +
      she.slice(1) +
      " has <span style='color:" +
      this.eye.hex +
      ";'>" +
      this.eye.name +
      "</span> eyes and " +
      this.lipSize.name +
      (this.lipsPuffy ? ", puffy" : "") +
      " lips.</p><p>" +
      chest +
      " " +
      her.charAt(0).toUpperCase() +
      her.slice(1) +
      " ass is " +
      this.assSize.name +
      ", and " +
      her +
      " hips are " +
      this.hipSize.name +
      ". " +
      genitals +
      "</p>";
    if (typeof LT.isVisiblyPregnant === "function" && LT.isVisiblyPregnant(p)) {
      html +=
        "<p>Your belly is visibly swollen. You are <b style='color:" +
        LT.Colour.GENERIC_SEX +
        ";'>" +
        (LT.hasStatusEffect(p, "PREGNANT_3")
          ? "ready to give birth"
          : LT.hasStatusEffect(p, "PREGNANT_2")
            ? "heavily pregnant"
            : "pregnant") +
        "</b>.</p>";
    }
    if (p.body) {
      var extras = [];
      function partLabel(id) {
        var t = LT.PART_TYPE && LT.PART_TYPE[id];
        return t
          ? t.name
          : String(id || "")
              .toLowerCase()
              .replace(/_/g, "-");
      }
      if (p.body.face && p.body.face.type && p.body.face.type !== "HUMAN")
        extras.push("a " + partLabel(p.body.face.type) + " face");
      if (
        p.body.ear &&
        p.body.ear.type &&
        p.body.ear.type !== "HUMAN" &&
        p.body.ear.type !== "NONE"
      )
        extras.push(partLabel(p.body.ear.type) + " ears");
      if (p.body.horn && p.body.horn.type && p.body.horn.type !== "NONE")
        extras.push(partLabel(p.body.horn.type) + " horns");
      if (p.body.tail && p.body.tail.type && p.body.tail.type !== "NONE")
        extras.push("a " + partLabel(p.body.tail.type) + " tail");
      if (p.body.wing && p.body.wing.type && p.body.wing.type !== "NONE")
        extras.push(partLabel(p.body.wing.type) + " wings");
      if (extras.length) {
        html += "<p>Racial features: " + extras.join(", ") + ".</p>";
      }
    }
    var worn = [];
    if (p.makeup) {
      Object.keys(p.makeup).forEach(function (key) {
        var rec = p.makeup[key];
        if (rec && rec.colour && rec.colour !== "NONE") {
          var slot = bodyEnums.findById(LT.MAKEUP_SLOTS, key);
          worn.push(
            (slot ? slot.name.toLowerCase() : key.toLowerCase()) +
              " (" +
              rec.colour.toLowerCase().replace(/_/g, " ") +
              ")",
          );
        }
      });
    }
    if (worn.length) html += "<p>Makeup: " + worn.join(", ") + ".</p>";
    var pierced = [];
    if (p.piercings) {
      Object.keys(p.piercings).forEach(function (key) {
        if (p.piercings[key]) pierced.push(key);
      });
    }
    if (pierced.length) html += "<p>Piercings: " + pierced.join(", ") + ".</p>";
    if (p.tattoos) {
      var tats = [];
      Object.keys(p.tattoos).forEach(function (key) {
        var t = p.tattoos[key];
        if (t)
          tats.push(
            (t.name || t.type || "tattoo") +
              " on the " +
              key.toLowerCase().replace(/_/g, " "),
          );
      });
      if (tats.length) html += "<p>Tattoos: " + tats.join("; ") + ".</p>";
    }
    return html;
  }
}
