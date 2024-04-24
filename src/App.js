import './App.css';
import { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import api from './services/api';
import { useEffect } from 'react';
import CoinsOptions from './assets/coin_options';

function App() {
  const [Moeda_padrao, setMoeda_padrao] = useState("USD")
  const [Moeda_convertida, setMoeda_convertida] = useState("BRL")
  const [Cotacao, setCotacao] = useState(0)
  const [Valor, setValor] = useState(1.00)

  async function converter() {
    try {
      const response = await api.get(`/${Moeda_padrao}-${Moeda_convertida}`)
      console.log(response)
      const data = response.data
      const cotacao = data[0]['bid']
      setCotacao(cotacao)
    } catch {
    }
  }

  function change_coins () {
    const aux = Moeda_padrao
    setMoeda_padrao(Moeda_convertida)
    setMoeda_convertida(aux)    
  }


  useEffect(() => {
    converter()
  }, [Moeda_padrao, Moeda_convertida]);


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


            <div className='moedas_conversor'>
              <div className='conversor_container'>
                <div className='h3_title_container'>
                  <h3 className='h3_title'>
                    Converter de
                  </h3>
                </div>
                <CoinsOptions Moeda = {Moeda_padrao} setMoeda = {setMoeda_padrao}/>
              </div>
              <div className='change_button_container' >
                <button className='change_button' onClick={change_coins}>
                  <FaExchangeAlt />
                </button>
              </div>
              <div className='conversor_container'>

                <div className='h3_title_container'>
                  <h3 className='h3_title'>
                    Para
                  </h3>
                </div>
                <CoinsOptions Moeda = {Moeda_convertida} setMoeda = {setMoeda_convertida}/>
              </div>
            </div>
            <div className='valor_container'>
              <div className='valor_box'>
                <div className='h3_title_container'>
                  <h3 className='h3_title'>
                    Valor
                  </h3>
                </div>
                <input type='number' value={Valor} onChange={(e) => {setValor(e.target.value)}}/>
              </div>
            </div>
            <div className='resultado_container'>
              <h3 className='resultado_title'>
                Resultado da Conversão
              </h3>
              <div className='resultado_conversao_title'>
                <h3>
                  {Moeda_padrao} <MdOutlineArrowForwardIos size={16}/> {Moeda_convertida}
                </h3>
              </div>
              <div className='resultado_conversao_container'>
                <div className='resultado_conversao'>
                  <p className='cotacao_valor'>{(Cotacao * Valor).toFixed(3)}</p>
                </div>
              </div>
              <p className='resultado_descricao'>
                1 {Moeda_padrao} equivale a {(Cotacao * Valor).toFixed(3)} {Moeda_convertida}
              </p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
