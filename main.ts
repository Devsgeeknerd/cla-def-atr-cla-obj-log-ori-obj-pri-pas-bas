class Conta {
  titular: string = "";
  saldo: number = 0;
}

let contaDoPaulo: Conta = new Conta();
contaDoPaulo.titular = "Paulo";
let contaDoVanderley: Conta = new Conta();
contaDoVanderley.titular = "Vanderley";
console.log(contaDoPaulo);
console.log(contaDoVanderley);
