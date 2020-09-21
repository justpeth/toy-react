import { RENDER_TO_DOM } from './constant'

export class ElementWrapper {
  constructor(tagName) {
    this.root = document.createElement(tagName)
  }
  setAttribute(name, value) {
    // 绑定事件
    if (name.match(/^on([\s\S]+)$/)) {
      let eventName = RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase())
      this.root.addEventListener(eventName, value);
      return;
    }
    // 设置类名
    if (name === 'className') {
      this.root.setAttribute('class', value)
      return;
    }
    // 普通attributes设置
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    let range = document.createRange();
    range.setStart(this.root, this.root.childNodes.length)
    range.setEnd(this.root, this.root.childNodes.length)
    component[RENDER_TO_DOM](range)
  }
  [RENDER_TO_DOM](range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}

export class TextWrapper {
  constructor(text) {
    this.root = document.createTextNode(text);
  }
  [RENDER_TO_DOM](range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}
