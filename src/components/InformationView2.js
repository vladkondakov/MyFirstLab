import "../styles.css";
import "./FillField";

export class InformationView2 extends HTMLElement {
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
    console.log("Hi there!");
    var info = localStorage.getItem("my-person-card");
    console.log(info);
    console.log("Name: ", info.Name);
    this.innerHTML = `
      <div class="card">
        <h1>${info.Name}</h1>
      </div>
    `;
  }
}

customElements.define("inf-view", InformationView2);
