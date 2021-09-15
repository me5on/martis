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
const re = ($) => new RegExp($, 'u');
const rule = (pat, rep) => ({pat: re(pat), rep});

const replace = martis(
  {
    step: ({idx, str}) => void (
      console.log(idx, '->', str)
    ),
  },
  [
    rule(/:\)/, '😀'),
    rule(':D', '😆'),
    rule('x', '😆'),
    rule('😀😆', '🤣'),
    rule('😀🤣', '🙃'),
  ],
);

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
