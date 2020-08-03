export const addItem = (product) => {
  console.log('Added item', product)
  return {
    type: 'ADD_ITEM',
    payload: {
      ...product
    }
  };
}

export const removeItem = (product) => {
  console.log('Removed item', product)
  return {
    type: 'REMOVE_ITEM',
    payload: {
      ...product
    }
  };
}
