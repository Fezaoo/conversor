import './App.css';
import { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import api from './services/api';
import { useEffect } from 'react';
import coins_options from './assets/coin_options';

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
                <select className='select_moeda de_moeda' value={Moeda_padrao} defaultValue={Moeda_padrao} onChange={(e) => {setMoeda_padrao(e.target.value) }}>
                  <option className='opcao_moeda' value='USD'>USD - Dólar Americano</option>
                  <option className='opcao_moeda' value='EUR'>EUR - Euro</option>
                  <option className='opcao_moeda' value='JPY'>JPY - Iene Japonês</option>
                  <option className='opcao_moeda' value='GBP'>GBP - Libra Esterlina</option>
                  <option className='opcao_moeda' value='AUD'>AUD - Dólar Australiano</option>
                  <option className='opcao_moeda' value='CAD'>CAD - Dólar Canadense</option>
                  <option className='opcao_moeda' value='CHF'>CHF - Franco Suíço</option>
                  <option className='opcao_moeda' value='CNY'>CNY - Yuan Chinês</option>
                  <option className='opcao_moeda' value='SEK'>SEK - Coroa Sueca</option>
                  <option className='opcao_moeda' value='NZD'>NZD - Dólar Neozelandês</option>
                  <option className='opcao_moeda' value='MXN'>MXN - Peso Mexicano</option>
                  <option className='opcao_moeda' value='SGD'>SGD - Dólar de Singapura</option>
                  <option className='opcao_moeda' value='HKD'>HKD - Dólar de Hong Kong</option>
                  <option className='opcao_moeda' value='NOK'>NOK - Coroa Norueguesa</option>
                  <option className='opcao_moeda' value='KRW'>KRW - Won Sul-Coreano</option>
                  <option className='opcao_moeda' value='TRY'>TRY - Lira Turca</option>
                  <option className='opcao_moeda' value='RUB'>RUB - Rublo Russo</option>
                  <option className='opcao_moeda' value='INR'>INR - Rúpia Indiana</option>
                  <option className='opcao_moeda' value='BRL'>BRL - Real Brasileiro</option>
                  <option className='opcao_moeda' value='ZAR'>ZAR - Rand Sul-Africano</option>
                  <option className='opcao_moeda' value='DKK'>DKK - Coroa Dinamarquesa</option>
                  <option className='opcao_moeda' value='PLN'>PLN - Złoty Polonês</option>
                  <option className='opcao_moeda' value='THB'>THB - Baht Tailandês</option>
                  <option className='opcao_moeda' value='IDR'>IDR - Rupia Indonésia</option>
                  <option className='opcao_moeda' value='HUF'>HUF - Florim Húngaro</option>
                  <option className='opcao_moeda' value='CZK'>CZK - Coroa Tcheca</option>
                  <option className='opcao_moeda' value='ILS'>ILS - Novo Shekel Israelense</option>
                  <option className='opcao_moeda' value='CLP'>CLP - Peso Chileno</option>
                  <option className='opcao_moeda' value='PHP'>PHP - Peso Filipino</option>
                  <option className='opcao_moeda' value='AED'>AED - Dirham dos Emirados Árabes Unidos</option>
                  <option className='opcao_moeda' value='SAR'>SAR - Riyal Saudita</option>
                  <option className='opcao_moeda' value='MYR'>MYR - Ringgit Malaio</option>
                  <option className='opcao_moeda' value='RON'>RON - Leu Romeno</option>
                  <option className='opcao_moeda' value='COP'>COP - Peso Colombiano</option>
                  <option className='opcao_moeda' value='ARS'>ARS - Peso Argentino</option>
                  <option className='opcao_moeda' value='TWD'>TWD - Novo Dólar Taiwanês</option>
                  <option className='opcao_moeda' value='NPR'>NPR - Rúpia Nepalesa</option>
                  <option className='opcao_moeda' value='VND'>VND - Dong Vietnamita</option>
                  <option className='opcao_moeda' value='EGP'>EGP - Libra Egípcia</option>
                  <option className='opcao_moeda' value='PKR'>PKR - Rupia Paquistanesa</option>
                  <option className='opcao_moeda' value='BDT'>BDT - Taka de Bangladesh</option>
                  <option className='opcao_moeda' value='IQD'>IQD - Dinar Iraquiano</option>
                  <option className='opcao_moeda' value='KWD'>KWD - Dinar Kuwaitiano</option>
                  <option className='opcao_moeda' value='DZD'>DZD - Dinar Argelino</option>
                  <option className='opcao_moeda' value='OMR'>OMR - Rial Omanense</option>
                  <option className='opcao_moeda' value='QAR'>QAR - Riyal Catariano</option>
                  <option className='opcao_moeda' value='MAD'>MAD - Dirham Marroquino</option>
                </select>
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

                <select className='select_moeda para_moeda' value={Moeda_convertida} defaultValue={Moeda_convertida} onChange={(e) => { setMoeda_convertida(e.target.value) }}>
                  <option className='opcao_moeda' value='USD'>USD - Dólar Americano</option>
                  <option className='opcao_moeda' value='EUR'>EUR - Euro</option>
                  <option className='opcao_moeda' value='JPY'>JPY - Iene Japonês</option>
                  <option className='opcao_moeda' value='GBP'>GBP - Libra Esterlina</option>
                  <option className='opcao_moeda' value='AUD'>AUD - Dólar Australiano</option>
                  <option className='opcao_moeda' value='CAD'>CAD - Dólar Canadense</option>
                  <option className='opcao_moeda' value='CHF'>CHF - Franco Suíço</option>
                  <option className='opcao_moeda' value='CNY'>CNY - Yuan Chinês</option>
                  <option className='opcao_moeda' value='SEK'>SEK - Coroa Sueca</option>
                  <option className='opcao_moeda' value='NZD'>NZD - Dólar Neozelandês</option>
                  <option className='opcao_moeda' value='MXN'>MXN - Peso Mexicano</option>
                  <option className='opcao_moeda' value='SGD'>SGD - Dólar de Singapura</option>
                  <option className='opcao_moeda' value='HKD'>HKD - Dólar de Hong Kong</option>
                  <option className='opcao_moeda' value='NOK'>NOK - Coroa Norueguesa</option>
                  <option className='opcao_moeda' value='KRW'>KRW - Won Sul-Coreano</option>
                  <option className='opcao_moeda' value='TRY'>TRY - Lira Turca</option>
                  <option className='opcao_moeda' value='RUB'>RUB - Rublo Russo</option>
                  <option className='opcao_moeda' value='INR'>INR - Rúpia Indiana</option>
                  <option className='opcao_moeda' value='BRL'>BRL - Real Brasileiro</option>
                  <option className='opcao_moeda' value='ZAR'>ZAR - Rand Sul-Africano</option>
                  <option className='opcao_moeda' value='DKK'>DKK - Coroa Dinamarquesa</option>
                  <option className='opcao_moeda' value='PLN'>PLN - Złoty Polonês</option>
                  <option className='opcao_moeda' value='THB'>THB - Baht Tailandês</option>
                  <option className='opcao_moeda' value='IDR'>IDR - Rupia Indonésia</option>
                  <option className='opcao_moeda' value='HUF'>HUF - Florim Húngaro</option>
                  <option className='opcao_moeda' value='CZK'>CZK - Coroa Tcheca</option>
                  <option className='opcao_moeda' value='ILS'>ILS - Novo Shekel Israelense</option>
                  <option className='opcao_moeda' value='CLP'>CLP - Peso Chileno</option>
                  <option className='opcao_moeda' value='PHP'>PHP - Peso Filipino</option>
                  <option className='opcao_moeda' value='AED'>AED - Dirham dos Emirados Árabes Unidos</option>
                  <option className='opcao_moeda' value='SAR'>SAR - Riyal Saudita</option>
                  <option className='opcao_moeda' value='MYR'>MYR - Ringgit Malaio</option>
                  <option className='opcao_moeda' value='RON'>RON - Leu Romeno</option>
                  <option className='opcao_moeda' value='COP'>COP - Peso Colombiano</option>
                  <option className='opcao_moeda' value='ARS'>ARS - Peso Argentino</option>
                  <option className='opcao_moeda' value='TWD'>TWD - Novo Dólar Taiwanês</option>
                  <option className='opcao_moeda' value='NPR'>NPR - Rúpia Nepalesa</option>
                  <option className='opcao_moeda' value='VND'>VND - Dong Vietnamita</option>
                  <option className='opcao_moeda' value='EGP'>EGP - Libra Egípcia</option>
                  <option className='opcao_moeda' value='PKR'>PKR - Rupia Paquistanesa</option>
                  <option className='opcao_moeda' value='BDT'>BDT - Taka de Bangladesh</option>
                  <option className='opcao_moeda' value='IQD'>IQD - Dinar Iraquiano</option>
                  <option className='opcao_moeda' value='KWD'>KWD - Dinar Kuwaitiano</option>
                  <option className='opcao_moeda' value='DZD'>DZD - Dinar Argelino</option>
                  <option className='opcao_moeda' value='OMR'>OMR - Rial Omanense</option>
                  <option className='opcao_moeda' value='QAR'>QAR - Riyal Catariano</option>
                  <option className='opcao_moeda' value='MAD'>MAD - Dirham Marroquino</option>
                </select>
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
