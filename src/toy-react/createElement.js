import { ElementWrapper, TextWrapper } from './wrapper'

const insertChildren = (children, element) => {
  for (let child of children) {
    if (typeof child === 'string') {
      child = new TextWrapper(child)
    }
    if (child === null) {
      continue
    }
    if (typeof child === 'object' && child instanceof Array) {
      insertChildren(child, element)
    } else {
      element.appendChild(child)
    }
  }
}

const createElement = (type, attributes, ...children) => {
  let element = typeof type === 'string' ? new ElementWrapper(type) : new type;
  for (let p in attributes) {
    element.setAttribute(p, attributes[p])
  }
  insertChildren(children, element);

  return element;
}

export default createElement;