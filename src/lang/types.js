import path from 'path';

const pathNames = require.context('./modules', false, /.js$/).keys();
const fileNames = pathNames.map(item => path.basename(item, '.js'));
let langTypes = {};
fileNames.forEach(item => langTypes[item] = item);

export default langTypes;