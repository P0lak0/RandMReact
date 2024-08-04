import { Component } from "react";
import { CharacterItem } from "../components/presentational/CharacterItem";

export default {
    title: "CharacterItem",
    component: CharacterItem,
};

export const Default = {
    args: {
    character:{
        status: "Alive",
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        species: "Human",
        gender: "Male",
        location: {
            name: "Earth",
        },
    }
  },
};

export const Dead = {
    args: {
    character:{
        status: "Dead",
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        species: "Human",
        gender: "Male",
        location: {
            name: "Earth",
        },
    }
  },
};