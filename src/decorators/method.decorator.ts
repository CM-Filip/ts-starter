// Example of a method decorator with a callback function as an optional parameter
// The decorator has three parameters
export function MethodDecorator(cb?: Function) {
  return function (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    // First we reference the original method to avoid loss of information
    const originalMethod = propertyDescriptor.value;
    
    // We then replace the original method with a new function
    propertyDescriptor.value = function (...args: any[]) {
      if (cb) cb();
      // Additional logic goes here
      // The execution of the original method is returned at the end of the new function
      return originalMethod.apply(this, args);
    }
  }
}