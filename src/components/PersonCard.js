import "../styles.css";
import "./FillField";
import "./InformationView";

export class PersonCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <h1 class="display-4">Person card</h1>
        <hr class="my-4">
        <div class="row">
          <div class="col-6">
           <fill-field></fill-field>
          </div>
          <div class="col-6">
            <information-view></information-view>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("person-card", PersonCard);
