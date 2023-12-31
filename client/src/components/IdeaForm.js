class IdeaForm {
    constructor(){
        this._formModal = document.querySelector("#form-modal")
       
    }

    addEventListeners(){
        this._form.addEventListener("submit", this.handleSubmit.bind(this))
    }

    handleSubmit(e){
        e.preventDefault();
        const idea = {
          text: this._form.elements.text.value,
          tag: this._form.elements.tag.value,
          username: this._form.elements.username.value,
        };
        console.log(idea);

        // Clear fields
        this._form.elements.text.value = "";
         this._form.elements.tag.value = "";
          this._form.elements.username.value = "";

          document.dispatchEvent(new Event("closeModal"));
    }

    render(){
        this._formModal.innerHTML = ` <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag" name="tag">Tag</label>
            <select name="tag" id="tag">
            <option value="technology">Technology</option>
            <option value="software">Software</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
             <option value="finance">Finance</option>
              <option value="lifestyle">Lifestyle</option>

            </select>
           
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>`;
        //need to render form before running event listeners on it//
         this._form = document.querySelector("#idea-form");
         this.addEventListeners();
    }
}

export default IdeaForm;