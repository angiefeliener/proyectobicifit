<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilo.css">
    <title>Bicifit</title>
    
</head>
<body>
    <?php
    $conn =mysqli_connect(" 192.168.56.1", "BICIFIT", '54321', "bicifit");

    if ($conn -> connect_error) {
        echo "Fallo de Conexion a MySQL: ". $myqli -> connect_error;
        exit();
    }
    else {
        echo "Conectado a la Base de Datos" . "<br>" . mysqli_error($conn);
    }
     mysqli_close($conn);
    ?>
    
</body>
</html>