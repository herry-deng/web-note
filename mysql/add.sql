
    -- 增加语句

INSERT INTO `students`(studentnum,`name`, birthday,sex,phone,classid)
VALUES('500', 'Pig', '1996-9-20', TRUE, '15179207063',1);

INSERT INTO `students`(studentnum,`name`, birthday,sex,phone,classid)
VALUES('500', 'Pig', '1996-9-20', DEFAULT, '15179207063',1);

-- 增加多个
INSERT INTO `students`(studentnum,`name`, birthday,sex,phone,classid)
VALUES('500', 'Pig', '1996-9-20', DEFAULT, '15179207063',1),
('500', 'herry', '1996-9-20', DEFAULT, '15179207563',1);


--修改
 UPDATE students SET `name`='jason'
 WHERE id=12;


 -- 删除
 DELETE FROM student
 WHERE `name`= 'pig'