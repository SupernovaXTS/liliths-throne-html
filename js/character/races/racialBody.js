(function () {
  class penisOpts {
    constructor(opts) {
      this.id = opts.id;
      this.type = opts.type || "null";
      this.length = opts.length || 0;
      this.girth = opts.girth || 0;
      this.testiclesSize = opts.testiclesSize || 0;
      this.testiclesCount = opts.testiclesCount || 2;
      this.cumProduction = opts.cumProduction || 0;
      this.options = opts.options || [];
    }
  }
  class breastOpts extends orificeOpts {
    constructor(opts) {
      const oOpts = {
        id: opts.id,
        type: opts.type,
        capacity: opts.capacity,
        elasticity: opts.elasticity,
        depth: opts.depth,
        wetness: opts.wetness,
        plasticity: opts.plasticity,
      };
      super(oOpts);
      this.id = opts.id;
      this.type = opts.type || "null";
      this.size = opts.size || 0;
      this.rows = opts.rows || 1;
      this.nippleSize = opts.nippleSize || 0;
      this.nippleShape = opts.nippleShape || "normal";
      this.areolaeSize = opts.areolaeSize || 0;
      this.areolaeShape = opts.areolaeShape || "normal";
      this.nippleCount = opts.nippleCount || 1; // Nipple count per breast, not total nipples
    }
  }
  class orificeOpts {
    constructor(opts) {
      this.id = opts.id;
      this.type = opts.type || "null";
      this.capacity = opts.capacity || 1;
      this.elasticity = opts.elasticity || 1;
      this.depth = opts.depth || 1;
      this.wetness = opts.wetness || 1;
      this.plasticity = opts.plasticity || 1;
    }
  }
  class bodyOpts {
    constructor(opts) {
      // Antennae
      this.antennaTypes = opts.antennaTypes || [NONE];
      this.antennaLengthFem = opts.antennaLengthFem || 0;
      this.antennaLengthMasc = opts.antennaLengthMasc || 0;
      // Arms
      this.armType = opts.armType || "null";
      this.armRows = opts.armRows || 1;
      // Ass
      this.assType = opts.assType || "null";
      this.hipSizeMasc = opts.hipSizeMasc || 2;
      this.hipSizeFem = opts.hipSizeFem || 4;
      this.assOpts = new orificeOpts({
        id: "ass",
        type: this.assType,
        capacity: opts.assOpts?.capacity || 1,
        elasticity: opts.assOpts?.elasticity || 1,
        wetness: opts.assOpts?.wetness || 1,
        plasticity: opts.assOpts?.plasticity || 1,
      });

      // Breasts
      this.breastType = opts.breastType || "null";
      this.breastShapes = opts.breastShapes || ["round"];
      this.maleBreastOpts = new breastOpts({
        id: "breast",
        type: this.breastType,
        size: opts.maleBreastOpts?.size || 0,
        rows: opts.maleBreastOpts?.rows || 1,
        nippleSize: opts.maleBreastOpts?.nippleSize || 0,
        nippleShape: opts.maleBreastOpts?.nippleShape || "normal",
        areolaeSize: opts.maleBreastOpts?.areolaeSize || 0,
        areolaeShape: opts.maleBreastOpts?.areolaeShape || "normal",
        nippleCount: opts.maleBreastOpts?.nippleCount || 1,
        capacity: opts.maleBreastOpts?.capacity || 1,
        elasticity: opts.maleBreastOpts?.elasticity || 1,
        depth: opts.maleBreastOpts?.depth || 1,
        wetness: opts.maleBreastOpts?.wetness || 1,
        plasticity: opts.maleBreastOpts?.plasticity || 1,
      });
      this.femaleBreastOpts = new breastOpts({
        id: "breast",
        type: this.breastType,
        size: opts.femaleBreastOpts?.size || 0,
        rows: opts.femaleBreastOpts?.rows || 1,
        nippleSize: opts.femaleBreastOpts?.nippleSize || 0,
        nippleShape: opts.femaleBreastOpts?.nippleShape || "normal",
        areolaeSize: opts.femaleBreastOpts?.areolaeSize || 0,
        areolaeShape: opts.femaleBreastOpts?.areolaeShape || "normal",
        nippleCount: opts.femaleBreastOpts?.nippleCount || 1,
        capacity: opts.femaleBreastOpts?.capacity || 1,
        elasticity: opts.femaleBreastOpts?.elasticity || 1,
        depth: opts.femaleBreastOpts?.depth || 1,
        wetness: opts.femaleBreastOpts?.wetness || 1,
        plasticity: opts.femaleBreastOpts?.plasticity || 1,
      });
      this.crotchBreastsType = opts.crotchBreastsType || "null";
      this.crotchBreastShapes = opts.crotchBreastShapes || ["round"];
      this.crotchBreastOpts = new breastOpts({
        id: "crotchBreast",
        type: this.crotchBreastsType,
        size: opts.crotchBreastOpts?.size || 0,
        rows: opts.crotchBreastOpts?.rows || 1,
        nippleSize: opts.crotchBreastOpts?.nippleSize || 0,
        nippleShape: opts.crotchBreastOpts?.nippleShape || "normal",
        areolaeSize: opts.crotchBreastOpts?.areolaeSize || 0,
        areolaeShape: opts.crotchBreastOpts?.areolaeShape || "normal",
        nippleCount: opts.crotchBreastOpts?.nippleCount || 1,
        capacity: opts.crotchBreastOpts?.capacity || 1,
        elasticity: opts.crotchBreastOpts?.elasticity || 1,
        depth: opts.crotchBreastOpts?.depth || 1,
        wetness: opts.crotchBreastOpts?.wetness || 1,
        plasticity: opts.crotchBreastOpts?.plasticity || 1,
      });
      // face
      this.faceType = opts.faceType || "null";
      this.earType = opts.earType || "null";
      this.eyeType = opts.eyeType || "null";
      this.lipSizeMasc = opts.lipSizeMasc || 1;
      this.lipSizeFem = opts.lipSizeFem || 2;

      // hair
      this.hairType = opts.hairType || "null";
      this.hairLengthMasc = opts.hairLengthMasc || 0;
      this.hairLengthFem = opts.hairLengthFem || 0;

      // horns

      this.hornTypes = opts.hornTypes || [NONE];
      this.hornLengthMasc = opts.hornLengthMasc || 0;
      this.hornLengthFem = opts.hornLengthFem || 0;

      // legs
      this.legsType = opts.legsType || "null";
      this.legsConfiguration = opts.legsConfiguration || "BIPEDAL";

      // penis
      this.penisOpts = new penisOpts({
        id: "penis",
        type: opts.penisOpts?.type || "null",
        length: opts.penisOpts?.length || 0,
        girth: opts.penisOpts?.girth || 0,
        testicleSize: opts.penisOpts?.testicleSize || 0,
        testicleCount: opts.penisOpts?.testicleCount || 0,
        cumProduction: opts.penisOpts?.cumProduction || 0,
      });

      // tail
      this.tailTypes = opts.tailTypes || [NONE];
      this.tailCount = opts.tailCount || 0;
      this.tailGirth = opts.tailGirth || 0;
      this.tailLength = opts.tailLength || 0;

      // tentacles
      this.tentacleType = NONE; // Adjust this if we add another way to get tentacles

      // torso
      this.torsoType = opts.torsoType || "null";

      // Vagina
      this.vaginaType = opts.vaginaType || "null";
      this.clitSize = opts.clitSize || 0;
      this.clitGirth = opts.clitGirth || 0;
      this.vaginaOpts = new orificeOpts({
        id: "vagina",
        type: opts.vaginaOpts?.type || "null",
        capacity: opts.vaginaOpts?.capacity || 0,
        depth: opts.vaginaOpts?.depth || 0,
        elasticity: opts.vaginaOpts?.elasticity || 0,
        wetness: opts.vaginaOpts?.wetness || 0,
      });
    }
  }
})();
