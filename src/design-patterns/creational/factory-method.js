class Item {
  constructor(data) {
    this.type = data.type;
    this.model = data.model;
    this.color = data.color;
    this.transmission = data.transmission;
    this.isAirbags = data.isAirbags;
    this.engine = data.engine;
    this.seats = data.seats;
  }

  toArray() {
    return [
      this.type,
      this.model,
      this.color,
      this.transmission,
      this.isAirbags,
      this.engine,
      this.seats,
    ];
  }

  toString() {
    return this.toArray().join("\n");
  }
}

class ItemCar extends Item {
  constructor(data) {
    super(data);
  }
}

class ItemTruck extends Item {
  constructor(data) {
    super(data);
  }
}

class Factory {
  create(type) {
    if (type === "car") {
      const data = {
        type: "car",
        model: "2530S",
        color: "red",
        transmission: "automatic",
        isAirbags: true,
        engine: 4000,
        seats: 4,
      };
      return new ItemCar(data);
    }

    if (type === "truck") {
      const data = {
        type: "truck",
        model: "3542М",
        color: "red",
        transmission: "manual",
        isAirbags: true,
        engine: 12700,
        seats: 3,
      };
      return new ItemTruck(data);
    }

    throw new Error(`${type} is wrong type of product`);
  }
}

class FactoryCar {
  create() {
    const data = {
      type: "car",
      model: "2530S",
      color: "red",
      transmission: "automatic",
      isAirbags: true,
      engine: 4000,
      seats: 4,
    };
    return new ItemCar(data);
  }
}

class FactoryTruck {
  create() {
    const data = {
      type: "truck",
      model: "3542М",
      color: "red",
      transmission: "manual",
      isAirbags: true,
      engine: 12700,
      seats: 3,
    };
    return new ItemTruck(data);
  }
}

module.exports = {
  ItemCar,
  ItemTruck,
  Factory,
  FactoryCar,
  FactoryTruck,
};
