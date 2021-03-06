import { connect } from 'react-redux'

import { getComponentState, getActiveExchange } from '../../redux/selectors/ui'
import { getAllBalances } from '../../redux/selectors/ws'
import { getExchanges } from '../../redux/selectors/meta'
import UIActions from '../../redux/actions/ui'

import BalancesTablePanel from './BalancesTablePanel'

const mapStateToProps = (state = {}, ownProps = {}) => {
  const { layoutID, layoutI: id } = ownProps
  const activeExchange = getActiveExchange(state)

  return {
    activeExchange,
    savedState: getComponentState(state, layoutID, 'balances', id),
    exchanges: getExchanges(state),
    balances: getAllBalances(state),
  }
}

const mapDispatchToProps = dispatch => ({
  saveState: (layoutID, componentID, state) => {
    dispatch(UIActions.saveComponentState({
      state,
      layoutID,
      componentID,
    }))
  },
  setFilteredValueWithKey: (key, value) => {
    dispatch(UIActions.setFilteredValueWithKey(key, value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BalancesTablePanel)
