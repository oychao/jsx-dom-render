const convertToTextNodeIfStr = (node: string | object): any =>
  typeof node === 'string' ? document.createTextNode(node) : node;

const createElement = function(
  tag: string,
  props: object
): HTMLElement | Array<any> {
  const ele: HTMLElement = document.createElement(tag);
  const children = Array.from(arguments).slice(2);
  if (!tag) {
    return children;
  }
  if (props) {
    Object.entries(props).forEach(function(entry: Array<any>) {
      entry[0] = entry[0].toLowerCase();
      if (entry[0] === 'ref') {
        entry[1](ele);
        return;
      }
      if (entry[0] === 'classname') {
        entry[0] = 'class';
      }
      if (entry[0] === 'class') {
        entry[1].split(' ').forEach((cls: string) => ele.classList.add(cls));
      } else if (entry[0].slice(0, 5) === 'data-') {
        ele.setAttribute(entry[0], entry[1]);
      } else if (entry[0] in ele) {
        if (entry[0].slice(0, 2) === 'on') {
          ele.addEventListener(entry[0].slice(2), entry[1]);
          return;
        }
        ele.setAttribute(entry[0], entry[1]);
      }
    });
  }
  if (children) {
    if (children.length === 1 && Array.isArray(children[0])) {
      children.pop().forEach(function(child: string | object) {
        children.push(convertToTextNodeIfStr(child));
      });
    }
    children.forEach(function(child: string | object) {
      ele.appendChild(convertToTextNodeIfStr(child));
    });
  }
  return ele;
};

export default { createElement };
