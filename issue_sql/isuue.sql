SELECT divisions.division_name, COUNT(*) From members
JOIN divisions ON members.division_id = divisions.division_id
GROUP BY divisions.division_name;

-- division_name | count
---------------+-------
 -- 総務部        |     2
 -- 人事部        |     2
 -- システム部    |     6
 -- 営業部        |     2
-- (4 rows)
