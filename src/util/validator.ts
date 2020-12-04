const reservedWords = <const>[
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'super',
  'switch',
  'static',
  'this',
  'throw',
  'try',
  'True',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
];

export const FUNCTION_NAME = /^[$a-z_][\da-z_$]*$/i;

export const isValidFunctionName = (name: string) => {
  if (FUNCTION_NAME.test(name)) {
    return !reservedWords.some((i) => i === name);
  }

  return false;
};

export const isUTCTime = (val: string) => {
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
};

export const isLocationPath = (val: string) => {
  return /^(\/)[\w\-./]*[\w-]\.jsw?$/.test(val);
};
