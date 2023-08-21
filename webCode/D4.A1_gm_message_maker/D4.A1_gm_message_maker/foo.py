def solution(l, t):
    start = 0
    end = 0
    current_sum = 0

    for i, num in enumerate(l):
        current_sum += num

        while current_sum > t:
            current_sum -= l[start]
            start += 1

        if current_sum == t:
            end = i
            return [start, end]

    return [-1, -1]

