export const shoppingCartItems = (items = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...items, action.payload];

    case 'REMOVE_ITEM':
      return items.filter(item => item.id !== action.payload.id);

    default:
      return items;
  }
}
