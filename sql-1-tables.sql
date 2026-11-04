-- STEP 1 of 8: tables and security rules (run first)
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
delete from progress where lesson_id between 101 and 199;
delete from lessons where id between 101 and 199;
