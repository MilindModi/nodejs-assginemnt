select c.name,  GROUP_CONCAT(s.subjectName order by  s.subjectName ) as subjects
  from customers c , subjects s , customer_subject cs 
  WHERE s.subjectId = cs.subjectId and cs.customerId = c.customerId
  group by(c.name) 
  order by (c.customerId);