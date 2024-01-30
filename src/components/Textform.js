import { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', "success");

    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', "success");
    };

    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
        props.showAlert('Text cleared', "success");
    };


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-2" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#134666' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="7"></textarea>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Conert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleLowClick}>Conert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minute to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
            </div>
        </>
    );
}