#!/usr/bin/env python3

"""
removing duplicates from a sorted array
"""

def remove_duplicates(array):
    counter = 0

    while counter <= len(Array) - 1:
        if array[counter] == array[counter + 1]:
            array.remove(array[counter])
        else:
            counter += 1
    return len(array)
