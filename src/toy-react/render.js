import { RENDER_TO_DOM } from './constant'

const render = (component, parentElement) => {
  let range = document.createRange();
  range.setStart(parentElement, 0)
  range.setEnd(parentElement, parentElement.childNodes.length)
  range.deleteContents();
  component[RENDER_TO_DOM](range)
}

export default render;