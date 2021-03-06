import { decorate, observable, action } from 'mobx'
import ApiAgent from '../ApiAgent'
import Swal from 'sweetalert2'

export class CommonStore {
  isLoading = true
  _initilizedScatter = false
  _initilizedEos = false
  coinMarketCap = null

  setLoading = isLoading => {
    this.isLoading = isLoading
  }

  initScatter = isInit => {
    this._initilizedScatter = isInit
  }

  initEos = isInit => {
    this._initilizedEos = isInit
  }

  getCoinMarketCap = async () => {
    try {
      let result = await ApiAgent.getCoinMarketCap()

      if (result) {
        this.coinMarketCap = result.data
      }
    } catch (e) {
      console.log(e)
    }
  }

  scatterNeededAlert = () => {
    Swal({
      type: 'error',
      title: 'Oops...',
      text: 'You need to login with Scatter wallet!',
      footer: '<a href="https://get-scatter.com/">Do you need scatter?</a>'
    })
  }
}

decorate(CommonStore, {
  isLoading: observable,
  _initilizedScatter: observable,
  _initilizedEos: observable,
  coinMarketCap: observable,
  ramMarketCap: observable,
  setLoading: action,
  initScatter: action,
  initEos: action,
  getCoinMarketCap: action,
  scatterNeededAlert: action
})

export default new CommonStore()
