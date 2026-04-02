// 1. Sentencia switch

switch (expression) {
    case value1:
        // código a ejecutar si expression === value1
        break;
    case value2:
        // código a ejecutar si expression === value2
        break;
    default:
    // código si ninguna coincide
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Es lunes.");
        break;
    case "Friday":
        console.log("Es viernes.");
        break;
    default:
        console.log("Es otro día.");
}

let userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("Acceso total.");
        break;
    case "editor":
        console.log("Acceso de edición.");
        break;
    case "viewer":
        console.log("Acceso de solo lectura.");
        break;
    default:
        console.log("Rol desconocido.");
}