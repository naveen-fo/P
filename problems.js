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
"l": 101,
"t": "Squares of even numbers",
"i": "10",
"o": "[4, 16, 36, 64, 100]",
"s": "n = int(input())\nprint([x * x for x in range(1, n + 1) if x % 2 == 0])",
"e": "Comprehension లో filter (if) మరియు expression (x*x)."
},
{
"l": 101,
"t": "Word length dictionary",
"i": "python is fun",
"o": "{'python': 6, 'is': 2, 'fun': 3}",
"s": "print({w: len(w) for w in input().split()})",
"e": "Dict comprehension: word → len(word)."
},
{
"l": 101,
"t": "Flatten nested list",
"i": "[[1,2],[3,4],[5]]",
"o": "[1, 2, 3, 4, 5]",
"s": "import ast\nm = ast.literal_eval(input())\nprint([x for row in m for x in row])",
"e": "literal_eval safe గా list parse చేస్తుంది; nested for outer→inner order."
},
{
"l": 101,
"t": "First n Fibonacci (generator)",
"i": "8",
"o": "0 1 1 2 3 5 8 13",
"s": "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\ng = fib()\nprint(*[next(g) for _ in range(int(input()))])",
"e": "Infinite generator; next() తో కావలసినన్ని మాత్రమే తీసుకున్నాం."
},
{
"l": 101,
"t": "Group words by length",
"i": "a bb cc d eee",
"o": "{1: ['a', 'd'], 2: ['bb', 'cc'], 3: ['eee']}",
"s": "from collections import defaultdict\nd = defaultdict(list)\nfor w in input().split():\n    d[len(w)].append(w)\nprint(dict(sorted(d.items())))",
"e": "defaultdict(list) తో key లేకపోయినా list auto create అవుతుంది."
},
{
"l": 102,
"t": "Counter closure",
"i": "3",
"o": "1\n2\n3",
"s": "def make():\n    c = 0\n    def inc():\n        nonlocal c\n        c += 1\n        return c\n    return inc\nf = make()\nfor _ in range(int(input())):\n    print(f())",
"e": "inc() outer variable c ని nonlocal తో మారుస్తుంది; state గుర్తుంటుంది."
},
{
"l": 102,
"t": "Multiplier factory",
"i": "3 5",
"o": "15",
"s": "def mul(n):\n    return lambda x: x * n\nn, x = map(int, input().split())\nprint(mul(n)(x))",
"e": "mul(n) ఒక function return చేస్తుంది, అది n ని గుర్తుంచుకుంటుంది."
},
{
"l": 102,
"t": "Logging decorator",
"i": "2 3",
"o": "calling add\n5",
"s": "def log(fn):\n    def w(*a):\n        print('calling', fn.__name__)\n        return fn(*a)\n    return w\n@log\ndef add(a, b):\n    return a + b\nx, y = map(int, input().split())\nprint(add(x, y))",
"e": "@log అంటే add = log(add); wrapper ముందు print చేసి original call చేస్తుంది."
},
{
"l": 102,
"t": "Memoized Fibonacci",
"i": "30",
"o": "832040",
"s": "def memo(fn):\n    c = {}\n    def w(n):\n        if n not in c:\n            c[n] = fn(n)\n        return c[n]\n    return w\n@memo\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\nprint(fib(int(input())))",
"e": "Cache dict తో repeated calls తప్పించాం: exponential time → linear."
},
{
"l": 102,
"t": "Repeat decorator with argument",
"i": "3",
"o": "Hi\nHi\nHi",
"s": "n = int(input())\ndef repeat(k):\n    def deco(fn):\n        def w():\n            for _ in range(k):\n                fn()\n        return w\n    return deco\n@repeat(n)\ndef hi():\n    print('Hi')\nhi()",
"e": "Arguments ఉన్న decorator = 3 levels: repeat(k) → deco(fn) → w()."
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
"l": 103,
"t": "Longest palindromic substring",
"i": "babad",
"o": "bab",
"s": "s = input()\ndef ex(l, r):\n    while l >= 0 and r < len(s) and s[l] == s[r]:\n        l -= 1\n        r += 1\n    return s[l + 1:r]\nbest = ''\nfor i in range(len(s)):\n    for c in (ex(i, i), ex(i, i + 1)):\n        if len(c) > len(best):\n            best = c\nprint(best)",
"e": "ప్రతి center నుండి రెండు వైపులా విస్తరించాం (odd, even). O(n²) time, O(1) space.",
"s2": "s = input()\nbest = ''\nfor i in range(len(s)):\n    for j in range(i + 1, len(s) + 1):\n        t = s[i:j]\n        if t == t[::-1] and len(t) > len(best):\n            best = t\nprint(best)",
"e2": "అన్ని substrings check: O(n³). సులభం కానీ నెమ్మది; ఇది baseline."
},
{
"l": 103,
"t": "Longest substring without repeats",
"i": "abcabcbb",
"o": "3",
"s": "s = input()\nlast = {}\nl = best = 0\nfor r, c in enumerate(s):\n    if c in last and last[c] >= l:\n        l = last[c] + 1\n    last[c] = r\n    best = max(best, r - l + 1)\nprint(best)",
"e": "last index dict తో left pointer నేరుగా jump. O(n).",
"s2": "s = input()\nseen = set()\nl = best = 0\nfor r in range(len(s)):\n    while s[r] in seen:\n        seen.remove(s[l])\n        l += 1\n    seen.add(s[r])\n    best = max(best, r - l + 1)\nprint(best)",
"e2": "Set window: duplicate వస్తే left నుండి తొలగిస్తూ కుదిస్తాం. O(n)."
},
{
"l": 103,
"t": "Group anagrams",
"i": "eat tea tan ate nat bat",
"o": "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
"s": "d = {}\nfor w in input().split():\n    d.setdefault(''.join(sorted(w)), []).append(w)\nprint(list(d.values()))",
"e": "Sorted letters key గా group. O(n·k log k).",
"s2": "from collections import defaultdict\nd = defaultdict(list)\nfor w in input().split():\n    k = [0] * 26\n    for c in w:\n        k[ord(c) - 97] += 1\n    d[tuple(k)].append(w)\nprint(list(d.values()))",
"e2": "26-letter count tuple key (list hashable కాదు, tuple అవుతుంది). O(n·k)."
},
{
"l": 103,
"t": "Run-length encoding",
"i": "aaabccdddd",
"o": "a3b1c2d4",
"s": "s = input()\nout = ''\ni = 0\nwhile i < len(s):\n    j = i\n    while j < len(s) and s[j] == s[i]:\n        j += 1\n    out += s[i] + str(j - i)\n    i = j\nprint(out)",
"e": "Manual two-pointer: run చివరి వరకు j కదుపుతాం.",
"s2": "from itertools import groupby\nprint(''.join(k + str(len(list(g))) for k, g in groupby(input())))",
"e2": "groupby వరుస equal items ని group చేస్తుంది: ఒక్క line."
},
{
"l": 103,
"t": "Caesar cipher",
"i": "Hello, World!\n3",
"o": "Khoor, Zruog!",
"s": "t = input()\nk = int(input())\nr = ''\nfor c in t:\n    if c.isalpha():\n        b = 65 if c.isupper() else 97\n        r += chr((ord(c) - b + k) % 26 + b)\n    else:\n        r += c\nprint(r)",
"e": "ord → 0..25 → shift mod 26 → chr; letters కాని వాటిని వదిలేస్తాం.",
"s2": "import string\nt = input()\nk = int(input())\nlo, up = string.ascii_lowercase, string.ascii_uppercase\nprint(t.translate(str.maketrans(lo + up, lo[k:] + lo[:k] + up[k:] + up[:k])))",
"e2": "maketrans mapping table ఒకసారి తయారు చేసి translate: వేగంగా."
},
{
"l": 103,
"t": "Valid brackets",
"i": "{[()]}",
"o": "True",
"s": "s = input()\npair = {')': '(', ']': '[', '}': '{'}\nst = []\nok = True\nfor c in s:\n    if c in '([{':\n        st.append(c)\n    elif not st or st.pop() != pair[c]:\n        ok = False\n        break\nprint(ok and not st)",
"e": "Stack: close bracket కి top open సరిపోవాలి. O(n).",
"s2": "s = input()\nwhile '()' in s or '[]' in s or '{}' in s:\n    s = s.replace('()', '').replace('[]', '').replace('{}', '')\nprint(s == '')",
"e2": "సరిపోయే pairs ని పదే పదే తొలగించాం. చిన్నది కానీ O(n²)."
},
{
"l": 103,
"t": "Word break",
"i": "applepenapple\napple pen",
"o": "True",
"s": "s = input()\nw = set(input().split())\ndp = [True] + [False] * len(s)\nfor i in range(1, len(s) + 1):\n    dp[i] = any(dp[j] and s[j:i] in w for j in range(i))\nprint(dp[-1])",
"e": "dp[i] = prefix i ని words తో తయారు చేయవచ్చా. Bottom-up.",
"s2": "from functools import lru_cache\ns = input()\nw = set(input().split())\n@lru_cache(None)\ndef f(i):\n    return i == len(s) or any(s.startswith(x, i) and f(i + len(x)) for x in w)\nprint(f(0))",
"e2": "Top-down recursion + memo: అవసరమైన states మాత్రమే compute."
},
{
"l": 103,
"t": "Minimum window substring",
"i": "ADOBECODEBANC\nABC",
"o": "BANC",
"s": "from collections import Counter\ns = input()\nt = input()\nneed = Counter(t)\nmiss = len(t)\nl = 0\nbest = ''\nfor r, c in enumerate(s):\n    if need[c] > 0:\n        miss -= 1\n    need[c] -= 1\n    while miss == 0:\n        if not best or r - l + 1 < len(best):\n            best = s[l:r + 1]\n        need[s[l]] += 1\n        if need[s[l]] > 0:\n            miss += 1\n        l += 1\nprint(best)",
"e": "విస్తరించి, అన్నీ దొరికాక కుదించాం. O(n).",
"s2": "from collections import Counter\ns = input()\nt = input()\nneed = Counter(t)\ndef f():\n    for L in range(len(t), len(s) + 1):\n        for i in range(len(s) - L + 1):\n            if not need - Counter(s[i:i + L]):\n                return s[i:i + L]\nprint(f())",
"e2": "Length పెంచుతూ ప్రతి window check: మొదటిది shortest. O(n²·k)."
},
{
"l": 103,
"t": "Decode nested string",
"i": "3[a2[c]]",
"o": "accaccacc",
"s": "s = input()\nst = []\nnum = 0\ncur = ''\nfor c in s:\n    if c.isdigit():\n        num = num * 10 + int(c)\n    elif c == '[':\n        st.append((cur, num))\n        cur, num = '', 0\n    elif c == ']':\n        p, n = st.pop()\n        cur = p + cur * n\n    else:\n        cur += c\nprint(cur)",
"e": "Stack లో (ముందు string, repeat count) దాచాం.",
"s2": "import re\ns = input()\nwhile '[' in s:\n    s = re.sub(r'(\\d+)\\[([a-z]*)\\]', lambda m: m.group(2) * int(m.group(1)), s)\nprint(s)",
"e2": "లోపలి bracket నుండి regex తో expand చేస్తూ బయటకు వచ్చాం."
},
{
"l": 103,
"t": "Longest common subsequence",
"i": "abcde\nace",
"o": "3",
"s": "a = input()\nb = input()\ndp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]\nfor i in range(len(a)):\n    for j in range(len(b)):\n        dp[i + 1][j + 1] = dp[i][j] + 1 if a[i] == b[j] else max(dp[i][j + 1], dp[i + 1][j])\nprint(dp[-1][-1])",
"e": "2D table: match అయితే diagonal+1, లేకపోతే max. O(nm).",
"s2": "from functools import lru_cache\na = input()\nb = input()\n@lru_cache(None)\ndef f(i, j):\n    if i == len(a) or j == len(b):\n        return 0\n    if a[i] == b[j]:\n        return 1 + f(i + 1, j + 1)\n    return max(f(i + 1, j), f(i, j + 1))\nprint(f(0, 0))",
"e2": "Recursion + memo: అదే logic, top-down."
},
{
"l": 104,
"t": "Two sum (indices)",
"i": "2 7 11 15\n9",
"o": "0 1",
"s": "a = list(map(int, input().split()))\nt = int(input())\nseen = {}\nfor i, x in enumerate(a):\n    if t - x in seen:\n        print(seen[t - x], i)\n        break\n    seen[x] = i",
"e": "Hash map లో ఇప్పటి వరకు చూసినవి; complement దొరికితే answer. O(n).",
"s2": "a = list(map(int, input().split()))\nt = int(input())\nprint(*next((i, j) for i in range(len(a)) for j in range(i + 1, len(a)) if a[i] + a[j] == t))",
"e2": "అన్ని pairs check: O(n²)."
},
{
"l": 104,
"t": "Merge intervals",
"i": "[[1,3],[2,6],[8,10],[15,18]]",
"o": "[[1, 6], [8, 10], [15, 18]]",
"s": "import ast\niv = sorted(ast.literal_eval(input()))\nout = []\nfor s, e in iv:\n    if out and s <= out[-1][1]:\n        out[-1][1] = max(out[-1][1], e)\n    else:\n        out.append([s, e])\nprint(out)",
"e": "Start తో sort; overlap అయితే end పొడిగించాం.",
"s2": "import ast\nfrom functools import reduce\niv = sorted(ast.literal_eval(input()))\ndef f(acc, x):\n    if acc and x[0] <= acc[-1][1]:\n        acc[-1][1] = max(acc[-1][1], x[1])\n    else:\n        acc.append(list(x))\n    return acc\nprint(reduce(f, iv, []))",
"e2": "అదే logic reduce తో functional style."
},
{
"l": 104,
"t": "Product except self",
"i": "1 2 3 4",
"o": "[24, 12, 8, 6]",
"s": "a = list(map(int, input().split()))\nn = len(a)\nres = [1] * n\np = 1\nfor i in range(n):\n    res[i] = p\n    p *= a[i]\np = 1\nfor i in range(n - 1, -1, -1):\n    res[i] *= p\n    p *= a[i]\nprint(res)",
"e": "Left products తర్వాత right products గుణించాం. O(n), division లేదు.",
"s2": "from math import prod\na = list(map(int, input().split()))\nprint([prod(a[:i] + a[i + 1:]) for i in range(len(a))])",
"e2": "ప్రతి index కి మిగతా అన్నీ గుణించాం: O(n²)."
},
{
"l": 104,
"t": "Top K frequent",
"i": "1 1 1 2 2 3\n2",
"o": "[1, 2]",
"s": "from collections import Counter\na = input().split()\nk = int(input())\nprint([int(x) for x, _ in Counter(a).most_common(k)])",
"e": "Counter.most_common(k) నేరుగా.",
"s2": "import heapq\nfrom collections import Counter\na = input().split()\nk = int(input())\nc = Counter(a)\nprint([int(x) for x in heapq.nlargest(k, c, key=c.get)])",
"e2": "heap తో top k: O(n log k)."
},
{
"l": 104,
"t": "Longest consecutive sequence",
"i": "100 4 200 1 3 2",
"o": "4",
"s": "s = set(map(int, input().split()))\nbest = 0\nfor x in s:\n    if x - 1 not in s:\n        y = x\n        while y + 1 in s:\n            y += 1\n        best = max(best, y - x + 1)\nprint(best)",
"e": "Sequence ప్రారంభం (x-1 లేనిది) నుండి మాత్రమే count: O(n).",
"s2": "a = sorted(set(map(int, input().split())))\nbest = cur = 1\nfor i in range(1, len(a)):\n    cur = cur + 1 if a[i] == a[i - 1] + 1 else 1\n    best = max(best, cur)\nprint(best)",
"e2": "Sort చేసి scan: O(n log n), సులభం."
},
{
"l": 104,
"t": "Rotate matrix 90° clockwise",
"i": "[[1,2,3],[4,5,6],[7,8,9]]",
"o": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
"s": "import ast\nm = ast.literal_eval(input())\nprint([list(r) for r in zip(*m[::-1])])",
"e": "Rows reverse చేసి zip(*) తో transpose.",
"s2": "import ast\nm = ast.literal_eval(input())\nn = len(m)\nfor i in range(n):\n    for j in range(i + 1, n):\n        m[i][j], m[j][i] = m[j][i], m[i][j]\nfor r in m:\n    r.reverse()\nprint(m)",
"e2": "In-place: transpose చేసి ప్రతి row reverse."
},
{
"l": 104,
"t": "Sliding window maximum",
"i": "1 3 -1 -3 5 3 6 7\n3",
"o": "[3, 3, 5, 5, 6, 7]",
"s": "from collections import deque\na = list(map(int, input().split()))\nk = int(input())\ndq = deque()\nout = []\nfor i, x in enumerate(a):\n    while dq and a[dq[-1]] <= x:\n        dq.pop()\n    dq.append(i)\n    if dq[0] <= i - k:\n        dq.popleft()\n    if i >= k - 1:\n        out.append(a[dq[0]])\nprint(out)",
"e": "Decreasing deque: front లో ఎప్పుడూ max index. O(n).",
"s2": "a = list(map(int, input().split()))\nk = int(input())\nprint([max(a[i:i + k]) for i in range(len(a) - k + 1)])",
"e2": "ప్రతి window లో max(): O(n·k)."
},
{
"l": 104,
"t": "Count subarrays with sum K",
"i": "3 4 7 2 -3 1 4 2\n7",
"o": "4",
"s": "from collections import defaultdict\na = list(map(int, input().split()))\nk = int(input())\nc = defaultdict(int)\nc[0] = 1\ns = res = 0\nfor x in a:\n    s += x\n    res += c[s - k]\n    c[s] += 1\nprint(res)",
"e": "Prefix sum: s-k ముందు ఎన్నిసార్లు వచ్చిందో count. O(n).",
"s2": "a = list(map(int, input().split()))\nk = int(input())\nprint(sum(sum(a[i:j]) == k for i in range(len(a)) for j in range(i + 1, len(a) + 1)))",
"e2": "అన్ని subarrays: O(n³) (negatives ఉన్నప్పుడు window పనిచేయదు)."
},
{
"l": 104,
"t": "Kth largest element",
"i": "3 2 1 5 6 4\n2",
"o": "5",
"s": "import heapq\na = list(map(int, input().split()))\nk = int(input())\nh = a[:k]\nheapq.heapify(h)\nfor x in a[k:]:\n    if x > h[0]:\n        heapq.heapreplace(h, x)\nprint(h[0])",
"e": "Size-k min-heap: root = kth largest. O(n log k).",
"s2": "a = sorted(map(int, input().split()), reverse=True)\nprint(a[int(input()) - 1])",
"e2": "Sort చేసి index: O(n log n), సులభం."
},
{
"l": 104,
"t": "Search in rotated sorted array",
"i": "4 5 6 7 0 1 2\n0",
"o": "4",
"s": "a = list(map(int, input().split()))\nt = int(input())\nlo, hi = 0, len(a) - 1\nres = -1\nwhile lo <= hi:\n    m = (lo + hi) // 2\n    if a[m] == t:\n        res = m\n        break\n    if a[lo] <= a[m]:\n        if a[lo] <= t < a[m]:\n            hi = m - 1\n        else:\n            lo = m + 1\n    else:\n        if a[m] < t <= a[hi]:\n            lo = m + 1\n        else:\n            hi = m - 1\nprint(res)",
"e": "ఏ half sorted గా ఉందో చూసి binary search: O(log n).",
"s2": "a = list(map(int, input().split()))\nt = int(input())\nprint(a.index(t) if t in a else -1)",
"e2": "Linear search: O(n). సరైనదే కానీ rotated structure వాడలేదు."
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
}
];
