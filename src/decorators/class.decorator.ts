// A simple class decorator that extends the target class
// Properties and methods may be added at will
// The generic type T keeps things type-safe
export function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`A new instance of ${constructor.name} was just created!`);
    }
  };
}

// An example with a decorator factory
export function ClassDecoratorFactory<T extends { new (...args: any[]): {} }>(message: string) {
  return function (constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(`${Date()}: A new instance of ${constructor.name} was just created!`);
        console.log(message);
      }
    };
  }
}

// An alternative way to modify the class without returning a new class
export function ClassDecoratorAlternative() {
  return function (constructor: Function) {
    constructor.prototype.sayGoodbye = function () {
      console.log('Goodbye!');
    }
  }
}