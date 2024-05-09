// Question: Create and Manage a Virtual Zoo with Object-Oriented Programming.
// Create a class structure to manage animals, zookeepers, and habitats.

// Solution
class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.healthRecords = [];
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`);
  }

  updateHealthRecord(record) {
    this.healthRecords.push(record);
    console.log(`Health update for ${this.name}: ${record}`);
  }
}

class Zookeeper {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.animals = [];
  }

  assignAnimal(animal) {
    this.animals.push(animal);
    console.log(`Assigned ${animal.name} to Zookeeper ${this.name}`);
  }

  // Assigning Animals to Zookeepers and Maintaining Records
  unassignAnimal(animal) {
    const index = this.animals.indexOf(animal);
    if(index !== -1) {
      this.animals.splice(index, 1);
      console.log(`Unassigned ${animal.name} from Zookeeper ${this.name}`);
    }
  }
}

class Habitat {
  constructor(environmentType) {
    this.environmentType = environmentType;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to ${this.environmentType} environment`);
  }

  // Transferring Animals Between Habitats
  transferAnimal(animal, newHabitat) {
    this.removeAnimal(animal);
    newHabitat.addAnimal(animal);
    console.log(`Transferred ${animal.name} from ${this.environmentType} to ${newHabitat.environmentType}`);
  }
}

// Language Choices Explained: We've used JavaScript for the object-oriented programming part because it's widely used in web development and familiar to many of our subscribers. This should make it easier for those primarily involved in web projects to grasp and relate to the concepts.
// For the algorithm challenge, we opted for Python due to its simplicity and readability, especially when dealing with complex algorithms. Python’s concise syntax is ideal for demonstrating algorithmic solutions, making it easier to understand and implement Dijkstra’s algorithm.
