import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import NumberFormat from 'react-number-format'
import { FormattedMessage } from 'react-intl'

@inject('eosioStore')
@observer
class StakingView extends Component {
  constructor(props) {
    super(props)
    let { eosioStore } = this.props
    this.eosioStore = eosioStore
  }

  componentDidMount = async () => {
    await this.eosioStore.getGlobalInfo()
    this.eosioStore.getStakingInfo()
  }

  render() {
    const totalPercent = this.eosioStore.staking
      ? `${this.eosioStore.staking.totalStakePercent.toFixed(0)}%`
      : '0%'
    const ramPercent = this.eosioStore.staking
      ? `${this.eosioStore.staking.ramStakePercent.toFixed(0)}%`
      : '0%'
    const totalStakingChartStyle = {
      width: totalPercent
    }
    const ramStakingChartStyle = {
      width: ramPercent
    }
    return (
      <div>
        {this.eosioStore.global &&
          this.eosioStore.staking && (
            <div className="row">
              <div className="col-md-6">
                <div className="card statustic-card">
                  <div className="card-header">
                    <h5>
                      <FormattedMessage id="Total Staking" />
                    </h5>
                  </div>
                  <div className="card-block text-center">
                    <span className="d-block text-c-blue f-36">
                      <NumberFormat
                        value={this.eosioStore.staking.totalStakePercent.toFixed(2)}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={'%'}
                      />
                    </span>
                    <div className="progress">
                      <div className="progress-bar bg-c-blue" style={totalStakingChartStyle} />
                    </div>
                  </div>
                  <div className="card-footer bg-c-blue">
                    <h6 className="text-white m-b-0">
                      <NumberFormat
                        value={this.eosioStore.staking.totalStake.toFixed(4)}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={' EOS'}
                      />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card statustic-card">
                  <div className="card-header">
                    <h5>
                      <FormattedMessage id="Ram Buying" />
                    </h5>
                  </div>
                  <div className="card-block text-center">
                    <span className="d-block text-c-pink f-36">
                      <NumberFormat
                        value={this.eosioStore.staking.ramStakePercent.toFixed(2)}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={'%'}
                      />
                    </span>
                    <div className="progress">
                      <div className="progress-bar bg-c-pink" style={ramStakingChartStyle} />
                    </div>
                  </div>
                  <div className="card-footer bg-c-pink">
                    <h6 className="text-white m-b-0">
                      <NumberFormat
                        value={this.eosioStore.staking.ramStake.toFixed(4)}
                        displayType={'text'}
                        thousandSeparator={true}
                        suffix={' EOS'}
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default StakingView
