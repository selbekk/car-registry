var LogLevel = {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
};

function print(logLevel, input) {
    var printer;
    if(logLevel === LogLevel.ERROR) {
        printer = console.error;
    }
    else {
        printer = console.log;
    }
    printer(new Date() + ' [' + logLevel + '] ' + input);
}

exports.debug = function(input) {
    print(LogLevel.DEBUG, input);
};

exports.info = function(input) {
    print(LogLevel.INFO, input);
};

exports.warn = function(input) {
    print(LogLevel.WARN, input);
};

exports.error = function(input) {
    print(LogLevel.ERROR, input);
};