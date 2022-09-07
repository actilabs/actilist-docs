export const saveItemToLS = (key, item) => {
  if (typeof window !== undefined) {
    localStorage.setItem(key, JSON.stringify(item))
  }
}

export const getItemFromLS = (key) => {
  if (typeof window !== undefined) {
    let res = localStorage.getItem(key)
    let item = JSON.parse(res)
    return item
  }
}
