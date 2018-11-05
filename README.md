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
  <div class="cls1 cls2" data-foo="foo" style={{ color: 'red' }}>
    <h1 title="hello world">hello {h1Content}</h1>
    <div>{'<h4>JSX Prevents Injection Attacks</h4>'}</div>
    <div dangerouslySetInnerHTML="<h4>but you can use dangerouslySetInnerHTML</h4>" />
    <div
      dangerouslySetInnerHTML={() => '<h4>inner HTML from function</h4>'}
    />
    <hr />
    <ol>
      {list.map(function(item, idx) {
        return <li data-index={idx}>{item}</li>;
      })}
    </ol>
    <hr />
    <button
      ref={(_: HTMLElement): void => void (btn = _)}
      onClick={(e: Event): void => void alert('from tsx')}
    />
  </div>
);
btn.textContent = 'Click me';
```

It also support Typescript(check the [demo][2]).

### NOTE

Instead of `className` and `onClick` (etc.), jsx-dom-render use `class` to create class attribute and `onclick` (etc.) to bind event listeners, property names are insensitive, both `onclick` and `onClick` are valid.

Also, since there is no Virtual DOM and [Reconciliation][3] in jsx-dom-render, property [key][4] is unnecessary when creating lists.

## License

[![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

[1]: https://github.com/oychao/jsx-dom-render/blob/master/src/index.ts
[2]: https://github.com/oychao/jsx-dom-render/tree/master/demo
[3]: https://reactjs.org/docs/reconciliation.html
[4]: https://reactjs.org/docs/reconciliation.html#keys
