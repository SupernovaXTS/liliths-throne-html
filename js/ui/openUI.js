export default class UI {
  registry = {};
  activeByTarget = {
    stage: null,
    left: null,
    right: null,
    overlay: null,
  };

  inferTarget(id) {
    var el = document.querySelector('[data-ui="' + id + '"]');
    return (el && el.getAttribute("data-ui-target")) || "stage";
  }

  hideSection(id) {
    var el = document.querySelector('[data-ui="' + id + '"]');
    if (el) el.hidden = true;
  }

  showSection(id) {
    var el = document.querySelector('[data-ui="' + id + '"]');
    if (el) el.hidden = false;
  }

  registerUI(id, hooks) {
    hooks = hooks || {};
    this.registry[id] = {
      id: id,
      target: hooks.target || this.inferTarget(id),
      onOpen: hooks.onOpen || null,
      onClose: hooks.onClose || null,
      render: hooks.render || null,
    };
  }

  getActive(target) {
    return this.activeByTarget[target || "stage"];
  }

  openUI(id, opts) {
    opts = opts || {};
    var entry = this.registry[id] || {
      id: id,
      target: opts.target || inferTarget(id),
    };
    var target = opts.target || entry.target || "stage";
    var prevId = this.activeByTarget[target];

    if (prevId && prevId !== id) {
      var prev = this.registry[prevId];
      if (prev && prev.onClose) prev.onClose(opts);
      this.hideSection(prevId);
    }

    this.activeByTarget[target] = id;
    this.showSection(id);
    if (entry.onOpen) entry.onOpen(opts);
    if (entry.render) entry.render(opts);

    document.dispatchEvent(
      new CustomEvent("lt-ui-opened", {
        detail: { id: id, target: target, opts: opts, prevId: prevId },
      }),
    );
    return id;
  }

  closeUI(id) {
    var entry = registry[id];
    var target = (entry && entry.target) || this.inferTarget(id);
    if (activeByTarget[target] !== id) return;
    if (entry && entry.onClose) entry.onClose({});
    this.hideSection(id);
    activeByTarget[target] = null;
  }

  setTitle(text) {
    var el = document.getElementById("content-title");
    if (!el) return;
    el.innerHTML = text || "";
    el.hidden = !text;
  }

  setChrome(opts) {
    opts = opts || {};
    var app = document.getElementById("app");
    if (opts.left === false) app.classList.add("chrome-left-hidden");
    if (opts.left === true) app.classList.remove("chrome-left-hidden");
    if (opts.right === false) app.classList.add("chrome-right-hidden");
    if (opts.right === true) app.classList.remove("chrome-right-hidden");
    if (opts.title !== undefined) this.setTitle(opts.title);
  }

  initOpenUI() {
    var els = document.querySelectorAll("[data-ui]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var id = el.getAttribute("data-ui");
      if (!registry[id]) {
        LT.registerUI(id, {
          target: el.getAttribute("data-ui-target") || "stage",
        });
      }
      el.hidden = true;
    }
  }
}
