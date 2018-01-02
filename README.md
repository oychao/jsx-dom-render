# jsx-dom-render

Render JSX to DOM Object.

## Why jsx-dom-render

Sometimes you may need to create some DOM objects, but writing a lot of document.createElement() is unmaintainable.

So jsx-dom-render is a good choice.

## How it Works

jsx-dom-render is a simple lib which hijacked `React.createElement`, it creates DOM objects instead of React Elements. ([check the source code][1])

## How to use

Just like normal JSX, but instead of using `className` and `onClick` (etc.), use `class` to create class attribute and `onclick` (etc.) to bind event listeners.

Currently creating inline style with JavaScript Object is **NOT** supported.

```jsx
import React from 'jsx-dom-render';

const h1Content = 'world';
const list = ['Zhao', 'Qian', 'Sun', 'Li'];
let btn;
document.body.appendChild(
    <div>
        <h1 title="hello world">hello {h1Content}</h1>
        <hr />
        <ol>
            {list.map(function (item) {
                return <li>{item}</li>
            })}
        </ol>
        <hr />
        <button ref={_ => void (btn = _)} onClick={e => void (alert('haha'))}></button>
    </div>
);
btn.textContent = 'Click me';
```

## License

[![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

[1]: https://github.com/oychao/jsx-dom-render/blob/master/index.js
