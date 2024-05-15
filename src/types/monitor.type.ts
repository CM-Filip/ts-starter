export type MonitorOptions<T> = {
  onGet?: (value: T) => void
  onSet?: (prev: T, next: T) => void
}

export namespace Utils {
  export function doSomething() {
    console.log('Something was done!');
  }
}