<?php

require_once '../../vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('../../templates');
$twig = new \Twig\Environment($loader, [
//    'cache' => 'compilation_cache',
    'cache' => false
]);
//$directory    = $_SERVER["DOCUMENT_ROOT"] . DIRECTORY_SEPARATOR . 'episodes';
//$files = array_diff(scandir($directory), array('..', '.'));
//$episodes = [];
//foreach ($files as $file) {
//
//    $displayName = str_replace('.php', '', $file);
//    $episodes[$displayName] = $file;
//}

echo $twig->render('episodes/1-5.html');
