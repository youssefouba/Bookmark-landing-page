# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly.
- can be operated by keyboard - important for sighted keyboard-only users, and desktop/laptop screen reader users.
- Close the open accordion when you select another acoordion.


### Screenshot

![](images/Web%20capture_14-6-2022_174544_127.0.0.1.jpeg)


### Links

- Solution URL: [solution URL here](https://github.com/PhoenixDev22/Frontend-Mentor-Bookmark-landing-page)
- Live Site URL: [live site URL here hosted on Netlify](https://bookmark-landing-page-phoenixdev22.netlify.app/)

## My process

- For the tabbable content: The common user experience is a group of visual tabs above a content area, and selecting a different tab changes the content and makes the selected tab more prominent than the others.

- First when I did this it used buttons and <div> with no ARIA attributes and the functionality was like this: 

```

 const allTheTabs =  [...document.querySelectorAll(".tab")];
 const allTheColumnContent =  [...document.querySelectorAll(".features .col-3")];


 allTheTabs.forEach(currentEle => {

     currentEle.addEventListener("click", (e) =>{       
        // update the  active class on the tabs
         allTheTabs.forEach(ele => ele.classList.remove("active")) 
         e.currentTarget.classList.add("active")
         // update the content related tp the tabs
         allTheColumnContent.forEach(ele => ele.classList.remove("opacity-1"))
         document.querySelector(e.currentTarget.dataset.tab).classList.add("opacity-1")
     })
 })

```
**But how can the assistive technology user know that this element is part of a group of related elements?** 


- In order to accomplish , we combine the role ``tab`` with ``tablist`` and elements with ``tabpanel`` to create an interactive group of tabbed content. This combination identifies to assistive technology that the element is part of **group of related elements**. Some assistive technology will provide a count of the number of ``tab`` role elements inside a ``tablist``, and inform users of which tab they currently have targeted. Further, an element with the ``tab`` role should contain the ``aria-controls`` property identifying a corresponding tabpanel (that has a tabpanel role) by that element's ``id``. When an element with the ``tabpanel`` role has focus, or a child of it has focus, that indicates that the connected element with the tab role is the active tab in a tablist. When elements with the tab role are selected or active they should have their ``aria-selected`` attribute set to ``true``. Otherwise, their ``aria-selected`` attribute should be set to ``false``. When a tab is selected or active, its corresponding controlled ``tabpanel`` should have its ``aria-expanded`` attribute set to ``true`` and its ``hidden`` attribute set to ``false``, otherwise the reverse. Considerig these features:  

  - Elements with the role `` tab`` must be a child of an element with the ``tablist`` role,   having an ``aria-label`` which labels  it for assistive technology. 
  - Each ``tab`` is a ``button`` with these attributes (``aria-selected , aria-controls, id``). 
  - Each ``tabpanel`` has these attributes (``aria-expanded, aria-labelldeby, tabindex= "0",id , hidden``)
  
  - For controlling the tab functionality for elements with role ``tab`` , it is recommended to set all non-active elements to ``tabindex="-1"`` and set the active one to ``tabindex="0"``.
  - All the tabpanel have `tabindex= 0` to make them tabbable. `tabindex` set the order in which focus is moved on the page as a user tabs through the content.
  **To get the required features for accessibile tabbed content for assistive tech user. 

- Making Accessible accordions using ``<details>`` and ``<summary>``. 
    - With the ``<details>`` element having very good browser and accessibility support, We no longer need to rely on JavaScript to make an accessible   accordion. All of that is built right into the element. However, for those (now rare) occasions where we can't use this element.


- After checking the lighthouse report, there is ``Background and foreground colors do not have a sufficient contrast ratio. `` issue, I'm aware of as following the design styles.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Js
- Using the lighthouse.
- Using Autoprefixer installed via npm and this setup in package.json.(I have removed the extra files.)



### What I learned

- Adding `skip to main content ` link as keyboard users have to navigate through each link at the first of the page in the menu to get to the main content. As there aren't many links in the naviagtion but just want to implement it in the project.
- Accessisible tabbable content.
- Accessisible  accordions.
- Adding `rel="noopener" ` or `rel="noreferrer"` to ` target="_blank"`links to avoid performances and security issues.


### Continued development

- Focusing on accessiblity. 
- Learning BEM convention.
- Adding minified files.
- Minimizing the code.
- Adding more animations to the page.


### Useful resources

- [MDN ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) - This helped me to accomplish an accessible tabbed content.
- [Kevin Powell](https://www.kevinpowell.co/) - I do think that a *good* resource is really the fastest way to level up a specific skill.


## Author

- Frontend Mentor - [@PhoenixDev22](https://www.frontendmentor.io/profile/PhoenixDev22)
- Github - [PhoenixDev22](https://github.com/PhoenixDev22?tab=repositories)

