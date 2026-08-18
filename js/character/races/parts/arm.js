(function () {
  lt.races.arm = class Arm extends lt.races.bodyPart {
    // Abstract arm class. All arm parts should extend this class.
    constructor(opts) {
      super(opts);
      this.id = opts.id || null;
      this.type = "arm";
      this.handNamesSingular = opts.handNamesSingular || [];
      this.handNamesPlural = opts.handNamesPlural || [];
      this.handDescriptorsMasc = opts.handDescriptorsMasc || [];
      this.handDescriptorsFem = opts.handDescriptorsFem || [];
      this.fingerNamesSingular = opts.fingerNamesSingular || [];
      this.fingerNamesPlural = opts.fingerNamesPlural || [];
      this.fingerDescriptorsMasc = opts.fingerDescriptorsMasc || [];
      this.fingerDescriptorsFem = opts.fingerDescriptorsFem || [];
      this.allowsFlight = opts.allowsFlight || false;
    }
  };
})();
