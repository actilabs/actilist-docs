const loadValidator = async () => {
    const supply = await fetch(
      'https://lcd.mainnet.secretsaturn.net/cosmos/bank/v1beta1/supply/uscrt?',
    ).then((r) => r.json())
    const circulating_supply = supply.amount.amount;

    const bonded = await fetch(
      'https://lcd.mainnet.secretsaturn.net/cosmos/staking/v1beta1/pool?',
    ).then((r) => r.json())
    const bonded_tokens = bonded.pool.bonded_tokens;

    const inflation_response = await fetch(
      'https://lcd.mainnet.secretsaturn.net/cosmos/mint/v1beta1/inflation?',
    ).then((r) => r.json())
    const inflation = inflation_response.inflation * 100;

    
    const bonded_percentage =  (bonded_tokens / circulating_supply) * 100
    const rewards = (inflation * 100) / bonded_percentage
    const res = await fetch(
      'https://lcd.secret.express/cosmos/staking/v1beta1/validators?pagination.limit=1000',
    ).then((r) => r.json())
  
    const validator = res.validators.find((node) =>
    node.description.moniker.includes('ActiList'))

  return {validator, rewards};
}


export default loadValidator