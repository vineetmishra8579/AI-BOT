var emitter = require('events').EventEmitter;
var em = new emitter();
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
em.on('SecondEvent', function (data) {
    console.log('First subscriber: ' + data);
});
em.emit('FirstEvent', 'VINEET');
em.emit('SecondEvent', 'WEB DEVELOPMENT');