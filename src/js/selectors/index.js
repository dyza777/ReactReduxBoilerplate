import { createSelector } from 'reselect';

const titleSelector = () => (state) => state.title;

export const mainSelector = () => createSelector(
    [ titleSelector() ], (title) => ({ title })
);