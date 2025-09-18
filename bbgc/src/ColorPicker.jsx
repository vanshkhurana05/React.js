import { useState } from "react";
import "./ColorPicker.css";

function ColorPicker(){
    const handlecolorchange = (event) => {
        setColor(event.target.value);
        document.body.style.backgroundColor = event.target.value;
    };

    const [color, setColor] = useState("#000000");
    return(
        <div>
            <h1>Color Picker :</h1>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handlecolorchange} />
        </div>
    );
}

export default ColorPicker;

//c => c+1