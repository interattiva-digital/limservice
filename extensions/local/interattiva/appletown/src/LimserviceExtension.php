<?php

namespace Bolt\Extension\Interattiva\Limservice;

use Bolt\Extension\SimpleExtension;
use Silex\ControllerCollection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * ExtensionName extension class.
 *
 * @author Your Name <you@example.com>
 */
class LimserviceExtension extends SimpleExtension
{
    protected function registerFrontendRoutes(ControllerCollection $collection)
    {
        $collection->match('/form', [$this, 'handleFormRequest']);
    }

    public function handleFormRequest(Request $request)
    {
        $app = $this->getContainer();
        $mailer = $app['mailer'];

        $message = \Swift_Message::newInstance()
            ->setSubject('Заявка с сайта')
            ->setFrom(['manager@limservice.kz' => 'Lim Service'])
            ->setTo(['manager@limservice.kz'])
            ->setBody($this->renderTemplate('email.twig', [
                'name' => $request->request->get('name'),
                'email' => $request->request->get('email'),
                'message' => $request->request->get('email')
            ]), 'text/html');

        $mailer->send($message);

        $lang = $request->request->get('language');

        $response = new RedirectResponse("${lang}/thankyou");

        return $response;
    }
}
