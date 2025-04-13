import ezcl from './dist/esm/index.js';

ezcl.custom({
    type: '_cool_',
    'my-message': 'Hello World!'
});

ezcl.error({
    error: 'This is error'
});

ezcl.notice({
    notice: 'This is notice!'
});

ezcl.warn({
    warn: 'This function is not supported'
});

ezcl.one({
    'test-megatest': 'Hello World'
});

console.log(' ');
