import { ClassDecoratorFactory } from "./decorators/class.decorator";
import { MethodDecorator } from "./decorators/method.decorator";
import { PropertyDecorator, PropertyDecoratorAlternative } from "./decorators/property.decorator";
import { Speak } from "./interfaces/speak.interface";

console.log('TS-STARTER');
@ClassDecoratorFactory('Log this message!')
class Person implements Speak {

  @PropertyDecorator<string>({
    onGet: (value) => console.log(value),
    onSet: (prev, next) => console.log(`${prev} was changed to ${next}`)
  })
  public name: string;

  @PropertyDecoratorAlternative<number>({
    onSet: (prev, next) => console.log(`${prev} was changed to ${next}`)
  })
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @MethodDecorator(() => console.log('Method was executed!'))
  sayHi(message: string) {
    console.log(message.toUpperCase());
    console.log(`Hi, my name is ${this.name}`);
  }

}

const rade = new Person('Rade', 29);
rade.name = 'Martin';
rade.age = 25;
rade.sayHi('Ola');

const stefan = new Person('Stefan', 24);
console.log(stefan);