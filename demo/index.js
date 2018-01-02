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
