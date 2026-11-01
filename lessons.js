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
"id": 101,
"level": "p",
"title": "A1. Comprehensions & Generators",
"te": "List/dict/set comprehensions తో ఒక్క line లో collections build చేయవచ్చు. Generator (yield) values ని lazy గా ఇస్తుంది, memory save అవుతుంది. enumerate, zip, sorted(key=) advanced code లో తరచుగా వాడతారు.",
"code": "squares = [x * x for x in range(1, 6) if x % 2]\nwords = {w: len(w) for w in ['py', 'code']}\ndef evens(n):\n    for i in range(n):\n        if i % 2 == 0:\n            yield i\nprint(squares, words, list(evens(10)))",
"notes": []
},
{
"id": 102,
"level": "p",
"title": "A2. Decorators & Closures",
"te": "Closure అంటే outer function variables ని గుర్తుంచుకునే inner function. Decorator ఒక function ని wrap చేసి కొత్త behavior add చేస్తుంది (@decorator). functools.wraps metadata కాపాడుతుంది.",
"code": "import functools\ndef log(fn):\n    @functools.wraps(fn)\n    def wrapper(*a, **k):\n        print('calling', fn.__name__)\n        return fn(*a, **k)\n    return wrapper\n@log\ndef add(a, b):\n    return a + b\nprint(add(2, 3))",
"notes": []
},
{
"id": 103,
"level": "p",
"title": "A3. Strings: Deep Dive",
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
"id": 104,
"level": "p",
"title": "A4. Lists, Tuples, Sets & Dicts: Deep Dive",
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
}
];
