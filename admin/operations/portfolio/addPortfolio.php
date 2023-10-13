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

        form {
            height: 100%;
        }

        .inputs {
            display: flex;
            flex-direction: column;
            width: 50%;
        }

        .inputs input {
            margin: 10px 0;
            padding: 10px 20px;
            border-radius: 15px;
        }

        .inputs select {
            margin: 10px 0;
            padding: 10px 20px;
            border-radius: 15px;
        }

        .inputs input[type="file"] {
            margin: 10px 0;
            padding: 10px 20px;
            border-radius: 15px;
            color: #000;
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
                    <option value="1">Opt 1</option>
                </select>
                <input type="file" value="" placeholder="Title ...">
                <input type="submit">
            </div>
        </div>
    </form>
</body>

</html>