<?php
$to=$_POST['email'];
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];

$subject="Заявка на дисконтную карту с Лендига";
$client_subject="Сегодня твой день!";

$header="From:".$to;
$headers="From: Bart and Flowers Decore <infobart.com.ua>\r\n";
$headers .="MIME-Version: 1.0\r\n";
$headers .="Content-Type: text/html; charset=UTF-8\r\n";
$client_message .='<html><body><table style="width:400px;padding: 30px 0; margin: 0 auto;">
    <tr>
        <td>
            <h1 style="text-align:center;">Поздравляем!<br>Теперь Вы клиент Bart!</h1>
        </td>
    </tr>
<tr>
    <td>
        <img src="http://bart.com.ua/img/lesja-mail.jpg" style="width:100%;">
    </td>
</tr>
<tr>
    <td>
        <p style="text-align:left;"><br>Добрый день, '. $firstname . '<br><br>Меня зовут Леся Ковальчук и я руководитель бренда Bart. Поздравляю Вас с маленькой победой - сегодня Вы стали клиентом нашего магазина! Спасибо, что доверились нам!<br><br>Спешу пригласить Вас к нам в гости, чтобы удивить! Ведь с вашим первым визитом Вы получите карту постоянного клиента со скидкой 5%, которая действует на весь ассортимент с вервой покупки. <br><br>Теперь у Вас есть уникальная возможность покупки необычные букеты, стильные подарки и модный декор с приятной скидкой!</p>
    </td>
</tr>
<tr>
    <td>
        <h4 style="margin-bottom:0;">Ждем Вас в магазине цветов и декора Bart!<br></h4>
    </td>
</tr>
<tr>
    <td>
        <p style="text-align:left;">Харьков, переулок Банный, 1<br>+38 099 275-34-34<br>+38 096 647-44-15</p>
    </td>
</tr>
</table></html></body>';

$message = "Имя - ". $firstname . "Фамилия- ". $lastname . "\n\n"."Почтовый адрес: ".$_POST['enail']."\n\n"."Номер телефона: ". $_POST['phone']."\n\n";
mail($to, $subject, $client_message, $headers); 
mail("info@bart.com.ua", $subject, $message, $headers); 
?>