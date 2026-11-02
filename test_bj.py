i = str(input("Sentence please!\n"))
if (i[0].lower() == "a" or i[0].lower() == "e") and (i[-1].lower() == "a" or i[-1].lower() == "e"):
    print("Vowel!")
if len(i) >= 20:
    print("Long")
elif len(i) >= 11:
    print("Medium")
elif len(i) <= 10:
    print("Short")
