import { ref } from 'vue';

/**
 * Pobiera dane użytkownika z localStorage i sprawdza, czy jest właścicielem mieszkania.
 * @returns {Ref<boolean>} owner - Ref wskazujący, czy użytkownik NIE jest właścicielem.
 */

export function CheckIfOwner() {
  const user = ref([]);
  const owner = ref(true);

  const userData = localStorage.getItem('user');

  if (userData) {
    user.value.push(JSON.parse(userData));

    if (user.value[0]['flat_owner'] === 1) {
      owner.value = false;
    }
  }

  return owner;
}
