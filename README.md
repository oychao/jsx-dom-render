# jsx-dom-render

Render JSX to DOM Tree.

[![Build Status](https://travis-ci.org/oychao/jsx-dom-render.svg?branch=master)](https://travis-ci.org/oychao/jsx-dom-render)

## Why jsx-dom-render

Sometimes you may need to create some DOM objects, but writing a lot of document.createElement() is unmaintainable.

## How it Works

jsx-dom-render is a simple lib which pretend to be `React.createElement`, it creates DOM objects instead of React Elements. (check the [source code][1])

## How to use

```jsx
import React from 'jsx-dom-render';

const h1Content = 'world';
const list = ['Zhao', 'Qian', 'Sun', 'Li'];
let btn;
document.body.appendChild(
  <div class="cls1 cls2" data-foo="foo">
    <h1 title="hello world">hello {h1Content}</h1>
    <hr />
    <ol>
      {list.map(function(item) {
        return <li>{item}</li>;
      })}
    </ol>
    <hr />
    <button ref={_ => void (btn = _)} onClick={e => void alert('from jsx')} />
  </div>
);
btn.textContent = 'Click me';
```

It also support Typescript(check the [demo][2]).

NOTE: Instead of `className` and `onClick` (etc.), jsx-dom-render use `class` to create class attribute and `onclick` (etc.) to bind event listeners.

Currently creating inline style with JavaScript Object is **NOT** supported.

## License

[![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

[1]: https://github.com/oychao/jsx-dom-render/blob/master/src/index.ts
[2]: https://github.com/oychao/jsx-dom-render/tree/master/demo
