<?php
/**
 * Created by PhpStorm.
 * User: Grimbode
 * Date: 08/01/2018
 * Time: 14:48
 */

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function index(){
        return $this->render('main/index.html.twig');
    }
}