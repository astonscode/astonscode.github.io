# Do not remove this, you're going to need this
import csv

# Write code below here
"""
What is the average clear time for a given boss?
What is the average difference from the boss's average for a given boss?
What strategy had the fastest clear time for a given boss?
What strategy had the fastest average clear time overall?
What strategy had the slowest average clear time overall?
"""

data = []

with open('sailor_piece.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    data = list(reader)

q = int(input("Q: "))

if q == 1: # Average Clear Time
    print("What is the average clear time for a given boss?")
    boss_name = str(input("Boss Name: "))
    times = []
    for row in data:
        if row['Boss Name'] == boss_name:
            print(f"{row['Test Code']} - {row['Boss Name']}: Clear Time {row['Clear Time']}")
            times.append(int(row['Clear Time']))
    sum = 0 
    for i in times:
        sum += i
    print(f"The average clear time for {boss_name} was {sum / len(times)}.")
elif q == 2: # Average difference 
    print("What is the average time difference for a given boss?")
    boss_name = str(input("Boss Name: "))
    diffs = []
    for row in data:
        if row['Boss Name'] == boss_name:
            print(f"{row['Test Code']} - {row['Boss Name']}: Avg Diff. {row['Avg. Diff']}")
            if float(row['Avg. Diff']) < 0:
                diffs.append(float(row['Avg. Diff']) * -1)
            else:
                diffs.append(float(row['Avg. Diff']))
    sum = 0
    for i in diffs:
        sum += i
    print(f"The average difference in clear time for {boss_name} was {sum / len(diffs)}.")
elif q == 3: # Fastest strategy for a boss
    print("What strategy had the fastest clear time for a given boss?")
    boss_name = str(input("Boss Name: "))
    times = []
    best_time = 9999
    best_label = ""
    for row in data:
        if row['Boss Name'] == boss_name:
            print(f"{row['Test Code']}: {row['Strategy Used']} - {row['Clear Time']} seconds")
            if int(row['Clear Time']) < int(best_time):
                best_label = row['Strategy Used']
                best_time = row['Clear Time']
    print(f"The most efficient strategy for {boss_name} was {best_label} at {best_time} seconds per run.")
elif q == 4: # Fastest overall clear time
    print("What strategy had the fastest average clear time overall?")
    pure_ultimate = []
    ultimate_special = []
    special = []
    special_m1 = []
    m1 = []
    for row in data:
        if row['Strategy Used'] == 'Pure Ultimate':
            pure_ultimate.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'Ultimate + Special':
            ultimate_special.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'Special':
            special.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'Special + M1':
            special_m1.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'M1':
            m1.append(int(row['Clear Time']))
    averages = []
    names = [pure_ultimate, ultimate_special, special, special_m1, m1]
    for n in names:
        s = 0
        for t in n:
            s += t
        averages.append(float(s / 5))
    print(averages)
    best_time = 9999
    best_label = ""
    best_i = 0
    i = 0
    for avg in averages:
        if best_time > avg:
            best_time = avg
            best_i = i
        i += 1

    if best_i == 0:
        best_label = "Pure Ultimate"
    elif best_i == 1:
        best_label = "Ultimate + Special"
    elif best_i == 2:
        best_label = "Special"
    elif best_i == 3:
        best_label = "Special + M1"
    elif best_i == 4:
        best_label = "M1"

    print(f"The strategy with the fastest average clear time overall was {best_label} with an average of {best_time} seconds.")
elif q == 5: # Slowest overall clear time
    print("What strategy had the slowest average clear time overall?")
    pure_ultimate = []
    ultimate_special = []
    special = []
    special_m1 = []
    m1 = []
    for row in data:
        if row['Strategy Used'] == 'Pure Ultimate':
            pure_ultimate.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'Ultimate + Special':
            ultimate_special.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'Special':
            special.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'Special + M1':
            special_m1.append(int(row['Clear Time']))
        elif row['Strategy Used'] == 'M1':
            m1.append(int(row['Clear Time']))
    averages = []
    s = 0
    for t in pure_ultimate:
        s += t
    averages.append(float((s / 5)))
    s = 0
    for t in ultimate_special:
        s += t
    averages.append(float((s / 5)))
    s = 0
    for t in special:
        s += t
    averages.append(float((s / 5)))
    s = 0
    for t in special_m1:
        s += t
    averages.append(float((s / 5)))
    s = 0
    for t in m1:
        s += t
    averages.append(float((s / 5)))
    print(averages)
    best_time = 0
    best_label = ""
    best_i = 0
    i = 0
    for avg in averages:
        if best_time < avg:
            best_time = avg
            best_i = i
        i += 1

    if best_i == 0:
        best_label = "Pure Ultimate"
    elif best_i == 1:
        best_label = "Ultimate + Special"
    elif best_i == 2:
        best_label = "Special"
    elif best_i == 3:
        best_label = "Special + M1"
    elif best_i == 4:
        best_label = "M1"

    print(f"The strategy with the slowest average clear time overall was {best_label} with an average of {best_time} seconds.")
