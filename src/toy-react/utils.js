import { RENDER_TO_DOM } from "./constant"

export const isNullOrObject = (val) => {
  return val === null || typeof val !== 'object'
}

export const merge = (oldVal, newVal) => {
  for (let p in newVal) {
    if (isNullOrObject(oldVal[p])) {
      oldVal[p] = newVal[p]
    } else {
      merge(oldVal[p], newVal[p])
    }
  }
}

const isSameNode = (oldNode, newNode) => {
  if (oldNode.type !== newNode.type) {
    return false;
  }
  for (let name in newNode.props) {
    if (newNode.props[name] !== oldNode.props[name]) {
      return false;
    }
  }
  if (Object.keys(oldNode.props).length !== Object.keys(newNode.props).length) {
    return false
  }

  if (newNode.type === '#text' && newNode.content !== oldNode.content) {
    return false
  }
  return true;
}

export const update = (oldNode, newNode) => {
  if (!isSameNode(oldNode, newNode)) {
    newNode[RENDER_TO_DOM](oldNode._range);
    return;
  }
  newNode._range = oldNode._range;

  let newChildren = newNode.vChildren;
  let oldChildren = oldNode.vChildren;

  if (!newChildren || !newChildren.length) {
    return;
  }

  let tailRange = oldChildren[oldChildren.length - 1]._range;

  for (let i = 0; i < newChildren.length; i++) {
    let newChild = newChildren[i]
    let oldChild = oldChildren[i]

    if (i < oldChildren.length) {
      update(oldChild, newChild)
    } else {
      let range = document.createRange();
      range.setStart(tailRange.endContainer, tailRange.endOffset)
      range.setEnd(tailRange.endContainer, tailRange.endOffset)
      newChild[RENDER_TO_DOM](range)
      tailRange = range
    }
  }
}

export const setRootAttributes = (root, props) => {
  for (let name in props) {
    let value = props[name]
    if (name.match(/^on([\s\S]+)$/)) {
      let eventName = RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase());
      root.addEventListener(eventName, value);
      return;
    }
    // 设置类名
    if (name === 'className') {
      root.setAttribute('class', value)
      return;
    }
    // 普通attributes设置
    root.setAttribute(name, value)
  }
}

export const replaceContent = (node, range) => {
  range.insertNode(node);
  range.setStartAfter(node);
  range.deleteContents();

  range.setStartBefore(node);
  range.setEndAfter(node);
}