<?php

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

require_once '../../vendor/autoload.php';

$loader = new FilesystemLoader('../../templates');
$twig = new Environment($loader, [
    'cache' => false
]);

echo $twig->render('episodes/1-5.html');
