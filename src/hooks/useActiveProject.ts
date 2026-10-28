import { useSyncExternalStore } from 'react';
import { resolveRoute } from '@/utils/routes';

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}
function getSnapshot() {
  return resolveRoute(window.location.hash).projectId;
}
export function useActiveProject() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
