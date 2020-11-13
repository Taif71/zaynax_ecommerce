import { AdminActionTypes } from './admin.types';

export const setAll = all => ({
    type: AdminActionTypes.SET_ALL_SELECTED,
    payload: all
});

export const setPending = pending => ({
    type: AdminActionTypes.SET_PENDING_SELECTED,
    payload: pending
});

export const setConfirm = confirm => ({
    type: AdminActionTypes.SET_CONFIRM_SELECTED,
    payload: confirm
});

export const setCancel = cancel => ({
    type: AdminActionTypes.SET_CANCEL_SELECTED,
    payload: cancel
});