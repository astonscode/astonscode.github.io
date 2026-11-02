from collatz import *
from test_helper import *
import unittest

class TestBlackjackHelper(unittest.TestCase):
    """
    Class for testing blackjack helper functions.
    """

    def test_print_card_name_example(self):
        """
        Example of a test to compare printed statements with expected

        This does not count as one of your tests
        """
        self.assertEqual(get_print(print_card_name, 2), "Drew a 2\n")

        self.assertEqual(get_print(print_card_name, 1), "Drew an Ace\n")
        self.assertEqual(get_print(print_card_name, 11), "Drew a Jack\n")
        self.assertEqual(get_print(print_card_name, 12), "Drew a Queen\n")
        self.assertEqual(get_print(print_card_name, 13), "Drew a King\n")

    def test_mock_randint_example(self):
        """
        Example of a test to compare output for a function that calls randint

        This does not count as one of your tests
        """
        self.assertEqual(mock_random([3], draw_card), 3)
        self.assertEqual(mock_random([3, 5], draw_starting_hand, "DEALER"), 8)

    # MAKE SURE ALL YOUR FUNCTION NAMES BEGIN WITH test_
    # WRITE YOUR TESTS BELOW.

    def test_print_card(self):
        self.assertEqual(mock_random([3,1], draw_starting_hand, "YOUR"), 14)
        self.assertEqual(mock_random([2,4], draw_starting_hand, "YOUR"), 6)
        self.assertEqual(mock_random([12,11], draw_starting_hand, "YOUR"), 20)
        self.assertEqual(mock_random([1,13], draw_starting_hand, "YOUR"), 21)

    def test_header(self):
        self.assertEqual(get_print(print_header, "YOUR"), "-----------\nYOUR TURN\n-----------")

if __name__ == '__main__':
    unittest.main()