<?php
require_once("../../../assets/php/connect.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../assets/css/admin.css">
    <title>Add Portfolio</title>
    <style>
        body {
            height: 100vh;
        }

        .editform {
            height: fit-content !important;
            width: 600px !important;
        }

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
        }

        .inputs input {
            padding: 10px 20px;
            border-radius: 15px;
            width: 100% !important;
        }

        .inputs select {
            padding: 10px 20px;
            border-radius: 5px;
        }

        .inputs input[type="file"] {
            padding: 10px 20px;
            border-radius: 15px;
            background-color: #c1c1c1;
            color: white;
            border: none;
        }
    </style>
</head>

<body>
    <form action="" class="editform" method="post">
        <div class="contentedit">
            <h1>Add Portfolio
            </h1>
            <div class="inputs">
                <input type="text" value="" placeholder="Title ...">
                <select name="serv" id="">
                    <?php
                    $SQL = "SELECT * FROM serv";
                    $services = mysqli_query($connect, $SQL);
                    var_dump($services);
                    while ($service = mysqli_fetch_assoc($services)) {
                        ?>
                        <option value="<?= $service['serv_id'] ?>">
                            <?= $service['serv_title'] ?>
                        </option>
                        <?php
                    }
                    ?>
                </select>
                <input type="file" value="" placeholder="Title ...">
                <input type="submit">
            </div>
        </div>
    </form>
</body>

</html>