const {
  Factory,
  FactoryCar,
  FactoryTruck,
  ItemCar,
  ItemTruck,
} = require("../factory-method");
const carToArray = ["car", "2530S", "red", "automatic", true, 4000, 4];
const carToString = carToArray.join("\n");
const truckToArray = ["truck", "3542М", "red", "manual", true, 12700, 3];
const truckToString = truckToArray.join("\n");

describe("Factory Method: Factory", () => {
  const factory = new Factory();
  const car = factory.create("car");
  const truck = factory.create("truck");

  test("Factory: instanceof", () => {
    expect(car instanceof ItemCar).toEqual(true);
    expect(truck instanceof ItemTruck).toEqual(true);
  });
  test("Factory: toArray method", () => {
    expect(truck.toArray()).toEqual(truckToArray);
    expect(car.toArray()).toEqual(carToArray);
  });
  test("Factory: toString method", () => {
    expect(truck.toString()).toEqual(truckToString);
    expect(car.toString()).toEqual(carToString);
  });
});

describe("Factory Method: FactoryCar", () => {
  const factory = new FactoryCar();
  const car1 = factory.create();
  const car2 = factory.create();

  test("Factory: instanceof", () => {
    expect(car1 instanceof ItemCar).toEqual(true);
    expect(car2 instanceof ItemCar).toEqual(true);
  });
  test("Factory: toArray method", () => {
    expect(car1.toArray()).toEqual(carToArray);
    expect(car2.toArray()).toEqual(carToArray);
  });
  test("Factory: toString method", () => {
    expect(car1.toString()).toEqual(carToString);
    expect(car2.toString()).toEqual(carToString);
  });
});

describe("Factory Method: FactoryTruck", () => {
  const factory = new FactoryTruck();
  const truck1 = factory.create();
  const truck2 = factory.create();

  test("Factory: instanceof", () => {
    expect(truck1 instanceof ItemTruck).toEqual(true);
    expect(truck2 instanceof ItemTruck).toEqual(true);
  });
  test("Factory: toArray method", () => {
    expect(truck1.toArray()).toEqual(truckToArray);
    expect(truck2.toArray()).toEqual(truckToArray);
  });
  test("Factory: toString method", () => {
    expect(truck1.toString()).toEqual(truckToString);
    expect(truck2.toString()).toEqual(truckToString);
  });
});
