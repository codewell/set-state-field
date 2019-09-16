# @codewell/state-actions

## Installation
```
npm install @codewell/state-actions
```

## Basic usage

### Set state property
Setting a state property overrides the current value of a state property.
```JavaScript
import { setStateProperty } from '@codewell/state-actions';

const state = { foo: 'foo' };

const actoin = { payload: 'bar' };

setStateProperty(state, action, 'foo');
// => {foo: 'bar'}
```

### Update state property
Updates some (or all) fields of a state property.
```JavaScript
import { updateStateProperty } from '@codewell/state-actions';

const state = { foo: {
  one: 1,
  two: 0,
} };

const actoin = { payload: {two: 2, three: 3} };

updateStateProperty(state, action, 'foo');
// => {foo: {one: 1, two: 2, three: 3}}
```

### Remove state property
Removes a property from the state.
```JavaScript
import { removeStateProperty } from '@codewell/state-actions';

const state = { foo: 'foo' };

removeStateProperty(state, 'foo');
// => {}
```