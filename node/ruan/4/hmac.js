'use strict'

const crypto = require('crypto');

const hmac  = crypto.createHmac('sha256','secret-key');

hmac.update('hello,world');
hmac.update('hello,nodejs');

console.log(hmac.digest('hex'));