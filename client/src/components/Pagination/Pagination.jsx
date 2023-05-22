import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../redux/actions";

export default function Pagination({paginas}) {
    const currentPage = useSelector((state) => state.currentPage)
    const dispatch = useDispatch()

    const firstPage = () => {
        dispatch(pagination(currentPage, "primero"))
    }

    const prevPage = () => {
        if(currentPage === 0) {
            return
        } else {
            dispatch(pagination(currentPage, "anterior"))
        }
    }

    const nextPage = () => {
        if(currentPage === paginas) {
            return
        } else {
            dispatch(pagination(currentPage, "siguiente"))
        }
    }

    const lastPage = () => {
        dispatch(pagination(paginas, "ultimo"))
    }
    
    return (
        <div>
            <button onClick={firstPage}> {'<<'} </button>
            <button onClick={prevPage}> {'<'} </button>
            <label>{currentPage + 1}</label>
            <button onClick={nextPage}> {'>'} </button>
            <button onClick={lastPage}> {'>>'} </button>
        </div>
    );
};