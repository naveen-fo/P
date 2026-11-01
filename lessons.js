window.PY_LESSONS = [
{
"id": 1,
"title": "1. Introduction to Python",
"te": "Python అనేది సులభమైన, శక్తివంతమైన programming language. 1991లో Guido van Rossum దీన్ని తయారు చేశారు. Web, AI, data science, automation అన్నింటిలో వాడతారు.",
"code": "print(\"Hello, World!\")\nprint(\"Python నేర్చుకుందాం!\")",
"level": "b",
"notes": []
},
{
"id": 2,
"title": "2. Variables & Constants",
"te": "Variable అంటే data ని memory లో store చేసే పేరు. Type declare చేయాల్సిన అవసరం లేదు (dynamic typing). Constants ని UPPERCASE లో రాస్తాం.",
"code": "name = \"Python\"\nage = 30\nPI = 3.14159\nprint(name, age, PI)",
"level": "b",
"notes": [
[
"Naming rules",
"Letter/underscore తో start; letters, numbers, _ మాత్రమే; keywords వాడకూడదు; case-sensitive"
],
[
"UPPERCASE",
"Constants కి convention (PI, MAX_USERS)"
]
]
},
{
"id": 3,
"title": "3. Data Types",
"te": "Python లో int, float, complex, str, list, tuple, range, set, dict వంటి built-in types ఉన్నాయి. type() తో type చూడొచ్చు; int(), float(), str() తో convert చేయొచ్చు.",
"code": "print(type(10), type(3.14), type(\"hi\"))\nprint(int(\"100\") + 5)",
"level": "b",
"notes": [
[
"int, float, complex",
"Numeric types"
],
[
"str",
"Text type"
],
[
"list, tuple, range",
"Sequence types"
],
[
"set, frozenset",
"Unordered, unique"
],
[
"dict",
"Key-value mapping"
],
[
"int() float() str() list()",
"Type casting functions"
]
]
},
{
"id": 4,
"title": "4. Operators",
"te": "Arithmetic (+ - * / % // **), comparison (== != > <), logical (and or not) operators తో calculations చేస్తాం. Precedence: () తర్వాత **, తర్వాత * /, తర్వాత + -.",
"code": "a, b = 10, 3\nprint(a + b, a - b, a * b)\nprint(a / b, a % b, a // b, a ** b)\nprint(a > b and b > 1)",
"level": "b",
"notes": []
},
{
"id": 5,
"title": "5. Conditional Statements",
"te": "if, elif, else తో condition ఆధారంగా code run చేయవచ్చు. Indentation (4 spaces) తప్పనిసరి.",
"code": "marks = 85\nif marks >= 90:\n    print(\"Grade: A\")\nelif marks >= 75:\n    print(\"Grade: B\")\nelse:\n    print(\"Fail\")",
"level": "b",
"notes": []
},
{
"id": 6,
"title": "6. Loops",
"te": "for loop sequence మీద తిరుగుతుంది; while loop condition True ఉన్నంత వరకు run అవుతుంది. break loop ని ఆపుతుంది, continue ఒక iteration skip చేస్తుంది.",
"code": "for num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)\ncount = 1\nwhile count <= 3:\n    print(\"count\", count)\n    count += 1",
"level": "b",
"notes": []
},
{
"id": 7,
"title": "7. Strings",
"te": "String అంటే characters sequence (immutable). upper(), lower(), strip(), split(), join(), replace() methods ఉపయోగపడతాయి. f-strings recommended.",
"code": "s = \"  hello python  \"\nprint(s.strip().upper())\nname = \"Alice\"\nprint(f\"My name is {name}\")\nprint(\",\".join([\"a\", \"b\", \"c\"]))",
"level": "b",
"notes": [
[
"upper() / lower()",
"Uppercase / lowercase"
],
[
"strip()",
"Spaces తీసేస్తుంది"
],
[
"split() / join()",
"List ↔ string"
],
[
"replace(old, new)",
"Substring replace"
],
[
"find(x)",
"మొదటి index"
],
[
"count(x)",
"Occurrences count"
],
[
"startswith(x) / endswith(x)",
"Start / end check"
]
]
},
{
"id": 8,
"title": "8. Lists & Tuples",
"te": "List ordered మరియు mutable: append(), insert(), remove(), pop(), sort() ఉన్నాయి. Tuple immutable — ఒకసారి create చేస్తే మార్చలేం.",
"code": "nums = [10, 20, 30]\nnums.append(40)\nnums.sort(reverse=True)\nprint(nums, nums[1:3])\nt = (1, 2, 3)\nprint(t[0], len(t))",
"level": "b",
"notes": [
[
"append(x)",
"End లో add"
],
[
"extend(iterable)",
"Multiple elements add"
],
[
"insert(i, x)",
"Index i దగ్గర add"
],
[
"remove(x)",
"మొదటి x తొలగింపు"
],
[
"pop(i)",
"Remove + return (default last)"
],
[
"clear()",
"అన్నీ తొలగింపు"
],
[
"index(x) / count(x)",
"Index / occurrences"
],
[
"sort() / reverse()",
"In-place sort / reverse"
],
[
"copy()",
"List copy"
],
[
"Tuple",
"count, index, len, max, min, sum, sorted"
]
]
},
{
"id": 9,
"title": "9. Sets & Dictionaries",
"te": "Set లో unique elements మాత్రమే ఉంటాయి (union, intersection, difference). Dictionary key-value pairs store చేస్తుంది: keys(), values(), items(), get().",
"code": "A, B = {1, 2, 3}, {3, 4}\nprint(A | B, A & B, A - B)\nstudent = {\"name\": \"Alice\", \"age\": 21}\nfor k, v in student.items():\n    print(k, v)",
"level": "b",
"notes": [
[
"add(x)",
"Set లో add"
],
[
"remove(x) / discard(x)",
"Remove (remove → error if missing)"
],
[
"pop()",
"Random element తొలగింపు"
],
[
"union / intersection",
"A|B, A&B"
],
[
"difference / symmetric_difference",
"A-B / either but not both"
],
[
"isdisjoint(B)",
"Common elements లేవా?"
],
[
"keys() values() items()",
"Dict views"
],
[
"get(x)",
"Value (None if missing)"
],
[
"pop(x) / update(B)",
"Remove key / merge"
],
[
"setdefault(x, y)",
"Value లేకపోతే y set"
],
[
"fromkeys(it, v)",
"Default values తో dict"
]
]
},
{
"id": 10,
"title": "10. Functions",
"te": "def తో function define చేస్తాం. Positional, default, keyword arguments, *args, **kwargs, return ఉన్నాయి. lambda తో చిన్న functions రాయవచ్చు.",
"code": "def greet(name=\"Guest\"):\n    return f\"Hello, {name}!\"\nprint(greet(), greet(\"Nihar\"))\nsquare = lambda x: x * x\nprint(list(map(square, [1, 2, 3])))",
"level": "b",
"notes": []
},
{
"id": 11,
"title": "11. OOP",
"te": "Class ఒక blueprint, object దాని instance. __init__ constructor. Inheritance, polymorphism, encapsulation OOP ముఖ్య concepts.",
"code": "class Animal:\n    def speak(self):\n        print(\"Animal sound\")\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\nDog().speak()",
"level": "b",
"notes": []
},
{
"id": 12,
"title": "12. Exception Handling",
"te": "try-except తో errors handle చేస్తాం, program crash అవ్వదు. finally ఎప్పుడూ run అవుతుంది. raise తో మనమే exception పెంచవచ్చు.",
"code": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nfinally:\n    print(\"Done\")",
"level": "b",
"notes": []
},
{
"id": 13,
"title": "13. File Handling",
"te": "open() తో files read/write చేస్తాం. with statement file ని auto close చేస్తుంది. Modes: r (read), w (overwrite), a (append).",
"code": "with open(\"sample.txt\", \"w\") as f:\n    f.write(\"Hello, Python!\\n\")\nwith open(\"sample.txt\", \"r\") as f:\n    print(f.read())",
"level": "b",
"notes": []
},
{
"id": 14,
"title": "14. Modules",
"te": "Module అంటే reusable Python code ఉన్న .py file. import, from … import, as తో వాడతాం. math, random, datetime, os, sys, json, csv, re standard library లో ఉన్నాయి. External libraries కోసం pip install వాడతాం.",
"code": "import math, random, json\nfrom datetime import datetime\nprint(math.sqrt(16), math.factorial(5))\nprint(random.randint(1, 10))\ndata = {\"name\": \"Nihar\", \"age\": 25}\ns = json.dumps(data)\nprint(s, json.loads(s)[\"name\"])\nprint(datetime.now().year)",
"level": "b",
"notes": []
},
{
"id": 15,
"title": "15. Python Libraries",
"te": "Data analysis కి NumPy, Pandas; visualization కి Matplotlib, Seaborn; machine learning కి Scikit-learn; web scraping కి Requests, BeautifulSoup; automation కి Selenium; databases కి sqlite3, MySQL Connector. ఇవి pip install తో install చేయాలి.",
"code": "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"INSERT INTO users (name) VALUES ('Alice')\")\nconn.commit()\nprint(cur.execute(\"SELECT * FROM users\").fetchall())",
"level": "b",
"notes": []
},
{
"id": 16,
"title": "16. Working with APIs",
"te": "API అంటే applications ఒకదానితో ఒకటి మాట్లాడుకునే పద్ధతి. REST APIs లో GET (data తీసుకో), POST (పంపు), PUT (update), DELETE (తొలగించు) methods ఉంటాయి. requests module తో call చేసి response.json() తో JSON parse చేస్తాం.",
"code": "# మీ PC లో: pip install requests\n# import requests\n# r = requests.get(\"https://jsonplaceholder.typicode.com/posts/1\")\n# print(r.status_code, r.json())\nimport json\nresponse = '{\"id\": 1, \"name\": \"Alice\", \"email\": \"alice@example.com\"}'\nuser = json.loads(response)\nprint(user[\"name\"], user[\"email\"])",
"level": "b",
"notes": []
},
{
"id": 17,
"title": "17. Web Development with Flask",
"te": "Flask ఒక lightweight web framework. @app.route తో URLs ని functions కి map చేస్తాం; dynamic routes (<name>) మరియు forms (request.form) support చేస్తుంది. Flask browser లో run కాదు — మీ computer లో pip install flask చేసి python app.py run చేయండి.",
"code": "from flask import Flask\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef home():\n    return \"Hello, Flask!\"\n\n@app.route(\"/user/<name>\")\ndef user(name):\n    return f\"Hello, {name}!\"\n\nif __name__ == \"__main__\":\n    app.run(debug=True)",
"level": "b",
"notes": []
},
{
"id": 201,
"level": "p",
"title": "1. Introduction to Python",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "print(\"Hello, World!\")\nprint(\"Python నేర్చుకుందాం!\")",
"notes": []
},
{
"id": 202,
"level": "p",
"title": "2. Variables & Constants",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "name = \"Python\"\nage = 30\nPI = 3.14159\nprint(name, age, PI)",
"notes": []
},
{
"id": 203,
"level": "p",
"title": "3. Data Types",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "print(type(10), type(3.14), type(\"hi\"))\nprint(int(\"100\") + 5)",
"notes": []
},
{
"id": 204,
"level": "p",
"title": "4. Operators",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "a, b = 10, 3\nprint(a + b, a - b, a * b)\nprint(a / b, a % b, a // b, a ** b)\nprint(a > b and b > 1)",
"notes": []
},
{
"id": 205,
"level": "p",
"title": "5. Conditional Statements",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "marks = 85\nif marks >= 90:\n    print(\"Grade: A\")\nelif marks >= 75:\n    print(\"Grade: B\")\nelse:\n    print(\"Fail\")",
"notes": []
},
{
"id": 206,
"level": "p",
"title": "6. Loops",
"te": "Loops లో iteration protocol, comprehensions, generators, enumerate/zip, itertools, loop-else patterns deep గా చూద్దాం. సరైన loop ఎంచుకోవడం time మరియు memory మీద ప్రభావం చూపుతుంది.",
"code": "for num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)\ncount = 1\nwhile count <= 3:\n    print(\"count\", count)\n    count += 1",
"notes": [
[
"Iteration protocol",
"for x in obj → iter(obj), తర్వాత next() పదే పదే; StopIteration తో ఆగుతుంది."
],
[
"Comprehension vs generator",
"[ ] అన్నీ memory లో; ( ) generator lazy, ఒక్కొక్కటి ఇస్తుంది."
],
[
"enumerate / zip",
"Index మరియు parallel iteration; range(len()) అవసరం లేదు."
],
[
"itertools",
"count, chain, groupby, combinations, accumulate loops తగ్గిస్తాయి."
],
[
"for-else",
"break కాకపోతే else run అవుతుంది (search patterns)."
],
[
"Complexity",
"Nested loops O(n²); dict/set తో O(n) కి తగ్గించవచ్చు."
]
]
},
{
"id": 207,
"level": "p",
"title": "7. Strings",
"te": "String immutable sequence: ప్రతి operation కొత్త string create చేస్తుంది. Advanced problems లో slicing, sliding window, two pointers, stack, DP, Counter, regex కలిపి వాడతాం. ఒకే problem ని brute force మరియు optimized రెండు approaches తో చూడండి; time complexity తేడా అర్థమవుతుంది.",
"code": "from collections import Counter\ns = 'level'\nprint(s[::-1] == s)\nprint(Counter('banana').most_common(2))\nprint(''.join(sorted('python')))",
"notes": [
[
"Immutability",
"s[0]='x' error. s += c loop లో O(n²) అవ్వచ్చు; list లో collect చేసి ''.join() వాడండి."
],
[
"Slicing",
"s[a:b:c]; negative step reverse; range దాటినా error రాదు."
],
[
"ord / chr",
"Character ↔ Unicode number. Caesar cipher, hashing లో వాడతాం."
],
[
"Counter",
"Frequency map; most_common(k); రెండు Counters తీసివేయవచ్చు (need - have)."
],
[
"Two pointers",
"Palindrome, expand-around-center: O(n) లేదా O(n²) తో."
],
[
"Sliding window",
"Window [l, r] పెంచుతూ/తగ్గిస్తూ substring problems O(n) లో."
],
[
"DP on strings",
"LCS, word break: overlapping subproblems → table లేదా lru_cache."
],
[
"Stack",
"Brackets, nested decode: ఇటీవలి open item ముందు close అవుతుంది."
]
]
},
{
"id": 208,
"level": "p",
"title": "8. Lists & Tuples",
"te": "List dynamic array, tuple immutable మరియు hashable, set/dict hash tables (membership O(1) average). Complexity తెలిస్తే సరైన structure ఎంచుకోవచ్చు. heapq, bisect, deque, Counter, defaultdict advanced problems కి కీలకం. ప్రతి problem కి రెండు approaches ఉన్నాయి.",
"code": "import heapq\nfrom collections import deque, Counter\nh = [5, 1, 3]\nheapq.heapify(h)\nprint(heapq.heappop(h))\nd = deque([1, 2, 3])\nd.appendleft(0)\nprint(d, Counter('aab'))",
"notes": [
[
"Complexity",
"list: append O(1), insert(0)/pop(0) O(n), x in list O(n). set/dict: x in O(1) avg."
],
[
"Shallow vs deep copy",
"a[:] / copy() nested objects share చేస్తాయి; copy.deepcopy పూర్తిగా వేరు."
],
[
"sorted(key=)",
"Stable sort: ties original order లోనే ఉంటాయి."
],
[
"heapq",
"Min-heap: heappush/heappop O(log n), nlargest(k, it)."
],
[
"bisect",
"Sorted list లో binary search: bisect_left/right, insort."
],
[
"deque",
"రెండు చివరల్లో O(1): sliding window, BFS."
],
[
"defaultdict / Counter",
"Missing key default; frequency counting."
],
[
"Prefix sums",
"Running total + dict తో subarray problems O(n)."
]
]
},
{
"id": 209,
"level": "p",
"title": "9. Sets & Dictionaries",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "A, B = {1, 2, 3}, {3, 4}\nprint(A | B, A & B, A - B)\nstudent = {\"name\": \"Alice\", \"age\": 21}\nfor k, v in student.items():\n    print(k, v)",
"notes": []
},
{
"id": 210,
"level": "p",
"title": "10. Functions",
"te": "Functions first-class objects: variables లో store, arguments గా pass, return చేయవచ్చు. Closures, decorators, recursion + memoization, default argument pitfalls, functools deep గా నేర్చుకోండి.",
"code": "def greet(name=\"Guest\"):\n    return f\"Hello, {name}!\"\nprint(greet(), greet(\"Nihar\"))\nsquare = lambda x: x * x\nprint(list(map(square, [1, 2, 3])))",
"notes": [
[
"First-class functions",
"def f ఒక object; map(f, data), sorted(key=f) లో pass చేస్తాం."
],
[
"Mutable default trap",
"def f(x, a=[]) లో a ఒకసారే create అవుతుంది; None వాడి లోపల create చేయండి."
],
[
"Closures",
"Inner function outer variables గుర్తుంచుకుంటుంది; nonlocal తో మార్చగలం."
],
[
"Decorators",
"f = deco(f); wrapper లో before/after logic; functools.wraps metadata కాపాడుతుంది."
],
[
"Recursion",
"Base case + చిన్న subproblem; overlapping calls కి lru_cache."
],
[
"functools",
"partial (arguments fix), reduce (fold), lru_cache (memo)."
]
]
},
{
"id": 211,
"level": "p",
"title": "11. OOP",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "class Animal:\n    def speak(self):\n        print(\"Animal sound\")\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\nDog().speak()",
"notes": []
},
{
"id": 212,
"level": "p",
"title": "12. Exception Handling",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nfinally:\n    print(\"Done\")",
"notes": []
},
{
"id": 213,
"level": "p",
"title": "13. File Handling",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "with open(\"sample.txt\", \"w\") as f:\n    f.write(\"Hello, Python!\\n\")\nwith open(\"sample.txt\", \"r\") as f:\n    print(f.read())",
"notes": []
},
{
"id": 214,
"level": "p",
"title": "14. Modules",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "import math, random, json\nfrom datetime import datetime\nprint(math.sqrt(16), math.factorial(5))\nprint(random.randint(1, 10))\ndata = {\"name\": \"Nihar\", \"age\": 25}\ns = json.dumps(data)\nprint(s, json.loads(s)[\"name\"])\nprint(datetime.now().year)",
"notes": []
},
{
"id": 215,
"level": "p",
"title": "15. Python Libraries",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"INSERT INTO users (name) VALUES ('Alice')\")\nconn.commit()\nprint(cur.execute(\"SELECT * FROM users\").fetchall())",
"notes": []
},
{
"id": 216,
"level": "p",
"title": "16. Working with APIs",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "# మీ PC లో: pip install requests\n# import requests\n# r = requests.get(\"https://jsonplaceholder.typicode.com/posts/1\")\n# print(r.status_code, r.json())\nimport json\nresponse = '{\"id\": 1, \"name\": \"Alice\", \"email\": \"alice@example.com\"}'\nuser = json.loads(response)\nprint(user[\"name\"], user[\"email\"])",
"notes": []
},
{
"id": 217,
"level": "p",
"title": "17. Web Development with Flask",
"te": "Deep explanation మరియు 10 complex problems ఈ lesson కి త్వరలో add అవుతాయి.",
"code": "from flask import Flask\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef home():\n    return \"Hello, Flask!\"\n\n@app.route(\"/user/<name>\")\ndef user(name):\n    return f\"Hello, {name}!\"\n\nif __name__ == \"__main__\":\n    app.run(debug=True)",
"notes": []
}
];
