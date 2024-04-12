import {FcLike ,Fc} from "react-icons/fc"
const Card = ({course})=>{
    console.log({course})

    return(
        <div>
             <div>
                <img src={course.image.url} alt={course.image.alt}></img>
            </div>
                <div>
                    <button>
                        <FcLike> fontsize="1.75rem"</FcLike>
                    </button>
                </div>
           
             <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
             </div>
        </div>
    );
}
    
export default Card