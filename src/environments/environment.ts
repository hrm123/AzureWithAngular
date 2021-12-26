import prodVars from './environment.prod';
import devVars from './environment.dev';

const environment = Object.assign({}, prodVars, devVars)
console.log('environment:',  environment);
export default environment;