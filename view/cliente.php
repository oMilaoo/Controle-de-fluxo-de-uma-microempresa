<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados do Cliente</title>
    <link rel="stylesheet" href="../public/css/check.css">
</head>
<body>
    <div class="container">
        <h2>DADOS - Cliente</h2>
        <form id="customerForm" action="nota_fiscal.php" method="POST">
            <input type="hidden" id="productName" name="productName" value="<?php echo $_POST['productName']; ?>">
            <input type="hidden" id="quantity" name="quantity" value="<?php echo $_POST['quantity']; ?>">
            <input type="hidden" id="model" name="model" value="<?php echo $_POST['model']; ?>">
            <input type="hidden" id="color" name="color" value="<?php echo $_POST['color']; ?>">
            <input type="hidden" id="valor" name="valor" value="<?php echo $_POST['valor']; ?>">
            <input type="hidden" id="paymentMethod" name="paymentMethod" value="<?php echo $_POST['paymentMethod']; ?>">
            <?php
            if ($_POST['paymentMethod'] === 'credito' || $_POST['paymentMethod'] === 'debito') {
                echo '<input type="hidden" id="cardNumber" name="cardNumber" value="' . $_POST['cardNumber'] . '">';
            }
            if ($_POST['paymentMethod'] === 'pix') {
                echo '<input type="hidden" id="pixKey" name="pixKey" value="' . $_POST['pixKey'] . '">';
            }
            ?>
            <div class="linha-2">
            <div>
                <label for="name">Nome:</label>
                <input type="text" class="NameCli" id="name" name="name" required>
            </div>
            <div>
                <label for="cpf">CPF:</label>
                <input type="text"  class="NameCpf" id="cpf" name="cpf" required>
            </div>
        </div>
        <div class="linha-2">
            <div>
                <label for="email">E-mail:</label>
                <input type="email" class="emailName" id="email" name="email" required>
            </div>
            <div>
                <label for="cep">CEP:</label>
                <input type="text" class="cepName" id="cep" name="cep" required>
            </div>
        </div>
            <div>
                <label for="number">Número:</label>
                <input type="text" class="numName" id="number" name="number" required>
            </div>
            <button type="submit">Continuar</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>