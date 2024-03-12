<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nota Fiscal</title>
    <link rel="stylesheet" href="../public/css/check.css">
</head>
<body>
    <div class="container-2" >
        <div class="section" style="height: 500px">
            <h2>Nota Fiscal</h2>
            <div id="invoiceDetails ">
                <div class="linha-2">
                    <p><strong>Nome do Produto:</strong> <?php echo $_POST['productName']; ?></p>
                    <p><strong>Quantidade:</strong> <?php echo $_POST['quantity']; ?></p>
                
                </div
                <div class="linha-2">
                    <p><strong>Modelo:</strong> <?php echo $_POST['model']; ?></p>
                    <p><strong>Cor:</strong> <?php echo $_POST['color']; ?></p>
                </div>
                <p><strong>Forma de Pagamento:</strong> <?php echo $_POST['paymentMethod']; ?></p>
                <?php if ($_POST['paymentMethod'] === 'credito' || $_POST['paymentMethod'] === 'debito'): ?>
                    <p><strong>Número do Cartão:</strong> <?php echo $_POST['cardNumber']; ?></p>
                <?php endif; ?>
                <div class="linha-3">
                    <p><strong>Nome:</strong> <?php echo $_POST['name']; ?></p>
                    <p><strong>CPF:</strong> <?php echo $_POST['cpf']; ?></p>
                    <p><strong>Valor:</strong> <?php echo $_POST['valor']; ?></p>
                    <?php 
            // Calcula o valor total
                $preco = $_POST['valor'];
                $quantidade = $_POST['quantity'];
                $total = $preco * $quantidade;
                ?>
                    <p><strong>Valor Total:</strong> R$<?php echo $total; ?></p>
                    
            
            
                    
                    
                </div>
                <div class="linha-3">
                <p><strong>E-mail:</strong> <?php echo $_POST['email']; ?></p>
                <p><strong>CEP:</strong> <?php echo $_POST['cep']; ?></p>
                <p><strong>Número:</strong> <?php echo $_POST['number']; ?></p>
                    
                
                
                
                </div
                </div>
            <button onclick="window.print()">Imprimir Nota Fiscal</button>
        </div>
    </div>
</body>
</html>