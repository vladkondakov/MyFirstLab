import "../styles.css";

export class InformationView extends HTMLElement {
  connectedCallback() {
    const info = this.getLocalStorageData();
    if (info.isOpen) {
      this.render();
    } else {
      console.log("LocalStorage is empty");
    }
  }

  static get observeAttributes() {
    return ["isOpen"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
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
    console.info("Hi there!");
    const info = this.getLocalStorageData();
    this.innerHTML = `
      <div class="container">
        <div class="card" style="width:300px">
        <img class="card-img-top" src="https://winklevosscapital.com/wp-content/uploads/2014/10/2014-09-16-Anoynmous-The-Rise-of-Personal-Networks.jpg" alt="Profile picture" style="width:100%">
          <div class="card-body">
            <h4 class="card-title">${info.Name} ${info.Surname}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${info.Nickname}</h5>
            <p />
            <p class="card-text font-weight-light">${info.Phonenumber}</p>
            <p class="card-text font-weight-light">${info.Email}</p>
            <p class="card-text font-weight-lighter">${info.Course}-ДБ</p>
            <div class="card card-body font-italic">${info.About}</div>
          </div>    
        </div>
      </div>
    `;
  }
}

customElements.define("information-view", InformationView);
