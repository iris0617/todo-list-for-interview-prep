import { createAction } from '@reduxjs/toolkit';
import { VISIBILITY_FILTERS } from '../utils/constants';

export const setShowAll = createAction(VISIBILITY_FILTERS.SHOW_ALL);
export const setShowActive = createAction(VISIBILITY_FILTERS.SHOW_ACTIVE);
export const setShowCompleted = createAction(VISIBILITY_FILTERS.SHOW_COMPLETED);
