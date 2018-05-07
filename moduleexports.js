function MyClass() {
  this.foo = 'bar';
}

module.exports = new MyClass();

// console.log(require.main)

// console.log(module)


// console.log(require.main === module)


// exports = new MyClass(); // if only use this, require('./moduleexports') is {}
