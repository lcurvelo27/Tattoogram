SELECT w.about FROM users as U 

JOIN about as w on U.id = w.artistid

WHERE U.username = ${username}