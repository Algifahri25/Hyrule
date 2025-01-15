//inheritance
class Laptop {
    constructor(brand, type, password) {
        this.brand = brand
        this.type = type
        this.encryptedPassword = this.#encrypt(password)
    }

    #encrypt = (password) => { return `encrypted-version-of-${password}`} 
    
    #decrypt = () => {
    return this.encryptedPassword.split(`encrypted-version-of-`)[1]}

 updatepassword(newPassword) {
  console.log(`Your old password is : ${this.#decrypt()}`)
  this.encryptedPassword = this.#encrypt(newPassword)
  console.log(`Your Password updated to : ${this.#decrypt()}`)
 }

info() {
  return `this laptop is ${this.brand} ${this.type}`
}

run() {
  return `${this.brand} ${this.type} is on!`
}
}

class LaptopGaming extends Laptop {
  constructor (brand, type, password){
    super(brand,type,password)
  }

info() {
  return `${super.info()} \nAble to Play Games!`
}

gaming() {
  return `${super.run()} \nRunning Star Rail and Fate Grand Order`
}
}

const gamingCapability = Base => class extends Base{
  gaming() { 
    return `Playing Star Rail at 120 fps!`
  }}

const editingCapability = Base => class extends Base{
  editing() {
    return `Let's edit and render at 8k Project`
  }
}

class LaptopGaming2 extends gamingCapability(Laptop) {
  constructor(brand, type, password){
    super(brand, type, password)
  }

  run(){
    return `${super.run()} and ${this.gaming()}`
  }
}

class LaptopEditing extends editingCapability(Laptop) {
  constructor(brand, type, password){
    super(brand, type, password)
  }
  run(){
    return `${super.run()}, ${this.editing()}}`
  }
}

let laptop1 = new Laptop ('Acer', 'Normal Laptop', 123)
let laptop2 = new LaptopGaming ('MSI', 'Hardcore Laptop', 456)

let laptop3 = new LaptopGaming ("Alienware", "Hardcore Laptop", 678)
console.log(laptop3.run())
console.log(laptop3.gaming())

let laptop4 = new LaptopEditing ("HP", "Editing Laptop", 789)
console.log(laptop4.run())