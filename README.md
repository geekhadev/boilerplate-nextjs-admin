# Boilerplate Panel Administrativo con Nextjs

Este repositorio contiene un boilerplate para la creación de un panel administrativo desarrollado con TypeScript usando Nextjs.

## 🚀 Características

**GitIgnore:** se incluye un archivo `.gitignore` preconfigurado para ignorar los archivos y carpetas comunes, de diferentes sistemas operativos y editores.

**EditorConfig:** se incluye un archivo `.editorconfig` preconfigurado para mantener la preferencia de tabulación del código.

**CommitLint:** se incluye un archivo de configuración de CommitLint para mantener un estilo de mensaje de commit consistente.

**Linter:** se incluye un archivo de configuración de ESLint para mantener un estilo de código consistente. Se configura el estilo de código con las reglas de [StandardJS](https://standardjs.com/).

**Husky:** se incluye un archivo de configuración de Husky para ejecutar scripts de pre-commit y pre-push.

- el pre-commit ejecuta: [linter]
- el pre-push ejecuta: []

## ⚙️ Instalación

1. Clona el repositorio: `git clone git@github.com:geekhadev/boilerplate-nextjs-admin.git`
2. Instala las dependencias: `npm install`
3. Copia el archivo de configuración de ejemplo: `cp .env.example .env`
4. Configura las credenciales y variables de entorno `.env`
5. ¡Listo para empezar!

## 📘 Uso

Una vez configurado, puedes comenzar a desarrollar tu Panel Administrativo sobre esta base. Revisa los screens si quieres crear nuevas páginas de tipo CRUDS.

### Commits y PRs

Por favor, sigue las convenciones de commit y PRs para mantener un historial de cambios limpio y fácil de leer.

#### Commits

Los mensajes de commit deben seguir la convención descrita [en este archivo de configuración](commitlint.config.js) de [CommitLint](https://commitlint.js.org/guides/getting-started.html). Por favor mantén los mensajes de commit claros y concisos. No importa si son en inglés o español, pero deben ser consistentes.

Ten encuenta que hemos agregado `husky` para ejecutar una validación de los mensajes de commit antes de realizar un commit. Si el mensaje no cumple con la convención, no se permitirá realizar el commit y te mostrará un mensaje de error.

## 📚 Documentación

### 🧪 Tests

En el directorio `docs/tests` encontrarás una serie de archivos Markdown con información sobre los tests creados para el proyecto. Puedes consultarlos para obtener más detalles sobre los tests y la funcionalidad de cada módulo.

Para ejecutar los tests, utiliza el siguiente comando:

```bash
npm run test
```

Para ejecutar el test de cobertura, utiliza el siguiente comando:

```bash
npm run test:coverage 
```

> Para poder hacer un push se necesita un mínimo del 90% de cobertura de código.

## ✅ Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, envía un pull request. Asegúrate de seguir las guías de contribución y de código.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT) - ver el archivo [LICENSE](LICENSE) para más detalles.
