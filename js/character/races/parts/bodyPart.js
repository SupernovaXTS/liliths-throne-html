(function () {
  lt.races.bodyPart = class BodyPart {
    // Abstract bodypart class. All body parts should extend this class.
    constructor(opts) {
      this.id = opts.id || null;
      this.race = opts.race || null; // ID of the race this part belongs to
      this.type = opts.type || null;
      this.tags = opts.tags || [];
      this.namesSingular = opts.namesSingular || [];
      this.namesPlural = opts.namesPlural || [];
      this.descriptorsMasc = opts.descriptorsMasc || [];
      this.descriptorsFem = opts.descriptorsFem || [];
      this.coveringType = opts.coveringType || null;
      this.transformationName = opts.transformationName || null;
      this.transformationDescription = opts.transformationDescription || null;
      this.bodyDescription = opts.bodyDescription || null;
    }
  };
})();
