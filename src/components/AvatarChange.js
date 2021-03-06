import { Avatar, Button, Box, Slider } from "@material-ui/core";
import { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import './AvatarChange.css';




const AvatarChange = () => {
var editor = "";
const [picture, setPicture] = useState({
cropperOpen: false,
img: null,
zoom: 2,
croppedImg:
"abdou.png"
});

const handleSlider = (event, value) => {
setPicture({
...picture,
zoom: value
});
};

const handleCancel = () => {
setPicture({
...picture,
cropperOpen: false
});
};

const setEditorRef = (ed) => {
editor = ed;
};

const handleSave = (e) => {
if (setEditorRef) {
const canvasScaled = editor.getImageScaledToCanvas();
const croppedImg = canvasScaled.toDataURL();

setPicture({
  ...picture,
  img: null,
  cropperOpen: false,
  croppedImg: croppedImg
});
}
};

const handleFileChange = (e) => {
let url = URL.createObjectURL(e.target.files[0]);
console.log(url);
setPicture({
...picture,
img: url,
cropperOpen: true
});
};


const inputChangeAvatar = () => {

  <input id="btnChoisirFichier" type="file" accept="image/*" onChange={handleFileChange} />
} 

return (
<div className="containerAvatarEtPrevisualisation">


  <div >
    <div className="containerAvatarPrefait">
    <Avatar
      src={picture.croppedImg}
      style={{ display:"flex", width: "40%", height: "auto", padding: "5" }}
    />
    <Button
      variant="contained"
      width="100%"
      style={{ display: "", backgroundColor: "transparent", color: "white" }}
    >
      
      <input id="btnChoisirFichier" type="file" accept="image/*" onChange={handleFileChange} />
    </Button>

    

    </div>

  </div>
<Box display="flex">


  {picture.cropperOpen && (
    <Box display="block">
      <AvatarEditor
        ref={setEditorRef}
        image={picture.img}
        width={200}
        height={200}
        border={50}
        borderRadius={100}
        color={[255, 255, 255, 0.6]} // RGBA
        rotate={0}
        scale={picture.zoom}
      />
      <Slider
        aria-label="raceSlider"
        value={picture.zoom}
        min={1}
        max={10}
        step={0.1}
        onChange={handleSlider}
      ></Slider>
      <div className="btnEnregistrerCroppedImg">
        <Button variant="contained" onClick={handleCancel}>
          Annuler
        </Button>
        <Button onClick={handleSave}>Enregistrer</Button>
      </div>
    </Box>
  )}
</Box>



</div>
);
};

export default AvatarChange;
