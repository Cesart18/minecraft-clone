import { 
    grassImg,
    dirtImg,
    glassImg,
    logImg,
    woodImg
 } from "./images";

import { TextureLoader, RepeatWrapping, NearestFilter } from 'three';

const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;
dirtTexture.wrapS = RepeatWrapping;
dirtTexture.wrapT = RepeatWrapping;
dirtTexture.magFilter = NearestFilter;
logTexture.wrapS = RepeatWrapping;
logTexture.wrapT = RepeatWrapping;
logTexture.magFilter = NearestFilter;
glassTexture.wrapS = RepeatWrapping;
glassTexture.wrapT = RepeatWrapping;
glassTexture.magFilter = NearestFilter;
woodTexture.wrapS = RepeatWrapping;
woodTexture.wrapT = RepeatWrapping;
woodTexture.magFilter = NearestFilter;


export { groundTexture, dirtTexture, logTexture, glassTexture, woodTexture }

