export default function About(props) {
    let myStyle ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#34495E':'white',
    }
    return (
        <div className="container" style={{color: props.mode === 'dark'?'white':'black',}}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>What is text formatting?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Formatted text is text that is displayed in a special, specified style. In computer applications, formatting data may be associated with text data to create formatted text. How formatted text is created and displayed is dependent on the operating system and application software used on the computer.</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Purpose</strong>

                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The purpose of formatted text is to enhance the presentation of information. For example, in the previous paragraph, the italicized words are each followed by examples. At a glance, the reader can ascertain that there are four special words in the paragraph. The goal is to help the reader to obtain, understand, and retain the information.</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <strong>Copying formatted text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> When you copy formatted text to your clipboard, formatting information may or may not be copied with the text data.

                                                         For example, if you select text in one application that is boldface, you can copy it to your clipboard by pressing Ctrl+C. The formatting data is also copied to the clipboard, saying "this text is bold." When you paste it (Ctrl+V) into a program that also supports formatted text, that formatting data is included, and the pasted text should appear bold.

                                                          However, if you paste the text into an application that does not support bold text, such as Microsoft Notepad, the pasted text is unformatted. Notepad ignores the formatting information, because it doesn't understand it. However, the plain text is pasted correctly.

                                                         The same is true if you paste the formatted text into a text field, such as the address bar in your web browser. Formatting data is stripped, but the plain text is pasted.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}