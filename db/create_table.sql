create table product_skillscheck (
    product_id serial primary key,
    image_url varchar(1000) not null,
    product_name VARCHAR(180) not null,
    price varchar(50)
)