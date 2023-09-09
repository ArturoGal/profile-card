const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="profile-card/styles.css">

<div class="profile-card">
  <p id="kitNumber"></p>
  <img id="photo"/>
  <div>
    <p id="name"></p>
    <div id="details">
      <div class="info-slot">
        <p>Position: </p> <p id="position"> </p>
      </div>
      <div class="info-slot">
        <p>Country: </p> <p id="country"> </p>
      </div>
      <div class="info-slot">
        <p>Age: </p> <p id="age"> </p>
      </div>
      <div class="info-slot">
        <p>Goals: </p> <p id="goals"> </p>
      </div>
      <div class="info-slot">
        <p>Assists: </p> <p id="assists"> </p>
      </div>
    </div>
  </div>
</div>`;

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.assignAttributeValueToElement('kitNumber');
    this.assignAttributeValueToElement('name');
    this.assignAttributeValueToElement('position');
    this.assignAttributeValueToElement('country');
    this.assignAttributeValueToElement('age');
    this.assignAttributeValueToElement('goals');
    this.assignAttributeValueToElement('assists');

    this.assignPhotoSrc();
  }

  assignAttributeValueToElement(id) {
    const element = this.shadowRoot.getElementById(id);
    if (element) {
      element.innerHTML = this.getAttribute(id);
    }
  }

  assignPhotoSrc() {
    const photoImg = this.shadowRoot.querySelector('img#photo');
    if (photoImg) {
      photoImg.src = this.getAttribute('photo');
    }
  }
}

window.customElements.define('profile-card', ProfileCard);