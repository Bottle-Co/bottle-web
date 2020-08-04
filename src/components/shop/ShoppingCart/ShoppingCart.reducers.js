export const shoppingCartItems = (items = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...items, action.payload];

    case 'REMOVE_ITEM':
      const indexToRemove = items.findIndex(item => item.id === action.payload.id);
      const copy = [...items];

      copy.splice(indexToRemove, 1);

      return copy;

    default:
      return items;
  }
}
