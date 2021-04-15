---
title: DH2650 Development Blog
date: "2021-04-15"
description: "Development blog for the project in KTH course DH2650 Computer Game Design."
---

Members of group 4:
- Erik Westergren ewesterg@kth.se
- Kok Siang Ng ksng@kth.se
- Max Truedsson maxtru@kth.se 
- Ao Xu aox@kth.se
- Zezhe Huang zezhe@kth.se

## Introduction

We are going to design a game with a proper Game Design Document(GDD).

At the very first brainstorm of the ideas, we wrote lots of genres and themes we like and played before. Besides the popular ones such as platformer, rogue-like, fantasy and sci-fi, we are stuck to come up with more game types. It would be better to have a reference at such a time.

Useful links:
- Game genres: https://www.gamedesigning.org/gaming/video-game-genres/
- Game themes: https://backtogames.com/pages/game-themes

In addition to the game itself, we also talked about the technical stuff, which was finally determined to be a combination of Unity, Git and Blender. We all have more or less experience of making a game with different frameworks or engines, but it sould be quicker for us to use a widely-used one because of tons of accessible [learning resources](https://learn.unity.com/) and [game assets](https://assetstore.unity.com/).

Finally, we had our idea with a background of pirates - ***Yarr-Harr!***. (There is Scandinavia, isn't it? :D) It would be rouge-like first-person game with the main mechanics of harpooning, which is possible to grasp something, pull the character towards the grasped thing, as well as attack enemies. To enrich the game, types of terrains, enemies, chests and types of levels (exploring combats or puzzles) would be designed.

![pirates](./pirates.png)

## Rough Skeleton

![prototype-v1](./prototype-v1.png)

Before the proposal presentation, we already had a simple prototype as shown above with cubes, trees, the harpoon and a cylinder as the character. So when I got started, I picked the missing part - the level hub but it played an important role as a connection among different level scenes.

With free models and map image found online, I put a plane with the image as texture, and put the boat model so that the player can control it to choose different levels. In technical aspect, it was not quite difficult to implement with the help of tutorials, which inspired me to create a simple sphere as a prefab for the level pins. Indicating user inputs for movements and level selections, the level hub could work with the minimal implementation.

![level-hub](./level-hub.png)

Then we had all the basic seperate scenes: basic puzzle scene, a level hub scene. To cascade scenes together, at lease we needed:
- a main menu to start with,
- loading scenes from the level hub, 
- and a pause menu in level scenes.

It was nice that we could easily find related tutorials to follow and create simple menus without fancy styles. Game starts with the main menu, which leads to further optional settings, the level hub or quitting the game. For the pause menu, a game object with scripts detected the input of <kbd>Esc</kbd> to transit to the transparent menu, which allows players to go back to the level hub or the main menu.

Tutories I took:
- Level selection: https://bigbad.xyz/blog/how-to-make-a-level-select-like-in-super-mario-world
- Start menu: https://www.youtube.com/watch?v=zc8ac_qUXQY
- Pause menu: https://www.youtube.com/watch?v=JivuXdrIHK0&t=435s


