CREATE SCHEMA `php_reps` ;


create table php_reps.product_inventory(
inventory_id integer,
Quantity integer,
location varchar(50),
primary key(inventory_id));



create table php_reps.product(
product_id varchar(50),
product_name varchar(50),
description varchar(50),
category varchar(50),
price decimal(10,2),
inventory_id integer,
primary key(product_id),
foreign key(inventory_id) references product_inventory(inventory_id));



create table php_reps.sales(
    sales_id integer,
    amount decimal(10,3),
    sales_date date,
    primary key(sales_id)
);

create table php_reps.product_sales(
    prosale_id integer,
    sales_id integer,
    product_id varchar(50),
    primary key(prosale_id),
    foreign key(sales_id) references sales(sales_id),
    foreign key(product_id) references product(product_id)
);

