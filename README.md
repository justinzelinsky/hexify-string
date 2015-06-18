= String to Hex =

I saw the website <a href="http://randomstringtocsscolor.com/">randomstringtocsscolor.com</a> and I thought
that it was pretty neat!

However, I noticed a lot of duplicates. (e.g. "he" produces #00ee00 , as does "hel"), so, I decided
to rewrite it to have less duplicates. Maybe I made it worse. /shrug

I convert each character of the string into its ASCII code and then convert that to hexadecimal.

Then I combine those characters into a new string, pad with 0's if necessary, and then I trim the string
down to length 6 by adding each set of two numbers together and concatinating the new results together.

It's pretty neat.
