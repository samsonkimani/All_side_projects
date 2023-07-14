#!/usr/bin/env python3

"""
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.
Example 1:
Input: [3,2,3]
Output: 3
"""

def majority_vote(arr):
    counter = 0
    majority = 0

    for i in arr:
        if counter == 0:
            majority = i
        if majority == i:
            counter += 1
        else:
            counter = -1
    return majority

