import { observable, action, computed } from 'mobx'
import EosAgent from '../EosAgent'

export class EosioStore {
  @observable global = null
  @observable blockProducers = null
  @observable ramMarkets = null
  @observable voters = null
  @observable nameBids = null

  @action
  getGlobalInfo = () => {
    const query = {
      json: true,
      code: 'eosio',
      scope: 'eosio',
      table: 'global'
    }

    let globalInfo = EosAgent.getTableRows(query)
    //{"rows":[{"max_block_net_usage":1048576,"target_block_net_usage_pct":1000,"max_transaction_net_usage":524288,"base_per_transaction_net_usage":12,"net_usage_leeway":500,"context_free_discount_net_usage_num":20,"context_free_discount_net_usage_den":100,"max_block_cpu_usage":200000,"target_block_cpu_usage_pct":1000,"max_transaction_cpu_usage":150000,"min_transaction_cpu_usage":100,"max_transaction_lifetime":3600,"deferred_trx_expiration_window":600,"max_transaction_delay":3888000,"max_inline_action_size":4096,"max_inline_action_depth":4,"max_authority_depth":6,"max_ram_size":"68719476736","total_ram_bytes_reserved":"54375646207","total_ram_stake":"37909516538","last_producer_schedule_update":"2018-07-13T06:03:12.000","last_pervote_bucket_fill":"1531461791000000","pervote_bucket":241663153,"perblock_bucket":33931983,"total_unpaid_blocks":87234,"total_activated_stake":"3078799576275","thresh_activated_stake_time":"1529505892000000","last_producer_schedule_size":21,"total_producer_vote_weight":"10100489608007821312.00000000000000000","last_name_close":"2018-07-11T15:27:03.500"}],"more":false}
    // todo
  }

  @action
  getBlockProducers = () => {
    const query = {
      json: true,
      code: 'eosio',
      scope: 'eosio',
      table: 'producers',
      limit: 1000
    }

    let producers = EosAgent.getTableRows(query)
    // todo
  }

  @action
  getRamMarkets = () => {
    const query = {
      json: true,
      code: 'eosio',
      scope: 'eosio',
      table: 'rammarket',
      limit: 1
    }

    let producers = EosAgent.getTableRows(query)
    // todo
  }

  @action
  getVoters = () => {
    const query = {
      json: true,
      code: 'eosio',
      scope: 'eosio',
      table: '"voters"',
      table_key: '"owner"',
      limit: 1000
    }

    let voters = EosAgent.getTableRows(query)
    // todo
  }

  @action
  getNameBids = () => {
    const query = {
      json: true,
      code: 'eosio',
      scope: 'eosio',
      table: 'namebids',
      table_key: 'newname',
      limit: 1000
    }

    let nameBids = EosAgent.getTableRows(query)
    // todo
  }
}

export default new EosioStore()