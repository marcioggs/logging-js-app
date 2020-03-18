import { LoggerConfig, NgxLoggerLevel } from 'ngx-logger';

export const loggerConfig: LoggerConfig = {
    level: NgxLoggerLevel.DEBUG,
    disableConsoleLogging: false,
    serverLogLevel: NgxLoggerLevel.INFO,
    serverLoggingUrl: '/api/logs',
    enableSourceMaps: true
}
