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

with open('sailor_piece.csv', 'r') as csvfile:
    data = list(csv.DictReader(csvfile))

q = int(input("Q: "))

# PRE-PROCESSING (Replacing questions 4 & 5 loops)
# Creates a dictionary grouping all clear times by strategy dynamically: 
# {'M1':, 'Special':}
strategies = {}
for row in data:
    strategies.setdefault(row['Strategy Used'], []).append(int(row['Clear Time']))

# Calculate averages using a dictionary comprehension instead of multi-line loops
strategy_averages = {strat: sum(times) / len(times) for strat, times in strategies.items()}


if q == 1:  # Average Clear Time
    print("What is the average clear time for a given boss?")
    boss_name = input("Boss Name: ")
    
    # 1. Loop replaced with a single list comprehension
    times = [int(row['Clear Time']) for row in data if row['Boss Name'] == boss_name]
    
    # Visual prints matching your original logic
    [print(f"{row['Test Code']} - {row['Boss Name']}: Clear Time {row['Clear Time']}") 
     for row in data if row['Boss Name'] == boss_name]
    
    # 2. Replaced the manual sum loop with the built-in sum() function
    print(f"The average clear time for {boss_name} was {sum(times) / len(times)}.")

elif q == 2:  # Average difference 
    print("What is the average time difference for a given boss?")
    boss_name = input("Boss Name: ")
    
    # 3. Replaced the explicit if/else sign conversion with built-in abs()
    diffs = [abs(float(row['Avg. Diff'])) for row in data if row['Boss Name'] == boss_name]
    
    [print(f"{row['Test Code']} - {row['Boss Name']}: Avg Diff. {row['Avg. Diff']}") 
     for row in data if row['Boss Name'] == boss_name]
    
    print(f"The average difference in clear time for {boss_name} was {sum(diffs) / len(diffs)}.")

elif q == 3:  # Fastest strategy for a boss
    print("What strategy had the fastest clear time for a given boss?")
    boss_name = input("Boss Name: ")
    
    # Filter down to just this boss's entries
    boss_rows = [row for row in data if row['Boss Name'] == boss_name]
    [print(f"{row['Test Code']}: {row['Strategy Used']} - {row['Clear Time']} seconds") for row in boss_rows]
    
    # 4. Replaced the 'best_time = 9999' check by using built-in min() with a key
    best_row = min(boss_rows, key=lambda row: int(row['Clear Time']))
    
    print(f"The most efficient strategy for {boss_name} was {best_row['Strategy Used']} at {best_row['Clear Time']} seconds per run.")

elif q == 4:  # Fastest overall clear time
    print("What strategy had the fastest average clear time overall?")
    
    # 5. Replaced tracking variables and index mapping with a built-in min() filter
    best_strat = min(strategy_averages, key=strategy_averages.get)
    
    print(f"The strategy with the fastest average clear time overall was {best_strat} with an average of {strategy_averages[best_strat]} seconds.")

elif q == 5:  # Slowest overall clear time
    print("What strategy had the slowest average clear time overall?")
    
    # 6. Replaced the copy-pasted code from Q4 with a simple max() call
    worst_strat = max(strategy_averages, key=strategy_averages.get)
    
    print(f"The strategy with the slowest average clear time overall was {worst_strat} with an average of {strategy_averages[worst_strat]} seconds.")
