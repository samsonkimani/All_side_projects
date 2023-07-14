#!/usr/bin/env python3

"""
The Dutch national flag problem [1] is a computer science programming problem proposed by Edsger Dijkstra.[2] The flag of the Netherlands consists of three colors: red, white and blue. Given balls of these three colors arranged randomly in a line (it does not matter how many balls there are), the task is to arrange them such that all balls of the same color are together and their collective color groups are in the correct order.
The solution to this problem is of interest for designing sorting algorithms; in particular, variants of the quicksort algorithm that must be robust to repeated elements may use a three-way partitioning function that groups items less than a given key (red), equal to the key (white) and greater than the key (blue). Several solutions exist that have varying performance characteristics, tailored to sorting arrays with either small or large numbers of repeated elements
"""

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    print(i)

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def quicksort(arr, low, high):
    if low < high:
        pivot = partition(arr, low, high)

        quicksort(arr, low, pivot - 1)
        quicksort(arr, pivot + 1, high)


def quick_sort(arr):
    quicksort(arr, 0, len(arr) - 1)
    return arr


arr = [7, 2, 1, 6, 8, 5, 3, 4]
sorted_array = quick_sort(arr)
print(sorted_array)


""" the dutch flag problem uses partition in quick sort algorithm to divide and sort the values"""

def partition_flag(s, start, word):
    for i in range(start, len(s)):
        if s[i] == word:
            s[i], s[start] = s[start], s[i]
            start += 1
        return start

start = partition(s, 0, "red")
partition(s, start, "green")

return s
