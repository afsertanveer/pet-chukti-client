import { useEffect } from 'react';
const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -PetChukti`;
    },[title])
}

export default useTitle;