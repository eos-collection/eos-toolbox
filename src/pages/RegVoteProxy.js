import React, { Component, Fragment } from 'react'
import RegVoteProxyView from '../components/voting/RegVoteProxyView'
import { inject, observer } from '../../node_modules/mobx-react'

@inject('accountStore')
@observer
class RegVoteProxy extends Component {
  render() {
    const { accountStore } = this.props

    return (
      accountStore &&
      accountStore.accountInfo && (
        <Fragment>
          <div className="page-wrapper">
            <div className="page-body">
              <div className="row">
                <RegVoteProxyView />
              </div>
            </div>
          </div>
        </Fragment>
      )
    )
  }
}

export default RegVoteProxy