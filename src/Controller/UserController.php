<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api", name="manage")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/users", name="user_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $users = $em->getRepository(User::class)->findAll();

        if(!count($users)>0) {
            return $this->json("Żaden użytkownik nie istnieje.", 404);
        }

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

        return $this->json($resultData);
    }

    /**
     * @Route("/user/create", name="user_create", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $em): Response
    {
        $user = new User();

        if(is_string($request->request->get('name'))) {
            if($request->request->get('name') == "") {
                return $this->json("Imie nie może być puste.", 400);
            }
        } else {
            return $this->json("Brak imienia.", 400);
        }
        if(is_string($request->request->get('surname'))) {
            if($request->request->get('surname') == "") {
                return $this->json("Nazwisko nie może być puste.", 400);
            }
        } else {
            return $this->json("Brak nazwiska.", 400);
        }
        if(is_numeric($request->request->get('age'))) {
            if($request->request->get('age') < 0) {
                return $this->json("Wiek nie moze być mniejszy niż zero.", 400);
            }
        } else {
            return $this->json("Blędny wiek.", 400);
        }
        if(is_string($request->request->get('phone'))) {
            if($request->request->get('phone') == "") {
                return $this->json("Telefon nie może być pusty.", 400);
            }
        } else {
            return $this->json("Brak telefonu.", 400);
        }
        if(is_string($request->request->get('password'))) {
            if($request->request->get('password') == "") {
                return $this->json("Hasło nie może być puste.", 400);
            }
        } else {
            return $this->json("Brak hasła.", 400);
        }
        if(is_string($request->request->get('email'))) {
            if($request->request->get('email') == "") {
                return $this->json("Email nie może być pusty.", 400);
            }
        } else {
            return $this->json("Brak email.", 400);
        }
        if(is_numeric($request->request->get('hourly_rate'))) {
            if($request->request->get('hourly_rate')<0) {
                return $this->json("Stawka nie może być mniejsza niż zero.", 400);
            }
        } else {
            return $this->json("Błędna stawka.", 400);
        }

        $user->setName($request->request->get('name'));
        $user->setSurname($request->request->get('surname'));
        $user->setAge($request->request->get('age'));
        $user->setPhone($request->request->get('phone'));
        $user->setEmail($request->request->get('email'));
        $hashed_password = password_hash($request->request->get('password'), PASSWORD_DEFAULT);
        $user->setPassword($hashed_password);
        $user->setHourlyRate($request->request->get('hourly_rate'));
            
        $em->persist($user);
        $em->flush();

        return $this->json("Użytkownik został dodany.");
    }

    /**
     * @Route("/user/show/{id}", name="user_read", methods={"GET"})
     */
    public function read(int $id, EntityManagerInterface $em): Response
    {
        $user = $em->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json("Użytkownik nie istnieje.", 404);
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

        return $this->json($resultData);
    }

    /**
     * @Route("/user/update/{id}", name="user_update", methods={"POST"})
     */
    public function update(Request $request, int $id, EntityManagerInterface $em): Response
    {
        $user = $em->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json('Użytkownik nie istnieje.', 404);
        }

        if($request->request->has('name')) {
            if(is_string($request->request->get('name'))) {
                if($request->request->get('name') == "") {
                    return $this->json("Imie nie może być puste.", 400);
                }
            } else {
                return $this->json("Brak imienia.", 400);
            }

            $user->setName($request->request->get('name'));
        }
        if($request->request->has('surname')) {
            if(is_string($request->request->get('surname'))) {
                if($request->request->get('surname') == "") {
                    return $this->json("Nazwisko nie może być puste.", 400);
                }
            } else {
                return $this->json("Brak nazwiska.", 400);
            }

            $user->setSurname($request->request->get('surname'));
        }
        if($request->request->has('age')) {
            if(is_numeric($request->request->get('age'))) {
                if($request->request->get('age') < 0) {
                    return $this->json("Wiek nie moze być mniejszy niż zero.", 400);
                }
            } else {
                return $this->json("Blędny wiek.", 400);
            }

            $user->setAge($request->request->get('age'));
        }
        if($request->request->has('phone')) {
            if(is_string($request->request->get('phone'))) {
                if($request->request->get('phone') == "") {
                    return $this->json("Telefon nie może być pusty.", 400);
                }
            } else {
                return $this->json("Brak telefonu.", 400);
            }

            $user->setPhone($request->request->get('phone'));
        }
        if($request->request->has('email')) {
            if(is_string($request->request->get('email'))) {
                if($request->request->get('email') == "") {
                    return $this->json("Email nie może być pusty.", 400);
                }
            } else {
                return $this->json("Brak email.", 400);
            }

            $user->setEmail($request->request->get('email'));
        }
        if($request->request->has('hourly_rate')) {
            if(is_numeric($request->request->get('hourly_rate'))) {
                if($request->request->get('hourly_rate')<0) {
                    return $this->json("Stawka nie może być mniejsza niż zero.", 400);
                }
            } else {
                return $this->json("Błędna stawka.", 400);
            }

            $user->setHourlyRate($request->request->get('hourly_rate'));
        }
        
        $em->flush();

        return $this->json("Zaktualizowano.");
    }

    /**
     * @Route("/user/updatepassword/{id}", name="user_update_password", methods={"POST"})
     */
    public function updatepassword(Request $request, int $id, EntityManagerInterface $em): Response
    {
        $user = $em->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json('Użytkownik nie istnieje.', 404);
        }

        if(is_string($request->request->get('password'))) {
            if($request->request->get('password') == "") {
                return $this->json("Hasło nie może być puste.", 400);
            }
        } else {
            return $this->json("Brak hasła.", 400);
        }

        $hashed_password = password_hash($request->request->get('password'), PASSWORD_DEFAULT);
        $user->setPassword($hashed_password);

        $em->flush();

        return $this->json("Zaktualizowano.");
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
