from random import randint

def print_card_name(card_rank):
    if card_rank >= 14:
        print("BAD CARD")
        return None
    elif card_rank == 13:
        r = "King"
        s = 10
    elif card_rank == 12:
        r = "Queen"
        s = 10
    elif card_rank == 11:
        r = "Jack"
        s = 10
    elif card_rank == 1:
        r = "Ace"
        s = 11
    else:
        r = card_rank
        s = r
    if r == 1 or r == 8:
        p = "an"
    else:
        p = "a"
    print(f"Drew {p} {r}")
    return s

def draw_card():
    rnd = randint(1, 13)
    return print_card_name(rnd)

def print_header(message):
    print(f"-----------\n{message}\n-----------")

def draw_starting_hand(name):
    v = 0
    print_header(f"{name.upper()} TURN")
    v += draw_card()
    v += draw_card()
    return v

def print_end_turn_status(hand_value):
    print(f"Final hand: {hand_value}.")
    if hand_value > 21:
        print("BUST.")
    elif hand_value == 21:
        print("BLACKJACK!")

def print_end_game_status(user_hand, dealer_hand):
    print_header("GAME RESULT")
    if (user_hand == 21 and dealer_hand > 21) or (user_hand == 21 and dealer_hand < 21) or user_hand > dealer_hand:
        if (user_hand > 21):
            print("Dealer wins!")
            return -1
        else:
            print("You win!")
            return 1
    elif (dealer_hand == 21 and user_hand > 21) or (dealer_hand == 21 and user_hand < 21 or dealer_hand > user_hand):
        if (dealer_hand > 21):
            print("You win!")
            return 1
        else:
            print("Dealer wins!")
            return -1
    elif user_hand == dealer_hand:
        print("Push.")
        return 0

user_hand = draw_starting_hand("your")
stand = False

if user_hand < 21 and stand == False:
    while not stand :
        c = input(f"You have {user_hand}. Hit (y/n)? ")
        if c.lower() == "n":
            stand = True
        elif c.lower() == "y":
            user_hand += draw_card()
            if user_hand >= 21:
                stand = True
        else:
            print("Sorry I didn't get that.")
print_end_turn_status(user_hand)
dealer_hand = draw_starting_hand("dealer")
dealerStand = False
while dealer_hand <= 17:
    dealer_hand += draw_card()
print_end_turn_status(dealer_hand)

with open("record.txt", "a") as f:
    f.write(f"User: {user_hand} - Dealer: {dealer_hand}; Result: {print_end_game_status(user_hand, dealer_hand)}\n")

