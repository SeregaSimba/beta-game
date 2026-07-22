import { createEl as createElement } from "../../utils/element-utilities";
// import { useCustomerStore } from '../../store/customer-store';
import "./about-style.scss";

export default function createAboutPage(container: HTMLElement): void {
  container.innerHTML = "";

  const profileContainer = createElement({
    tag: "div",
    classes: [
      "about-page",
      "container",
      "mx-auto",
      "bg-white",
      "rounded-lg",
      "shadow-xl",
      "mt-30",
      "p-6",
      "bg-white",
      "shadow-md",
      "-z-0",
      "relative",
    ],
    parent: container,
  });

  createElement({
    tag: "h1",
    text: "About Us",
    classes: [
      "text-3xl",
      "font-bold",
      "mb-6",
      "z-30",
      "text-center",
      "text-gray-800",
      "before:content-['']",
      "before:absolute",
      "before:h-6",
      "before:w-36",
      "before:bg-yellow-400",
      "before:-z-1",
      "login-name",
    ],
    parent: profileContainer,
  });

  //   const { customer } = useCustomerStore.getState();

  //   if (!customer) {
  //     createElement({
  //       tag: 'p',
  //       text: 'Please log in to view your profile.',
  //       classes: ['text-gray-600', 'text-center'],
  //       parent: profileContainer,
  //     });
  //     return;
  // };

  const containerAbout = createElement({
    tag: "div",
    classes: ["container-about"],
    parent: profileContainer,
  });

  const titleAbout = createElement({
    tag: "h2",
    text: "Bubble Tea Shop",
    classes: ["title-about"],
  });
  containerAbout.append(titleAbout);

  const pIntroduction = createElement({
    tag: "p",
    text: "An interactive web application for online ordering of Bubble Tea drinks, with modern e-commerce integration.",
    classes: ["p-introduction"],
  });
  containerAbout.append(pIntroduction);

  const divAboutInfoCompanyContainer = createElement({
    tag: "div",
    classes: ["about-info-company"],
  });
  containerAbout.append(divAboutInfoCompanyContainer);

  const prefaceContainer = createElement({
    tag: "div",
    classes: ["preface-container"],
  });
  divAboutInfoCompanyContainer.append(prefaceContainer);

  const containerTextPreface = createElement({
    tag: "div",
    classes: ["container-text-preface"],
  });
  prefaceContainer.append(containerTextPreface);

  const prefaceH3 = createElement({
    tag: "h3",
    text: "Bubble Tea Shop is a non-profit educational project that simulates an online store for making and ordering bubble tea. The goal of the project is to provide users with an interactive experience of creating unique drinks, choosing from a variety of options.: type of tea, milk, syrups, fillings, sweetness level and temperature.",
    classes: ["preface-h3"],
  });
  containerTextPreface.append(prefaceH3);

  const descriptionUl = createElement({
    tag: "ul",
    classes: ["description-ul"],
  });
  containerTextPreface.append(descriptionUl);

  const titleDescription = createElement({
    tag: "h3",
    text: "Main features",
    classes: ["title-description"],
  });
  descriptionUl.append(titleDescription);

  const containerImgPreface = createElement({
    tag: "div",
    classes: ["container-img-preface"],
  });
  prefaceContainer.append(containerImgPreface);

  const ImgPreface = createElement({
    tag: "img",
    classes: ["ImgPreface"],
    attributes: {
      src: "../src/assets/images/about-1.webp",
    },
  });
  containerImgPreface.append(ImgPreface);

  const pointOne = createElement({
    tag: "li",
    text: "* Drink Designer: flexibly customize ingredients to create a personalized recipe.",
    classes: ["point"],
  });
  descriptionUl.append(pointOne);

  const pointTwo = createElement({
    tag: "li",
    text: "* User authentication: registration and login to save the order history.",
    classes: ["point"],
  });
  descriptionUl.append(pointTwo);

  const pointThree = createElement({
    tag: "li",
    text: "* Shopping cart and checkout: user-friendly interface for managing selected items.",
    classes: ["point"],
  });
  descriptionUl.append(pointThree);

  const pointFour = createElement({
    tag: "li",
    text: "* Order history: viewing and repeating previous purchases.",
    classes: ["point"],
  });
  descriptionUl.append(pointFour);

  const pointFive = createElement({
    tag: "li",
    text: "* Responsive design: adapts to different devices, from mobile to desktop.",
    classes: ["point"],
  });
  descriptionUl.append(pointFive);

  const technologiesTitleContainer = createElement({
    tag: "div",
    classes: ["technologies-title-container"],
  });
  divAboutInfoCompanyContainer.append(technologiesTitleContainer);

  const containerTechnologiesText = createElement({
    tag: "div",
    classes: ["container-technologies-text"],
  });
  technologiesTitleContainer.append(containerTechnologiesText);

  const technologiesTitleH3 = createElement({
    tag: "h3",
    text: "Technology and architecture",
    classes: ["technologies-Title-h3"],
  });
  containerTechnologiesText.append(technologiesTitleH3);

  const technologiesTitleP = createElement({
    tag: "p",
    text: "The project is built using Commercetools, a modern e-commerce platform that provides scalability and flexibility. Interaction with the platform is implemented through a productive stack of frontend technologies with an emphasis on data entry security and user interface convenience.",
    classes: ["technologies-title-p"],
  });
  containerTechnologiesText.append(technologiesTitleP);

  const containerImgTechnologies = createElement({
    tag: "div",
    classes: ["container-img-technologies"],
  });
  technologiesTitleContainer.prepend(containerImgTechnologies);

  const imgTechnologies = createElement({
    tag: "img",
    classes: ["img-technologies"],
    attributes: {
      src: "../src/assets/images/about-2.webp",
    },
  });
  containerImgTechnologies.append(imgTechnologies);

  const objectivesProjectTitleContainer = createElement({
    tag: "div",
    classes: ["objectives-project-title-container"],
  });
  divAboutInfoCompanyContainer.append(objectivesProjectTitleContainer);

  const objectivesProjectTitleUl = createElement({
    tag: "ul",
    classes: ["objectives-project-title-ul"],
  });
  objectivesProjectTitleContainer.append(objectivesProjectTitleUl);

  const titleObjectives = createElement({
    tag: "h3",
    text: "Project objectives",
    classes: ["title-objectives"],
  });
  objectivesProjectTitleUl.append(titleObjectives);

  const objectivesProjectTitleOne = createElement({
    tag: "li",
    text: "* Demonstration of the practical application of modern technologies in e-commerce.",
    classes: ["objectives-project-title"],
  });
  objectivesProjectTitleUl.append(objectivesProjectTitleOne);

  const objectivesProjectTitleTwo = createElement({
    tag: "li",
    text: "* Training and development of skills in developing full-fledged web applications.",
    classes: ["objectives-project-title"],
  });
  objectivesProjectTitleUl.append(objectivesProjectTitleTwo);

  const objectivesProjectTitleThree = createElement({
    tag: "li",
    text: "* Training and development of skills in developing full-fledged web applications.",
    classes: ["objectives-project-title"],
  });
  objectivesProjectTitleUl.append(objectivesProjectTitleThree);

  const containerHistory = createElement({
    tag: "div",
    classes: ["container-history"],
  });
  divAboutInfoCompanyContainer.append(containerHistory);

  const historyCreation = createElement({
    tag: "h3",
    text: "history of creation",
    classes: ["history-creation"],
  });
  containerHistory.append(historyCreation);

  const historyTextP = createElement({
    tag: "p",
    text: "There will be a history of the creation of the application, which we were inspired by.",
    classes: ["history-text-p"],
  });
  containerHistory.append(historyTextP);

  const textThanks = createElement({
    tag: "p",
    text: "Words of gratitude (if necessary)",
    classes: ["text-thanks"],
  });
  containerHistory.append(textThanks);

  const containerImgFooter = createElement({
    tag: "div",
    classes: ["container-img-footer"],
  });
  containerHistory.append(containerImgFooter);

  const imgFooter = createElement({
    tag: "img",
    classes: ["img-Footer"],
    attributes: {
      src: "../src/assets/images/about-3.webp",
    },
  });
  containerImgFooter.append(imgFooter);
}
// сдеать футер поменть имена сделат ссылку на дискорд и сделать даптивным решить вопрос с зоной соприкосновения ссылок

// проверка работы №1

// 1 пункт реализовано 20 балов

// 2 пункт реализовано 20 балов

// 3 пункт реализовано 25 балов

// 4 пункт реализовано 20 балов

// 5 пункт реализовано 15 балов

// 6 пункт  реализовано 15 балов

// 7 пункт реализовано 10 балов

// 8 пункт реализовано 5 балов

// 9 пункт реализовано 25 балов

// 10 пункт реализовано 20 балов

// 11 пункт реализовано 10 балов

// 12 пункт реализовано 15 балов

// 13 пункт реализовано 15 балов

// 14 пункт к сожалению этот пункт не реализован 0 балов

// 15 пункт к сожалению этот пункт не реализован 0 балов

// 16 пункт реализовано 5 балов

// 17 пункт реализовано 5 балов

// 18 пункт реализовано 5 балов

// 19 пункт реализовано 15 балов

// 20 пункт к сожалению этот пункт не реализован 0 балов

// 21 пункт реализовано 15 балов

// 22 пункт реализовано 5 балов

// 23 пункт реализовано 5 балов
