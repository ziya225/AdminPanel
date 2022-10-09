import { stringify } from "querystring";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { updateScreens } from "./multiscreen";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
    }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};

export const n_format = (val) => {
  if (val < 0) {
    return "0.00";
  }
  return parseFloat(val).toFixed(2);
};


export const number_format = (number, decimals = 2, decPoint, thousandsSep) => {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  const toFixedFix = function (n, prec) {
    if (('' + n).indexOf('e') === -1) {
      return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
    } else {
      const arr = ('' + n).split('e')
      let sig = ''
      if (+arr[1] + prec > 0) {
        sig = '+'
      }
      return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
    }
  }
  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

export const n_round = (val) => {
  return Math.round(val / 100) * 100;
};


export const getTens = (val) => {
  if (val < 0) {
    return "0.00";
  }
  let quotient = val / 1000; //This will give you 3
  let remainder = val % 1000;
  let quotient1 = remainder / 100; //This will give you 6
  let remainder1 = remainder % 100;
  let quotient2 = remainder1 / 10;
  return parseInt(quotient2);
};

export function emptyCache() {
  if ('caches' in window) {
    caches.keys().then((names) => {
      // Delete all the cache files
      names.forEach(name => {
        caches.delete(name);
      })
    });

    // Makes sure the page reloads. Changes are only visible after you refresh.
    window.location.reload(true);
  }
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export async function toggleFullScreen() {

  let fullscreenOptions = { navigationUI: "auto" };
  const screens = await updateScreens(/*requestPermission=*/true);
  if (screens.length > 1 && 1 < screens.length) {
    console.log('Info: Requesting fullscreen on another screen.');
    // TODO(msw): Use screen.id and not an index.
    fullscreenOptions.screen = screens[1];
  }


  var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  if (!isInFullScreen) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen(fullscreenOptions);
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen(fullscreenOptions);
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen(fullscreenOptions);
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen(fullscreenOptions);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

export async function togglePOSFullScreen(req = false) {



  var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  if (req) {
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    }
  } else {
    if (isInFullScreen && !req) {

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
}

export const combinedItems = (arr = [], reduce = false) => {
  const res = arr.reduce((acc, obj) => {
    let found = false;
    for (let i = 0; i < acc.length; i++) {
      if (acc[i].product_id === obj.product_id) {
        found = true;
        acc[i].count++;
        if (!reduce) {
          acc[i].quantity = acc[i].quantity + obj.quantity;
        } else {
          acc[i].quantity = acc[i].quantity - obj.quantity;
        }
      };
    }
    if (!found) {
      obj.count = 1;
      acc.push(obj);
    }
    return acc;
  }, []);
  return res;
}

export const downloadFile = async (myData, fileName = new Date()) => {
  const json = JSON.stringify(myData);
  const blob = new Blob([json], { type: 'application/json' });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


export const randomGenerator = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

/**
 * Basic Setting Variables Define
 */
export const BaseSetting = {
  name: 'ekshop POS',
  displayName: 'ekshop POS',
  appVersion: '1.0.1',
  domain: 'ek-shop.com',
  // apiDomain: 'http://127.0.0.1:8000/api/warehouse',
  apiDomain: 'https://ek-shop.com/api/warehouse',
  imageDomain: 'https://ek-shop.com/assets/images/',
  protocol: 'https',
  defaultLanguage: 'en',
  languageSupport: [
    'en',
    'khm'
  ],
  // resourcesLanguage: {
  //   en: {
  //     translation: require('../lang/en.json'),
  //   },
  //   khm: {
  //     translation: require('../lang/khm.json'),
  //   },
  // },
};



// Unserilize 
// TODO: resolve error in unserilize functions

function initCache() {
  const store = []
  // cache only first element, second is length to jump ahead for the parser
  const cache = function cache(value) {
    store.push(value[0])
    return value
  }
  cache.get = (index) => {
    if (index >= store.length) {
      throw RangeError(`Can't resolve reference ${index + 1}`)
    }
    return store[index]
  }
  return cache
}
function expectType(str, cache) {
  const types = /^(?:N(?=;)|[bidsSaOCrR](?=:)|[^:]+(?=:))/g
  const type = (types.exec(str) || [])[0]
  if (!type) {
    throw SyntaxError('Invalid input: ' + str)
  }
  switch (type) {
    case 'N':
      return cache([null, 2])
    case 'b':
      return cache(expectBool(str))
    case 'i':
      return cache(expectInt(str))
    case 'd':
      return cache(expectFloat(str))
    case 's':
      return cache(expectString(str))
    case 'S':
      return cache(expectEscapedString(str))
    case 'a':
      return expectArray(str, cache)
    case 'O':
      return expectObject(str, cache)
    case 'C':
      return expectClass(str, cache)
    case 'r':
    case 'R':
      return expectReference(str, cache)
    default:
      throw SyntaxError(`Invalid or unsupported data type: ${type}`)
  }
}
function expectBool(str) {
  const reBool = /^b:([01]);/
  const [match, boolMatch] = reBool.exec(str) || []
  if (!boolMatch) {
    throw SyntaxError('Invalid bool value, expected 0 or 1')
  }
  return [boolMatch === '1', match.length]
}
function expectInt(str) {
  const reInt = /^i:([+-]?\d+);/
  const [match, intMatch] = reInt.exec(str) || []
  if (!intMatch) {
    throw SyntaxError('Expected an integer value')
  }
  return [parseInt(intMatch, 10), match.length]
}
function expectFloat(str) {
  const reFloat = /^d:(NAN|-?INF|(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eE][+-]\d+)?);/
  const [match, floatMatch] = reFloat.exec(str) || []
  if (!floatMatch) {
    throw SyntaxError('Expected a float value')
  }
  let floatValue
  switch (floatMatch) {
    case 'NAN':
      floatValue = Number.NaN
      break
    case '-INF':
      floatValue = Number.NEGATIVE_INFINITY
      break
    case 'INF':
      floatValue = Number.POSITIVE_INFINITY
      break
    default:
      floatValue = parseFloat(floatMatch)
      break
  }
  return [floatValue, match.length]
}
function readBytes(str, len, escapedString = false) {
  let bytes = 0
  let out = ''
  let c = 0
  const strLen = str.length
  let wasHighSurrogate = false
  let escapedChars = 0
  while (bytes < len && c < strLen) {
    let chr = str.charAt(c)
    const code = chr.charCodeAt(0)
    const isHighSurrogate = code >= 0xd800 && code <= 0xdbff
    const isLowSurrogate = code >= 0xdc00 && code <= 0xdfff
    if (escapedString && chr === '\\') {
      chr = String.fromCharCode(parseInt(str.substr(c + 1, 2), 16))
      escapedChars++
      // each escaped sequence is 3 characters. Go 2 chars ahead.
      // third character will be jumped over a few lines later
      c += 2
    }
    c++
    bytes += isHighSurrogate || (isLowSurrogate && wasHighSurrogate)
      // if high surrogate, count 2 bytes, as expectation is to be followed by low surrogate
      // if low surrogate preceded by high surrogate, add 2 bytes
      ? 2
      : code > 0x7ff
        // otherwise low surrogate falls into this part
        ? 3
        : code > 0x7f
          ? 2
          : 1
    // if high surrogate is not followed by low surrogate, add 1 more byte
    bytes += wasHighSurrogate && !isLowSurrogate ? 1 : 0
    out += chr
    wasHighSurrogate = isHighSurrogate
  }
  return [out, bytes, escapedChars]
}
function expectString(str) {
  // PHP strings consist of one-byte characters.
  // JS uses 2 bytes with possible surrogate pairs.
  // Serialized length of 2 is still 1 JS string character
  const reStrLength = /^s:(\d+):"/g // also match the opening " char
  const [match, byteLenMatch] = reStrLength.exec(str) || []
  if (!match) {
    throw SyntaxError('Expected a string value')
  }
  const len = parseInt(byteLenMatch, 10)
  str = str.substr(match.length)
  const [strMatch, bytes] = readBytes(str, len)
  if (bytes !== len) {
    throw SyntaxError(`Expected string of ${len} bytes, but got ${bytes}`)
  }
  str = str.substr(strMatch.length)
  // strict parsing, match closing "; chars
  if (!str.startsWith('";')) {
    throw SyntaxError('Expected ";')
  }
  return [strMatch, match.length + strMatch.length + 2] // skip last ";
}
function expectEscapedString(str) {
  const reStrLength = /^S:(\d+):"/g // also match the opening " char
  const [match, strLenMatch] = reStrLength.exec(str) || []
  if (!match) {
    throw SyntaxError('Expected an escaped string value')
  }
  const len = parseInt(strLenMatch, 10)
  str = str.substr(match.length)
  const [strMatch, bytes, escapedChars] = readBytes(str, len, true)
  if (bytes !== len) {
    throw SyntaxError(`Expected escaped string of ${len} bytes, but got ${bytes}`)
  }
  str = str.substr(strMatch.length + escapedChars * 2)
  // strict parsing, match closing "; chars
  if (!str.startsWith('";')) {
    throw SyntaxError('Expected ";')
  }
  return [strMatch, match.length + strMatch.length + 2] // skip last ";
}
function expectKeyOrIndex(str) {
  try {
    return expectString(str)
  } catch (err) { }
  try {
    return expectEscapedString(str)
  } catch (err) { }
  try {
    return expectInt(str)
  } catch (err) {
    throw SyntaxError('Expected key or index')
  }
}
const expectObject = (str, cache) => {
  // O:<class name length>:"class name":<prop count>:{<props and values>}
  // O:8:"stdClass":2:{s:3:"foo";s:3:"bar";s:3:"bar";s:3:"baz";}
  const reObjectLiteral = /^O:(\d+):"([^"]+)":(\d+):\{/
  const [objectLiteralBeginMatch, /* classNameLengthMatch */, className, propCountMatch] = reObjectLiteral.exec(str) || []
  if (!objectLiteralBeginMatch) {
    throw SyntaxError('Invalid input')
  }
  if (className !== 'stdClass') {
    throw SyntaxError(`Unsupported object type: ${className}`)
  }
  let totalOffset = objectLiteralBeginMatch.length
  const propCount = parseInt(propCountMatch, 10)
  const obj = {}
  cache([obj])
  str = str.substr(totalOffset)
  for (let i = 0; i < propCount; i++) {
    const prop = expectKeyOrIndex(str)
    str = str.substr(prop[1])
    totalOffset += prop[1]
    const value = expectType(str, cache)
    str = str.substr(value[1])
    totalOffset += value[1]
    obj[prop[0]] = value[0]
  }
  // strict parsing, expect } after object literal
  if (str.charAt(0) !== '}') {
    throw SyntaxError('Expected }')
  }
  return [obj, totalOffset + 1] // skip final }
}
function expectClass(str, cache) {
  // can't be well supported, because requires calling eval (or similar)
  // in order to call serialized constructor name
  // which is unsafe
  // or assume that constructor is defined in global scope
  // but this is too much limiting
  throw Error('Not yet implemented')
}
function expectReference(str, cache) {
  const reRef = /^[rR]:([1-9]\d*);/
  const [match, refIndex] = reRef.exec(str) || []
  if (!match) {
    throw SyntaxError('Expected reference value')
  }
  return [cache.get(parseInt(refIndex, 10) - 1), match.length]
}
function expectArray(str, cache) {
  const reArrayLength = /^a:(\d+):{/
  const [arrayLiteralBeginMatch, arrayLengthMatch] = reArrayLength.exec(str) || []
  if (!arrayLengthMatch) {
    throw SyntaxError('Expected array length annotation')
  }
  str = str.substr(arrayLiteralBeginMatch.length)
  const array = expectArrayItems(str, parseInt(arrayLengthMatch, 10), cache)
  // strict parsing, expect closing } brace after array literal
  if (str.charAt(array[1]) !== '}') {
    throw SyntaxError('Expected }')
  }
  return [array[0], arrayLiteralBeginMatch.length + array[1] + 1] // jump over }
}
const expectArrayItems = (str, expectedItems = 0, cache) => {
  let key
  let hasStringKeys = false
  let item
  let totalOffset = 0
  let items = []
  cache([items])
  for (let i = 0; i < expectedItems; i++) {
    key = expectKeyOrIndex(str)
    // this is for backward compatibility with previous implementation
    if (!hasStringKeys) {
      hasStringKeys = (typeof key[0] === 'string')
    }
    str = str.substr(key[1])
    totalOffset += key[1]
    // references are resolved immediately, so if duplicate key overwrites previous array index
    // the old value is anyway resolved
    // fixme: but next time the same reference should point to the new value
    item = expectType(str, cache)
    str = str.substr(item[1])
    totalOffset += item[1]
    items[key[0]] = item[0]
  }
  // this is for backward compatibility with previous implementation
  if (hasStringKeys) {
    items = Object.assign({}, items)
  }
  return [items, totalOffset]
}
export function unserialize(str) {
  try {
    if (typeof str !== 'string') {
      return false
    }
    return expectType(str, initCache())[0]
  } catch (err) {
    console.error(err)
    return false
  }
}


export const compactText = (text, limit = 30) => {
  if (text?.length > limit) {
    return text.substring(0, limit) + "...";
  } else {
    return text
  }
}


export const t = (text) => {
  return text;
}



//WebSocket settings


//Check JSPM WebSocket status
// function jspmWSStatus() {
//   if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Open)
//     return true;
//   else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Closed) {
//     alert('JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm');
//     return false;
//   }
//   else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Blocked) {
//     alert('JSPM has blocked this website!');
//     return false;
//   }
// }

//Do printing...
// export function printMySticker(data) {
//   if (jspmWSStatus()) {
//     //Create a ClientPrintJob
//     var cpj = new JSPM.ClientPrintJob();
//     //Set Printer type (Refer to the help, there many of them!)

//     cpj.clientPrinter = new JSPM.DefaultPrinter();

//     //Set content to print...
//     //Create Zebra ZPL commands for sample label
//     var cmds = "^XA";
//     cmds += `^FO20,30^GB750,1100,4^FS`;
//     cmds += `^FO20,30^GB750,200,4^FS`;
//     cmds += `^FO20,30^GB750,400,4^FS`;
//     cmds += `^FO20,30^GB750,700,4^FS`;
//     cmds += `^FO20,226^GB325,204,4^FS`;
//     cmds += `^FO30,40^ADN,36,20^FD${data?.oneTitle}:^FS`;
//     cmds += `^FO30,260^ADN,18,10^FD${data?.twoTitle}^FS`;
//     cmds += `^FO360,260^ADN,18,10^FD${data?.threeTitle}:^FS`;
//     cmds += `^FO30,750^ADN,36,20^FD${data?.fourTitle}:^FS`;
//     cmds += `^FO150,125^ADN,36,20^FD${data?.oneTitleValue}^FS`;
//     cmds += `^FO60,330^ADN,36,20^FD${data?.twoTitleValue}^FS`;
//     cmds += `^FO400,330^ADN,36,20^FD${data?.threeTitleValue}^FS`;
//     cmds += `^FO70,480^BY4^B3N,,200^FD${data?.barcode}^FS`;
//     cmds += `^FO150,800^ADN,36,20^FD${data?.fourTitleValue}^FS`;
//     cmds += `^XZ`;
//     cpj.printerCommands = cmds;
//     //Send print job to printer!
//     cpj.sendToClient();
//   }
// }
