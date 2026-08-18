(function () {
  lt.races.tail = class Tail extends lt.races.bodyPart {
    // Abstract tail class. All tail parts should extend this class.
    constructor(opts) {
      super(opts);
    }
  };
})();
