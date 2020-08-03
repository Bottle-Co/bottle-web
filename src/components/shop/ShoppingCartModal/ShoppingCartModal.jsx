import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import './ShoppingCartModal.scss';
import ShoppingCartModalItem from '../ShoppingCartModalItem/ShoppingCartModalItem';
import CountUp from 'react-countup';

const mapStateToProps = (state) => ({
  items: state.shoppingCartItems
});

const ShoppingCartModal = (props) => {
  const [open, setOpen] = React.useState(false);
  let totalCost = 0;

  props.items.forEach(item => { totalCost += item.cost});

  return (
    <Modal
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
    >
      <Modal.Header>
        <div className="modal-header">
          {props.title}
          <CountUp
            className="modal-total-price"
            prefix="₹"
            end={totalCost}
            decimals={2}
            duration={0.5}
          />
        </div>
      </Modal.Header>
      <Modal.Content className="btl-item-container">
        {props.items.length === 0 && "Empty"}
        {props.items.map(item => (<ShoppingCartModalItem key={item.id} item={item} />))}
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" disabled={props.items.length === 0}>
          Checkout
        </Button>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default connect(
  mapStateToProps,
  {}
)
(ShoppingCartModal);