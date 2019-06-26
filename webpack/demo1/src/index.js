 import _ from 'lodash';
 import './style.css';
 import Icon from './123.jpg';
 import Data from './data.xml';

  function component() {
    var element = document.createElement('div');

   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack','中国制造'], ' ');
    element.classList.add('hello');
    const myImg = new Image();
    myImg.src = Icon;
    element.appendChild(myImg);
    console.log(Data);

    return element;
  }

  document.body.appendChild(component());