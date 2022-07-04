<?php

declare(strict_types=1);

namespace Backend\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class Extension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('getParam', [$this, 'getParam']),
        ];
    }


    public function getParam()
    {

    }
}
