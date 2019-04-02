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

  getLocalStorageData() {
    const info = localStorage.getItem("my-person-card");
    const infoData = info
      ? JSON.parse(info)
      : {
          Name: "",
          Nickname: "",
          Email: "",
          Phonenumber: "",
          Course: "",
          About: ""
        };
    return infoData;
  }

  render() {
    const info = this.getLocalStorageData();
    this.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${info.Name} ${info.Surname}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${info.Nickname}</h6>
        </div>    
      </div>
    `;
  }
}

customElements.define("information-view", InformationView);
