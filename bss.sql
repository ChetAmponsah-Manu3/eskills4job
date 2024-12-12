
use basic_school_system;

create table users(
id int  primary key unique,
username varchar(50) not null,
email varchar(50) not null unique,
password varchar(10) not null,           
role enum("admin", "student", "teacher") not null,
created_at timestamp default current_timestamp,
updated_at timestamp default  current_timestamp on update current_timestamp
);

create table teacher(
teacher_id int primary key unique,
id int unique,
first_name varchar(20) not null,
last_name varchar(30)not null,
gender char(1),
phone_number bigint not null unique,
qualification varchar(50) not null,
foreign key (id) REFERENCES users(id)
);

create table student(
student_id int primary key unique,
id int unique,
first_name varchar(20) not null,
last_name varchar(30) not null,
gender char(1),
phone_number bigint not null unique,
level varchar(30) not null,
year_of_entry int,
foreign key (id) REFERENCES users(id)
);

create table results(
id int auto_increment primary key,
subject_id varchar(20),
student_id int unique,
academic_year int not null,
semester char(20),
score int,
uploaded_by varchar(50),
approved_by varchar(50),
foreign key (student_id) REFERENCES student(student_id),
foreign key (subject_id) REFERENCES subject(subject_id)
);

create table subject(
subject_id varchar(20) primary key,
subject_name varchar(30)
);


create table finance(
id int auto_increment primary key,
academic_year int not null,
billing varchar(15) not null,
payment int not null,
student_id  int unique,
status enum("paid", "owning") not null,
date DATE not null,
foreign key (student_id) REFERENCES student(student_id)
);