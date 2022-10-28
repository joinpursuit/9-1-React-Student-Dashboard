function Cohort({year, handleFilter}) {
    return (
        <div className="year">
            <h3 onClick={(event) => handleFilter(event)} >{year}</h3>
        </div>
    )
}

export default Cohort
