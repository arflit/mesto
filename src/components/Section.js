export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer.bind(this);
    this.container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._renderer(element);
  }

  clear() {
    this.container.innerHTML = '';
  }

  renderItems() {
    this.clear();
    this._items.forEach(element => {
      this._renderer(element);
    });
  }
}