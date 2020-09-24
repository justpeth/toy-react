import { isNullOrObject, merge, update } from './utils'
import { RENDER_TO_DOM } from './constant'

export default class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }
  get vDom () {
    return this.render().vDom;
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  [RENDER_TO_DOM](range) {
    this._range = range;
    this._vDom = this.vDom;
    this._vDom[RENDER_TO_DOM](range)
  }

  update() {
    let vDom = this.vDom;
    update(this._vDom, vDom)
    this._vDom = vDom;
  }

  setState(newState) {
    if (isNullOrObject(this.state)) {
      this.state = newState;
      this.reRender();
      return;
    }

    merge(this.state, newState);
    this.update();
  }
}