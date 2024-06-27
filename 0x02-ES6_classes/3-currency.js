export default class Currency {
  constructor(code, name) {
    this._code = Currency.validateCode(code);
    this._name = Currency.validateName(name);
  }

  static validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  static validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = Currency.validateCode(code);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = Currency.validateName(name);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
