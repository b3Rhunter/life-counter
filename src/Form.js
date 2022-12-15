import React from "react";
import Fab from '@mui/material/Fab';

export default function Form() {
  const [allMemeData, setMemeAllImages] = React.useState({});
  const [imgState, setImageState] = React.useState(false);
  /*   const [url, setImage] = React.useState("");
   */ const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  React.useEffect(() => {
    async function getMemesApi() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemeAllImages(data);
    }
    getMemesApi();
  }, []);


  function handleClick() {
    const memesArray = allMemeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomIndex].url;
    setImageState(true);
    setMeme({
      ...meme,
      randomImage: imgUrl
    });
  }

  return (
    <div className="memeCont">
      <div>
        <div className="btn">
          <Fab  size="large" style={{color: "#fff", backgroundColor: "#0f1317", fontSize: "1.5em"}} onClick={handleClick}>
            🤡
          </Fab>
        </div>
      </div>
      <div className="meme"  style={{ display: imgState ? "block" : "none" }}>
        <img className="memeImg" src={meme.randomImage} alt="meme" />
      </div>
    </div>
  );
}

/*
    if (url !== "") {
      setMeme({
        topText: "",
        bottomText: "",
        randomImage: url
      });
      return;
    }
   */