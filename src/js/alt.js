import chromeDebug from "alt-utils/lib/chromeDebug";
import {detectIsNode, NODE_ENV} from '../js/utils';

var Alt = require('alt');
var alt = new Alt();

if(!detectIsNode() && NODE_ENV == "development"){
  Alt.debug = chromeDebug(alt);  
}

module.exports = alt;