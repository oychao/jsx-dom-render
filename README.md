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
let node;
app.appendChild(
    <div>
        <h1 title="hello">hello {h1Content}</h1>
        <hr/>
        <ol>
            {list.map(function(item) {
                return <li>{item}</li>
            })}
        </ol>
        <hr/>
        <button onclick={e => alert('haha')}>Click me!</button>
    </div>
);
```

## License

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>

[1]: https://github.com/oychao/jsx-dom-render/blob/master/index.js
