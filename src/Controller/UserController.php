<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

/**
 * @Route("/api", name="manage")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user_index")
     */
    public function index(EntityManagerInterface $em): Response
    {
        $users = $em->getRepository(User::class)->findAll();
        
        $resultData = [];

        for($i=0; $i<count($users); $i++) {
            $resultData[] = [
                'id' => $users[$i]->getId(),
                'name' => $users[$i]->getName(),
                'surname' => $users[$i]->getSurname(),
                'age' => $users[$i]->getAge(),
                'phone' => $users[$i]->getPhone(),
                'email' => $users[$i]->getEmail(),
                'hourly_rate' => $users[$i]->getHourlyRate()
            ];
        }

        return $this->render('manage/index.html.twig', array('resultData' => $resultData));
    }

    /**
     * @Route("/user/create", name="user_create", methods={"GET", "POST"})
     */
    public function create(Request $request, EntityManagerInterface $em): Response
    {
        $user = new User();

        $form = $this->createFormBuilder($user)
            ->add('name', TextType::class, array('label' => 'Imię'))
            ->add('surname', TextType::class, array('label' => 'Nazwisko'))
            ->add('age', NumberType::class, array('label' => 'Wiek'))
            ->add('phone', TextType::class, array('label' => 'Telefon'))
            ->add('password', PasswordType::class, array('label' => 'Hasło'))
            ->add('email', TextType::class, array('label' => 'Email'))
            ->add('hourly_rate', NumberType::class, array('label' => 'Stawka na godzinę'))
            ->add('save', SubmitType::class, array('label' => 'Utwórz'))
            ->getForm();

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('users_list');
        }

        return $this->render('manage/create.html.twig', array(
            'form' => $form->createView()
        ));
    }

    /**
     * @Route("/user/show/{id}", name="user_read", methods={"GET"})
     */
    public function read(int $id, EntityManagerInterface $em): Response
    {
        $user = $em->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->redirectToRoute('users_list');
        }

        $resultData = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'surname' => $user->getSurname(),
            'age' => $user->getAge(),
            'phone' => $user->getPhone(),
            'email' => $user->getEmail(),
            'hourly_rate' => $user->getHourlyRate()
        ];

        return $this->render('manage/read.html.twig', array('resultData' => $resultData));
    }

    /**
     * @Route("/user/update/{id}", name="user_update", methods={"GET", "POST"})
     */
    public function update(Request $request, int $id, EntityManagerInterface $em): Response
    {
        $user = $em->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->redirectToRoute('users_list');
            //return $this->json('User does not exists.', 404);
        }

        $form = $this->createFormBuilder($user)
            ->add('name', TextType::class, array('attr' => array('class' => 'form-control')))
            ->add('surname', TextType::class, array('attr' => array('class' => 'form-control')))
            ->add('age', NumberType::class, array('attr' => array('class' => 'form-control')))
            ->add('phone', TextType::class, array('attr' => array('class' => 'form-control')))
            ->add('password', PasswordType::class, array('attr' => array('class' => 'form-control')))
            ->add('email', TextType::class, array('attr' => array('class' => 'form-control')))
            ->add('hourly_rate', NumberType::class, array('attr' => array('class' => 'form-control')))
            ->add('save', SubmitType::class, array('label' => 'Aktualizuj', 'attr' => array('class' => 'form-control')))
            ->getForm();

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            $em->flush();
            return $this->redirectToRoute('users_list');
        }

        return $this->render('manage/create.html.twig', array(
            'form' => $form->createView()
        ));
    }

    /**
     * @Route("/user/delete/{id}", name="user_delete", methods={"DELETE"})
     */
    public function delete(int $id, EntityManagerInterface $em): Response
    {
        $user = $em->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json('User does not exists.', 404);
        }

        $em->remove($user);
        $em->flush();

        return $this->json('User deleted.');
    }
}
