def transpose(matrix):
    final = []
    for i in range(len(matrix)):
        final.append([])
        for n in range(len(matrix[i])):
            final[i].append(matrix[n][i])
    return final

assert transpose([[1, 2], [3, 4]]) == [[1, 3], [2, 4]]
assert transpose([[7, 8], [7, 8]]) == [[7, 7], [8, 8]]
assert transpose([[5, -8], [34, 6]]) == [[5, 34], [-8, 6]]