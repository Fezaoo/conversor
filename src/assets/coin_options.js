import React from "react";




function CoinsOptions ({Moeda, setMoeda}) {

    return (
        <select className="select_moeda para_moeda" value={Moeda} defaultValue={Moeda} onChange={(e) => {setMoeda(e.target.value)}}>
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
    ) 
}

export default CoinsOptions;