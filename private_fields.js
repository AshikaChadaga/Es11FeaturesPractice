class Smartphones {
    #phone_color = "silver";//private field
  
  get_color() {
      return this.#phone_color;
    }
  }
  const iPhone = new Smartphones("iPhone");
  console.log(iPhone.get_color());
//   console.log(iPhone.#phone_color) // output is: Private field '#phone_color' must be declared in an enclosing class