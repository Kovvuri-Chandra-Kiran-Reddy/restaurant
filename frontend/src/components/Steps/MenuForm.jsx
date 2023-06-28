import React, { useContext, useState } from 'react'
import { Stack, Button, TextField, FormControl } from '@mui/material'
import StepContext from './StepContext';
import { MultiStepContext } from './StepContext';

const menuForm = ({ change }) => {
    const [selectedImage, setSelectedImage] = useState('');
    const { menuItems, setMenuItems } = useContext(MultiStepContext);
    var obj;
    const doSomething = (e) => {
        e.preventDefault();
        // console.log("hehe");
        var itemCategory = document.getElementById('ic');
        var itemName = document.getElementById('in');
        var itemPrice = document.getElementById('ip');
        var itemImg = selectedImage;
        var objectUrl = '';
        if (selectedImage !== '')
            objectUrl = URL.createObjectURL(selectedImage)
        // console.log(itemCategory + ' ' + itemName + ' ' + itemPrice + ' ' + itemImg )
        obj = {
            itemCategory: itemCategory.value,
            itemName: itemName.value,
            itemPrice: itemPrice.value,
            itemImg: objectUrl
        }

        var add = 1;

        if (itemCategory.value === '') {
            alert('please add item category');
            itemCategory.focus()
            return
        }

        if (itemName.value === '') {
            alert('please add item name');
            itemName.focus()
            return
        }

        if (itemPrice.value === '') {
            alert('please add item price');
            itemPrice.focus()
            return
        }

        if (objectUrl === '') {
            alert('please upload item image')
            return
        }

        setMenuItems([...menuItems, obj]);
        document.getElementById('mm').style.display = "none";
        change();

    }

    return (
        <>
            <div style={{ border: "2px solid black", padding: "40px 50px" }} id='mm'>
                <FormControl>
                    <Stack direction="column" alignItems="center" spacing={2}>
                        <TextField label="Item Category" required margin='normal' variant='filled' color='secondary' id='ic'></TextField>
                        <TextField label="Item Name" required margin='normal' variant='filled' color='secondary' id='in'></TextField>
                        <TextField label="Item Price" required type='number' margin='normal' variant='filled' color='secondary' id='ip'></TextField>
                        <Button variant="contained" component="label">
                            Upload Item Image
                            <input hidden accept="image/*" required type="file" onChange={e => setSelectedImage(e.target.files[0])} />
                        </Button>
                        <Button type='submit' variant="contained" onClick={doSomething} component="label"> Submit </Button>
                    </Stack>
                </FormControl>
            </div>
            <br />
        </>
    )
}

export default menuForm
