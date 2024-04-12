import Card from "./Card";
const Cards= (props)=>{
     let courses =props.courses;
     console.log(courses)
    
       function getCourses(){
        let allCourses =[];
        Object.values(courses).forEach(array=>{
            array.forEach(course=>{
                allCourses.push(course);
            })
        })
        return allCourses;
        }
      
    

    return(
        <div>
            {
               getCourses().map((course)=>(
                <Card key={course.id} course={course}></Card>
               ))
            }
        </div>
    );

}
export default Cards;