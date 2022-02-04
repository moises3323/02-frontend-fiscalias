export const OPEN_DRAWER = '[DRAWER] OPEN';
export const CLOSE_DRAWER = '[DRAWER] CLOSE';
export const SET_CONTENT_DRAWER = '[DRAWER] SET_CONTENT';

export function closeDrawer() {
  return {
    type: CLOSE_DRAWER,
  };
}

export function openDrawer(options) {
  return {
    type: OPEN_DRAWER,
    options,
  };
}

export function setContentDrawer(options) {
  return {
    type: SET_CONTENT_DRAWER,
    options,
  };
}
