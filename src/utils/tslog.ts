import { ILogObject, Logger } from 'tslog';
import { appendFileSync } from 'fs';

function errorTransport(logObject: ILogObject) {
    appendFileSync('logs/error.log', JSON.stringify(logObject) + '\n');
}

function combinedTransport(logObject: ILogObject) {
    appendFileSync('logs/combined.log', JSON.stringify(logObject) + '\n');
}

const loggert: Logger = new Logger({
    displayFunctionName: true,
});

// const logger: Logger = new Logger();

// logger.attachTransport(
//     {
//         silly: combinedTransport,
//         debug: combinedTransport,
//         trace: combinedTransport,
//         info: combinedTransport,
//         warn: combinedTransport,
//         error: errorTransport,
//         fatal: combinedTransport,
//     },
//     'debug'
// );

export default loggert;
