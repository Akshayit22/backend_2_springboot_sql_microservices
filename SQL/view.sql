use world;
show tables;-- city country countrylanguage
desc city;
desc country;
desc countrylanguage;

create or replace view city_lang as
select c.id, c.name, l.language,l.countryCode from city c
join countrylanguage l 
on c.countryCode  = l.countryCode;

select * from city_lang where countryCode like 'IND' and language like 'marathi';

create role james;

-- view can be used to hide details by giving only view with specific permissions to client, parteners, 

grant select on city_lang to james;
