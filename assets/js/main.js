function Calculadora() {
  let display = document.querySelector('.display');

  this.inicia = () => {
    cliqueBotoes();
    pressionaEnter();
  };

  const pressionaEnter = () => {
    display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        realizaConta();
      }
    });
  };

  const realizaConta = () => {
    let conta = display.value;

    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta inválida');
        return;
      }

      display.value = conta;
    } catch (e) {
      alert('Conta inválida');
    }
  };

  const clearDisplay = () => {
    display.value = '';
  };

  const apagaUm = () => {
    display.value = display.value.slice(0, -1);
  };

  const cliqueBotoes = () => {
    // this -> calculadora
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        apagaUm();
      }

      if (el.classList.contains('btn-eq')) {
        realizaConta();
      }

      display.focus();
    });
    //com function no document tem q usar o bind
  };

  const btnParaDisplay = (valor) => {
    display.value += valor;
  };
}

const calculadora = new Calculadora();

calculadora.inicia();
