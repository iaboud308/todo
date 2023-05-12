import { FormControl, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "./Header";
import { useState } from "react";




type Item = {
    id: number;
    item: string
}




const highestId = (array: Item[]) => {

    if(array.length < 1) {
        return 0;
    }

    let id = array[0].id;

    array.forEach((item: Item) => {
        if(item.id > id) {
            id = item.id;
        }
    })

    return id;
}





const Main = () => {

    const [items, setItems]: any = useState([]);
    const [currentItem, setCurrentItem]: any = useState('');



    const handleChange = (e: any) => {
        setCurrentItem(e.target.value);
    }



    const addItem = (e: any) => {
        e.preventDefault();

        if(currentItem.trim().length === 0) {
            return;
        }

        const newArray = [...items];
        const itemId = highestId(items) + 1;
        newArray.push({ id: itemId, item: currentItem });
        setItems(newArray);
        setCurrentItem('');
    }


    const deleteItem = (id: number) => {
        const newArray = items.filter((item: Item) => {
            return item.id !== id;
        })
        setItems(newArray);
    }




  return (
    <div>
        <Header />
        <div className="container mt-5">
            <form onSubmit={addItem}>
                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <TextField label="Item" variant="standard" fullWidth value={currentItem} onChange={handleChange} />
                </FormControl>
                <input type="submit" value={`Add Item`} className="btn btn-secondary mt-5 ms-2" />
                {/* <button className="btn btn-secondary mt-5 ms-2" onClick={addItem}>Add Item</button> */}
            </form>

            <div className="mt-5">
                <ul className="list border-0">

                {
                    items.map((item: Item, index: number) => {
                        return (
                            <li className="list-item justify-content-between align-items-center border-bottom border-color-secondary" key={index}>
                                <div className="">
                                    <h4 className="">{ `${item.item}` }</h4>
                                </div>
                                <div className="">
                                    <span className="">
                                        <button className="btn hoverable p-2" onClick={() => deleteItem(item.id)}>
                                            <DeleteIcon className="" color="primary" />
                                        </button>
                                    </span>
                                </div>
                            </li>
                            );
                        })
                    }

                </ul>
            </div>


                
        </div>

    </div>
  );
}

export default Main;