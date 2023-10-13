<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tiny.cloud/1/m8uh2vggo1k922qgxpgr6bclh9wwjcjdxt5tb40u3nqlqe5k/tinymce/6/tinymce.min.js"
        referrerpolicy="origin"></script>
    <link rel="stylesheet" href="../../../assets/css/admin.css">
    <title>Add Blog</title>
</head>

<body>
    <form action="" class="editform" method="post">
        <div class="contentedit">
            <h1>Add blog
            </h1>
            <div class="input-and-save">
                <input type="text" value="" ?>/>
                <input type="submit">
            </div>
            <textarea class="editor" placeholder="Write your blog here">
            </textarea>
        </div>
    </form>
    <script>
        tinymce.init({
            selector: 'textarea',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',

        });

    </script>
</body>

</html>