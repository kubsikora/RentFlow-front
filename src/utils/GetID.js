import { ref } from 'vue';

/**
 * Pobiera dane użytkownika z localStorage.
 * @returns {Ref<string>} id - Ref z id.
 */

export function GetID() {
  const user = ref([]);
  const id = ref('');

  const userData = localStorage.getItem('user');

  if (userData) {
    user.value.push(JSON.parse(userData));
    id.value = user.value[0]['id'];
  }

  return id;
}
