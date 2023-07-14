#!/usr/bin/env python3

"""
Given a string of parentheses s, return the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).
For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
"""

def solve_parenthesis(array):
    if not s:
        return 0
    total = 0
    temp = 0

    for p in s:
        if p == "(":
            total += 1
        elif p == ")" and total:
            total -= 1
        else:
            temp += 1
    return total + temp
