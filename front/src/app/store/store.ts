import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from './reducer';
import authReducer from '../../features/auth/authSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
    main: reducer,
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;