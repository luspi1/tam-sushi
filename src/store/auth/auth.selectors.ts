import { NameSpace } from 'src/helpers/consts'
import { State } from 'src/types/state'

export const getCurrentUser = (state: State) => state[NameSpace.Auth].currentUser
