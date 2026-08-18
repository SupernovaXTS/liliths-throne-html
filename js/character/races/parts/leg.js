(function () {
  lt.races.leg = class Leg extends lt.races.bodyPart {
    // Abstract leg class. All leg parts should extend this class.
    constructor(opts) {
      super(opts);
    }
  };
})();
