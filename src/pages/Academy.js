import data from '../datas/academy_data.json';
import { useParams } from 'react-router-dom';

function Academy(){
    const { uid } = useParams();
    const academy = data.find((item) => item.uid === Number(uid));

    return(
        <main>
            {academy ? (
            <> 
                {/* <p>{academy.academy_name}</p>
                <p>{academy.subject_name}</p>
                <p>{academy.phone_number}</p>
                <p>{academy.address}</p>
                <p>{academy.description}</p> */}
             </>
    ) : (
      <p>학원 정보를 불러올 수 없습니다.</p>
    )}
        </main>
    );
}

export default Academy;