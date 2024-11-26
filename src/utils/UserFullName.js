import { ref } from 'vue';

/**
 * Pobiera dane użytkownika z localStorage.
 * @returns {Ref<string>} name - Ref z pelnym imieniem i nazwiskiem.
 */

export function UserFullName() {
    const user = ref([]);
    const name = ref('');

    const userData = localStorage.getItem('user');

    if (userData) {
        user.value.push(JSON.parse(userData));
        name.value = user.value[0]['name'] + ' ' + user.value[0]['surname'];
    }

    return name;
}
