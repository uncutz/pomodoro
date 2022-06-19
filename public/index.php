<?php declare(strict_types=1);

use Backend\Container;
use jpan\source\Dependencies;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';

try {
    /** @var Container $container */
    $container = Dependencies::constructFromScheme(__DIR__ . '/../config/di.php');

// Create App
    $app = AppFactory::create(null, $container);

    $container->getRoutes()
        ->append(include __DIR__.'/../config/routes.php')
        ->publish($app);

// Add Twig-View Middleware
    $app->add(new TwigMiddleware(
        $container->getView(),
        $app->getRouteCollector()->getRouteParser(),
        $app->getBasePath()
    ));
    $app->addRoutingMiddleware();
    $app->addBodyParsingMiddleware();

    $errorMiddleware = $app->addErrorMiddleware(true, true, true);

    $app->run();
} catch (Exception $exception) {
    throw $exception;
}
