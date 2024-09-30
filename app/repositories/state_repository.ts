import State from '#models/state'

export default class StateRepository {
  public async getAllStates() {
    return State.all();
  }
}