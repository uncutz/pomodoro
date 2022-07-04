<?php

declare(strict_types=1);

namespace Backend\Controller;

use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class SessionController extends AbstractController
{
    /**
     * @throws SyntaxError
     * @throws NotFoundExceptionInterface
     * @throws ContainerExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function config(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
    {
        $container = $this->getContainer();

        return $container->getView()->render($response, 'pages/session-config.twig');
    }

    /**
     * @throws SyntaxError
     * @throws NotFoundExceptionInterface
     * @throws ContainerExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function session(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {
        $container   = $this->getContainer();
        $queryParams = $request->getQueryParams();


        return $container->getView()->render(
            $response,
            'pages/session.twig',
            [
                'sessionDuration'    => $queryParams['sessionDuration'],
                'workingBlockLength' => $queryParams['workingBlockLength'],
                'breakLength'        => $queryParams['breakLength'],
                'videoLink'          => $queryParams['videoLink'],
            ]
        );
    }

}