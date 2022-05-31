export class ContaCorrente {
    agencia;
    client;

    // A convenção adota underline (_) à frente de um atributo, isso significa que ele é privado
    _saldo = 0;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
  
    // Método sacar
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        return valor;
      }
    }
  
    // Método depositar
    // depositar(valor) {
    //   if (valor > 0) {
    //     this._saldo += valor;
    //     console.log(this._saldo);
    //   }
    // }
    depositar(valor) {
      if (valor <= 0) return;
  
      this._saldo += valor;
    }
  }