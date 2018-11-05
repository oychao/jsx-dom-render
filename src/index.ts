const convertToTextNodeIfStr = (node: string | object): any =>
  typeof node === 'string' ? document.createTextNode(node) : node;

const createElement = function(
  tag: string,
  props: object,
  ...children: Array<any>
): HTMLElement | Array<any> {
  const ele: HTMLElement = document.createElement(tag);
  if (!tag) {
    return children;
  }
  if (props) {
    Object.entries(props).forEach(function([propKey, propValue]: Array<any>) {
      propKey = propKey.toLowerCase();
      if ('ref' === propKey) {
        if ('function' !== typeof propValue) {
          throw new TypeError('value of property \'ref\' must be a function');
        }
        propValue.call(undefined, ele);
        return;
      }
      if ('classname' === propKey) {
        propKey = 'class';
      }
      if ('class' === propKey) {
        propValue.split(' ').forEach((cls: string) => ele.classList.add(cls));
      } else if ('style' === propKey) {
        if (typeof propValue !== 'object') {
          throw new TypeError('style attribute should be an object');
        }
        Object.keys(propValue).forEach((k: any) => (ele.style[k] = propValue[k]));
      } else if ('dangerouslysetinnerhtml' === propKey) {
        let htmlStr: string;
        if(typeof propValue === 'function') {
          htmlStr = propValue.call();
        } else {
          htmlStr = propValue;
        }
        ele.innerHTML = htmlStr;
      } else if (propKey in ele) {
        if (propKey.slice(0, 2) === 'on') {
          ele.addEventListener(propKey.slice(2), propValue);
          return;
        }
        ele.setAttribute(propKey, propValue);
      } else if ('data-' === propKey.slice(0, 5)) {
        ele.setAttribute(propKey, propValue);
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
