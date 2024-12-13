create table student(
student_id varchar(15)primary key,
first_name varchar (15) not null,
last_name varchar(15) not null,
gender char(1),
age int,
user_id varchar(10),
phone_number varchar(15),
student_type char(15),
foreign key user_id REFERENCES user(user_id)
)

create table users(
user_id varchar(10) primary key,
email varchar(30),
password varchar(10),
token int,
role char(15)
)

create table staff(
staff_id varchar(15) primary key,
first_name varchar(15) not null,
last_name varchar(15) not null,
user_id varchar(10),
phone_number int,
department_id varchar(15),
position char(15),
qualification varchar(25),
foreign key user_id REFERENCES users(user_id)
)

create table academics(
id varchar(10) primary key,
admission char(15),
student_id varchar(15),
status char(10)
foreign key student_id REFERENCES student(student_id)
)

create table courses(
course_code varchar(15) primary key,
course_name varchar(20),
credit_hours int,
semester int,
level_ int,
course_program_id varchar(10),
foreign key course_program_id REFERENCES course_program(course_program_id)
)


create table registered_courses(
id int auto_increment primary key,
student_id varchar(15),
course_code varchar(15),
score int    ,
foreign key student_id REFERENCES student(student_id),
foreign key course_code REFERENCES courses(course_code)
)

create table program(
program_id varchar(15) primary key,
program_name varchar(30),
department_id varchar(15),
program_duration int,
course_program_id varchar(10)
foreign key department_id REFERENCES department(department_id)
foreign key course_program_id REFERENCES course_program(course_program_id)
)


create table course_program(
id varchar(10) primary key,
program_id varchar(15),
course_code varchar(15),
foreign key program_id REFERENCES program(program_id),
foreign key course_code REFERENCES courses(course_code)
)


create table department(
department_id varchar(15)primary key,
department_name varchar(40),
faculty_id varchar(15),
head_of_department varchar(30),
exam_officer varchar(30)
foreign key faculty_id REFERENCES faculty(faculty_id)
)


create table faculty(
faculty_id varchar(15) primary key,
faculty_name varchar(25),
address_ varchar(15),
dean_of_faculty varchar(30)
)