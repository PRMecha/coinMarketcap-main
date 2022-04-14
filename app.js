/* Example in Node.js ES6 using request-promise */
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080
const fs = require('fs')
app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${PORT||8080}`);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// https.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('space time');
//   res.end();
// }).listen(8080); 


const rp = require('request-promise');
const { json } = require('express/lib/response')
const { stringify } = require('querystring')

app.get('/',  (req, res) =>{

  const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
      },
      headers: {
        //'X-CMC_PRO_API_KEY': 'ecd23aec-b6fb-488c-9cd5-8cf4946162bb'
          'X-CMC_PRO_API_KEY': 'ea788466-6ba3-4ffa-990f-eff31d09bed7'
      },
      json: true,
      gzip: true
    };
    
    rp(requestOptions).then(response => {
   
      res.render('index', {response})
    }).catch((err) => {
      console.log('API call error:', err.message);
    });

})

app.get('/graph', (req, res)=>{

  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD',
    },
    headers: {
      'X-CMC_PRO_API_KEY': '072dbdcc-167c-4208-aaed-e89a5dde7275'
    },
    json: true,
    gzip: true
  };
  
  rp(requestOptions)
  .then(response => {
    const js = JSON.stringify(response.data)
    const qj = JSON.parse(js)
    const jj = `[${qj}]`

    // const polkadotData = JSON.parse(js).filter(({name})=> name === 'Polkadot')
   
    // const polkadotDataSymbol = polkadotData[0].symbol
    // const polkadotDataSlug = polkadotData[0].slug
    // const polkadotDataNum_market_pairs = polkadotData[0].num_market_pairs
    // const polkadotDataDateAdded = polkadotData[0].date_added
    // const polkadotDataTags = polkadotData[0].tags
    // const polkadotDataMaxSupply = polkadotData[0].max_supply
    // const polkadotDataCirculating_supply = polkadotData[0].circulating_supply
    // const polkadotDataTotal_supply = polkadotData[0].total_supply
    // const polkadotDataPlatform = polkadotData[0].platform
    // const polkadotDataCmc_rank = polkadotData[0].cmc_rank
    // const polkadotDataSelf_reported_circulating_supply = polkadotData[0].self_reported_circulating_supply
    // const polkadotDataSelf_reported_market_cap = polkadotData[0].self_reported_market_cap
    // const polkadotDataLast_updated = polkadotData[0].last_updated
    // const polkadotDataQuote = polkadotData[0].quote
    
    const ethereumData = JSON.parse(js).filter(({name})=> name === 'Ethereum')
    const uniswapData = JSON.parse(js).filter(({name})=> name === 'Uniswap')
    const aaveData = JSON.parse(js).filter(({name})=> name === 'Aave')
    const inchData = JSON.parse(js).filter(({name})=> name == '1inch Network')
    const theSandboxData = JSON.parse(js).filter(({name})=> name == 'The Sandbox')
    const solanaData = JSON.parse(js).filter(({name})=> name == 'Solana')
    const raydiumData = JSON.parse(js).filter(({name})=> name == 'Raydium')
    const solendData = JSON.parse(js).filter(({name})=> name == 'Solend')
    const saberData = JSON.parse(js).filter(({name})=> name == 'Saber')
    const orcaData = JSON.parse(js).filter(({name})=> name == 'Orca')
    const binanceData = JSON.parse(js).filter(({name})=> name == 'BNB')
    const pancakeSwapData = JSON.parse(js).filter(({name})=> name == 'PancakeSwap')
    const biSwapData = JSON.parse(js).filter(({name})=> name == 'Biswap')
    const babyswapData = JSON.parse(js).filter(({name})=> name == 'BabySwap')
    const autosharkData = JSON.parse(js).filter(({name})=> name == 'AutoShark')
    const polygonData = JSON.parse(js).filter(({name})=> name == 'Polygon')
    const dfynnetworkData = JSON.parse(js).filter(({name})=> name == 'Dfyn Network')
    const quickswapData = JSON.parse(js).filter(({name})=> name == 'QuickSwap')
    const pegaxyData = JSON.parse(js).filter(({name})=> name == 'Pegaxy')
    const apeswapData = JSON.parse(js).filter(({name})=> name == 'ApeSwap')
    const avalancheData = JSON.parse(js).filter(({name})=> name == 'Avalanche')
    const avalaunchData = JSON.parse(js).filter(({name})=> name == 'Avalaunch')
    const crabadaData = JSON.parse(js).filter(({name})=> name == 'Crabada')
    const benqiData = JSON.parse(js).filter(({name})=> name == 'BENQI')
    const pangolinData = JSON.parse(js).filter(({name})=> name == 'Pangolin')
    const fantomData = JSON.parse(js).filter(({name})=> name == 'Fantom')
    const spookyswapData = JSON.parse(js).filter(({name})=> name == 'SpookySwap')
    const solidlyData = JSON.parse(js).filter(({name})=> name == 'Solidly')
    const screamData = JSON.parse(js).filter(({name})=> name == 'Scream')
    const geistData = JSON.parse(js).filter(({name})=> name == 'Geist Finance')
    const chaninlinktData = JSON.parse(js).filter(({name})=> name == 'Chainlink')
    // const ethereumDataQuote = ethereumData[0].quote
    const TranchessData = JSON.parse(js).filter(({name})=> name == 'Tranchess')

    // console.log(ethereumDataQuote.USD)
    // console.log(polkadotDataQuote.USD)
    // console.log(ethereumDataQuote.USD.price)
   
    // console.log(ethereumData)
    const ethereumDataStringify = JSON.stringify(ethereumData)
    const uniswapDataStringify = JSON.stringify(uniswapData)
    const aaveDataStringify = JSON.stringify(aaveData)
    const inchDataStringify = JSON.stringify(inchData)
    const theSandBoxStringify = JSON.stringify(theSandboxData)
    const solanaStringify = JSON.stringify(solanaData)
    const raydiumStringify = JSON.stringify(raydiumData)
    const solendStringify = JSON.stringify(solendData)
    const saberStringify = JSON.stringify(saberData)
    const orcaStringify = JSON.stringify(orcaData)
    const binanceStringify = JSON.stringify(binanceData)
    const pancakeswapStringify = JSON.stringify(pancakeSwapData)
    const biswapStringify = JSON.stringify(biSwapData)
    const babyswapStringify = JSON.stringify(babyswapData)
    const autosharkStringify = JSON.stringify(autosharkData)
    const polygonStringify = JSON.stringify(polygonData)
    const dfynnetworkStringify = JSON.stringify(dfynnetworkData)
    const quickswapStringify = JSON.stringify(quickswapData)
    const pegaxyStringify = JSON.stringify(pegaxyData)
    const apeswapStringify = JSON.stringify(apeswapData)
    const avalancheStringify = JSON.stringify(avalancheData)
    const avalaunchStringify = JSON.stringify(avalaunchData)
    const crabadaStringify = JSON.stringify(crabadaData)
    const benqiStringify = JSON.stringify(benqiData)
    const pangolinStringify = JSON.stringify(pangolinData)
    const fantomStringify = JSON.stringify(fantomData)
    const spookyswapStringify = JSON.stringify(spookyswapData)
    const solidlyStringify = JSON.stringify(solidlyData)
    const screamStringify = JSON.stringify(screamData)
    const geistStringify = JSON.stringify(geistData)
    const chainlinkStringify = JSON.stringify(chaninlinktData)
    const TranchessStringify = JSON.stringify(TranchessData)

    const etheUniswapData = `[${ethereumDataStringify+','+uniswapDataStringify+','+ aaveDataStringify+','+inchDataStringify+','+theSandBoxStringify+','+solanaStringify+','+raydiumStringify+','+solendStringify+','+saberStringify+','+orcaStringify+','+binanceStringify+','+pancakeswapStringify+','+biswapStringify+','+babyswapStringify+','+autosharkStringify+','+polygonStringify+','+dfynnetworkStringify+','+quickswapStringify+','+pegaxyStringify+','+apeswapStringify+','+avalancheStringify+','+avalaunchStringify+','+crabadaStringify+','+benqiStringify+','+pangolinStringify+','+fantomStringify+','+spookyswapStringify+','+solidlyStringify+','+screamStringify+','+geistStringify+','+chainlinkStringify+','+TranchessStringify}]`
    // const polkaEthDataParse = JSON.parse(polkaEtheData)
    
    fs.writeFile('./public/arquivo.json',etheUniswapData, (err)=>{
      if(err){
        console.log(err)
      }else{
        console.log('saved')
        res.status(200).redirect('/arquivo.json')
        // res.status(200).json(polkaEthDataParse)
      }
    })
 
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
})

app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
})

