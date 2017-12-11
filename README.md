# gobem-proc-filter
**DON'T USE THE PACKAGE. IT'S DEPRECATED!!!
USE [webpack](https://github.com/webpack) INSTEAD.**

This processor for [gobem](https://github.com/Enet/gobem) cuts off empty, non-existent and non-loaded files. It has no arguments, just use it.

### Example for **build.js**
```javascript
module.exports = function () {
    return [
        ['select', 0],
        ['gobem-proc-filter'],
        ['write', 1]
    ]; // this array will be used as build instructions
};
```
