const CFG = window.PY_CONFIG || { url: "", key: "" };
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const sb = CFG.url && window.supabase ? supabase.createClient(CFG.url, CFG.key) : null;
let PROBS = window.PY_PROBLEMS || [], LESSONS = window.PY_LESSONS, QUIZ = window.PY_QUIZ;
let user = null, done = new Set(), raf = 0, py = null, editorCode = 'print("Hello, Python!")';
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch (e) { return d } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} }
};
function toast(m) { const t = $("#toast"); t.textContent = m; t.style.display = "block"; setTimeout(() => t.style.display = "none", 2200) }

// ---- theme ----
function setTheme(t) { document.documentElement.dataset.theme = t; store.set("theme", t) }
setTheme(store.get("theme", matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"));

// ---- backend (Supabase) with local fallback ----
async function boot() {
  if (sb) {
    const { data } = await sb.auth.getSession(); user = data.session?.user || null;
    sb.auth.onAuthStateChange((_e, s) => { user = s?.user || null; loadProgress().then(route) });
    const r = await sb.from("lessons").select("id,title,te,code,level,notes").order("id");
    if (r.data?.length) LESSONS = r.data;
    const pr = await sb.from("problems").select("lesson_id,title,input,output,solution,explanation,solution2,explanation2").order("lesson_id").order("sort");
    if (pr.data?.length) PROBS = pr.data.map(x => ({ l: x.lesson_id, t: x.title, i: x.input, o: x.output, s: x.solution, e: x.explanation, s2: x.solution2, e2: x.explanation2 }));
  }
  await loadProgress(); route();
}
async function loadProgress() {
  if (sb && user) { const { data } = await sb.from("progress").select("lesson_id").eq("user_id", user.id); done = new Set((data || []).map(r => r.lesson_id)) }
  else done = new Set(store.get("done", []));
}
async function markDone(id) {
  done.add(id); store.set("done", [...done]);
  if (sb && user) await sb.from("progress").upsert({ user_id: user.id, lesson_id: id });
  toast("Lesson పూర్తి ✓"); route();
}
async function saveQuiz(score, total) {
  const h = store.get("quiz", []); h.push({ score, total, at: new Date().toISOString() }); store.set("quiz", h);
  if (sb && user) await sb.from("quiz_results").insert({ user_id: user.id, score, total });
}
async function quizHistory() {
  if (sb && user) { const { data } = await sb.from("quiz_results").select("score,total,created_at").eq("user_id", user.id).order("created_at", { ascending: false }); return (data || []).map(r => ({ score: r.score, total: r.total, at: r.created_at })) }
  return store.get("quiz", []).slice().reverse();
}

// ---- python runner (Pyodide, loads on first run) ----
async function runPy(code, out) {
  out.textContent = "Python load అవుతోంది…";
  try {
    if (!py) {
      await new Promise((ok, no) => { const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js"; s.onload = ok; s.onerror = no; document.head.appendChild(s) });
      py = await loadPyodide();
      py.runPython("import builtins, js\nbuiltins.input = lambda p='': js.prompt(p) or ''");
    }
    let buf = ""; py.setStdout({ batched: s => buf += s + "\n" }); py.setStderr({ batched: s => buf += s + "\n" });
    await py.runPythonAsync(code); out.textContent = buf || "(output లేదు)";
  } catch (e) { out.textContent = String(e.message || e).split("\n").slice(-4).join("\n") }
}

// ---- 3D hero (pure CSS) ----
function hero() {
  const h = $("#hero"); if (!h || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const w = h.querySelector(".win");
  h.onpointermove = e => { const b = h.getBoundingClientRect(); w.style.setProperty("--rx", ((e.clientX - b.left) / b.width - .5) * 30); w.style.setProperty("--ry", -((e.clientY - b.top) / b.height - .5) * 20) };
  h.onpointerleave = () => { w.style.removeProperty("--rx"); w.style.removeProperty("--ry") };
}

// ---- pages ----
const pct = () => Math.round(done.size / LESSONS.length * 100);
const probs = id => PROBS.filter(p => p.l == id);
const P = {
  home: () => `<div class="hero" id="hero"><div class="copy"><span class="pill">Beginner నుండి Advanced వరకు</span><h1>Python ని professional గా నేర్చుకో.</h1><p>Clear lessons, hands-on practice problems, live code editor, projects మరియు certificate. అన్నీ ఒకే చోట.</p><a class="btn" href="#/learn/b">Start learning</a> <a class="btn ghost" href="#/learn/p">Advanced track</a></div><div class="scene" aria-hidden="true"><div class="win"><pre>def learn(day):\n    print("Python")\n\nfor day in range(30):\n    learn(day)</pre><b class="chip c1">def</b><b class="chip c2">for</b><b class="chip c3">class</b><b class="chip c4">print()</b></div></div></div>
    <div class="stats"><div><b>${LESSONS.length}</b><span>Lessons</span></div><div><b>${PROBS.length}</b><span>Practice problems</span></div><div><b>3</b><span>Projects</span></div><div><b>${pct()}%</b><span>Your progress</span></div></div>
    <section class="sec"><h2>Choose your path</h2><div class="grid"><a class="card path" href="#/learn/b"><h3>Beginner</h3><p>Python basics step by step. ఒక్కో lesson కి 5 input/output problems, solution దాచి ఉంటుంది.</p><p class="tag">Variables, loops, strings, lists, functions, OOP</p></a><a class="card path pro" href="#/learn/p"><h3>Intermediate &amp; Advanced</h3><p>Experienced learners కోసం separate lessons మరియు deep explanations మరియు ఒక్కో lesson కి 10 complex problems, రెండేసి approaches తో.</p><p class="tag">Generators, decorators, closures, algorithms</p></a></div></section>
    <section class="sec"><h2>How it works</h2><div class="grid"><div class="card"><h3>1. Learn</h3><p>Telugu + English లో concepts, method tables మరియు examples.</p></div><div class="card"><h3>2. Practice</h3><p>Problem చూసి సొంతంగా try చేయి. అవసరమైతే solution మరియు explanation తెరువు.</p></div><div class="card"><h3>3. Get certified</h3><p>Quiz లో 60% పైగా score చేసి certificate download చేయి.</p></div></div></section>
    <section class="sec"><h2>Everything you need</h2><div class="grid"><div class="card"><h3>Live Python editor</h3><p>Browser లోనే code run అవుతుంది, install అవసరం లేదు.</p></div><div class="card"><h3>Real projects</h3><p>ATM, Billing, Calculator.</p></div><div class="card"><h3>Progress sync</h3><p>Login చేస్తే progress Supabase లో save అవుతుంది.</p></div><div class="card"><h3>Install as app</h3><p>PWA: home screen కి add చేసి offline లో కూడా వాడు.</p></div><div class="card"><h3>Light and dark mode</h3><p>ఒక్క tap తో theme మార్చు.</p></div><div class="card"><h3>Quiz and certificate</h3><p>మీ నైపుణ్యాన్ని test చేసి certificate పొందండి.</p></div></div></section>
    <footer>PyPath, Python learning for Telugu learners</footer>`,
  learn: lv => { const pro = lv === "p", list = LESSONS.filter(l => (l.level || "b") === (pro ? "p" : "b")); return `<h2>Lessons</h2><div class="tabs"><a href="#/learn/b" class="${pro ? "" : "on"}">Beginner</a><a href="#/learn/p" class="${pro ? "on" : ""}">Intermediate &amp; Advanced</a></div><p class="tag">${pro ? "Deep explanations + complex problems, రెండు approaches తో" : "Basic lessons, ఒక్కో lesson కి 5 practice problems"}</p><div class="grid">${list.map(l => `<a class="card ${done.has(l.id) ? "done" : ""}" href="#/lesson/${l.id}"><h3>${esc(l.title)}</h3><p class="tag">${probs(l.id).length} problems, ${done.has(l.id) ? "✓ పూర్తయింది" : "ప్రారంభించు"}</p></a>`).join("")}</div>` },
  lesson: id => { const l = LESSONS.find(x => x.id == id); if (!l) return "<p>Lesson దొరకలేదు.</p>"; const ps = probs(l.id);
    return `<span class="pill">${l.level === "p" ? "Intermediate &amp; Advanced" : "Beginner"}</span><h2>${esc(l.title)}</h2><p>${esc(l.te)}</p>${(l.notes || []).length ? `<div class="notes">${l.notes.map(n => `<p><code>${esc(n[0])}</code>${esc(n[1])}</p>`).join("")}</div>` : ""}<pre>${esc(l.code)}</pre><div class="row"><button id="try">Editor లో run చేయి</button><button class="ghost" id="fin">${done.has(l.id) ? "పూర్తయింది ✓" : "Mark complete"}</button>${LESSONS.find(x => x.id == l.id + 1) ? `<a class="btn ghost" href="#/lesson/${l.id + 1}">Next</a>` : `<a class="btn ghost" href="#/quiz">Quiz తీసుకో</a>`}</div>
    <h3>Practice problems</h3>${ps.length ? ps.map((p, k) => `<div class="prob"><b>${k + 1}. ${esc(p.t)}</b><pre>Input:\n${esc(p.i)}\n\nOutput:\n${esc(p.o)}</pre><div class="row"><button data-try="${l.id}:${k}">Editor లో try చేయి</button></div><details><summary>Solution &amp; explanation</summary>${p.s2 ? "<h4>Approach 1</h4>" : ""}<pre>${esc(p.s)}</pre><p>${esc(p.e)}</p>${p.s2 ? `<h4>Approach 2</h4><pre>${esc(p.s2)}</pre><p>${esc(p.e2)}</p>` : ""}<button class="ghost" data-run="${l.id}:${k}">Editor లో run చేయి</button></details></div>`).join("") : `<p class="tag">ఈ lesson కి problems త్వరలో add అవుతాయి.</p>`}` },
  editor: () => `<h2>Code editor</h2><textarea id="code" spellcheck="false" aria-label="Python code">${esc(editorCode)}</textarea><div class="row"><button id="run">Run</button><span class="tag">input() browser prompt తో పనిచేస్తుంది</span></div><pre id="out">Output ఇక్కడ కనిపిస్తుంది</pre>`,
  projects: () => `<h2>Projects</h2><div class="grid">${PROJECTS.map((p, i) => `<div class="card"><h3>${p.n}</h3><p class="tag">${p.d}</p><button data-p="${i}">Editor లో తెరువు</button></div>`).join("")}</div>`,
  quiz: () => `<h2>Quiz</h2><div id="qz"></div>`,
  auth: () => sb ? (user ? `<h2>Account</h2><p>${esc(user.email)}</p><button id="out2">Log out</button>` : `<h2>Login / Sign up</h2><input id="em" type="email" placeholder="Email" autocomplete="email"><input id="pw" type="password" placeholder="Password (6+ chars)" autocomplete="current-password"><div class="row"><button id="li">Login</button><button class="ghost" id="su">Sign up</button></div>`) : `<h2>Login</h2><p>Supabase connect కాలేదు. index.html పైభాగంలో CFG లో URL మరియు anon key పెట్టండి. అప్పటివరకు progress ఈ browser లో save అవుతుంది.</p>`,
  dashboard: () => `<h2>Progress</h2><div class="bar" aria-label="progress"><i style="width:${pct()}%"></i></div><p>${done.size}/${LESSONS.length} lessons పూర్తి (${pct()}%)</p><h3>Quiz history</h3><div id="hist">…</div><a class="btn" href="#/certificate">Certificate</a>`,
  certificate: () => { const hist = store.get("quiz", []), ok = hist.some(h => h.score / h.total >= .6) || false; return ok ? `<div class="cert"><p>Certificate of Completion</p><h1 id="cn">${esc(user?.email?.split("@")[0] || "Learner")}</h1><p>successfully passed the Python Fundamentals quiz</p><p>${new Date().toLocaleDateString()}</p></div><div class="row noprint"><input id="nm" placeholder="మీ పేరు"><button id="pr">Print / Save PDF</button></div>` : `<h2>Certificate</h2><p>Quiz లో 60% పైగా score చేస్తే certificate వస్తుంది.</p><a class="btn" href="#/quiz">Quiz తీసుకో</a>` }
};
const PROJECTS = [
  { n: "ATM Simulator", d: "Balance, deposit, withdraw", c: 'balance = 1000\nwhile True:\n    c = input("1 Balance 2 Deposit 3 Withdraw 4 Exit: ")\n    if c == "1":\n        print("Balance:", balance)\n    elif c == "2":\n        balance += int(input("Amount: "))\n    elif c == "3":\n        amt = int(input("Amount: "))\n        if amt <= balance:\n            balance -= amt\n        else:\n            print("Insufficient funds")\n    elif c == "4":\n        break\nprint("Thank you!")' },
  { n: "Billing App", d: "Items, quantity, total", c: 'items = {"Pen": 10, "Book": 50, "Bag": 400}\ntotal = 0\nfor name, price in items.items():\n    qty = int(input(f"{name} (₹{price}) qty: ") or 0)\n    total += price * qty\nprint(f"Total bill: ₹{total}")' },
  { n: "Calculator", d: "+ - * / with error handling", c: 'try:\n    a = float(input("A: "))\n    op = input("Operator (+ - * /): ")\n    b = float(input("B: "))\n    ops = {"+": a + b, "-": a - b, "*": a * b, "/": a / b}\n    print("Result:", ops[op])\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\nexcept (ValueError, KeyError):\n    print("Invalid input")' }
];

// ---- router (works even where hash navigation is blocked) ----
let cur = location.hash.slice(1) || "/";
function go(p) { cur = p; try { history.pushState(null, "", "#" + p) } catch (e) {} route() }
document.addEventListener("click", e => { const a = e.target.closest('a[href^="#/"]'); if (a) { e.preventDefault(); go(a.getAttribute("href").slice(1)) } });
addEventListener("popstate", () => { cur = location.hash.slice(1) || "/"; route() });
function route() {
  cancelAnimationFrame(raf);
  const [, page = "home", arg] = cur.split("/"), pg = P[page] ? page : "home";
  $("#nav").innerHTML = `<span class="logo">PyPath</span>` + [["home", "Home"], ["learn", "Lessons"], ["editor", "Editor"], ["projects", "Projects"], ["quiz", "Quiz"], ["dashboard", "Progress"], ["auth", user ? "Account" : "Login"]].map(([k, t]) => `<a href="#/${k}" class="${k === pg ? "on" : ""}">${t}</a>`).join("") + `<button class="ghost" id="th" aria-label="Light/Dark mode మార్చు" style="margin-left:auto;padding:6px 12px">${document.documentElement.dataset.theme === "dark" ? "☀ Light" : "☾ Dark"}</button>`;
  $("#th").onclick = () => { setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"); route() };
  $("#app").innerHTML = P[pg](arg); scrollTo(0, 0); wire(pg, arg);
}
function wire(pg, arg) {
  document.querySelectorAll("[data-try]").forEach(b => b.onclick = () => { const [i, k] = b.dataset.try.split(":"), p = probs(i)[k], c = x => x.split("\n").map(z => "#   " + z).join("\n"); editorCode = "# " + p.t + "\n# Input:\n" + c(p.i) + "\n# Output:\n" + c(p.o) + "\n\n"; go("/editor") });
  document.querySelectorAll("[data-run]").forEach(b => b.onclick = () => { const [i, k] = b.dataset.run.split(":"); editorCode = probs(i)[k].s; go("/editor") });
  if (pg === "home") hero();
  if (pg === "lesson") { $("#fin").onclick = () => markDone(+arg); $("#try").onclick = () => { editorCode = LESSONS.find(x => x.id == arg).code; go("/editor") } }
  if (pg === "editor") { $("#code").oninput = e => editorCode = e.target.value; $("#run").onclick = () => runPy($("#code").value, $("#out")) }
  if (pg === "projects") document.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { editorCode = PROJECTS[b.dataset.p].c; go("/editor") });
  if (pg === "quiz") quiz(0, 0);
  if (pg === "dashboard") quizHistory().then(h => $("#hist").innerHTML = h.length ? h.map(x => `<p>${x.score}/${x.total} — ${new Date(x.at).toLocaleDateString()}</p>`).join("") : "<p class='tag'>ఇంకా quiz తీసుకోలేదు.</p>");
  if (pg === "certificate" && $("#pr")) { $("#nm").oninput = e => $("#cn").textContent = e.target.value || "Learner"; $("#pr").onclick = () => print() }
  if (pg === "auth" && sb) {
    if (user) $("#out2").onclick = () => sb.auth.signOut();
    else {
      const go = async fn => { const r = await sb.auth[fn]({ email: $("#em").value, password: $("#pw").value }); toast(r.error ? r.error.message : fn === "signUp" ? "Email confirm చేయండి" : "Logged in") };
      $("#li").onclick = () => go("signInWithPassword"); $("#su").onclick = () => go("signUp");
    }
  }
}
function quiz(i, score) {
  const box = $("#qz");
  if (i >= QUIZ.length) { saveQuiz(score, QUIZ.length); box.innerHTML = `<h3>Score: ${score}/${QUIZ.length}</h3><p>${score / QUIZ.length >= .6 ? "అభినందనలు! Certificate unlock అయింది." : "మళ్ళీ ప్రయత్నించు."}</p><a class="btn" href="#/certificate">Certificate</a> <button class="ghost" id="rt">Retry</button>`; $("#rt").onclick = () => quiz(0, 0); return }
  const q = QUIZ[i]; box.innerHTML = `<p class="tag">${i + 1} / ${QUIZ.length}</p><h3>${esc(q.q)}</h3>` + q.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("");
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const k = +b.dataset.k; box.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("ok") }); if (k !== q.a) b.classList.add("bad");
    setTimeout(() => quiz(i + 1, score + (k === q.a ? 1 : 0)), 900)
  });
}
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
boot();
