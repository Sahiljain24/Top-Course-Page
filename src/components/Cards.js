const Cards= ({courses})=>{
    return(
        <div>
            {
                courses.map((course)=>{
                   return(
                     <Card course={course}></Card>
                     );
                })
            }
        </div>
    );

}
export default Cards;