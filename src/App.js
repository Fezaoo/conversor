import './App.css';
import { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1 className='title'>
          Conversor de Moedas
        </h1>
      </header>
      <main className='corpo_container'>
        <section className='corpo'>
          <section className='header_corpo'>
            <h2 className='corpo_title'>
              Conversor de Moedas
            </h2>
            <p className='descricao'>
              Selecione a moeda que quer usar como referência e depois a moeda de comparação
            </p>
          </section>
          <section className='conversor_app'>
            <div className='valor_container'>
              <div className='valor_box'>
                <div className='h3_title_container'>
                  <h3 className='h3_title'>
                    Valor
                  </h3>
                </div>
                <input type='number' ></input>
              </div>
            </div>

            <div className='moedas_conversor'>
              <div className='conversor_container'>
                <div className='h3_title_container'>
                  <h3 className='h3_title'>
                    Converter de
                  </h3>
                </div>
                <select className='select_moeda de_moeda' >

                </select>
              </div>
              <div className='change_button_container' >
              <button className='change_button'>
                <FaExchangeAlt />
              </button>
              </div>
              <div className='conversor_container'>

                <div className='h3_title_container'>
                  <h3 className='h3_title'>
                    Para
                  </h3>
                </div>

                <select className='select_moeda para_moeda' >

                </select>
              </div>
            </div>
            <div className='equivalente_descricao_container'>
              <p className='equivalente_descricao'>
                1 USD equivale a 5 BRL
              </p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
