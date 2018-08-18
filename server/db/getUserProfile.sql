select firstname, lastname, username, profilepicture, about from users 

left join about as a on users.id = a.artistid

where users.id = ${id}