window.PY_PROBLEMS = [
{
"l": 1,
"t": "Greet by name",
"i": "Alice",
"o": "Hello, Alice!",
"s": "name = input()\nprint(f'Hello, {name}!')",
"e": "input() string ఇస్తుంది; f-string లో {name} replace అవుతుంది."
},
{
"l": 1,
"t": "Sum of two numbers",
"i": "10\n20",
"o": "30",
"s": "a = int(input())\nb = int(input())\nprint(a + b)",
"e": "input() string కాబట్టి int() తో convert చేసి add చేయాలి."
},
{
"l": 1,
"t": "Star triangle",
"i": "3",
"o": "*\n**\n***",
"s": "n = int(input())\nfor i in range(1, n + 1):\n    print('*' * i)",
"e": "String * number = repeat. Loop i=1..n."
},
{
"l": 1,
"t": "Circle area (2 decimals)",
"i": "2",
"o": "12.57",
"s": "r = float(input())\nprint(f'{3.14159 * r * r:.2f}')",
"e": "πr² లెక్కించి :.2f తో 2 decimals format చేశాం."
},
{
"l": 1,
"t": "Swap two words",
"i": "5 9",
"o": "9 5",
"s": "a, b = input().split()\nprint(b, a)",
"e": "split() రెండు values ఇస్తుంది; print లో order మార్చాం."
},
{
"l": 2,
"t": "Celsius to Fahrenheit",
"i": "100",
"o": "212.0",
"s": "c = float(input())\nprint(c * 9 / 5 + 32)",
"e": "Formula F = C×9/5 + 32; float వల్ల 212.0 వస్తుంది."
},
{
"l": 2,
"t": "Simple interest (P R T)",
"i": "1000 5 2",
"o": "100.0",
"s": "p, r, t = map(float, input().split())\nprint(p * r * t / 100)",
"e": "map(float, ...) అన్ని values ని float చేస్తుంది."
},
{
"l": 2,
"t": "Full name",
"i": "Nihar\nDodagatta",
"o": "Nihar Dodagatta",
"s": "f = input()\nl = input()\nprint(f, l)",
"e": "print() commas తో space పెట్టి print చేస్తుంది."
},
{
"l": 2,
"t": "Add one to a number",
"i": "100",
"o": "101",
"s": "print(int(input()) + 1)",
"e": "String ని int గా మార్చాకే arithmetic చేయగలం."
},
{
"l": 2,
"t": "Rectangle area and perimeter",
"i": "4 5",
"o": "20 18",
"s": "l, b = map(int, input().split())\nprint(l * b, 2 * (l + b))",
"e": "Area = l×b, Perimeter = 2(l+b)."
},
{
"l": 3,
"t": "Int to float",
"i": "7",
"o": "7.0",
"s": "print(float(input()))",
"e": "float() int ని float గా cast చేస్తుంది."
},
{
"l": 3,
"t": "String to characters",
"i": "abc",
"o": "['a', 'b', 'c']",
"s": "print(list(input()))",
"e": "list(string) ప్రతి character ని element చేస్తుంది."
},
{
"l": 3,
"t": "Count unique numbers",
"i": "1 2 2 3 3 3",
"o": "3",
"s": "print(len(set(input().split())))",
"e": "set duplicates తొలగిస్తుంది; len() count ఇస్తుంది."
},
{
"l": 3,
"t": "Sum of numbers",
"i": "4 8 15",
"o": "27",
"s": "print(sum(map(int, input().split())))",
"e": "map(int, ...) తో numbers; sum() మొత్తం."
},
{
"l": 3,
"t": "Range to list",
"i": "5",
"o": "[0, 1, 2, 3, 4]",
"s": "print(list(range(int(input()))))",
"e": "range(n) 0..n-1; list() తో list అవుతుంది."
},
{
"l": 4,
"t": "All arithmetic operators",
"i": "10 3",
"o": "13 7 30 3.3333333333333335 1 3 1000",
"s": "a, b = map(int, input().split())\nprint(a + b, a - b, a * b, a / b, a % b, a // b, a ** b)",
"e": "+ - * / % // ** ఏడు operators."
},
{
"l": 4,
"t": "Even or odd",
"i": "7",
"o": "Odd",
"s": "print('Even' if int(input()) % 2 == 0 else 'Odd')",
"e": "% 2 remainder 0 అయితే even."
},
{
"l": 4,
"t": "Comparisons",
"i": "5 3",
"o": "True False True",
"s": "a, b = map(int, input().split())\nprint(a > b, a == b, a != b)",
"e": "Comparison operators bool ఇస్తాయి."
},
{
"l": 4,
"t": "Range and multiple of 5",
"i": "15",
"o": "True",
"s": "n = int(input())\nprint(10 <= n <= 20 and n % 5 == 0)",
"e": "and రెండు conditions True అయితేనే True."
},
{
"l": 4,
"t": "Bitwise operators",
"i": "5 3",
"o": "1 7 6 -6 10 2",
"s": "a, b = map(int, input().split())\nprint(a & b, a | b, a ^ b, ~a, a << 1, a >> 1)",
"e": "Binary bits మీద AND, OR, XOR, NOT, shifts."
},
{
"l": 5,
"t": "Grade from marks",
"i": "85",
"o": "B",
"s": "m = int(input())\nprint('A' if m >= 90 else 'B' if m >= 75 else 'C' if m >= 50 else 'Fail')",
"e": "Chained conditions పై నుండి కిందకు check అవుతాయి."
},
{
"l": 5,
"t": "Leap year",
"i": "2024",
"o": "Leap",
"s": "y = int(input())\nprint('Leap' if y % 4 == 0 and (y % 100 != 0 or y % 400 == 0) else 'Not leap')",
"e": "4 తో divisible, century అయితే 400 తో."
},
{
"l": 5,
"t": "Largest of three",
"i": "4 9 2",
"o": "9",
"s": "print(max(map(int, input().split())))",
"e": "max() అన్నింటిలో పెద్దది ఇస్తుంది."
},
{
"l": 5,
"t": "Vote eligibility",
"i": "18",
"o": "Eligible",
"s": "print('Eligible' if int(input()) >= 18 else 'Not eligible')",
"e": "age >= 18 check."
},
{
"l": 5,
"t": "Triangle type",
"i": "3 3 3",
"o": "Equilateral",
"s": "a, b, c = map(int, input().split())\nprint('Equilateral' if a == b == c else 'Isosceles' if a == b or b == c or a == c else 'Scalene')",
"e": "అన్నీ సమానం, రెండు సమానం, లేదా ఏవీ కావు."
},
{
"l": 6,
"t": "Sum of 1 to n",
"i": "10",
"o": "55",
"s": "print(sum(range(1, int(input()) + 1)))",
"e": "range(1, n+1) మొత్తం sum()."
},
{
"l": 6,
"t": "Factorial",
"i": "5",
"o": "120",
"s": "n = int(input())\nf = 1\nfor i in range(2, n + 1):\n    f *= i\nprint(f)",
"e": "2 నుండి n వరకు గుణిస్తూ వెళ్ళాం."
},
{
"l": 6,
"t": "Countdown",
"i": "5",
"o": "5 4 3 2 1",
"s": "print(*range(int(input()), 0, -1))",
"e": "range step -1 తో తగ్గుతుంది."
},
{
"l": 6,
"t": "Sum of digits",
"i": "1234",
"o": "10",
"s": "n = int(input())\ns = 0\nwhile n:\n    s += n % 10\n    n //= 10\nprint(s)",
"e": "% 10 last digit; // 10 దాన్ని తీసేస్తుంది."
},
{
"l": 6,
"t": "Prime check",
"i": "29",
"o": "Prime",
"s": "n = int(input())\nprint('Prime' if n > 1 and all(n % i for i in range(2, int(n ** .5) + 1)) else 'Not prime')",
"e": "√n వరకు ఏ number తోనూ divide కాకపోతే prime."
},
{
"l": 7,
"t": "Reverse a string",
"i": "python",
"o": "nohtyp",
"s": "print(input()[::-1])",
"e": "[::-1] slicing reverse చేస్తుంది."
},
{
"l": 7,
"t": "Count vowels",
"i": "education",
"o": "5",
"s": "print(sum(c in 'aeiou' for c in input().lower()))",
"e": "ప్రతి character vowel అయితే True(=1) sum."
},
{
"l": 7,
"t": "Palindrome",
"i": "madam",
"o": "Yes",
"s": "s = input()\nprint('Yes' if s == s[::-1] else 'No')",
"e": "Reverse తో సమానమైతే palindrome."
},
{
"l": 7,
"t": "Capitalize each word",
"i": "hello python world",
"o": "Hello Python World",
"s": "print(input().title())",
"e": "title() ప్రతి word మొదటి అక్షరం capital."
},
{
"l": 7,
"t": "Replace and count",
"i": "banana",
"o": "bonono 3",
"s": "s = input()\nprint(s.replace('a', 'o'), s.count('a'))",
"e": "replace() కొత్త string; count() occurrences."
},
{
"l": 8,
"t": "Second largest",
"i": "4 9 1 7",
"o": "7",
"s": "print(sorted(set(map(int, input().split())))[-2])",
"e": "set తో duplicates పోతాయి; sort చేసి చివరి రెండోది."
},
{
"l": 8,
"t": "Remove duplicates, keep order",
"i": "1 2 2 3 1",
"o": "[1, 2, 3]",
"s": "print(list(dict.fromkeys(map(int, input().split()))))",
"e": "dict keys order ఉంచుతూ unique."
},
{
"l": 8,
"t": "Rotate left by one",
"i": "1 2 3 4",
"o": "[2, 3, 4, 1]",
"s": "a = input().split()\nprint([int(x) for x in a[1:] + a[:1]])",
"e": "slicing తో మొదటి element చివరికి."
},
{
"l": 8,
"t": "Tuple max, min, sum",
"i": "4 8 15",
"o": "15 4 27",
"s": "t = tuple(map(int, input().split()))\nprint(max(t), min(t), sum(t))",
"e": "Tuple మీద built-in functions."
},
{
"l": 8,
"t": "Even numbers descending",
"i": "5 2 8 1 6",
"o": "[8, 6, 2]",
"s": "a = map(int, input().split())\nprint(sorted([x for x in a if x % 2 == 0], reverse=True))",
"e": "Filter చేసి reverse=True తో sort."
},
{
"l": 9,
"t": "Common elements",
"i": "1 2 3 4\n3 4 5",
"o": "[3, 4]",
"s": "a = set(input().split())\nb = set(input().split())\nprint(sorted(map(int, a & b)))",
"e": "& set intersection."
},
{
"l": 9,
"t": "Word frequency",
"i": "a b a c a b",
"o": "{'a': 3, 'b': 2, 'c': 1}",
"s": "d = {}\nfor w in input().split():\n    d[w] = d.get(w, 0) + 1\nprint(d)",
"e": "get(w, 0) తో default 0 నుండి count."
},
{
"l": 9,
"t": "Symmetric difference",
"i": "1 2 3\n3 4",
"o": "[1, 2, 4]",
"s": "a = set(map(int, input().split()))\nb = set(map(int, input().split()))\nprint(sorted(a ^ b))",
"e": "^ రెండింటిలో ఒక్కదానిలోనే ఉన్నవి."
},
{
"l": 9,
"t": "Key with max value",
"i": "a 5 b 9 c 2",
"o": "b",
"s": "t = input().split()\nd = dict(zip(t[::2], map(int, t[1::2])))\nprint(max(d, key=d.get))",
"e": "zip తో pairs; max(key=d.get) value ఆధారంగా."
},
{
"l": 9,
"t": "Anagram check",
"i": "listen silent",
"o": "Yes",
"s": "a, b = input().split()\nprint('Yes' if sorted(a) == sorted(b) else 'No')",
"e": "sorted letters సమానమైతే anagram."
},
{
"l": 10,
"t": "is_prime function",
"i": "7",
"o": "True",
"s": "def is_prime(n):\n    return n > 1 and all(n % i for i in range(2, int(n ** .5) + 1))\nprint(is_prime(int(input())))",
"e": "Reusable function, bool return."
},
{
"l": 10,
"t": "Sum with *args",
"i": "1 2 3 4",
"o": "10",
"s": "def total(*n):\n    return sum(n)\nprint(total(*map(int, input().split())))",
"e": "*n అన్ని arguments tuple గా; * తో unpack."
},
{
"l": 10,
"t": "Return multiple values",
"i": "10 5",
"o": "15 5 50 2.0",
"s": "def calc(a, b):\n    return a + b, a - b, a * b, a / b\na, b = map(int, input().split())\nprint(*calc(a, b))",
"e": "Multiple return tuple అవుతుంది."
},
{
"l": 10,
"t": "Recursive power",
"i": "2 10",
"o": "1024",
"s": "def pw(a, n):\n    return 1 if n == 0 else a * pw(a, n - 1)\na, n = map(int, input().split())\nprint(pw(a, n))",
"e": "Base case n==0; లేకపోతే a * pw(a, n-1)."
},
{
"l": 10,
"t": "Sort words by length",
"i": "pear fig banana kiwi",
"o": "['fig', 'pear', 'kiwi', 'banana']",
"s": "print(sorted(input().split(), key=lambda w: len(w)))",
"e": "lambda key తో length ఆధారంగా stable sort."
},
{
"l": 11,
"t": "Rectangle class",
"i": "4 5",
"o": "20 18",
"s": "class Rect:\n    def __init__(self, l, b):\n        self.l = l\n        self.b = b\n    def area(self):\n        return self.l * self.b\n    def perimeter(self):\n        return 2 * (self.l + self.b)\nl, b = map(int, input().split())\nr = Rect(l, b)\nprint(r.area(), r.perimeter())",
"e": "__init__ లో attributes, methods లో లెక్కలు."
},
{
"l": 11,
"t": "Bank account (encapsulation)",
"i": "1000\n500\n200",
"o": "1300",
"s": "class Acc:\n    def __init__(self, b):\n        self.__b = b\n    def deposit(self, x):\n        self.__b += x\n    def withdraw(self, x):\n        if x <= self.__b:\n            self.__b -= x\n    def balance(self):\n        return self.__b\na = Acc(int(input()))\na.deposit(int(input()))\na.withdraw(int(input()))\nprint(a.balance())",
"e": "__b private; methods ద్వారా మాత్రమే మారుతుంది."
},
{
"l": 11,
"t": "Inheritance and overriding",
"i": "dog",
"o": "Dog barks",
"s": "class Animal:\n    def speak(self):\n        return 'Animal sound'\nclass Dog(Animal):\n    def speak(self):\n        return 'Dog barks'\nclass Cat(Animal):\n    def speak(self):\n        return 'Cat meows'\nm = {'dog': Dog, 'cat': Cat}\nprint(m.get(input(), Animal)().speak())",
"e": "Child class parent method ని override చేసింది; dict తో class ఎంపిక."
},
{
"l": 11,
"t": "__str__ and __len__",
"i": "Python\n450",
"o": "Book: Python, Pages: 450\n450",
"s": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n    def __str__(self):\n        return f'Book: {self.title}, Pages: {self.pages}'\n    def __len__(self):\n        return self.pages\nb = Book(input(), int(input()))\nprint(b)\nprint(len(b))",
"e": "print(obj) __str__ ని, len(obj) __len__ ని call చేస్తాయి."
},
{
"l": 11,
"t": "Class variable counter",
"i": "3",
"o": "3",
"s": "class C:\n    count = 0\n    def __init__(self):\n        C.count += 1\nfor _ in range(int(input())):\n    C()\nprint(C.count)",
"e": "Class variable అన్ని objects మధ్య shared."
},
{
"l": 12,
"t": "Safe division",
"i": "10 0",
"o": "Cannot divide by zero!",
"s": "a, b = map(int, input().split())\ntry:\n    print(a / b)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')",
"e": "try లో risky code, except లో error handle."
},
{
"l": 12,
"t": "Invalid integer input",
"i": "abc",
"o": "Invalid input",
"s": "try:\n    n = int(input())\n    print(n * 2)\nexcept ValueError:\n    print('Invalid input')",
"e": "int('abc') ValueError raise చేస్తుంది."
},
{
"l": 12,
"t": "finally always runs",
"i": "0",
"o": "Error\nDone",
"s": "try:\n    print(10 // int(input()))\nexcept ZeroDivisionError:\n    print('Error')\nfinally:\n    print('Done')",
"e": "finally error ఉన్నా లేకపోయినా run అవుతుంది."
},
{
"l": 12,
"t": "Raise ValueError",
"i": "15",
"o": "You must be at least 18 years old.",
"s": "try:\n    age = int(input())\n    if age < 18:\n        raise ValueError('You must be at least 18 years old.')\n    print('Allowed')\nexcept ValueError as e:\n    print(e)",
"e": "raise తో మనమే exception; as e తో message."
},
{
"l": 12,
"t": "Custom exception",
"i": "-5",
"o": "Negative numbers are not allowed!",
"s": "class NegativeNumberError(Exception):\n    pass\ntry:\n    n = int(input())\n    if n < 0:\n        raise NegativeNumberError('Negative numbers are not allowed!')\n    print(n)\nexcept NegativeNumberError as e:\n    print(e)",
"e": "Exception subclass చేసి custom error define."
},
{
"l": 13,
"t": "Write then read",
"i": "Hello, Python!",
"o": "Hello, Python!",
"s": "t = input()\nwith open('a.txt', 'w') as f:\n    f.write(t)\nwith open('a.txt') as f:\n    print(f.read())",
"e": "with statement file ని auto close చేస్తుంది."
},
{
"l": 13,
"t": "Count lines in file",
"i": "3",
"o": "3",
"s": "n = int(input())\nwith open('b.txt', 'w') as f:\n    for i in range(1, n + 1):\n        f.write(f'Line {i}\\n')\nwith open('b.txt') as f:\n    print(len(f.readlines()))",
"e": "readlines() అన్ని lines list గా ఇస్తుంది."
},
{
"l": 13,
"t": "Word count from file",
"i": "the quick brown fox jumps",
"o": "5",
"s": "t = input()\nwith open('c.txt', 'w') as f:\n    f.write(t)\nwith open('c.txt') as f:\n    print(len(f.read().split()))",
"e": "read() తర్వాత split() తో words count."
},
{
"l": 13,
"t": "Print lines in reverse",
"i": "a b c",
"o": "c\nb\na",
"s": "items = input().split()\nwith open('d.txt', 'w') as f:\n    f.write('\\n'.join(items))\nwith open('d.txt') as f:\n    for line in reversed(f.read().splitlines()):\n        print(line)",
"e": "splitlines() తో lines list; reversed() తో వెనుక నుండి."
},
{
"l": 13,
"t": "CSV average",
"i": "Nihar,25\nHarsha,24",
"o": "24.5",
"s": "import csv\nrows = [input().split(',') for _ in range(2)]\nwith open('e.csv', 'w', newline='') as f:\n    csv.writer(f).writerows(rows)\nwith open('e.csv') as f:\n    ages = [int(r[1]) for r in csv.reader(f)]\nprint(sum(ages) / len(ages))",
"e": "csv.writer రాస్తుంది, csv.reader row లుగా చదువుతుంది."
},
{
"l": 14,
"t": "math module",
"i": "5",
"o": "120 2.23606797749979",
"s": "import math\nn = int(input())\nprint(math.factorial(n), math.sqrt(n))",
"e": "math లో factorial, sqrt లాంటి functions."
},
{
"l": 14,
"t": "random with seed",
"i": "42",
"o": "2",
"s": "import random\nrandom.seed(int(input()))\nprint(random.randint(1, 10))",
"e": "Seed ఒకటే అయితే random results ఒకటే వస్తాయి."
},
{
"l": 14,
"t": "Days between dates",
"i": "2024-01-01\n2024-03-01",
"o": "60",
"s": "from datetime import date\na = date.fromisoformat(input())\nb = date.fromisoformat(input())\nprint((b - a).days)",
"e": "date - date = timedelta; .days తో రోజులు."
},
{
"l": 14,
"t": "Dict to JSON",
"i": "Nihar 25",
"o": "{\"name\": \"Nihar\", \"age\": 25}",
"s": "import json\nn, a = input().split()\nprint(json.dumps({'name': n, 'age': int(a)}))",
"e": "json.dumps dict ని JSON string చేస్తుంది."
},
{
"l": 14,
"t": "Extract numbers with re",
"i": "There are 15 cats and 3 dogs.",
"o": "['15', '3']",
"s": "import re\nprint(re.findall(r'\\d+', input()))",
"e": "\\d+ అంటే ఒకటి లేదా ఎక్కువ digits."
},
{
"l": 15,
"t": "SQLite insert and select",
"i": "Alice Bob",
"o": "[(1, 'Alice'), (2, 'Bob')]",
"s": "import sqlite3\nc = sqlite3.connect(':memory:')\nc.execute('CREATE TABLE u(id INTEGER PRIMARY KEY, name TEXT)')\nfor n in input().split():\n    c.execute('INSERT INTO u(name) VALUES (?)', (n,))\nprint(c.execute('SELECT * FROM u').fetchall())",
"e": "? placeholders SQL injection నుండి కాపాడతాయి."
},
{
"l": 15,
"t": "SQL average",
"i": "10 20 30",
"o": "20.0",
"s": "import sqlite3\nc = sqlite3.connect(':memory:')\nc.execute('CREATE TABLE s(v INT)')\nc.executemany('INSERT INTO s VALUES (?)', [(int(x),) for x in input().split()])\nprint(c.execute('SELECT AVG(v) FROM s').fetchone()[0])",
"e": "SQL AVG() aggregate function."
},
{
"l": 15,
"t": "statistics module",
"i": "2 4 4 4 5 5 7 9",
"o": "5 4.5 4",
"s": "import statistics as st\na = list(map(int, input().split()))\nprint(st.mean(a), st.median(a), st.mode(a))",
"e": "mean, median, mode ఒకే module లో."
},
{
"l": 15,
"t": "CSV rows to dicts",
"i": "name,age\nAlice,30\nBob,25",
"o": "Alice",
"s": "import csv\nrows = list(csv.DictReader([input() for _ in range(3)]))\nprint(max(rows, key=lambda r: int(r['age']))['name'])",
"e": "DictReader header ని keys గా వాడుతుంది."
},
{
"l": 15,
"t": "Combinations",
"i": "1 2 3",
"o": "[(1, 2), (1, 3), (2, 3)]",
"s": "from itertools import combinations\nprint(list(combinations(map(int, input().split()), 2)))",
"e": "itertools.combinations pairs generate చేస్తుంది."
},
{
"l": 16,
"t": "Read JSON response",
"i": "{\"id\": 1, \"name\": \"Alice\", \"email\": \"alice@example.com\"}",
"o": "Alice alice@example.com",
"s": "import json\nd = json.loads(input())\nprint(d['name'], d['email'])",
"e": "API response (JSON string) ని dict గా మార్చి fields చదివాం."
},
{
"l": 16,
"t": "Build query string",
"i": "London 5",
"o": "q=London&days=5",
"s": "from urllib.parse import urlencode\ncity, days = input().split()\nprint(urlencode({'q': city, 'days': days}))",
"e": "API URL parameters కి urlencode."
},
{
"l": 16,
"t": "Parse a URL",
"i": "https://api.example.com/users/1?active=true",
"o": "api.example.com /users/1 {'active': ['true']}",
"s": "from urllib.parse import urlparse, parse_qs\nu = urlparse(input())\nprint(u.netloc, u.path, parse_qs(u.query))",
"e": "urlparse host, path, query వేరు చేస్తుంది."
},
{
"l": 16,
"t": "HTTP status meaning",
"i": "404",
"o": "Not found",
"s": "m = {200: 'OK', 201: 'Created', 404: 'Not found', 500: 'Server error'}\nprint(m.get(int(input()), 'Unknown'))",
"e": "Status code → message dict lookup."
},
{
"l": 16,
"t": "Find user in JSON list",
"i": "[{\"id\":1,\"name\":\"Alice\"},{\"id\":2,\"name\":\"Bob\"}]\n2",
"o": "Bob",
"s": "import json\nusers = json.loads(input())\nuid = int(input())\nprint(next((u['name'] for u in users if u['id'] == uid), 'User not found'))",
"e": "next(generator, default) మొదటి match లేదా default."
},
{
"l": 17,
"t": "Route table with decorator",
"i": "/about",
"o": "This is the About Page",
"s": "routes = {}\ndef route(p):\n    def d(f):\n        routes[p] = f\n        return f\n    return d\n@route('/')\ndef home():\n    return 'Welcome to the Home Page'\n@route('/about')\ndef about():\n    return 'This is the About Page'\nprint(routes[input()]())",
"e": "@app.route ఇలాగే URL ని function కి map చేస్తుంది (Flask లేకుండా simulate)."
},
{
"l": 17,
"t": "Dynamic route",
"i": "/user/Nihar",
"o": "Hello, Nihar!",
"s": "def user(name):\n    return f'Hello, {name}!'\nparts = input().strip('/').split('/')\nif parts[0] == 'user':\n    print(user(parts[1]))\nelse:\n    print('404 Not Found')",
"e": "/user/<name> లో name URL నుండి వచ్చే parameter."
},
{
"l": 17,
"t": "jsonify a user",
"i": "1",
"o": "{\"id\": 1, \"name\": \"Alice\"}",
"s": "import json\nusers = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]\nuid = int(input())\nu = next((x for x in users if x['id'] == uid), None)\nprint(json.dumps(u) if u else json.dumps({'error': 'User not found'}))",
"e": "jsonify dict ని JSON response చేస్తుంది; లేకపోతే error JSON."
},
{
"l": 17,
"t": "Handle POST form",
"i": "POST\nNihar",
"o": "Hello, Nihar!",
"s": "method = input()\nif method == 'POST':\n    name = input()\n    print(f'Hello, {name}!')\nelse:\n    print('<form method=\"post\">')",
"e": "request.method చూసి POST అయితే form data చదువుతాం."
},
{
"l": 17,
"t": "Allowed HTTP methods",
"i": "DELETE",
"o": "405 Method Not Allowed",
"s": "allowed = {'GET', 'POST'}\nm = input().upper()\nprint('OK' if m in allowed else '405 Method Not Allowed')",
"e": "methods=[...] లో లేని method కి 405 వస్తుంది."
},
{
"l": 201,
"t": "FizzBuzz",
"i": "5",
"o": "1\n2\nFizz\n4\nBuzz",
"s": "for i in range(1, int(input()) + 1):\n    print('FizzBuzz' if i % 15 == 0 else 'Fizz' if i % 3 == 0 else 'Buzz' if i % 5 == 0 else i)",
"e": "15 check ముందు పెట్టాలి; లేకపోతే Fizz మాత్రమే వస్తుంది.",
"s2": "for i in range(1, int(input()) + 1):\n    s = ('Fizz' if i % 3 == 0 else '') + ('Buzz' if i % 5 == 0 else '')\n    print(s or i)",
"e2": "Strings జోడించి, ఖాళీ అయితే number print."
},
{
"l": 201,
"t": "Roman numerals",
"i": "1994",
"o": "MCMXCIV",
"s": "n = int(input())\nr = ''\nfor v, s in [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]:\n    while n >= v:\n        r += s\n        n -= v\nprint(r)",
"e": "Greedy: పెద్ద value నుండి తగ్గిస్తూ; subtractive pairs (CM, XC) list లో చేర్చాం.",
"s2": "n = int(input())\nth = ['', 'M', 'MM', 'MMM']\nh = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']\nt = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']\no = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']\nprint(th[n // 1000] + h[n // 100 % 10] + t[n // 10 % 10] + o[n % 10])",
"e2": "ప్రతి digit కి lookup table: వేగంగా, loop లేదు."
},
{
"l": 201,
"t": "Diamond pattern",
"i": "3",
"o": "  *\n ***\n*****\n ***\n  *",
"s": "n = int(input())\nfor i in list(range(1, n + 1)) + list(range(n - 1, 0, -1)):\n    print(' ' * (n - i) + '*' * (2 * i - 1))",
"e": "Row i లో stars 2i-1, spaces n-i; పైకి తర్వాత కిందకి.",
"s2": "n = int(input())\nw = 2 * n - 1\nfor i in list(range(1, n + 1)) + list(range(n - 1, 0, -1)):\n    print(('*' * (2 * i - 1)).center(w).rstrip())",
"e2": "str.center తో spaces లెక్కించక్కర్లేదు."
},
{
"l": 201,
"t": "Number to words (0-999)",
"i": "342",
"o": "three hundred forty two",
"s": "n = int(input())\nones = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()\ntens = '_ _ twenty thirty forty fifty sixty seventy eighty ninety'.split()\nw = []\nif n >= 100:\n    w += [ones[n // 100], 'hundred']\n    n %= 100\nif n >= 20:\n    w.append(tens[n // 10])\n    n %= 10\nif n or not w:\n    w.append(ones[n])\nprint(' '.join(w))",
"e": "వందలు, పదులు, ఒకట్లు వరుసగా వేరు చేసి words list.",
"s2": "ones = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()\ntens = '_ _ twenty thirty forty fifty sixty seventy eighty ninety'.split()\ndef f(n):\n    if n < 20:\n        return ones[n]\n    if n < 100:\n        return tens[n // 10] + (' ' + ones[n % 10] if n % 10 else '')\n    return ones[n // 100] + ' hundred' + (' ' + f(n % 100) if n % 100 else '')\nprint(f(int(input())))",
"e2": "Recursion: మిగిలిన భాగానికి అదే function."
},
{
"l": 201,
"t": "Seconds to HH:MM:SS",
"i": "3725",
"o": "01:02:05",
"s": "s = int(input())\nh, r = divmod(s, 3600)\nm, sec = divmod(r, 60)\nprint(f'{h:02d}:{m:02d}:{sec:02d}')",
"e": "divmod తో గంటలు, నిమిషాలు; :02d తో zero padding.",
"s2": "import time\nprint(time.strftime('%H:%M:%S', time.gmtime(int(input()))))",
"e2": "time.gmtime + strftime library తో."
},
{
"l": 201,
"t": "Armstrong numbers up to n",
"i": "500",
"o": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]",
"s": "n = int(input())\nres = []\nfor x in range(1, n + 1):\n    d = str(x)\n    if sum(int(c) ** len(d) for c in d) == x:\n        res.append(x)\nprint(res)",
"e": "ప్రతి digit ను (digits సంఖ్య) power కి పెంచి sum.",
"s2": "def arm(x):\n    k = len(str(x))\n    t, m = 0, x\n    while m:\n        m, r = divmod(m, 10)\n        t += r ** k\n    return t == x\nprint([x for x in range(1, int(input()) + 1) if arm(x)])",
"e2": "Strings లేకుండా divmod తో digits."
},
{
"l": 201,
"t": "Postfix expression",
"i": "3 4 + 2 *",
"o": "14",
"s": "ops = {'+': lambda a, b: a + b, '-': lambda a, b: a - b, '*': lambda a, b: a * b, '/': lambda a, b: a / b}\nst = []\nfor t in input().split():\n    if t in ops:\n        b = st.pop()\n        a = st.pop()\n        st.append(ops[t](a, b))\n    else:\n        st.append(int(t))\nprint(st[0])",
"e": "Stack: operands push, operator వస్తే రెండు pop చేసి result push.",
"s2": "import operator as o\nops = {'+': o.add, '-': o.sub, '*': o.mul, '/': o.truediv}\nst = []\nfor t in input().split():\n    st.append(ops[t](*[st.pop() for _ in range(2)][::-1]) if t in ops else int(t))\nprint(st[0])",
"e2": "operator module; pop order తిప్పి (a, b) గా unpack."
},
{
"l": 201,
"t": "Convert to any base",
"i": "255 16",
"o": "FF",
"s": "n, b = map(int, input().split())\nd = '0123456789ABCDEF'\ns = ''\nwhile n:\n    n, r = divmod(n, b)\n    s = d[r] + s\nprint(s or '0')",
"e": "divmod: remainder digit, quotient తో కొనసాగింపు.",
"s2": "n, b = map(int, input().split())\nd = '0123456789ABCDEF'\ndef f(n):\n    return '' if n == 0 else f(n // b) + d[n % b]\nprint(f(n) or '0')",
"e2": "Recursion: ముందు పైభాగం, తర్వాత చివరి digit."
},
{
"l": 201,
"t": "Magic square check",
"i": "3\n2 7 6\n9 5 1\n4 3 8",
"o": "True",
"s": "n = int(input())\ng = [list(map(int, input().split())) for _ in range(n)]\nt = sum(g[0])\nrows = all(sum(r) == t for r in g)\ncols = all(sum(g[i][j] for i in range(n)) == t for j in range(n))\nd1 = sum(g[i][i] for i in range(n)) == t\nd2 = sum(g[i][n - 1 - i] for i in range(n)) == t\nprint(rows and cols and d1 and d2)",
"e": "rows, columns, రెండు diagonals అన్నీ ఒకే sum.",
"s2": "n = int(input())\ng = [list(map(int, input().split())) for _ in range(n)]\nsums = [sum(r) for r in g] + [sum(c) for c in zip(*g)] + [sum(g[i][i] for i in range(n)), sum(g[i][-1 - i] for i in range(n))]\nprint(len(set(sums)) == 1)",
"e2": "అన్ని sums ఒక list లో; set size 1 అయితే magic."
},
{
"l": 201,
"t": "Bulls and cows",
"i": "1234 1243",
"o": "2 2",
"s": "a, b = input().split()\nbulls = sum(x == y for x, y in zip(a, b))\ncows = sum(min(a.count(c), b.count(c)) for c in set(a)) - bulls\nprint(bulls, cows)",
"e": "Bulls: ఒకే చోట సమానం; cows: common digits - bulls.",
"s2": "from collections import Counter\na, b = input().split()\nbulls = sum(x == y for x, y in zip(a, b))\nprint(bulls, sum((Counter(a) & Counter(b)).values()) - bulls)",
"e2": "Counter & = common digits count."
},
{
"l": 202,
"t": "Fibonacci with tuple unpacking",
"i": "10",
"o": "55",
"s": "n = int(input())\na, b = 0, 1\nfor _ in range(n):\n    a, b = b, a + b\nprint(a)",
"e": "a, b = b, a+b ఒకేసారి assign; temp variable అవసరం లేదు.",
"s2": "from functools import lru_cache\n@lru_cache(None)\ndef f(n):\n    return n if n < 2 else f(n - 1) + f(n - 2)\nprint(f(int(input())))",
"e2": "Recursion + cache (variables కాకుండా function memo)."
},
{
"l": 202,
"t": "Shallow vs deep copy",
"i": "[[1,2],[3]]",
"o": "[[99, 2], [3]] [[1, 2], [3]]",
"s": "import ast, copy\na = ast.literal_eval(input())\nb = a.copy()\nc = copy.deepcopy(a)\na[0][0] = 99\nprint(b, c)",
"e": "copy() inner lists share చేస్తుంది, deepcopy పూర్తిగా వేరు.",
"s2": "import ast\na = ast.literal_eval(input())\nb = a.copy()\nc = [x[:] for x in a]\na[0][0] = 99\nprint(b, c)",
"e2": "ప్రతి inner list ని manually copy చేస్తే deepcopy లాగే."
},
{
"l": 202,
"t": "Palindrome number (no strings)",
"i": "12321",
"o": "True",
"s": "n = int(input())\nm, r = n, 0\nwhile m:\n    r = r * 10 + m % 10\n    m //= 10\nprint(r == n)",
"e": "% 10 తో digit తీసి reverse number నిర్మించాం.",
"s2": "n = input()\nprint(n == n[::-1])",
"e2": "String reverse తో సులభంగా."
},
{
"l": 202,
"t": "Mutable default argument trap",
"i": "3",
"o": "[1]\n[1]\n[1]",
"s": "def add(x, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(x)\n    return lst\nfor _ in range(int(input())):\n    print(add(1))",
"e": "Default [] ఒక్కసారే create అవుతుంది; None వాడి లోపల కొత్తది చేయాలి.",
"s2": "def add(x, lst=()):\n    return list(lst) + [x]\nfor _ in range(int(input())):\n    print(add(1))",
"e2": "Immutable default (tuple) + కొత్త list return."
},
{
"l": 202,
"t": "GCD with tuple unpacking",
"i": "48 18",
"o": "6",
"s": "a, b = map(int, input().split())\nwhile b:\n    a, b = b, a % b\nprint(a)",
"e": "Euclid: (a, b) = (b, a % b) ఒకేసారి assign.",
"s2": "def g(a, b):\n    return a if b == 0 else g(b, a % b)\nprint(g(*map(int, input().split())))",
"e2": "అదే Euclid recursion తో."
},
{
"l": 202,
"t": "Sort three numbers without sort()",
"i": "9 2 5",
"o": "2 5 9",
"s": "a, b, c = map(int, input().split())\nif a > b:\n    a, b = b, a\nif b > c:\n    b, c = c, b\nif a > b:\n    a, b = b, a\nprint(a, b, c)",
"e": "మూడు compare-swap లు.",
"s2": "a, b, c = map(int, input().split())\nlo, hi = min(a, b, c), max(a, b, c)\nprint(lo, a + b + c - lo - hi, hi)",
"e2": "మధ్యది = మొత్తం - చిన్నది - పెద్దది."
},
{
"l": 202,
"t": "Counter with global vs nonlocal",
"i": "3",
"o": "3",
"s": "count = 0\ndef inc():\n    global count\n    count += 1\nfor _ in range(int(input())):\n    inc()\nprint(count)",
"e": "global keyword తో module-level variable మార్పు.",
"s2": "def make():\n    c = 0\n    def inc():\n        nonlocal c\n        c += 1\n        return c\n    return inc\nf = make()\nfor _ in range(int(input())):\n    r = f()\nprint(r)",
"e2": "Closure లో nonlocal: global కాలుష్యం లేదు."
},
{
"l": 202,
"t": "Pair up two lists",
"i": "1 2 3\n4 5 6",
"o": "[[1, 4], [2, 5], [3, 6]]",
"s": "a = list(map(int, input().split()))\nb = list(map(int, input().split()))\nprint([list(r) for r in zip(a, b)])",
"e": "zip జతలు చేస్తుంది.",
"s2": "a = list(map(int, input().split()))\nb = list(map(int, input().split()))\nprint([[a[i], b[i]] for i in range(len(a))])",
"e2": "Index తో manual జతలు."
},
{
"l": 202,
"t": "Star unpacking",
"i": "5 1 2 3 9",
"o": "5 9 6",
"s": "first, *mid, last = map(int, input().split())\nprint(first, last, sum(mid))",
"e": "first, *mid, last: మధ్యవన్నీ list లోకి.",
"s2": "a = list(map(int, input().split()))\nprint(a[0], a[-1], sum(a[1:-1]))",
"e2": "Indexing + slicing తో అదే."
},
{
"l": 202,
"t": "Reverse integer (32-bit)",
"i": "-123",
"o": "-321",
"s": "n = int(input())\ns = -1 if n < 0 else 1\nr = s * int(str(abs(n))[::-1])\nprint(r if -2 ** 31 <= r < 2 ** 31 else 0)",
"e": "String reverse; 32-bit range దాటితే 0.",
"s2": "n = int(input())\ns, m, r = (-1 if n < 0 else 1), abs(n), 0\nwhile m:\n    r = r * 10 + m % 10\n    m //= 10\nr *= s\nprint(r if -2 ** 31 <= r < 2 ** 31 else 0)",
"e2": "Arithmetic తో digits తిప్పడం."
},
{
"l": 203,
"t": "Sum numbers in mixed text",
"i": "1 two 3 4.5 five",
"o": "8.5",
"s": "total = 0\nfor t in input().split():\n    try:\n        total += float(t)\n    except ValueError:\n        pass\nprint(total)",
"e": "float() fail అయితే ValueError; skip చేశాం.",
"s2": "import re\nprint(sum(float(x) for x in re.findall(r'\\d+(?:\\.\\d+)?', input())))",
"e2": "Regex తో numbers మాత్రమే వెలికితీత."
},
{
"l": 203,
"t": "Digit sum of 100!",
"i": "100",
"o": "648",
"s": "import math\nprint(sum(map(int, str(math.factorial(int(input()))))))",
"e": "Python big ints: 158 digits ఉన్నా overflow లేదు.",
"s2": "n = int(input())\nf = 1\nfor i in range(2, n + 1):\n    f *= i\ns = 0\nwhile f:\n    f, r = divmod(f, 10)\n    s += r\nprint(s)",
"e2": "Factorial loop తో, digits divmod తో."
},
{
"l": 203,
"t": "Float accumulation error",
"i": "10",
"o": "False True",
"s": "import math\nn = int(input())\nt = 0\nfor _ in range(n):\n    t += 0.1\nprint(t == 1, math.isclose(t, 1))",
"e": "Floats binary లో exact కావు; == బదులు isclose.",
"s2": "n = int(input())\nt = 0.0\nfor _ in range(n):\n    t += 0.1\nprint(t == 1, abs(t - 1) < 1e-9)",
"e2": "isclose బదులు tolerance (epsilon) తో పోలిక."
},
{
"l": 203,
"t": "Classify tokens: int, float, str",
"i": "10 3.5 abc True -7",
"o": "['int', 'float', 'str', 'str', 'int']",
"s": "out = []\nfor t in input().split():\n    try:\n        int(t)\n        out.append('int')\n    except ValueError:\n        try:\n            float(t)\n            out.append('float')\n        except ValueError:\n            out.append('str')\nprint(out)",
"e": "int ప్రయత్నం, విఫలమైతే float, లేకపోతే str.",
"s2": "import re\nout = []\nfor t in input().split():\n    out.append('int' if re.fullmatch(r'[+-]?\\d+', t) else 'float' if re.fullmatch(r'[+-]?\\d*\\.\\d+', t) else 'str')\nprint(out)",
"e2": "Regex patterns తో exceptions లేకుండా."
},
{
"l": 203,
"t": "Last 3 digits of 2^n",
"i": "1000",
"o": "376",
"s": "print(pow(2, int(input()), 1000))",
"e": "pow(a, b, mod) modular exponent: పెద్ద number తయారు చేయదు.",
"s2": "print(str(2 ** int(input()))[-3:])",
"e2": "Big int తయారు చేసి string చివరి 3 digits."
},
{
"l": 203,
"t": "Round half up",
"i": "2.5 3.5 0.5",
"o": "3 4 1",
"s": "print(*[int(float(x) + .5) for x in input().split()])",
"e": "Python round() banker's rounding; x+0.5 తో half-up.",
"s2": "from decimal import Decimal, ROUND_HALF_UP\nprint(*[int(Decimal(x).quantize(Decimal('1'), rounding=ROUND_HALF_UP)) for x in input().split()])",
"e2": "Decimal exact మరియు rounding mode ఎంచుకోవచ్చు."
},
{
"l": 203,
"t": "Count unhashable items",
"i": "[1, [2], (3,), 'a', {4}]",
"o": "2",
"s": "import ast\ncount = 0\nfor x in ast.literal_eval(input()):\n    try:\n        hash(x)\n    except TypeError:\n        count += 1\nprint(count)",
"e": "hash() fail అయితే unhashable (list, set, dict).",
"s2": "import ast\nprint(sum(isinstance(x, (list, dict, set)) for x in ast.literal_eval(input())))",
"e2": "Mutable types నేరుగా isinstance తో."
},
{
"l": 203,
"t": "Type frequency",
"i": "[1, 'a', 2.5, 3, 'b', True, None]",
"o": "{'int': 2, 'str': 2, 'float': 1, 'bool': 1, 'NoneType': 1}",
"s": "import ast\nfrom collections import Counter\nprint(dict(Counter(type(x).__name__ for x in ast.literal_eval(input()))))",
"e": "type(x).__name__ తో Counter.",
"s2": "import ast\nd = {}\nfor x in ast.literal_eval(input()):\n    k = type(x).__name__\n    d[k] = d.get(k, 0) + 1\nprint(d)",
"e2": "Manual dict count."
},
{
"l": 203,
"t": "Quadratic roots with complex numbers",
"i": "1 2 5",
"o": "(-1+2j) (-1-2j)",
"s": "import cmath\na, b, c = map(int, input().split())\nd = cmath.sqrt(b * b - 4 * a * c)\nprint((-b + d) / (2 * a), (-b - d) / (2 * a))",
"e": "cmath.sqrt negative కి కూడా పనిచేస్తుంది (complex).",
"s2": "a, b, c = map(int, input().split())\ndisc = b * b - 4 * a * c\nr = abs(disc) ** .5\nif disc < 0:\n    print(complex(-b, r) / (2 * a), complex(-b, -r) / (2 * a))\nelse:\n    print((-b + r) / (2 * a), (-b - r) / (2 * a))",
"e2": "Negative discriminant కి imaginary భాగం manual."
},
{
"l": 203,
"t": "Modify a tuple",
"i": "1 2 3 4\n2 99",
"o": "(1, 2, 99, 4)",
"s": "t = tuple(map(int, input().split()))\ni, v = map(int, input().split())\nprint(t[:i] + (v,) + t[i + 1:])",
"e": "Tuple immutable: slices కలిపి కొత్తది.",
"s2": "t = tuple(map(int, input().split()))\ni, v = map(int, input().split())\nl = list(t)\nl[i] = v\nprint(tuple(l))",
"e2": "List గా మార్చి, మార్చి, మళ్ళీ tuple."
},
{
"l": 204,
"t": "Count set bits",
"i": "29",
"o": "4",
"s": "print(bin(int(input())).count('1'))",
"e": "bin() string లో '1' లు count.",
"s2": "n = int(input())\nc = 0\nwhile n:\n    n &= n - 1\n    c += 1\nprint(c)",
"e2": "n & (n-1) ప్రతిసారి ఒక set bit తొలగిస్తుంది."
},
{
"l": 204,
"t": "Power of two",
"i": "64",
"o": "True",
"s": "n = int(input())\nprint(n > 0 and n & (n - 1) == 0)",
"e": "Power of two లో ఒక్క bit మాత్రమే set.",
"s2": "n = int(input())\nprint(n > 0 and bin(n).count('1') == 1)",
"e2": "Set bits count సరిగ్గా 1."
},
{
"l": 204,
"t": "Single number (others twice)",
"i": "4 1 2 1 2",
"o": "4",
"s": "from functools import reduce\nprint(reduce(lambda a, b: a ^ b, map(int, input().split())))",
"e": "x ^ x = 0, కాబట్టి జతలు రద్దు అవుతాయి. O(1) space.",
"s2": "from collections import Counter\nc = Counter(map(int, input().split()))\nprint(next(k for k, v in c.items() if v == 1))",
"e2": "Counter తో count 1 ఉన్నది. O(n) space."
},
{
"l": 204,
"t": "Swap without temp",
"i": "5 9",
"o": "9 5",
"s": "a, b = map(int, input().split())\na ^= b\nb ^= a\na ^= b\nprint(a, b)",
"e": "XOR swap: మూడు XORలు.",
"s2": "a, b = map(int, input().split())\na = a + b\nb = a - b\na = a - b\nprint(a, b)",
"e2": "Sum/difference trick."
},
{
"l": 204,
"t": "Binary without bin()",
"i": "10",
"o": "1010",
"s": "n = int(input())\ns = ''\nwhile n:\n    s = str(n % 2) + s\n    n //= 2\nprint(s or '0')",
"e": "% 2 తో చివరి bit, // 2 తో shift.",
"s2": "n = int(input())\nprint(''.join(str(n >> i & 1) for i in range(n.bit_length() - 1, -1, -1)) or '0')",
"e2": "Bit shifts తో ఎడమ నుండి కుడికి bits."
},
{
"l": 204,
"t": "Missing number 0..n",
"i": "3 0 1",
"o": "2",
"s": "a = list(map(int, input().split()))\nn = len(a)\nprint(n * (n + 1) // 2 - sum(a))",
"e": "0..n మొత్తం - ఉన్న మొత్తం.",
"s2": "a = list(map(int, input().split()))\nx = len(a)\nfor i, v in enumerate(a):\n    x ^= i ^ v\nprint(x)",
"e2": "అన్ని indices, values XOR; జతలు రద్దు, missing మిగులుతుంది (overflow భయం లేదు)."
},
{
"l": 204,
"t": "Reverse bits (8-bit)",
"i": "13",
"o": "176",
"s": "n = int(input())\nprint(int(format(n, '08b')[::-1], 2))",
"e": "8-bit string reverse చేసి int.",
"s2": "n = int(input())\nr = 0\nfor _ in range(8):\n    r = (r << 1) | (n & 1)\n    n >>= 1\nprint(r)",
"e2": "చివరి bit తీసి r కి కుడివైపు add."
},
{
"l": 204,
"t": "Hamming distance",
"i": "1 4",
"o": "2",
"s": "a, b = map(int, input().split())\nprint(bin(a ^ b).count('1'))",
"e": "XOR లో 1 లు = తేడా bits.",
"s2": "a, b = map(int, input().split())\nx, y = format(a, 'b'), format(b, 'b')\nw = max(len(x), len(y))\nprint(sum(c != d for c, d in zip(x.zfill(w), y.zfill(w))))",
"e2": "Binary strings సమాన పొడవుకి zfill చేసి compare."
},
{
"l": 204,
"t": "Subsets with given sum",
"i": "1 2 3 4\n5",
"o": "2",
"s": "a = list(map(int, input().split()))\nt = int(input())\nn = len(a)\nprint(sum(sum(a[i] for i in range(n) if m >> i & 1) == t for m in range(1 << n)))",
"e": "Bitmask: ప్రతి number ఒక subset.",
"s2": "from itertools import combinations\na = list(map(int, input().split()))\nt = int(input())\nprint(sum(sum(c) == t for r in range(len(a) + 1) for c in combinations(a, r)))",
"e2": "అన్ని sizes combinations check."
},
{
"l": 204,
"t": "Division truncating toward zero",
"i": "-7 2",
"o": "-3",
"s": "a, b = map(int, input().split())\nq = abs(a) // abs(b)\nprint(q if (a < 0) == (b < 0) else -q)",
"e": "Absolute values తో divide, sign సరిచేయి.",
"s2": "a, b = map(int, input().split())\nq = a // b\nprint(q + 1 if q < 0 and q * b != a else q)",
"e2": "Floor result negative అయి exact కాకపోతే +1."
},
{
"l": 205,
"t": "Quadratic roots",
"i": "1 -3 2",
"o": "2.0 1.0",
"s": "a, b, c = map(int, input().split())\nd = b * b - 4 * a * c\nif d > 0:\n    print((-b + d ** .5) / (2 * a), (-b - d ** .5) / (2 * a))\nelif d == 0:\n    print(-b / (2 * a))\nelse:\n    print('No real roots')",
"e": "Discriminant d చూసి మూడు cases.",
"s2": "import math\na, b, c = map(int, input().split())\nd = b * b - 4 * a * c\nprint('No real roots' if d < 0 else (-b / (2 * a)) if d == 0 else f'{(-b + math.sqrt(d)) / (2 * a)} {(-b - math.sqrt(d)) / (2 * a)}')",
"e2": "Nested ternary expression."
},
{
"l": 205,
"t": "Triangle type and area",
"i": "3 4 5",
"o": "Right 6.0",
"s": "a, b, c = sorted(map(int, input().split()))\nif a + b <= c:\n    print('Invalid')\nelse:\n    t = 'Right' if a * a + b * b == c * c else 'Acute' if a * a + b * b > c * c else 'Obtuse'\n    s = (a + b + c) / 2\n    print(t, round((s * (s - a) * (s - b) * (s - c)) ** .5, 2))",
"e": "Sorted చేసి చిన్న రెండు వర్గాల మొత్తాన్ని పెద్దదితో పోల్చాం; Heron's formula.",
"s2": "a, b, c = sorted(map(int, input().split()))\nif a + b <= c:\n    print('Invalid')\nelse:\n    diff = a * a + b * b - c * c\n    t = ('Obtuse', 'Right', 'Acute')[(diff >= 0) + (diff > 0)]\n    s = (a + b + c) / 2\n    print(t, round((s * (s - a) * (s - b) * (s - c)) ** .5, 2))",
"e2": "bool sum తో tuple index ఎంపిక."
},
{
"l": 205,
"t": "Valid date",
"i": "2023-02-29",
"o": "Invalid",
"s": "y, m, d = map(int, input().split('-'))\nleap = y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)\ndays = [31, 29 if leap else 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\nprint('Valid' if 1 <= m <= 12 and 1 <= d <= days[m - 1] else 'Invalid')",
"e": "Leap year బట్టి Feb రోజులు మారతాయి; month ముందు check.",
"s2": "from datetime import date\ny, m, d = map(int, input().split('-'))\ntry:\n    date(y, m, d)\n    print('Valid')\nexcept ValueError:\n    print('Invalid')",
"e2": "datetime తానే validate చేస్తుంది."
},
{
"l": 205,
"t": "Rock-paper-scissors score (P1 P2)",
"i": "3\nrock scissors\npaper rock\nscissors scissors",
"o": "2 0",
"s": "n = int(input())\np1 = p2 = 0\nfor _ in range(n):\n    a, b = input().split()\n    if a == b:\n        continue\n    if (a, b) in (('rock', 'scissors'), ('scissors', 'paper'), ('paper', 'rock')):\n        p1 += 1\n    else:\n        p2 += 1\nprint(p1, p2)",
"e": "Tie skip; గెలిచే జతలు list.",
"s2": "beats = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}\nn = int(input())\nrounds = [input().split() for _ in range(n)]\nprint(sum(beats[a] == b for a, b in rounds), sum(beats[b] == a for a, b in rounds))",
"e2": "'ఎవరు ఎవరిని ఓడిస్తారు' dict."
},
{
"l": 205,
"t": "Tax: 0% to 2.5L, 5% to 5L, 10% to 10L, 20% above",
"i": "1200000",
"o": "102500",
"s": "n = int(input())\ntax = 0\nif n > 1000000:\n    tax += (n - 1000000) * 20 // 100\n    n = 1000000\nif n > 500000:\n    tax += (n - 500000) * 10 // 100\n    n = 500000\nif n > 250000:\n    tax += (n - 250000) * 5 // 100\nprint(tax)",
"e": "పై slab నుండి తగ్గిస్తూ ప్రతి slab లో పన్ను.",
"s2": "n = int(input())\nslabs = [(250000, 500000, 5), (500000, 1000000, 10), (1000000, float('inf'), 20)]\nprint(sum((min(n, hi) - lo) * r // 100 for lo, hi, r in slabs if n > lo))",
"e2": "Slabs data గా; ప్రతిదానిలో ఉన్న భాగం మీద rate."
},
{
"l": 205,
"t": "Next day of a date",
"i": "2024-02-28",
"o": "2024-02-29",
"s": "y, m, d = map(int, input().split('-'))\nleap = y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)\ndim = [31, 29 if leap else 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]\nd += 1\nif d > dim:\n    d, m = 1, m + 1\nif m > 12:\n    m, y = 1, y + 1\nprint(f'{y:04d}-{m:02d}-{d:02d}')",
"e": "నెల/సంవత్సరం చివరన rollover conditions.",
"s2": "from datetime import date, timedelta\nprint(date.fromisoformat(input()) + timedelta(1))",
"e2": "timedelta తో నేరుగా."
},
{
"l": 205,
"t": "Perfect, abundant or deficient",
"i": "28",
"o": "Perfect",
"s": "n = int(input())\ns = sum(i for i in range(1, n) if n % i == 0)\nif s == n:\n    print('Perfect')\nelif s > n:\n    print('Abundant')\nelse:\n    print('Deficient')",
"e": "Proper divisors మొత్తం n తో పోల్చాం.",
"s2": "n = int(input())\ns = sum(i for i in range(1, n // 2 + 1) if n % i == 0)\nprint(['Deficient', 'Perfect', 'Abundant'][(s >= n) + (s > n)])",
"e2": "n/2 వరకే divisors; bool sum index."
},
{
"l": 205,
"t": "Valid knight move",
"i": "e4 f6",
"o": "True",
"s": "a, b = input().split()\ndx = abs(ord(a[0]) - ord(b[0]))\ndy = abs(int(a[1]) - int(b[1]))\nprint((dx == 1 and dy == 2) or (dx == 2 and dy == 1))",
"e": "Knight: (1,2) లేదా (2,1) తేడా.",
"s2": "a, b = input().split()\ndx = abs(ord(a[0]) - ord(b[0]))\ndy = abs(int(a[1]) - int(b[1]))\nprint(sorted((dx, dy)) == [1, 2])",
"e2": "తేడాలను sort చేసి [1, 2] సరిపోల్చాం."
},
{
"l": 205,
"t": "Configurable FizzBuzz",
"i": "7\n2\n3 Fizz\n5 Buzz",
"o": "1\n2\nFizz\n4\nBuzz\nFizz\n7",
"s": "n = int(input())\nk = int(input())\nrules = [input().split() for _ in range(k)]\nfor i in range(1, n + 1):\n    out = ''\n    for d, w in rules:\n        if i % int(d) == 0:\n            out += w\n    print(out or i)",
"e": "Rules ఇన్‌పుట్ నుండి; match అయిన words కలుపుతాం.",
"s2": "n = int(input())\nrules = [(int(d), w) for d, w in (input().split() for _ in range(int(input())))]\nfor i in range(1, n + 1):\n    print(''.join(w for d, w in rules if i % d == 0) or i)",
"e2": "Join + generator ఒక్క line."
},
{
"l": 205,
"t": "Median of three",
"i": "7 3 5",
"o": "5",
"s": "a, b, c = map(int, input().split())\nif (a <= b <= c) or (c <= b <= a):\n    print(b)\nelif (b <= a <= c) or (c <= a <= b):\n    print(a)\nelse:\n    print(c)",
"e": "ఏది మధ్యలో ఉందో chained comparison తో.",
"s2": "a, b, c = map(int, input().split())\nprint(a + b + c - min(a, b, c) - max(a, b, c))",
"e2": "మొత్తం - చిన్నది - పెద్దది."
},
{
"l": 206,
"t": "Squares of even numbers",
"i": "10",
"o": "[4, 16, 36, 64, 100]",
"s": "n = int(input())\nprint([x * x for x in range(1, n + 1) if x % 2 == 0])",
"e": "Comprehension లో filter (if) మరియు expression (x*x).",
"s2": "n = int(input())\nprint(list(map(lambda x: x * x, filter(lambda x: x % 2 == 0, range(1, n + 1)))))",
"e2": "filter + map: functional style."
},
{
"l": 206,
"t": "Word length dictionary",
"i": "python is fun",
"o": "{'python': 6, 'is': 2, 'fun': 3}",
"s": "print({w: len(w) for w in input().split()})",
"e": "Dict comprehension: word → len(word).",
"s2": "w = input().split()\nprint(dict(zip(w, map(len, w))))",
"e2": "zip(words, lengths) నుండి dict()."
},
{
"l": 206,
"t": "Flatten nested list",
"i": "[[1,2],[3,4],[5]]",
"o": "[1, 2, 3, 4, 5]",
"s": "import ast\nm = ast.literal_eval(input())\nprint([x for row in m for x in row])",
"e": "literal_eval safe గా list parse చేస్తుంది; nested for outer→inner order.",
"s2": "import ast\nfrom itertools import chain\nprint(list(chain.from_iterable(ast.literal_eval(input()))))",
"e2": "chain.from_iterable nested loops ని దాచేస్తుంది."
},
{
"l": 206,
"t": "First n Fibonacci (generator)",
"i": "8",
"o": "0 1 1 2 3 5 8 13",
"s": "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\ng = fib()\nprint(*[next(g) for _ in range(int(input()))])",
"e": "Infinite generator; next() తో కావలసినన్ని మాత్రమే తీసుకున్నాం.",
"s2": "n = int(input())\nout = [0, 1][:n]\nwhile len(out) < n:\n    out.append(out[-1] + out[-2])\nprint(*out)",
"e2": "Generator లేకుండా list లో చివరి రెండు కూడి."
},
{
"l": 206,
"t": "Group words by length",
"i": "a bb cc d eee",
"o": "{1: ['a', 'd'], 2: ['bb', 'cc'], 3: ['eee']}",
"s": "from collections import defaultdict\nd = defaultdict(list)\nfor w in input().split():\n    d[len(w)].append(w)\nprint(dict(sorted(d.items())))",
"e": "defaultdict(list) తో key లేకపోయినా list auto create అవుతుంది.",
"s2": "from itertools import groupby\nws = sorted(input().split(), key=len)\nprint({k: list(g) for k, g in groupby(ws, key=len)})",
"e2": "Stable sort + groupby (original order ఉంటుంది)."
},
{
"l": 206,
"t": "Primes up to n",
"i": "30",
"o": "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]",
"s": "n = int(input())\nis_p = [True] * (n + 1)\nis_p[0:2] = [False] * 2\nfor i in range(2, int(n ** .5) + 1):\n    if is_p[i]:\n        for j in range(i * i, n + 1, i):\n            is_p[j] = False\nprint([i for i in range(n + 1) if is_p[i]])",
"e": "Sieve: ప్రతి prime multiples ని కొట్టేస్తాం. O(n log log n).",
"s2": "n = int(input())\nprint([x for x in range(2, n + 1) if all(x % d for d in range(2, int(x ** .5) + 1))])",
"e2": "ప్రతి number ని √x వరకు divide చేసి చూశాం: సులభం, నెమ్మది."
},
{
"l": 206,
"t": "Pascal's triangle row",
"i": "5",
"o": "[1, 5, 10, 10, 5, 1]",
"s": "n = int(input())\nrow = [1]\nfor _ in range(n):\n    row = [a + b for a, b in zip([0] + row, row + [0])]\nprint(row)",
"e": "ముందు row ని shift చేసి zip తో కూడాం.",
"s2": "from math import comb\nn = int(input())\nprint([comb(n, k) for k in range(n + 1)])",
"e2": "Row n లో k వ entry = C(n, k)."
},
{
"l": 206,
"t": "Spiral order",
"i": "[[1,2,3],[4,5,6],[7,8,9]]",
"o": "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
"s": "import ast\nm = ast.literal_eval(input())\nout = []\nt, b, l, r = 0, len(m) - 1, 0, len(m[0]) - 1\nwhile t <= b and l <= r:\n    out += m[t][l:r + 1]\n    t += 1\n    out += [m[i][r] for i in range(t, b + 1)]\n    r -= 1\n    if t <= b:\n        out += m[b][l:r + 1][::-1]\n        b -= 1\n    if l <= r:\n        out += [m[i][l] for i in range(b, t - 1, -1)]\n        l += 1\nprint(out)",
"e": "నాలుగు boundaries కుదిస్తూ చుట్టూ తిరిగాం.",
"s2": "import ast\nm = ast.literal_eval(input())\nout = []\nwhile m:\n    out += m.pop(0)\n    m = [list(r) for r in zip(*m)][::-1]\nprint(out)",
"e2": "మొదటి row తీసి, మిగిలిన matrix ని anticlockwise తిప్పాం."
},
{
"l": 206,
"t": "Collatz steps",
"i": "27",
"o": "111",
"s": "n = int(input())\nc = 0\nwhile n != 1:\n    n = n // 2 if n % 2 == 0 else 3 * n + 1\n    c += 1\nprint(c)",
"e": "1 చేరే వరకు while loop.",
"s2": "from functools import lru_cache\n@lru_cache(None)\ndef f(n):\n    return 0 if n == 1 else 1 + f(n // 2 if n % 2 == 0 else 3 * n + 1)\nprint(f(int(input())))",
"e2": "Recursion + cache: పునరావృత chains మళ్ళీ లెక్కించం."
},
{
"l": 206,
"t": "Maximum subarray sum",
"i": "-2 1 -3 4 -1 2 1 -5 4",
"o": "6",
"s": "a = list(map(int, input().split()))\ncur = best = a[0]\nfor x in a[1:]:\n    cur = max(x, cur + x)\n    best = max(best, cur)\nprint(best)",
"e": "Kadane: ప్రతి చోట కొనసాగించాలా కొత్తగా మొదలుపెట్టాలా. O(n).",
"s2": "from itertools import accumulate\na = list(map(int, input().split()))\np = [0] + list(accumulate(a))\nprint(max(p[j] - min(p[:j]) for j in range(1, len(p))))",
"e2": "Prefix sums: p[j] - (ముందు కనిష్ట prefix)."
},
{
"l": 207,
"t": "Longest palindromic substring",
"i": "babad",
"o": "bab",
"s": "s = input()\ndef ex(l, r):\n    while l >= 0 and r < len(s) and s[l] == s[r]:\n        l -= 1\n        r += 1\n    return s[l + 1:r]\nbest = ''\nfor i in range(len(s)):\n    for c in (ex(i, i), ex(i, i + 1)):\n        if len(c) > len(best):\n            best = c\nprint(best)",
"e": "ప్రతి center నుండి రెండు వైపులా విస్తరించాం (odd, even). O(n²) time, O(1) space.",
"s2": "s = input()\nbest = ''\nfor i in range(len(s)):\n    for j in range(i + 1, len(s) + 1):\n        t = s[i:j]\n        if t == t[::-1] and len(t) > len(best):\n            best = t\nprint(best)",
"e2": "అన్ని substrings check: O(n³). సులభం కానీ నెమ్మది; ఇది baseline."
},
{
"l": 207,
"t": "Longest substring without repeats",
"i": "abcabcbb",
"o": "3",
"s": "s = input()\nlast = {}\nl = best = 0\nfor r, c in enumerate(s):\n    if c in last and last[c] >= l:\n        l = last[c] + 1\n    last[c] = r\n    best = max(best, r - l + 1)\nprint(best)",
"e": "last index dict తో left pointer నేరుగా jump. O(n).",
"s2": "s = input()\nseen = set()\nl = best = 0\nfor r in range(len(s)):\n    while s[r] in seen:\n        seen.remove(s[l])\n        l += 1\n    seen.add(s[r])\n    best = max(best, r - l + 1)\nprint(best)",
"e2": "Set window: duplicate వస్తే left నుండి తొలగిస్తూ కుదిస్తాం. O(n)."
},
{
"l": 207,
"t": "Group anagrams",
"i": "eat tea tan ate nat bat",
"o": "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
"s": "d = {}\nfor w in input().split():\n    d.setdefault(''.join(sorted(w)), []).append(w)\nprint(list(d.values()))",
"e": "Sorted letters key గా group. O(n·k log k).",
"s2": "from collections import defaultdict\nd = defaultdict(list)\nfor w in input().split():\n    k = [0] * 26\n    for c in w:\n        k[ord(c) - 97] += 1\n    d[tuple(k)].append(w)\nprint(list(d.values()))",
"e2": "26-letter count tuple key (list hashable కాదు, tuple అవుతుంది). O(n·k)."
},
{
"l": 207,
"t": "Run-length encoding",
"i": "aaabccdddd",
"o": "a3b1c2d4",
"s": "s = input()\nout = ''\ni = 0\nwhile i < len(s):\n    j = i\n    while j < len(s) and s[j] == s[i]:\n        j += 1\n    out += s[i] + str(j - i)\n    i = j\nprint(out)",
"e": "Manual two-pointer: run చివరి వరకు j కదుపుతాం.",
"s2": "from itertools import groupby\nprint(''.join(k + str(len(list(g))) for k, g in groupby(input())))",
"e2": "groupby వరుస equal items ని group చేస్తుంది: ఒక్క line."
},
{
"l": 207,
"t": "Caesar cipher",
"i": "Hello, World!\n3",
"o": "Khoor, Zruog!",
"s": "t = input()\nk = int(input())\nr = ''\nfor c in t:\n    if c.isalpha():\n        b = 65 if c.isupper() else 97\n        r += chr((ord(c) - b + k) % 26 + b)\n    else:\n        r += c\nprint(r)",
"e": "ord → 0..25 → shift mod 26 → chr; letters కాని వాటిని వదిలేస్తాం.",
"s2": "import string\nt = input()\nk = int(input())\nlo, up = string.ascii_lowercase, string.ascii_uppercase\nprint(t.translate(str.maketrans(lo + up, lo[k:] + lo[:k] + up[k:] + up[:k])))",
"e2": "maketrans mapping table ఒకసారి తయారు చేసి translate: వేగంగా."
},
{
"l": 207,
"t": "Valid brackets",
"i": "{[()]}",
"o": "True",
"s": "s = input()\npair = {')': '(', ']': '[', '}': '{'}\nst = []\nok = True\nfor c in s:\n    if c in '([{':\n        st.append(c)\n    elif not st or st.pop() != pair[c]:\n        ok = False\n        break\nprint(ok and not st)",
"e": "Stack: close bracket కి top open సరిపోవాలి. O(n).",
"s2": "s = input()\nwhile '()' in s or '[]' in s or '{}' in s:\n    s = s.replace('()', '').replace('[]', '').replace('{}', '')\nprint(s == '')",
"e2": "సరిపోయే pairs ని పదే పదే తొలగించాం. చిన్నది కానీ O(n²)."
},
{
"l": 207,
"t": "Word break",
"i": "applepenapple\napple pen",
"o": "True",
"s": "s = input()\nw = set(input().split())\ndp = [True] + [False] * len(s)\nfor i in range(1, len(s) + 1):\n    dp[i] = any(dp[j] and s[j:i] in w for j in range(i))\nprint(dp[-1])",
"e": "dp[i] = prefix i ని words తో తయారు చేయవచ్చా. Bottom-up.",
"s2": "from functools import lru_cache\ns = input()\nw = set(input().split())\n@lru_cache(None)\ndef f(i):\n    return i == len(s) or any(s.startswith(x, i) and f(i + len(x)) for x in w)\nprint(f(0))",
"e2": "Top-down recursion + memo: అవసరమైన states మాత్రమే compute."
},
{
"l": 207,
"t": "Minimum window substring",
"i": "ADOBECODEBANC\nABC",
"o": "BANC",
"s": "from collections import Counter\ns = input()\nt = input()\nneed = Counter(t)\nmiss = len(t)\nl = 0\nbest = ''\nfor r, c in enumerate(s):\n    if need[c] > 0:\n        miss -= 1\n    need[c] -= 1\n    while miss == 0:\n        if not best or r - l + 1 < len(best):\n            best = s[l:r + 1]\n        need[s[l]] += 1\n        if need[s[l]] > 0:\n            miss += 1\n        l += 1\nprint(best)",
"e": "విస్తరించి, అన్నీ దొరికాక కుదించాం. O(n).",
"s2": "from collections import Counter\ns = input()\nt = input()\nneed = Counter(t)\ndef f():\n    for L in range(len(t), len(s) + 1):\n        for i in range(len(s) - L + 1):\n            if not need - Counter(s[i:i + L]):\n                return s[i:i + L]\nprint(f())",
"e2": "Length పెంచుతూ ప్రతి window check: మొదటిది shortest. O(n²·k)."
},
{
"l": 207,
"t": "Decode nested string",
"i": "3[a2[c]]",
"o": "accaccacc",
"s": "s = input()\nst = []\nnum = 0\ncur = ''\nfor c in s:\n    if c.isdigit():\n        num = num * 10 + int(c)\n    elif c == '[':\n        st.append((cur, num))\n        cur, num = '', 0\n    elif c == ']':\n        p, n = st.pop()\n        cur = p + cur * n\n    else:\n        cur += c\nprint(cur)",
"e": "Stack లో (ముందు string, repeat count) దాచాం.",
"s2": "import re\ns = input()\nwhile '[' in s:\n    s = re.sub(r'(\\d+)\\[([a-z]*)\\]', lambda m: m.group(2) * int(m.group(1)), s)\nprint(s)",
"e2": "లోపలి bracket నుండి regex తో expand చేస్తూ బయటకు వచ్చాం."
},
{
"l": 207,
"t": "Longest common subsequence",
"i": "abcde\nace",
"o": "3",
"s": "a = input()\nb = input()\ndp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]\nfor i in range(len(a)):\n    for j in range(len(b)):\n        dp[i + 1][j + 1] = dp[i][j] + 1 if a[i] == b[j] else max(dp[i][j + 1], dp[i + 1][j])\nprint(dp[-1][-1])",
"e": "2D table: match అయితే diagonal+1, లేకపోతే max. O(nm).",
"s2": "from functools import lru_cache\na = input()\nb = input()\n@lru_cache(None)\ndef f(i, j):\n    if i == len(a) or j == len(b):\n        return 0\n    if a[i] == b[j]:\n        return 1 + f(i + 1, j + 1)\n    return max(f(i + 1, j), f(i, j + 1))\nprint(f(0, 0))",
"e2": "Recursion + memo: అదే logic, top-down."
},
{
"l": 208,
"t": "Two sum (indices)",
"i": "2 7 11 15\n9",
"o": "0 1",
"s": "a = list(map(int, input().split()))\nt = int(input())\nseen = {}\nfor i, x in enumerate(a):\n    if t - x in seen:\n        print(seen[t - x], i)\n        break\n    seen[x] = i",
"e": "Hash map లో ఇప్పటి వరకు చూసినవి; complement దొరికితే answer. O(n).",
"s2": "a = list(map(int, input().split()))\nt = int(input())\nprint(*next((i, j) for i in range(len(a)) for j in range(i + 1, len(a)) if a[i] + a[j] == t))",
"e2": "అన్ని pairs check: O(n²)."
},
{
"l": 208,
"t": "Merge intervals",
"i": "[[1,3],[2,6],[8,10],[15,18]]",
"o": "[[1, 6], [8, 10], [15, 18]]",
"s": "import ast\niv = sorted(ast.literal_eval(input()))\nout = []\nfor s, e in iv:\n    if out and s <= out[-1][1]:\n        out[-1][1] = max(out[-1][1], e)\n    else:\n        out.append([s, e])\nprint(out)",
"e": "Start తో sort; overlap అయితే end పొడిగించాం.",
"s2": "import ast\nfrom functools import reduce\niv = sorted(ast.literal_eval(input()))\ndef f(acc, x):\n    if acc and x[0] <= acc[-1][1]:\n        acc[-1][1] = max(acc[-1][1], x[1])\n    else:\n        acc.append(list(x))\n    return acc\nprint(reduce(f, iv, []))",
"e2": "అదే logic reduce తో functional style."
},
{
"l": 208,
"t": "Product except self",
"i": "1 2 3 4",
"o": "[24, 12, 8, 6]",
"s": "a = list(map(int, input().split()))\nn = len(a)\nres = [1] * n\np = 1\nfor i in range(n):\n    res[i] = p\n    p *= a[i]\np = 1\nfor i in range(n - 1, -1, -1):\n    res[i] *= p\n    p *= a[i]\nprint(res)",
"e": "Left products తర్వాత right products గుణించాం. O(n), division లేదు.",
"s2": "from math import prod\na = list(map(int, input().split()))\nprint([prod(a[:i] + a[i + 1:]) for i in range(len(a))])",
"e2": "ప్రతి index కి మిగతా అన్నీ గుణించాం: O(n²)."
},
{
"l": 208,
"t": "Top K frequent",
"i": "1 1 1 2 2 3\n2",
"o": "[1, 2]",
"s": "from collections import Counter\na = input().split()\nk = int(input())\nprint([int(x) for x, _ in Counter(a).most_common(k)])",
"e": "Counter.most_common(k) నేరుగా.",
"s2": "import heapq\nfrom collections import Counter\na = input().split()\nk = int(input())\nc = Counter(a)\nprint([int(x) for x in heapq.nlargest(k, c, key=c.get)])",
"e2": "heap తో top k: O(n log k)."
},
{
"l": 208,
"t": "Longest consecutive sequence",
"i": "100 4 200 1 3 2",
"o": "4",
"s": "s = set(map(int, input().split()))\nbest = 0\nfor x in s:\n    if x - 1 not in s:\n        y = x\n        while y + 1 in s:\n            y += 1\n        best = max(best, y - x + 1)\nprint(best)",
"e": "Sequence ప్రారంభం (x-1 లేనిది) నుండి మాత్రమే count: O(n).",
"s2": "a = sorted(set(map(int, input().split())))\nbest = cur = 1\nfor i in range(1, len(a)):\n    cur = cur + 1 if a[i] == a[i - 1] + 1 else 1\n    best = max(best, cur)\nprint(best)",
"e2": "Sort చేసి scan: O(n log n), సులభం."
},
{
"l": 208,
"t": "Rotate matrix 90° clockwise",
"i": "[[1,2,3],[4,5,6],[7,8,9]]",
"o": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
"s": "import ast\nm = ast.literal_eval(input())\nprint([list(r) for r in zip(*m[::-1])])",
"e": "Rows reverse చేసి zip(*) తో transpose.",
"s2": "import ast\nm = ast.literal_eval(input())\nn = len(m)\nfor i in range(n):\n    for j in range(i + 1, n):\n        m[i][j], m[j][i] = m[j][i], m[i][j]\nfor r in m:\n    r.reverse()\nprint(m)",
"e2": "In-place: transpose చేసి ప్రతి row reverse."
},
{
"l": 208,
"t": "Sliding window maximum",
"i": "1 3 -1 -3 5 3 6 7\n3",
"o": "[3, 3, 5, 5, 6, 7]",
"s": "from collections import deque\na = list(map(int, input().split()))\nk = int(input())\ndq = deque()\nout = []\nfor i, x in enumerate(a):\n    while dq and a[dq[-1]] <= x:\n        dq.pop()\n    dq.append(i)\n    if dq[0] <= i - k:\n        dq.popleft()\n    if i >= k - 1:\n        out.append(a[dq[0]])\nprint(out)",
"e": "Decreasing deque: front లో ఎప్పుడూ max index. O(n).",
"s2": "a = list(map(int, input().split()))\nk = int(input())\nprint([max(a[i:i + k]) for i in range(len(a) - k + 1)])",
"e2": "ప్రతి window లో max(): O(n·k)."
},
{
"l": 208,
"t": "Count subarrays with sum K",
"i": "3 4 7 2 -3 1 4 2\n7",
"o": "4",
"s": "from collections import defaultdict\na = list(map(int, input().split()))\nk = int(input())\nc = defaultdict(int)\nc[0] = 1\ns = res = 0\nfor x in a:\n    s += x\n    res += c[s - k]\n    c[s] += 1\nprint(res)",
"e": "Prefix sum: s-k ముందు ఎన్నిసార్లు వచ్చిందో count. O(n).",
"s2": "a = list(map(int, input().split()))\nk = int(input())\nprint(sum(sum(a[i:j]) == k for i in range(len(a)) for j in range(i + 1, len(a) + 1)))",
"e2": "అన్ని subarrays: O(n³) (negatives ఉన్నప్పుడు window పనిచేయదు)."
},
{
"l": 208,
"t": "Kth largest element",
"i": "3 2 1 5 6 4\n2",
"o": "5",
"s": "import heapq\na = list(map(int, input().split()))\nk = int(input())\nh = a[:k]\nheapq.heapify(h)\nfor x in a[k:]:\n    if x > h[0]:\n        heapq.heapreplace(h, x)\nprint(h[0])",
"e": "Size-k min-heap: root = kth largest. O(n log k).",
"s2": "a = sorted(map(int, input().split()), reverse=True)\nprint(a[int(input()) - 1])",
"e2": "Sort చేసి index: O(n log n), సులభం."
},
{
"l": 208,
"t": "Search in rotated sorted array",
"i": "4 5 6 7 0 1 2\n0",
"o": "4",
"s": "a = list(map(int, input().split()))\nt = int(input())\nlo, hi = 0, len(a) - 1\nres = -1\nwhile lo <= hi:\n    m = (lo + hi) // 2\n    if a[m] == t:\n        res = m\n        break\n    if a[lo] <= a[m]:\n        if a[lo] <= t < a[m]:\n            hi = m - 1\n        else:\n            lo = m + 1\n    else:\n        if a[m] < t <= a[hi]:\n            lo = m + 1\n        else:\n            hi = m - 1\nprint(res)",
"e": "ఏ half sorted గా ఉందో చూసి binary search: O(log n).",
"s2": "a = list(map(int, input().split()))\nt = int(input())\nprint(a.index(t) if t in a else -1)",
"e2": "Linear search: O(n). సరైనదే కానీ rotated structure వాడలేదు."
},
{
"l": 209,
"t": "First non-repeating character",
"i": "swiss",
"o": "w",
"s": "from collections import Counter\ns = input()\nc = Counter(s)\nprint(next((ch for ch in s if c[ch] == 1), 'None'))",
"e": "Counter ఒకసారి, తర్వాత order లో scan. O(n).",
"s2": "s = input()\nprint(next((ch for ch in s if s.count(ch) == 1), 'None'))",
"e2": "ప్రతి char కి count(): O(n²)."
},
{
"l": 209,
"t": "Isomorphic strings",
"i": "egg add",
"o": "True",
"s": "a, b = input().split()\nm1, m2 = {}, {}\nok = len(a) == len(b)\nfor x, y in zip(a, b):\n    if m1.setdefault(x, y) != y or m2.setdefault(y, x) != x:\n        ok = False\nprint(ok)",
"e": "రెండు వైపులా one-to-one mapping.",
"s2": "a, b = input().split()\nf = lambda s: [s.index(c) for c in s]\nprint(f(a) == f(b))",
"e2": "ప్రతి char మొదటి index pattern సమానమా."
},
{
"l": 209,
"t": "Longest equal 0s and 1s",
"i": "0 1 0 0 1 1 0",
"o": "6",
"s": "a = list(map(int, input().split()))\nfirst = {0: -1}\ns = best = 0\nfor i, x in enumerate(a):\n    s += 1 if x else -1\n    if s in first:\n        best = max(best, i - first[s])\n    else:\n        first[s] = i\nprint(best)",
"e": "0 → -1 గా prefix sum; అదే sum మళ్ళీ వస్తే మధ్యది balanced. O(n).",
"s2": "a = list(map(int, input().split()))\nbest = 0\nfor i in range(len(a)):\n    s = 0\n    for j in range(i, len(a)):\n        s += 1 if a[j] else -1\n        if s == 0:\n            best = max(best, j - i + 1)\nprint(best)",
"e2": "అన్ని subarrays: O(n²)."
},
{
"l": 209,
"t": "Four-sum count",
"i": "1 2\n-2 -1\n-1 2\n0 2",
"o": "2",
"s": "from collections import Counter\nA, B, C, D = [list(map(int, input().split())) for _ in range(4)]\nab = Counter(a + b for a in A for b in B)\nprint(sum(ab[-(c + d)] for c in C for d in D))",
"e": "A+B sums hash చేసి C+D కి complement వెతికాం: O(n²).",
"s2": "from itertools import product\nA, B, C, D = [list(map(int, input().split())) for _ in range(4)]\nprint(sum(a + b + c + d == 0 for a, b, c, d in product(A, B, C, D)))",
"e2": "నాలుగు lists product: O(n⁴)."
},
{
"l": 209,
"t": "Intersection with counts",
"i": "1 2 2 1\n2 2",
"o": "[2, 2]",
"s": "from collections import Counter\na = Counter(input().split())\nb = Counter(input().split())\nprint([int(x) for x in (a & b).elements()])",
"e": "Counter & = ప్రతి element కి min count.",
"s2": "a = input().split()\nb = input().split()\ncnt = {}\nfor x in a:\n    cnt[x] = cnt.get(x, 0) + 1\nout = []\nfor x in b:\n    if cnt.get(x, 0) > 0:\n        out.append(int(x))\n        cnt[x] -= 1\nprint(out)",
"e2": "Dict లో counts తగ్గిస్తూ match."
},
{
"l": 209,
"t": "LRU cache",
"i": "2\n5\nput 1 1\nput 2 2\nget 1\nput 3 3\nget 2",
"o": "1\n-1",
"s": "from collections import OrderedDict\ncap = int(input())\nn = int(input())\nd = OrderedDict()\nfor _ in range(n):\n    op = input().split()\n    if op[0] == 'put':\n        k, v = int(op[1]), int(op[2])\n        d[k] = v\n        d.move_to_end(k)\n        if len(d) > cap:\n            d.popitem(last=False)\n    else:\n        k = int(op[1])\n        if k in d:\n            d.move_to_end(k)\n            print(d[k])\n        else:\n            print(-1)",
"e": "OrderedDict: వాడిన key చివరికి, capacity దాటితే మొదటిది తొలగింపు.",
"s2": "cap = int(input())\nn = int(input())\nd = {}\nfor _ in range(n):\n    op = input().split()\n    k = int(op[1])\n    if op[0] == 'put':\n        d.pop(k, None)\n        d[k] = int(op[2])\n        if len(d) > cap:\n            del d[next(iter(d))]\n    elif k in d:\n        d[k] = d.pop(k)\n        print(d[k])\n    else:\n        print(-1)",
"e2": "సాధారణ dict లో pop + re-insert తో recency; మొదటి key = least recent."
},
{
"l": 209,
"t": "Longest substring with K distinct",
"i": "eceba\n2",
"o": "3",
"s": "s = input()\nk = int(input())\ncnt = {}\nl = best = 0\nfor r, c in enumerate(s):\n    cnt[c] = cnt.get(c, 0) + 1\n    while len(cnt) > k:\n        cnt[s[l]] -= 1\n        if cnt[s[l]] == 0:\n            del cnt[s[l]]\n        l += 1\n    best = max(best, r - l + 1)\nprint(best)",
"e": "Sliding window + count dict: distinct > k అయితే ఎడమ కుదించాం. O(n).",
"s2": "s = input()\nk = int(input())\nprint(max(j - i for i in range(len(s)) for j in range(i + 1, len(s) + 1) if len(set(s[i:j])) <= k))",
"e2": "అన్ని substrings, set తో distinct: O(n³)."
},
{
"l": 209,
"t": "Duplicate within distance k",
"i": "1 2 3 1\n3",
"o": "True",
"s": "a = input().split()\nk = int(input())\nlast = {}\nans = False\nfor i, x in enumerate(a):\n    if x in last and i - last[x] <= k:\n        ans = True\n        break\n    last[x] = i\nprint(ans)",
"e": "చివరి index dict; దూరం ≤ k చూశాం.",
"s2": "a = input().split()\nk = int(input())\nw = set()\nans = False\nfor i, x in enumerate(a):\n    if x in w:\n        ans = True\n        break\n    w.add(x)\n    if len(w) > k:\n        w.remove(a[i - k])\nprint(ans)",
"e2": "Size-k window set: పాతది తొలగిస్తూ."
},
{
"l": 209,
"t": "Group by digit sum",
"i": "12 21 13 31 4",
"o": "{3: [12, 21], 4: [13, 31, 4]}",
"s": "from collections import defaultdict\nd = defaultdict(list)\nfor w in input().split():\n    d[sum(map(int, w))].append(int(w))\nprint(dict(sorted(d.items())))",
"e": "Digit sum key గా defaultdict grouping.",
"s2": "from itertools import groupby\nds = lambda w: sum(map(int, w))\nws = sorted(input().split(), key=ds)\nprint({k: [int(w) for w in g] for k, g in groupby(ws, key=ds)})",
"e2": "Key తో sort (stable) చేసి groupby."
},
{
"l": 209,
"t": "Longest harmonious subsequence",
"i": "1 3 2 2 5 2 3 7",
"o": "5",
"s": "from collections import Counter\nc = Counter(map(int, input().split()))\nprint(max((v + c[k + 1] for k, v in c.items() if k + 1 in c), default=0))",
"e": "x మరియు x+1 counts కలిపాం: O(n).",
"s2": "a = list(map(int, input().split()))\nprint(max((a.count(x) + a.count(x + 1) for x in set(a) if x + 1 in a), default=0))",
"e2": "count() తో అదే logic: O(n²)."
},
{
"l": 210,
"t": "Counter closure",
"i": "3",
"o": "1\n2\n3",
"s": "def make():\n    c = 0\n    def inc():\n        nonlocal c\n        c += 1\n        return c\n    return inc\nf = make()\nfor _ in range(int(input())):\n    print(f())",
"e": "inc() outer variable c ని nonlocal తో మారుస్తుంది; state గుర్తుంటుంది.",
"s2": "class Counter:\n    def __init__(self):\n        self.c = 0\n    def __call__(self):\n        self.c += 1\n        return self.c\nf = Counter()\nfor _ in range(int(input())):\n    print(f())",
"e2": "Callable class: state attribute లో."
},
{
"l": 210,
"t": "Multiplier factory",
"i": "3 5",
"o": "15",
"s": "def mul(n):\n    return lambda x: x * n\nn, x = map(int, input().split())\nprint(mul(n)(x))",
"e": "mul(n) ఒక function return చేస్తుంది, అది n ని గుర్తుంచుకుంటుంది.",
"s2": "from functools import partial\nfrom operator import mul\nn, x = map(int, input().split())\nprint(partial(mul, n)(x))",
"e2": "functools.partial మొదటి argument fix చేస్తుంది."
},
{
"l": 210,
"t": "Logging decorator",
"i": "2 3",
"o": "calling add\n5",
"s": "def log(fn):\n    def w(*a):\n        print('calling', fn.__name__)\n        return fn(*a)\n    return w\n@log\ndef add(a, b):\n    return a + b\nx, y = map(int, input().split())\nprint(add(x, y))",
"e": "@log అంటే add = log(add); wrapper ముందు print చేసి original call చేస్తుంది.",
"s2": "class Log:\n    def __init__(self, fn):\n        self.fn = fn\n    def __call__(self, *a):\n        print('calling', self.fn.__name__)\n        return self.fn(*a)\n@Log\ndef add(a, b):\n    return a + b\nx, y = map(int, input().split())\nprint(add(x, y))",
"e2": "Class-based decorator: __call__ wrapper."
},
{
"l": 210,
"t": "Memoized Fibonacci",
"i": "30",
"o": "832040",
"s": "def memo(fn):\n    c = {}\n    def w(n):\n        if n not in c:\n            c[n] = fn(n)\n        return c[n]\n    return w\n@memo\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\nprint(fib(int(input())))",
"e": "Cache dict తో repeated calls తప్పించాం: exponential time → linear.",
"s2": "from functools import lru_cache\n@lru_cache(None)\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\nprint(fib(int(input())))",
"e2": "Built-in lru_cache: మన memo అవసరం లేదు."
},
{
"l": 210,
"t": "Repeat decorator with argument",
"i": "3",
"o": "Hi\nHi\nHi",
"s": "n = int(input())\ndef repeat(k):\n    def deco(fn):\n        def w():\n            for _ in range(k):\n                fn()\n        return w\n    return deco\n@repeat(n)\ndef hi():\n    print('Hi')\nhi()",
"e": "Arguments ఉన్న decorator = 3 levels: repeat(k) → deco(fn) → w().",
"s2": "class Repeat:\n    def __init__(self, k):\n        self.k = k\n    def __call__(self, fn):\n        def w():\n            for _ in range(self.k):\n                fn()\n        return w\nn = int(input())\n@Repeat(n)\ndef hi():\n    print('Hi')\nhi()",
"e2": "Argument __init__ లో, function __call__ లో."
},
{
"l": 210,
"t": "Compose functions",
"i": "3",
"o": "8",
"s": "def compose(*fs):\n    def run(x):\n        for f in reversed(fs):\n            x = f(x)\n        return x\n    return run\nadd1 = lambda x: x + 1\ndbl = lambda x: x * 2\nprint(compose(dbl, add1)(int(input())))",
"e": "compose(g, f)(x) = g(f(x)); functions ని values లా వాడాం.",
"s2": "from functools import reduce\nadd1 = lambda x: x + 1\ndbl = lambda x: x * 2\nprint(reduce(lambda x, f: f(x), [add1, dbl], int(input())))",
"e2": "reduce తో functions ని వరుసగా apply."
},
{
"l": 210,
"t": "Tower of Hanoi moves",
"i": "5",
"o": "31",
"s": "def h(n):\n    return 0 if n == 0 else 2 * h(n - 1) + 1\nprint(h(int(input())))",
"e": "n-1 discs రెండుసార్లు + 1 move.",
"s2": "print(2 ** int(input()) - 1)",
"e2": "Recurrence solve చేస్తే 2ⁿ - 1."
},
{
"l": 210,
"t": "All permutations",
"i": "abc",
"o": "['abc', 'acb', 'bac', 'bca', 'cab', 'cba']",
"s": "def perm(s):\n    if len(s) <= 1:\n        return [s]\n    out = []\n    for i, c in enumerate(s):\n        for p in perm(s[:i] + s[i + 1:]):\n            out.append(c + p)\n    return out\nprint(perm(input()))",
"e": "ఒక character ఎంచుకొని మిగిలిన వాటి permutations కి recursion.",
"s2": "from itertools import permutations\nprint([''.join(p) for p in permutations(input())])",
"e2": "Library function: ఒక్క line."
},
{
"l": 210,
"t": "All subsets",
"i": "1 2 3",
"o": "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
"s": "a = list(map(int, input().split()))\nres = [[]]\nfor x in a:\n    res += [r + [x] for r in res]\nprint(res)",
"e": "ప్రతి element కి ఉన్న subsets రెట్టింపు.",
"s2": "a = list(map(int, input().split()))\nn = len(a)\nprint([[a[i] for i in range(n) if m >> i & 1] for m in range(1 << n)])",
"e2": "Bitmask: ప్రతి number లో set bits = ఎంచుకున్న elements."
},
{
"l": 210,
"t": "Minimum coins",
"i": "1 2 5\n11",
"o": "3",
"s": "c = list(map(int, input().split()))\nt = int(input())\nINF = float('inf')\ndp = [0] + [INF] * t\nfor a in range(1, t + 1):\n    for x in c:\n        if x <= a:\n            dp[a] = min(dp[a], dp[a - x] + 1)\nprint(dp[t] if dp[t] != INF else -1)",
"e": "dp[a] = a కి కనిష్ట coins. Bottom-up.",
"s2": "from functools import lru_cache\nc = list(map(int, input().split()))\nt = int(input())\nINF = float('inf')\n@lru_cache(None)\ndef f(a):\n    if a == 0:\n        return 0\n    return min((f(a - x) + 1 for x in c if x <= a), default=INF)\nprint(f(t) if f(t) != INF else -1)",
"e2": "అదే idea top-down recursion + memo."
},
{
"l": 211,
"t": "Min stack",
"i": "7\npush 3\npush 1\npush 2\nmin\npop\npop\nmin",
"o": "1\n3",
"s": "class MinStack:\n    def __init__(self):\n        self.s = []\n        self.m = []\n    def push(self, x):\n        self.s.append(x)\n        self.m.append(min(x, self.m[-1]) if self.m else x)\n    def pop(self):\n        self.m.pop()\n        return self.s.pop()\n    def min(self):\n        return self.m[-1]\nst = MinStack()\nfor _ in range(int(input())):\n    op = input().split()\n    if op[0] == 'push':\n        st.push(int(op[1]))\n    elif op[0] == 'pop':\n        st.pop()\n    else:\n        print(st.min())",
"e": "రెండో stack ప్రతి స్థాయిలో min ని ఉంచుతుంది: min() O(1).",
"s2": "class MinStack:\n    def __init__(self):\n        self.s = []\n    def push(self, x):\n        self.s.append((x, min(x, self.s[-1][1]) if self.s else x))\n    def pop(self):\n        return self.s.pop()[0]\n    def min(self):\n        return self.s[-1][1]\nst = MinStack()\nfor _ in range(int(input())):\n    op = input().split()\n    if op[0] == 'push':\n        st.push(int(op[1]))\n    elif op[0] == 'pop':\n        st.pop()\n    else:\n        print(st.min())",
"e2": "ఒకే stack లో (value, ఇప్పటి వరకు min) tuples."
},
{
"l": 211,
"t": "Queue using two stacks",
"i": "6\nenq 1\nenq 2\ndeq\nenq 3\ndeq\ndeq",
"o": "1\n2\n3",
"s": "class Q:\n    def __init__(self):\n        self.a = []\n        self.b = []\n    def enq(self, x):\n        self.a.append(x)\n    def deq(self):\n        if not self.b:\n            while self.a:\n                self.b.append(self.a.pop())\n        return self.b.pop()\nq = Q()\nfor _ in range(int(input())):\n    op = input().split()\n    if op[0] == 'enq':\n        q.enq(int(op[1]))\n    else:\n        print(q.deq())",
"e": "b ఖాళీ అయినప్పుడే a ని తిరగేసి మార్చడం: amortized O(1).",
"s2": "from collections import deque\nclass Q:\n    def __init__(self):\n        self.d = deque()\n    def enq(self, x):\n        self.d.append(x)\n    def deq(self):\n        return self.d.popleft()\nq = Q()\nfor _ in range(int(input())):\n    op = input().split()\n    if op[0] == 'enq':\n        q.enq(int(op[1]))\n    else:\n        print(q.deq())",
"e2": "deque తో నేరుగా O(1) both ends (two-stack idea కి ప్రత్యామ్నాయం)."
},
{
"l": 211,
"t": "Vector operator overloading",
"i": "1 2\n3 4",
"o": "(4, 6) 5.0",
"s": "class Vec:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __add__(self, o):\n        return Vec(self.x + o.x, self.y + o.y)\n    def __abs__(self):\n        return (self.x ** 2 + self.y ** 2) ** .5\n    def __str__(self):\n        return f'({self.x}, {self.y})'\na = Vec(*map(int, input().split()))\nb = Vec(*map(int, input().split()))\nprint(a + b, abs(b))",
"e": "+ కి __add__, abs() కి __abs__, print కి __str__.",
"s2": "from dataclasses import dataclass\n@dataclass\nclass Vec:\n    x: int\n    y: int\n    def __add__(self, o):\n        return Vec(self.x + o.x, self.y + o.y)\n    def __abs__(self):\n        return (self.x ** 2 + self.y ** 2) ** .5\n    def __str__(self):\n        return f'({self.x}, {self.y})'\na = Vec(*map(int, input().split()))\nb = Vec(*map(int, input().split()))\nprint(a + b, abs(b))",
"e2": "@dataclass __init__ ని auto తయారు చేస్తుంది."
},
{
"l": 211,
"t": "Compound interest (inheritance vs composition)",
"i": "1000 5\n2",
"o": "1102.5",
"s": "class Account:\n    def __init__(self, b):\n        self.b = b\nclass Savings(Account):\n    def __init__(self, b, r):\n        super().__init__(b)\n        self.r = r\n    def grow(self, y):\n        for _ in range(y):\n            self.b *= 1 + self.r / 100\n        return round(self.b, 2)\nb, r = map(int, input().split())\ny = int(input())\nprint(Savings(b, r).grow(y))",
"e": "Savings is-an Account (inheritance); ప్రతి సంవత్సరం interest.",
"s2": "class Account:\n    def __init__(self, b):\n        self.b = b\nclass Savings:\n    def __init__(self, acc, r):\n        self.acc = acc\n        self.r = r\n    def grow(self, y):\n        return round(self.acc.b * (1 + self.r / 100) ** y, 2)\nb, r = map(int, input().split())\ny = int(input())\nprint(Savings(Account(b), r).grow(y))",
"e2": "Savings has-an Account (composition); formula P(1+r)^y."
},
{
"l": 211,
"t": "Shapes polymorphism",
"i": "2\ncircle 1\nrect 2 3",
"o": "9.14",
"s": "from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14159 * self.r ** 2\nclass Rect(Shape):\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n    def area(self):\n        return self.a * self.b\nmk = {'circle': Circle, 'rect': Rect}\ntotal = 0\nfor _ in range(int(input())):\n    t, *v = input().split()\n    total += mk[t](*map(float, v)).area()\nprint(round(total, 2))",
"e": "Abstract base class: ప్రతి shape area() implement చేయాలి.",
"s2": "f = {'circle': lambda r: 3.14159 * r * r, 'rect': lambda a, b: a * b}\ntotal = 0\nfor _ in range(int(input())):\n    t, *v = input().split()\n    total += f[t](*map(float, v))\nprint(round(total, 2))",
"e2": "Class లు లేకుండా dict of functions dispatch."
},
{
"l": 211,
"t": "Countdown iterator",
"i": "5",
"o": "5 4 3 2 1",
"s": "class Down:\n    def __init__(self, n):\n        self.n = n\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.n == 0:\n            raise StopIteration\n        v = self.n\n        self.n -= 1\n        return v\nprint(*Down(int(input())))",
"e": "Iterator protocol: __iter__ మరియు __next__, చివరికి StopIteration.",
"s2": "def down(n):\n    while n:\n        yield n\n        n -= 1\nprint(*down(int(input())))",
"e2": "Generator function అదే పని ఎక్కువ సులభంగా."
},
{
"l": 211,
"t": "2x2 matrix multiply (__mul__)",
"i": "1 2 3 4\n5 6 7 8",
"o": "[[19, 22], [43, 50]]",
"s": "class M:\n    def __init__(self, v):\n        self.m = [v[:2], v[2:]]\n    def __mul__(self, o):\n        r = [[0, 0], [0, 0]]\n        for i in range(2):\n            for j in range(2):\n                for k in range(2):\n                    r[i][j] += self.m[i][k] * o.m[k][j]\n        x = M([0] * 4)\n        x.m = r\n        return x\na = M(list(map(int, input().split())))\nb = M(list(map(int, input().split())))\nprint((a * b).m)",
"e": "మూడు nested loops తో row×column.",
"s2": "class M:\n    def __init__(self, v):\n        self.m = [v[:2], v[2:]]\n    def __mul__(self, o):\n        x = M([0] * 4)\n        x.m = [[sum(a * b for a, b in zip(row, col)) for col in zip(*o.m)] for row in self.m]\n        return x\na = M(list(map(int, input().split())))\nb = M(list(map(int, input().split())))\nprint((a * b).m)",
"e2": "zip(*o.m) columns ఇస్తుంది; comprehension తో."
},
{
"l": 211,
"t": "Inventory system",
"i": "5\nadd apple 3\nadd pear 2\nremove apple 1\nadd apple 2\nreport",
"o": "{'apple': 4, 'pear': 2}",
"s": "class Inv:\n    def __init__(self):\n        self.d = {}\n    def add(self, n, q):\n        self.d[n] = self.d.get(n, 0) + q\n    def remove(self, n, q):\n        self.d[n] = max(0, self.d.get(n, 0) - q)\ninv = Inv()\nfor _ in range(int(input())):\n    op = input().split()\n    if op[0] == 'add':\n        inv.add(op[1], int(op[2]))\n    elif op[0] == 'remove':\n        inv.remove(op[1], int(op[2]))\n    else:\n        print(dict(inv.d))",
"e": "Dict state ఉన్న class; stock 0 కంటే తక్కువ కాదు.",
"s2": "from collections import Counter\nclass Inv:\n    def __init__(self):\n        self.d = Counter()\n    def add(self, n, q):\n        self.d[n] += q\n    def remove(self, n, q):\n        self.d[n] = max(0, self.d[n] - q)\ninv = Inv()\nfor _ in range(int(input())):\n    op = input().split()\n    if op[0] == 'add':\n        inv.add(op[1], int(op[2]))\n    elif op[0] == 'remove':\n        inv.remove(op[1], int(op[2]))\n    else:\n        print(dict(inv.d))",
"e2": "Counter missing key కి 0 default ఇస్తుంది."
},
{
"l": 211,
"t": "Reverse a linked list",
"i": "1 2 3 4",
"o": "4 3 2 1",
"s": "class Node:\n    def __init__(self, v):\n        self.v = v\n        self.next = None\nvals = list(map(int, input().split()))\nhead = None\nfor v in reversed(vals):\n    n = Node(v)\n    n.next = head\n    head = n\nprev = None\nwhile head:\n    nxt = head.next\n    head.next = prev\n    prev = head\n    head = nxt\nout = []\nwhile prev:\n    out.append(prev.v)\n    prev = prev.next\nprint(*out)",
"e": "Iterative: ప్రతి node pointer ని వెనక్కి తిప్పాం. O(1) space.",
"s2": "class Node:\n    def __init__(self, v):\n        self.v = v\n        self.next = None\ndef rev(h, p=None):\n    if not h:\n        return p\n    n = h.next\n    h.next = p\n    return rev(n, h)\nvals = list(map(int, input().split()))\nhead = None\nfor v in reversed(vals):\n    n = Node(v)\n    n.next = head\n    head = n\nh = rev(head)\nout = []\nwhile h:\n    out.append(h.v)\n    h = h.next\nprint(*out)",
"e2": "Recursive: అదే pointer మార్పు, call stack O(n)."
},
{
"l": 211,
"t": "Polynomial addition",
"i": "1 2 3\n4 5",
"o": "[5, 7, 3]",
"s": "from itertools import zip_longest\nclass Poly:\n    def __init__(self, c):\n        self.c = c\n    def __add__(self, o):\n        return Poly([a + b for a, b in zip_longest(self.c, o.c, fillvalue=0)])\na = Poly(list(map(int, input().split())))\nb = Poly(list(map(int, input().split())))\nprint((a + b).c)",
"e": "zip_longest తో పొడవు తేడా handle.",
"s2": "class Poly:\n    def __init__(self, c):\n        self.c = c\n    def __add__(self, o):\n        r = [0] * max(len(self.c), len(o.c))\n        for i, v in enumerate(self.c):\n            r[i] += v\n        for i, v in enumerate(o.c):\n            r[i] += v\n        return Poly(r)\na = Poly(list(map(int, input().split())))\nb = Poly(list(map(int, input().split())))\nprint((a + b).c)",
"e2": "పొడవైనదాని size లో array చేసి రెండూ add."
},
{
"l": 212,
"t": "Count valid and invalid tokens",
"i": "10 x 20 3.5 5",
"o": "35 2",
"s": "total = bad = 0\nfor t in input().split():\n    try:\n        total += int(t)\n    except ValueError:\n        bad += 1\nprint(total, bad)",
"e": "int('3.5') కూడా ValueError.",
"s2": "total = bad = 0\nfor t in input().split():\n    if t.lstrip('-').isdigit():\n        total += int(t)\n    else:\n        bad += 1\nprint(total, bad)",
"e2": "LBYL: ముందు check చేసి convert (exception వాడలేదు)."
},
{
"l": 212,
"t": "Custom exception hierarchy",
"i": "100\n150",
"o": "InsufficientFunds: need 50 more",
"s": "class BankError(Exception):\n    pass\nclass InsufficientFunds(BankError):\n    def __init__(self, need):\n        super().__init__(f'InsufficientFunds: need {need} more')\nbal = int(input())\namt = int(input())\ntry:\n    if amt > bal:\n        raise InsufficientFunds(amt - bal)\n    print(bal - amt)\nexcept BankError as e:\n    print(e)",
"e": "Subclass ని parent BankError తోనే catch చేయవచ్చు.",
"s2": "class InsufficientFunds(Exception):\n    def __init__(self, need):\n        self.need = need\nbal = int(input())\namt = int(input())\ntry:\n    if amt > bal:\n        raise InsufficientFunds(amt - bal)\n    print(bal - amt)\nexcept InsufficientFunds as e:\n    print(f'InsufficientFunds: need {e.need} more')",
"e2": "Exception లో data attribute గా; message బయట format."
},
{
"l": 212,
"t": "Context manager suppressing errors",
"i": "boom",
"o": "enter\nexit ValueError\nafter",
"s": "class Ctx:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, t, v, tb):\n        print('exit', t.__name__ if t else 'None')\n        return True\nmsg = input()\nwith Ctx():\n    raise ValueError(msg)\nprint('after')",
"e": "__exit__ True return చేస్తే exception suppress అవుతుంది.",
"s2": "from contextlib import contextmanager\n@contextmanager\ndef ctx():\n    print('enter')\n    try:\n        yield\n    except Exception as e:\n        print('exit', type(e).__name__)\nmsg = input()\nwith ctx():\n    raise ValueError(msg)\nprint('after')",
"e2": "@contextmanager generator: yield చుట్టూ try/except."
},
{
"l": 212,
"t": "Retry until success",
"i": "2 5",
"o": "Success after 3 attempts",
"s": "k, n = map(int, input().split())\ncalls = 0\ndef flaky():\n    global calls\n    calls += 1\n    if calls <= k:\n        raise RuntimeError('fail')\nfor attempt in range(1, n + 1):\n    try:\n        flaky()\n        print(f'Success after {attempt} attempts')\n        break\n    except RuntimeError:\n        pass\nelse:\n    print(f'Failed after {n} attempts')",
"e": "Loop + try/except; for-else అన్నీ విఫలమైతే.",
"s2": "k, n = map(int, input().split())\ncalls = 0\ndef flaky():\n    global calls\n    calls += 1\n    if calls <= k:\n        raise RuntimeError('fail')\ndef retry(a):\n    try:\n        flaky()\n        return f'Success after {a} attempts'\n    except RuntimeError:\n        return retry(a + 1) if a < n else f'Failed after {n} attempts'\nprint(retry(1))",
"e2": "Recursion తో retry; base: max attempts."
},
{
"l": 212,
"t": "Safe calculator",
"i": "10 / 0",
"o": "Error: division by zero",
"s": "a, op, b = input().split()\nops = {'+': lambda x, y: x + y, '-': lambda x, y: x - y, '*': lambda x, y: x * y, '/': lambda x, y: x / y}\ntry:\n    print(ops[op](float(a), float(b)))\nexcept ZeroDivisionError:\n    print('Error: division by zero')\nexcept KeyError:\n    print('Error: unknown operator')",
"e": "వేర్వేరు errors కి వేర్వేరు except blocks.",
"s2": "import operator as o\na, op, b = input().split()\nf = {'+': o.add, '-': o.sub, '*': o.mul, '/': o.truediv}\nx, y = float(a), float(b)\nif op not in f:\n    print('Error: unknown operator')\nelif op == '/' and y == 0:\n    print('Error: division by zero')\nelse:\n    print(f[op](x, y))",
"e2": "LBYL: ముందే conditions check చేసి error రాకుండా చూశాం."
},
{
"l": 212,
"t": "Collect all validation errors",
"i": "Nihar -5 abc",
"o": "['age out of range', 'email invalid']",
"s": "name, age, email = input().split()\nerrors = []\ndef chk_age(a):\n    if not 0 <= int(a) <= 120:\n        raise ValueError('age out of range')\ndef chk_email(e):\n    if '@' not in e:\n        raise ValueError('email invalid')\nfor f, v in ((chk_age, age), (chk_email, email)):\n    try:\n        f(v)\n    except ValueError as e:\n        errors.append(str(e))\nprint(errors)",
"e": "ఒక్కో validator error raise చేస్తుంది; అన్నీ collect చేశాం (మొదటి error దగ్గర ఆపలేదు).",
"s2": "name, age, email = input().split()\nerrors = []\nif not age.lstrip('-').isdigit() or not 0 <= int(age) <= 120:\n    errors.append('age out of range')\nif '@' not in email:\n    errors.append('email invalid')\nprint(errors)",
"e2": "Simple if checks; exceptions లేకుండా."
},
{
"l": 212,
"t": "Exception chaining",
"i": "{\"port\": \"80x\"}",
"o": "ConfigError: invalid port (caused by ValueError)",
"s": "import json\nclass ConfigError(Exception):\n    pass\ncfg = json.loads(input())\ntry:\n    try:\n        int(cfg['port'])\n    except ValueError as e:\n        raise ConfigError('invalid port') from e\nexcept ConfigError as e:\n    print(f'ConfigError: {e} (caused by {type(e.__cause__).__name__})')",
"e": "raise ... from e అసలు కారణాన్ని __cause__ లో ఉంచుతుంది.",
"s2": "import json\nclass ConfigError(Exception):\n    def __init__(self, msg, cause):\n        super().__init__(msg)\n        self.cause = cause\ncfg = json.loads(input())\ntry:\n    try:\n        int(cfg['port'])\n    except ValueError as e:\n        raise ConfigError('invalid port', e)\nexcept ConfigError as e:\n    print(f'ConfigError: {e} (caused by {type(e.cause).__name__})')",
"e2": "Cause ని మనమే attribute గా దాచాం."
},
{
"l": 212,
"t": "Transaction rollback",
"i": "100\n-30 -50 -40",
"o": "100",
"s": "bal = int(input())\nops = list(map(int, input().split()))\nsaved = bal\ntry:\n    for o in ops:\n        if bal + o < 0:\n            raise ValueError('insufficient')\n        bal += o\nexcept ValueError:\n    bal = saved\nprint(bal)",
"e": "ముందు state save; error వస్తే restore (all-or-nothing).",
"s2": "bal = int(input())\nops = list(map(int, input().split()))\nclass Tx:\n    def __enter__(self):\n        self.saved = bal\n        return self\n    def __exit__(self, t, v, tb):\n        global bal\n        if t:\n            bal = self.saved\n        return True\nwith Tx():\n    for o in ops:\n        if bal + o < 0:\n            raise ValueError('insufficient')\n        bal += o\nprint(bal)",
"e2": "Context manager: error అయితే __exit__ లో rollback."
},
{
"l": 212,
"t": "First valid number in range",
"i": "abc 200 -1 42 7",
"o": "42",
"s": "for t in input().split():\n    try:\n        v = int(t)\n        if 0 <= v <= 100:\n            print(v)\n            break\n    except ValueError:\n        continue",
"e": "Invalid tokens ని skip చేస్తూ మొదటి valid దగ్గర break.",
"s2": "def ok(t):\n    try:\n        v = int(t)\n    except ValueError:\n        return False\n    return 0 <= v <= 100\nprint(next((int(t) for t in input().split() if ok(t)), 'none'))",
"e2": "Helper ok() + next(generator, default)."
},
{
"l": 212,
"t": "Cleanup order with finally",
"i": "2",
"o": "enter 2\nenter 1\ncleanup 1\ncleanup 2\ncaught",
"s": "def f(k):\n    print('enter', k)\n    try:\n        if k == 1:\n            raise RuntimeError('boom')\n        f(k - 1)\n    finally:\n        print('cleanup', k)\ntry:\n    f(int(input()))\nexcept RuntimeError:\n    print('caught')",
"e": "Exception పైకి వెళ్ళేటప్పుడు ప్రతి level finally run అవుతుంది (లోపలి నుండి).",
"s2": "from contextlib import ExitStack\ntry:\n    with ExitStack() as st:\n        for k in range(int(input()), 0, -1):\n            print('enter', k)\n            st.callback(print, 'cleanup', k)\n        raise RuntimeError('boom')\nexcept RuntimeError:\n    print('caught')",
"e2": "ExitStack callbacks LIFO order లో run అవుతాయి."
},
{
"l": 213,
"t": "Log level counts",
"i": "5\nINFO start\nERROR disk\nINFO ok\nERROR net\nWARN slow",
"o": "{'INFO': 2, 'ERROR': 2, 'WARN': 1}",
"s": "from collections import Counter\nn = int(input())\nlines = [input() for _ in range(n)]\nwith open('log.txt', 'w') as f:\n    f.write('\\n'.join(lines))\nwith open('log.txt') as f:\n    print(dict(Counter(l.split()[0] for l in f.read().splitlines())))",
"e": "File రాసి చదివి, మొదటి word తో Counter.",
"s2": "from collections import defaultdict\nn = int(input())\nwith open('log.txt', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\nd = defaultdict(int)\nwith open('log.txt') as f:\n    for line in f:\n        d[line.split()[0]] += 1\nprint(dict(d))",
"e2": "File ని line by line stream చేశాం (memory save)."
},
{
"l": 213,
"t": "Top 2 words from file",
"i": "the cat and the hat and the bat",
"o": "[('the', 3), ('and', 2)]",
"s": "from collections import Counter\nwith open('w.txt', 'w') as f:\n    f.write(input())\nwith open('w.txt') as f:\n    print(Counter(f.read().split()).most_common(2))",
"e": "most_common(k) frequency ప్రకారం top k.",
"s2": "with open('w.txt', 'w') as f:\n    f.write(input())\nd = {}\nwith open('w.txt') as f:\n    for w in f.read().split():\n        d[w] = d.get(w, 0) + 1\nprint(sorted(d.items(), key=lambda x: -x[1])[:2])",
"e2": "Manual dict + stable sort (-count)."
},
{
"l": 213,
"t": "JSON file nested update",
"i": "{\"a\": 1, \"b\": {\"c\": 2}}",
"o": "{\"a\": 1, \"b\": {\"c\": 3}}",
"s": "import json\nd = json.loads(input())\nwith open('d.json', 'w') as f:\n    json.dump(d, f)\nwith open('d.json') as f:\n    d = json.load(f)\nd['b']['c'] += 1\nprint(json.dumps(d))",
"e": "dump → load round trip తర్వాత nested value మార్చాం.",
"s2": "import json\nraw = input()\nwith open('d.json', 'w') as f:\n    f.write(raw)\nwith open('d.json') as f:\n    d = json.loads(f.read())\nd['b'].update(c=d['b']['c'] + 1)\nprint(json.dumps(d))",
"e2": "write/read + loads/dumps; nested dict.update."
},
{
"l": 213,
"t": "CSV average per student",
"i": "4\nAlice,Math,80\nBob,Math,70\nAlice,Sci,90\nBob,Sci,60",
"o": "{'Alice': 85.0, 'Bob': 65.0}",
"s": "import csv\nn = int(input())\nrows = [input() for _ in range(n)]\nwith open('s.csv', 'w', newline='') as f:\n    f.write('\\n'.join(rows) + '\\n')\ng = {}\nwith open('s.csv') as f:\n    for name, sub, m in csv.reader(f):\n        g.setdefault(name, []).append(int(m))\nprint({k: sum(v) / len(v) for k, v in g.items()})",
"e": "csv.reader rows; పేరు వారీగా marks lists.",
"s2": "import csv\nfrom collections import defaultdict\nn = int(input())\nrows = ['name,subject,marks'] + [input() for _ in range(n)]\nwith open('s.csv', 'w') as f:\n    f.write('\\n'.join(rows))\ntot, cnt = defaultdict(float), defaultdict(int)\nwith open('s.csv') as f:\n    for r in csv.DictReader(f):\n        tot[r['name']] += int(r['marks'])\n        cnt[r['name']] += 1\nprint({k: tot[k] / cnt[k] for k in tot})",
"e2": "DictReader: header తో columns పేర్లు; totals/counts."
},
{
"l": 213,
"t": "Last k lines of a file",
"i": "5 2\na\nb\nc\nd\ne",
"o": "d\ne",
"s": "from collections import deque\nn, k = map(int, input().split())\nwith open('t.txt', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\nwith open('t.txt') as f:\n    print(*(l.strip() for l in deque(f, maxlen=k)), sep='\\n')",
"e": "deque(maxlen=k) streaming: file మొత్తం memory లో లేదు.",
"s2": "n, k = map(int, input().split())\nwith open('t.txt', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\nwith open('t.txt') as f:\n    print(*[l.strip() for l in f.readlines()[-k:]], sep='\\n')",
"e2": "readlines() మొత్తం load చేసి చివరి k slice."
},
{
"l": 213,
"t": "Merge two sorted files",
"i": "1 3 5\n2 4 6",
"o": "1 2 3 4 5 6",
"s": "a = input().split()\nb = input().split()\nfor name, v in (('a.txt', a), ('b.txt', b)):\n    with open(name, 'w') as f:\n        f.write('\\n'.join(v))\nA = [int(x) for x in open('a.txt').read().split()]\nB = [int(x) for x in open('b.txt').read().split()]\ni = j = 0\nout = []\nwhile i < len(A) and j < len(B):\n    if A[i] <= B[j]:\n        out.append(A[i])\n        i += 1\n    else:\n        out.append(B[j])\n        j += 1\nout += A[i:] + B[j:]\nprint(*out)",
"e": "Two-pointer merge: చిన్నది ముందు.",
"s2": "a = input().split()\nb = input().split()\nfor name, v in (('a.txt', a), ('b.txt', b)):\n    with open(name, 'w') as f:\n        f.write('\\n'.join(v))\nimport heapq\nprint(*heapq.merge(*[map(int, open(n).read().split()) for n in ('a.txt', 'b.txt')]))",
"e2": "heapq.merge lazily merge చేస్తుంది."
},
{
"l": 213,
"t": "Duplicate lines (first-seen order)",
"i": "5\nx\ny\nx\nz\ny",
"o": "['x', 'y']",
"s": "n = int(input())\nwith open('l.txt', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\nseen, dup = set(), []\nwith open('l.txt') as f:\n    for line in f:\n        line = line.strip()\n        if line in seen and line not in dup:\n            dup.append(line)\n        seen.add(line)\nprint(dup)",
"e": "Set లో చూసినవి; రెండోసారి వస్తే dup లో.",
"s2": "from collections import Counter\nn = int(input())\nwith open('l.txt', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\nwith open('l.txt') as f:\n    c = Counter(l.strip() for l in f)\nprint([k for k, v in c.items() if v > 1])",
"e2": "Counter తో count > 1."
},
{
"l": 213,
"t": "Config parser with types",
"i": "4\n# comment\nport=80\ndebug=true\nname=app",
"o": "{'port': 80, 'debug': True, 'name': 'app'}",
"s": "n = int(input())\nwith open('c.ini', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\ncfg = {}\nwith open('c.ini') as f:\n    for line in f:\n        line = line.strip()\n        if not line or line.startswith('#'):\n            continue\n        k, v = line.split('=', 1)\n        cfg[k] = int(v) if v.isdigit() else (v == 'true' if v in ('true', 'false') else v)\nprint(cfg)",
"e": "Comments, ఖాళీ lines skip; value type అంచనా.",
"s2": "n = int(input())\nwith open('c.ini', 'w') as f:\n    for _ in range(n):\n        f.write(input() + '\\n')\ndef conv(v):\n    if v in ('true', 'false'):\n        return v == 'true'\n    try:\n        return int(v)\n    except ValueError:\n        return v\nlines = [l.strip() for l in open('c.ini') if l.strip() and not l.startswith('#')]\nprint({k: conv(v) for k, v in (l.split('=', 1) for l in lines)})",
"e2": "conv() helper: bool, int, లేకపోతే string."
},
{
"l": 213,
"t": "Line numbers containing a word",
"i": "4 fox\nthe quick brown\nfox jumps\nlazy dog\nfox again",
"o": "[2, 4]",
"s": "n, w = input().split()\nwith open('f.txt', 'w') as f:\n    for _ in range(int(n)):\n        f.write(input() + '\\n')\nwith open('f.txt') as f:\n    print([i for i, l in enumerate(f, 1) if w in l.split()])",
"e": "enumerate(f, 1) తో line numbers.",
"s2": "import re\nn, w = input().split()\nwith open('f.txt', 'w') as f:\n    for _ in range(int(n)):\n        f.write(input() + '\\n')\nwith open('f.txt') as f:\n    lines = f.read().splitlines()\nprint([i + 1 for i, l in enumerate(lines) if re.search(r'\\b' + re.escape(w) + r'\\b', l)])",
"e2": "Regex word boundary \\b."
},
{
"l": 213,
"t": "Binary file length and byte sum",
"i": "hello",
"o": "5 532",
"s": "t = input()\nwith open('b.bin', 'wb') as f:\n    f.write(t.encode())\nwith open('b.bin', 'rb') as f:\n    d = f.read()\nprint(len(d), sum(d))",
"e": "'wb'/'rb' modes; bytes iterate చేస్తే ints.",
"s2": "t = input()\nwith open('b.bin', 'wb') as f:\n    f.write(t.encode())\ntotal = n = 0\nwith open('b.bin', 'rb') as f:\n    while chunk := f.read(2):\n        n += len(chunk)\n        total += sum(chunk)\nprint(n, total)",
"e2": "Chunks గా చదివాం: పెద్ద files కి సరైన పద్ధతి."
},
{
"l": 214,
"t": "Business days between dates",
"i": "2024-03-01\n2024-03-15",
"o": "10",
"s": "from datetime import date, timedelta\na = date.fromisoformat(input())\nb = date.fromisoformat(input())\nn = 0\nwhile a < b:\n    n += a.weekday() < 5\n    a += timedelta(1)\nprint(n)",
"e": "weekday() < 5 అంటే Mon–Fri; రోజు రోజుకీ ముందుకు.",
"s2": "from datetime import date, timedelta\na = date.fromisoformat(input())\nb = date.fromisoformat(input())\nprint(sum((a + timedelta(i)).weekday() < 5 for i in range((b - a).days)))",
"e2": "రోజుల range మీద generator sum; loop mutate లేదు."
},
{
"l": 214,
"t": "Count valid emails",
"i": "a@b.com bad@ x.y@z.org @no",
"o": "2",
"s": "import re\nprint(sum(bool(re.fullmatch(r'[\\w.]+@\\w+\\.[a-z]+', t)) for t in input().split()))",
"e": "fullmatch మొత్తం token pattern కి సరిపోవాలి.",
"s2": "def ok(t):\n    p = t.split('@')\n    return len(p) == 2 and p[0] != '' and '.' in p[1] and all(p[1].split('.'))\nprint(sum(map(ok, input().split())))",
"e2": "Regex లేకుండా split తో manual validation."
},
{
"l": 214,
"t": "Josephus problem",
"i": "7 3",
"o": "4",
"s": "from collections import deque\nn, k = map(int, input().split())\nd = deque(range(1, n + 1))\nwhile len(d) > 1:\n    d.rotate(-(k - 1))\n    d.popleft()\nprint(d[0])",
"e": "deque.rotate తో k-1 మందిని వెనక్కి పంపి k వ వ్యక్తిని తొలగిస్తాం.",
"s2": "n, k = map(int, input().split())\nl = list(range(1, n + 1))\ni = 0\nwhile len(l) > 1:\n    i = (i + k - 1) % len(l)\n    l.pop(i)\nprint(l[0])",
"e2": "List + index modulo; pop(i) O(n)."
},
{
"l": 214,
"t": "Next Friday the 13th",
"i": "2024-03-01",
"o": "2024-09-13",
"s": "from datetime import date, timedelta\nd = date.fromisoformat(input())\nwhile True:\n    d += timedelta(1)\n    if d.day == 13 and d.weekday() == 4:\n        print(d)\n        break",
"e": "రోజు రోజుకీ ముందుకు వెళ్ళి check.",
"s2": "from datetime import date\ny, m, _ = map(int, input().split('-'))\nwhile True:\n    m += 1\n    if m > 12:\n        y, m = y + 1, 1\n    if date(y, m, 13).weekday() == 4:\n        print(date(y, m, 13))\n        break",
"e2": "నెల నెలకీ 13వ తేదీ మాత్రమే check: వేగం."
},
{
"l": 214,
"t": "Deep merge JSON",
"i": "{\"a\": 1, \"b\": {\"c\": 2}}\n{\"b\": {\"d\": 3}, \"e\": 4}",
"o": "{\"a\": 1, \"b\": {\"c\": 2, \"d\": 3}, \"e\": 4}",
"s": "import json\ndef merge(a, b):\n    for k, v in b.items():\n        if isinstance(v, dict) and isinstance(a.get(k), dict):\n            merge(a[k], v)\n        else:\n            a[k] = v\n    return a\nprint(json.dumps(merge(json.loads(input()), json.loads(input()))))",
"e": "Nested dicts కి recursion.",
"s2": "import json\na = json.loads(input())\nb = json.loads(input())\nst = [(a, b)]\nwhile st:\n    x, y = st.pop()\n    for k, v in y.items():\n        if isinstance(v, dict) and isinstance(x.get(k), dict):\n            st.append((x[k], v))\n        else:\n            x[k] = v\nprint(json.dumps(a))",
"e2": "Explicit stack: recursion depth సమస్య లేదు."
},
{
"l": 214,
"t": "Sum amounts in text",
"i": "paid 120 and 80.5 then 20",
"o": "220.5",
"s": "import re\nprint(sum(float(x) for x in re.findall(r'\\d+(?:\\.\\d+)?', input())))",
"e": "Regex తో numbers వెలికితీత.",
"s2": "tot = 0\nfor t in input().split():\n    try:\n        tot += float(t)\n    except ValueError:\n        pass\nprint(tot)",
"e2": "ప్రతి token float చేసి చూశాం; fail అయితే skip."
},
{
"l": 214,
"t": "Most common word",
"i": "The cat. the Hat, THE bat!",
"o": "the 3",
"s": "import re\nfrom collections import Counter\nw, c = Counter(re.findall(r'[a-z]+', input().lower())).most_common(1)[0]\nprint(w, c)",
"e": "lower చేసి letters మాత్రమే; Counter.",
"s2": "import string\nt = input().lower().translate(str.maketrans('', '', string.punctuation))\nd = {}\nfor w in t.split():\n    d[w] = d.get(w, 0) + 1\nw = max(d, key=d.get)\nprint(w, d[w])",
"e2": "Punctuation తొలగించి manual count."
},
{
"l": 214,
"t": "Dice sum ways",
"i": "10",
"o": "27",
"s": "from itertools import product\nn = int(input())\nprint(sum(sum(r) == n for r in product(range(1, 7), repeat=3)))",
"e": "3 dice అన్ని 216 combinations check.",
"s2": "n = int(input())\nways = [1] + [0] * n\nfor _ in range(3):\n    nw = [0] * (n + 1)\n    for s in range(n + 1):\n        for d in range(1, 7):\n            if s + d <= n:\n                nw[s + d] += ways[s]\n    ways = nw\nprint(ways[n])",
"e2": "DP: ప్రతి dice తర్వాత sum ways table."
},
{
"l": 214,
"t": "GCD and LCM of list",
"i": "12 18 24",
"o": "6 72",
"s": "import math\nfrom functools import reduce\na = list(map(int, input().split()))\nprint(reduce(math.gcd, a), reduce(math.lcm, a))",
"e": "math.gcd/lcm + reduce.",
"s2": "def g(a, b):\n    while b:\n        a, b = b, a % b\n    return a\na = list(map(int, input().split()))\ng0 = l0 = a[0]\nfor x in a[1:]:\n    g0 = g(g0, x)\n    l0 = l0 * x // g(l0, x)\nprint(g0, l0)",
"e2": "Euclid algorithm; lcm = a*b/gcd."
},
{
"l": 214,
"t": "Path parts",
"i": "/home/user/docs/file.tar.gz",
"o": "file.tar.gz .gz /home/user/docs",
"s": "import os\np = input()\nprint(os.path.basename(p), os.path.splitext(p)[1], os.path.dirname(p))",
"e": "os.path functions.",
"s2": "from pathlib import PurePosixPath\np = PurePosixPath(input())\nprint(p.name, p.suffix, p.parent)",
"e2": "pathlib object properties."
},
{
"l": 215,
"t": "SQL group by",
"i": "Alice 50 Bob 30 Alice 20",
"o": "[('Alice', 70), ('Bob', 30)]",
"s": "import sqlite3\nt = input().split()\nc = sqlite3.connect(':memory:')\nc.execute('CREATE TABLE s(name TEXT, amt INT)')\nc.executemany('INSERT INTO s VALUES (?, ?)', [(t[i], int(t[i + 1])) for i in range(0, len(t), 2)])\nprint(c.execute('SELECT name, SUM(amt) FROM s GROUP BY name ORDER BY name').fetchall())",
"e": "GROUP BY + SUM per-name totals.",
"s2": "t = input().split()\nd = {}\nfor i in range(0, len(t), 2):\n    d[t[i]] = d.get(t[i], 0) + int(t[i + 1])\nprint(sorted(d.items()))",
"e2": "SQL లేకుండా dict తో అదే aggregate."
},
{
"l": 215,
"t": "Merge sorted lists (heapq)",
"i": "1 4 7\n2 5\n3 6 8",
"o": "[1, 2, 3, 4, 5, 6, 7, 8]",
"s": "import heapq\nL = [list(map(int, input().split())) for _ in range(3)]\nprint(list(heapq.merge(*L)))",
"e": "heapq.merge sorted inputs ని lazily merge చేస్తుంది.",
"s2": "import heapq\nL = [list(map(int, input().split())) for _ in range(3)]\nh = [(l[0], i, 0) for i, l in enumerate(L) if l]\nheapq.heapify(h)\nout = []\nwhile h:\n    v, i, j = heapq.heappop(h)\n    out.append(v)\n    if j + 1 < len(L[i]):\n        heapq.heappush(h, (L[i][j + 1], i, j + 1))\nprint(out)",
"e2": "Manual k-way merge: heap లో (value, list, position)."
},
{
"l": 215,
"t": "Count in range (bisect)",
"i": "1 3 5 7 9\n3 7",
"o": "3",
"s": "from bisect import bisect_left, bisect_right\na = list(map(int, input().split()))\nlo, hi = map(int, input().split())\nprint(bisect_right(a, hi) - bisect_left(a, lo))",
"e": "రెండు binary searches తో range count: O(log n).",
"s2": "a = list(map(int, input().split()))\nlo, hi = map(int, input().split())\nprint(sum(lo <= x <= hi for x in a))",
"e2": "Linear scan O(n) (bisect O(log n) కంటే నెమ్మది)."
},
{
"l": 215,
"t": "Top-K words with tie-break",
"i": "b a b c a d a\n3",
"o": "['a', 'b', 'c']",
"s": "from collections import Counter\nc = Counter(input().split())\nk = int(input())\nprint(sorted(c, key=lambda w: (-c[w], w))[:k])",
"e": "Key (-count, word): count తగ్గుతూ, tie లో alphabetical.",
"s2": "import heapq\nfrom collections import Counter\nc = Counter(input().split())\nk = int(input())\nprint(heapq.nsmallest(k, c, key=lambda w: (-c[w], w)))",
"e2": "nsmallest O(n log k)."
},
{
"l": 215,
"t": "Running median",
"i": "5 2 8 1 9",
"o": "5 3.5 5 3.5 5",
"s": "import heapq\nlo, hi = [], []\nres = []\nfor x in map(int, input().split()):\n    heapq.heappush(lo, -x)\n    heapq.heappush(hi, -heapq.heappop(lo))\n    if len(hi) > len(lo):\n        heapq.heappush(lo, -heapq.heappop(hi))\n    res.append(-lo[0] if len(lo) > len(hi) else (-lo[0] + hi[0]) / 2)\nprint(*res)",
"e": "రెండు heaps: max-heap (కింది సగం), min-heap (పై సగం).",
"s2": "from bisect import insort\na = []\nres = []\nfor x in map(int, input().split()):\n    insort(a, x)\n    n = len(a)\n    res.append(a[n // 2] if n % 2 else (a[n // 2 - 1] + a[n // 2]) / 2)\nprint(*res)",
"e2": "insort తో sorted list; middle index."
},
{
"l": 215,
"t": "Second highest salary",
"i": "Alice 50 Bob 80 Cara 80 Dan 60",
"o": "60",
"s": "import sqlite3\nt = input().split()\nc = sqlite3.connect(':memory:')\nc.execute('CREATE TABLE e(n TEXT, s INT)')\nc.executemany('INSERT INTO e VALUES (?, ?)', [(t[i], int(t[i + 1])) for i in range(0, len(t), 2)])\nprint(c.execute('SELECT DISTINCT s FROM e ORDER BY s DESC LIMIT 1 OFFSET 1').fetchone()[0])",
"e": "DISTINCT + ORDER BY DESC + OFFSET 1.",
"s2": "t = input().split()\nprint(sorted({int(t[i]) for i in range(1, len(t), 2)}, reverse=True)[1])",
"e2": "Set తో distinct, sort చేసి index 1."
},
{
"l": 215,
"t": "Outliers by z-score",
"i": "10 12 11 13 12 95",
"o": "[95]",
"s": "import statistics as st\na = list(map(int, input().split()))\nm, s = st.mean(a), st.pstdev(a)\nprint([x for x in a if abs(x - m) / s > 2])",
"e": "|x - mean| / stdev > 2 అయితే outlier.",
"s2": "import math\na = list(map(int, input().split()))\nm = sum(a) / len(a)\ns = math.sqrt(sum((x - m) ** 2 for x in a) / len(a))\nprint([x for x in a if abs(x - m) / s > 2])",
"e2": "statistics లేకుండా formula తో."
},
{
"l": 215,
"t": "Longest win streak",
"i": "W W L W W W L",
"o": "3",
"s": "from itertools import groupby\nprint(max((len(list(g)) for k, g in groupby(input().split()) if k == 'W'), default=0))",
"e": "groupby వరుస runs; W runs పొడవు.",
"s2": "best = cur = 0\nfor r in input().split():\n    cur = cur + 1 if r == 'W' else 0\n    best = max(best, cur)\nprint(best)",
"e2": "Running counter, L వస్తే reset."
},
{
"l": 215,
"t": "Grid paths with obstacles",
"i": "3 3\n0 0 0\n0 1 0\n0 0 0",
"o": "2",
"s": "from functools import lru_cache\nr, c = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(r)]\n@lru_cache(None)\ndef f(i, j):\n    if i >= r or j >= c or g[i][j]:\n        return 0\n    if i == r - 1 and j == c - 1:\n        return 1\n    return f(i + 1, j) + f(i, j + 1)\nprint(f(0, 0))",
"e": "Top-down recursion + lru_cache.",
"s2": "r, c = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(r)]\ndp = [[0] * c for _ in range(r)]\nfor i in range(r):\n    for j in range(c):\n        if g[i][j]:\n            continue\n        if i == j == 0:\n            dp[i][j] = 1\n        else:\n            dp[i][j] = (dp[i - 1][j] if i else 0) + (dp[i][j - 1] if j else 0)\nprint(dp[-1][-1])",
"e2": "Bottom-up table: పైన + ఎడమ నుండి."
},
{
"l": 215,
"t": "Maze shortest path",
"i": "3 3\n0 0 0\n1 1 0\n0 0 0",
"o": "4",
"s": "from collections import deque\nr, c = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(r)]\nq = deque([(0, 0, 0)])\nseen = {(0, 0)}\nans = -1\nwhile q:\n    i, j, d = q.popleft()\n    if (i, j) == (r - 1, c - 1):\n        ans = d\n        break\n    for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n        if 0 <= a < r and 0 <= b < c and not g[a][b] and (a, b) not in seen:\n            seen.add((a, b))\n            q.append((a, b, d + 1))\nprint(ans)",
"e": "BFS: unweighted graph లో shortest path.",
"s2": "import heapq\nr, c = map(int, input().split())\ng = [list(map(int, input().split())) for _ in range(r)]\ndist = {(0, 0): 0}\nh = [(0, 0, 0)]\nans = -1\nwhile h:\n    d, i, j = heapq.heappop(h)\n    if (i, j) == (r - 1, c - 1):\n        ans = d\n        break\n    if d > dist[(i, j)]:\n        continue\n    for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n        if 0 <= a < r and 0 <= b < c and not g[a][b] and d + 1 < dist.get((a, b), 10 ** 9):\n            dist[(a, b)] = d + 1\n            heapq.heappush(h, (d + 1, a, b))\nprint(ans)",
"e2": "Dijkstra (weights 1): heap తో; weighted కి విస్తరించవచ్చు."
},
{
"l": 216,
"t": "Pagination range",
"i": "25 10 3",
"o": "21 25",
"s": "total, per, page = map(int, input().split())\nprint((page - 1) * per + 1, min(page * per, total))",
"e": "చివరి page లో end = total.",
"s2": "total, per, page = map(int, input().split())\nchunk = list(range(1, total + 1))[(page - 1) * per:page * per]\nprint(chunk[0], chunk[-1])",
"e2": "Slicing తో page items తీసి మొదటి/చివరి."
},
{
"l": 216,
"t": "Sliding-window rate limiter",
"i": "2 5\n1 2 3 7 8",
"o": "True True False True True",
"s": "from collections import deque\nk, w = map(int, input().split())\nq = deque()\nres = []\nfor t in map(int, input().split()):\n    while q and q[0] <= t - w:\n        q.popleft()\n    if len(q) < k:\n        q.append(t)\n        res.append(True)\n    else:\n        res.append(False)\nprint(*res)",
"e": "Window బయటి పాత requests తొలగించి count < k అయితే allow.",
"s2": "k, w = map(int, input().split())\nallowed = []\nres = []\nfor t in map(int, input().split()):\n    recent = [x for x in allowed if x > t - w]\n    if len(recent) < k:\n        allowed.append(t)\n        res.append(True)\n    else:\n        res.append(False)\nprint(*res)",
"e2": "Deque లేకుండా: ప్రతిసారి recent filter (O(n))."
},
{
"l": 216,
"t": "Flatten nested JSON",
"i": "{\"a\": {\"b\": 1, \"c\": {\"d\": 2}}, \"e\": 3}",
"o": "{'a.b': 1, 'a.c.d': 2, 'e': 3}",
"s": "import json\ndef flat(d, p=''):\n    out = {}\n    for k, v in d.items():\n        key = p + k\n        if isinstance(v, dict):\n            out.update(flat(v, key + '.'))\n        else:\n            out[key] = v\n    return out\nprint(flat(json.loads(input())))",
"e": "Dict అయితే recursion, prefix తో keys కలిపాం.",
"s2": "import json\nout = {}\nst = [('', json.loads(input()))]\nwhile st:\n    p, d = st.pop()\n    for k, v in d.items():\n        if isinstance(v, dict):\n            st.append((p + k + '.', v))\n        else:\n            out[p + k] = v\nprint(dict(sorted(out.items())))",
"e2": "Explicit stack (recursion లేదు); చివరికి keys sort."
},
{
"l": 216,
"t": "Parse query with repeated keys",
"i": "a=1&b=x&a=2&c=",
"o": "{'a': ['1', '2'], 'b': ['x']}",
"s": "from urllib.parse import parse_qs\nprint(parse_qs(input()))",
"e": "parse_qs repeated keys list చేస్తుంది, empty values వదులుతుంది.",
"s2": "d = {}\nfor part in input().split('&'):\n    k, _, v = part.partition('=')\n    if v:\n        d.setdefault(k, []).append(v)\nprint(d)",
"e2": "Manual: partition('=') మరియు setdefault."
},
{
"l": 216,
"t": "Exponential backoff schedule",
"i": "5 100 500",
"o": "[100, 200, 400, 500, 500]",
"s": "n, base, cap = map(int, input().split())\nprint([min(cap, base * 2 ** i) for i in range(n)])",
"e": "delay = base·2^i, cap తో పరిమితి.",
"s2": "n, base, cap = map(int, input().split())\nd, out = base, []\nfor _ in range(n):\n    out.append(min(d, cap))\n    d *= 2\nprint(out)",
"e2": "ప్రతిసారి రెట్టింపు చేస్తూ loop."
},
{
"l": 216,
"t": "Token bucket limiter",
"i": "3 1\n0 0 0 0 1 2",
"o": "True True True False True True",
"s": "cap, rate = map(int, input().split())\ntokens, last = cap, 0\nres = []\nfor t in map(int, input().split()):\n    tokens = min(cap, tokens + (t - last) * rate)\n    last = t\n    if tokens >= 1:\n        tokens -= 1\n        res.append(True)\n    else:\n        res.append(False)\nprint(*res)",
"e": "సమయం గడిచిన కొద్దీ tokens refill (cap వరకు).",
"s2": "class Bucket:\n    def __init__(self, cap, rate):\n        self.cap, self.rate, self.tokens, self.last = cap, rate, cap, 0\n    def allow(self, t):\n        self.tokens = min(self.cap, self.tokens + (t - self.last) * self.rate)\n        self.last = t\n        ok = self.tokens >= 1\n        self.tokens -= ok\n        return ok\ncap, rate = map(int, input().split())\nb = Bucket(cap, rate)\nprint(*[b.allow(t) for t in map(int, input().split())])",
"e2": "అదే logic class లో encapsulate."
},
{
"l": 216,
"t": "Aggregate records by field",
"i": "[{\"city\":\"A\",\"amt\":10},{\"city\":\"B\",\"amt\":5},{\"city\":\"A\",\"amt\":7}]",
"o": "{'A': 17, 'B': 5}",
"s": "import json\nfrom collections import defaultdict\nd = defaultdict(int)\nfor r in json.loads(input()):\n    d[r['city']] += r['amt']\nprint(dict(d))",
"e": "defaultdict(int) తో totals.",
"s2": "import json\nfrom itertools import groupby\nrs = sorted(json.loads(input()), key=lambda r: r['city'])\nprint({k: sum(r['amt'] for r in g) for k, g in groupby(rs, key=lambda r: r['city'])})",
"e2": "Sort చేసి groupby (groupby కి sorted input తప్పనిసరి)."
},
{
"l": 216,
"t": "Status code retry decision",
"i": "200 404 500 503 429",
"o": "['success', 'client error', 'retry', 'retry', 'retry']",
"s": "out = []\nfor c in map(int, input().split()):\n    if c == 429 or c >= 500:\n        out.append('retry')\n    elif c >= 400:\n        out.append('client error')\n    else:\n        out.append('success')\nprint(out)",
"e": "429 మరియు 5xx retry చేయాలి; 4xx client తప్పు.",
"s2": "cls = {2: 'success', 4: 'client error', 5: 'retry'}\nprint(['retry' if c == 429 else cls[c // 100] for c in map(int, input().split())])",
"e2": "c // 100 తో class; 429 మాత్రమే exception."
},
{
"l": 216,
"t": "Validate JSON against schema",
"i": "{\"name\": \"Al\", \"age\": \"x\"}",
"o": "['age: expected int']",
"s": "import json\nschema = {'name': str, 'age': int}\nd = json.loads(input())\nerrs = []\nfor k, t in schema.items():\n    if k not in d:\n        errs.append(f'{k}: missing')\n    elif not isinstance(d[k], t):\n        errs.append(f'{k}: expected {t.__name__}')\nprint(errs)",
"e": "Fields missing లేదా type తప్పు అయితే error.",
"s2": "import json\nschema = {'name': str, 'age': int}\nd = json.loads(input())\nprint([f'{k}: missing' if k not in d else f'{k}: expected {t.__name__}' for k, t in schema.items() if k not in d or not isinstance(d[k], t)])",
"e2": "అదే logic ఒక comprehension లో."
},
{
"l": 216,
"t": "TTL cache",
"i": "5\nput a 1 0\nget a 3\nget a 12\nput b 2 5\nget b 6",
"o": "1\n-1\n2",
"s": "ttl = 10\nn = int(input())\nd = {}\nfor _ in range(n):\n    op = input().split()\n    if op[0] == 'put':\n        d[op[1]] = (int(op[2]), int(op[3]) + ttl)\n    else:\n        v = d.get(op[1])\n        print(v[0] if v and int(op[2]) < v[1] else -1)",
"e": "Lazy expiry: get చేసినప్పుడు expiry చూస్తాం.",
"s2": "import heapq\nttl = 10\nn = int(input())\nd, h = {}, []\nfor _ in range(n):\n    op = input().split()\n    t = int(op[3] if op[0] == 'put' else op[2])\n    while h and h[0][0] <= t:\n        e, k = heapq.heappop(h)\n        if k in d and d[k][1] == e:\n            del d[k]\n    if op[0] == 'put':\n        d[op[1]] = (int(op[2]), t + ttl)\n        heapq.heappush(h, (t + ttl, op[1]))\n    else:\n        print(d[op[1]][0] if op[1] in d else -1)",
"e2": "Eager purge: heap తో గడువు తీరినవి ముందే తొలగింపు."
},
{
"l": 217,
"t": "Route with parameters",
"i": "/user/7/post/42",
"o": "{'id': '7', 'pid': '42'}",
"s": "pattern = '/user/<id>/post/<pid>'\npath = input()\np1 = pattern.strip('/').split('/')\np2 = path.strip('/').split('/')\nout = {}\nfor a, b in zip(p1, p2):\n    if a.startswith('<'):\n        out[a[1:-1]] = b\n    elif a != b:\n        out = None\n        break\nprint(out if out is not None and len(p1) == len(p2) else '404')",
"e": "<name> segments values capture; static segments సరిపోవాలి.",
"s2": "import re\npattern = '/user/<id>/post/<pid>'\nrx = re.sub(r'<(\\w+)>', r'(?P<\\1>[^/]+)', pattern)\nm = re.fullmatch(rx, input())\nprint(m.groupdict() if m else '404')",
"e2": "Pattern ని regex named groups గా మార్చాం."
},
{
"l": 217,
"t": "Role-based access decorator",
"i": "guest",
"o": "403 Forbidden",
"s": "def require(role):\n    def deco(f):\n        def w(user):\n            return f(user) if user == role else '403 Forbidden'\n        return w\n    return deco\n@require('admin')\ndef dash(user):\n    return f'Welcome {user}'\nprint(dash(input()))",
"e": "Decorator with argument: role సరిపోకపోతే 403.",
"s2": "user = input()\nclass Require:\n    def __init__(self, role):\n        self.role = role\n    def __call__(self, f):\n        return lambda u: f(u) if u == self.role else '403 Forbidden'\n@Require('admin')\ndef dash(u):\n    return f'Welcome {u}'\nprint(dash(user))",
"e2": "Class-based decorator: __call__ తో."
},
{
"l": 217,
"t": "Parse form body",
"i": "name=Nihar+D&age=25&lang=te",
"o": "{'name': 'Nihar D', 'age': '25', 'lang': 'te'}",
"s": "from urllib.parse import parse_qs\nd = parse_qs(input())\nprint({k: v[0] for k, v in d.items()})",
"e": "parse_qs + ను space గా, values list గా ఇస్తుంది.",
"s2": "from urllib.parse import unquote_plus\nprint({k: unquote_plus(v) for k, v in (p.split('=') for p in input().split('&'))})",
"e2": "Manual split + unquote_plus (+ → space)."
},
{
"l": 217,
"t": "Route table with methods",
"i": "POST /login",
"o": "login submit",
"s": "routes = {('GET', '/'): 'home', ('GET', '/login'): 'login form', ('POST', '/login'): 'login submit'}\nm, p = input().split()\nif (m, p) in routes:\n    print(routes[(m, p)])\nelif any(rp == p for _, rp in routes):\n    print('405 Method Not Allowed')\nelse:\n    print('404 Not Found')",
"e": "(method, path) key; path ఉండి method లేకపోతే 405.",
"s2": "routes = []\ndef route(p, methods=('GET',)):\n    def d(f):\n        routes.append((p, methods, f))\n        return f\n    return d\n@route('/')\ndef home(m):\n    return 'home'\n@route('/login', methods=('GET', 'POST'))\ndef login(m):\n    return 'login submit' if m == 'POST' else 'login form'\nm, p = input().split()\nres = '404 Not Found'\nfor rp, ms, f in routes:\n    if rp == p:\n        res = f(m) if m in ms else '405 Method Not Allowed'\nprint(res)",
"e2": "@route(methods=[...]) decorator తో registry (Flask లాగే)."
},
{
"l": 217,
"t": "Signed cookie",
"i": "user=nihar",
"o": "True False",
"s": "import hmac, hashlib\nsecret = b'k'\ndata = input()\nsig = hmac.new(secret, data.encode(), hashlib.sha256).hexdigest()\nok = lambda d, s: hmac.compare_digest(hmac.new(secret, d.encode(), hashlib.sha256).hexdigest(), s)\nprint(ok(data, sig), ok(data + 'x', sig))",
"e": "HMAC: data మారితే signature సరిపోదు; compare_digest timing attacks నుండి కాపాడుతుంది.",
"s2": "import hashlib\nsecret = 'k'\ndata = input()\nsign = lambda d: hashlib.sha256((secret + d).encode()).hexdigest()\nsig = sign(data)\nprint(sign(data) == sig, sign(data + 'x') == sig)",
"e2": "Simple secret+data hash: పనిచేస్తుంది కానీ HMAC సురక్షితం."
},
{
"l": 217,
"t": "Template with escaping",
"i": "Hi {{name}}\nname=<b>Nihar</b>",
"o": "Hi &lt;b&gt;Nihar&lt;/b&gt;",
"s": "import re, html\ntpl = input()\nctx = dict(kv.split('=', 1) for kv in input().split())\nprint(re.sub(r'\\{\\{(\\w+)\\}\\}', lambda m: html.escape(ctx[m.group(1)]), tpl))",
"e": "Values escape చేయడం XSS నుండి కాపాడుతుంది (Jinja autoescape లాగే).",
"s2": "import html\ntpl = input()\nfor kv in input().split():\n    k, v = kv.split('=', 1)\n    tpl = tpl.replace('{{' + k + '}}', html.escape(v))\nprint(tpl)",
"e2": "ప్రతి key కి replace."
},
{
"l": 217,
"t": "JSON CRUD API",
"i": "5\nPOST apple\nPOST pear\nGET 1\nDELETE 1\nGET 1",
"o": "201 id=1\n201 id=2\n200 apple\n204\n404",
"s": "n = int(input())\nstore, nid = {}, 1\nfor _ in range(n):\n    op = input().split()\n    if op[0] == 'POST':\n        store[nid] = op[1]\n        print(f'201 id={nid}')\n        nid += 1\n    elif op[0] == 'GET':\n        print(f'200 {store[int(op[1])]}' if int(op[1]) in store else '404')\n    else:\n        print('204' if store.pop(int(op[1]), None) else '404')",
"e": "Status codes: 201 Created, 200 OK, 204 No Content, 404.",
"s2": "class API:\n    def __init__(self):\n        self.s, self.n = {}, 1\n    def handle(self, m, a):\n        if m == 'POST':\n            self.s[self.n] = a\n            self.n += 1\n            return f'201 id={self.n - 1}'\n        i = int(a)\n        if i not in self.s:\n            return '404'\n        if m == 'GET':\n            return f'200 {self.s[i]}'\n        del self.s[i]\n        return '204'\napi = API()\nfor _ in range(int(input())):\n    m, a = input().split()\n    print(api.handle(m, a))",
"e2": "Class లో state + handle(method, arg)."
},
{
"l": 217,
"t": "Middleware chain order",
"i": "3",
"o": "before 1\nbefore 2\nbefore 3\nhandler\nafter 3\nafter 2\nafter 1",
"s": "def handler():\n    print('handler')\ndef mw(i, nxt):\n    def run():\n        print('before', i)\n        nxt()\n        print('after', i)\n    return run\nf = handler\nfor i in range(int(input()), 0, -1):\n    f = mw(i, f)\nf()",
"e": "Closures తో లోపలి నుండి wrap; బయటి middleware ముందు run.",
"s2": "n = int(input())\ndef run(i):\n    if i > n:\n        print('handler')\n        return\n    print('before', i)\n    run(i + 1)\n    print('after', i)\nrun(1)",
"e2": "Recursion: లోపలికి వెళ్ళేటప్పుడు before, తిరిగి వచ్చేటప్పుడు after."
},
{
"l": 217,
"t": "url_for builder",
"i": "/user/<id>/post/<pid>\nid=7 pid=42 page=2",
"o": "/user/7/post/42?page=2",
"s": "from urllib.parse import urlencode\nrule = input()\nargs = dict(kv.split('=') for kv in input().split())\nextra = {}\nfor k, v in args.items():\n    if '<' + k + '>' in rule:\n        rule = rule.replace('<' + k + '>', v)\n    else:\n        extra[k] = v\nprint(rule + ('?' + urlencode(extra) if extra else ''))",
"e": "Rule లో ఉన్న keys path లో, మిగతావి query string లో.",
"s2": "import re\nfrom urllib.parse import urlencode\nrule = input()\nargs = dict(kv.split('=') for kv in input().split())\nkeys = set(re.findall(r'<(\\w+)>', rule))\npath = re.sub(r'<(\\w+)>', lambda m: args[m.group(1)], rule)\nextra = {k: v for k, v in args.items() if k not in keys}\nprint(path + ('?' + urlencode(extra) if extra else ''))",
"e2": "Regex తో placeholders replace."
},
{
"l": 217,
"t": "Login lockout",
"i": "2\nfail fail ok fail",
"o": "denied denied locked locked",
"s": "mx = int(input())\nfails = 0\nout = []\nfor a in input().split():\n    if fails >= mx:\n        out.append('locked')\n    elif a == 'ok':\n        fails = 0\n        out.append('granted')\n    else:\n        fails += 1\n        out.append('denied')\nprint(*out)",
"e": "Fails mx చేరాక సరైన password కూడా locked.",
"s2": "class Lock:\n    def __init__(self, mx):\n        self.mx, self.f = mx, 0\n    def attempt(self, a):\n        if self.f >= self.mx:\n            return 'locked'\n        if a == 'ok':\n            self.f = 0\n            return 'granted'\n        self.f += 1\n        return 'denied'\nlk = Lock(int(input()))\nprint(*[lk.attempt(a) for a in input().split()])",
"e2": "State class లో; అదే logic."
}
];
