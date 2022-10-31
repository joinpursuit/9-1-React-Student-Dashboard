import React from 'react';
import Cards from './Cards';



function StudentList({ data, StudentTotal, title }) {

    const filterClass = data.filter(
        (e) => e.cohort.cohortCode === title.split(' ').join('')
      );


    const firstDetail = data.map((deets) => {
        const newDate= new Date(deets.dob)
        const formatDate= new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
        }).format(newDate)

        return <Cards deets={deets} formatDate={formatDate} />
      });

      const secondDetail = filterClass.map((deets) => {
        const newDate = new Date(deets.dob);
        const formatDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
        }).format(newDate);

        return <Cards deets={deets} formatDate={formatDate} />;

    });


      return(
        <>
      <p>
        Total Students: 
        <span>{title === 'All Students' ? StudentTotal : secondDetail.length}</span>
      </p>
      <div className="student-cards">
        {title === 'All Students' ? firstDetail : secondDetail}
      </div>
    </>
      )
    }

export default StudentList;