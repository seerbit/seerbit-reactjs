import React from 'react'
import PropTypes from 'prop-types'
import {loadScript} from './lib/helpers'

class SeerbitCheckout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    const scriptUrl = `https://checkout.seerbitapi.com/api/v${this.props.version}/seerbit.js`
    loadScript(scriptUrl, this.props.scriptId, r => this.setState({ready: true}))
  }

  checkout() {
    if (!this.state.ready) return false

    let seerbitOptions = {
      tranref: this.props.tranref,
      currency: this.props.currency,
      description: this.props.description,
      country: this.props.country,
      amount: this.props.amount,
      callbackurl: this.props.callbackurl,
      callback: this.props.callback,
      public_key: this.props.public_key,
      full_name: this.props.full_name,
      email: this.props.email,
      mobile_no: this.props.mobile_no,
      customization: this.props.customization,
      clientappcode: this.props.clientappcode
    }

    window.SeerbitPay(seerbitOptions, this.props.callback, this.props.close)
  }
  render() {
    const CTAElem = this.props.ElemType
    return (
      <div className='seerbit-pay' id='seerbit-pay'>
        <CTAElem
          className={this.props.ElemClass}
          onClick={this.checkout}
          disabled={this.props.disabled}
          type={this.props.ElemType === 'button' ? 'button' : null}
        >
          {this.props.title}
        </CTAElem>
      </div>
    )
  }
}

SeerbitCheckout.propTypes = {
  version: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  ElemClass: PropTypes.string,
  ElemType: PropTypes.string,
  scriptId: PropTypes.string,
  currency: PropTypes.string,
  clientappcode: PropTypes.string,
  country: PropTypes.string,
  description: PropTypes.string,
  tranref: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  public_key: PropTypes.string.isRequired,
  callback: PropTypes.string,
  callbackurl: PropTypes.string,
  close: PropTypes.func,
  full_name: PropTypes.string,
  email: PropTypes.string,
  mobile_no: PropTypes.string,
  customization: PropTypes.object
}

SeerbitCheckout.defaultProps = {
  title: 'Checkout',
  currency: 'NGN',
  ElemType: 'button',
  version: '2',
  ElemClass: '',
  scriptId: 'seerbit-reactjs',
  disabled: false
}

export default SeerbitCheckout
