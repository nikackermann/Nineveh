import winston from 'winston';

/**
 * @param {winston.Logger} logger
 */

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

winston.addColors(colors); // add colors to winston

const format = winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) =>
            `[${info.timestamp}] ${info.level}: [${info.service}] ${info.message}`
    )
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.uncolorize(),
    }),
    new winston.transports.File({
        filename: 'logs/combined.log',
        format: winston.format.uncolorize(),
    }),
];

export const logger = winston.createLogger({
    level: level(),
    format,
    levels,
    transports,
    exitOnError: false,
});
