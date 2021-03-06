# Schema Information

## tracks
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
track_url      | string    | not null (hosted on CDN)
description    | text      |
location       | text      |
rating         | float     | range 1-5, initialized null
artist_id      | integer   | not null, foreign key (references users), indexed
soundscape_id | integer   | not null, foreign key (references trackbooks), indexed


## soundscapes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_url   | string    | not null
description | string    |


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
track_id    | integer   | not null, foreign key (references tracks), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
profile_pic     | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## collections
column name      | data type  | details
-----------------|------------|-----------------------
id               | integer    | not null, primary key
track_id         | integer    | not null, foreign key (references tracks), indexed
user_id          | integer    | not null, foreign key (references users), indexed
purchased        | boolean    | not null, defaults false

## playlists
column name      | data type  | details
-----------------|------------|-----------------------
id               | integer    | not null, primary key
track_id         | integer    | not null, foreign key (references tracks), indexed
user_id          | integer    | not null, foreign key (references users), indexed
title            | string     | not null


* ***BONUS***

## welcomes
column name      | data type  | details
-----------------|------------|-----------------------
id               | integer    | not null, primary key
image_url        | string     | not null
title            | string     | not null
body             | text       | not null
