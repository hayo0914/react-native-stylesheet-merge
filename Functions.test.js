import { createObject } from './Functions';

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'ios';
  return Platform;
});

test('Gets merged values', () => {
  const value = createObject({
    flex: 1,
    backgroundColor: 'black',
    ios: {
      flex: 0.5,
      backgroundColor: 'white',
    },
    android: {
      flex: 0.75,
      backgroundColor: 'green',
    },
  });
  expect(value).toEqual({
    flex: 0.5,
    backgroundColor: 'white',
  });
});

test('gets merged values from complicated object', () => {
  const value = createObject({
    backgroundColor: 'black',
    hoge: {
      plat: "none",
    },
    ios: {
      backgroundColor: 'white',
      hoge: {
        plat: "ios",
      },
    },
    android: {
      backgroundColor: 'green',
      hoge: {
        fuga: "adnroid",
      },
    },
    child: {
      hoge: 'hoge',
      ios: {
        hoge: 'hoge2',
      },
      android: {
        hoge: 'hoge3',
      },
    }
  });
  expect(value).toEqual({
    backgroundColor: 'white',
    hoge: {
      plat: "ios",
    },
    child: {
      hoge: 'hoge2',
    },
  });
});

test('gets valid values which has no platform key', () => {
  const value = createObject({
    backgroundColor: 'black',
    hoge: {
      plat: "none",
    },
    android: {
      backgroundColor: 'green',
      hoge: {
        fuga: "adnroid",
      },
    },
    child: {
      hoge: 'hoge',
      android: {
        hoge: 'hoge3',
      },
    }
  });
  expect(value).toEqual({
    backgroundColor: 'black',
    hoge: {
      plat: "none",
    },
    child: {
      hoge: 'hoge',
    },
  });
});

test('gets valid values when the same key is not in parent', () => {
  const value = createObject({
    ios: {
      backgroundColor: 'white',
      hoge: {
        plat: "ios",
      },
    },
    child: {
      ios: {
        hoge: 'hoge2',
      },
      android: {
        hoge: 'hoge3',
      },
    }
  });
  expect(value).toEqual({
    backgroundColor: 'white',
    hoge: {
      plat: "ios",
    },
    child: {
      hoge: 'hoge2',
    },
  });
});
