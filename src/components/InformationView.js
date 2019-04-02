import "../styles.css";

export class InformationView extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  static get observeAttributes() {
    return ["isOpen"];
  }

  render() {
    var info = localStorage.getItem("my-person-card");
    this.innerHTML = `
      <div class="card">
        <h1>${info.Name}</h1>
      </div>
    `;
  }
}

customElements.define("information-view", InformationView);
