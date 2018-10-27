// import React from 'jsx-dom-render';
// const React = require('../bin');
import React from '../bin/index';

const h1Content = 'world';
const list = ['Zhao', 'Qian', 'Sun', 'Li'];
let btn;
document.body.appendChild(
  (
    <>
      <div class="cls1 cls2" data-foo="foo">
        <h1 title="hello world">hello {h1Content}</h1>
        <hr />
        <ol>
          {list.map(function(item) {
            return <li>{item}</li>;
          })}
        </ol>
        <hr />
        <button
          ref={(_: HTMLElement): void => void (btn = _)}
          onClick={(e: Event): void => void alert('from jsx')}
        />
      </div>
    </>
  )[0]
);
btn.textContent = 'Click me';
