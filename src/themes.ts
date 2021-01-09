export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export const STORED_THEME = localStorage.getItem('theme');
export const DEFAULT_THEME = STORED_THEME ? STORED_THEME : LIGHT_THEME;
