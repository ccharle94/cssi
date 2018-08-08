chosen_Word ="programming"
def init_Word(word):
    temp = []
    for i in (word):
        temp.append("_")
    return temp

def print_Board(board,guessList):
    print " ".join(board)
    print 'Guesses: ' + " ".join(guessList)

def add_Guess(board,word,guess):
    for i in range(len(word)):
        if guess == word[i]:
            board[i] = guess
def game():
    chosen_Word = 'programming'
    guesses = []
    board = init_Word(chosen_Word)

    while '_' in board:
        print_Board(board,guesses)
        guess = raw_input('Enter a letter: ').lower()

        if len(guess) == 1:
            if guess in chosen_Word:
                add_Guess(board,chosen_Word,guess)
            guesses.append(guess)

    else:
        print ''.join(board)
        print "Congratulations!!,You wikit smaht!"
game()
