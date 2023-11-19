//Esempio

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputE = document.querySelector("#inputE") as HTMLInputElement;
  const x = parseInt(inputE.value, 10); // prendiamo il valore dell'input

  maggioreEta(x);
});

function maggioreEta(x: number, y: number = 18): void {
  if (!isNaN(x)) {
      // controllo che x sia un numero valido
      if (x >= y) {
          console.log("accesso consentito");
      } else {
          console.log("sei minorenne");
      }
  } else {
      console.log("devi inserire un numero valido");
  }
}
