const log4js = require('log4js');
//log4js配置
log4js.configure({
    appenders: {
        out: { type: 'console' },
        write: { type: 'dateFile', filename: 'logs/default', "pattern": "yyyy-MM-dd.log", alwaysIncludePattern: true },
    },
    categories: {
        default: { appenders: ['out', 'write'], level: 'all' },
        dev: { appenders: ['out'], level: 'info' }
    }
});
const logger = log4js.getLogger('default');
module.exports = logger