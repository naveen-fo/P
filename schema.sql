-- PyPath schema: Supabase > SQL Editor > paste > Run
create table if not exists lessons(id int primary key,title text not null,te text not null,code text not null);
create table if not exists progress(user_id uuid references auth.users on delete cascade default auth.uid(),lesson_id int references lessons(id),completed_at timestamptz default now(),primary key(user_id,lesson_id));
create table if not exists quiz_results(id bigserial primary key,user_id uuid references auth.users on delete cascade default auth.uid(),score int not null,total int not null,created_at timestamptz default now());
alter table lessons enable row level security;alter table progress enable row level security;alter table quiz_results enable row level security;
create policy "lessons readable" on lessons for select using (true);
create policy "own progress read" on progress for select using (auth.uid()=user_id);
create policy "own progress write" on progress for insert with check (auth.uid()=user_id);
create policy "own progress update" on progress for update using (auth.uid()=user_id);
create policy "own quiz read" on quiz_results for select using (auth.uid()=user_id);
create policy "own quiz write" on quiz_results for insert with check (auth.uid()=user_id);
insert into lessons(id,title,te,code) values
(1,'1. Introduction to Python','Python అనేది సులభమైన, శక్తివంతమైన programming language. 1991లో Guido van Rossum దీన్ని తయారు చేశారు. Web, AI, data science, automation అన్నింటిలో వాడతారు.','print("Hello, World!")
print("Python నేర్చుకుందాం!")'),
(2,'2. Variables & Constants','Variable అంటే data ని memory లో store చేసే పేరు. Type declare చేయాల్సిన అవసరం లేదు (dynamic typing). Constants ని UPPERCASE లో రాస్తాం.','name = "Python"
age = 30
PI = 3.14159
print(name, age, PI)'),
(3,'3. Data Types','Python లో int, float, complex, str, list, tuple, range, set, dict వంటి built-in types ఉన్నాయి. type() తో type చూడొచ్చు; int(), float(), str() తో convert చేయొచ్చు.','print(type(10), type(3.14), type("hi"))
print(int("100") + 5)'),
(4,'4. Operators','Arithmetic (+ - * / % // **), comparison (== != > <), logical (and or not) operators తో calculations చేస్తాం. Precedence: () తర్వాత **, తర్వాత * /, తర్వాత + -.','a, b = 10, 3
print(a + b, a - b, a * b)
print(a / b, a % b, a // b, a ** b)
print(a > b and b > 1)'),
(5,'5. Conditional Statements','if, elif, else తో condition ఆధారంగా code run చేయవచ్చు. Indentation (4 spaces) తప్పనిసరి.','marks = 85
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
else:
    print("Fail")'),
(6,'6. Loops','for loop sequence మీద తిరుగుతుంది; while loop condition True ఉన్నంత వరకు run అవుతుంది. break loop ని ఆపుతుంది, continue ఒక iteration skip చేస్తుంది.','for num in range(1, 6):
    if num == 3:
        continue
    print(num)
count = 1
while count <= 3:
    print("count", count)
    count += 1'),
(7,'7. Strings','String అంటే characters sequence (immutable). upper(), lower(), strip(), split(), join(), replace() methods ఉపయోగపడతాయి. f-strings recommended.','s = "  hello python  "
print(s.strip().upper())
name = "Alice"
print(f"My name is {name}")
print(",".join(["a", "b", "c"]))'),
(8,'8. Lists & Tuples','List ordered మరియు mutable: append(), insert(), remove(), pop(), sort() ఉన్నాయి. Tuple immutable — ఒకసారి create చేస్తే మార్చలేం.','nums = [10, 20, 30]
nums.append(40)
nums.sort(reverse=True)
print(nums, nums[1:3])
t = (1, 2, 3)
print(t[0], len(t))'),
(9,'9. Sets & Dictionaries','Set లో unique elements మాత్రమే ఉంటాయి (union, intersection, difference). Dictionary key-value pairs store చేస్తుంది: keys(), values(), items(), get().','A, B = {1, 2, 3}, {3, 4}
print(A | B, A & B, A - B)
student = {"name": "Alice", "age": 21}
for k, v in student.items():
    print(k, v)'),
(10,'10. Functions','def తో function define చేస్తాం. Positional, default, keyword arguments, *args, **kwargs, return ఉన్నాయి. lambda తో చిన్న functions రాయవచ్చు.','def greet(name="Guest"):
    return f"Hello, {name}!"
print(greet(), greet("Nihar"))
square = lambda x: x * x
print(list(map(square, [1, 2, 3])))'),
(11,'11. OOP','Class ఒక blueprint, object దాని instance. __init__ constructor. Inheritance, polymorphism, encapsulation OOP ముఖ్య concepts.','class Animal:
    def speak(self):
        print("Animal sound")
class Dog(Animal):
    def speak(self):
        print("Dog barks")
Dog().speak()'),
(12,'12. Exception Handling','try-except తో errors handle చేస్తాం, program crash అవ్వదు. finally ఎప్పుడూ run అవుతుంది. raise తో మనమే exception పెంచవచ్చు.','try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Done")'),
(13,'13. File Handling','open() తో files read/write చేస్తాం. with statement file ని auto close చేస్తుంది. Modes: r (read), w (overwrite), a (append).','with open("sample.txt", "w") as f:
    f.write("Hello, Python!\n")
with open("sample.txt", "r") as f:
    print(f.read())'),
(14,'14. Modules','Module అంటే reusable Python code ఉన్న .py file. import, from … import, as తో వాడతాం. math, random, datetime, os, sys, json, csv, re standard library లో ఉన్నాయి. External libraries కోసం pip install వాడతాం.','import math, random, json
from datetime import datetime
print(math.sqrt(16), math.factorial(5))
print(random.randint(1, 10))
data = {"name": "Nihar", "age": 25}
s = json.dumps(data)
print(s, json.loads(s)["name"])
print(datetime.now().year)'),
(15,'15. Python Libraries','Data analysis కి NumPy, Pandas; visualization కి Matplotlib, Seaborn; machine learning కి Scikit-learn; web scraping కి Requests, BeautifulSoup; automation కి Selenium; databases కి sqlite3, MySQL Connector. ఇవి pip install తో install చేయాలి.','import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")
cur.execute("INSERT INTO users (name) VALUES (''Alice'')")
conn.commit()
print(cur.execute("SELECT * FROM users").fetchall())'),
(16,'16. Working with APIs','API అంటే applications ఒకదానితో ఒకటి మాట్లాడుకునే పద్ధతి. REST APIs లో GET (data తీసుకో), POST (పంపు), PUT (update), DELETE (తొలగించు) methods ఉంటాయి. requests module తో call చేసి response.json() తో JSON parse చేస్తాం.','# మీ PC లో: pip install requests
# import requests
# r = requests.get("https://jsonplaceholder.typicode.com/posts/1")
# print(r.status_code, r.json())
import json
response = ''{"id": 1, "name": "Alice", "email": "alice@example.com"}''
user = json.loads(response)
print(user["name"], user["email"])'),
(17,'17. Web Development with Flask','Flask ఒక lightweight web framework. @app.route తో URLs ని functions కి map చేస్తాం; dynamic routes (<name>) మరియు forms (request.form) support చేస్తుంది. Flask browser లో run కాదు — మీ computer లో pip install flask చేసి python app.py run చేయండి.','from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/user/<name>")
def user(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    app.run(debug=True)')
on conflict (id) do update set title=excluded.title,te=excluded.te,code=excluded.code;
