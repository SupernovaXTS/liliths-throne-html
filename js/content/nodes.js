class Nodes {
  constructor() {
    this.nodes = {};
  }

  defineNode(node) {
    this.nodes[node.id] = node;
    return node;
  }

  getNode(id) {
    var node = this.nodes[id];
    if (!node) throw new Error("Unknown dialogue node: " + id);
    return node;
  }

  hasNode(id) {
    return !!this.nodes[id];
  }
}
const nodes = new Nodes();
export default nodes;
