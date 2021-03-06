import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) {
      if (novoValor isntanceof Cliente){
        
      }
      this._cliente = novoValor;
    }

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

    transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }
  }