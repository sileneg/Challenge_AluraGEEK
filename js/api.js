const apiURL = "https://673eaf3ca9bc276ec4b54929.mockapi.io/Productos";

// Método GET: Obtener todos los productos
export async function obtenerProductos() {
    try {
        const response = await fetch(apiURL);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

// Método POST: Crear un nuevo producto
export async function agregarProducto(datosProducto) {
    try {
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosProducto)
        });
        return await response.json();
    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
}

// Método DELETE: Eliminar un producto
export async function eliminarProducto(id) {
    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            console.error("Error al eliminar producto. Estado:", response.status);
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        return false;
    }
}

// Método PUT: Actualizar un producto
export async function actualizarProducto(id, producto) {
    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return await response.json();
    } catch (error) {
        console.error("Error al actualizar producto:", error);
    }
}
