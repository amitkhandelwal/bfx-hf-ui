import { connect } from 'react-redux'
import BTNewContent from './BTNewContent'
import DataActions from '../../redux/actions/data'
import getCandles from '../../redux/selectors/candles'

const mapStateToProps = (state = {}, ownProps = {}) => {
  const { symbol, tf } = ownProps
  const candles = getCandles(state, symbol, tf, 'trade')

  console.log({ symbol, tf })

  return {
    candles
  }
}

const mapDispatchToProps = dispatch => ({
  syncCandles: (symbol, tf, range) => {
    dispatch(DataActions.syncCandles(symbol, tf, range))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BTNewContent)
