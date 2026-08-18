(function () {
  lt.races.orificePart = class OrificePart extends lt.races.bodyPart {
    // Abstract orifice part class. All orifice parts should extend this class.
    constructor(opts) {
      super(opts);
      this.defaultOrificeModifiers = opts.defaultOrificeModifiers || [];
    }
  };
})();
