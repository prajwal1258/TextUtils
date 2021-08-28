
import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked " + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked " + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }
    
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");

    }

    const handleClClick = ()=>{
        // console.log("Uppercase was Clicked " + text);
        let newText= "";
        setText(newText)
        props.showAlert("text has been Cleared","success");
    }
    const handleReverseText = () => {
        // console.log("Warning your data can be revesed .But don't worry because you can again reverse it to get the correct data.Thank you for using this function.");
        const Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");


        console.log(Text.reverse().toString().replaceAll(",", ""));
        setText(reverseText)
        props.showAlert("The String is Reversed!","success");
    }

    // const download=(filename, text)=>{
    //     var element = document.createElement('a');
    //     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    //     element.setAttribute('download', filename);
    //     element.style.display = 'none'; document.body.appendChild(element);
    //     element.click(); document.body.removeChild(element);
    //   }

    //   const handlesubstrClick=()=>{
    //     console.log("Clear text was clicked" + text);
    //     let newText=text.substring(0,4);
    //     setText(newText)
    // }  
    const del=()=>{
        let newtext=text.substring(text.length,(text.length-(text.length-1)))       
        setText(newtext);
        props.showAlert("The text has been Deleted!","success");
            }

    // const capitalize = () => {
        
    //             let firstchar = text.charAt(0); // storing the first char of the string
    //             let newText= firstchar.toUpperCase(); // converting that to uppercase
    //             setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
        
    //         } 
    // const intoTitleCase = () => {
    //             let newText = text.split(" ").map((currentValue) => {
    //                 let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //                 return newText;
    //             });
    //             setText(newText.join(" "));
    //         }     
    
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpaces has been removed!","success");
    }
    
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text="new Text" //wrong way to change state
    // setText=("new text") //correct way to change state
    return (
        <>
        <div className="container" style={{color:props.mode ===`dark`?`white`:`black`}}>
           <h1>{props.heading}</h1> 
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'grey':'white' ,color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>  
          <button className="btn btn-primary mx-1" onClick={handleUpClick} >Uppercase Format</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick} >Lowercase Format</button>                                
          <button className="btn btn-primary mx-1" onClick={handleCopy} >Copytext</button>  
          <button className="btn btn-primary mx-1" onClick={handleClClick} >Clear</button>
          <button className="btn btn-primary mx-1" onClick={handleReverseText} >Reverse Format</button>  
          {/* <button className="btn btn-primary mx-1" onClick={download} >Download</button>  */}
          {/* <button className="btn btn-primary mx-1" onClick={handlesubstrClick} >Substring</button>  */}
          <button className="btn btn-primary mx-1" onClick={del} >Delete</button>
          {/* <button className="btn btn-primary mx-1" onClick={capitalize} >Capatilize first String</button>  */}
          {/* <button className="btn btn-primary mx-1" onClick={intoTitleCase} >Titlecase</button>     */}
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extraspaces</button> 
        </div>
        <div className="container my-3" style={{color:props.mode ===`dark`?`white`:`black`}}>
          <h2 className="my-4">Your text Summary</h2>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.008*text.split(" ").length} Minutes to read..</p>
          <h2 className="my-4">Preview</h2>
          <p>{text.length>0?text:"Nothing to preview it here!"}</p>
        </div>
        </>
    )
}
