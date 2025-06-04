import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from '../types';

interface UserState {
  user: Profile | null;
}

// Função utilitária para carregar do localStorage
function loadUserState(): UserState {
  try {
    const serialized = localStorage.getItem('userState');
    if (serialized === null) return initialState;
    return JSON.parse(serialized);
  } catch (e) {
    return initialState;
  }
}

// Função utilitária para salvar no localStorage
function saveUserState(state: UserState) {
  try {
    localStorage.setItem('userState', JSON.stringify(state));
  } catch (e) {}
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: loadUserState(),
  reducers: {
    setUser(state, action: PayloadAction<Profile>) {
      state.user = action.payload;
      saveUserState(state); // Salva ao atualizar
    },
    clearUser(state) {
      state.user = null;
      saveUserState(state); // Salva ao limpar
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
