# MARTIS

Markov algorithm TL;DR:

- the rules are a sequence of pairs of strings;
- usually presented in the form of pattern → replacement;
- each rule may be either ordinary or terminating.

Martis TL;DR:

- same principles as above,
- a bit more utility
- all in JS.

## Examples

### Binary to unary

```javascript
const bin2uni = martis(
  {
    step: ({str}) => console.log(str),
  },
  [
    {
      pat: /\|0/,
      rep: '0||',
    },
    {
      pat: '1',
      rep: '0|',
    },
    {
      pat: '0',
      rep: '',
    },
  ],
);


bin2uni('111');
```

produces

```
0|11
0|0|1
00|||1
00|||0|
00||0|||
00|0|||||
000|||||||
00|||||||
0|||||||
|||||||
```

### Emojis

```javascript
const {r} = martis;

const replace = martis({
  step:  ({idx, str}) => console.log(idx, '->', str),
  rules: [
    r(/:\)/, '😀'),
    r(':D', '😆'),
    r('x', '😆'),
    r('😀😆', '🤣'),
    r('😀🤣', '🙃'),
  ],
});

console.log(replace(':):)x'));
```

produces

```
 1n -> 😀:)x
 2n -> 😀😀x
 3n -> 😀😀😆
 4n -> 😀🤣
 5n -> 🙃
 🙃
```

### Lower case

```javascript
const lower = martis(
  [{
    end: true,
    pat: '.*',
    rep: ({old}) => old.toLowerCase(),
  }],
);

console.log(lower('AxByCzD'));
```

produces

```
axbyczd
```

### Capitalize

```javascript
const {terminating, rule} = martis;

const capitalize = martis([

  terminating(rule(
    '(.)(.*)',
    ({tst}) => tst[1].toUpperCase() + tst[2].toLowerCase()),
  ),

]);

console.log(capitalize('AxByCzD'));         //> Axbyczd
console.log(capitalize('ABCD'));            //> Abcd
console.log(capitalize('xyz'));             //> Xyz
console.log(capitalize('?'));               //> ?
console.log(capitalize(''));                //>
console.log(capitalize());                  //>
```
