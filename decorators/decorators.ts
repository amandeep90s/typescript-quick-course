const someObject = {
  someProperty: 'initial',
};

class Manager {
  // @watchChange
  @linkValue(someObject)
  someProperty: string | undefined;
}

// * second way to use watchChange
// watchChange(Manager.prototype, 'someProperty');

const manager = new Manager();
manager.someProperty = '123';
console.log('someProperty', someObject.someProperty);
manager.someProperty = '456';
console.log('someProperty', someObject.someProperty);

// Decorator factory
function linkValue(otherObject: any) {
  return function (target: any, key: string) {
    let property = target[key];

    const getter = () => {
      return property;
    };

    const setter = (newValue: any) => {
      otherObject[key] = newValue;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true,
    });
  };
}

// target is Manager class and key is someProperty
function watchChange(target: any, key: string) {
  let property = target[key];

  const getter = () => {
    return property;
  };

  const setter = (newValue: any) => {
    console.log(`${key as string} changed from ${property} to ${newValue}`);
    property = newValue;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true,
  });
}
