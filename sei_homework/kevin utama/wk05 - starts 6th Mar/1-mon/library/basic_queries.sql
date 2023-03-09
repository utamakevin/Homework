-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
  select * from authors;

-- Get just the name and birth year of all authors
  select name, birth-year from authors;

-- Get all authors born in the 20th centruy or later
  select * from authors which birth_year >= 1900;

-- Get all authors born in the USA
  select * from authors where nationalty = 'United States of America';

-- Get all books published on 1985
  select * from books where publication_date = 1985;

-- Get all books published before 1989
select * from books where publication_date < 1989;

-- Get just the title of all books.
select title from books;

-- Get just the year that 'A Dance with Dragons' was published
  select publication_date from books where title='A Dance with Dragons';
  -- Cry when you realize how long it's been
    -- :"(

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
  -- does it include the that are in a middle of a word (eg. thesaurus, bathe)?
    -- yes
      select * from books where title ilike '%the%';
    -- no
      select * from books where title ilike '% the %';

-- Add yourself as an author
  insert into authors(name, nationality, birth_year) values ('Kevin', 'Indonesia', 1997);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
  insert into books(title, publication_date, author_id) values('Hairy Poster and the Boy Who Was Not Unalive', 2023, 9);
  insert into books(title, publication_date, author_id) values('Tim', 2032, 9);

-- Update one of your books to have a new title
  update books set title = 'Hairy Poster and the Boy Who Was Not Unalive Who Was Actually Unalive' where author_id = 9;

-- Delete your books
  -- how dare you after i thought of such a perfect title
  delete from books where author_id=9;

-- Delete your author entry
  delete from authors where id=9;