import {configureStore} from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import cakeReducer from '../features/cake/cakeSlice'
import iceCreameReducer from '../features/iceCreame/iceCreameSlice'
import userReducer from '../features/user/userSlice'
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCreame : iceCreameReducer,
        user : userReducer
    },
    // middleware : (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch