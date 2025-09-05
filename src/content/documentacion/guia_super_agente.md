</br>

El agente te ayudará a **crear, editar, dar de baja u obtener información** de los datos del sistema.
Para que el agente entienda correctamente, siempre debes indicarle la **información necesaria** según la tarea que quieras realizar.  
</br>
---

📘 Guía de uso del sistema

El agente te ayudará a crear, editar, dar de baja o consultar información en el sistema.
Para que funcione correctamente, siempre debes darle la información esencial según la tarea que quieras realizar.
## 👤 Usuarios

### 1. Crear un usuario (propietario, administrador central o repartidor)
Para crear un usuario debes indicarle al agente:
- **nombre**  *
- **telefono**  *
- **rol** * 
    (solo se pueden crear dos tipos de usuarios):  <br>
  - Rol 2: Administrador central (gestiona restaurantes o sedes).  
  - Rol 3: Repartidor (encargado de entregar pedidos).
  - Rol 6: Propietario (dueño de uno o varios restaurantes).  

- **Apellidos**(opcionales)
- **Correo** (opcional)

Ejemplo de petición al agente:  
> “Crea un usuario con nombre Juan Pérez, teléfono 5551234567, correo juan@example.com".
> “Crea un usuario con nombre Carlos Ramírez, teléfono 5559876543 y rol 3 (repartidor)”.

</br>
---
<br>

## 🍴 Restaurante

### 2. Crear un restaurante
Antes de crear un restaurante, primero deben existir:  
- **propietario**  
- **administrador central**

<br>

Cuando quieras crear un restaurante, indícale al agente:  
- **nombre**.  
- **direccion** la ubicacion al inicio sera mediante las coordenadas del lugar.  
- **propietario** (teléfono).  
- **administrador central** (telefono).  
</br>
Ejemplo:  
> “Crea un restaurante llamado El Sabor, la ubicacion es 18.8454902,-98.949352, el propietario 7351230987 y administrador central 7771927364”.
</br></br>
---

## Propietario

### 3. Crear un propietario de restaurantes

<br>

Cuando quieras crear un propietario, indícale al agente:  
- **telefono**.  

</br>
Ejemplo:  
> “Crea un restaurante llamado El Sabor, **url de la ubicacion de google maps o las coordenadas extraidas de google maps**, con propietario Juan Pérez y administrador central María López”.
</br></br>
---

</br>

### 4. Obtener datos especificos
Para obtener datos de un usuario debes indicarle al agente:  
- **teléfono** del usuario.  
- datos especificos (nombre, rol, telefono, etc.).  

Ejemplo:  
> “Me das los datos del repartidor con el número 5551234567”.

**Tambien si se quiere obtener una lista de todos los usuarios sin especificar alguno especificamente podrias decirle**:

> “Me das una lista de todos los administradores centrales”.

</br></br>
---

</br>

### 5. Dar de baja o dar de alta un usuario
Para dar de baja a un usuario debes indicarle al agente:  
- **teléfono** del usuario.  
- Confirmar su rol (propietario, administrador central o repartidor).  

Ejemplo:  
> “Dar de baja al repartidor con número 5551234567”.
> “Dar de alta al administrador central con número 5559876543”.

Esto se aplica para ambos casos cuando el usuario ya esta en el sistema pero esta dado de baja, entonces solo se le indicaria al agente que se quiere dar de alta a ese usuario.
</br></br>
---

</br>

### 6. Actualizar datos de un usuario
Para actualizar datos a un usuario debes indicarle al agente:  
- **teléfono** del usuario.  
- Dato a modificar (Nombre).  

Ejemplo:  
> “Actualiza nombre del usuario con número 5551234567, se llamara Juan Carlos”.
> “Quiero que mi repartidor con el numero 5551234567 ahora tenga el numero 1209837412”.

De preferencia a la hora de actualizar un dato se espera que sea solo un dato el que se modifica, se podra modificar varios pero al ser una version de prueba o beta se reestringe el nivel de prompt para que funcione lo mejor posible en lo que se sigue trabajando en mejorar los distintos casos posibles.
</br></br>
---

## ⚠️ Notas importantes
- Los roles **consumidor (4)** y **prospecto (5)** **no se crean ni editan manualmente**, solo se pueden dar de baja en casos críticos.  
- Siempre que se cree un restaurante, debe tener un propietario y un administrador central asignados.  
- Para que el agente te ayude correctamente, **proporciona siempre nombre y teléfono del usuario**.  
