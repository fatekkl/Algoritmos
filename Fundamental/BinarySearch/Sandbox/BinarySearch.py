def binary_search(nums, n, l, h):
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


def exponential_search(arr, target):
    if arr[0] == target:
        return target
    n = len(arr)
    i = 1

    while i < n and arr[i] < target:
        i *= 2

    if arr[i] == target:
        return i

    return binary_search(arr, target, i // 2, min(i, n - 1))


result = exponential_search(c, 11)

print(result)
