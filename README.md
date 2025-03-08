ezi-console - a set of methods for simple and clear output to the console

```js
import cl from 'ezi-console';

cl.notice({
    comment: 'Hello World'
});
```

```bash

> type: notice
> notice: Hello World

```

```js
import cl from 'ezi-console';

cl.error({
    error: 'Oops, bad!',
    path: './this/func.js',
    exit: true
});
```

```bash

> type: error
> error: Oops, bad!
> path: ./this/func.js

```
