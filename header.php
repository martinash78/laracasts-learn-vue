<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <title>Vue Testing</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Episodes
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <?php

                    $directory    = $_SERVER["DOCUMENT_ROOT"] . DIRECTORY_SEPARATOR . 'episodes';
                    $files = array_diff(scandir($directory), array('..', '.'));

                    foreach ($files as $file) {
                        $displayName = str_replace('.php', '', $file);
                        echo '<a class="dropdown-item" href="/episodes\\' . $file . '">' . $displayName . '</a>';
                    }

                    ?>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

