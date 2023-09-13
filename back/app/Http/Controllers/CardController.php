<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;

class CardController extends Controller{

    private $cards = 
        array('S-A', 'S-2', 'S-3', 'S-4', 'S-5', 'S-6', 'S-7', 'S-8', 'S-9', 'S-X', 'S-J', 'S-Q', 'S-K',
              'H-A', 'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8', 'H-9', 'H-X', 'H-J', 'H-Q', 'H-K',
              'D-A', 'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-X', 'D-J', 'D-Q', 'D-K',
              'C-A', 'C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-X', 'C-J', 'C-Q', 'C-K');

    public function shuffle($headcount)
    {
        // a. Number of people (numerical value)
        // b. It does not matter how cards are given if recompile of program arguments, parameter,
        // keyboard input and so on are not necessary.
        // c. In case input value is nil or value is invalid then the error message of “Input value does
        // not exist or value is invalid” must be displayed and the process must be terminated.
        // d. Any number less than 0 is an invalid value.
        // e. Greater than 53 are normal values and cards must be distributed to a number of people
        // instead of having it as an error.

        if(!is_numeric($headcount) || $headcount <= 0)
        {
            return Controller::response(401, 'Input value does not exist or value is invalid');
        }

        shuffle($this->cards);

        $playerCount = 1;
        $playerAssignedCards = array();

        foreach($this->cards as $card){
            $playerAssignedCards[$playerCount][] = $card;
            if($headcount > $playerCount) $playerCount++;
            else $playerCount = 1;
        }

        return Controller::response(200, '', $playerAssignedCards);
    }

}

?>