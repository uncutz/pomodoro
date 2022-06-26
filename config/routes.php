<?php

declare(strict_types=1);

use Backend\Controller\IndexController;
use Backend\Controller\SessionController;

return [
    'index' => [
        'type' => 'GET',
        'path' => '/',
        'class' => IndexController::class . ':index'
    ],
    'session-config' => [
        'type' => 'GET',
        'path' => '/session/config',
        'class' => SessionController::class . ':config'
    ],
];
