create procedure insertSales(psaleId int, pamt int, pdate date)
begin
insert into sales ( sales_id, amount, sales_date)
values(psaleId, pamt, pdate);
end;

create procedure ViewSaleRecords()
begin
SELECT * FROM 
sales;
end;

delimiter $$
create procedure ViewSaleByDate(pdate date)
begin
SELECT * FROM 
sales
where sales_date = pdate;
end;