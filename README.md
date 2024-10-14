# React + Supabase Project

Este proyecto es una aplicación de gestión de clientes usando React y Supabase.

## Requisitos previos

- Node.js instalado (https://nodejs.org/)
- Cuenta en Supabase (https://supabase.com/)

## Pasos para ejecutar este proyecto

### 1. Clonar o descargar este repositorio

```bash
git clone https://github.com/jisazamp/react-supabase.git
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

- Renombrar el archivo `.env.example` a `.env.local`.
- Editar el archivo `.env.local` y reemplazar los valores de `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` con los datos de tu proyecto Supabase (ver más abajo cómo obtener estos valores).

### 4. Crear un proyecto en Supabase

#### 4.1 Crear una cuenta y un proyecto en Supabase

1. Crear una cuenta en [Supabase](https://supabase.com/).
2. Crear una nueva organización y luego un nuevo proyecto.  
   ![Crear Proyecto](https://github.com/user-attachments/assets/31325235-48f9-41be-9d34-8770cb86a7e5)
3. Espera unos minutos para que el proyecto sea creado. Una vez listo, obtendrás la URL del proyecto y la API Key (anon key), que necesitarás para configurar el archivo `.env.local`.

#### 4.2 Crear la tabla "clients"

1. En el panel de Supabase, ir a la sección de **Database**.
2. Crear una nueva tabla llamada `clients`.
   ![Crear tabla](https://github.com/user-attachments/assets/c1036552-4cc8-465c-ab7d-7ce15e0f26fe)
3. Desactivar **Enable Row Level Security (RLS)** para fines de este ejercicio.
4. La tabla deberá tener las siguientes columnas:

| Columna      | Tipo     |
|--------------|----------|
| `id`         | `bigint` (Primary Key) |
| `created_at` | `timestamp` |
| `first_name` | `text`    |
| `last_name`  | `text`    |
| `age`        | `integer` |

   ![Estructura de tabla](https://github.com/user-attachments/assets/c478b82f-e70f-4ae1-b126-58ab28275e6a)

#### 4.3 Obtener la URL y la API Key

1. En el dashboard de Supabase, ve a **Settings** > **API** para encontrar la URL del proyecto y la clave anónima (API Key).  
   ![API Key](https://github.com/user-attachments/assets/cb2b1b58-a18b-4c6b-a4fe-91b2c41001aa)

### 5. Configurar el archivo `.env.local`

1. Abre el archivo `.env.local` y reemplaza los valores de las siguientes variables:

```env
VITE_API_URL=tu-url-de-supabase
VITE_API_KEY=tu-api-key
```

### 6. Ejecutar el proyecto

Una vez configurado todo, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

### 7. Acceder a la aplicación

Abre tu navegador y ve a `http://localhost:5173` para interactuar con la aplicación.
