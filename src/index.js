    import _ from 'lodash';
    import './hello.css';

function component() {
    const ele = document.createElement('div');
    ele.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    ele.classList.add('hello');
    return ele;
}

document.body.appendChild(component());
