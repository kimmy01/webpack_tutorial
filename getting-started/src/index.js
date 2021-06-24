import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.innerHTML = 'Hello webpack'; 위와 동일
  return element;
}

document.body.appendChild(component());