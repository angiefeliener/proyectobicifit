<?php
$conn = mysqli_connect("192.168.56.1", "BICIFIT", "54321", "bicifit");

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$Nombres = $_REQUEST["nombre"];
$Apellidos = $_REQUEST["apellido"];
$Identificacion = $_REQUEST["id_cliente"];
$Email = $_REQUEST["email"];
$Contraseña = $_REQUEST["contraseña"];

// Preparar la consulta para evitar inyección SQL
$stmt = $conn->prepare("INSERT INTO tblcliente (CliNombre, CliApellido, PKIDCliente, CliEmail, CliContraseña) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $Nombres, $Apellidos, $Identificacion, $Email, $Contraseña);

if ($stmt->execute()) {
    echo "Registro Insertado";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
mysqli_close($conn);
?>
