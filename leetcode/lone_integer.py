#!/usr/bin/env python3

"""

You are given a list of integers nums where each integer occurs exactly three times except for one which occurs once. Return the lone integer.
Bonus: can you do it in O(1) space?
"""

def lone_integer(array):
    return (sum(set(array)) * 3 - sum(num)) / 2
