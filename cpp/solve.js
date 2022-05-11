let r = require('./cpp.js');
let fs = require('fs');

var CHAR_a = 97
var CHAR_b = 98
var CHAR_c = 99
var CHAR_d = 100
var CHAR_e = 101
var CHAR_f = 102
var CHAR_g = 103
var CHAR_h = 104
var CHAR_i = 105
var CHAR_j = 106
var CHAR_k = 107
var CHAR_l = 108
var CHAR_m = 109
var CHAR_n = 110
var CHAR_o = 111
var CHAR_p = 112
var CHAR_q = 113
var CHAR_r = 114
var CHAR_s = 115
var CHAR_t = 116
var CHAR_u = 117
var CHAR_v = 118
var CHAR_w = 119
var CHAR_x = 120
var CHAR_y = 121
var CHAR_z = 122
var CHAR_A = 65
var CHAR_B = 66
var CHAR_C = 67
var CHAR_D = 68
var CHAR_E = 69
var CHAR_F = 70
var CHAR_G = 71
var CHAR_H = 72
var CHAR_I = 73
var CHAR_J = 74
var CHAR_K = 75
var CHAR_L = 76
var CHAR_M = 77
var CHAR_N = 78
var CHAR_O = 79
var CHAR_P = 80
var CHAR_Q = 81
var CHAR_R = 82
var CHAR_S = 83
var CHAR_T = 84
var CHAR_U = 85
var CHAR_V = 86
var CHAR_W = 87
var CHAR_X = 88
var CHAR_Y = 89
var CHAR_Z = 90
var CHAR_0 = 48
var CHAR_1 = 49
var CHAR_2 = 50
var CHAR_3 = 51
var CHAR_4 = 52
var CHAR_5 = 53
var CHAR_6 = 54
var CHAR_7 = 55
var CHAR_8 = 56
var CHAR_9 = 57
var CHAR_LBRACE = 123
var CHAR_RBRACE = 125
var CHAR_UNDERSCORE = 95

let CHARS = [
  CHAR_a,
  CHAR_b,
  CHAR_c,
  CHAR_d,
  CHAR_e,
  CHAR_f,
  CHAR_g,
  CHAR_h,
  CHAR_i,
  CHAR_j,
  CHAR_k,
  CHAR_l,
  CHAR_m,
  CHAR_n,
  CHAR_o,
  CHAR_p,
  CHAR_q,
  CHAR_r,
  CHAR_s,
  CHAR_t,
  CHAR_u,
  CHAR_v,
  CHAR_w,
  CHAR_x,
  CHAR_y,
  CHAR_z,
  CHAR_A,
  CHAR_B,
  CHAR_C,
  CHAR_D,
  CHAR_E,
  CHAR_F,
  CHAR_G,
  CHAR_H,
  CHAR_I,
  CHAR_J,
  CHAR_K,
  CHAR_L,
  CHAR_M,
  CHAR_N,
  CHAR_O,
  CHAR_P,
  CHAR_Q,
  CHAR_R,
  CHAR_S,
  CHAR_T,
  CHAR_U,
  CHAR_V,
  CHAR_W,
  CHAR_X,
  CHAR_Y,
  CHAR_Z,
  CHAR_0,
  CHAR_1,
  CHAR_2,
  CHAR_3,
  CHAR_4,
  CHAR_5,
  CHAR_6,
  CHAR_7,
  CHAR_8,
  CHAR_9,
  CHAR_LBRACE,
  CHAR_RBRACE,
  CHAR_UNDERSCORE,
];

let sleep = mili => new Promise(cb => setTimeout(() => cb(), mili));

(async() => {
  let currIndex = 4;
  let flag = 'CTF{write_flag_here_please}'.split('');

  for (let currIndex = 0; currIndex < 27; currIndex++) {
    for (let char of CHARS) {
      flag[currIndex] = String.fromCharCode(char);
      let flagStr = flag.join('')
      console.log(flagStr);

      r(flagStr);

      // await sleep(5000);

      let logs = fs.readFileSync('./logs1.txt', 'utf-8');
      let lines = logs.split('\n');

      let arr = [];

      for (let i = 0; i < lines.length; i++)
        if (lines[i].includes('S = 52. Need 52')) {
          let data = lines[i + 1].replace('Q0, Q1, Q2, Q3, Q4, Q5, Q6, Q7: ', '').trim().split(' ').map(item => parseInt(item));

          if (data.length)
            arr.push(data);
        }

      let ok = true;

      if (arr.length < currIndex) {
        continue;
      }

      // console.log(arr[currIndex]);

      for (let item of arr[currIndex])
        if (item) {
          ok = false;
          break;
        }

      if (ok) {
        // console.log(char);
        break;
      }
    }
  }
})();