</br>

El agente te ayudará a **crear, editar, dar de baja u obtener información** de los datos del sistema.
Para que el agente entienda correctamente, siempre debes indicarle la **información necesaria** según la tarea que quieras realizar.  
</br>
---

### Datos que se pueden modificar
</br>

**1. Usuarios**.<br>
**2. Repartidores**.<br>
**3. Propietario**.<br>
**4. Administrador central**.<br>
**5. Restaurante**.<br>
<br>

## 👤 Usuarios

### 1. Crear un usuario (propietario, administrador central o repartidor)
Para crear un usuario debes indicarle al agente:
- **nombre**  *
- **telefono**  *
- **rol** * 
    (solo se pueden crear dos tipos de usuarios):  <br>
  - Rol 2: Administrador central (gestiona restaurantes o sedes).  
  - Rol 3: Repartidor (encargado de entregar pedidos).

- **Apellidos**(opcionales)
- **Correo** (opcional)

Ejemplo de petición al agente:  
> “Crea un usuario con el nombre llamado Juan, apellidos Pérez, con correo juan@example.com, número 5551234567 y rol 2”.
</br>
---
</br>

### 2. Dar de baja un usuario
Para dar de baja a un usuario debes indicarle al agente:  
- **Número de teléfono** asociado al usuario.  
- Confirmar si es un **repartidor, administrador central, consumidor o prospecto**.  

Ejemplo:  
> “Dar de baja al repartidor con número 5551234567”.

Esto se aplica para ambos casos cuando el usuario ya esta en el sistema pero esta dado de baja, entonces solo se le indicaria al agente que se quiere dar de alta a ese usuario.
> “Dar de alta al repartidor con número 5551234567”.
</br></br>
---

## 🍴 Restaurante

### 1. Crear un restaurante
Antes de crear un restaurante, primero deben existir:  
- **propietario**  
- **administrador central**

<br>

Cuando quieras crear un restaurante, indícale al agente:  
- **nombre**.  
- **direccion**.  
- **propietario** (teléfono).  
- **administrador central** (telefono).  
</br>
Ejemplo:  
> “Crea un restaurante llamado El Sabor, **url de la ubicacion de google maps o las coordenadas extraidas de google maps**, con propietario Juan Pérez y administrador central María López”.
</br></br>
---

## Propietario

### 1. Crear un propietario de restaurantes

<br>

Cuando quieras crear un propietario, indícale al agente:  
- **telefono**.  

</br>
Ejemplo:  
> “Crea un restaurante llamado El Sabor, **url de la ubicacion de google maps o las coordenadas extraidas de google maps**, con propietario Juan Pérez y administrador central María López”.
</br></br>
---
## 🚴 Repartidor

### 1. Crear un repartidor
Debes proporcionarle al agente:  
- **Nombre completo** del repartidor.  
- **Correo y número de teléfono**.  
- Especificar que su rol es **repartidor**.  

Ejemplo:  
> “Crear un repartidor llamado Carlos Ramírez, con correo carlos@ejemplo.com y teléfono 5559876543”.

---

### 2. Cambiar disponibilidad de un repartidor
Debes indicar:  
- **Nombre o teléfono del repartidor**.  
- El nuevo estatus: disponible, ocupado o fuera de servicio.  

Ejemplo:  
> “Cambia la disponibilidad del repartidor con teléfono 5559876543 a fuera de servicio”.

---

## 📦 Pedidos

### 1. Crear un pedido
Debes indicarle al agente:  
- **Cliente (consumidor)** que hizo el pedido (nombre o teléfono).  
- **Restaurante** desde el que se pide.  
- **Dirección de entrega**.  
- **Repartidor** que lo entregará.  

Ejemplo:  
> “Crear un pedido del consumidor Ana Torres al restaurante El Sabor, dirección Calle 45 Colonia Centro, entregado por el repartidor Carlos Ramírez”.

---

### 2. Cambiar el estado de un pedido
Debes indicar:  
- **Número de pedido** o datos para identificarlo.  
- El nuevo estado: pendiente, asignado, en ruta, entregado o cancelado.  

Ejemplo:  
> “Actualiza el pedido número 120 al estado entregado”.

---

### 3. Cancelar un pedido
Debes indicar:  
- **Número de pedido** o datos del cliente y restaurante.  

Ejemplo:  
> “Cancela el pedido número 125 del consumidor Pedro González en el restaurante El Sabor”.

---

## ⚠️ Notas importantes
- Los roles **consumidor (4)** y **prospecto (5)** **no se crean ni editan manualmente**, solo se pueden dar de baja en casos críticos.  
- Siempre que se cree un restaurante, debe tener un propietario y un administrador central asignados.  
- Para que el agente te ayude correctamente, **proporciona siempre nombre y teléfono del usuario**.  
