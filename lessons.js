window.PY_LESSONS = [
{
"id": 1,
"title": "1. Introduction to Python",
"te": "Python అనేది సులభమైన, శక్తివంతమైన programming language. 1991లో Guido van Rossum దీన్ని తయారు చేశారు. Web, AI, data science, automation అన్నింటిలో వాడతారు.",
"code": "print(\"Hello, World!\")\nprint(\"Python నేర్చుకుందాం!\")",
"level": "b",
"notes": [
[
"What is Python",
"High-level, interpreted, general-purpose language. Guido van Rossum 1991 లో release చేశారు. Procedural, object-oriented, functional paradigms support చేస్తుంది."
],
[
"Key characteristics",
"Interpreted (line by line execute), dynamically typed (type declare అక్కర్లేదు), cross-platform (Windows/macOS/Linux), extensible (C, C++, Java తో integrate)."
],
[
"History",
"1.0 (1991) initial; 2.0 (2000) list comprehensions; 3.0 (2008) Unicode, print() function; 3.6+ f-strings, type hints, async/await; 3.10+ pattern matching. Python 2 support 2020 లో ముగిసింది."
],
[
"Applications",
"Web (Flask, Django), data science (NumPy, Pandas), AI (TensorFlow, PyTorch), automation (Selenium, BeautifulSoup), game dev (Pygame), IoT (MicroPython)."
],
[
"Setup",
"python.org నుండి install; python --version తో verify; editors: IDLE, Thonny, VS Code, PyCharm, Jupyter; libraries కి pip install."
],
[
"Interactive vs script mode",
"'python' అని type చేస్తే REPL (Read-Eval-Print Loop, >>> prompt): quick tests కి. 'python file.py' script mode. REPL లో help(), exit(), _ (చివరి result)."
]
]
},
{
"id": 2,
"title": "2. Variables & Constants",
"te": "Variable అంటే data ని memory లో store చేసే పేరు. Type declare చేయాల్సిన అవసరం లేదు (dynamic typing). Constants ని UPPERCASE లో రాస్తాం.",
"code": "name = \"Python\"\nage = 30\nPI = 3.14159\nprint(name, age, PI)",
"level": "b",
"notes": [
[
"Syntax rules",
"Statements కొత్త line లో ముగుస్తాయి (semicolon అక్కర్లేదు); indentation blocks ని define చేస్తుంది; Python case-sensitive (Var ≠ var); colon (:) code block మొదలుపెడుతుంది."
],
[
"Indentation",
"4 spaces వాడండి (PEP 8); spaces, tabs కలపకండి; తప్పైతే IndentationError."
],
[
"Dynamic typing",
"Variable కి type declare చేయక్కర్లేదు; తర్వాత వేరే type value కూడా ఇవ్వొచ్చు."
],
[
"input() / print()",
"input() ఎల్లప్పుడూ string ఇస్తుంది → int()/float() తో convert. print(sep=, end=), f-strings (recommended), format(), \\n new line, \\t tab."
],
[
"Comments",
"# single-line; triple quotes multi-line. Documentation, code disable, logic వివరణ కోసం."
],
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
"Mutability",
"list, set, dict mutable; tuple, str, frozenset immutable."
],
[
"type() & casting",
"type(x) తో type చూడొచ్చు; int('100'), float(b), str(), list() తో convert."
],
[
"range",
"range(start, stop, step): stop exclusive; list(range(1, 10, 2)) → [1, 3, 5, 7, 9]."
],
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
"notes": [
[
"Arithmetic",
"+ - * / % // **: 7/2=3.5, 7%2=1, 7//2=3, 2**3=8."
],
[
"Comparison & logical",
"== != > < >= <= bool ఇస్తాయి; and, or, not conditions కలుపుతాయి."
],
[
"Bitwise",
"5&3=1, 5|3=7, 5^3=6, ~5=-6, 5<<1=10, 5>>1=2 (binary bits మీద)."
],
[
"Assignment",
"= += -= *= /= %= //= **= (x += 3 అంటే x = x + 3)."
],
[
"Identity & membership",
"is / is not: ఒకే object కా (memory). == values సమానమా. in / not in: sequence లో ఉందా."
],
[
"Precedence",
"() > ** > unary > * / // % > + - > shifts > & > ^ > | > comparisons > not > and > or > =. 2 + 3 * 4 = 14, (2 + 3) * 4 = 20."
]
]
},
{
"id": 5,
"title": "5. Conditional Statements",
"te": "if, elif, else తో condition ఆధారంగా code run చేయవచ్చు. Indentation (4 spaces) తప్పనిసరి.",
"code": "marks = 85\nif marks >= 90:\n    print(\"Grade: A\")\nelif marks >= 75:\n    print(\"Grade: B\")\nelse:\n    print(\"Fail\")",
"level": "b",
"notes": [
[
"if",
"Condition True అయితేనే block run; False అయితే skip. Indentation తప్పనిసరి."
],
[
"if-else",
"if condition False అయినప్పుడు else block run అవుతుంది."
],
[
"if-elif-else",
"పై నుండి కిందకి check; మొదటి True block మాత్రమే run, ఏదీ కాకపోతే else."
],
[
"Truthiness",
"0, '', [], None → False; మిగతావి True."
],
[
"Ternary",
"grade = 'A' if m >= 90 else 'B': ఒకే line లో decision."
]
]
},
{
"id": 6,
"title": "6. Loops",
"te": "for loop sequence మీద తిరుగుతుంది; while loop condition True ఉన్నంత వరకు run అవుతుంది. break loop ని ఆపుతుంది, continue ఒక iteration skip చేస్తుంది.",
"code": "for num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)\ncount = 1\nwhile count <= 3:\n    print(\"count\", count)\n    count += 1",
"level": "b",
"notes": [
[
"for loop",
"Sequence (list, tuple, string, range) మీద తిరుగుతుంది; end రాగానే ఆగుతుంది. range(1, 6) → 1..5."
],
[
"while loop",
"Condition True ఉన్నంత run; iterations ముందే తెలియనప్పుడు. while True: అంతులేని loop (జాగ్రత్త)."
],
[
"Nested loops",
"Outer ప్రతి iteration కి inner loop పూర్తిగా run అవుతుంది."
],
[
"break",
"Loop ని వెంటనే ఆపుతుంది."
],
[
"continue",
"ఈ iteration మిగతా code skip చేసి తర్వాతదానికి వెళ్తుంది."
],
[
"pass",
"ఏమీ చేయదు; ఖాళీ block కి placeholder."
]
]
},
{
"id": 7,
"title": "7. Strings",
"te": "String అంటే characters sequence (immutable). upper(), lower(), strip(), split(), join(), replace() methods ఉపయోగపడతాయి. f-strings recommended.",
"code": "s = \"  hello python  \"\nprint(s.strip().upper())\nname = \"Alice\"\nprint(f\"My name is {name}\")\nprint(\",\".join([\"a\", \"b\", \"c\"]))",
"level": "b",
"notes": [
[
"String",
"Characters immutable sequence; indexing, slicing, methods ఉన్నాయి."
],
[
"Formatting",
"f'My name is {name}' (3.6+, recommended), 'text {}'.format(x), % operator."
],
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
"List",
"Ordered, mutable, duplicates allow, వేర్వేరు types ఒకే list లో."
],
[
"Indexing & slicing",
"nums[0] మొదటిది, nums[-1] చివరిది, nums[1:4] → index 1..3."
],
[
"Tuple",
"Ordered, immutable; ఒక్క element tuple కి comma తప్పనిసరి: (42,)."
],
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
"Set",
"Unordered, unique elements; ఖాళీ set కి set() వాడండి ({} dict అవుతుంది)."
],
[
"Dictionary",
"Key-value structure, fast lookup: {'name': 'Alice', 'age': 21}."
],
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
"notes": [
[
"Defining",
"def name(params): ... తో define; name(args) తో call."
],
[
"Arguments",
"Positional (position ప్రకారం), default (ఇవ్వకపోతే default), keyword (name=value, order ముఖ్యం కాదు)."
],
[
"*args / **kwargs",
"*args → extra positional tuple గా; **kwargs → extra keyword dict గా."
],
[
"return",
"Value తిరిగి ఇస్తుంది; multiple values tuple గా: a, b = f()."
],
[
"Scope",
"Local variable function లోనే; global అన్ని చోట్లా; function లో global మార్చాలంటే global keyword."
],
[
"Recursion & lambda",
"Recursion కి base case తప్పనిసరి (factorial(0)=1). lambda: ఒక expression తో anonymous function; map(), filter(), reduce() తో."
]
]
},
{
"id": 11,
"title": "11. OOP",
"te": "Class ఒక blueprint, object దాని instance. __init__ constructor. Inheritance, polymorphism, encapsulation OOP ముఖ్య concepts.",
"code": "class Animal:\n    def speak(self):\n        print(\"Animal sound\")\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\nDog().speak()",
"level": "b",
"notes": [
[
"Class & object",
"Class = blueprint, object = దాని instance; Python లో అన్నీ objects."
],
[
"__init__",
"Constructor: object create అయినప్పుడు attributes initialize చేస్తుంది."
],
[
"Instance vs class variable",
"self.x ప్రతి object కి వేరు; class variable అన్ని objects మధ్య shared."
],
[
"Inheritance",
"Single, multiple, multilevel, hierarchical, hybrid. Child, parent methods reuse/override చేస్తుంది."
],
[
"Polymorphism",
"ఒకే method పేరు వేర్వేరు classes లో వేర్వేరుగా పనిచేస్తుంది."
],
[
"Encapsulation & abstraction",
"__var private; ABC + @abstractmethod తో interface మాత్రమే ఇస్తాం. Magic methods: __str__, __len__, __add__, __eq__."
]
]
},
{
"id": 12,
"title": "12. Exception Handling",
"te": "try-except తో errors handle చేస్తాం, program crash అవ్వదు. finally ఎప్పుడూ run అవుతుంది. raise తో మనమే exception పెంచవచ్చు.",
"code": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nfinally:\n    print(\"Done\")",
"level": "b",
"notes": [
[
"Error రకాలు",
"Syntax Error (interpreter అర్థం చేసుకోలేనిది), Exception/Runtime Error (run లో invalid operation)."
],
[
"Common exceptions",
"ZeroDivisionError, ValueError, TypeError, IndexError (index range దాటింది), KeyError (key లేదు), FileNotFoundError."
],
[
"try / except",
"Risky code try లో; error వస్తే except లో handle: program crash అవ్వదు. except (A, B) as e."
],
[
"finally",
"Error వచ్చినా రాకపోయినా run: file/database connection close చేయడానికి."
],
[
"raise & custom",
"raise ValueError('...'); class MyError(Exception): custom exception."
]
]
},
{
"id": 13,
"title": "13. File Handling",
"te": "open() తో files read/write చేస్తాం. with statement file ని auto close చేస్తుంది. Modes: r (read), w (overwrite), a (append).",
"code": "with open(\"sample.txt\", \"w\") as f:\n    f.write(\"Hello, Python!\\n\")\nwith open(\"sample.txt\", \"r\") as f:\n    print(f.read())",
"level": "b",
"notes": [
[
"open() / close()",
"file = open('name', 'mode'); తర్వాత close(); best practice: with open(...) as f (auto close)."
],
[
"Reading",
"read() మొత్తం, read(n) n chars, readline() ఒక line, readlines() lines list."
],
[
"Writing",
"write() ఒక string, writelines() list. 'w' పాత content తొలగిస్తుంది; 'a' append."
],
[
"File modes",
"r (default, file లేకపోతే error), w, a, r+, w+, a+, rb / wb / ab (binary)."
],
[
"CSV",
"csv.writer / reader; DictWriter / DictReader; newline='' వాడండి."
],
[
"JSON",
"json.dump / load (file), dumps / loads (string): structured data."
]
]
},
{
"id": 14,
"title": "14. Modules",
"te": "Module అంటే reusable Python code ఉన్న .py file. import, from … import, as తో వాడతాం. math, random, datetime, os, sys, json, csv, re standard library లో ఉన్నాయి. External libraries కోసం pip install వాడతాం.",
"code": "import math, random, json\nfrom datetime import datetime\nprint(math.sqrt(16), math.factorial(5))\nprint(random.randint(1, 10))\ndata = {\"name\": \"Nihar\", \"age\": 25}\ns = json.dumps(data)\nprint(s, json.loads(s)[\"name\"])\nprint(datetime.now().year)",
"level": "b",
"notes": [
[
"Module",
"Functions, classes, variables ఉన్న .py file: reuse, organization, name conflicts నివారణ."
],
[
"Import styles",
"import math; from math import sqrt, pi; import math as m; from math import * (వాడకండి)."
],
[
"Custom module",
"mymodule.py రాసి అదే folder లో import mymodule చేసి mymodule.greet() వాడొచ్చు."
],
[
"Standard library",
"math, random, datetime, os, time, sys, json, csv, re, urllib: install అక్కర్లేదు."
],
[
"sys.argv",
"Command-line arguments: argv[0] script పేరు, argv[1:] మిగతావి."
],
[
"pip",
"pip install requests, pip list, pip uninstall requests."
]
]
},
{
"id": 15,
"title": "15. Python Libraries",
"te": "Data analysis కి NumPy, Pandas; visualization కి Matplotlib, Seaborn; machine learning కి Scikit-learn; web scraping కి Requests, BeautifulSoup; automation కి Selenium; databases కి sqlite3, MySQL Connector. ఇవి pip install తో install చేయాలి.",
"code": "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"INSERT INTO users (name) VALUES ('Alice')\")\nconn.commit()\nprint(cur.execute(\"SELECT * FROM users\").fetchall())",
"level": "b",
"notes": [
[
"Data analysis",
"NumPy: multi-dimensional arrays. Pandas: DataFrame/Series, CSV/Excel/SQL/JSON read-write."
],
[
"Visualization",
"Matplotlib: line, bar, histogram, scatter. Seaborn: అందమైన statistical plots (heatmap, violin)."
],
[
"Machine learning",
"Scikit-learn: regression, classification, clustering; LinearRegression().fit(X, y)."
],
[
"Scraping & automation",
"Requests (pages fetch), BeautifulSoup (HTML parse), Selenium (browser automate)."
],
[
"Databases",
"sqlite3: lightweight embedded DB; MySQL Connector: MySQL కి connect."
]
]
},
{
"id": 16,
"title": "16. Working with APIs",
"te": "API అంటే applications ఒకదానితో ఒకటి మాట్లాడుకునే పద్ధతి. REST APIs లో GET (data తీసుకో), POST (పంపు), PUT (update), DELETE (తొలగించు) methods ఉంటాయి. requests module తో call చేసి response.json() తో JSON parse చేస్తాం.",
"code": "# మీ PC లో: pip install requests\n# import requests\n# r = requests.get(\"https://jsonplaceholder.typicode.com/posts/1\")\n# print(r.status_code, r.json())\nimport json\nresponse = '{\"id\": 1, \"name\": \"Alice\", \"email\": \"alice@example.com\"}'\nuser = json.loads(response)\nprint(user[\"name\"], user[\"email\"])",
"level": "b",
"notes": [
[
"API అంటే",
"Applications నియమాల ప్రకారం communicate చేయడం. RESTful APIs HTTP methods వాడతాయి."
],
[
"HTTP methods",
"GET (data తీసుకో), POST (పంపు), PUT (update), DELETE (తొలగించు)."
],
[
"requests module",
"requests.get(url), requests.post(url, json=data); status_code == 200 అయితే success; response.json() తో JSON."
],
[
"Public APIs",
"OpenWeather (API key అవసరం), GitHub API (users/{username})."
],
[
"Own API",
"Flask లో @app.route + jsonify(data); లేనప్పుడు jsonify({'error': ...}), 404."
]
]
},
{
"id": 17,
"title": "17. Web Development with Flask",
"te": "Flask ఒక lightweight web framework. @app.route తో URLs ని functions కి map చేస్తాం; dynamic routes (<name>) మరియు forms (request.form) support చేస్తుంది. Flask browser లో run కాదు — మీ computer లో pip install flask చేసి python app.py run చేయండి.",
"code": "from flask import Flask\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef home():\n    return \"Hello, Flask!\"\n\n@app.route(\"/user/<name>\")\ndef user(name):\n    return f\"Hello, {name}!\"\n\nif __name__ == \"__main__\":\n    app.run(debug=True)",
"level": "b",
"notes": [
[
"Flask అంటే",
"Micro web framework: చిన్న/మధ్యస్థ apps, APIs కి."
],
[
"Basic app",
"app = Flask(__name__); @app.route('/') def home(): return 'Hello'; app.run(debug=True) → http://127.0.0.1:5000."
],
[
"Routes",
"@app.route('/about') URL ని function కి map చేస్తుంది."
],
[
"Dynamic routes",
"@app.route('/user/<name>') → /user/Nihar → 'Hello, Nihar!'."
],
[
"Forms",
"methods=['GET', 'POST']; request.method, request.form['name'] తో form data."
]
]
},
{
"id": 201,
"level": "p",
"title": "1. Introduction to Python",
"te": "Basics deep: print/input formatting, multi-line input parsing, pattern printing మరియు number-to-text logic.",
"code": "print(\"Hello, World!\")\nprint(\"Python నేర్చుకుందాం!\")",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"What is Python",
"High-level, interpreted, general-purpose language. Guido van Rossum 1991 లో release చేశారు. Procedural, object-oriented, functional paradigms support చేస్తుంది."
],
[
"Key characteristics",
"Interpreted (line by line execute), dynamically typed (type declare అక్కర్లేదు), cross-platform (Windows/macOS/Linux), extensible (C, C++, Java తో integrate)."
],
[
"History",
"1.0 (1991) initial; 2.0 (2000) list comprehensions; 3.0 (2008) Unicode, print() function; 3.6+ f-strings, type hints, async/await; 3.10+ pattern matching. Python 2 support 2020 లో ముగిసింది."
],
[
"Applications",
"Web (Flask, Django), data science (NumPy, Pandas), AI (TensorFlow, PyTorch), automation (Selenium, BeautifulSoup), game dev (Pygame), IoT (MicroPython)."
],
[
"Setup",
"python.org నుండి install; python --version తో verify; editors: IDLE, Thonny, VS Code, PyCharm, Jupyter; libraries కి pip install."
],
[
"Interactive vs script mode",
"'python' అని type చేస్తే REPL (Read-Eval-Print Loop, >>> prompt): quick tests కి. 'python file.py' script mode. REPL లో help(), exit(), _ (చివరి result)."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"print options",
"sep, end, f-string specs ({x:>5}, {x:.2f})."
],
[
"Input parsing",
"map(int, input().split()); multiple lines కి list comprehension."
]
]
},
{
"id": 202,
"level": "p",
"title": "2. Variables & Constants",
"te": "Variables deep: names are references, mutability, aliasing, shallow vs deep copy, tuple unpacking logic.",
"code": "name = \"Python\"\nage = 30\nPI = 3.14159\nprint(name, age, PI)",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Syntax rules",
"Statements కొత్త line లో ముగుస్తాయి (semicolon అక్కర్లేదు); indentation blocks ని define చేస్తుంది; Python case-sensitive (Var ≠ var); colon (:) code block మొదలుపెడుతుంది."
],
[
"Indentation",
"4 spaces వాడండి (PEP 8); spaces, tabs కలపకండి; తప్పైతే IndentationError."
],
[
"Dynamic typing",
"Variable కి type declare చేయక్కర్లేదు; తర్వాత వేరే type value కూడా ఇవ్వొచ్చు."
],
[
"input() / print()",
"input() ఎల్లప్పుడూ string ఇస్తుంది → int()/float() తో convert. print(sep=, end=), f-strings (recommended), format(), \\n new line, \\t tab."
],
[
"Comments",
"# single-line; triple quotes multi-line. Documentation, code disable, logic వివరణ కోసం."
],
[
"Naming rules",
"Letter/underscore తో start; letters, numbers, _ మాత్రమే; keywords వాడకూడదు; case-sensitive"
],
[
"UPPERCASE",
"Constants కి convention (PI, MAX_USERS)"
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"References",
"a = b అంటే ఒకే object కి రెండు పేర్లు; mutable అయితే ఒకటి మారితే రెండోదీ కనిపిస్తుంది."
],
[
"Unpacking",
"a, b = b, a + b; a, *rest = items."
]
]
},
{
"id": 203,
"level": "p",
"title": "3. Data Types",
"te": "Data types deep: dynamic typing, big integers, float precision, try/except తో safe conversions.",
"code": "print(type(10), type(3.14), type(\"hi\"))\nprint(int(\"100\") + 5)",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Mutability",
"list, set, dict mutable; tuple, str, frozenset immutable."
],
[
"type() & casting",
"type(x) తో type చూడొచ్చు; int('100'), float(b), str(), list() తో convert."
],
[
"range",
"range(start, stop, step): stop exclusive; list(range(1, 10, 2)) → [1, 3, 5, 7, 9]."
],
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
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Big ints",
"Python ints arbitrary precision; overflow లేదు."
],
[
"Float precision",
"0.1 ని పదిసార్లు add చేస్తే exact 1.0 రాదు; math.isclose వాడండి."
]
]
},
{
"id": 204,
"level": "p",
"title": "4. Operators",
"te": "Operators లో precedence, short-circuit (and/or), is vs ==, floor division/modulo negatives తో, chained comparison మరియు bit manipulation deep గా చూద్దాం. Bit tricks interviews లో చాలా ముఖ్యం.",
"code": "a, b = 10, 3\nprint(a + b, a - b, a * b)\nprint(a / b, a % b, a // b, a ** b)\nprint(a > b and b > 1)",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Arithmetic",
"+ - * / % // **: 7/2=3.5, 7%2=1, 7//2=3, 2**3=8."
],
[
"Comparison & logical",
"== != > < >= <= bool ఇస్తాయి; and, or, not conditions కలుపుతాయి."
],
[
"Bitwise",
"5&3=1, 5|3=7, 5^3=6, ~5=-6, 5<<1=10, 5>>1=2 (binary bits మీద)."
],
[
"Assignment",
"= += -= *= /= %= //= **= (x += 3 అంటే x = x + 3)."
],
[
"Identity & membership",
"is / is not: ఒకే object కా (memory). == values సమానమా. in / not in: sequence లో ఉందా."
],
[
"Precedence",
"() > ** > unary > * / // % > + - > shifts > & > ^ > | > comparisons > not > and > or > =. 2 + 3 * 4 = 14, (2 + 3) * 4 = 20."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Short-circuit",
"a and b: a False అయితే b evaluate కాదు; or: a True అయితే ఆగుతుంది. x = y or default."
],
[
"is vs ==",
"is object identity, == value equality. Small ints cached అయినా దానిపై ఆధారపడకండి."
],
[
"Floor division",
"-7 // 2 = -4 మరియు -7 % 2 = 1: a == (a//b)*b + a%b ఎప్పుడూ నిజం."
],
[
"Chained comparison",
"1 < x < 10 = (1 < x) and (x < 10), x ఒక్కసారే evaluate."
],
[
"Bit tricks",
"n & (n-1) lowest set bit తొలగిస్తుంది; x ^ x = 0; 1 << k = 2^k; n >> i & 1 = i వ bit."
],
[
"Floating point",
"0.1 + 0.2 != 0.3; math.isclose వాడండి."
]
]
},
{
"id": 205,
"level": "p",
"title": "5. Conditional Statements",
"te": "Conditionals deep: boundary conditions, validation logic, nested decisions, edge cases (leap year, degenerate triangle, negative discriminant).",
"code": "marks = 85\nif marks >= 90:\n    print(\"Grade: A\")\nelif marks >= 75:\n    print(\"Grade: B\")\nelse:\n    print(\"Fail\")",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"if",
"Condition True అయితేనే block run; False అయితే skip. Indentation తప్పనిసరి."
],
[
"if-else",
"if condition False అయినప్పుడు else block run అవుతుంది."
],
[
"if-elif-else",
"పై నుండి కిందకి check; మొదటి True block మాత్రమే run, ఏదీ కాకపోతే else."
],
[
"Truthiness",
"0, '', [], None → False; మిగతావి True."
],
[
"Ternary",
"grade = 'A' if m >= 90 else 'B': ఒకే line లో decision."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Edge cases",
"0, negative, equal values, boundaries తప్పక test చేయండి."
],
[
"Order of checks",
"ఎక్కువ specific condition ముందు పెట్టండి."
]
]
},
{
"id": 206,
"level": "p",
"title": "6. Loops",
"te": "Loops లో iteration protocol, comprehensions, generators, enumerate/zip, itertools, loop-else patterns deep గా చూద్దాం. సరైన loop ఎంచుకోవడం time మరియు memory మీద ప్రభావం చూపుతుంది.",
"code": "for num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)\ncount = 1\nwhile count <= 3:\n    print(\"count\", count)\n    count += 1",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"for loop",
"Sequence (list, tuple, string, range) మీద తిరుగుతుంది; end రాగానే ఆగుతుంది. range(1, 6) → 1..5."
],
[
"while loop",
"Condition True ఉన్నంత run; iterations ముందే తెలియనప్పుడు. while True: అంతులేని loop (జాగ్రత్త)."
],
[
"Nested loops",
"Outer ప్రతి iteration కి inner loop పూర్తిగా run అవుతుంది."
],
[
"break",
"Loop ని వెంటనే ఆపుతుంది."
],
[
"continue",
"ఈ iteration మిగతా code skip చేసి తర్వాతదానికి వెళ్తుంది."
],
[
"pass",
"ఏమీ చేయదు; ఖాళీ block కి placeholder."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
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
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"String",
"Characters immutable sequence; indexing, slicing, methods ఉన్నాయి."
],
[
"Formatting",
"f'My name is {name}' (3.6+, recommended), 'text {}'.format(x), % operator."
],
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
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
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
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"List",
"Ordered, mutable, duplicates allow, వేర్వేరు types ఒకే list లో."
],
[
"Indexing & slicing",
"nums[0] మొదటిది, nums[-1] చివరిది, nums[1:4] → index 1..3."
],
[
"Tuple",
"Ordered, immutable; ఒక్క element tuple కి comma తప్పనిసరి: (42,)."
],
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
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
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
"te": "Dict/set hash tables: key hashable ఉండాలి (list కాదు, tuple అవుతుంది). Average O(1) lookup/insert/delete. Python 3.7+ లో dict insertion order guaranteed. Frequency maps, grouping, prefix-sum hashing, LRU cache లాంటి logic కి ఇదే పునాది.",
"code": "A, B = {1, 2, 3}, {3, 4}\nprint(A | B, A & B, A - B)\nstudent = {\"name\": \"Alice\", \"age\": 21}\nfor k, v in student.items():\n    print(k, v)",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Set",
"Unordered, unique elements; ఖాళీ set కి set() వాడండి ({} dict అవుతుంది)."
],
[
"Dictionary",
"Key-value structure, fast lookup: {'name': 'Alice', 'age': 21}."
],
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
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Hashing",
"Key immutable & hashable: str, int, tuple ✓; list, dict, set ✗."
],
[
"Complexity",
"get/set/delete/in: O(1) average, worst O(n). Iteration O(n)."
],
[
"dict methods",
"get(k, d), setdefault, pop(k, d), update, items(); comprehension {k: v for ...}."
],
[
"Counter / defaultdict",
"Counting, grouping boilerplate తగ్గిస్తాయి; Counter & Counter = min counts."
],
[
"Set algebra",
"| union, & intersection, - difference, ^ symmetric difference, <= subset."
],
[
"LRU idea",
"dict insertion order: pop చేసి మళ్ళీ insert చేస్తే 'recently used' అవుతుంది."
],
[
"frozenset",
"Hashable set: dict key లేదా set of sets కి."
]
]
},
{
"id": 210,
"level": "p",
"title": "10. Functions",
"te": "Functions first-class objects: variables లో store, arguments గా pass, return చేయవచ్చు. Closures, decorators, recursion + memoization, default argument pitfalls, functools deep గా నేర్చుకోండి.",
"code": "def greet(name=\"Guest\"):\n    return f\"Hello, {name}!\"\nprint(greet(), greet(\"Nihar\"))\nsquare = lambda x: x * x\nprint(list(map(square, [1, 2, 3])))",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Defining",
"def name(params): ... తో define; name(args) తో call."
],
[
"Arguments",
"Positional (position ప్రకారం), default (ఇవ్వకపోతే default), keyword (name=value, order ముఖ్యం కాదు)."
],
[
"*args / **kwargs",
"*args → extra positional tuple గా; **kwargs → extra keyword dict గా."
],
[
"return",
"Value తిరిగి ఇస్తుంది; multiple values tuple గా: a, b = f()."
],
[
"Scope",
"Local variable function లోనే; global అన్ని చోట్లా; function లో global మార్చాలంటే global keyword."
],
[
"Recursion & lambda",
"Recursion కి base case తప్పనిసరి (factorial(0)=1). lambda: ఒక expression తో anonymous function; map(), filter(), reduce() తో."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
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
"te": "OOP deep: special methods (__add__, __abs__), composition, classes తో data structures build చేయడం.",
"code": "class Animal:\n    def speak(self):\n        print(\"Animal sound\")\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\nDog().speak()",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Class & object",
"Class = blueprint, object = దాని instance; Python లో అన్నీ objects."
],
[
"__init__",
"Constructor: object create అయినప్పుడు attributes initialize చేస్తుంది."
],
[
"Instance vs class variable",
"self.x ప్రతి object కి వేరు; class variable అన్ని objects మధ్య shared."
],
[
"Inheritance",
"Single, multiple, multilevel, hierarchical, hybrid. Child, parent methods reuse/override చేస్తుంది."
],
[
"Polymorphism",
"ఒకే method పేరు వేర్వేరు classes లో వేర్వేరుగా పనిచేస్తుంది."
],
[
"Encapsulation & abstraction",
"__var private; ABC + @abstractmethod తో interface మాత్రమే ఇస్తాం. Magic methods: __str__, __len__, __add__, __eq__."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Dunder methods",
"__add__, __eq__, __lt__, __abs__, __str__ operators ని customize చేస్తాయి."
],
[
"Composition",
"'has-a' చాలాసార్లు 'is-a' (inheritance) కంటే flexible."
]
]
},
{
"id": 212,
"level": "p",
"title": "12. Exception Handling",
"te": "Exceptions deep: hierarchy, custom exceptions, context managers (__enter__/__exit__), try/except/else/finally flow.",
"code": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nfinally:\n    print(\"Done\")",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Error రకాలు",
"Syntax Error (interpreter అర్థం చేసుకోలేనిది), Exception/Runtime Error (run లో invalid operation)."
],
[
"Common exceptions",
"ZeroDivisionError, ValueError, TypeError, IndexError (index range దాటింది), KeyError (key లేదు), FileNotFoundError."
],
[
"try / except",
"Risky code try లో; error వస్తే except లో handle: program crash అవ్వదు. except (A, B) as e."
],
[
"finally",
"Error వచ్చినా రాకపోయినా run: file/database connection close చేయడానికి."
],
[
"raise & custom",
"raise ValueError('...'); class MyError(Exception): custom exception."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"except order",
"Specific exceptions ముందు, general (Exception) చివర."
],
[
"else / finally",
"else: error లేకపోతే; finally: ఎల్లప్పుడూ cleanup."
]
]
},
{
"id": 213,
"level": "p",
"title": "13. File Handling",
"te": "File handling deep: log/JSON/CSV processing pipelines, modes, with-context, line-by-line streaming.",
"code": "with open(\"sample.txt\", \"w\") as f:\n    f.write(\"Hello, Python!\\n\")\nwith open(\"sample.txt\", \"r\") as f:\n    print(f.read())",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"open() / close()",
"file = open('name', 'mode'); తర్వాత close(); best practice: with open(...) as f (auto close)."
],
[
"Reading",
"read() మొత్తం, read(n) n chars, readline() ఒక line, readlines() lines list."
],
[
"Writing",
"write() ఒక string, writelines() list. 'w' పాత content తొలగిస్తుంది; 'a' append."
],
[
"File modes",
"r (default, file లేకపోతే error), w, a, r+, w+, a+, rb / wb / ab (binary)."
],
[
"CSV",
"csv.writer / reader; DictWriter / DictReader; newline='' వాడండి."
],
[
"JSON",
"json.dump / load (file), dumps / loads (string): structured data."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Streaming",
"for line in f: memory save; read() మొత్తం load చేస్తుంది."
],
[
"JSON round-trip",
"json.dump/load; keys ఎల్లప్పుడూ strings అవుతాయి."
]
]
},
{
"id": 214,
"level": "p",
"title": "14. Modules",
"te": "Modules deep: datetime arithmetic, re patterns, collections (deque, Counter) తో problem solving.",
"code": "import math, random, json\nfrom datetime import datetime\nprint(math.sqrt(16), math.factorial(5))\nprint(random.randint(1, 10))\ndata = {\"name\": \"Nihar\", \"age\": 25}\ns = json.dumps(data)\nprint(s, json.loads(s)[\"name\"])\nprint(datetime.now().year)",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Module",
"Functions, classes, variables ఉన్న .py file: reuse, organization, name conflicts నివారణ."
],
[
"Import styles",
"import math; from math import sqrt, pi; import math as m; from math import * (వాడకండి)."
],
[
"Custom module",
"mymodule.py రాసి అదే folder లో import mymodule చేసి mymodule.greet() వాడొచ్చు."
],
[
"Standard library",
"math, random, datetime, os, time, sys, json, csv, re, urllib: install అక్కర్లేదు."
],
[
"sys.argv",
"Command-line arguments: argv[0] script పేరు, argv[1:] మిగతావి."
],
[
"pip",
"pip install requests, pip list, pip uninstall requests."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"datetime",
"date - date = timedelta; weekday() లో Monday=0."
],
[
"re",
"fullmatch, findall, sub, groups; raw strings r'...' వాడండి."
]
]
},
{
"id": 215,
"level": "p",
"title": "15. Python Libraries",
"te": "Libraries deep: sqlite3 SQL logic, heapq, bisect; సరైన library ఎంపిక complexity తగ్గిస్తుంది.",
"code": "import sqlite3\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)\")\ncur.execute(\"INSERT INTO users (name) VALUES ('Alice')\")\nconn.commit()\nprint(cur.execute(\"SELECT * FROM users\").fetchall())",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Data analysis",
"NumPy: multi-dimensional arrays. Pandas: DataFrame/Series, CSV/Excel/SQL/JSON read-write."
],
[
"Visualization",
"Matplotlib: line, bar, histogram, scatter. Seaborn: అందమైన statistical plots (heatmap, violin)."
],
[
"Machine learning",
"Scikit-learn: regression, classification, clustering; LinearRegression().fit(X, y)."
],
[
"Scraping & automation",
"Requests (pages fetch), BeautifulSoup (HTML parse), Selenium (browser automate)."
],
[
"Databases",
"sqlite3: lightweight embedded DB; MySQL Connector: MySQL కి connect."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"heapq / bisect",
"Heap push/pop O(log n); bisect sorted list లో O(log n) search."
],
[
"sqlite3",
"Parameterized queries (?) వాడండి; GROUP BY తో aggregates."
]
]
},
{
"id": 216,
"level": "p",
"title": "16. Working with APIs",
"te": "APIs deep: pagination, rate limiting, nested JSON handling. Network లేకుండా logic ని simulate చేస్తున్నాం.",
"code": "# మీ PC లో: pip install requests\n# import requests\n# r = requests.get(\"https://jsonplaceholder.typicode.com/posts/1\")\n# print(r.status_code, r.json())\nimport json\nresponse = '{\"id\": 1, \"name\": \"Alice\", \"email\": \"alice@example.com\"}'\nuser = json.loads(response)\nprint(user[\"name\"], user[\"email\"])",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"API అంటే",
"Applications నియమాల ప్రకారం communicate చేయడం. RESTful APIs HTTP methods వాడతాయి."
],
[
"HTTP methods",
"GET (data తీసుకో), POST (పంపు), PUT (update), DELETE (తొలగించు)."
],
[
"requests module",
"requests.get(url), requests.post(url, json=data); status_code == 200 అయితే success; response.json() తో JSON."
],
[
"Public APIs",
"OpenWeather (API key అవసరం), GitHub API (users/{username})."
],
[
"Own API",
"Flask లో @app.route + jsonify(data); లేనప్పుడు jsonify({'error': ...}), 404."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Pagination",
"start = (page-1)*per_page+1; end = min(page*per_page, total)."
],
[
"Rate limit",
"Sliding window: window బయటి timestamps తొలగించి count చూడండి."
]
]
},
{
"id": 217,
"level": "p",
"title": "17. Web Development with Flask",
"te": "Flask deep concepts: parameterized routing, auth decorators, form parsing. Flask లేకుండా logic simulate; real app మీ PC లో.",
"code": "from flask import Flask\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef home():\n    return \"Hello, Flask!\"\n\n@app.route(\"/user/<name>\")\ndef user(name):\n    return f\"Hello, {name}!\"\n\nif __name__ == \"__main__\":\n    app.run(debug=True)",
"notes": [
[
"▶ Core concepts (PDF)",
"ముందు ప్రాథమిక భావనలు, తర్వాత advanced విషయాలు."
],
[
"Flask అంటే",
"Micro web framework: చిన్న/మధ్యస్థ apps, APIs కి."
],
[
"Basic app",
"app = Flask(__name__); @app.route('/') def home(): return 'Hello'; app.run(debug=True) → http://127.0.0.1:5000."
],
[
"Routes",
"@app.route('/about') URL ని function కి map చేస్తుంది."
],
[
"Dynamic routes",
"@app.route('/user/<name>') → /user/Nihar → 'Hello, Nihar!'."
],
[
"Forms",
"methods=['GET', 'POST']; request.method, request.form['name'] తో form data."
],
[
"▶ Advanced concepts",
"ఇక్కడి నుండి deep విషయాలు మరియు problem-solving techniques."
],
[
"Routing",
"/user/<id> patterns URL segments తో match అవుతాయి."
],
[
"Decorators",
"@login_required లాంటివి function ని wrap చేసి access control చేస్తాయి."
]
]
}
];
