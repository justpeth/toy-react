import { isNullOrObject, merge } from './utils'
import { RENDER_TO_DOM } from './constant'

export default class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  [RENDER_TO_DOM](range) {
    this._range = range;
    this.render()[RENDER_TO_DOM](range)
  }
  reRender() {
    let oldRange = this._range;
    let range = document.createRange();
    range.setStart(oldRange.startContainer, oldRange.startOffset);
    range.setEnd(oldRange.startContainer, oldRange.startOffset);
    this[RENDER_TO_DOM](range);

    oldRange.setStart(range.endContainer, range.endOffset);
    oldRange.deleteContents();
  }

  setState(newState) {
    if (isNullOrObject(this.state)) {
      this.state = newState;
      this.reRender();
      return;
    }

    merge(this.state, newState);
    this.reRender();
  }
}