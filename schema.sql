-- PyPath schema: Supabase > SQL Editor > paste > Run (safe to re-run)
create table if not exists lessons(id int primary key,title text not null,te text not null,code text not null);
alter table lessons add column if not exists level text not null default 'b';
alter table lessons add column if not exists notes jsonb not null default '[]';
create table if not exists problems(id bigserial primary key,lesson_id int references lessons(id) on delete cascade,sort int,title text not null,input text,output text,solution text,explanation text);
create table if not exists progress(user_id uuid references auth.users on delete cascade default auth.uid(),lesson_id int references lessons(id),completed_at timestamptz default now(),primary key(user_id,lesson_id));
create table if not exists quiz_results(id bigserial primary key,user_id uuid references auth.users on delete cascade default auth.uid(),score int not null,total int not null,created_at timestamptz default now());
alter table lessons enable row level security;alter table problems enable row level security;alter table progress enable row level security;alter table quiz_results enable row level security;
drop policy if exists "lessons readable" on lessons;drop policy if exists "problems readable" on problems;drop policy if exists "own progress read" on progress;drop policy if exists "own progress write" on progress;drop policy if exists "own progress update" on progress;drop policy if exists "own quiz read" on quiz_results;drop policy if exists "own quiz write" on quiz_results;
create policy "lessons readable" on lessons for select using (true);
create policy "problems readable" on problems for select using (true);
create policy "own progress read" on progress for select using (auth.uid()=user_id);
create policy "own progress write" on progress for insert with check (auth.uid()=user_id);
create policy "own progress update" on progress for update using (auth.uid()=user_id);
create policy "own quiz read" on quiz_results for select using (auth.uid()=user_id);
create policy "own quiz write" on quiz_results for insert with check (auth.uid()=user_id);
alter table problems add column if not exists solution2 text;
alter table problems add column if not exists explanation2 text;
insert into lessons(id,title,te,code,level,notes) values
(1,'1. Introduction to Python','Python అనేది సులభమైన, శక్తివంతమైన programming language. 1991లో Guido van Rossum దీన్ని తయారు చేశారు. Web, AI, data science, automation అన్నింటిలో వాడతారు.','print("Hello, World!")
print("Python నేర్చుకుందాం!")','b','[]'::jsonb),
(2,'2. Variables & Constants','Variable అంటే data ని memory లో store చేసే పేరు. Type declare చేయాల్సిన అవసరం లేదు (dynamic typing). Constants ని UPPERCASE లో రాస్తాం.','name = "Python"
age = 30
PI = 3.14159
print(name, age, PI)','b','[["Naming rules", "Letter/underscore తో start; letters, numbers, _ మాత్రమే; keywords వాడకూడదు; case-sensitive"], ["UPPERCASE", "Constants కి convention (PI, MAX_USERS)"]]'::jsonb),
(3,'3. Data Types','Python లో int, float, complex, str, list, tuple, range, set, dict వంటి built-in types ఉన్నాయి. type() తో type చూడొచ్చు; int(), float(), str() తో convert చేయొచ్చు.','print(type(10), type(3.14), type("hi"))
print(int("100") + 5)','b','[["int, float, complex", "Numeric types"], ["str", "Text type"], ["list, tuple, range", "Sequence types"], ["set, frozenset", "Unordered, unique"], ["dict", "Key-value mapping"], ["int() float() str() list()", "Type casting functions"]]'::jsonb),
(4,'4. Operators','Arithmetic (+ - * / % // **), comparison (== != > <), logical (and or not) operators తో calculations చేస్తాం. Precedence: () తర్వాత **, తర్వాత * /, తర్వాత + -.','a, b = 10, 3
print(a + b, a - b, a * b)
print(a / b, a % b, a // b, a ** b)
print(a > b and b > 1)','b','[]'::jsonb),
(5,'5. Conditional Statements','if, elif, else తో condition ఆధారంగా code run చేయవచ్చు. Indentation (4 spaces) తప్పనిసరి.','marks = 85
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
else:
    print("Fail")','b','[]'::jsonb),
(6,'6. Loops','for loop sequence మీద తిరుగుతుంది; while loop condition True ఉన్నంత వరకు run అవుతుంది. break loop ని ఆపుతుంది, continue ఒక iteration skip చేస్తుంది.','for num in range(1, 6):
    if num == 3:
        continue
    print(num)
count = 1
while count <= 3:
    print("count", count)
    count += 1','b','[]'::jsonb),
(7,'7. Strings','String అంటే characters sequence (immutable). upper(), lower(), strip(), split(), join(), replace() methods ఉపయోగపడతాయి. f-strings recommended.','s = "  hello python  "
print(s.strip().upper())
name = "Alice"
print(f"My name is {name}")
print(",".join(["a", "b", "c"]))','b','[["upper() / lower()", "Uppercase / lowercase"], ["strip()", "Spaces తీసేస్తుంది"], ["split() / join()", "List ↔ string"], ["replace(old, new)", "Substring replace"], ["find(x)", "మొదటి index"], ["count(x)", "Occurrences count"], ["startswith(x) / endswith(x)", "Start / end check"]]'::jsonb),
(8,'8. Lists & Tuples','List ordered మరియు mutable: append(), insert(), remove(), pop(), sort() ఉన్నాయి. Tuple immutable — ఒకసారి create చేస్తే మార్చలేం.','nums = [10, 20, 30]
nums.append(40)
nums.sort(reverse=True)
print(nums, nums[1:3])
t = (1, 2, 3)
print(t[0], len(t))','b','[["append(x)", "End లో add"], ["extend(iterable)", "Multiple elements add"], ["insert(i, x)", "Index i దగ్గర add"], ["remove(x)", "మొదటి x తొలగింపు"], ["pop(i)", "Remove + return (default last)"], ["clear()", "అన్నీ తొలగింపు"], ["index(x) / count(x)", "Index / occurrences"], ["sort() / reverse()", "In-place sort / reverse"], ["copy()", "List copy"], ["Tuple", "count, index, len, max, min, sum, sorted"]]'::jsonb),
(9,'9. Sets & Dictionaries','Set లో unique elements మాత్రమే ఉంటాయి (union, intersection, difference). Dictionary key-value pairs store చేస్తుంది: keys(), values(), items(), get().','A, B = {1, 2, 3}, {3, 4}
print(A | B, A & B, A - B)
student = {"name": "Alice", "age": 21}
for k, v in student.items():
    print(k, v)','b','[["add(x)", "Set లో add"], ["remove(x) / discard(x)", "Remove (remove → error if missing)"], ["pop()", "Random element తొలగింపు"], ["union / intersection", "A|B, A&B"], ["difference / symmetric_difference", "A-B / either but not both"], ["isdisjoint(B)", "Common elements లేవా?"], ["keys() values() items()", "Dict views"], ["get(x)", "Value (None if missing)"], ["pop(x) / update(B)", "Remove key / merge"], ["setdefault(x, y)", "Value లేకపోతే y set"], ["fromkeys(it, v)", "Default values తో dict"]]'::jsonb),
(10,'10. Functions','def తో function define చేస్తాం. Positional, default, keyword arguments, *args, **kwargs, return ఉన్నాయి. lambda తో చిన్న functions రాయవచ్చు.','def greet(name="Guest"):
    return f"Hello, {name}!"
print(greet(), greet("Nihar"))
square = lambda x: x * x
print(list(map(square, [1, 2, 3])))','b','[]'::jsonb),
(11,'11. OOP','Class ఒక blueprint, object దాని instance. __init__ constructor. Inheritance, polymorphism, encapsulation OOP ముఖ్య concepts.','class Animal:
    def speak(self):
        print("Animal sound")
class Dog(Animal):
    def speak(self):
        print("Dog barks")
Dog().speak()','b','[]'::jsonb),
(12,'12. Exception Handling','try-except తో errors handle చేస్తాం, program crash అవ్వదు. finally ఎప్పుడూ run అవుతుంది. raise తో మనమే exception పెంచవచ్చు.','try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Done")','b','[]'::jsonb),
(13,'13. File Handling','open() తో files read/write చేస్తాం. with statement file ని auto close చేస్తుంది. Modes: r (read), w (overwrite), a (append).','with open("sample.txt", "w") as f:
    f.write("Hello, Python!\n")
with open("sample.txt", "r") as f:
    print(f.read())','b','[]'::jsonb),
(14,'14. Modules','Module అంటే reusable Python code ఉన్న .py file. import, from … import, as తో వాడతాం. math, random, datetime, os, sys, json, csv, re standard library లో ఉన్నాయి. External libraries కోసం pip install వాడతాం.','import math, random, json
from datetime import datetime
print(math.sqrt(16), math.factorial(5))
print(random.randint(1, 10))
data = {"name": "Nihar", "age": 25}
s = json.dumps(data)
print(s, json.loads(s)["name"])
print(datetime.now().year)','b','[]'::jsonb),
(15,'15. Python Libraries','Data analysis కి NumPy, Pandas; visualization కి Matplotlib, Seaborn; machine learning కి Scikit-learn; web scraping కి Requests, BeautifulSoup; automation కి Selenium; databases కి sqlite3, MySQL Connector. ఇవి pip install తో install చేయాలి.','import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")
cur.execute("INSERT INTO users (name) VALUES (''Alice'')")
conn.commit()
print(cur.execute("SELECT * FROM users").fetchall())','b','[]'::jsonb),
(16,'16. Working with APIs','API అంటే applications ఒకదానితో ఒకటి మాట్లాడుకునే పద్ధతి. REST APIs లో GET (data తీసుకో), POST (పంపు), PUT (update), DELETE (తొలగించు) methods ఉంటాయి. requests module తో call చేసి response.json() తో JSON parse చేస్తాం.','# మీ PC లో: pip install requests
# import requests
# r = requests.get("https://jsonplaceholder.typicode.com/posts/1")
# print(r.status_code, r.json())
import json
response = ''{"id": 1, "name": "Alice", "email": "alice@example.com"}''
user = json.loads(response)
print(user["name"], user["email"])','b','[]'::jsonb),
(17,'17. Web Development with Flask','Flask ఒక lightweight web framework. @app.route తో URLs ని functions కి map చేస్తాం; dynamic routes (<name>) మరియు forms (request.form) support చేస్తుంది. Flask browser లో run కాదు — మీ computer లో pip install flask చేసి python app.py run చేయండి.','from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/user/<name>")
def user(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    app.run(debug=True)','b','[]'::jsonb),
(101,'A1. Comprehensions & Generators','List/dict/set comprehensions తో ఒక్క line లో collections build చేయవచ్చు. Generator (yield) values ని lazy గా ఇస్తుంది, memory save అవుతుంది. enumerate, zip, sorted(key=) advanced code లో తరచుగా వాడతారు.','squares = [x * x for x in range(1, 6) if x % 2]
words = {w: len(w) for w in [''py'', ''code'']}
def evens(n):
    for i in range(n):
        if i % 2 == 0:
            yield i
print(squares, words, list(evens(10)))','p','[]'::jsonb),
(102,'A2. Decorators & Closures','Closure అంటే outer function variables ని గుర్తుంచుకునే inner function. Decorator ఒక function ని wrap చేసి కొత్త behavior add చేస్తుంది (@decorator). functools.wraps metadata కాపాడుతుంది.','import functools
def log(fn):
    @functools.wraps(fn)
    def wrapper(*a, **k):
        print(''calling'', fn.__name__)
        return fn(*a, **k)
    return wrapper
@log
def add(a, b):
    return a + b
print(add(2, 3))','p','[]'::jsonb),
(103,'A3. Strings: Deep Dive','String immutable sequence: ప్రతి operation కొత్త string create చేస్తుంది. Advanced problems లో slicing, sliding window, two pointers, stack, DP, Counter, regex కలిపి వాడతాం. ఒకే problem ని brute force మరియు optimized రెండు approaches తో చూడండి; time complexity తేడా అర్థమవుతుంది.','from collections import Counter
s = ''level''
print(s[::-1] == s)
print(Counter(''banana'').most_common(2))
print(''''.join(sorted(''python'')))','p','[["Immutability", "s[0]=''x'' error. s += c loop లో O(n²) అవ్వచ్చు; list లో collect చేసి ''''.join() వాడండి."], ["Slicing", "s[a:b:c]; negative step reverse; range దాటినా error రాదు."], ["ord / chr", "Character ↔ Unicode number. Caesar cipher, hashing లో వాడతాం."], ["Counter", "Frequency map; most_common(k); రెండు Counters తీసివేయవచ్చు (need - have)."], ["Two pointers", "Palindrome, expand-around-center: O(n) లేదా O(n²) తో."], ["Sliding window", "Window [l, r] పెంచుతూ/తగ్గిస్తూ substring problems O(n) లో."], ["DP on strings", "LCS, word break: overlapping subproblems → table లేదా lru_cache."], ["Stack", "Brackets, nested decode: ఇటీవలి open item ముందు close అవుతుంది."]]'::jsonb),
(104,'A4. Lists, Tuples, Sets & Dicts: Deep Dive','List dynamic array, tuple immutable మరియు hashable, set/dict hash tables (membership O(1) average). Complexity తెలిస్తే సరైన structure ఎంచుకోవచ్చు. heapq, bisect, deque, Counter, defaultdict advanced problems కి కీలకం. ప్రతి problem కి రెండు approaches ఉన్నాయి.','import heapq
from collections import deque, Counter
h = [5, 1, 3]
heapq.heapify(h)
print(heapq.heappop(h))
d = deque([1, 2, 3])
d.appendleft(0)
print(d, Counter(''aab''))','p','[["Complexity", "list: append O(1), insert(0)/pop(0) O(n), x in list O(n). set/dict: x in O(1) avg."], ["Shallow vs deep copy", "a[:] / copy() nested objects share చేస్తాయి; copy.deepcopy పూర్తిగా వేరు."], ["sorted(key=)", "Stable sort: ties original order లోనే ఉంటాయి."], ["heapq", "Min-heap: heappush/heappop O(log n), nlargest(k, it)."], ["bisect", "Sorted list లో binary search: bisect_left/right, insort."], ["deque", "రెండు చివరల్లో O(1): sliding window, BFS."], ["defaultdict / Counter", "Missing key default; frequency counting."], ["Prefix sums", "Running total + dict తో subarray problems O(n)."]]'::jsonb)
on conflict (id) do update set title=excluded.title,te=excluded.te,code=excluded.code,level=excluded.level,notes=excluded.notes;
delete from problems;
insert into problems(lesson_id,sort,title,input,output,solution,explanation,solution2,explanation2) values
(1,0,'Greet by name','Alice','Hello, Alice!','name = input()
print(f''Hello, {name}!'')','input() string ఇస్తుంది; f-string లో {name} replace అవుతుంది.',null,null),
(1,1,'Sum of two numbers','10
20','30','a = int(input())
b = int(input())
print(a + b)','input() string కాబట్టి int() తో convert చేసి add చేయాలి.',null,null),
(1,2,'Star triangle','3','*
**
***','n = int(input())
for i in range(1, n + 1):
    print(''*'' * i)','String * number = repeat. Loop i=1..n.',null,null),
(1,3,'Circle area (2 decimals)','2','12.57','r = float(input())
print(f''{3.14159 * r * r:.2f}'')','πr² లెక్కించి :.2f తో 2 decimals format చేశాం.',null,null),
(1,4,'Swap two words','5 9','9 5','a, b = input().split()
print(b, a)','split() రెండు values ఇస్తుంది; print లో order మార్చాం.',null,null),
(2,5,'Celsius to Fahrenheit','100','212.0','c = float(input())
print(c * 9 / 5 + 32)','Formula F = C×9/5 + 32; float వల్ల 212.0 వస్తుంది.',null,null),
(2,6,'Simple interest (P R T)','1000 5 2','100.0','p, r, t = map(float, input().split())
print(p * r * t / 100)','map(float, ...) అన్ని values ని float చేస్తుంది.',null,null),
(2,7,'Full name','Nihar
Dodagatta','Nihar Dodagatta','f = input()
l = input()
print(f, l)','print() commas తో space పెట్టి print చేస్తుంది.',null,null),
(2,8,'Add one to a number','100','101','print(int(input()) + 1)','String ని int గా మార్చాకే arithmetic చేయగలం.',null,null),
(2,9,'Rectangle area and perimeter','4 5','20 18','l, b = map(int, input().split())
print(l * b, 2 * (l + b))','Area = l×b, Perimeter = 2(l+b).',null,null),
(3,10,'Int to float','7','7.0','print(float(input()))','float() int ని float గా cast చేస్తుంది.',null,null),
(3,11,'String to characters','abc','[''a'', ''b'', ''c'']','print(list(input()))','list(string) ప్రతి character ని element చేస్తుంది.',null,null),
(3,12,'Count unique numbers','1 2 2 3 3 3','3','print(len(set(input().split())))','set duplicates తొలగిస్తుంది; len() count ఇస్తుంది.',null,null),
(3,13,'Sum of numbers','4 8 15','27','print(sum(map(int, input().split())))','map(int, ...) తో numbers; sum() మొత్తం.',null,null),
(3,14,'Range to list','5','[0, 1, 2, 3, 4]','print(list(range(int(input()))))','range(n) 0..n-1; list() తో list అవుతుంది.',null,null),
(101,15,'Squares of even numbers','10','[4, 16, 36, 64, 100]','n = int(input())
print([x * x for x in range(1, n + 1) if x % 2 == 0])','Comprehension లో filter (if) మరియు expression (x*x).',null,null),
(101,16,'Word length dictionary','python is fun','{''python'': 6, ''is'': 2, ''fun'': 3}','print({w: len(w) for w in input().split()})','Dict comprehension: word → len(word).',null,null),
(101,17,'Flatten nested list','[[1,2],[3,4],[5]]','[1, 2, 3, 4, 5]','import ast
m = ast.literal_eval(input())
print([x for row in m for x in row])','literal_eval safe గా list parse చేస్తుంది; nested for outer→inner order.',null,null),
(101,18,'First n Fibonacci (generator)','8','0 1 1 2 3 5 8 13','def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b
g = fib()
print(*[next(g) for _ in range(int(input()))])','Infinite generator; next() తో కావలసినన్ని మాత్రమే తీసుకున్నాం.',null,null),
(101,19,'Group words by length','a bb cc d eee','{1: [''a'', ''d''], 2: [''bb'', ''cc''], 3: [''eee'']}','from collections import defaultdict
d = defaultdict(list)
for w in input().split():
    d[len(w)].append(w)
print(dict(sorted(d.items())))','defaultdict(list) తో key లేకపోయినా list auto create అవుతుంది.',null,null),
(102,20,'Counter closure','3','1
2
3','def make():
    c = 0
    def inc():
        nonlocal c
        c += 1
        return c
    return inc
f = make()
for _ in range(int(input())):
    print(f())','inc() outer variable c ని nonlocal తో మారుస్తుంది; state గుర్తుంటుంది.',null,null),
(102,21,'Multiplier factory','3 5','15','def mul(n):
    return lambda x: x * n
n, x = map(int, input().split())
print(mul(n)(x))','mul(n) ఒక function return చేస్తుంది, అది n ని గుర్తుంచుకుంటుంది.',null,null),
(102,22,'Logging decorator','2 3','calling add
5','def log(fn):
    def w(*a):
        print(''calling'', fn.__name__)
        return fn(*a)
    return w
@log
def add(a, b):
    return a + b
x, y = map(int, input().split())
print(add(x, y))','@log అంటే add = log(add); wrapper ముందు print చేసి original call చేస్తుంది.',null,null),
(102,23,'Memoized Fibonacci','30','832040','def memo(fn):
    c = {}
    def w(n):
        if n not in c:
            c[n] = fn(n)
        return c[n]
    return w
@memo
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)
print(fib(int(input())))','Cache dict తో repeated calls తప్పించాం: exponential time → linear.',null,null),
(102,24,'Repeat decorator with argument','3','Hi
Hi
Hi','n = int(input())
def repeat(k):
    def deco(fn):
        def w():
            for _ in range(k):
                fn()
        return w
    return deco
@repeat(n)
def hi():
    print(''Hi'')
hi()','Arguments ఉన్న decorator = 3 levels: repeat(k) → deco(fn) → w().',null,null),
(4,25,'All arithmetic operators','10 3','13 7 30 3.3333333333333335 1 3 1000','a, b = map(int, input().split())
print(a + b, a - b, a * b, a / b, a % b, a // b, a ** b)','+ - * / % // ** ఏడు operators.',null,null),
(4,26,'Even or odd','7','Odd','print(''Even'' if int(input()) % 2 == 0 else ''Odd'')','% 2 remainder 0 అయితే even.',null,null),
(4,27,'Comparisons','5 3','True False True','a, b = map(int, input().split())
print(a > b, a == b, a != b)','Comparison operators bool ఇస్తాయి.',null,null),
(4,28,'Range and multiple of 5','15','True','n = int(input())
print(10 <= n <= 20 and n % 5 == 0)','and రెండు conditions True అయితేనే True.',null,null),
(4,29,'Bitwise operators','5 3','1 7 6 -6 10 2','a, b = map(int, input().split())
print(a & b, a | b, a ^ b, ~a, a << 1, a >> 1)','Binary bits మీద AND, OR, XOR, NOT, shifts.',null,null),
(5,30,'Grade from marks','85','B','m = int(input())
print(''A'' if m >= 90 else ''B'' if m >= 75 else ''C'' if m >= 50 else ''Fail'')','Chained conditions పై నుండి కిందకు check అవుతాయి.',null,null),
(5,31,'Leap year','2024','Leap','y = int(input())
print(''Leap'' if y % 4 == 0 and (y % 100 != 0 or y % 400 == 0) else ''Not leap'')','4 తో divisible, century అయితే 400 తో.',null,null),
(5,32,'Largest of three','4 9 2','9','print(max(map(int, input().split())))','max() అన్నింటిలో పెద్దది ఇస్తుంది.',null,null),
(5,33,'Vote eligibility','18','Eligible','print(''Eligible'' if int(input()) >= 18 else ''Not eligible'')','age >= 18 check.',null,null),
(5,34,'Triangle type','3 3 3','Equilateral','a, b, c = map(int, input().split())
print(''Equilateral'' if a == b == c else ''Isosceles'' if a == b or b == c or a == c else ''Scalene'')','అన్నీ సమానం, రెండు సమానం, లేదా ఏవీ కావు.',null,null),
(6,35,'Sum of 1 to n','10','55','print(sum(range(1, int(input()) + 1)))','range(1, n+1) మొత్తం sum().',null,null),
(6,36,'Factorial','5','120','n = int(input())
f = 1
for i in range(2, n + 1):
    f *= i
print(f)','2 నుండి n వరకు గుణిస్తూ వెళ్ళాం.',null,null),
(6,37,'Countdown','5','5 4 3 2 1','print(*range(int(input()), 0, -1))','range step -1 తో తగ్గుతుంది.',null,null),
(6,38,'Sum of digits','1234','10','n = int(input())
s = 0
while n:
    s += n % 10
    n //= 10
print(s)','% 10 last digit; // 10 దాన్ని తీసేస్తుంది.',null,null),
(6,39,'Prime check','29','Prime','n = int(input())
print(''Prime'' if n > 1 and all(n % i for i in range(2, int(n ** .5) + 1)) else ''Not prime'')','√n వరకు ఏ number తోనూ divide కాకపోతే prime.',null,null),
(7,40,'Reverse a string','python','nohtyp','print(input()[::-1])','[::-1] slicing reverse చేస్తుంది.',null,null),
(7,41,'Count vowels','education','5','print(sum(c in ''aeiou'' for c in input().lower()))','ప్రతి character vowel అయితే True(=1) sum.',null,null),
(7,42,'Palindrome','madam','Yes','s = input()
print(''Yes'' if s == s[::-1] else ''No'')','Reverse తో సమానమైతే palindrome.',null,null),
(7,43,'Capitalize each word','hello python world','Hello Python World','print(input().title())','title() ప్రతి word మొదటి అక్షరం capital.',null,null),
(7,44,'Replace and count','banana','bonono 3','s = input()
print(s.replace(''a'', ''o''), s.count(''a''))','replace() కొత్త string; count() occurrences.',null,null),
(8,45,'Second largest','4 9 1 7','7','print(sorted(set(map(int, input().split())))[-2])','set తో duplicates పోతాయి; sort చేసి చివరి రెండోది.',null,null),
(8,46,'Remove duplicates, keep order','1 2 2 3 1','[1, 2, 3]','print(list(dict.fromkeys(map(int, input().split()))))','dict keys order ఉంచుతూ unique.',null,null),
(8,47,'Rotate left by one','1 2 3 4','[2, 3, 4, 1]','a = input().split()
print([int(x) for x in a[1:] + a[:1]])','slicing తో మొదటి element చివరికి.',null,null),
(8,48,'Tuple max, min, sum','4 8 15','15 4 27','t = tuple(map(int, input().split()))
print(max(t), min(t), sum(t))','Tuple మీద built-in functions.',null,null),
(8,49,'Even numbers descending','5 2 8 1 6','[8, 6, 2]','a = map(int, input().split())
print(sorted([x for x in a if x % 2 == 0], reverse=True))','Filter చేసి reverse=True తో sort.',null,null),
(9,50,'Common elements','1 2 3 4
3 4 5','[3, 4]','a = set(input().split())
b = set(input().split())
print(sorted(map(int, a & b)))','& set intersection.',null,null),
(9,51,'Word frequency','a b a c a b','{''a'': 3, ''b'': 2, ''c'': 1}','d = {}
for w in input().split():
    d[w] = d.get(w, 0) + 1
print(d)','get(w, 0) తో default 0 నుండి count.',null,null),
(9,52,'Symmetric difference','1 2 3
3 4','[1, 2, 4]','a = set(map(int, input().split()))
b = set(map(int, input().split()))
print(sorted(a ^ b))','^ రెండింటిలో ఒక్కదానిలోనే ఉన్నవి.',null,null),
(9,53,'Key with max value','a 5 b 9 c 2','b','t = input().split()
d = dict(zip(t[::2], map(int, t[1::2])))
print(max(d, key=d.get))','zip తో pairs; max(key=d.get) value ఆధారంగా.',null,null),
(9,54,'Anagram check','listen silent','Yes','a, b = input().split()
print(''Yes'' if sorted(a) == sorted(b) else ''No'')','sorted letters సమానమైతే anagram.',null,null),
(10,55,'is_prime function','7','True','def is_prime(n):
    return n > 1 and all(n % i for i in range(2, int(n ** .5) + 1))
print(is_prime(int(input())))','Reusable function, bool return.',null,null),
(10,56,'Sum with *args','1 2 3 4','10','def total(*n):
    return sum(n)
print(total(*map(int, input().split())))','*n అన్ని arguments tuple గా; * తో unpack.',null,null),
(10,57,'Return multiple values','10 5','15 5 50 2.0','def calc(a, b):
    return a + b, a - b, a * b, a / b
a, b = map(int, input().split())
print(*calc(a, b))','Multiple return tuple అవుతుంది.',null,null),
(10,58,'Recursive power','2 10','1024','def pw(a, n):
    return 1 if n == 0 else a * pw(a, n - 1)
a, n = map(int, input().split())
print(pw(a, n))','Base case n==0; లేకపోతే a * pw(a, n-1).',null,null),
(10,59,'Sort words by length','pear fig banana kiwi','[''fig'', ''pear'', ''kiwi'', ''banana'']','print(sorted(input().split(), key=lambda w: len(w)))','lambda key తో length ఆధారంగా stable sort.',null,null),
(103,60,'Longest palindromic substring','babad','bab','s = input()
def ex(l, r):
    while l >= 0 and r < len(s) and s[l] == s[r]:
        l -= 1
        r += 1
    return s[l + 1:r]
best = ''''
for i in range(len(s)):
    for c in (ex(i, i), ex(i, i + 1)):
        if len(c) > len(best):
            best = c
print(best)','ప్రతి center నుండి రెండు వైపులా విస్తరించాం (odd, even). O(n²) time, O(1) space.','s = input()
best = ''''
for i in range(len(s)):
    for j in range(i + 1, len(s) + 1):
        t = s[i:j]
        if t == t[::-1] and len(t) > len(best):
            best = t
print(best)','అన్ని substrings check: O(n³). సులభం కానీ నెమ్మది; ఇది baseline.'),
(103,61,'Longest substring without repeats','abcabcbb','3','s = input()
last = {}
l = best = 0
for r, c in enumerate(s):
    if c in last and last[c] >= l:
        l = last[c] + 1
    last[c] = r
    best = max(best, r - l + 1)
print(best)','last index dict తో left pointer నేరుగా jump. O(n).','s = input()
seen = set()
l = best = 0
for r in range(len(s)):
    while s[r] in seen:
        seen.remove(s[l])
        l += 1
    seen.add(s[r])
    best = max(best, r - l + 1)
print(best)','Set window: duplicate వస్తే left నుండి తొలగిస్తూ కుదిస్తాం. O(n).'),
(103,62,'Group anagrams','eat tea tan ate nat bat','[[''eat'', ''tea'', ''ate''], [''tan'', ''nat''], [''bat'']]','d = {}
for w in input().split():
    d.setdefault(''''.join(sorted(w)), []).append(w)
print(list(d.values()))','Sorted letters key గా group. O(n·k log k).','from collections import defaultdict
d = defaultdict(list)
for w in input().split():
    k = [0] * 26
    for c in w:
        k[ord(c) - 97] += 1
    d[tuple(k)].append(w)
print(list(d.values()))','26-letter count tuple key (list hashable కాదు, tuple అవుతుంది). O(n·k).'),
(103,63,'Run-length encoding','aaabccdddd','a3b1c2d4','s = input()
out = ''''
i = 0
while i < len(s):
    j = i
    while j < len(s) and s[j] == s[i]:
        j += 1
    out += s[i] + str(j - i)
    i = j
print(out)','Manual two-pointer: run చివరి వరకు j కదుపుతాం.','from itertools import groupby
print(''''.join(k + str(len(list(g))) for k, g in groupby(input())))','groupby వరుస equal items ని group చేస్తుంది: ఒక్క line.'),
(103,64,'Caesar cipher','Hello, World!
3','Khoor, Zruog!','t = input()
k = int(input())
r = ''''
for c in t:
    if c.isalpha():
        b = 65 if c.isupper() else 97
        r += chr((ord(c) - b + k) % 26 + b)
    else:
        r += c
print(r)','ord → 0..25 → shift mod 26 → chr; letters కాని వాటిని వదిలేస్తాం.','import string
t = input()
k = int(input())
lo, up = string.ascii_lowercase, string.ascii_uppercase
print(t.translate(str.maketrans(lo + up, lo[k:] + lo[:k] + up[k:] + up[:k])))','maketrans mapping table ఒకసారి తయారు చేసి translate: వేగంగా.'),
(103,65,'Valid brackets','{[()]}','True','s = input()
pair = {'')'': ''('', '']'': ''['', ''}'': ''{''}
st = []
ok = True
for c in s:
    if c in ''([{'':
        st.append(c)
    elif not st or st.pop() != pair[c]:
        ok = False
        break
print(ok and not st)','Stack: close bracket కి top open సరిపోవాలి. O(n).','s = input()
while ''()'' in s or ''[]'' in s or ''{}'' in s:
    s = s.replace(''()'', '''').replace(''[]'', '''').replace(''{}'', '''')
print(s == '''')','సరిపోయే pairs ని పదే పదే తొలగించాం. చిన్నది కానీ O(n²).'),
(103,66,'Word break','applepenapple
apple pen','True','s = input()
w = set(input().split())
dp = [True] + [False] * len(s)
for i in range(1, len(s) + 1):
    dp[i] = any(dp[j] and s[j:i] in w for j in range(i))
print(dp[-1])','dp[i] = prefix i ని words తో తయారు చేయవచ్చా. Bottom-up.','from functools import lru_cache
s = input()
w = set(input().split())
@lru_cache(None)
def f(i):
    return i == len(s) or any(s.startswith(x, i) and f(i + len(x)) for x in w)
print(f(0))','Top-down recursion + memo: అవసరమైన states మాత్రమే compute.'),
(103,67,'Minimum window substring','ADOBECODEBANC
ABC','BANC','from collections import Counter
s = input()
t = input()
need = Counter(t)
miss = len(t)
l = 0
best = ''''
for r, c in enumerate(s):
    if need[c] > 0:
        miss -= 1
    need[c] -= 1
    while miss == 0:
        if not best or r - l + 1 < len(best):
            best = s[l:r + 1]
        need[s[l]] += 1
        if need[s[l]] > 0:
            miss += 1
        l += 1
print(best)','విస్తరించి, అన్నీ దొరికాక కుదించాం. O(n).','from collections import Counter
s = input()
t = input()
need = Counter(t)
def f():
    for L in range(len(t), len(s) + 1):
        for i in range(len(s) - L + 1):
            if not need - Counter(s[i:i + L]):
                return s[i:i + L]
print(f())','Length పెంచుతూ ప్రతి window check: మొదటిది shortest. O(n²·k).'),
(103,68,'Decode nested string','3[a2[c]]','accaccacc','s = input()
st = []
num = 0
cur = ''''
for c in s:
    if c.isdigit():
        num = num * 10 + int(c)
    elif c == ''['':
        st.append((cur, num))
        cur, num = '''', 0
    elif c == '']'':
        p, n = st.pop()
        cur = p + cur * n
    else:
        cur += c
print(cur)','Stack లో (ముందు string, repeat count) దాచాం.','import re
s = input()
while ''['' in s:
    s = re.sub(r''(\d+)\[([a-z]*)\]'', lambda m: m.group(2) * int(m.group(1)), s)
print(s)','లోపలి bracket నుండి regex తో expand చేస్తూ బయటకు వచ్చాం.'),
(103,69,'Longest common subsequence','abcde
ace','3','a = input()
b = input()
dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
for i in range(len(a)):
    for j in range(len(b)):
        dp[i + 1][j + 1] = dp[i][j] + 1 if a[i] == b[j] else max(dp[i][j + 1], dp[i + 1][j])
print(dp[-1][-1])','2D table: match అయితే diagonal+1, లేకపోతే max. O(nm).','from functools import lru_cache
a = input()
b = input()
@lru_cache(None)
def f(i, j):
    if i == len(a) or j == len(b):
        return 0
    if a[i] == b[j]:
        return 1 + f(i + 1, j + 1)
    return max(f(i + 1, j), f(i, j + 1))
print(f(0, 0))','Recursion + memo: అదే logic, top-down.'),
(104,70,'Two sum (indices)','2 7 11 15
9','0 1','a = list(map(int, input().split()))
t = int(input())
seen = {}
for i, x in enumerate(a):
    if t - x in seen:
        print(seen[t - x], i)
        break
    seen[x] = i','Hash map లో ఇప్పటి వరకు చూసినవి; complement దొరికితే answer. O(n).','a = list(map(int, input().split()))
t = int(input())
print(*next((i, j) for i in range(len(a)) for j in range(i + 1, len(a)) if a[i] + a[j] == t))','అన్ని pairs check: O(n²).'),
(104,71,'Merge intervals','[[1,3],[2,6],[8,10],[15,18]]','[[1, 6], [8, 10], [15, 18]]','import ast
iv = sorted(ast.literal_eval(input()))
out = []
for s, e in iv:
    if out and s <= out[-1][1]:
        out[-1][1] = max(out[-1][1], e)
    else:
        out.append([s, e])
print(out)','Start తో sort; overlap అయితే end పొడిగించాం.','import ast
from functools import reduce
iv = sorted(ast.literal_eval(input()))
def f(acc, x):
    if acc and x[0] <= acc[-1][1]:
        acc[-1][1] = max(acc[-1][1], x[1])
    else:
        acc.append(list(x))
    return acc
print(reduce(f, iv, []))','అదే logic reduce తో functional style.'),
(104,72,'Product except self','1 2 3 4','[24, 12, 8, 6]','a = list(map(int, input().split()))
n = len(a)
res = [1] * n
p = 1
for i in range(n):
    res[i] = p
    p *= a[i]
p = 1
for i in range(n - 1, -1, -1):
    res[i] *= p
    p *= a[i]
print(res)','Left products తర్వాత right products గుణించాం. O(n), division లేదు.','from math import prod
a = list(map(int, input().split()))
print([prod(a[:i] + a[i + 1:]) for i in range(len(a))])','ప్రతి index కి మిగతా అన్నీ గుణించాం: O(n²).'),
(104,73,'Top K frequent','1 1 1 2 2 3
2','[1, 2]','from collections import Counter
a = input().split()
k = int(input())
print([int(x) for x, _ in Counter(a).most_common(k)])','Counter.most_common(k) నేరుగా.','import heapq
from collections import Counter
a = input().split()
k = int(input())
c = Counter(a)
print([int(x) for x in heapq.nlargest(k, c, key=c.get)])','heap తో top k: O(n log k).'),
(104,74,'Longest consecutive sequence','100 4 200 1 3 2','4','s = set(map(int, input().split()))
best = 0
for x in s:
    if x - 1 not in s:
        y = x
        while y + 1 in s:
            y += 1
        best = max(best, y - x + 1)
print(best)','Sequence ప్రారంభం (x-1 లేనిది) నుండి మాత్రమే count: O(n).','a = sorted(set(map(int, input().split())))
best = cur = 1
for i in range(1, len(a)):
    cur = cur + 1 if a[i] == a[i - 1] + 1 else 1
    best = max(best, cur)
print(best)','Sort చేసి scan: O(n log n), సులభం.'),
(104,75,'Rotate matrix 90° clockwise','[[1,2,3],[4,5,6],[7,8,9]]','[[7, 4, 1], [8, 5, 2], [9, 6, 3]]','import ast
m = ast.literal_eval(input())
print([list(r) for r in zip(*m[::-1])])','Rows reverse చేసి zip(*) తో transpose.','import ast
m = ast.literal_eval(input())
n = len(m)
for i in range(n):
    for j in range(i + 1, n):
        m[i][j], m[j][i] = m[j][i], m[i][j]
for r in m:
    r.reverse()
print(m)','In-place: transpose చేసి ప్రతి row reverse.'),
(104,76,'Sliding window maximum','1 3 -1 -3 5 3 6 7
3','[3, 3, 5, 5, 6, 7]','from collections import deque
a = list(map(int, input().split()))
k = int(input())
dq = deque()
out = []
for i, x in enumerate(a):
    while dq and a[dq[-1]] <= x:
        dq.pop()
    dq.append(i)
    if dq[0] <= i - k:
        dq.popleft()
    if i >= k - 1:
        out.append(a[dq[0]])
print(out)','Decreasing deque: front లో ఎప్పుడూ max index. O(n).','a = list(map(int, input().split()))
k = int(input())
print([max(a[i:i + k]) for i in range(len(a) - k + 1)])','ప్రతి window లో max(): O(n·k).'),
(104,77,'Count subarrays with sum K','3 4 7 2 -3 1 4 2
7','4','from collections import defaultdict
a = list(map(int, input().split()))
k = int(input())
c = defaultdict(int)
c[0] = 1
s = res = 0
for x in a:
    s += x
    res += c[s - k]
    c[s] += 1
print(res)','Prefix sum: s-k ముందు ఎన్నిసార్లు వచ్చిందో count. O(n).','a = list(map(int, input().split()))
k = int(input())
print(sum(sum(a[i:j]) == k for i in range(len(a)) for j in range(i + 1, len(a) + 1)))','అన్ని subarrays: O(n³) (negatives ఉన్నప్పుడు window పనిచేయదు).'),
(104,78,'Kth largest element','3 2 1 5 6 4
2','5','import heapq
a = list(map(int, input().split()))
k = int(input())
h = a[:k]
heapq.heapify(h)
for x in a[k:]:
    if x > h[0]:
        heapq.heapreplace(h, x)
print(h[0])','Size-k min-heap: root = kth largest. O(n log k).','a = sorted(map(int, input().split()), reverse=True)
print(a[int(input()) - 1])','Sort చేసి index: O(n log n), సులభం.'),
(104,79,'Search in rotated sorted array','4 5 6 7 0 1 2
0','4','a = list(map(int, input().split()))
t = int(input())
lo, hi = 0, len(a) - 1
res = -1
while lo <= hi:
    m = (lo + hi) // 2
    if a[m] == t:
        res = m
        break
    if a[lo] <= a[m]:
        if a[lo] <= t < a[m]:
            hi = m - 1
        else:
            lo = m + 1
    else:
        if a[m] < t <= a[hi]:
            lo = m + 1
        else:
            hi = m - 1
print(res)','ఏ half sorted గా ఉందో చూసి binary search: O(log n).','a = list(map(int, input().split()))
t = int(input())
print(a.index(t) if t in a else -1)','Linear search: O(n). సరైనదే కానీ rotated structure వాడలేదు.'),
(11,80,'Rectangle class','4 5','20 18','class Rect:
    def __init__(self, l, b):
        self.l = l
        self.b = b
    def area(self):
        return self.l * self.b
    def perimeter(self):
        return 2 * (self.l + self.b)
l, b = map(int, input().split())
r = Rect(l, b)
print(r.area(), r.perimeter())','__init__ లో attributes, methods లో లెక్కలు.',null,null),
(11,81,'Bank account (encapsulation)','1000
500
200','1300','class Acc:
    def __init__(self, b):
        self.__b = b
    def deposit(self, x):
        self.__b += x
    def withdraw(self, x):
        if x <= self.__b:
            self.__b -= x
    def balance(self):
        return self.__b
a = Acc(int(input()))
a.deposit(int(input()))
a.withdraw(int(input()))
print(a.balance())','__b private; methods ద్వారా మాత్రమే మారుతుంది.',null,null),
(11,82,'Inheritance and overriding','dog','Dog barks','class Animal:
    def speak(self):
        return ''Animal sound''
class Dog(Animal):
    def speak(self):
        return ''Dog barks''
class Cat(Animal):
    def speak(self):
        return ''Cat meows''
m = {''dog'': Dog, ''cat'': Cat}
print(m.get(input(), Animal)().speak())','Child class parent method ని override చేసింది; dict తో class ఎంపిక.',null,null),
(11,83,'__str__ and __len__','Python
450','Book: Python, Pages: 450
450','class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
    def __str__(self):
        return f''Book: {self.title}, Pages: {self.pages}''
    def __len__(self):
        return self.pages
b = Book(input(), int(input()))
print(b)
print(len(b))','print(obj) __str__ ని, len(obj) __len__ ని call చేస్తాయి.',null,null),
(11,84,'Class variable counter','3','3','class C:
    count = 0
    def __init__(self):
        C.count += 1
for _ in range(int(input())):
    C()
print(C.count)','Class variable అన్ని objects మధ్య shared.',null,null),
(12,85,'Safe division','10 0','Cannot divide by zero!','a, b = map(int, input().split())
try:
    print(a / b)
except ZeroDivisionError:
    print(''Cannot divide by zero!'')','try లో risky code, except లో error handle.',null,null),
(12,86,'Invalid integer input','abc','Invalid input','try:
    n = int(input())
    print(n * 2)
except ValueError:
    print(''Invalid input'')','int(''abc'') ValueError raise చేస్తుంది.',null,null),
(12,87,'finally always runs','0','Error
Done','try:
    print(10 // int(input()))
except ZeroDivisionError:
    print(''Error'')
finally:
    print(''Done'')','finally error ఉన్నా లేకపోయినా run అవుతుంది.',null,null),
(12,88,'Raise ValueError','15','You must be at least 18 years old.','try:
    age = int(input())
    if age < 18:
        raise ValueError(''You must be at least 18 years old.'')
    print(''Allowed'')
except ValueError as e:
    print(e)','raise తో మనమే exception; as e తో message.',null,null),
(12,89,'Custom exception','-5','Negative numbers are not allowed!','class NegativeNumberError(Exception):
    pass
try:
    n = int(input())
    if n < 0:
        raise NegativeNumberError(''Negative numbers are not allowed!'')
    print(n)
except NegativeNumberError as e:
    print(e)','Exception subclass చేసి custom error define.',null,null),
(13,90,'Write then read','Hello, Python!','Hello, Python!','t = input()
with open(''a.txt'', ''w'') as f:
    f.write(t)
with open(''a.txt'') as f:
    print(f.read())','with statement file ని auto close చేస్తుంది.',null,null),
(13,91,'Count lines in file','3','3','n = int(input())
with open(''b.txt'', ''w'') as f:
    for i in range(1, n + 1):
        f.write(f''Line {i}\n'')
with open(''b.txt'') as f:
    print(len(f.readlines()))','readlines() అన్ని lines list గా ఇస్తుంది.',null,null),
(13,92,'Word count from file','the quick brown fox jumps','5','t = input()
with open(''c.txt'', ''w'') as f:
    f.write(t)
with open(''c.txt'') as f:
    print(len(f.read().split()))','read() తర్వాత split() తో words count.',null,null),
(13,93,'Print lines in reverse','a b c','c
b
a','items = input().split()
with open(''d.txt'', ''w'') as f:
    f.write(''\n''.join(items))
with open(''d.txt'') as f:
    for line in reversed(f.read().splitlines()):
        print(line)','splitlines() తో lines list; reversed() తో వెనుక నుండి.',null,null),
(13,94,'CSV average','Nihar,25
Harsha,24','24.5','import csv
rows = [input().split('','') for _ in range(2)]
with open(''e.csv'', ''w'', newline='''') as f:
    csv.writer(f).writerows(rows)
with open(''e.csv'') as f:
    ages = [int(r[1]) for r in csv.reader(f)]
print(sum(ages) / len(ages))','csv.writer రాస్తుంది, csv.reader row లుగా చదువుతుంది.',null,null),
(14,95,'math module','5','120 2.23606797749979','import math
n = int(input())
print(math.factorial(n), math.sqrt(n))','math లో factorial, sqrt లాంటి functions.',null,null),
(14,96,'random with seed','42','2','import random
random.seed(int(input()))
print(random.randint(1, 10))','Seed ఒకటే అయితే random results ఒకటే వస్తాయి.',null,null),
(14,97,'Days between dates','2024-01-01
2024-03-01','60','from datetime import date
a = date.fromisoformat(input())
b = date.fromisoformat(input())
print((b - a).days)','date - date = timedelta; .days తో రోజులు.',null,null),
(14,98,'Dict to JSON','Nihar 25','{"name": "Nihar", "age": 25}','import json
n, a = input().split()
print(json.dumps({''name'': n, ''age'': int(a)}))','json.dumps dict ని JSON string చేస్తుంది.',null,null),
(14,99,'Extract numbers with re','There are 15 cats and 3 dogs.','[''15'', ''3'']','import re
print(re.findall(r''\d+'', input()))','\d+ అంటే ఒకటి లేదా ఎక్కువ digits.',null,null),
(15,100,'SQLite insert and select','Alice Bob','[(1, ''Alice''), (2, ''Bob'')]','import sqlite3
c = sqlite3.connect('':memory:'')
c.execute(''CREATE TABLE u(id INTEGER PRIMARY KEY, name TEXT)'')
for n in input().split():
    c.execute(''INSERT INTO u(name) VALUES (?)'', (n,))
print(c.execute(''SELECT * FROM u'').fetchall())','? placeholders SQL injection నుండి కాపాడతాయి.',null,null),
(15,101,'SQL average','10 20 30','20.0','import sqlite3
c = sqlite3.connect('':memory:'')
c.execute(''CREATE TABLE s(v INT)'')
c.executemany(''INSERT INTO s VALUES (?)'', [(int(x),) for x in input().split()])
print(c.execute(''SELECT AVG(v) FROM s'').fetchone()[0])','SQL AVG() aggregate function.',null,null),
(15,102,'statistics module','2 4 4 4 5 5 7 9','5 4.5 4','import statistics as st
a = list(map(int, input().split()))
print(st.mean(a), st.median(a), st.mode(a))','mean, median, mode ఒకే module లో.',null,null),
(15,103,'CSV rows to dicts','name,age
Alice,30
Bob,25','Alice','import csv
rows = list(csv.DictReader([input() for _ in range(3)]))
print(max(rows, key=lambda r: int(r[''age'']))[''name''])','DictReader header ని keys గా వాడుతుంది.',null,null),
(15,104,'Combinations','1 2 3','[(1, 2), (1, 3), (2, 3)]','from itertools import combinations
print(list(combinations(map(int, input().split()), 2)))','itertools.combinations pairs generate చేస్తుంది.',null,null),
(16,105,'Read JSON response','{"id": 1, "name": "Alice", "email": "alice@example.com"}','Alice alice@example.com','import json
d = json.loads(input())
print(d[''name''], d[''email''])','API response (JSON string) ని dict గా మార్చి fields చదివాం.',null,null),
(16,106,'Build query string','London 5','q=London&days=5','from urllib.parse import urlencode
city, days = input().split()
print(urlencode({''q'': city, ''days'': days}))','API URL parameters కి urlencode.',null,null),
(16,107,'Parse a URL','https://api.example.com/users/1?active=true','api.example.com /users/1 {''active'': [''true'']}','from urllib.parse import urlparse, parse_qs
u = urlparse(input())
print(u.netloc, u.path, parse_qs(u.query))','urlparse host, path, query వేరు చేస్తుంది.',null,null),
(16,108,'HTTP status meaning','404','Not found','m = {200: ''OK'', 201: ''Created'', 404: ''Not found'', 500: ''Server error''}
print(m.get(int(input()), ''Unknown''))','Status code → message dict lookup.',null,null),
(16,109,'Find user in JSON list','[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]
2','Bob','import json
users = json.loads(input())
uid = int(input())
print(next((u[''name''] for u in users if u[''id''] == uid), ''User not found''))','next(generator, default) మొదటి match లేదా default.',null,null),
(17,110,'Route table with decorator','/about','This is the About Page','routes = {}
def route(p):
    def d(f):
        routes[p] = f
        return f
    return d
@route(''/'')
def home():
    return ''Welcome to the Home Page''
@route(''/about'')
def about():
    return ''This is the About Page''
print(routes[input()]())','@app.route ఇలాగే URL ని function కి map చేస్తుంది (Flask లేకుండా simulate).',null,null),
(17,111,'Dynamic route','/user/Nihar','Hello, Nihar!','def user(name):
    return f''Hello, {name}!''
parts = input().strip(''/'').split(''/'')
if parts[0] == ''user'':
    print(user(parts[1]))
else:
    print(''404 Not Found'')','/user/<name> లో name URL నుండి వచ్చే parameter.',null,null),
(17,112,'jsonify a user','1','{"id": 1, "name": "Alice"}','import json
users = [{''id'': 1, ''name'': ''Alice''}, {''id'': 2, ''name'': ''Bob''}]
uid = int(input())
u = next((x for x in users if x[''id''] == uid), None)
print(json.dumps(u) if u else json.dumps({''error'': ''User not found''}))','jsonify dict ని JSON response చేస్తుంది; లేకపోతే error JSON.',null,null),
(17,113,'Handle POST form','POST
Nihar','Hello, Nihar!','method = input()
if method == ''POST'':
    name = input()
    print(f''Hello, {name}!'')
else:
    print(''<form method="post">'')','request.method చూసి POST అయితే form data చదువుతాం.',null,null),
(17,114,'Allowed HTTP methods','DELETE','405 Method Not Allowed','allowed = {''GET'', ''POST''}
m = input().upper()
print(''OK'' if m in allowed else ''405 Method Not Allowed'')','methods=[...] లో లేని method కి 405 వస్తుంది.',null,null);
