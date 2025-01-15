//inheritance
class Laptop {
    constructor(brand, type, password) {
        this.brand = brand
        this.type = type
        this._password = password
    }

  #encrypt (password) {
    return btoa(password)
  }

  #decrypt(encryptedPassword){
    return atob(encryptedPassword)
  }

  updatePassword(newPassword){
    this._password = this.#encrypt(newPassword)
    console.log('Update berhasil')
  }

  menampilkanPassword(){
    console.log(`menampilkan password: ${this.#decrypt(this._password)}`)
  }
}

try{
    const myLaptop = new Laptop('Acer',"Ryzen 5", "passwordBaru")
    console.log(`menampilkan password : ${myLaptop._password}`)
    myLaptop.updatePassword("one")
    myLaptop.menampilkanPassword()
} catch (error) {console.error("Error occured:", error.message)}
