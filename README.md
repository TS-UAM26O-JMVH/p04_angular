# Práctica 4: Instalación, Configuración e Interfaz de Inicio en Angular (Parte 1)

Este repositorio contiene el código fuente desarrollado para la **Práctica 4**, la cual representa la primera parte del sistema de registro e inicio de sesión construido con **Angular**. En esta etapa se sienta la arquitectura base del proyecto frontend mediante componentes *standalone*, internacionalización (multilenguaje), formularios reactivos y enrutamiento dinámico.

---

## 📋 Tabla de Contenidos

* [Descripción del Proyecto](#descripción-del-proyecto)
* [Características Principales](#características-principales)
* [Objetivos](#objetivos)
* [Arquitectura y Estructura](#arquitectura-y-estructura)
* [Componentes y Servicios Implementados](#componentes-y-servicios-implementados)
* [Requisitos Previos](#requisitos-previos)
* [Instalación y Ejecución](#instalación-y-ejecución)
* [Flujo de Pruebas y Validación](#flujo-de-pruebas-y-validación)

---

## 📄 Descripción del Proyecto

La aplicación establece la interfaz inicial de la plataforma de registro, implementando dos vistas fundamentales:

1. **Bienvenido (`/bienvenido`):** Formulario de inicio de sesión reactivo con campos de correo y contraseña, alternancia de visibilidad de contraseña y selector de idioma en tiempo real.
2. **Principal (`/principal`):** Menú de navegación general compuesto por 6 tarjetas interactivas (*Mi cuenta*, *Registro*, *Notificaciones*, *ChatBot*, *Aviso de privacidad* y *Cerrar sesión*).

El sistema utiliza la biblioteca **`@ngx-translate/core`** para proporcionar soporte multilenguaje (español e inglés) mediante archivos JSON externos, garantizando una arquitectura libre de textos embebidos directamente en el código (*cero hardcodeo*).

---

## ✨ Características Principales

* **Componentes Standalone:** Estructura modular moderna sin necesidad de `NgModule`.
* **Internacionalización (i18n) con `ngx-translate`:** Cambio dinámico de idioma (Español / Inglés) sin recargar el navegador mediante archivos de traducción en la carpeta `public/lenguajes/`.
* **Formularios Reactivos (`ReactiveFormsModule`):** Manejo de campos y validaciones dinámicas para credenciales de acceso.
* **Aislamiento de Estilos CSS:** Encapsulamiento de estilos a nivel de componente junto con estilos globales en `src/styles.css`.
* **Enrutamiento y Navegación:** Configuración de redirecciones en `app.routes.ts` y consumo de directivas `<router-outlet />`.

---

## 🎯 Objetivos

### Objetivo General

Crear y configurar una aplicación en Angular estableciendo la estructura base de componentes, enrutamiento e internacionalización para eliminar el *hardcodeo* de datos en las vistas de inicio de sesión y menú principal.

### Objetivos Particulares

1. Instalar y configurar el entorno de desarrollo con Node.js, `nvm` y Angular CLI.
2. Crear la estructura inicial del proyecto e instalar las dependencias de internacionalización (`@ngx-translate/core` y `@ngx-translate/http-loader`).
3. Diseñar e implementar los componentes `bienvenido` y `principal` dentro de la carpeta `componentes/`.
4. Configurar las rutas principales del sistema en `app.routes.ts`.

---

## 🏗️ Arquitectura y Estructura
```texto
src/
├── app/
│   ├── componentes/
│   │   ├── bienvenido/    # Componente de inicio de sesión (Login)
│   │   │   ├── bienvenido.css
│   │   │   ├── bienvenido.html
│   │   │   └── bienvenido.ts
│   │   └── principal/     # Componente del menú principal de tarjetas
│   │       ├── principal.css
│   │       ├── principal.html
│   │       └── principal.ts
│   ├── app.config.ts      # Configuración de proveedores globales (HttpClient, Translate)
│   ├── app.routes.ts     # Definición de rutas y redirecciones de la aplicación
│   └── app.ts            # Componente raíz con 
├── public/
│   ├── iconos/            # Recursos gráficos en formato SVG para la interfaz
│   └── lenguajes/         # Archivos de traducción JSON (es.json, en.json)
└── styles.css             # Estilos globales de la aplicación (degradado de fondo)
```
---
## ⚙️ Componentes y Servicios Implementados

| Módulo / Elemento | Descripción / Responsabilidad |
| --- | --- |
| **`app.config.ts`** | Registra los proveedores de HTTP (`provideHttpClient`) y del servicio de traducción (`provideTranslateService` y `provideTranslateHttpLoader`). |
| **`app.routes.ts`** | Mapea las rutas `/bienvenido`, `/principal` y establece la redirección por defecto hacia `/bienvenido`. |
| **`Bienvenido`** | Gestiona la vista de Login, validando los campos de correo/contraseña, alternando la visibilidad del texto y permitiendo la selección de idioma. |
| **`Principal`** | Renderiza el menú de tarjetas con iconos. Contiene las acciones de navegación hacia la ruta de registro (`/registro`) y la de retorno (`/bienvenido`). |
| **Archivos i18n** | Contienen los diccionarios de clave-valor para los textos en español (`public/lenguajes/es.json`) e inglés (`public/lenguajes/en.json`). |

---

## 🛠️ Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de contar con:

* **Node.js:** Versión 18 o superior (gestionado preferentemente con `nvm`).
* **Angular CLI:** Versión 17 o superior instalada de forma global (`npm install -g @angular/cli`).
* **Navegador Web:** Google Chrome, Firefox, Edge o Safari.

---

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio o situarse en el directorio del proyecto:**

```bash
cd primeraAplicacion
```
---
2. **Instalar dependencias e instalar la biblioteca de traducción:
```bash
npm install
npm install @ngx-translate/core @ngx-translate/http-loader
```
3. Iniciar el servidor de desarrollo:
```bash
ng serve
```
4. Navegar a la aplicación:
    Abre tu navegador e ingresa a http://localhost:4200/. La aplicación te redirigirá automáticamente a http://localhost:4200/bienvenido.
--- 
## 🧪 Flujo de Pruebas y Validación
1. Inicio de Sesión (/bienvenido):
    > Al acceder a la aplicación se cargará el formulario de inicio de sesión.

    > Prueba ingresar un correo y una contraseña. Puedes presionar el icono del ojo para alternar entre mostrar u ocultar la contraseña.

    > Selecciona el botón English o Español en la parte inferior para comprobar cómo cambian todos los textos de la pantalla al instante sin recargar la página.

2. Navegación Manual a Menú (/principal):

    > Escribe en la barra de direcciones del navegador http://localhost:4200/principal.

    > Observa el menú compuesto por 6 tarjetas con sus respectivos iconos gráficos SVG.

    > Al presionar la tarjeta Cerrar sesión (LOGOUT), la aplicación te redirigirá nuevamente a la vista de inicio de sesión (/bienvenido).

Nota: En esta primera parte la aplicación no se conecta a un backend ni a una base de datos; las validaciones y traducciones se ejecutan íntegramente en el cliente.