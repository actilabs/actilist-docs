const loadValidator = async () => {
  if (typeof window === 'undefined') return null;
  let validatorJson = localStorage.getItem('actilistNode')
  let validator = JSON.parse(validatorJson);

  const previousCacheTime = validator ? validator.cacheTime : undefined
  const currentTime = Math.floor(Date.now() / 1000)
  const isExpired = currentTime - previousCacheTime > 300 || previousCacheTime === undefined

  if (!validator || isExpired) {
    const res = await fetch(
      'https://core.spartanapi.dev/secret/chains/secret-4/validators',
    ).then((r) => r.json())
  
    validator = res.validators.find((node) =>
      node.moniker.includes('ActiList'),
    )
    validator.cacheTime = currentTime

    localStorage.setItem('actilistNode', JSON.stringify(validator));
  }
  
  return validator;
}

export default loadValidator