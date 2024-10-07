# Pasos para ejecutar este proyecto

1. Clonar o descargar este repositorio 
    `git clone https://github.com/jisazamp/react-supabase.git`
2. Instalar las dependencias:
  `npm install`
3. Cambiar el nombre del archivo `.env.example` por `.env.local`

## Creación de proyecto en Supabase

1. Crear una cuenta en Supabase https://supabase.com/
2. Crear una organización

<img width="733" alt="image" src="https://github.com/user-attachments/assets/0e66ec47-e7d9-4870-9647-1f0a942a9a69">

3. Crear un nuevo proyecto

<img width="721" alt="image" src="https://github.com/user-attachments/assets/31325235-48f9-41be-9d34-8770cb86a7e5">

4. Esperar unos minutos a que termine la creación del proyecto en Supabase. Después de estos minutos, deberíamos poder ver la URL del proyecto y el API Key

<img width="834" alt="image" src="https://github.com/user-attachments/assets/cb2b1b58-a18b-4c6b-a4fe-91b2c41001aa">

5. Dentro de nuestro proyecto, a través del menú lateral, accede a la opción de Database.

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/1782a40b-5595-4422-8226-da152cd574c9">

6. Crea una nueva tabla, "clients". Para efectos de este ejercicio, vas a deshabilitar el check de "Enable Row Level Security (RLS)

<img width="672" alt="image" src="https://github.com/user-attachments/assets/c1036552-4cc8-465c-ab7d-7ce15e0f26fe">

Esta tabla va a tener los siguientes campos:
- id
- created_at
- first_name
- last_name
- age

<img width="673" alt="image" src="https://github.com/user-attachments/assets/c478b82f-e70f-4ae1-b126-58ab28275e6a">




## Editar el archivo .env.local

1. Reemplazar los valores de este archivo para que correspondan a la URL y al API key de nuestro proyecto
<img width="525" alt="image" src="https://github.com/user-attachments/assets/19ae8ecf-e0b5-4fc2-aa35-4b619c32c02d">

## Ejecutar el proyecto
`npm run dev`

