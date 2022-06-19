<?php declare(strict_types=1);


use Backend\Container;
use Backend\MySqlConnection;
use jpan\source\Routes;
use Backend\Session;
use Slim\Views\Twig;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Cache\Adapter\TagAwareAdapter;
use Twig\Extension\DebugExtension;
use Twig\Extra\Cache\CacheExtension;
use Twig\Extra\Cache\CacheRuntime;
use Twig\RuntimeLoader\RuntimeLoaderInterface;

$container = new Container();


$container->add('session', static function (): Session {
    return new Session();
});


$container->add('pdo', static function (): PDO {
    $settings = require __DIR__ . '/database.php';
    return MysqlConnection::fromConfig($settings);
});

$container->add('routes', static function (): Routes {
    return new Routes();
});


$container->add('view', static function () {

    $view = Twig::create(
        __DIR__ . '/../template',
        [
            'cache' => false, //__DIR__ . '/../cache',
            'debug' => true,
        ]
    );

    $view->addExtension(new DebugExtension());

    $view->addExtension(new CacheExtension());

    $view->addRuntimeLoader(new class implements RuntimeLoaderInterface {
        public function load($class): CacheRuntime
        {
            if (CacheRuntime::class === $class) {
                return new CacheRuntime(new TagAwareAdapter(new FilesystemAdapter()));
            }
            throw new RuntimeException('could not load CacheRuntime');
        }
    });

    return $view;
});

return $container;
