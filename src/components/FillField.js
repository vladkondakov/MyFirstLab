import "../styles.css";

export class FillField extends HTMLElement {
  connectedCallback() {
    this.render();

    this.querySelector("button").addEventListener("click", () => {
      var data = {};
      var elements = this.querySelectorAll("input");

      elements.forEach(item => {
        data[item.name] = item.value;
      });
      this.parentElement.parentElement.children[1].children[0].setAttribute(
        "isOpen",
        "true"
      );
      data[
        "isOpen"
      ] = this.parentElement.parentElement.children[1].children[0].getAttribute(
        "isOpen"
      );
      localStorage.setItem("my-person-card", JSON.stringify(data));
    });
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
        </div>
        <input type="text" name="Name" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Nickname</span>
        </div>
        <input type="text" name="Nickname" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Surname</span>
        </div>
        <input type="text" name="Surname" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
        </div>
        <input type="text" name="Email" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Phone number</span>
        </div>
        <input type="text" name="Phonenumber" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Course</span>
        </div>
        <input type="text" name="Course" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">About you</span>
        </div>
        <input type="text" name="About" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
    </div>
    <p />
    <button type="submit" class="btn btn-primary btn-lg">Save</button>
    `;
  }
}

customElements.define("fill-field", FillField);
