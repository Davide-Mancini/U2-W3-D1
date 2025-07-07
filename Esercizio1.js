class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  //   funzione di confronto dell'eta dei due utenti
  confronto = function () {
    if (utente1.age > utente2.age) {
      return utente1.firstName + " è più vecchio";
    } else {
      return utente2.firstName + " è più vecchio";
    }
  };
  //   Presentazione utenti usando le proprietà dell'oggetto
  presentazione = function () {
    return (
      "Ciao mi chiamo " +
      this.firstName +
      " " +
      this.lastName +
      " ho " +
      this.age +
      " anni e vivo a " +
      this.location
    );
  };
}
const utente1 = new User("Davide", "Mancini", 26, "Roma");
const utente2 = new User("Rachele", "Frascatani", 25, "Erlangen");
console.log(utente1);
console.log(utente2);
console.log(utente1.confronto());
console.log(utente1.presentazione());
console.log(utente2.presentazione());
