class CrudStateManager {

  constructor (initialState = 'index') {
    this._states = {
      index: true,
      create: false,
      update: false,
      delete: false
    }

    this._changeState(initialState)
  }

  get index () {
    return this._states.index
  }

  get create () {
    return this._states.create
  }

  get update () {
    return this._states.update
  }

  get delete () {
    return this._states.delete
  }

  setIndex () {
    this._changeState('index')
  }

  setCreate () {
    this._changeState('create')
  }

  setUpdate () {
    this._changeState('update')
  }

  setDelete () {
    this._changeState('delete')
  }

  _changeState (state) {
    if (!Object.keys(this._states).includes(state)) {
      throw new Error('CrudState not valid!')
    }

    for (let _state in this._states) {
      this._states[_state] = false
    }

    this._states[state] = true
  }
}
export default CrudStateManager
