import { RENDER_TO_DOM } from './constant'
import { replaceContent, setRootAttributes } from './utils'
import Component from './component';
export class ElementWrapper extends Component {
  constructor(type) {
    super(type);
    this.type = type;
  }

  get vDom() {
    this.vChildren = this.children.map(child => child.vDom);
    return this;
  }

  [RENDER_TO_DOM](range) {
    this._range = range;
    let root = document.createElement(this.type)

    setRootAttributes(root, this.props);

    if (!this.vChildren) {
      this.vChildren = this.children.map(child => child.vDom)
    }

    for (let child of this.vChildren) {
      let childRange = document.createRange()
      childRange.setStart(root, root.childNodes.length)
      childRange.setEnd(root, root.childNodes.length)
      child[RENDER_TO_DOM](childRange)
    }

    replaceContent(root, range);
  }
}

export class TextWrapper extends Component {
  constructor(content) {
    super(content)
    this.type = '#text'
    this.content = content
  }
  get vDom () {
    return this;
  }
  [RENDER_TO_DOM](range) {
    this._range = range;

    let root = document.createTextNode(this.content)
    replaceContent(root, range)
  }
}
