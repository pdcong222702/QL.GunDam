import { createSlice } from '@reduxjs/toolkit';
// import { dsVaiTro, dsQuyenDonVi } from 'shared/utils/Const';

export const tokenDefault: OAuthState = {
    id_token: null,
    access_token: null,
    refresh_token: null,
};

export interface OAuthState {
    id_token: string | null;
    access_token: string | null;
    refresh_token: string | null;
}



export const authSlice = createSlice({
    name: 'auth',
    initialState: tokenDefault,
    reducers: {

        removeToken: () => {
            return tokenDefault;

        },
    }
});
export const { reducer, actions } = authSlice;