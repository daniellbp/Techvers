<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $opcao = $_POST['opcao'];
    $mensagem = $_POST['mensagem'];

    $para = 'daniel_lbp@hotmail.com'; // Substitua pelo seu endereço de email
    $assunto = 'Novo contato do formulário';
    $mensagem_email = "Nome: $nome\n";
    $mensagem_email .= "Email: $email\n";
    $mensagem_email .= "Opção: $opcao\n";
    $mensagem_email .= "Mensagem:\n$mensagem\n";

    // Você pode adicionar mais campos e personalizar a mensagem conforme necessário

    mail($para, $assunto, $mensagem_email);

    // Redirecionar de volta para o formulário com uma mensagem de sucesso
    header('Location: formulario.html?enviado=sim');
} else {
    // Se não for uma solicitação POST, redirecione de volta para o formulário
    header('Location: formulario.html');
}
?>
