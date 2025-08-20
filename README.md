recuperacion-con-vue-
Proyecto de Recuperación - Vue 3 Frontend
Este proyecto corresponde al plan de mejoramiento de Jose Daniel Muñoz Velandia, ficha 3066478, ADSO.

Incluye un sistema web desarrollado con Vue 3, Vue Router, Pinia, Tailwind CSS y consumo de una API REST.
Además, responde al cuestionario técnico asignado.

Cuestionario Técnico
1. ¿Qué es Vue 3 y cuáles son sus principales ventajas frente a otras versiones y frameworks similares?
Vue 3 es la última versión del framework progresivo para construir interfaces de usuario.
Ventajas principales:

Composition API: permite organizar mejor la lógica en funciones reutilizables.
Mejor rendimiento que Vue 2 gracias al motor de renderizado mejorado.
Soporte para TypeScript de forma nativa.
Comunidad grande y ecosistema maduro (Router, Pinia, etc).
Comparado con frameworks como React o Angular, Vue 3 es más sencillo de aprender y con curva de aprendizaje más suave.
2. ¿Qué es un componente en Vue y qué partes lo componen?
Un componente es una unidad reutilizable de interfaz (por ejemplo, un botón, formulario o módulo).
Partes principales:

Template: define la vista (HTML).
Script: define la lógica y datos (JavaScript o TypeScript).
Style: define los estilos (CSS o Tailwind).
Ejemplo: vue <button @click="count++">Clicks: {{ count }}

<script setup> import { ref } from "vue"; const count = ref(0); </script> <style scoped> button { padding 10px; } </style>
Explica la diferencia entre ref() y reactive() en Vue 3. ¿Cuándo deberías usar cada uno?
ref(): se usa para variables primitivas (string, number, boolean). Envuelve el valor en un objeto con .value.

reactive(): se usa para objetos y arreglos, crea un proxy reactivo.

Ejemplo:

const nombre = ref("Jose"); // ref -> nombre.value const usuario = reactive({ id: 1, nombre: "Daniel" }); // reactive -> usuario.nombre

Uso:

ref() → variables simples.

reactive() → estructuras complejas (objetos, arrays).

¿Qué es Vue Router y cómo se implementan rutas protegidas?
Vue Router es la librería oficial para manejar navegación y páginas en Vue.

Define rutas en un archivo router/index.ts.

Permite proteger rutas con guards: si el usuario no está autenticado, se redirige al login.

Ejemplo:

router.beforeEach((to, from, next) => { const auth = useAuthStore(); if (to.meta.requiresAuth && !auth.isLoggedIn) { next("/login"); } else { next(); } });

¿Qué es Pinia y por qué se considera una evolución respecto a Vuex?
Pinia es la librería oficial de gestión de estado global en Vue 3. Ventajas frente a Vuex:

Sintaxis más simple y clara.

Soporte completo para TypeScript.

Stores más fáciles de organizar.

Código más ligero y moderno.

¿Cómo se estructura un proyecto de Vue con buenas prácticas?
Ejemplo de estructura recomendada:

src/ ├─ assets/ # imágenes, estilos globales ├─ components/ # componentes reutilizables (botones, tablas, formularios) ├─ views/ # páginas principales ├─ router/ # configuración de rutas ├─ stores/ # Pinia stores (estado global) ├─ services/ # llamadas a API (fetch/axios) ├─ App.vue # componente raíz └─ main.ts # punto de entrada

¿Qué es Tailwind CSS y cómo mejora el diseño y desarrollo de interfaces?
Tailwind CSS es un framework de utilidades CSS.

Permite escribir clases directamente en el HTML (bg-blue-500 text-white p-4).

Ahorra tiempo porque evita escribir CSS manual repetitivo.

Facilita el diseño responsivo y coherente en todo el proyecto.

Es más rápido que Bootstrap en personalización.

¿Qué pasos se deben seguir para consumir una API REST desde una aplicación Vue usando fetch() o axios?
Instalar axios (npm install axios) o usar fetch nativo.

Crear un servicio en /services/api.ts.

Llamar al endpoint dentro de un componente o store.

Manejar estados (loading, error, datos).

Mostrar datos en la vista.

Ejemplo con axios:

import axios from "axios"; const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); console.log(res.data);

n { padding: 10px; } </style>
