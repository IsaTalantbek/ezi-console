ezi-console - a set of methods for simple and clear output to the console

```js
import ezcl from 'ezi-console';

ezcl.notice({
    notice: 'Hello World'
});
```

```bash
# there is an empty line here
> type: notice
> notice: Hello World
# there is an empty line here
```

Although it is not visible here, type: notice is blue colored

```js
ezcl.error({
    error: 'Oops, error',
    comment: 'Fix pls',
    path: './this/func.js',
    exit: true
});
```

```bash
# there is an empty line here
> type: error
> error: Oops, error
> comment: Fix, pls
> path: ./this/func.js
# there is an empty line here
```

you can add silent if you don't want to output due to some circumstances

```js
ezcl.warn({
    warn: 'This flag is no longer relevant',
    comment: 'please use -D',
    name: '--save-dev'
});
```

```bash
# there is an empty line here
> type: warn
> warn: This flag is no longer relevant
> comment: please use -D
> name: --save-dev
# there is an empty line here
```

you can turn off empty lines

```js
ezcl.custom({
    type: null,
    comment: 'Hello World',
    commentKey: 'message',
    space: false
});
```

```bash
> message: Hello World
```
