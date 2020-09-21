import { ElementWrapper, TextWrapper } from './wrapper'

const insertChildren = (children, element) => {
  for (let child of children) {
    if (typeof children === 'string') {
      child = new TextWrapper(child)
    }
    if (child === null) {
      continue
    }
    if (typeof children === 'object' && child instanceof Array) {
      insertChildren(child, element)
    } else {
      element.appendChild(child)
    }
  }
}

const createElement = (type, attributes, ...children) => {

  let e = typeof type === 'string' ? new ElementWrapper(type) : new type;
  console.log(e)
  debugger;
  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }

  insertChildren(children, e);

  return e;
}

export default createElement;