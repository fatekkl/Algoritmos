def binary_search(nums, n):
    l = 0
    h = len(nums)
    steps = 0

    while l < h:
        steps += 1
        mid = int((l + h) / 2)

        if nums[mid] == n:
            print("step:", steps)
            return mid
        elif nums[mid] < n:
            l = mid + 1
        else:
            h = mid

    return -1


a = [1, 2, 3, 4, 5]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


result = binary_search(b, 3)

print(result)
