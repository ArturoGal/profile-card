const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="profile-card/styles.css">

<div class="profile-card">
  <p class="kit-number"></p>
  <img class="photo"/>
  <div>
    <p class="name"></p>
    <div class="details">
      <div class="info-slot">
        <p class="position-label">Position: </p> <p class="position"> </p>
      </div>
      <div class="info-slot">
        <p class="country-label">Country: </p> <p class="country"> </p>
      </div>
      <div class="info-slot">
        <p class="age-label">Age: </p> <p class="age"> </p>
      </div>
      <div class="info-slot">
        <p class="goals-label">Goals: </p> <p class="goals"> </p>
      </div>
      <div class="info-slot">
        <p class="assists-label">Assists: </p> <p class="assists"> </p>
      </div>
    </div>
  </div>
</div>`;

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.assignAttributeValueToElement('kit-number');
    this.assignAttributeValueToElement('name');
    this.assignAttributeValueToElement('position');
    this.assignAttributeValueToElement('country');
    this.assignAttributeValueToElement('age');
    this.assignAttributeValueToElement('goals');
    this.assignAttributeValueToElement('assists');

    this.assignPhotoSrc();
  }

  assignAttributeValueToElement(attribute) {
    const element = this.shadowRoot.querySelector(`.${attribute}`);
    if (element) {
      element.innerHTML = this.getAttribute(attribute);
    }
  }

  assignPhotoSrc() {
    const photoImg = this.shadowRoot.querySelector('img.photo');
    if (photoImg) {
      photoImg.src = this.getAttribute('photo');
    }
  }
}

window.customElements.define('profile-card', ProfileCard);