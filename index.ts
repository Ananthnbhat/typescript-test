// module.exports = dotpath;
type ObjectWithPath = {
  [key: string]: any;
};

export default function dotpath(str: string) {
  const parts: string[] = str.split(".");
  const len: number = parts.length;

  return function parse(obj: ObjectWithPath) {
    var testKey;

    for (var i = 0; i < len; ++i) {
      testKey = parts[i];

      if (!obj) return;

      obj = obj[testKey];
    }

    return obj;
  };
}
