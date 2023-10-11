import { index } from 'src/store'

export type State = ReturnType<typeof index.getState>

export type AppDispatch = typeof index.dispatch
