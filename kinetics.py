R = 10
s = 0
for n in range(1, R+1):
    print(f"3 - ({n} * pow(5, {-1 * n}))")
    s = 3 - (n * pow(5, -1 * n))
    print(f"term {n}: {round(s, 4)}")