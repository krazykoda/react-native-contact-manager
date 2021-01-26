export function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
};

export function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (let i=0, len=str.length; i < len; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return bufView;
};