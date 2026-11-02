i = 0
n = 0
loop = True

import random as rand

class Question:
    def __init__(self, q, a):
        self.q = q
        self.a = a

question_data = [
    {"q": "expand sin(2x)", "a": "2sinxcosx"},
    {"q": "expand cos(2x) in terms of cos and sin", "a": "cos^2x-sin^2x"},
    {"q": "expand cos(2x) in terms of cos", "a": "2cos^2x-1"},
    {"q": "expand cos(2x) in terms of sin", "a": "1-2sin^2x"},
    {"q": "what is the half angle identity of sin^2x?", "a": "(1-cos(2x))/2"},
    {"q": "what is the half angle identity of cos^2x?", "a": "(1+cos(2x))/2"},
    {"q": "expand sin(x/2)", "a": "pm sqrt((1-cosx)/2)"},
    {"q": "expand cos(x/2)", "a": "pm sqrt((1+cosx)/2)"},
    {"q": "expand sec^2x", "a": "1+tan^2x"},
    {"q": "expand csc^2x", "a": "1+cot^2x"},
]

qList = [Question(**data) for data in question_data]

while (loop):
    i += 1
    r = rand.randint(0,5)
    wrong = True
    while (wrong):
        ans = input(f"{i}. {qList[r].q}\n> ")
        if ans != qList[r].a:
            print("uhhh....")
            n += 2
            print(f"here's a hint! {qList[r].a[:(n)]}\nkeep trying! don't give up just yet!!")
        else:
            print("yay! correct!")
            n = 0
            wrong = False

