ezi-console - a set of methods for simple and clear output to the console

```js
import ezcl from 'ezi-console';

ezcl.notice({
    notice: 'Hello World'
});
```

">" is part of the output

```bash
# there is an empty line here
> [notice]
> notice: Hello World
# there is an empty line here
```

Although it is not visible here, "notice" is blue colored

```js
ezcl.error({
    error: 'Oops, error',
    comment: 'use --help',
    path: './this/func.js',
    exit: true // process.exit(1)
});
```

```bash
# there is an empty line here
> [error]
> error: Oops, error
> comment: use --help
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
> [warn]
> warn: This flag is no longer relevant
> comment: please use -D
> name: --save-dev
# there is an empty line here
```

you can turn off empty lines

```js
ezcl.custom({
    type: '_cool_',
    'my-message': 'Hello World!'
});
```

```bash
> [_cool_] # Green colour
> my-message: Hello World
```
