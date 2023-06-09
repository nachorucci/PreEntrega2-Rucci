import {useState, useEffect} from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [productos, setproductos] = useState(null);

    const {idItem} = useParams();

    useEffect(()=>{
        getUnProducto(idItem)
        .then(res => setproductos(res))
    },[idItem])
  return (
    <div>
      <ItemDetail {...productos} />
    </div>
  )
}

export default ItemDetailContainer
