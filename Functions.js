/*
The MIT License (MIT)

Copyright (c) 2018 hayo0914

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
import { Platform } from 'react-native';

const currentPlatform = () => {
  return Platform.OS;
};

const extractObject = object => {
  let { ios, android, ...base } = object; // eslint-disable-line prefer-const
  if (ios && currentPlatform() === 'ios') {
    base = { ...base, ...ios };
  }
  if (android && currentPlatform() === 'android') {
    base = { ...base, ...android };
  }
  return base;
};

const createObject = object => {
  const object2 = extractObject(object);
  const platformObject = {};
  Object.keys(object2).forEach(name => {
    if (typeof object2[name] !== 'object') {
      platformObject[name] = object2[name];
      return;
    }
    platformObject[name] = extractObject(object2[name]);
  });
  return platformObject;
};

export { createObject }; // eslint-disable-line import/prefer-default-export
