const loadValidator = async () => {
  let validator = JSON.parse(localStorage.getItem('actilistNode'));
  
  if (!validator) {
    console.log('not found')
    const res = await fetch(
      'https://core.spartanapi.dev/secret/chains/secret-4/validators',
    ).then((r) => r.json())
  
    validator = res.validators.find((node) =>
      node.moniker.includes('ActiList'),
    )
    localStorage.setItem('actilistNode', JSON.stringify(validator));
  }
  
  return validator;
}

export default loadValidator