# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
def even_or_odd(num)
    if num % 2 == 0
      return "#{num} is Even"
    else
      return "#{num} is Odd"
    end
  end
puts even_or_odd(7)
puts even_or_odd(42)
puts even_or_odd(221)

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# input: a number (variable given)
# output: a string that says weather or not the number is even or odd
# create logic that will determine if number is even 
# if not even, create logic that will determine if number is odd

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def no_vowels(str) 
    str.delete("aeiou")
end
puts no_vowels('bubber Soul')
puts no_vowels('Sgt Pepper')
puts no_vowels('Abbey Road')

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# input: a string
# output: a string with vowels removed ('a' 'e' 'i' 'o' 'u')
# create logic that will remove vowels using .delete
# return new string

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
def name string 
    if string == string.reverse
        'true, this is a palindrome'
    elsif string == string.downcase.reverse
        'true, this is a palindrome'
    else string != string.reverse
        'False, not a palendrome'  
    end
end
puts name 'Racecar' #False, not a palindrome
puts name 'LEARN' #False, not a palindrome
puts name 'Rotator' #True, this is a palindrome

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
#input: a string  
#output: a different string saying if the string provided is a palindrome or not


