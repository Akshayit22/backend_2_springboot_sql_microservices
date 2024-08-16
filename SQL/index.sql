use world;
show tables;-- city country countrylanguage
desc city;
desc country;
desc countrylanguage;

create index city_district
on city(district);

-- Query optimization using indexes in searching

show indexes from city;

drop index city_district on city;

create index city_index
on city(district, name, countryCode);