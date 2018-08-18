select firstname, lastname, username, profilepicture, A.about, COALESCE(images.gallery, '[]') AS Gallery from users U

JOIN (
    SELECT
      S.artistid,
      json_agg(
        (
          SELECT
            x
          FROM(
              SELECT
                S.url,
                S.description
            ) x
        )
      ) AS gallery
    FROM
      images S
    GROUP BY
      S.artistid
  ) AS images ON images.artistid = U.id 

  JOIN about AS A on U.id = A.artistid
  
  WHERE U.username = ${username}