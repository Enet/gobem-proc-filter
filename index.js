'use strict';

module.exports = function () {
    return {
        process: function (next, input, output, args, content, path) {
            if (content) output.set(path, content);
            next();
        }
    };
};
