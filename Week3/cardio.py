def longest_word(x,y,z):
    max = x
    if len(max) < len(y):
        max = y
    if len(max) < len(z):
        max = z
    return max

print(longest_word("Hello","Hi","HEEY"))


def reverse_string(x):
    s = ""
    for i in range(len(x)-1,-1,-1):
        s += x[i]
    return s
     # s = ""
     # for i in x:
     #     s = i + s This is a method
    # return x[::-1] This is another method

print (reverse_string("Clifford"))

def sum_to_n(n):
    total = 0
    for i in range(1,n+1):
        total = total + i
    return total

def is_triange(a,b,c):
    
