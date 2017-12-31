(function () {
    const convertToTextNodeIfStr = node => typeof node === 'string' ? document.createTextNode(node) : node;
    const createElement = function (tag, props) {
        const ele = document.createElement(tag);
        const children = Array.from(arguments).slice(2);
        if (props) {
            Object.entries(props).forEach(function (entry) {
                entry[0] = entry[0].toLowerCase();
                if (entry[0] === 'ref') {
                    entry[1]();
                    return;
                }
                if (entry[0] === 'classname') {
                    entry[0] = 'class';
                }
                if (entry[0] in ele) {
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
                children.pop().forEach(function (child) {
                    children.push(convertToTextNodeIfStr(child));
                });
            }
            children.forEach(function (child) {
                ele.appendChild(convertToTextNodeIfStr(child));
            });
        }
        return ele;
    };
    React = { createElement };
    if (window) {
        window.React = React;
    } else {
        module.exports = React;
    }
})();
