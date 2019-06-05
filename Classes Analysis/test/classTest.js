const assert = require('chai').assert;
const app = require('../class');
const toData = require('../class').toData;
const toBuh = require('../class').toBuh;
const convertToBuh = require('../class').convertToBuh;
const isNumeric = require('../class').isNumeric;
const toSymbol = require('../class').toSymbol;
const toCurrency = require('../class').toCurrency;

describe('toData', function(){
  it('toData should convert number', function(){
    let result = toData(1);
     assert.equal(result, 1);
  });

  it('toData should convert number with comma', function(){
    let result = toData('1,234');
     assert.equal(result, 1.234);
  }); 

  it('toData should convert number with non-breaking space', function(){
    let result = toData('1&nbsp;234');
     assert.equal(result, 1234);
  }); 

  it('toData should convert number space', function(){
    let result = toData('1 234');
     assert.equal(result, 1234);
  });

});

describe('convertToBuh', function(){
  it('convertToBuh should use default decimals', function(){
    let result = convertToBuh(100, undefined, 'uah');
     assert.equal(result, '100.000 uah');
  });

  it('convertToBuh should use minFractionDigits = decimals', function(){
    let result = convertToBuh(100, 5, 'uah');
     assert.equal(result, '100.00000 uah');
  });

  it('convertToBuh should use minFractionDigits = decimals', function(){
    let result = convertToBuh(100.123, 12, 'usd');
     assert.equal(result, '100.123000000000 usd');
  });
});

describe('toBuh', function(){
  it('toBuh should return input if it is not a number', function(){
    let result = toBuh('i am not a number');
     assert.equal(result, 'i am not a number');
  });

  it('toBuh should return number if it is correct', function(){
    let result = toBuh(666);
     assert.equal(result, 666);
  });

});

describe('isNumeric', function(){
  it('isNumeric should return false if input is NaN', function(){
    let result = isNumeric(NaN);
     assert.equal(result, false);
  });
  
  it('isNumeric should return false if input is string', function(){
    let result = isNumeric('privet');
     assert.equal(result, false);
  });

  it('isNumeric should return false if input is not finite', function(){
    let result = isNumeric(Infinity);
     assert.equal(result, false);
  });

  it('isNumeric should return false if input is a not a number', function(){
    let result = isNumeric('FF2');
     assert.equal(result, false);
  });

  it('isNumeric should return false if input is a not a number', function(){
    let result = isNumeric('3.14какие-нибудь не цифровые знаки');
     assert.equal(result, false);
  });

  it('isNumeric should return true if input is a number', function(){
    let result = isNumeric(123);
     assert.equal(result, true);
  });

  it('isNumeric should return true if input is a number', function(){
    let result = isNumeric(2e-64);
     assert.equal(result, true);
  });

  it('isNumeric should return true if input is a number', function(){
    let result = isNumeric(1,234);
     assert.equal(result, true);
  });

  it('isNumeric should return true if input is a number', function(){
    let result = isNumeric(0);
     assert.equal(result, true);
  });

});

describe('convertToBuh', function(){
  it('convertToBuh should use default decimals', function(){
    let result = convertToBuh(100, undefined, 'uah');
     assert.equal(result, '100.000 uah');
  });

  it('convertToBuh should use minFractionDigits = decimals', function(){
    let result = convertToBuh(100, 5, 'uah');
     assert.equal(result, '100.00000 uah');
  });

  it('convertToBuh should use minFractionDigits = decimals', function(){
    let result = convertToBuh(100.123, 12, 'usd');
     assert.equal(result, '100.123000000000 usd');
  });
});

describe('toSymbol', function(){
  it('toSymbol should return ', function(){
    let result = toSymbol('UAH');
     assert.equal(result, "₴");
  });

  it('toSymbol should return ', function(){
    let result = toSymbol('EUR');
     assert.equal(result, "€");
  });

  it('toSymbol should return ', function(){
    let result = toSymbol('USD');
     assert.equal(result, "$");
  });
 
});

describe('toCurrency', function(){
  it('toCurrency should return cuurency symbol ₴', function(){
    let result = toCurrency('₴');
     assert.equal(result, "UAH");
  });

  it('toCurrency should return cuurency symbol €', function(){
    let result = toCurrency('€');
     assert.equal(result, "EUR");
  });

  it('toCurrency should return cuurency symbol $', function(){
    let result = toCurrency('$');
     assert.equal(result, "USD");
  });
 
});
