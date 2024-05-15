import { MonitorOptions } from "../types/monitor.type";

// A decorator that makes the property semi-private through the use of symbols as property keys
// Getters and setters are defined with the original property key
export function PropertyDecorator<T>(options?: MonitorOptions<T>): (target: any, propertyName: string) => void {
  return function (target: any, propName: string) {
    const symbol: unique symbol = Symbol();

    Object.defineProperty(target, symbol, {
      writable: true,
      enumerable: false,
      configurable: true
    });

    Object.defineProperty(target, propName, {
      get: function () {
        if (options && options.onGet) options.onGet(this[symbol]);
        return this[symbol];
      },
      set: function (value: T) {
        if (options && options.onSet) options.onSet(this[symbol], value);
        this[symbol] = value;
      }
    });
  }
}

// Cleaner alternative where privacy is achieved through closures
// Potentially more efficient solution
export function PropertyDecoratorAlternative<T>(options?: MonitorOptions<T>): (target: object, propertyName: string) => void {
  return function (target: any, propName: string) {
    let value: T;

    Object.defineProperty(target, propName, {
      get: function () {
        if (options && options.onGet) options.onGet(value);
        return value;
      },
      set: function (newValue: T) {
        if (options && options.onSet) options.onSet(value, newValue);
        value = newValue;
      },
      enumerable: true,
      configurable: true
    });
  }
}