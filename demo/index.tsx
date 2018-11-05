// import React from 'jsx-dom-render';
// const React = require('../bin');
import React from '../bin/index';

const h1Content: string = 'world';
const list: Array<string> = ['Zhao', 'Qian', 'Sun', 'Li'];
let btn: HTMLElement;
document.body.appendChild(
  (
    <>
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
    </>
  )[0]
);

btn.textContent = 'Click me';
