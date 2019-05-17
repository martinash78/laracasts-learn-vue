<?php

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$episode = $_GET['episode'];

require_once '../../vendor/autoload.php';

$loader = new FilesystemLoader('../../templates');
$twig = new Environment($loader, [
    'cache' => false
]);

echo $twig->render('episodes/' . $episode . '.html');
